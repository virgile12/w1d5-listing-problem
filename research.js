var numberList = [];

var listOfNumbers = function(num) {

  return numberList.push(num)
  
}


function ascendingList(numberList) {
    var output = numberList.sort(function (a, b) {
    return a - b
})

return output;
}







module.exports = {
  listOfNumbers : listOfNumbers,
  result: function result() {
    return ascendingList(numberList)
}
};
