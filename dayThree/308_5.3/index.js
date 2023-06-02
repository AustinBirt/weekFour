// const personOne = {
//     name: {
//         first: 'Timmy',
//         last: 'Timtim'
//     },
//     age: 30,
//     location: {
//         city: 'New York',
//         state: 'New York',
//         zip: 10001
//     }
// }

// const personTwo = {
//     name: {
//         first: 'Julie',
//         last: 'July'
//     },
//     age: 28,
//     location: {
//         city: 'Albany',
//         state: 'New York',
//         zip: 12201
//     }
// }
// // const newLocation = {
// //     city: 'Rochester',
// //     state: 'New York',
// //     zip: 14604
// // }

// //question1
// // let moveLocation=function(person, locate){
// //     return person.location=locate;
// // }
// // moveLocation(personOne,newLocation)
// // console.log(personOne);

// //question2




// //I was also able to do the same thing by passing both people into the function,
// //i set both equal to nloc and didn't use the return keyword.
// //it successfully changed both of their locations

// // let changeAddress=function(personOne, nLoc){
// //     let newLocation=personOne.location=nLoc;
// //     personTwo.location=newLocation;
// // }

// // changeAddress(personOne,nLoc);
// // console.log(personOne);
// // console.log(personTwo);


// //Question 3

// const nLoc = {
//     city: 'Salo Pao',
//     state: 'California',
//     zip: 94035
// }

// personThree={
//     name:{
//         first: 'Winter',
//         last:'Timtim-July',
//     },
//     age:0,
//     location:{},
// }

// // let changeAddress=function(personOne, nLoc){
// //     let newLocation=personOne.location=nLoc;
// //     personTwo.location=newLocation;
// //     personThree.location=newLocation;
// // }

// // changeAddress(personOne,nLoc);
// // console.log(personOne);
// // console.log(personTwo);
// // console.log(personThree);


// //Quesion 4
// //Create a copy of personThree's location that breaks the reference to the current 
// //location object, and set their location to that copy.
// //*I think this means create a deep copy*

// // let changeAddress=function(personOne, nLoc){
// //     let newLocation=personOne.location=nLoc;
// //     personTwo.location=newLocation;
// //     personThree.location=newLocation;
// //     return personOne, personTwo, personThree
// // }



// //Question 4
let WinterLocation={
    city:'lansing',
    state:'Michigan',
    zip:48906,
}
// let newAge=function(years,...person){
//     for (human of person){
//     human.age=human.age+20
//     } 
// }
// let changeAddress=function(personOne, nLoc){
//     let newLocation=personOne.location=nLoc;
//     personTwo.location=newLocation;
//     personThree.location={...newLocation}
// }
// let livesChange=function(newAge,changeAddress){
//     newAge(20,personOne,personTwo,personThree);
//     changeAddress(personOne,nLoc)
// }

// livesChange(newAge, changeAddress);

// let WinterMoves=function(Winter,newLocation){

// }


// console.log(personThree);
// console.log(personTwo);
// console.log(personOne);


const personOne = {
    name: {
        first: 'Timmy',
        last: 'Timtim'
    },
    age: 30,
    location: {
        city: 'New York',
        state: 'New York',
        zip: 10001
    }
}

const personTwo = {
    name: {
        first: 'Julie',
        last: 'July'
    },
    age: 28,
    location: {
        city: 'Albany',
        state: 'New York',
        zip: 12201
    }
}

personThree={
    name:{
        first: 'Winter',
        last:'Timtim-July',
    },
    age:0,
    location:{},
}


//Question4

// // let newAge=function(years,...person){
// //     for (human of person){
// //     human.age=human.age+20
// //     } 
// personThree.location={...personOne.location}



// let changeAddress=function(person, newLocation){
//     let personThreeCopy={...person};
//     personThreeCopy.location=newLocation;
//     return personThreeCopy
// }
// console.log(changeAddress(personThree,WinterLocation))
// console.log(personThree);


//I DONT UNDERSTAND QUESTION 4 WORDING SO I DID THE WAY I THINK IT WANTS


//Question 5

// let newAge=function(years,...person){
//     for (human of person){
//     human.age=human.age+20
//     }
//     return console.log(personOne, personTwo, personThree);
// }
//     newAge(300,personOne,personTwo,personThree)

    // let clonedPerson=function(person){
    //     let clone={...person}
    //     clone.age=0;
    //     clone.location=WinterLocation
    //     return clone
    // }
    // console.log(clonedPerson(personOne));
    // console.log(personOne);


    //question 6

//     let thoughts={
//         good:"I love you",
//         bad:"I hate you",
//         unsure:"Wot"
//     }
// personOne.thoughts=thoughts;
// personTwo.thoughts=thoughts;
// personThree.thoughts=thoughts;
// console.log(personOne);
// console.log(personTwo);
// console.log(personThree);