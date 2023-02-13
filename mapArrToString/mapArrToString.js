function mapArrToString(arr) {
  return arr
    .filter(function(item) {
      return Number.isInteger(item)
    })
    .map(function(item){
      return String(item)
    })
}

module.exports = mapArrToString