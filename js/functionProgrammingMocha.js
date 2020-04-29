(function(){
"use strict";

let myFunctionsInt = {

    arr: [],
    /**
     * @returns {number} sum of arrays
     */
    sum(){
        return this.arr.reduce((acumulator, element) => acumulator+element);
    },
    /**
     * @returns {number} sum of multiplies
     */
    multiply(){
        return this.arr.reduce((acumulator, element) => acumulator * element);
    },  
    /**
     * @returns {number} max of integers
     */
    max(){
        return this.arr.reduce((acumulator, element) => acumulator > element? acumulator: element);
    },
    multiplybyten(){
        return this.arr.map((element) => element * 10);
    },
    filterbythree(){
        return this.arr.filter((element) => element === 7);
    },
    read(){
        return this.arr += prompt("arr",[]);
    }
};

let myFunctionsString = {
    str: "",

    isVowel(){
        const vowels = ['a', 'e', 'i', 'o', 'u'];
        return vowels.indexOf(this.str[0]) != -1 ? true : false;
    },
    reverse(){
        return this.str.split("").reduce((acumulator, element)=> element + acumulator);
    },
    findLongestWord(){
        return this.str.split(" ").reduce((acumulator,element)=> acumulator.length > element.length ? acumulator : element);
      },
    filterLongWord(){
        return this.str.split(" ").filter(elem=>elem.length > 5).join(" ");
    },
    read(){
        this.str += prompt("str","");
    }
}

describe("arr", function() {
    context("when [1,3,7] entered", function() {
        beforeEach(function() {


            myFunctionsInt.arr = [1,3,7];
            
        });


        it("the sum is 11", function() {
            assert.equal(myFunctionsInt.sum(), 11);
        });

        it("the multiply product is 21", function() {
            assert.equal(myFunctionsInt.multiply(), 21);
        });

        it("the max is 7", function() {
          assert.equal(myFunctionsInt.max(), 7);
        });

        it("the multiplybyten is [10,30,70]", function() {
          assert.deepEqual(myFunctionsInt.multiplybyten(), [10,30,70]);
        });

        it("the filterbythree is [7]", function() {
          assert.deepEqual(myFunctionsInt.filterbythree(), [7]);
        });
    });
  });

  describe("strUtils", () => {
    context("when min 5 and 'hello world!' entered", () => {
        beforeEach(() => {
            myFunctionsString.str = 'hello world!';
        });

        it("the isVowel is true", () => {
            assert.equal(myFunctionsString.isVowel(), false);
        });

        it("the reverse is !dlorw olleh", () => {
            assert.equal(myFunctionsString.reverse(), "!dlrow olleh");
        });

        it("the findLongestWord is oranges", () => {
          assert.equal(myFunctionsString.findLongestWord(), "world!");
        });

        it("the filterLongWords is oranges", () => {
          assert.equal(myFunctionsString.filterLongWord(), "world!");
        });
    });

  })
})();