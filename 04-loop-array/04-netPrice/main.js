const sales = [
  { price: 1000, discount: 0.1 },
  { price: 500, discount: 0.05 },
  { price: 100 },
  { price: 254, discount: 0.15},
  {price: 123, discount: 0.24},
  {price: 321},
]
// function findSummary (arr) {
// const summary = [];
// arr.forEach(productObj=>{
//     let sum = {};
//     sum.netPrice = productObj.price * (1-(productObj.discount? productObj.discount : 0));
//     summary.push(sum);
// })
// return summary
// }



function findSummary (arr) {
const newArr = [];
arr.forEach(obj => newArr.push({newPrice:obj.price * (1-(obj.discount||0))}))
return newArr
}
// console.log(newArr);
// console.log(findSummary(sales))