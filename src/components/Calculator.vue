<template>
  <div class="card">
    <div class="card-header">
      <div class="row">
      <div class="col-sm-6">
        Potential 15 month revenue
      </div>
      <div class="col-sm-6">
        <span class="revenue-highlight">${{revenueTotal}}</span>
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
                 role="gridcell">1
            </td>
            <td  class="mat-cell cdk-column-storage mat-column-storage ng-tns-c1-0 ng-star-inserted"
                 role="gridcell">{{sliderObject.availableStorage}}
            </td>
            <td class="mat-cell cdk-column-storageRevenue mat-column-storageRevenue ng-tns-c1-0 ng-star-inserted"
                 role="gridcell">$ 1
            </td>
            <td  class="mat-cell cdk-column-egress mat-column-egress ng-tns-c1-0 ng-star-inserted"
                 role="gridcell">0.68
            </td>
            <td class="mat-cell cdk-column-egressRevenue mat-column-egressRevenue ng-tns-c1-0 ng-star-inserted"
                 role="gridcell">$ 14
            </td>
            <td  class="mat-cell cdk-column-repair mat-column-repair ng-tns-c1-0 ng-star-inserted"
                 role="gridcell">0.08
            </td>
            <td class="mat-cell cdk-column-repairRevenue mat-column-repairRevenue ng-tns-c1-0 ng-star-inserted"
                 role="gridcell">$ 1
            </td>
            <td class="rev mat-cell cdk-column-total mat-column-total ng-tns-c1-0 ng-star-inserted"
                 role="gridcell">$ 16
            </td>
            <td class="wh mat-cell cdk-column-withholding mat-column-withholding ng-tns-c1-0 ng-star-inserted"
                 role="gridcell">$ 12
            </td>
            <td class="mat-cell cdk-column-netRevenue mat-column-netRevenue ng-tns-c1-0 ng-star-inserted" role="gridcell">$ 4
            </td>
            <td class="mat-cell cdk-column-withholdingRunTotal mat-column-withholdingRunTotal ng-tns-c1-0 ng-star-inserted"
                 role="gridcell">$ 12
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
                 role="gridcell">$ 117
            </td>
            <td class="mat-footer-cell cdk-column-egress mat-column-egress ng-tns-c1-0 ng-star-inserted"
                 role="gridcell"></td>
            <td class="mat-footer-cell cdk-column-egressRevenue mat-column-egressRevenue ng-tns-c1-0 ng-star-inserted"
                 role="gridcell">$ 204
            </td>
            <td class="mat-footer-cell cdk-column-repair mat-column-repair ng-tns-c1-0 ng-star-inserted"
                 role="gridcell"></td>
            <td class="mat-footer-cell cdk-column-repairRevenue mat-column-repairRevenue ng-tns-c1-0 ng-star-inserted"
                 role="gridcell">$ 12
            </td>
            <td class="rev mat-footer-cell cdk-column-total mat-column-total ng-tns-c1-0 ng-star-inserted"
                 role="gridcell">$ 333
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
  props: ['sliderObject'],
  data () {
    return {
      revenueTotal: 100,
      monthlyRevenue: []
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
