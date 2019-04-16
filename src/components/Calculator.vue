<template>
  <div class="card">
    <div class="card-header">
      <div class="row">
      <div class="col-sm-6">
        Potential 15 month revenue
      </div>
      <div class="col-sm-6">
        <span class="revenue-highlight">$ {{totalRevenue()}}</span>
      </div>
      </div>
    </div>
    <div class="card-content">
      <div class="col-sm-12">
        <table  class="mat-table ng-trigger ng-trigger-columnsToggle" mat-table="" role="grid">
          <thead><!---->
          <tr  class="mat-header-row ng-tns-c1-0 ng-star-inserted" mat-header-row="" role="row"
              style=""><!---->
            <th  class="mat-header-cell cdk-column-month mat-column-month ng-tns-c1-0 ng-star-inserted"
                 role="columnheader">Month
            </th>
            <th class="mat-header-cell cdk-column-storage mat-column-storage ng-tns-c1-0 ng-star-inserted"
                 role="columnheader">Storage (TB)
            </th>
            <th class="mat-header-cell cdk-column-storageRevenue mat-column-storageRevenue ng-tns-c1-0 ng-star-inserted"
                 role="columnheader">Storage Revenue
            </th>
            <th class="mat-header-cell cdk-column-egress mat-column-egress ng-tns-c1-0 ng-star-inserted"
                 role="columnheader">Egress (TB)
            </th>
            <th class="mat-header-cell cdk-column-egressRevenue mat-column-egressRevenue ng-tns-c1-0 ng-star-inserted"
                 role="columnheader">Egress Revenue
            </th>
            <th class="mat-header-cell cdk-column-repair mat-column-repair ng-tns-c1-0 ng-star-inserted"
                 role="columnheader">Repair (TB)
            </th>
            <th class="mat-header-cell cdk-column-repairRevenue mat-column-repairRevenue ng-tns-c1-0 ng-star-inserted"
                 role="columnheader">Repair Revenue
            </th>
            <th class="rev mat-header-cell cdk-column-total mat-column-total ng-tns-c1-0 ng-star-inserted"
                 role="columnheader">Total Revenue
            </th>
            <th class="wh mat-header-cell cdk-column-withholding mat-column-withholding ng-tns-c1-0 ng-star-inserted"
                 role="columnheader">Held Amount
            </th>
            <th class="mat-header-cell cdk-column-netRevenue mat-column-netRevenue ng-tns-c1-0 ng-star-inserted"
                 role="columnheader">Net Revenue
            </th>
            <th class="mat-header-cell cdk-column-withholdingRunTotal mat-column-withholdingRunTotal ng-tns-c1-0 ng-star-inserted"
                 role="columnheader">Held Amount Running Total
            </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in monthlyRevenue" :key="item.number">
            <td  class="mat-cell cdk-column-month mat-column-month ng-tns-c1-0 ng-star-inserted"
                 role="gridcell">{{item.number}}
            </td>
            <td  class="mat-cell cdk-column-storage mat-column-storage ng-tns-c1-0 ng-star-inserted"
                 role="gridcell">{{item.storage}}
            </td>
            <td class="mat-cell cdk-column-storageRevenue mat-column-storageRevenue ng-tns-c1-0 ng-star-inserted"
                 role="gridcell">$ {{item.storageCost}}
            </td>
            <td  class="mat-cell cdk-column-egress mat-column-egress ng-tns-c1-0 ng-star-inserted"
                 role="gridcell"> {{item.egress}}
            </td>
            <td class="mat-cell cdk-column-egressRevenue mat-column-egressRevenue ng-tns-c1-0 ng-star-inserted"
                 role="gridcell">$ {{item.egressCost}}
            </td>
            <td  class="mat-cell cdk-column-repair mat-column-repair ng-tns-c1-0 ng-star-inserted"
                 role="gridcell">{{item.repair}}
            </td>
            <td class="mat-cell cdk-column-repairRevenue mat-column-repairRevenue ng-tns-c1-0 ng-star-inserted"
                 role="gridcell">$ {{item.repairCost}}
            </td>
            <td class="rev mat-cell cdk-column-total mat-column-total ng-tns-c1-0 ng-star-inserted"
                 role="gridcell">$ {{item.storageCost + item.egressCost + item.repairCost}}
            </td>
            <td class="wh mat-cell cdk-column-withholding mat-column-withholding ng-tns-c1-0 ng-star-inserted"
                 role="gridcell">$ {{heldAmount(item.storageCost + item.egressCost + item.repairCost, item.number)}}
            </td>
            <td class="mat-cell cdk-column-netRevenue mat-column-netRevenue ng-tns-c1-0 ng-star-inserted" role="gridcell">$ {{netAmount(item.storageCost + item.egressCost + item.repairCost, item.number)}}
            </td>
            <td class="mat-cell cdk-column-withholdingRunTotal mat-column-withholdingRunTotal ng-tns-c1-0 ng-star-inserted"
                 role="gridcell">$ {{runningAmount(heldAmount(item.storageCost + item.egressCost + item.repairCost, item.number), item.number)}}
            </td>
          </tr>
          </tbody>
          <tfoot><!---->
          <tr  class="gray mat-footer-row ng-tns-c1-0 ng-star-inserted" mat-footer-row="" role="row"
              style=""><!---->
            <td  class="mat-footer-cell cdk-column-month mat-column-month ng-tns-c1-0 ng-star-inserted"
                 role="gridcell">Totals
            </td>
            <td class="mat-footer-cell cdk-column-storage mat-column-storage ng-tns-c1-0 ng-star-inserted"
                 role="gridcell"></td>
            <td class="mat-footer-cell cdk-column-storageRevenue mat-column-storageRevenue ng-tns-c1-0 ng-star-inserted"
                 role="gridcell">$
            </td>
            <td class="mat-footer-cell cdk-column-egress mat-column-egress ng-tns-c1-0 ng-star-inserted"
                 role="gridcell"></td>
            <td class="mat-footer-cell cdk-column-egressRevenue mat-column-egressRevenue ng-tns-c1-0 ng-star-inserted"
                 role="gridcell">$
            </td>
            <td class="mat-footer-cell cdk-column-repair mat-column-repair ng-tns-c1-0 ng-star-inserted"
                 role="gridcell"></td>
            <td class="mat-footer-cell cdk-column-repairRevenue mat-column-repairRevenue ng-tns-c1-0 ng-star-inserted"
                 role="gridcell">$
            </td>
            <td class="rev mat-footer-cell cdk-column-total mat-column-total ng-tns-c1-0 ng-star-inserted"
                 role="gridcell">$ {{totalRevenue()}}
            </td>
            <td class="wh mat-footer-cell cdk-column-withholding mat-column-withholding ng-tns-c1-0 ng-star-inserted"
                 role="gridcell">$ 44
            </td>
            <td class="mat-footer-cell cdk-column-netRevenue mat-column-netRevenue ng-tns-c1-0 ng-star-inserted"
                 role="gridcell">$ 289
            </td>
            <td class="mat-footer-cell cdk-column-withholdingRunTotal mat-column-withholdingRunTotal ng-tns-c1-0 ng-star-inserted"
                 role="gridcell"></td>
          </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Calculator',
  props: {
    'monthlyRevenue' : {
      default: [],
      type: Array
    }
  },
  data () {
    return {
      revenueTotal: 100,
      storagePrice: 1.5,
      egressPrice: 20,
      repairPrice: 10,
      heldCost: 0
    }
  },
  methods: {
    totalRevenue () {
      if (this.monthlyRevenue && this.monthlyRevenue.length) {
        let firstMonth = this.monthlyRevenue[0]
        return (firstMonth.storageCost + firstMonth.egressCost + firstMonth.repairCost) * 15
      } else {
        return 0
      }
    },
    heldAmount (total, month) {
      if(month === 15) {
        return -this.heldCost/2;
      }
      else if(month <=3) {
        return total*0.75;
      } else if(month <=6) {
        return total*0.5;
      } else if(month <=9) {
        return total*0.25;
      } else {
        return 0;
      }
    },
    netAmount (total, month) {
      if(month === 15) {
        return -this.heldCost/2;
      }
      else if(month <=3) {
        return total*0.25;
      } else if(month <=6) {
        return total*0.5;
      } else if(month <=9) {
        return total*0.75;
      } else {
        return total;
      }
    },
    runningAmount (heldAmount, month) {
      // heldCost += heldAmount;
      return this.heldCost
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .revenue-highlight {
    color: #2683ff;
    font-size: 1.4em;
  }
</style>
