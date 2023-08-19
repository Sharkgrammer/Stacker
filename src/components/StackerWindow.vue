<template>


  <div id="stackWindow" class="bg-stackGap">

    <div :id="'grid-' + y" v-for="y in height" :key="y" class="grid pb-0.5" :class="getColWidth()">
      <div class="bg-stackBack" :class="getCubeSize()" v-for="x in width" :key="x" :id="y + '-' + x"/>
    </div>

  </div>

  <div class="bg-red-500 p-2" @click="stopCRow">
    click
  </div>

  <div class="bg-blue-500 p-2" @click="stopInterval">
    click
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
      cRowSize: 3,
      timerTick: 1500,
      timerInterval: null,

      // Positions
      cCenter: 0,
      cLevel: 0,
      cDir: 0, // 0 - Right, 1 - Left
      firstCCenter: 0,
    }
  },
  mounted() {
    this.gameSize = (this.width * (this.cubeSize + 0.5)) * this.wVal;
    document.getElementById('stackWindow').style.width = this.gameSize + "rem";
    console.log(this.gameSize + "rem")

    this.cCenter = Math.round(this.width / 2) - 1;
    this.cLevel = this.height;

    this.moveCRow();

    //this.setActive(this.cLevel, 1);
    //console.log(this.convertToId(this.cLevel, 1));

    this.timerInterval = setInterval(() => {
      this.moveCRow();
    }, this.timerTick);

    // clearInterval(interval);
  },
  methods: {
    moveCRow() {
      // Reset any unactives in here. It should just be cCenter +/- 2
      if (this.cDir === 0) {
        this.cCenter++;

        if (this.cCenter >= this.width) this.cDir = 1;
      } else {
        this.cCenter--;

        if (this.cCenter <= 1) this.cDir = 0;
      }

      console.log(this.convertToId(this.cLevel, this.cCenter) + " -> " + this.cRowSize);

      this.drawCubes(this.cLevel, this.cCenter);
    },
    stopCRow() {
      if ((this.cCenter === 1 || this.cCenter === this.width) && this.cRowSize > 1) {
        this.cRowSize -= 1;
      }

      if (this.cLevel === this.height) {
        this.firstCCenter = this.cCenter;

        this.cLevel -= 1;
        this.drawCubes(this.cLevel, this.cCenter);

        return;
      }

      // Check to see if you are good
      let sizeChange = 0;

      if (!this.isActive(this.cLevel + 1, this.cCenter)){
        sizeChange++;
      }

      if (this.cRowSize >= 2){
        if (!this.isActive(this.cLevel + 1, this.cCenter + 1)){
          sizeChange++;
        }
      }

      if (this.cRowSize >= 3){
        if (!this.isActive(this.cLevel + 1, this.cCenter - 1)){
          sizeChange++;
        }
      }

      if (sizeChange > 0){
        this.cRowSize -= sizeChange;

        // Reset previous rows when required
        this.cCenter += this.cDir === 1 ? sizeChange : -sizeChange;
        this.drawCubes(this.cLevel, this.cCenter);
      }

      if (this.cRowSize <= 0){
        // TODO end
      }

      this.cCenter = this.firstCCenter;
      this.cLevel -= 1;
      this.drawCubes(this.cLevel, this.cCenter);
    },
    drawCubes(y, x){
      this.setActive(y, x);
      if (this.cRowSize >= 2) this.setActive(y, x + 1);
      if (this.cRowSize >= 3) this.setActive(y, x - 1);

      // Reset the space around it
      this.setActive(this.cLevel, this.cCenter - (this.cRowSize > 2 ? 2 : 1), false);
      this.setActive(this.cLevel, this.cCenter + (this.cRowSize > 1 ? 2 : 1), false);
    },
    stopInterval(){
      clearInterval(this.timerInterval);
    },
    setActive(y, x, active = true) {
      if (x < 1 || x > this.width) {
        return;
      }

      let elem = this.convertToId(y, x);
      let cube = document.getElementById(elem);

      if (active) {
        cube.classList.replace('bg-stackBack', 'bg-stackFor');
        cube.classList.add('active');
      } else {
        cube.classList.replace('bg-stackFor', 'bg-stackBack');
        cube.classList.remove('active');

      }
    },
    isActive(y, x) {
      let elem = this.convertToId(y, x);
      let cube = document.getElementById(elem);

      return cube.classList.contains("active");
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
  }
}
</script>

<style scoped>

</style>