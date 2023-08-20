<template>

  <div class="flex justify-center">
    <span class="text-white text-2xl font-bold">STACKER</span>
  </div>

  <div id="stackWindow" class="pt-0.5 pl-0.5 bg-stackGap border-stackBack border">
    <div class="">

      <div :id="'grid-' + (y - 1)" v-for="y in height" :key="y" class="grid pb-0.5" :class="getColWidth()">
        <div class="bg-stackBack" :class="getCubeSize()" v-for="x in width" :key="x" :id="(y - 1) + '-' + x"/>
      </div>

    </div>
  </div>


  <div id="stackButt" class="p-3">

    <div v-if="showEndScreen" :key="showEndScreen">
      <div class="flex justify-center">
        <span class="text-white text-3xl font-bold">{{ endText }}</span>
      </div>

      <div class="flex justify-center pt-1">
        <button class="bg-blue-600 hover:bg-blue-800 text-white font-bold py-1 px-2 rounded-xl" @click="reset">
          Reset
        </button>
      </div>
    </div>

    <div v-else class="flex justify-center">
      <button class="text-white font-bold py-2 px-4 rounded-2xl text-xl" @click="stopCRow" :class="{
        'bg-blue-500 hover:bg-blue-600' : !pauseButton,
        'bg-blue-900' : pauseButton,
        }">
        Stack!
      </button>
    </div>

  </div>


</template>

