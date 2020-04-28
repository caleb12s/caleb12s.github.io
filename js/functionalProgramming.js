function sum(arr){

    retVal = arr.reduce(function(prevValue, elem, i, array){
        return prevValue + elem;
    });
    return retVal;
}
console.log(sum([1,2,3,4,5,6]));

function multiply(arr){

    return arr.reduce(function (preValue, elem, i , array) {
        return preValue * elem;
    });

}

console.log(multiply([1,2,3,4,5,6]));

function reverse(word){

    return word.map(function(elem, i, array) {

    });
}

console.log(reverse("Seegii"));

function filterLongWords(arr, j){

    return arr.filter(function(elem, i, array){
        return elem > j;
    });

}

console.log(filterLongWords([1,2,3,4,5,6],3));
