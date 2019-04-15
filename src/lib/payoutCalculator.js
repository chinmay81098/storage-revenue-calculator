/**
 * Created by Himanshu wolf on 2019-04-12.
 */

let monthlyRevenue = []
let monthObject = {}
const storagePrice = 1.5
const egressPrice = 20
const repairPrice = 10

class Payout {
  populateMonthlyRevenue (sliderObject) {
    monthlyRevenue = []
    for (let i = 1; i <= 15; i += 1) {
      monthObject = (i) => {
        return {
          number: i,
          storage: Number(sliderObject.availableStorage * sliderObject.networkUtilization / 100).toFixed(2),
          storageCost: Math.ceil((sliderObject.availableStorage * sliderObject.networkUtilization / 100) * storagePrice),
          egress: Number(sliderObject.availableStorage * sliderObject.networkUtilization * 2.345 / 100).toFixed(2),
          egressCost: Math.ceil((sliderObject.availableStorage * sliderObject.networkUtilization * 2.345 / 100) * egressPrice),
          repair: Number(sliderObject.availableStorage * sliderObject.networkUtilization * 0.285 / 100).toFixed(2),
          repairCost: Math.ceil((sliderObject.availableStorage * sliderObject.networkUtilization * 0.285 / 100) * repairPrice)
        }
      }
      monthlyRevenue.push(monthObject(i))
    }
    return monthlyRevenue
  }
}

export default Payout
