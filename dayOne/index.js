// //function declaration form
// function computerArea(width,height){
//     let area= width*height;
//     return "the area of a rectangle with a width of " + width + " and a height of " + height + " is " + area + " square units."
// }


// console.log(computerArea(10,5))

// // //function expression
// // let addNumber= function(n2,n3){
// //     return(n2+n3)
// // }

const planetHasWater=function(planet){
    if (planet==="Earth"||"Mars"){
        return console.log(true)
    }
    else{
        return false
    }
}

planetHasWater('venus')