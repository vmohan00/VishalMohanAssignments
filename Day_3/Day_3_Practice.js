let original = "Testleaf"; 
let reversed = "";


for (let i = original.length - 1; i >= 0; i--) {
    reversed += original.charAt(i); 
}

console.log(`Original String: ${original}`); 
console.log(`Reversed String: ${reversed}`);


if (original.toLowerCase() === reversed.toLowerCase()) {
    console.log("The string is a palindrome.");
} else {
    console.log("The string is not a palindrome.");
}