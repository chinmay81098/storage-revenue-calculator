<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-6">
          <Slider @changed="onSliderChanged"/>
        </div>
        <div class="col-sm-6">
          <MatDrawer/>
        </div>
        <div class="col-sm-12">
          <Calculator v-bind:slider-object="sliderObject"/>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import Slider from './components/Slider'
import Calculator from './components/Calculator'
import MatDrawer from './components/MatDrawer'

export default {
  name: 'App',
  components: {
    Slider: Slider,
    Calculator: Calculator,
    MatDrawer: MatDrawer
  },
  data () {
    return {
      sliderObject: {
        availableStorage: 2,
        downloadSpeed: 14.1,
        uploadSpeed: 16,
        bandwidthCap: 28,
        availableBandwidth: 10,
        networkUtilization: 25
      }
    }
  },
  methods: {
    onSliderChanged (changes) {
      this.sliderObject = changes
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
</style>
