// const range = document.getElementById("range")


// range.addEventListener("change", function(e){
//   console.log(e.target.value)
// })


function validateValue(value) {
  if (value < 1 || value > 100) {
    return false
  }
  else {
    return true
  }
}

//to import to validate_value.test.js 
module.exports = validateValue 