var prompt = require('prompt-sync')();
//Write a program that takes a number as input and checks whether it is even or odd using if-else.
// let num=prompt('given number:')
// if(num%2==0){
//     console.log('given number is even')
// }
// else{
//     console.log('given number is odd')
// }

//Write a program that takes a number as input and determines if it is positive, negative, or zero.
// let num= prompt('given number is :')
// parseInt(num)
// if(num==0){
//     console.log('given number is zero')
// }else {
//     if(num>0){
//     console.log('given number is positive') 
//     }   
//     else {
//     console.log('given number is negative')
//     }
// }

//Take two numbers and check if they are equal, or print which one is greater.
// let a=prompt('first number is :')
// let b=prompt('second number is :')
// parseInt(a)
// parseInt(b)
// if(a>b){
//     console.log('first number is greater than second')
// }else if(b>a){
//     console.log('second number is greater than first')
// }else{
//     console.log('both numbers are equal')
// }

//Write a program that takes age as input and checks if the person is eligible to vote (age ≥ 18).
// let age=prompt('given age is :')
// parseInt(age)
// if(age>=18){
//     console.log('person is eligible to vote')
// }else{
//     console.log('person is not eligible to vote')
// }

//Write a program that takes a number and checks whether it is divisible by 5 and 11.
// let num=prompt('given number is :')
// parseInt(num)
// if(num%5==0){
//     console.log('given number is divisible by 5')
// }else{
//     if(num%11==0){
//         console.log('given number is divisible by 11')
//     }else{
//         console.log('given number is not divisible by either 11 or 5')
//     }
// }

//Write a program that takes a year as input and checks if it is a leap year.
// let year=prompt('enter year is :')
// parseInt(year)
// if((year%4==0) || (year%100==0 && year%400==0) ){
//     console.log(year + ' is a leap year')
// }else{
//     console.log(year + ' is not a leap year')
// }

//Write a program that takes marks as input and checks if the student passed (passing marks: 33 or above).
// let mark=prompt('enter your mark :')
// parseInt(mark)
// if(mark>=33){
//     console.log('you are passed')
// }else{
//     console.log('you are failed')
// }

//Write a program that takes a single character input and checks whether it is uppercase or lowercase
// let char=prompt('write single character ' )
// if(char>='A' && char<='Z'){
//     console.log(char + ' is a Uppercase ')
// }else{
//     console.log(char + ' is a lower case')
// }

//Write a program that takes a number (1 to 7) and prints the corresponding day of the week using if-else.
// let day=parseInt(prompt('Enter number between 1 to 7 :'))
// if(day==1){
//     console.log('Monday')
// }else if(day==2){
//     console.log('Tuesday')
// }else if(day==3){
//     console.log('Wednesday')
// }else if(day==4){
//     console.log('Thursday')
// }else if(day==5){
//     console.log('Friday')
// }else if(day==6){
//     console.log('Saturday')
// }if(day==7){
//     console.log('Sunday')
// }else{
//     console.log(day + ' is not specify for any day')
// }

//Input a character and check if it's uppercase, lowercase, digit, or special character.
// let input=prompt('give input is :')
// if(input>='A' && input<='Z'){
//     console.log(input+ ' is Upercase alphabet')
// }else if(input>='a' && input<='z'){
//     console.log(input+ ' is lowercase alphabet')
// }else if(input>=-Infinity && input<=Infinity){
//     console.log(input + ' is digit')
// }else{
//     console.log(input + ' is special character')
// }

//
// Input a number and check if it's divisible by 3 or not.
// let num=parseInt(prompt('enter number is :'))
// if(num%3==0){
//     console.log(num + ' is divisible by 3')
// }else{
//     console.log(num + ' is not divisible by 3')
// }

//Input a number and check if it’s a multiple of 7 or not.
// let num=parseInt(prompt('enter number is :'))
// if(num%7==0){
//      console.log(num + ' is multiple of 7')
// }else{
//      console.log(num + ' is not multiple of 7')
// }

//Input a character and check whether it's a vowel or consonant (assume lowercase).
// let ch=prompt('enter character : ')
// if(ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u' ){
//     console.log(ch +' is a vowel')
// }else{
//     console.log(ch+ ' is a consonant')
// }

//Input a number and check if it is between 10 and 50.
// let num=parseInt(prompt('enter a number :'))
// if(num>10 && num<50){
//     console.log(num +' is between 10 and 50')
// }else{
//     console.log(num + ' is not between 10 and 50')
// }

//Input a number and check if it is a 3-digit number.
// let num = parseInt(prompt('enter number is :'))
// let length= num.toString().length;
// if(length== 3){
//     console.log(num +' is a 3 digit number ')
// }else{
//     console.log(num + ' is not 3 digit number')
// }

//Input a temperature and print if it's Hot (>30), Moderate (15–30), or Cold (<15).
// let temp=parseInt(prompt('enter temperature in between 0 to 50 degree calsius:'))
// if(temp>30){
//     console.log(temp + 'is hot temperature')
// }else if(temp>15 && temp<30){
//     console.log(temp+ ' is moderate temperature')
// }else{
//     console.log(temp+ ' is cold temperature')
// }

//Input three numbers and find the greatest among them.
// let a=parseInt(prompt('enter first nummber :'))
// let b=parseInt(prompt('enter second nummber :'))
// let c=parseInt(prompt('enter third nummber :'))
// if(a>=b && a>=c){
//     console.log(a +' is greatest among them')
// }else if(b>=a && b>=c){
//     console.log(b +' is greatest among them')
// }else{
//     console.log(c +' is greatest among them')
// }

