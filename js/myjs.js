reverse("hello");
max(5,2);
var ducks = ["Huey", "Dewey", "Louie"];

filterLongWords(ducks,4);
findLongestWord(ducks);
myFunction();

function max(v1, v2) {
    // return Math.max(v1,v2);

    if(v1<v2){
        return v2;
    }else{
        return v1;
    }
}
function maxOfThree(v1,v2,v3){

    if(v1<v2<v3){
        return v3;
    }else if(v1<v3<v2){
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
    var mul = 0;
        for(var i = 0; i < arr.length; i++){
            mul *= arr[i];
        }
    return mul;
}

function reverse(word){
    var retVal = "";

    for (var i = word.length+1; i > 0; i--){
        retVal = retVal + word.charAt(i);
    }
    alert(retVal)
    return retVal;
}

function findLongestWord(words){
    var longlen = 0;

    for(var i = 0; i < words.length; i++){
        if(longlen < words.length){
            longlen = words.length;
        }
    }
    alert(longlen);
    return longlen;
}

function filterLongWords(words, i){
    var filteredWords = [];

    for(var j = 0; j < words.length; j++){
        if(words[j].length > i){
            filteredWords.push(words[j]);
        }
    }
    alert(filteredWords);
    return filteredWords;
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

