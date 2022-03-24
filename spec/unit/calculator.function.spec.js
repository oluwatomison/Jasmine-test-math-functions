// --------------------------------------------------------------------------------
// Imports
// --------------------------------------------------------------------------------

const calc = require("../../lib/calculator.functions");
describe("Calculator Functions", function () {
     // Sum
     describe("sum", function () {
          it("should add two positive numbers", function () {
               let value = calc.sum(3, 2);
               expect(value).toBe(5);
          });

          it("should add a positive and a negative number", function () {
               let value = calc.sum(3, -2);
               expect(value).toBe(1);
          });

          it("should give the same value when adding zero", function () {
               let value = calc.sum(3, 0);
               expect(value).toBe(3);
          });
     });

     // subtract
     describe("subtract", function () {
          it("should subtract two numbers", function () {
               let value = calc.subtract(3, 2);
               expect(value).toBe(1);
          });

          it("should subtract two numbers for a negative result", function () {
               let value = calc.subtract(2, 3);
               expect(value).toBe(-1);
          });

          it("should give the same value when subtracting zero", function () {
               let value = calc.subtract(3, 0);
               expect(value).toBe(3);
          });
     });

     // multiply
     describe("multiply", function () {
          it("should multiply two positive numbers", function () {
               let value = calc.multiply(3, 2);
               expect(value).toBe(6);
          });

          it("should multiply two negative numbers", function () {
               let value = calc.multiply(-3, -2);
               expect(value).toBe(6);
          });

          it("should multiply a positive and a negative", function () {
               let value = calc.multiply(3, -2);
               expect(value).toBe(-6);
          });

          it("should give the same value when multiplying by one", function () {
               let value = calc.multiply(5, 1);
               expect(value).toBe(5);
          });

          it("should give zero when multiplying by zero", function () {
               let value = calc.multiply(5, 0);
               expect(value).toBe(0);
          });
     });

     // divide
     describe("divide", function () {
          it("should divide two positive numbers", function () {
               let value = calc.divide(10, 2);
               expect(value).toBe(5);
          });

          it("should divide two negative numbers", function () {
               let value = calc.divide(-10, -2);
               expect(value).toBe(5);
          });

          it("should divide a positive and a negative", function () {
               let value = calc.divide(-10, 2);
               expect(value).toBe(-5);
          });

          it("should divide two positive numbers with a decimal result", function () {
               let value = calc.divide(3, 2);
               expect(value).toBe(1.5);
          });

          it("should give the same value when dividing by one", function () {
               let value = calc.divide(5, 1);
               expect(value).toBe(5);
          });
     });

     // average

     describe("average", function () {
          it("should find the average of two positive numbers", function () {
               let value = calc.average((10, 2) / 2);
               expect(value).toBe(2.5);
          });

          it("should find the average of two negative numbers", function () {
               let value = calc.average((-10, -2) / 2);
               expect(value).toBe(2.5);
          });

          it("should find the average of a positive and a negative", function () {
               let value = calc.average((-10, 2) / 2);
               expect(value).toBe(-2.5);
          });

          it("should find the average of positive numbers with a decimal result", function () {
               let value = calc.average((3, 2) / 2);
               expect(value).toBe(0.75);
          });
     });
});
