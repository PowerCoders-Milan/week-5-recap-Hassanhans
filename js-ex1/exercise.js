var array1 = [1, 'd', 'e', 'f', 4, 9, 'g', 7, 'v',];
var array2 = [0, 'c', 'x', 'r', 9,  'z', 6, 6, 6, 1,2, 7, 3, "t"];
var num1 = 0;
var stringz = 0;
    
function lookUp(array) {
    array.forEach(function(item){
        if(typeof item === "number"){
            num1 = num1 +1;
        } else {
            stringz = stringz +1;
        }
    })
    console.log("The length of the array is " +array.length);
    console.log(num1+ " is the sumtotal of numbers");
    console.log(stringz + " is the numbers of strings");
}


console.log(lookUp(array2))