

//The every() method tests whether all elements in the array pass the test 
//implemented by the provided function. It returns a Boolean value.

//question1
// let evenNumbers=nums.every((value)=>{
//    value>0;
//     })
//     console.log(evenNumbers);

//question2
// let newArray= panagram.every((value)=>{
//     return value.length<8
// })

// console.log(newArray);

//question3
// let filteredArray=nums.filter((values)=>{
//     return values<4;
// })

// console.log(filteredArray);
//question4

// let filteredArray=panagram.filter((values)=>{
//     return values.length%2===0;
// })
// console.log(filteredArray);

//Question5

// let found=nums.find(values=>{
//     return values%5===0;
// })

// console.log(found);

//question6
// let found=panagram.find(values=>{
//     return values.length>5
// })
// console.log(found);
//no value is greater than 5, so undefined

//question7

// let indexOf=nums.findIndex(values=>{
//     return values%3===0;
// })

// console.log(indexOf);



const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];



//question8
// let twoCharacters=panagram.findIndex(values=>{
//    return values.length<2
// })
// console.log(twoCharacters);

//question 9 
//For Each

// nums.forEach(value=>{
//     console.log(value*3);
// })


//Question10
// panagram.forEach((value)=>{
//     console.log(value+ "!");
// })

//The original array, that a foreach method is called on, is unaffected by the
//method, it simply iterates over each element of the array using a callback function

//question11-map
// let newArray=nums.map(values=>{
//     return values*100
// })

// console.log(newArray);

//Question12//edited because i was practicing
// let newArray=panagram.map(values=>{
//     return values[0].toUpperCase() + values.slice(1);
// })
// console.log(newArray);
// console.log(panagram);

//question13
// let result=nums.some(value=>{
//     return value%7===0;
// })
// console.log(result);

//Question14
// let result=panagram.some(value=>{
//    return value.includes('a')

// })
// console.log(result);



//Going further will be done but wanted to get this turned in now