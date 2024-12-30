const addition = require("./calc");
describe("Calculator", () => {
    describe("Additon function", () => {
        test("should return 42 for 20 + 22", () => {
          expect(addition(20, 22)).toBe(42);  
        });
    });
    describe("Subtract function", () => {

    });
    describe("Multiply function", () => {

    });
    describe("Divide function", () => {

    });
});