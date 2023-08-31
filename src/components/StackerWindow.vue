<template>

  <div :key="resetWindow">
    <div class="flex justify-center">
      <span class="text-white text-2xl font-bold">STACKER</span>
    </div>

    <div class="flex justify-center">
      <div class="pt-0.5 border border-gray-900" :class="bgGap">

        <div :id="'grid-' + (y - 1)" v-for="y in height" :key="y" :class="getColHeight()" class="mb-0.5 mr-0.5">
          <div class="inline-block ml-0.5" :class="getCubeSize() + ' ' + this.bgBack" v-for="x in width" :key="x"
               :id="(y - 1) + '-' + x"/>
        </div>

      </div>
    </div>


    <div class="pt-3 pb-3">
      <div v-if="showEndScreen" :key="showEndScreen">
        <div class="flex justify-center">
          <span class="text-white text-xl font-bold">{{ endText }}</span>
        </div>

        <div class="flex justify-center pt-1">
          <button id="resetButton" class="text-white font-bold px-3 py-2 rounded-xl" @click="reset"
                  :class="getButtonColour()">
            Reset
          </button>
        </div>
      </div>

      <div v-else>
        <div class="flex justify-center" :key="pauseButton">
          <button id="stackButton" class="text-white font-bold w-20 h-20 rounded-full text-xl" @click="stopCRow"
                  :class="getButtonColourPause()">
            {{ stackText }}
          </button>
        </div>

      </div>

      <div class="flex justify-center pt-4">
        <button class="text-white font-bold px-3 py-2 rounded-xl" @click="showSettings" :class="getButtonColour()">
          {{ settingsText }}
        </button>
      </div>

    </div>

  </div>


  <div v-if="showSettingsScreen" :key="showSettingsScreen">

    <div class="flex justify-center items-center">
      <span class="text-white mb-1 pr-1">Size:</span>
      <input type="range" min="1" max="6" class="slider w-24" id="sizeSlider" v-model="settingsGameSize">
    </div>

    <div class="flex justify-center items-center pt-1">
      <span class="text-white mb-1 pr-1">Width:</span>
      <input type="range" min="5" max="12" class="slider w-24" id="widthSlider" v-model="settingsWidth">
    </div>

    <div class="flex justify-center items-center pt-1">
      <span class="text-white mb-1 pr-1">Height:</span>
      <input type="range" min="10" max="20" class="slider w-24" id="heightSlider" v-model="settingsHeight">
    </div>

    <div class="flex justify-center items-center pt-1">
      <span class="text-white mb-1 pr-1">Theme:</span>
      <input type="range" min="1" max="7" class="slider w-24" id="themeSlider" v-model="settingsTheme">
    </div>

    <div class="flex justify-center items-center pt-1">
      <span class="text-white mb-1 pr-1">Difficulty:</span>
      <input type="range" min="1" max="9" class="slider w-24 " id="diffSlider" v-model="settingsTimerBaseSpeed">
    </div>

    <div class="flex justify-center items-center pt-2">
      <button class="text-white font-bold px-3 py-2 rounded-xl mr-2" @click="muteSound" :class="getButtonColour()">
        {{ settingsMuteText }}
      </button>

      <button class="text-white font-bold px-3 py-2 rounded-xl ml-2" @click="resetSettings" :class="getButtonColour()">
        Reset
      </button>
    </div>


  </div>
</template>

<script>
import soundMove from "../assets/move.mp3";
import soundBlink from "../assets/blinking.mp3";
import soundWin from "../assets/win.mp3";
import soundGameOver from "../assets/gameover.mp3";


