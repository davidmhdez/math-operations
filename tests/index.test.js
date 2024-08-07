const {describe, expect, test} = require("@jest/globals");
const { add, subtract } = require("../index")

describe("when add", ()=>{
    test("2 numbers", ()=>{
        const result = add(1,2);
        expect(result).toBe(3);
    })
})

describe("when subtract", ()=>{
    test("2 numbers", ()=>{
        const result = subtract(2,1);
        expect(result).toBe(1);
    })
})