//Input marks of a student (out of 100) and print the grade:

// A (≥90), B (≥75), C (≥60), D (≥40), F (<40).
// let mark=parseInt(prompt('enter the mark:'))
// if(mark>=90){
//     console.log('student grade is A')
// }else if(mark>=75){
//     console.log('student grade is B ')
// }else if(mark>=60){
//     console.log('student grade is C')
// }else if(mark>=40){
//     console.log('student grade is D')
// }else{
//     console.log('student is fail')
// }

//Take a number and check whether it is divisible by both 5 and 11.
// let num=parseInt(prompt('enter number is :'))
// if(num%55==0){
//     console.log(num+' is divisible by both 5 and 11')
// }else{
//     console.log(num+' is not divisible by both 5 and 11')
// }

//Input a number and check if it is a prime number (basic logic).
// let num=parseInt(prompt('enter number is :'))
// if(num<=1){
//     console.log(num+' is not a prime number')
// }else{
//     for(i=2;i<=num;i++){
//         if(num%i==0){
//             console.log(num+' is not a prime number')
//             break;
//         }else{
//             console.log(num+ ' is a prime number')
//             break;
//         }
//     }
// }   

//Input a number and print whether it is even, odd, and also whether it's positive or negative.
// let num=parseInt(prompt('enter number is:'))
// if(num%2==0){
//     if(num>=0){
//     console.log(num+' is even and  positive')
// }else{
//     console.log(num+' is even and negative ')
// }}else{
//     if(num>=0){
//         console.log(num+' is odd and positive ')
//     }else{
//         console.log(num+' is odd and negative')
//     }
// }

//Input marks in 5 subjects, calculate the average and print grade using if-else.
// let s1=parseInt(prompt('enter 1th subject mark:'))
// let s2=parseInt(prompt('enter 2th subject mark:'))
// let s3=parseInt(prompt('enter 3th subject mark:'))
// let s4=parseInt(prompt('enter 4th subject mark:'))
// let s5=parseInt(prompt('enter 5th subject mark:'))
// let average=(s1+s2+s3+s4+s5)/5
// if(average>=90){
//      console.log('student grade is A')
//  }else if(average>=75){
//     console.log('student grade is B ')
// }else if(average>=60){
//     console.log('student grade is C')
// }else if(average>=40){
//     console.log('student grade is D')
// }else{
//     console.log('student is fail')
// }

//Take a number and check if it's divisible by either 3 or 5 but not both.
// let num=parseInt(prompt('enter number is :'))
// if((num%3==0) && !(num%3==0 && num%5==0)){
//     console.log(num+' is divisible by 3')
// }else if((num%5==0) && !(num%3==0 && num%5==0)){
//     console.log(num+' is divisible by 5')
// }else{
//     console.log('enter a valid number')
// }

//Input a number and check if it is a palindrome number (e.g., 121).
//console.log(num+' is not a palindrome number')
// }

//Input a number and check if the sum of its digits is even or odd.
// let num=parseInt(prompt('enter number is :'))
// let numstr=num.toString();
// let output =0;
// for(let i=0;i<numstr.length;i++){
//     output += parseInt(numstr[i])
// }

// if(output%2==0){
//     console.log('even')
// }else{
//     console.log('odd')
// }

//Input a number and check if it is a palindrome number (e.g., 121).
// let num=prompt('enter number is :')
// console.log((num==num.split("").reverse().join("")) ?"palindrome number":"not palindrome number");

//Input hours worked and calculate overtime pay. Overtime is paid for >40 hours at Rs. 12/hr.
// let totalhour = prompt('enter total worked hour :')
// console.log((totalhour >40) ? `overtime pay Rs. ${(totalhour - 40)*12}` : 'not workrd overtime')

//Input basic salary and calculate net salary based on conditions:

// //HRA = 20%, DA = 50% if basic < 10000; else HRA = 30%, DA = 80%.
// let salary=parseFloat(prompt('enter basic salary :'))
// let da , hra ;
// if(salary<10000){
//     da=0.2*salary;
//     hra=0.5*salary
// }else{
//     da=0.8*salary;
//     hra=0.3*salary
// }
// console.log(`net salary is ${salary+da+hra}`)

//Input month number and print number of days in that month.
// let monthnum=parseInt(prompt('enter month number is :'))
// if(monthnum == 1 || monthnum == 3 || monthnum == 5 || monthnum == 7 || monthnum == 8 || monthnum == 10 || monthnum == 12){
//     console.log(`number of days in ${monthnum}th month is 31`);
// } else if(monthnum == 4 || monthnum == 6 || monthnum == 9 || monthnum == 11){
//     console.log(`number of days in ${monthnum}th month is 30`);
// } else if(monthnum == 2){
//     console.log(`number of days in ${monthnum}th month is 28 or 29 (leap year)`);
// } else {
//     console.log("Invalid month number");
// }

//Take a password as input and check if it is strong (length ≥8, includes digit and special character).
// let pass=prompt('enter password :')
// let hasdigit = /[0-9]/
// let specialchar = /[!#$%^&*-|:?]/
// if(pass.length>=8 && hasdigit.test(pass) && specialchar.test(pass)){
//     console.log('password is strong')
// }else{
//     console.log('password is not strong')
// }

