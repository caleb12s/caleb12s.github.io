function max(v1, v2) {
    // return Math.max(v1,v2);

    if(v1<v2){
        return v2;
    }else{
        return v1;
    }
}
function maxOfThree(v1,v2,v3){

    if(v1<v3 && v2<v3){
        return v3;
    }else if(v1<v2 && v3<v2){
        return v2;
    }else{
        return v1;
    }

}

function isVowel(char){
    if(char.length!==1){
        return false;
    }
    CHAR = char.toUpperCase();
    if(CHAR==="A"||CHAR==="B"||CHAR==="C"||CHAR==="D"||CHAR==="E"||CHAR==="F"||CHAR==="G"||CHAR==="H"||CHAR==="I"){
        return true;
    }
    return false;
}

function sum(arr){
    var sum = 0;
    for (var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

function multiply(arr){
    var mul = 1;
        for(var i = 0; i < arr.length; i++){
            mul *= arr[i];
        }
    return mul;
}

function reverse(word){
    var retVal = "";

    for (var i = word.length; i >= 0; i--){
        retVal = retVal + word.charAt(i);
    }

    return retVal;
}

function findLongestWord(words){
    var longlen = 0;

    for(var i = 0; i < words.length; i++){

        if(longlen < words[i].length){
            longlen = words[i].length;
        }
    }

    return longlen;
}

function filterLongWords(words, i){
    // var filteredWords = [];
    //
    // for(var j = 0; j < words.length; j++){
    //     if(words[j].length >= i){
    //         filteredWords.push(words[j]);
    //     }
    // }
    // console.log(filteredWords);
    // return filteredWords;
    alert(words.filter(w => w.length > i));
    return words.filter(w => w.length > i);
}

function myFunction(){
    const a = [1,3,5,3,3];
    const b = a.map(function(elem, i, array) {
        return elem + 10;
    })
    document.writeln(b.toString() + "<br/>");
    const c = a.filter(function(elem, i, array){
        return elem !== 3;});
    document.writeln(c.toString() + "<br/>");
    const d = a.reduce(function(prevValue, elem, i, array){
        return prevValue + elem;
    });
    document.writeln(d+"____"+"<br/>");

    const d2 = a.find(function(elem) {return elem > 1;}); //3
    const d3 = a.findIndex(function(elem) {return elem > 1;}); //1
    document.writeln(d2+ "<br/>");
    document.writeln(d3);
}

function testFunctions(expected, result){

    if (Array.isArray(expected)) { //if array is passed then use JSON.stringify to check if values in an array match
        if (JSON.stringify(expected) === JSON.stringify(result)) {
            return "SUCCEEDED";
        }else{
            return "FAILED, Because, expected result is "+expected+" result "+result;
        }
    }

    if(expected===result) {
        return "SUCCEEDED";
    }else{
        return "FAILED, Because, expected result is "+expected+" result "+result;
    }
}

// Test max
console.log(testFunctions(5,max(5,3)));

// Test Max Three
console.log(testFunctions(30,maxOfThree(5,30,20)));

// Test isVowel
console.log(testFunctions(true,isVowel('a')));

// Test sum
console.log(testFunctions(100, sum([40,30,30])));

// Test multiply
console.log(testFunctions(1000,multiply([10,10,10])));

// Test reverse
console.log(testFunctions("olleh",reverse("hello")));

// Test findlongestword
console.log(testFunctions(8,findLongestWord(["hi","are you!","how"])));

// Test filterLongWords
console.log(testFunctions(["hello", "hi"]),filterLongWords(["hello","hi"],1));

function assertFunctions(expected, result){

    if (Array.isArray(expected)) { //if array is passed then use JSON.stringify to check if values in an array match
        if (JSON.stringify(expected) === JSON.stringify(result)) {
            return "SUCCEEDED";
        }else{
            return "FAILED, Because, expected result is "+expected+" result "+result;
        }
    }

    if(expected===result) {
        return "SUCCEEDED";
    }else{
        return "FAILED, Because, expected result is "+expected+" result "+result;
    }
}

// Test max
console.assert(assertFunctions(5,max(5,3)));

// Test Max Three
console.assert(assertFunctions(30,maxOfThree(5,30,20)));

// Test isVowel
console.assert(assertFunctions(true,isVowel('a')));

// Test sum
console.assert(assertFunctions(100, sum([40,30,30])));

// Test multiply
console.assert(assertFunctions(1000,multiply([10,10,10])));

// Test reverse
console.assert(assertFunctions("olleh",reverse("hello")));

// Test findlongestword
console.assert(assertFunctions(8,findLongestWord(["hi","are you!","how"])));

// Test filterLongWords
console.assert(assertFunctions(["hello", "hi"]),filterLongWords(["hello","hi"],1));