export default {
  name: "StackerWindow",
  data() {
    return {
      // Size Data
      height: 15,
      width: 7,
      cubeSize: 6,

      // Core game data
      resetWindow: false,
      gameBoard: null,
      gameCenter: 0,
      cRowSize: 3,
      showEndScreen: false,
      pauseButton: false,
      blinkCounter: 0,
      endText: "GAME OVER",
      stackText: "Stack!",
      settingsText: "Settings",
      settingsMuteText: "Mute",

      // Timer
      timerInterval: null,
      timerTick: 350,
      timerBaseSpeed: 350,
      timerSpeedAdj: 0,

      // Positions
      cStart: 0,
      cLevel: 0,
      cRight: true,

      // Demo vars
      dPos: 0,
      dContents: null,
      inDemo: true,

      // Settings
      showSettingsScreen: false,
      settingsGameSize: 1,
      settingsHeight: 15,
      settingsWidth: 7,
      settingsTimerBaseSpeed: 5,
      settingsTheme: 1,
      settingsMute: false,

      // Theme
      bgBack: "bg-stackBack",
      bgFor: "bg-stackFor",
      bgGap: "bg-stackGap",
    }
  },
  mounted() {
    // Map board to 2D array
    this.resetBoard();

    // Listen to space
    document.addEventListener("keyup", this.handleSpace);

    this.gameCenter = Math.round(this.width / 2);
    this.cStart = this.gameCenter - 1;

    this.cLevel = this.height - 1;

    this.stackText = "Start";

    // Get settings from vuex store
    this.settingsGameSize = this.$store.getters.settingsGameSize;
    this.settingsHeight = this.$store.getters.settingsHeight;
    this.settingsWidth = this.$store.getters.settingsWidth;
    this.settingsTimerBaseSpeed = this.$store.getters.settingsTimerBaseSpeed;
    this.settingsTheme = this.$store.getters.settingsTheme;
    this.settingsMute = this.$store.getters.settingsMute;

    // Manually set mute text. This could be more automatic but for such a small button i don't think there is a point
    this.settingsMuteText = this.settingsMute ? "Unmute" : "Mute";

    this.reloadWindow();

    // Finally start demo code
    this.runDemo();
  },
  beforeUnmount() {
    document.removeEventListener("keyup", this.handleSpace);
  },
  methods: {
    moveCRow() {
      if (this.pauseButton) this.pauseButton = false;
      if (this.cRowSize === 0) this.stopInterval();

      this.playSound(soundMove);

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

      if (this.inDemo) {
        this.runGame(true);
        this.inDemo = false;

        return;
      }

      this.pauseButton = true;
      this.stopInterval();

      this.cRight = Math.random() >= 0.5;

      // If you're on the lowest level, return
      if (this.cLevel === this.height - 1) {

        // We only need to actually check if the cRow is out of bounds once.
        // Otherwise the checker gets it
        if (this.gameBoard[this.cLevel][0] === 1 || this.gameBoard[this.cLevel][this.width + 1] === 1) {
          this.cRowSize -= 1;
        }

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
      for (let x = 0; x < this.width + 1; x++) {
        this.setActive(level, x, this.gameBoard[level][x] === 1)
      }
    },
    setActive(y, x, active = true) {
      if (x < 1 || x > this.width) {
        return;
      }

      let elem = this.convertToId(y, x);
      let cube = document.getElementById(elem);

      if (cube == null) {
        return;
      }

      if (active) {
        cube.classList.replace(this.bgBack, this.bgFor);
      } else {
        cube.classList.replace(this.bgFor, this.bgBack);
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

      if (this.blinkCounter % 2 === 0) {
        if (this.cRowSize > 0) {
          this.playSound(soundBlink);
        }
      }

      if (this.blinkCounter++ >= 7) {
        this.stopInterval();

        if (this.cRowSize > 0) {
          for (let x = 0; x < cubes.length; x++) {
            this.gameBoard[level][cubes[x]] = 0;
          }

          this.displayFromArray(this.cLevel);
          this.displayFromArray(this.cLevel + 1);

          this.runGame();
        } else {
          this.showEndScreen = true;
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

      this.dPos = 0;
    },
    convertToId(y, x) {
      return y + "-" + x;
    },
    getColHeight() {
      return "h-" + this.cubeSize;
    },
    getCubeSize() {
      return "w-" + this.cubeSize + " h-" + this.cubeSize;
    },
    runGame(init = false) {
      this.stopInterval();

      if (init) {
        this.resetBoard();

        this.stackText = "Stack!";
        this.settingsText = "Stop";

        this.gameBoard[this.height - 1][this.gameCenter - 1] = 1;
        this.gameBoard[this.height - 1][this.gameCenter] = 1;
        this.gameBoard[this.height - 1][this.gameCenter + 1] = 1;

        this.displayFromArray(this.height - 1);
      }

      this.timerInterval = setInterval(() => {
        this.moveCRow();
      }, this.timerTick);
    },
    upDifficulty() {
      let ind = ((this.height - 1) - this.cLevel) / (this.height - 1);

      // The closer ind is to 1, the closer it is to the top

      this.timerTick = Math.max(this.timerBaseSpeed * (1 - ind), 50 * (1 - this.timerSpeedAdj));

      let adj = this.timerSpeedAdj / 2;

      if (ind > (0.60 - adj)) {
        if (this.cRowSize === 2) {
          this.gameBoard[this.cLevel - 1][this.cStart + this.cRowSize - 1] = 0;

          this.cRowSize--;
        }
      } else if (ind > (0.25 - adj)) {
        if (this.cRowSize === 3) {
          this.gameBoard[this.cLevel - 1][this.cStart + this.cRowSize - 1] = 0;

          this.cRowSize--;
        }
      }
    },
    stopGame(death) {
      this.stopInterval();
      this.showEndScreen = true;

      if (death) {
        this.playSound(soundGameOver);
        this.endText = "GAME OVER";

      } else {
        this.playSound(soundWin);
        this.endText = "YOU WIN";
      }
    },
    reset() {
      this.resetBoard();

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

      this.endText = "GAME OVER";
      this.stackText = "Stack!";
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
    resetBoard() {
      this.gameBoard = [];

      for (let x = 0; x < this.height; x++) {
        let row = [];

        for (let y = 0; y < (this.width + 2); y++) {
          row.push(0);
        }
        this.gameBoard.push(row);

        this.displayFromArray(x);
      }
    },

    // DEMO Functions
    runDemo() {
      this.stopInterval();
      this.resetBoard();

      this.dContents = [
        [1, 1, 1],
        [1, 0, 0],
        [1, 1, 1],
        [0, 0, 1],
        [1, 1, 1],
        [0, 0, 0],

        [1, 1, 1],
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
        [0, 0, 0],

        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
        [1, 0, 1],
        [1, 0, 1],
        [0, 0, 0],

        [1, 1, 1],
        [1, 0, 0],
        [1, 0, 0],
        [1, 0, 0],
        [1, 1, 1],
        [0, 0, 0],

        [1, 0, 1],
        [1, 0, 1],
        [1, 1, 0],
        [1, 0, 1],
        [1, 0, 1],
        [0, 0, 0],

        [1, 1, 1],
        [1, 0, 0],
        [1, 1, 1],
        [1, 0, 0],
        [1, 1, 1],
        [0, 0, 0],

        [1, 1, 0],
        [1, 0, 1],
        [1, 1, 0],
        [1, 0, 1],
        [1, 0, 1],
        [0, 0, 0],

        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ]

      this.timerInterval = setInterval(() => {
        this.advanceDemo();
      }, 500);
    },
    advanceDemo() {
      let w = Math.round(this.width / 2) - 1;
      let h = this.height - 1;

      // Loop through the entire board and set each content to the bottom
      for (let x = 0; x < h; x++) {
        this.gameBoard[x] = Array.from(this.gameBoard[x + 1]);
        this.displayFromArray(x);
      }

      // set the bottom line
      this.gameBoard[h][w] = this.dContents[this.dPos][0];
      this.gameBoard[h][w + 1] = this.dContents[this.dPos][1];
      this.gameBoard[h][w + 2] = this.dContents[this.dPos][2];
      this.displayFromArray(h);

      if (this.dPos >= this.dContents.length - 1) {
        this.dPos = 0
      } else {
        this.dPos++;
      }
    },

    // Settings
    showSettings() {
      if (!this.inDemo) {
        this.reset();
        this.stackText = "Start";
        this.settingsText = "Settings";
        this.pauseButton = false;

        this.stopInterval();
        this.resetBoard();
        this.inDemo = true;

        this.runDemo();

        return;
      }

      this.showSettingsScreen = !this.showSettingsScreen;
      this.settingsText = this.showSettingsScreen ? "Hide" : "Settings";

      if (this.showSettingsScreen) {
        this.stopInterval();
        this.pauseButton = true;

      } else {
        this.runDemo();
        this.pauseButton = false;
      }
    },
    reloadWindow() {
      this.resetWindow = !this.resetWindow;
    },
    getButtonColour() {
      return this.bgBack + " hover:" + this.bgGap;
    },
    getButtonColourPause() {
      if (this.pauseButton) {
        return this.bgBack;
      } else {
        return this.getButtonColour();
      }
    },
    playSound(sound) {
      if (this.settingsMute) return;

      let audio = new Audio(sound);
      audio.play();
    },
    muteSound() {
      this.settingsMute = !this.settingsMute;

      this.settingsMuteText = this.settingsMute ? "Unmute" : "Mute";
    },
    resetSettings() {
      // In theory this could reset the store and force a component reload
      // Buttttt I don't want to make it flash / slightly lazy
      // Sorry
      this.settingsGameSize = 1;
      this.settingsHeight = 15;
      this.settingsWidth = 7;
      this.settingsTimerBaseSpeed = 5;
      this.settingsTheme = 1;
      this.settingsMute = false;

      this.settingsMuteText = "Mute";
    },
    handleSpace(event) {
      // For some reason, if the button doesn't have focus when stopCRow is called everything goes wonky
      // So instead find the button, focus on it and then click it
      if (event.keyCode === 32) {
        let butt = null;

        if (!this.pauseButton) {
          butt = document.getElementById("stackButton");
        }

        if (this.showEndScreen) {
          butt = document.getElementById("resetButton");
        }

        if (butt !== null) {
          butt.focus();
          butt.click();
        }
      }
    }
  },
  watch: {
    settingsGameSize() {
      let newSize = 4;
      this.cubeSize = newSize + (Number(this.settingsGameSize) * 2);

      this.reloadWindow();

      this.$store.commit("setGameSize", this.settingsGameSize);
    },
    settingsWidth() {
      this.width = Number(this.settingsWidth);

      this.gameCenter = Math.round(this.width / 2);
      this.cStart = this.gameCenter - 1;

      this.resetBoard();
      this.reloadWindow();

      this.$store.commit("setWidth", this.settingsWidth);
    },
    settingsHeight() {
      this.height = Number(this.settingsHeight);
      this.cLevel = this.height - 1;

      this.resetBoard();
      this.reloadWindow();

      this.$store.commit("setHeight", this.settingsHeight);
    },
    settingsTimerBaseSpeed() {
      this.settingsTimerBaseSpeed = Number(this.settingsTimerBaseSpeed);

      let control = this.settingsTimerBaseSpeed - 5;
      let adj = (control * 20) / 100;

      this.timerBaseSpeed = 350 - (200 * adj);
      this.timerSpeedAdj = adj;

      this.timerTick = this.timerBaseSpeed;

      this.$store.commit("setTimerBaseSpeed", this.settingsTimerBaseSpeed);
    },
    settingsTheme() {
      let oldBack = this.bgBack, oldFor = this.bgFor;
      let nBack, nFor, nGap;
      switch (Number(this.settingsTheme)) {
        case 1:
          nBack = "bg-stackBack";
          nFor = "bg-stackFor";
          nGap = "bg-stackGap";
          break;
        case 2:
          nBack = "bg-red-900";
          nFor = "bg-red-300";
          nGap = "bg-red-700";
          break;
        case 3:
          nBack = "bg-purple-900";
          nFor = "bg-purple-300";
          nGap = "bg-purple-700";
          break;
        case 4:
          nBack = "bg-green-900";
          nFor = "bg-green-300";
          nGap = "bg-green-700";
          break;
        case 5:
          nBack = "bg-pink-900";
          nFor = "bg-pink-300";
          nGap = "bg-pink-700";
          break;
        case 6:
          nBack = "bg-yellow-900";
          nFor = "bg-yellow-300";
          nGap = "bg-yellow-700";
          break;
        case 7:
          nBack = "bg-gray-900";
          nFor = "bg-gray-300";
          nGap = "bg-gray-700";
          break;
      }

      this.bgBack = nBack;
      this.bgFor = nFor;
      this.bgGap = nGap;

      for (let y = 1; y < this.gameBoard.length; y++) {
        for (let x = 1; x < this.gameBoard[y].length - 1; x++) {
          let id = this.convertToId(y, x);
          let cube = document.getElementById(id);

          cube.classList.replace(oldBack, this.bgBack);
          cube.classList.replace(oldFor, this.bgFor);
        }
      }

      this.reloadWindow();

      this.$store.commit("setTheme", this.settingsTheme);
    },
    settingsMute() {
      this.$store.commit("setMute", this.settingsMute);
    },
  }
}
</script>

<style scoped>

#stackButton:focus, #resetButton:focus {
  outline: none;
  box-shadow: none;
}
</style>