// //C.1&2 accessing Elements
//  const randomThings = [1, 10, "Hello", true];
// console.log(randomThings[0])

// console.log(randomThings[2]);

// //D.1-4 Changing Values

// const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
// ourClass[ourClass.indexOf('Github')]='Octocat'

// ourClass[4]='ourClass'
// //OR
// ourClass.push('cloudyCity')
// console.log(ourClass);


//E.Mix It Up 1-5
const myArray = [5, 10, 500, 20];

myArray.push('Aegon')
myArray.push('Aegis')

myArray.shift()

myArray.unshift('Bob Marley')

myArray.pop();

//deep copy
let newArray= [...myArray]
//making changes to the deep copy only 
let reversedArray=newArray.reverse();
console.log(myArray);
console.log(reversedArray);
console.log(newArray);

//F. Biggie Smalls
let integer='hey';
if (integer<100){
    console.log('little number');
}
else if(integer>=100){
    console.log('Big Number');
}
else{
    console.log('please input a valid number');
}

//G.Monkey in the Middle

if(integer<5){
    console.log('little number');
}
else if(integer>10){
    console.log('big number');
} 
else{

console.log('monkey');}

//H. Whats in your closet?

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];
  console.log(`Kristyn is rocking that ${kristynsCloset[3]} today!`);
//2.I use the splice so i can insert the item at the specific location i want
//I used indexOf so i can get the exact index of the item that i had the name of
//i added plus one because i dont want to start at the specific index of that item
//i was asked to start after it. deletenone
  kristynsCloset.splice(kristynsCloset.indexOf('yellow knit hat')+1,0,'raybans')
  console.log(kristynsCloset);
  let indexOfYellowKnitHat=kristynsCloset.indexOf('yellow knit hat')
  kristynsCloset[indexOfYellowKnitHat]='stained knit hat'
console.log(kristynsCloset);

//THOM

let thomsTop=thomsCloset[0][0];
let thomsBottoms=thomsCloset[1][2];
let thomsAccessory=thomsCloset[2][1];

console.log(`Wow! look at thom rocking his ${thomsTop}, ${thomsBottoms} and a cool ${thomsAccessory}. He's so cool.`);

thomsCloset[1][2]='Footie Pjs'
console.log(thomsCloset);


//Functions
//a
function greeting(name){
    let upperCased=name[0].toUpperCase() + name.slice(1);
    if(typeof upperCased==='string'){
        console.log(`it's nice to meet you ${name}.`);
    }
    else{
        console.log('please input your name');
    }
}
let name='austin'
greeting(name)
//b. print cool
function printCool(name){
    let newName=name[0].toUpperCase() + name.slice(1);
    if (typeof newName==='string'){
        console.log(name + ". You're cool.");
    }
}
printCool('angela');

//c. calculate cube
function calculateCube(number){
    let cubed=number**3
    console.log(cubed);
}

calculateCube(5)

//d.Is vowel
function isVowel(vowel){
    if(typeof vowel==='string'){
        if(vowel==='a' || vowel==='e' || vowel==='i'|| vowel==='o' || vowel==='u' ||vowel==='y'){
            return true
        }
    else{
        return false
    }
    }
    else{
        return 'please input a letter'
    }
}

console.log(isVowel('i'));
console.log(isVowel('o'));
console.log(isVowel('u'));
console.log(isVowel('y'));

//E.Get Two Lengths

function getTwoLengths(string1,string2){
    if(typeof string1==='string' && typeof string2==='string'){
        let array=[string1.length,string2.length]
        return array 
    }

}
console.log(getTwoLengths('hello','goodbye'))


//F.Get multiple lengths
function getMultipleLengths(stringsArrays){
    let newArray=[]
    for(let string of stringsArrays){
        let length=stringsArrays[stringsArrays.indexOf(string)].length
        newArray.push(length)
    }
    return newArray
}

console.log(getMultipleLengths(['this is the','array of strings', 'that was asked for']))


//G. Max of Three
function maxOfThree(n1,n2,n3){
    if(n1===n2 && n2===n3){
        return console.log(`they're all this number ${n1}`);
    }
    else if(n1>=n2 && n1>=n3){
        if(n1===n2 || n1===n3){
            return console.log(n1);
        }
        else{
            return console.log(n1);
        }
    }
    else if(n2>=n1 && n2>=n3){
        if(n2===n1 || n2===n3){
            return console.log(n2);
        }
        else{
            return console.log(n2);
        }
    }
    else if(n3>=n2 && n3>=n1){
        if(n3===n1 || n3===n2){
           return console.log(n3);
        }
        else{
            return console.log(n3);
        }
    }
    else{'please input 3 numbers this time'}
}

maxOfThree(10,2,4)

//H.PrintLongestWord
function printLongestWord(array){
//with the sort method I am able to alphabetize strings by letters,
//but theres an issue with this so i have to sort by string length.
//if i sort in descending order, the first element is going to have the
//highest length. I print that item.
//This logic allows me to order any aray from longest to shortest    
    let newArray=array.sort((a,b)=>{
        if(a.length>b.length){
            return -1
            }
        else if(a.length<b.length){
            return 1
        }
        else{
            return 0
        }

    });
    console.log(newArray[0]);
}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));


//I had to look up and found another way, You can loop over each element
//and update a "longest word" variable that begins with an empty string.
//in the for loop, you have a conditional that only executes if the new word
//is longer than the current longest word. It also executes when the string
//is currently empty like at the beginning

function printLongestWord(words) {
    let longestWord = '';
    
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > longestWord.length || longestWord === '') {
        longestWord = words[i];
      }
    }
    
    return longestWord;
  }

  

  //OBJECTS
  //A.Make a User Object
  let user={
    name:'Austin',
    email:'Birt1313@gmail.com',
    age:69,
    purchased:[],
  }
  user.email='birt13@gmail.com'
  user.age=user.age+1;
  user.location='Lansing'
  //user.purchased is an array. so you can directly use the method onit
  //user.purchased equals the empty array
  user.purchased.push('carbohydrates')
  user.purchased.push('peace of mind')
  user.purchased.push('merino jodhpurs')

  console.log(user);
  
  //E Object within an object
  user.friend = {
    name: "Grace Hopper",
    age: 85
}
console.log(user);

user.nextFriend={
    age:42,
    name:'donkey kong',
    location:'Kong Country',
    purchased:[]
}
console.log(user);
console.log(user.friend.name);
console.log(user.nextFriend.location);
user.nextFriend.age=55;
user.nextFriend.purchased.push('One Ring')
user.nextFriend.purchased.push('A latte')
console.log(user);
console.log(user.nextFriend.purchased[1]);

//F. Loops

for(let purchases of user.purchased){
    console.log(purchases);
}
for (let purchases of user.nextFriend.purchased){
    console.log(purchases);
}

//G.Functions Operating on Objects

function updateUser(){
    ++user.age;
    user.name=user.name.toUpperCase()
}

function oldAndLoud(person){
    ++person.age;
    person.name=person.name.toUpperCase()
}
console.log(user);
oldAndLoud(user)
console.log(user);

//EXTRAS
//H.Mama Cat
//  I DO THESE ON MY OWN TIME AFTER I TURN THE ASSIGNMENT IN
let cat1={}