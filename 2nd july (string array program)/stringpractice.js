var prompt=require('prompt-sync')()

// 🧠 STRING QUESTIONS (5)

// 1. **Reverse a String**  
//    Write a function `reverseString(str)` that takes a string and returns it reversed.  
//    Example: `"hello" → "olleh"`

// 2. **Check Palindrome**  
//    Write a function `isPalindrome(str)` to check if a string is a palindrome (case-insensitive).  
//    Example: `"Madam" → true`

// 3. **Count Vowels**  
//    Write a function `countVowels(str)` to count the number of vowels in the given string.  
//    Example: `"JavaScript" → 3`

// 4. **Capitalize First Letter of Each Word**  
//    Write a function `capitalizeWords(str)` that capitalizes the first letter of every word in a sentence.  
//    Example: `"hello world" → "Hello World"`

// 5. **Character Frequency**  
    //    Write a function `charFrequency(str)` that returns an object with the frequency of each character in the string.  
    //    Example: `"aabbbc" → { a: 2, b: 3, c: 1 }`


console.log("First Question:Reverse a String");
function reverseString(str){
    let reversed='';
    for(let i=str.length-1;i>=0;i--){
        reversed+=str[i];
    }
    return reversed;
}
console.log(reverseString("Hello"));
console.log(reverseString("dark"));

console.log("Second Question:Check Palindrome");
function isPalindrome(str){
    str=str.toLowerCase();
    let reversed='';
    for(let i=str.length-1;i>=0;i--){
        reversed+=str[i];
    }
    return str===reversed
}
let name=prompt("Enter the string: ");
if(isPalindrome(name)===true){
    console.log("The string is palindrome");
}
else console.log("The string is not palindrome");

console.log("Third Question:Count Vowels");
function countVowels(str){
    let count=0;
    str=str.toLowerCase();
 for(let i=0;i<str.length;i++){
    if(str[i]==='a'||str[i]==='e'||str[i]==='o'||str[i]==='u'||str[i]==='i'){
        count++;
    }
 }
 console.log("The number of vowels in string is:",count);
}

let name1=prompt("Enter the string: ");
countVowels(name1);

console.log("Fourth Question: Captalize first word");
function capitalizeWords(str){
let words=str.split(" ");
let result="";
    for(let i=0;i<words.length;i++){
        let word=words[i];
        if(word.length>0){
            result+=word[0].toUpperCase()+word.slice(1).toLowerCase()+" ";

        }
    }
    return result.trim();
}
let name2=prompt("Enter the string: ");
console.log(capitalizeWords(name2));


console.log("Fifth Question:Character Frequency");
console.log("The frequency of each charcter is string: ");
function charFrequency(str){
    let count={};
    for(let i=0;i<str.length;i++){
        let char=str[i];
        if(count[char]){
            count[char]++;
        }
        else{
            count[char]=1;

        }
    }
    return count;
}
let name3=prompt("Enter the String:");
console.log(charFrequency(name3));
//////better way of doing fifth question
let str='aabbbc';
function Frequency2(str){
    let a=[];
    for(let i of str.split('')){
        if(a.hasOwnProperty(i)){
            a[i]++;
        }
        else{
            a[i]=1;
        }
    }
    return a;
}
console.log(Frequency2(str));