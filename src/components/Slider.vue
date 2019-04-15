<template>
  <div>
    <div class="mb-4">
      <a href="#">
        <i class="fas fa-wifi"></i>
        <span>Speed Test</span>
      </a>
    </div>
    <div class="row slider-section">
      <div class="col-sm-2 slider-text">
        Available Storage
      </div>
      <div class="col-sm-9">
        <vue-slider ref="availableStorage" v-on:change="calculate" v-model="sliderObject.availableStorage" v-bind="storageSliderOptions" />
      </div>
      <div class="col-sm-1 slider-text">{{sliderObject.availableStorage}} TB</div>
    </div>
    <div class="row slider-section">
      <div class="col-sm-2 slider-text">
        Download Speed
      </div>
      <div class="col-sm-9">
        <vue-slider ref="downloadSpeed" v-on:change="calculate" v-model="sliderObject.downloadSpeed" v-bind="speedSliderOptions" />
      </div>
      <div class="col-sm-1 slider-text">{{sliderObject.downloadSpeed}} Mbps</div>
    </div>
    <div class="row slider-section">
      <div class="col-sm-2 slider-text">
        Upload Speed
      </div>
      <div class="col-sm-9">
        <vue-slider ref="uploadSpeed" v-on:change="calculate" v-model="sliderObject.uploadSpeed" v-bind="speedSliderOptions" />
      </div>
      <div class="col-sm-1 slider-text">{{sliderObject.uploadSpeed}} Mbps</div>
    </div>
    <div class="row slider-section">
      <div class="col-sm-2 slider-text">
        Available Bandwidth
      </div>
      <div class="col-sm-9">
        <vue-slider ref="availableBandwidth" v-on:change="calculate"  v-model="sliderObject.availableBandwidth" v-bind="sliderOptions" />
      </div>
      <div class="col-sm-1 slider-text">{{sliderObject.availableBandwidth}}% </div>
    </div>
    <div class="row slider-section">
      <div class="col-sm-2 slider-text">
        Bandwidth Cap
      </div>
      <div class="col-sm-9">
        <vue-slider ref="bandwidthCap" v-on:change="calculate" v-model="sliderObject.bandwidthCap" v-bind="sliderOptions" />
      </div>
      <div class="col-sm-1 slider-text">{{sliderObject.bandwidthCap}} TB </div>
    </div>
    <div class="row slider-section">
      <div class="col-sm-2 slider-text">
        Network Utilization
      </div>
      <div class="col-sm-9">
        <vue-slider ref="networkUtilization" v-on:change="calculate" v-model="sliderObject.networkUtilization" v-bind="utilizationSliderOptions" />
      </div>
      <div class="col-sm-1 slider-text">{{sliderObject.networkUtilization}}%</div>
    </div>
  </div>
</template>

<script>
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'

export default {
  name: 'Slider',
  components: {
    VueSlider
  },
  data () {
    return {
      sliderObject: {
        availableStorage: 10,
        downloadSpeed: 14.1,
        uploadSpeed: 16,
        bandwidthCap: 28,
        availableBandwidth: 10,
        networkUtilization: 25
      },
      speedSliderOptions: {
        dotSize: 20,
        width: 'auto',
        height: 4,
        contained: false,
        direction: 'ltr',
        data: null,
        min: 1,
        max: 200,
        interval: 0.5
      },
      utilizationSliderOptions: {
        dotSize: 20,
        width: 'auto',
        height: 4,
        contained: false,
        direction: 'ltr',
        data: null,
        min: 0,
        max: 50
      },
      storageSliderOptions: {
        dotSize: 20,
        width: 'auto',
        height: 4,
        contained: false,
        direction: 'ltr',
        data: null,
        min: 0,
        max: 20
      },
      sliderOptions: {
        dotSize: 20,
        width: 'auto',
        height: 4,
        contained: false,
        direction: 'ltr',
        data: null,
        min: 0,
        max: 100,
        interval: 1,
        disabled: false,
        clickable: true,
        duration: 0.5,
        adsorb: false,
        lazy: false,
        tooltip: 'focus',
        tooltipPlacement: 'top',
        tooltipFormatter: void 0,
        useKeyboard: false,
        enableCross: true,
        fixed: false,
        minRange: void 0,
        maxRange: void 0,
        order: true,
        marks: false,
        dotOptions: void 0,
        process: true,
        dotStyle: void 0,
        railStyle: void 0,
        processStyle: void 0,
        tooltipStyle: void 0,
        stepStyle: void 0,
        stepActiveStyle: void 0,
        labelStyle: void 0,
        labelActiveStyle: void 0
      }
    }
  },
  created () {
    this.$emit('init', this.sliderObject)
  },
  methods: {
    calculate () {
      // this.sliderObject = {
      //   availableStorage: this.$refs.availableStorage.getValue(),
      //   downloadSpeed: this.$refs.downloadSpeed.getValue(),
      //   uploadSpeed: this.$refs.uploadSpeed.getValue(),
      //   bandwidthCap: this.$refs.bandwidthCap.getValue(),
      //   availableBandwidth: this.$refs.availableBandwidth.getValue(),
      //   networkUtilization: this.$refs.networkUtilization.getValue()
      // }
      this.$emit('changed', this.sliderObject)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .slider-section {
    margin-bottom: 30px;
  }
  .slider-text {
    font-size: 18px;
    color: #fefefe;
  }
</style>
