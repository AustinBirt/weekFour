// //Question 1
// function maxOfTwoNumbers(n1, n2){
//     if (n1>n2){
//         return n1
//     }
//     else if(n2>n1){
//         return n2
//     }
//     else{return n1 || n2}
// }
// console.log(maxOfTwoNumbers(5,5))

//Question 2

// let maxOfThree = function(n1,n2,n3){
//     if(n1>n2 && n1>n3){
//         return n1
//     }
//     else if(n2>n1 && n2>n3){
//         return n2
//     }
//     else if (n3 >n1 && n3>n2){
//         return n3
//     }
//     else {return "All numbers are equal"}
// }

// console.log(maxOfThree(4,4,4))

//Question3
// let letter='a'
// function isCharAVowel(letter){
//     if (typeof letter==='string'){
//         letter=letter.toUpperCase()
//         if(letter==='A' ||letter==='E'|| letter==='I' || letter ==='O' || letter==='U'){
//             return true
//         }
//         else{
//             return false
//         }
//     }
//     else{
//         return 'please input a letter'
//     }
// }
// console.log(letter);
// console.log(isCharAVowel(letter));


//Question4
// let numberArray=[1,2,3,4,5]
// let sumArray = function(array){
//     let sumOfArray=0;
//     for(values of array){
//         sumOfArray+=values
//     }
//     return console.log(sumOfArray)
// }

// sumArray(numberArray)

//Question5

// let numberArray=[2,4,5];
// function multiplyArray(numberArray2){
//     let product=1;
//     for (i=0; i<numberArray2.length; i++){
//         product*=numberArray2[i]
//         console.log(product);
//     }
 
// }
// multiplyArray(numberArray)

//Question6
// let numArgs=function(...argument){
//     let totalArguments=0;
//     for(let i=0; i<argument.length; i++){
//         if (argument[i]){
//             totalArguments+=1; 
//         }
//     }
//     return console.log(totalArguments)
// }

// numArgs(2, "hello", 3, "world", 5, "yellow");

//Question7
// function reverseString(string){
//     let splitString=string.split("");
//     let reversedArray=splitString.reverse();
//     let reversedString=reversedArray.join("");
//     return console.log((reversedString));
// }
// console.log(reverseString('Hello'));

//option2
// function reverseString(string){
//     let newString=""
//     for(let i=string.length-1;i>=0; i--){
//         newString+=string.charAt(i)
//     }
//     return newString
// }
// console.log(reverseString('Hello'));

//option3
// function reverseString(string){
//     if(typeof string ==='string'){
//         let newString="";
//         for (let i=string.length-1; i>=0; i--){
//             newString+=string[i]
//         }
//         return newString
//     }
//     else if(Array.isArray(string)){
//         let arrayString=string.join("");
//         let reversedArrayString="";
//         for(let i=arrayString.length-1;i>=0; i--){
//             reversedArrayString+=arrayString.charAt(i);
//         }
//         return reversedArrayString
//         }
//     else if(typeof string==='number'){
//         let numberString=string.toString();
//         let reversedNumberString="";
//         for(let i=numberString.length-1;i>=0; i--){
//             reversedNumberString+=numberString.charAt(i);
//         }
//         return reversedNumberString
//         }
//     else {return "I cannot easily convert this at my current level"}
// }
// console.log(reverseString(["Hello", "world"]));

// //question9
// let array=['New item','Hello', 'say', 'in', 'the', 'morning']
// let stringsLongerThan= function(n1, arrayItems){
//     let newArray=arrayItems.slice(n1);
//     return newArray
// }
// console.log(stringsLongerThan(1, array));

// //question10
// // function addList(...numbers){
// //     let sum=0;
// //     for (let i=0;i<numbers.length; i++){
// //         sum+=numbers[i];
// console.log(sum);
// //     }
// console.log(sum);
// //     return sum
// // }

// // console.log(addList(1,3,4,5,6))



//other practice
// function greeting(){
//     return sayHi();
// }
// function sayHi(){
//     return 'hi!';
// }

// console.log(greeting());

// const euros = [29.76, 41.85, 46.5];

// const average = euros.reduce((total, amount, index, array) => {
//   total += amount;
//   return
// });
// console.log(average);


