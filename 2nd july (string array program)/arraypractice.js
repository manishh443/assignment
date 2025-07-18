 var prompt=require('prompt-sync')();
// 🧠 ARRAY QUESTIONS (5)

    // 1. **Remove Duplicates**  
    //    Write a function `removeDuplicates(arr)` that removes duplicate values from an array.  
    //    Example: `[1, 2, 2, 3, 4, 4] → [1, 2, 3, 4]`

// 2. **Flatten an Array**  
//    Write a function `flattenArray(arr)` to flatten a nested array (1 level deep).  
//    Example: `[[1, 2], [3, 4], [5]] → [1, 2, 3, 4, 5]`

// 3. **Find Max and Min**  
//    Write a function `findMaxMin(arr)` that returns the maximum and minimum number in an array.  
//    Example: `[4, 1, 9, -2] → { max: 9, min: -2 }`

// 4. **Sum of Even Numbers**  
//    Write a function `sumEven(arr)` that returns the sum of all even numbers in the array.  
//    Example: `[1, 2, 3, 4, 5, 6] → 12`

// 5. **Group by Type**  
//    Write a function `groupByType(arr)` that groups array elements by their type.  
//    Example: `[1, 'a', true, 2, 'b'] → { number: [1, 2], string: ['a', 'b'], boolean: [true] }`

console.log("First Question:Remove Duplicates");
function removeDuplicates(arr){
  let newarr=[];
  for(let i=0;i<arr.length;i++){
    if(!newarr.includes(arr[i])){
        newarr.push(arr[i]);
    }
  }
  return newarr;
}
let n=parseInt(prompt("Enter the size of array:"));
let arr=[];
for(let i=0;i<n;i++){
let elements=parseInt(prompt(' '));
arr.push(elements)
}
console.log("Array is:",arr);
console.log("New array:",removeDuplicates(arr));


console.log("Second Question: Flatten Array:");
function flattenArray(arr){
let flat=[];
for(let i=0;i<arr.length;i++){
    let subArray=arr[i];    
    for(let j=0;j<subArray.length;j++){
        flat.push(subArray[j]);
    }
}
return flat;
}
console.log("The array getting falt:",flattenArray([[1, 2], [3, 4], [5]]));


console.log("Third Question:Sum of an even number");
function sumEven(arr){
  let sum=0;
  for(let i of arr){
    if(i%2===0){
      sum+=i;
    }
  }
  return sum;
}
let o=parseInt(prompt("Enter the size of array:"));
let arr2=[];
  for(let i=0;i<o;i++){
    let element=parseInt(prompt(' '));
    arr2.push(element);
  }
  console.log("The sum of even numbers in array is:",sumEven(arr2));

console.log("Fourth Queestion:Find Max and Min in array:");
function findMaxMin(arr){
  let max=arr[0];
  let min=arr[0];
  for(let n of arr){
    if(n>max){
      max=n;
    }
    if(n<min){
      min=n;
    }
  }
  console.log("The max of array:",max);
  console.log("The min of array:",min);
}
let u=parseInt(prompt("Enter the size of array:"));
let arr3=[];
for(let i=0;i<u;i++){
  let elementss=parseInt(prompt(''));
    arr3.push(elementss);
}
findMaxMin(arr3);



  console.log("Fifth Question:Group array elements");
  function groupByType(arr){
    let b=[];
    for(let i of arr){
    if(b.hasOwnProperty(typeof i)){
      b[typeof i].push(i);
    }
    else {
      b[typeof i]=[i];
    }
  }
  return b;
}
let mixedArray = [1, "hello", true, 42, "world", false];
console.log(groupByType(mixedArray));