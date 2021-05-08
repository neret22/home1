///Write a function to convert a string into camel case string. For example, if function receives string "It's a good day to go for a walk", it must return "ItsAGoodDayToGoForAWalk".

// data input

const string = prompt('Please enter string:');

//Data Processing
const capitalLetters = replacebyCapitalLetter(string);

//Data Output

console.log(capitalLetters);


function replacebyCapitalLetter(str){
    let newStr = ''; 
    let i = -1; 
        while (i < str.length){
        if (str.charAt(i) !== " "){
            newStr =  newStr + str.charAt(i); 
            i++;
         
        } else {
            newStr = newStr + String.fromCharCode(0) + str.charAt(i + 1).toUpperCase();; 
            i+=2;
    }
    }
    return newStr;
    
}  

////alternative solution


function capitaliseFirstLetterOfWorld(str) {
    let capitalisedStr = str.charAt(0).toUpperCase;
    let start = 0;
    if (str.charAt(0) !== ' '){
        capitalisedStr = str.charAt(0).toUpperCase;
        start = 1;
    }
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === ' ' && str.charAt(i+1) !== ' ') {
            capitalisedStr += + str.charAt(i).toUpperCase();
            i++;
        }
        else {
            capitalisedStr += str.charAt(i)
        }
    }
    return capitalisedStr;
}
