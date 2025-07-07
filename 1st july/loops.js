// //Print numbers from 1 to 10 using a for loop.
let i=1;
while(i<=10){
   console.log(i)
    i++
}

//Print numbers from 10 to 1 using a while loop.
let i=10;
while(i>0){
    console.log(i)
    i--
}

// //Print even numbers between 1 and 50 using a loop.
let i=1;
while(i<=50){
    if(i%2==0){
        console.log(i)
    }
    i++
}

//Print odd numbers from 20 to 50 using a  loop.
i=20;
while(i<=50){
    if(i%2==!0){
        console.log(i)
    }
    i++
}

//Print all numbers divisible by 5 from 1 to 50.
i=1;
while(i<=50){
    if(i%5==0){
        console.log(i)
    }
    i++
}

//find the sum of numbers from 1 to 100.
let i=1;
let sum=0;
while(i<=100){
    sum=sum+i;
    i++;
}
console.log("The sum is:", sum); 

//do while loop
// let i=1
// do{
//     console.log(i)
//     i++
// }while(i<11)

//Print numbers from 1 to 5 using a do...while loop.
let i=1
do{
    console.log(i)
    i++
}while(i<=5)

// //Print all numbers divisible by 3 from 1 to 30.
let i=3;
while(i<=30){
    if(i%3==0){
        console.log(i)
    }
    i++
}

//Find the sum of numbers from 1 to 100.
let i=1;
let sum=0;
while(i<=100){
   sum+=i
   i++
}
console.log(sum)

// //Find the product of numbers from 1 to 10.
let i=1;
let product=1;
while(i<=10){
    product*=i
    i++
}
console.log(product)

//Find the sum of all even numbers between 1 and 50.
let i=1;
let sum=0;
while(i<=50){
    if(i%2==0){
        sum+=i
    }
    i++
}
console.log(sum)

//Find the sum of squares of numbers from 1 to 10.
//(i.e., 1² + 2² + ... + 10²
let i=1;
let sum=0;
while(i<=10){
    sum+=i**2
    i++
}
  console.log(sum)

//Print numbers from 1 to 20, skip multiples of 4 using continue.
let i=1;
while(i<20){
    if(i%4==0){
        i++
        continue
    }
    console.log(i)
    i++
}
 
//Print numbers from 1 to 10, stop at 7 using break.
let i=1;
while(i<10){
    if(i==7){
        break
    }
    console.log(i)
    i++
}

//Count how many numbers between 1 and 100 are divisible by both 3 and 5.
let i=1;
let count=0;
while(i<=100){
    if(i%15==0){
        count++
        i++
    }
 i++
}
console.log(count)

//Print all pairs (i, j) where i and j go from 1 to 3.
for(let i=1;i<=3;i++){
    for(let j=1;j<=3;j++){
        console.log(`(${i}, ${j})`)
    }
}

//Find all combinations of (a, b) such that a + b = 5 (1 ≤ a, b ≤ 4).
for(let a=1;a<=4;a++){
    for(let b=1;b<=4;b++){
        if(a+b===5){
        console.log(`(${a},${b})`)
    }
}
}

//Print the factorial of a number (e.g., 6! = 720).
var prompt = require('prompt-sync')();
let num=parseInt(prompt('enter the number :'))
let output=1;
for(let i=num;i>1;i--){
    output*=i
}
console.log(output)

//Check if a given number is a prime number using a loop.
let num=parseInt(prompt('enter number is :'))
if(num<=1){
    console.log(num+' is not a prime number')
}else{
    for(i=2;i<=num;i++){
        if(num%i==0){
            console.log(num+' is not a prime number')
            break;
        }else{
            console.log(num+ ' is a prime number')
            break;
        }
    }
}   

// //Print the reverse of a number using a loop (e.g., 123 → 321).
let num=parseInt(prompt('enter number is :'))
let reversed =0;
originalnum=num;
while(originalnum>0){
    const digit= originalnum%10;
    reversed=reversed*10 + digit;
    originalnum= Math.floor(originalnum/10);
}
console.log(`reversed number of ${num} is : ${reversed}`)

//Count the number of digits in a given number using a loop.
let num=parseInt(prompt('enter number is :'))
let count =0;
let onum=num;
while(onum>0){
    const digit=onum%10;
    count++;
    onum=Math.floor(onum/10);
}
console.log(count)

//Check if a number is a palindrome (e.g., 121, 1331) using only number operations and loops.
let num=parseInt(prompt('enter number is :'))
let onum=num;
let reversed=0;
while(onum>0){
    const digit=onum%10;
    reversed=reversed*10+ digit;
    onum=Math.floor(onum/10);
}if(num==reversed){
    console.log(`number ${num} is a palindrome number` )
}else{
    console.log(`number ${num} is not a palindrome number`)
}