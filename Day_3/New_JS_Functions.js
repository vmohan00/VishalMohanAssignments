function userProfile(name) {
    
    console.log(`Hello, ${name}!`); 
}

userProfile("Gemini"); 

const double = (number) => number * 2;

console.log(double(5)); 

setTimeout(function() {
    console.log("This message is delayed by 2 seconds");
}, 2000); 

function getUserData(callback) {
    console.log("Fetching user data...");
    
    setTimeout(() => {
        
        callback();
    }, 3000); 
}

getUserData(() => {
    console.log("Call Back Function");
});