(function(){
    "use strict";

    var reverseArray = arr => arr.slice(0).reverse();
    var reverseArrayInPlace = arr => arr.reverse();

    var ArrayToList = arr => {
        if(arr.length === 0){
            return {};
        }
        return {value: arr[0], rest: ArrayToList(arr.slice(1))};
    };
    var ListToArray = list => {
        let arr = [];
        while (Object.keys(list).length !== 0){
            arr.push(list.value);
            list = list.rest;
        }
        return arr;
    };

    var deepEqual = (x, y) => {
            if (x === y) {
                return true;
            }
            else if ((typeof x === "object" && x !== null) && (typeof y === "object" && y !== null)) {
                if (Object.keys(x).length !== Object.keys(y).length) {

                    return false;
                }
                for (var prop in x) {
                    if (y.hasOwnProperty(prop))
                    {
                        if (! deepEqual(x[prop], y[prop])) {
                            return false;
                        }
                    }
                    else {
                        return false;
                    }
                }

                return true;
            }
            else {
                return false;
            }

    };



    describe("JS Practice", function() {
            const arr = [1,2,3,4,5];
        it("Reverse Array Input is: [1,2,3,4,5] and expected is [5,4,3,2,1]", () => {

            assert.deepEqual(reverseArray(arr), [5,4,3,2,1]);
        });

        it("Reverse Array in Place Input is: [1,2,3,4,5] and expected is [5,4,3,2,1]", function() {

            assert.deepEqual(reverseArrayInPlace(arr), [5,4,3,2,1]);
        });

        it("Array To List Input is: [1,2,3,4,5] and expected is [5,4,3,2,1]", function() {
            const arr = [1,2,3];
            const expected = {
                value: 1,
                rest: {
                    value: 2,
                    rest: {
                        value: 3,
                        rest: {}
                    }
                }
            };
            assert.deepEqual(ArrayToList(arr), expected);
        });

        it("List to Array check expected is 1,2,3", function() {
            const expected = [1,2,3];
            const list = {
                value: 1,
                rest: {
                    value: 2,
                    rest: {
                        value: 3,
                        rest: {}
                    }
                }
            };
            assert.deepEqual(ListToArray(list), expected);
        });

        it("Deep equal function ", function() {
            let x = {here: {is: "an"}, object: 2};
            let y = {here: {is: "an"}, object: 2};
            assert.deepEqual(deepEqual(x,y), true);
        });
    });
})();


