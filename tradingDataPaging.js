function getPageData(dayTrade, pageSize, pageNumber) {
  const dayTradeSort = JSON.parse(dayTrade).sort((less, than) => than.countOfStocks - less.countOfStocks)

  results = dayTradeSort.slice((pageNumber - 1) * pageSize, pageNumber * pageSize)
  return results
}

var dayTrade =
  `[
    {"user": "Rob", "company": "Google", "countOfStocks": 5},
    {"user": "Bill", "company": "Goldman", "countOfStocks": 18},
    {"user": "Rob", "company": "JPMorgan", "countOfStocks": 10},
    {"user": "Dave", "company": "Boeing", "countOfStocks": 10},
    {"user": "Miley", "company": "Microsoft", "countOfStocks": 120},
    {"user": "Miley", "company": "Microsoft", "countOfStocks": 102},
    {"user": "Miley", "company": "Microsoft", "countOfStocks": 1},
    {"user": "Miley", "company": "Microsoft", "countOfStocks": 2},
    {"user": "Miley", "company": "Microsoft", "countOfStocks": 1002},
    {"user": "Miley", "company": "Microsoft", "countOfStocks": 1234},
    {"user": "Miley", "company": "Microsoft", "countOfStocks": 12}
  ]`;
console.log(getPageData(dayTrade, 3, 4  )); // page size = 3, page number = 2
