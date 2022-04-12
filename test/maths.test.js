// "describe()" -> Testing Suites : containers for various other testing specs
// "it()" -> Testing Specs -> function to write the assertions

const assert = require("assert");
const { sum } = require("../src/maths");
const { div }= require("../src/maths");

describe("Test Maths File", () => {
    it("Should return the sum of given two numbers", () => {
        const result = sum(2,4);
        assert.equal(result, 6, "Result should be 6")
    })
})
describe("test div file",()=>{
    it("return the div of two numbers for n1",()=>{
        const res=div(6,3);
        assert.equal(res,2,"result should be 2 ")
    })
    it("test again div file",()=>{
        const res=div(16,4);
        assert.equal(res,4,"should be 4");
    })
})