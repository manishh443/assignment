// // What will be the output of the following?

// // const a = [1, 2, 3];
// // const b = a;
// // b.push(4);
// // console.log(a); // ?
// // How would you find the second largest number in an array like [10, 5, 8, 1, 9] without sorting?
// const a = [1, 2, 3];
// const b = a;
// b.push(4);
// console.log(a);  ////output [ 1, 2, 3, 4 ]
// // How do you count the number of occurrences of each element in an array?
// // Example: [1, 2, 2, 3, 1, 1] → {1: 3, 2: 2, 3: 1}
// function occ(arr){
//     let count={};
//     for(let num of arr){
//         count[num]=(count[num]||0)+1;
//     }
//     return count;
// }
// console.log(occ([1,2,3,4,1 ] ));

// ////Write a custom implementation of the .map() method (polyfill).
// function MapByMe(arr,callback){
// let result=[];
//   for(let i=0;i<arr.length;i++){
//     result.push(callback(arr[i],i,arr));
//   }
//   return result;
// }
// console.log(MapByMe([1,2,3],s=>s*2));

// ////How do you sort an array of objects by multiple properties?
// ///Example: [{name: "John", age: 30}, {name: "Alice", age: 25}, {name: "John", age: 22}]
// const people = [
//   { name: "John", age: 30 },
//   { name: "Alice", age: 25 },
//   { name: "John", age: 22 }
// ];

// people.sort((a, b) => {
//   if (a.name < b.name) return -1; 
//   if (a.name > b.name) return 1;  
//   return a.age - b.age;
// });

// console.log(people);




// function isPrime(n) {
//   if (n <= 1) return false;
//   if (n === 2) return true;

//   // Check from 2 to n - 1 (since no Math.sqrt)
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) return false;
//   }
//   return true;
// }

// function getPrimesFromUserInput() {
//   let input = prompt("Enter numbers separated by commas:");
//   let raw = input.split(",");
//   let numbers = [];


//   for (let i = 0; i < raw.length; i++) {
//     let val = parseInt(raw[i].trim());
//     if (!isNaN(val)) {
//       numbers.push(val);
//     }
//   }
//   let primes = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (isPrime(numbers[i])) {
//       primes.push(numbers[i]);
//     }
//   }
//   console.log("Prime numbers are:", primes);
// }

// getPrimesFromUserInput();




// // What will this code output and why?
// // const arr = [1, 2, 3];
// // arr.length = 0;
// // console.log(arr[0]); // ?
// // What’s the difference between Array.prototype.forEach and Array.prototype.map in terms of return value and use-case?
   
  const arr = [1, 2, 3];
arr.length = 0;
console.log(arr[0]);  //undefined    and for each dont return new array and map return new arrayu=

// What is the result of this?
const a = [1, 2, 3];
const b = a.slice(0, 2);
b[0] = 100;
console.log(a); // ? [1,2,3]

// How do you find all pairs of elements in an array whose sum equals a target number?
// Example: [1, 2, 3, 4, 5], target = 6 → [[1,5], [2,4]]

function findPairs(arr6, target) {
  const result = [];
  
  for (let i = 0; i < arr6.length; i++) {
    for (let j = i + 1; j < arr6.length; j++) {
      if (arr6[i] + arr6[j] === target) {
        result.push([arr6[i], arr6[j]]);
      }
    }
  }
  
  return result;
}
const arr6 = [1, 2, 3, 4, 5];
const target = 6;

console.log(findPairs(arr6, target)); 


// How would you chunk an array into groups of N elements?
// Example: [1,2,3,4,5,6], N = 2 → [[1,2], [3,4], [5,6]]

function chunkArray(arr, size) {
  const result = [];

  for (let i = 0; i < arr.length; i += size) {
    let chunk = arr.slice(i, i + size);
    result.push(chunk);
  }

  return result;
}
console.log(chunkArray([1, 2, 3, 4, 5, 6], 2));