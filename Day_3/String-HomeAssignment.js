function lengthOfLastWord(s) {
    
    let trimmedString = s.trim();
    
    let words = trimmedString.split(" ");

    let lastWord = words[words.length - 1];

    return lastWord.length; 
}

console.log(lengthOfLastWord("Hello World")); 
console.log(lengthOfLastWord("   fly me   to the moon  ")); 

function isAnagram(str1, str2) {
    
    let s1 = str1.replace(/\s+/g, '').toLowerCase();
    let s2 = str2.replace(/\s+/g, '').toLowerCase();

    if (s1.length !== s2.length) return false;
    
    let sorted1 = s1.split("").sort().join("");
    let sorted2 = s2.split("").sort().join("");

    return sorted1 === sorted2;
}

console.log(isAnagram('listen', 'silent')); 
console.log(isAnagram('hello', 'world'));   