/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if(prices.length < 2){
    return 0;
  }
  let firstBuyPrice = Number.NEGATIVE_INFINITY;
  let secondBuyPrice = Number.NEGATIVE_INFINITY;
  let firstSellProfit = 0;
  let secondSellProfit = 0;
  for(let thisDay = 0; thisDay < prices.length; thisDay++){
    firstBuyPrice = Math.max(firstBuyPrice, -prices[thisDay]);
    firstSellProfit = Math.max(firstSellProfit, firstBuyPrice + prices[thisDay]);
    secondBuyPrice = Math.max(secondBuyPrice, firstSellProfit - prices[thisDay]);
    secondSellProfit = Math.max(secondSellProfit, secondBuyPrice + prices[thisDay]);
  }
  return secondSellProfit;
};


//console.log(maxProfit([3,3,5,0,0,3,1,4]))
