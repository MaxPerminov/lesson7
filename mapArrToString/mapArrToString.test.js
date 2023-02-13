const mapArrToString = require("./mapArrToString");


describe("integer_to_string", () =>{
  test("positive", function() {
    expect(mapArrToString([1, 2, 3])).toEqual(["1", "2", "3"])
  })
  test("negative", function() {
    expect(mapArrToString([1, 2, 3])).not.toEqual([1, 2, 3])
  })
  })