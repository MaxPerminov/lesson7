const validateValue = require("./validate_value");


// test("Validation", function() {
//   expect(validateValue(50)).toBe(true)
// })
// test("Validation-false", function() {
//   expect(validateValue(101)).toBe(false)
// })


// describe - creating of test-suit
describe("range testing", () =>{
  test("min", function() {
    expect(validateValue(1)).toBe(true)
  })
  test("bound_min", function() {
    expect(validateValue(2)).toBe(true)
  })
  test("medium", function() {
    expect(validateValue(50)).toBe(true)
  })
  test("bound_max", function() {
    expect(validateValue(99)).toBe(true)
  })
  test("max", function() {
    expect(validateValue(100)).toBe(true)
  })
  test("zero", function() {
    expect(validateValue(0)).toBe(false)
  })
  test("more-than", function() {
    expect(validateValue(101)).toBe(false)
  })
})