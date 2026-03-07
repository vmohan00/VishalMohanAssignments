/**
 * @param {number} num 
 */
function checkNumberType(num) {
    
    if (num > 0) {
        
        return "positive";
    } else if (num < 0) {
       
        return "negative";
    } else {
        
        return "neutral";
    }
}

let myNumber = 6; 


let result = checkNumberType(myNumber);
console.log(`The number ${myNumber} is ${result}.`);