<script>
export default {
  name: "StackerWindow",
  props: {
    height: {
      type: Number,
      default: 15
    },
    width: {
      type: Number,
      default: 7
    },
  },
  data() {
    return {
      // Size Data
      cubeSize: 10,
      gameSize: 20,
      wVal: 0.25,

      // Core game data
      gameBoard: null,
      gameCenter: 0,
      cRowSize: 3,
      timerTick: 350,
      timerInterval: null,
      showEndScreen: false,
      pauseButton: false,
      blinkCounter: 0,
      endText: "GAME OVER",

      // Positions
      cStart: 0,
      cLevel: 0,
      cRight: true,
    }
  },
  mounted() {
    // Map board to 2D array
    this.gameBoard = [];

    for (let x = 0; x < this.height; x++) {
      let row = [];

      for (let y = 0; y < (this.width + 2); y++) {
        row.push(0);
      }
      this.gameBoard.push(row);
    }

    this.gameCenter = Math.round(this.width / 2);
    this.cStart = this.gameCenter - 1;

    this.gameBoard[this.height - 1][this.gameCenter - 1] = 1;
    this.gameBoard[this.height - 1][this.gameCenter] = 1;
    this.gameBoard[this.height - 1][this.gameCenter + 1] = 1;

    this.displayFromArray(this.height - 1);

    this.gameSize = (this.width * (this.cubeSize + 0.70)) * this.wVal;
    document.getElementById('stackWindow').style.width = this.gameSize + "rem";
    document.getElementById('stackButt').style.width = this.gameSize + "rem";

    this.cLevel = this.height - 1;

    this.runGame();
  },
  methods: {
    moveCRow() {
      if (this.pauseButton) this.pauseButton = false;
      if (this.cRowSize === 0) this.stopInterval();

      if (this.cRight) {
        this.gameBoard[this.cLevel][this.cStart] = 0;

        this.cStart++;
      } else {
        this.gameBoard[this.cLevel][this.cStart + this.cRowSize - 1] = 0;

        this.cStart--;
      }

      let endPos = this.cStart + this.cRowSize;

      for (let x = this.cStart; x < endPos; x++) {
        this.gameBoard[this.cLevel][x] = 1;
      }

      // Check sizes
      let zeroCheck = 0, finalCheck = this.width + 2;

      if (this.cRowSize === 1) {
        zeroCheck = 1;
        finalCheck -= 1;
      }

      if (this.cStart <= zeroCheck) {
        this.cRight = true;
      } else if (endPos >= finalCheck) {
        this.cRight = false;
      }

      this.displayFromArray(this.cLevel);
    },
    stopCRow() {
      if (this.pauseButton) return;

      this.pauseButton = true;
      this.stopInterval();

      if (this.gameBoard[this.cLevel][0] === 1 || this.gameBoard[this.cLevel][this.width + 1] === 1) {
        this.cRowSize -= 1;
      }

      this.cRight = Math.random() >= 0.5;

      // If you're on the lowest level, return
      if (this.cLevel === this.height - 1) {
        this.cLevel--;

        this.genRandomCRow(this.cLevel);
        this.displayFromArray(this.cLevel);
        this.runGame();
        return;
      }

      let blinkElem = [];

      // Check the levels here. No need to worry about hitting null, the above sorts that
      for (let x = 0; x < this.width + 2; x++) {
        if (this.gameBoard[this.cLevel][x] === 1 && this.gameBoard[this.cLevel + 1][x] === 0) {
          // Whoops. The case where one thingy is hanging out :(
          this.cRowSize--;
          this.gameBoard[this.cLevel][x] = 0;
          blinkElem.push(x);
        }
      }

      this.upDifficulty();
      this.cLevel--;

      if (this.cRowSize === 0) {
        this.stopGame(true);
        // No need to return since it'll do the whole blinky failure thing
      }

      if (this.cLevel < 0 && this.cRowSize > 0) {
        this.stopGame(false);
        return;
      }

      // Randomly make a new cRow
      if (this.cRowSize > 0) this.genRandomCRow(this.cLevel);

      if (blinkElem.length > 0) {
        // runblink will handle whats done in the other statement
        this.runBlink(blinkElem, this.cLevel + 1);
      } else {
        // No cubes were lost, keep going
        this.displayFromArray(this.cLevel);
        this.displayFromArray(this.cLevel + 1);

        this.runGame();
      }
    },
    displayFromArray(level) {
      for (let x = 0; x < this.height; x++) {
        this.setActive(level, x, this.gameBoard[level][x] === 1)
      }
    },
    setActive(y, x, active = true) {
      if (x < 1 || x > this.width) {
        return;
      }

      let elem = this.convertToId(y, x);
      let cube = document.getElementById(elem);

      if (active) {
        cube.classList.replace('bg-stackBack', 'bg-stackFor');
      } else {
        cube.classList.replace('bg-stackFor', 'bg-stackBack');
      }

    },
    runBlink(cubes, level) {
      this.blinkCounter = 0;

      this.timerInterval = setInterval(() => {
        this.blinkCubes(cubes, level);
      }, 300);

    },
    blinkCubes(cubes, level) {

      for (let x = 0; x < cubes.length; x++) {
        this.gameBoard[level][cubes[x]] = (this.gameBoard[level][cubes[x]] === 0 ? 1 : 0);
      }

      this.displayFromArray(level);

      if (this.blinkCounter++ >= 7) {
        this.stopInterval();

        if (this.cRowSize > 0) {
          for (let x = 0; x < cubes.length; x++) {
            this.gameBoard[level][cubes[x]] = 0;
          }

          this.displayFromArray(this.cLevel);
          this.displayFromArray(this.cLevel + 1);

          this.runGame();
        }
      }
    },
    genRandomCRow(level) {
      this.cStart = Math.round(Math.random() * ((this.width - this.cRowSize) - 1) + 1);

      for (let x = 0; x < this.width + 2; x++) {
        this.gameBoard[level][x] = (x < this.cStart || x > this.cStart + this.cRowSize - 1) ? 0 : 1;
      }
    },
    stopInterval() {
      clearInterval(this.timerInterval);
    },
    convertToId(y, x) {
      return y + "-" + x;
    },
    getColWidth() {
      return "grid-cols-" + this.width;
    },
    getCubeSize() {
      return "w-" + this.cubeSize + " h-" + this.cubeSize;
    },
    runGame() {
      this.stopInterval();

      this.timerInterval = setInterval(() => {
        this.moveCRow();
      }, this.timerTick);
    },
    upDifficulty() {
      let ind = ((this.height - 1) - this.cLevel) / (this.height - 1);

      // This could probably increase the speed based on percentage but eh

      if (ind > 0.84) {
        this.timerTick = 50;
      } else if (ind > 0.72) {
        this.timerTick = 75;
      } else if (ind > 0.55) {
        this.timerTick = 100;

        if (this.cRowSize === 2) {
          this.gameBoard[this.cLevel - 1][this.cStart + this.cRowSize - 1] = 0;

          this.cRowSize--;
        }
      } else if (ind > 0.42) {
        this.timerTick = 150;
      } else if (ind > 0.25) {
        this.timerTick = 200;

        if (this.cRowSize === 3) {
          this.gameBoard[this.cLevel - 1][this.cStart + this.cRowSize - 1] = 0;

          this.cRowSize--;
        }
      } else if (ind > 0.14) {
        this.timerTick = 250;
      } else if (ind > 0.06) {
        this.timerTick = 300;
      }
    },
    stopGame(death) {
      this.stopInterval();
      this.showEndScreen = true;

      if (death) {
        this.endText = "GAME OVER";
      } else {
        this.endText = "YOU WIN";
      }
    },
    reset() {
      for (let x = 0; x < this.height; x++) {
        for (let y = 0; y < (this.width + 2); y++) {
          this.gameBoard[x][y] = 0;
        }

        this.displayFromArray(x);
      }

      this.cLevel = this.height - 1;
      this.cStart = this.gameCenter - 1;

      this.cRowSize = 3;
      this.timerTick = 350;

      this.gameBoard[this.height - 1][this.gameCenter - 1] = 1;
      this.gameBoard[this.height - 1][this.gameCenter] = 1;
      this.gameBoard[this.height - 1][this.gameCenter + 1] = 1;

      this.displayFromArray(this.height - 1);

      this.showEndScreen = false;
      this.runGame();
    },
    printBoard() {
      console.clear();
      let result = "";

      for (let i = 0; i < this.gameBoard.length; i++) {

        for (let j = 0; j < this.gameBoard[i].length; j++) {
          result += this.gameBoard[i][j] + " ";
        }

        result += "\n";
      }

      console.log(result);

      console.log("cStart: " + this.cStart);
      console.log("cRowSize: " + this.cRowSize);
    },
  }
}
</script>

<style scoped>

</style>