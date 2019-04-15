<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 text-white text-center">
          <h1 class="text-white mb-5">Storage Node Earnings Estimator</h1>
          <p>We at Evera Labs have published this interactive estimator that will let you view your potential earnings, should you choose to participate in our network! Use the sliding bars below to describe your current network and how much storage space you’re willing to share. Based on these numbers, you will see an estimate of what you could earn in your first year on our V3 network. If you don’t know your upload and download speeds, click ‘Speed Test’ to find out. The button “Potential First Year Revenue” will display a detailed monthly breakdown of your estimated earnings.
          </p>

          <p>Please keep in mind that this estimator is only an estimate of possible earnings - if you want to learn more about our calculations, please see this deep dive on storage node payouts. Pursuant to the Storage Sharing Terms and Conditions, once you join our network as a storage node operator, any payout will be made based on actual data stored and bandwidth used.
          </p>
          <h4 class="text-white mb-5">Join our network today and help us revolutionize the way data is stored in the cloud!'
          </h4>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-6">
          <Slider @changed="onSliderChanged" @init="init"/>
        </div>
        <div class="col-sm-6">
          <MatDrawer/>
        </div>
        <div class="col-sm-12">
          <Calculator v-bind:monthly-revenue="monthlyRevenue"/>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import Slider from './components/Slider'
import Calculator from './components/Calculator'
import MatDrawer from './components/MatDrawer'
import Payout from './lib/payoutCalculator'
const payout = new Payout()

export default {
  name: 'App',
  components: {
    Slider: Slider,
    Calculator: Calculator,
    MatDrawer: MatDrawer
  },
  data () {
    return {
      monthlyRevenue: []
    }
  },
  methods: {
    init (sliderObject) {
      this.monthlyRevenue = payout.populateMonthlyRevenue(sliderObject)
    },
    onSliderChanged (changes) {
      this.monthlyRevenue = payout.populateMonthlyRevenue(changes)
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
  a {
    color: #27f7aa;
  }
</style>
