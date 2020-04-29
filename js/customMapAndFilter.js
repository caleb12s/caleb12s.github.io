function customMap(arr, customFunc) {    
    const myArr = [];       

    for(let i=0;i<arr.length;i++) {        
        const result = customFunc(arr[i], i, arr);        
        myArr.push(result);    
    }    

return myArr;
}

var arr2 = [1,2,3,4,5];

console.log(customMap(arr2, a => a * 10));
document.write("<p>Custom Map</p>");
document.write(customMap(arr2, a => a * 10));

function customFilter(arr, customFunc) {    
    const myArr = [];       

    for(let i=0;i<arr.length;i++) {        
        const result = customFunc(arr[i], i, arr);     
        if(result){
            myArr.push(arr[i]);    
        }   

    }    

return myArr;
}

var arr3 = [1,2,3,4,5];

console.log(customFilter(arr3, a => a >= 3));
document.write("<p>Custom Filter</p>");
document.write(customFilter(arr3, a => a >= 3));