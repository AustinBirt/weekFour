//A.1-6
/*
1.let x=value. you can do it with pass by value or reference
2.we can do this many ways but the easiest is reassigning it a new value
3. we pass by variable. let x=1; let y=x
4.declare is what you do with let or const and declare a new variable; assign is 
you do when you are just using the variable name and reassigning it a variable.
define means defining a function or any other piece of data or expression
5.pseudo code is a way to nicely display a piece of algorithm(a sequence of steps 
    to complete some task).
    **the main goal of pseudo code is to explain what exactly each line of a program 
    should do (geekforgeeks.org)
6. a majority of the time thinking about code and how to solve the problem is a huge
majority of the time implementing a solution
*/

//B Strings

//Question1

// let firstVariable='Hello World'
// firstVariable=1
// console.log(firstVariable);
// let secondVariable=firstVariable;
// secondVariable="HelloWorld"
// console.log(firstVariable);
// //answer:it was passed by value and did not change because a new space in memory was
// //created

// let yourName='AustinBirt'
// console.log("Hello, my name is " + yourName);

//C Booleans
// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';

// console.log(a < b);
// console.log(c > d);
// console.log('Name' === 'Name');
// // FOR THE NEXT TWO, USE ONLY && OR ||
// console.log(true || false);
// console.log(false || false || false || false || false || true);
// console.log(false === false)
// console.log(e === 'Kevin');
// console.log(a+b===c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
// console.log(a*a===d); // note: the answer is a simple arithmetic equation, not something "weird"
// console.log(48 != '48');


// //DThe Farm
// let animal='cow'
// if(animal==='cow'){
//     console.log("mooooooo");
// }
// else{
//     console.log("Hey! You're not a cow");
// }

// //E Driver's Ed
// let personAge=10;
// if (personAge>=16){
//     console.log('Here are the keys!')
// }
// else{
//     console.log('Sorry, youre too young');
// }

//A. The basics
// for(let i=0;i<=10;i++){
//     console.log(i);
// }
// for(let i=10; i<=400; i++){
//     console.log(i);
// }
// for(let i=12; i<=4000;i++){
//     if(i%3===0){
//         console.log(i);
//     }
//     else{continue;}
// }

//b Get Even
// for(let i=1; i<=100; i++){
//     if(i%2===0){
//         console.log(i + ' This is even');
//     }
//     else{ console.log(i);
//     }
// }

//c Give me 5
// for (let i=0; i<=100; i++){
//     if(i%5===0){
//         if(i%5===0 && i%3===0){
//             console.log('I found a ' + i + '. High Five! ' + 'I found a ' + i + ". This is too crowded.");
//         }
//         else{
//         console.log('I found a ' + i + '. High Five!');
//     }
//     }
//     else if(i%3===0){
//         console.log('I found a ' + i + ". This is too crowded.");
//     }
// }

//D Savings Account
// let bank_account=0;
// for (let i=1; i<=10; i++){
//     bank_account+=i;
// }
// console.log(bank_account);

let account=0;
for (let i=1; i<=100; i=2){
account+=(i*2)
}
console.log(account);