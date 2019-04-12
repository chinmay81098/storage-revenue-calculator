<template>
  <div>
    <div class="mat-drawer-inner-container" style="height: auto;"><!----><span  mwlresizehandle=""
                                                                               class="ng-tns-c1-0 ng-star-inserted"
                                                                               style=""></span>
      <div  class="help-list ng-tns-c1-0"><!---->
        <div  class="help-item ng-tns-c1-0 ng-star-inserted" id="help-0" style="">
          <div  class="help-title">Estimator Deep Dive</div>
          <div  class="help-content">The calculations are explained in this <a target="_blank"
                                                                                               href="https://storj.io/blog/2019/01/sharing-storage-space-for-fun-and-profit/">blog
            post</a>.
          </div>
        </div>
        <div  class="help-item ng-tns-c1-0 ng-star-inserted" id="help-1" style="">
          <div  class="help-title">Minimum Requirements</div>
          <div  class="help-content">If the slider turns red, your setting is below the minimum
            recommended requirement. These minimum Storage Node requirements are explained in this <a target="_blank"
                                                                                                      href="https://storj.io/blog/2019/01/we-need-great-storage-node-operators-for-the-v3-network-have-you-got-what-it-takes-to-succeed/">blog
              post</a>.
          </div>
        </div>
        <div  class="help-item ng-tns-c1-0 ng-star-inserted" id="help-2" style="">
          <div  class="help-title">Available Storage</div>
          <div  class="help-content">The amount of storage (TB) you contribute to the Storj network via
            your storage node.
          </div>
        </div>
        <div  class="help-item ng-tns-c1-0 ng-star-inserted" id="help-3" style="">
          <div  class="help-title">Download Speed</div>
          <div  class="help-content">The internet download speed where the storage node resides. Click
            "Speed Test" above, to choose and run a testing service.
          </div>
        </div>
        <div  class="help-item ng-tns-c1-0 ng-star-inserted" id="help-4" style="">
          <div  class="help-title">Upload Speed</div>
          <div  class="help-content">The internet upload speed where the storge node resides. Click
            "Speed Test" above, to choose and run a testing service.
          </div>
        </div>
        <div  class="help-item ng-tns-c1-0 ng-star-inserted" id="help-5" style="">
          <div  class="help-title">Available Bandwidth</div>
          <div  class="help-content">The percent of the total internet bandwidth that you will allow the
            storage node to use. Setting this value to 100% assumes no other devices will use the internet connection.
          </div>
        </div>
        <div  class="help-item ng-tns-c1-0 ng-star-inserted" id="help-6" style="">
          <div  class="help-title">Bandwidth Cap</div>
          <div  class="help-content">The auto-calculated maximum possible bandwidth based on the upload
            + download speeds, as set above. However, if there is an ISP-imposed cap on monthly bandwidth which is lower
            than the calculated maximum, use that value.
          </div>
        </div>
        <div  class="help-item ng-tns-c1-0 ng-star-inserted" id="help-7" style="">
          <div  class="help-title">Storj Network Utilization</div>
          <div  class="help-content">Change this value to simulate how much of your available storage
            and bandwidth is used by the Storj Network. A higher percentage means more demand from Storj customers.
          </div>
        </div>
        <div  class="help-item ng-tns-c1-0 ng-star-inserted" id="help-8" style="">
          <div  class="help-title">15 Month Revenue</div>
          <div  class="help-content">The potential gross revenue earned over 15 months. This value takes
            into account the following conservative forecasts of network behavior:
            <ol class="factors-list">
              <li>Storj customers will use at most 50% of your available storage and bandwidth.</li>
              <li>10% of the data stored will need to be repaired, due to other nodes failing, or leaving the network
                (storage node operators are paid for the bandwidth used during this repair process).
              </li>
              <li>Storage nodes will stay on the network for longer than 12 months.</li>
            </ol>
          </div>
        </div>
        <div  class="help-item ng-tns-c1-0 ng-star-inserted" id="help-9" style="">
          <div  class="help-title">Storage Revenue</div>
          <div  class="help-content">Revenue for storage is calculated based on GB-hours per month,
            inclusive of the expansion factor resulting from erasure coding the data. Revenue is earned in STORJ tokens
            at $1.50 per TB per month. So, if 4 TBs of data are shared and 2 TBs are utilized for the duration of the
            entire month, the Storage Revenue would be $3.
          </div>
        </div>
        <div  class="help-item ng-tns-c1-0 ng-star-inserted" id="help-10" style="">
          <div  class="help-title">Egress Revenue</div>
          <div  class="help-content">Revenue for egress bandwidth is accrued when Uplink clients
            download data from the storage nodes during normal (non-repair) retrieval. Revenue is earned in STORJ tokens
            at $20 per TB per month.
          </div>
        </div>
        <div  class="help-item ng-tns-c1-0 ng-star-inserted" id="help-11" style="">
          <div  class="help-title">Repair Revenue</div>
          <div  class="help-content">Revenue for egress bandwidth used during repair is accrued when a
            Satellite recreates missing data that results from node churn. See the <a target="_blank"
                                                                                      href="https://storj.io/white-paper">white
              paper</a> for more information on file repair. Revenue is earned in STORJ tokens at $10 per TB per month.
          </div>
        </div>
        <div  class="help-item ng-tns-c1-0 ng-star-inserted" id="help-12" style="">
          <div  class="help-title">Total Revenue</div>
          <div  class="help-content">The sum of Storage + Egress + Repair revenues.</div>
        </div>
        <div  class="help-item ng-tns-c1-0 ng-star-inserted" id="help-13" style="">
          <div  class="help-title">Held Amount</div>
          <div  class="help-content">During the first 9 months of a node’s operation, a percentage of
            storage node earnings are held by Storj. The held amounts are reduced as the duration of time on the network
            increases. At 15 months, 50% of the balance is returned to the storage node operator, while the remainder is
            held indefinitely. <br><br>When the storage node operator performs a <i>graceful exit</i>, the funds will be
            returned upon exit completion. If the storage node operator exits abruptly (without completing the <i>graceful
              exit</i>), the funds will be forfeited to offset the cost of data repair caused by the abrupt exit.
          </div>
        </div>
        <div  class="help-item ng-tns-c1-0 ng-star-inserted" id="help-14" style="">
          <div  class="help-title">Net Revenue</div>
          <div  class="help-content">The difference of Total Revenue - Held Amount.</div>
        </div>
        <div  class="help-item ng-tns-c1-0 ng-star-inserted" id="help-15" style="">
          <div  class="help-title">Held Amount Running Total</div>
          <div  class="help-content">The accumulated Held Amount, at a particular month of the year.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MatDrawer',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  .mat-drawer-inner-container {
    max-height: 450px;
    overflow: scroll;
    background: #efefef;
    padding: 15px;
  }

  .mat-drawer-inner-container .help-item {
    margin-bottom: 15px;
  }
  .mat-drawer-inner-container .help-item .help-title {
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: 5px;
  }
</style>
