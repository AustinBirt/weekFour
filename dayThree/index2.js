// class Cat {
//     constructor(gender,color){
//         this.gender=gender;
//         this.color=color;
//         this.asshole=true;
//     }
//     getSpayed(){
//         this.asshole=false;
//     }
//     getColored(newColor){
//         this.color=newColor
//     }
//     ateTooMuch(){
//         this.fat=true;
//     }
// }
// let Tabby=new Cat('Female', 'Orange');
// let Orantiajalantelous=new Cat('Male','Yellow');
// console.log(Tabby);
// console.log(Orantiajalantelous);

// //no Tabby can't get spayed
// Tabby.getColored('Green');
// Tabby.ateTooMuch()
// Orantiajalantelous.getSpayed();
// Orantiajalantelous.getColored('Black');
// Orantiajalantelous.ateTooMuch();
// console.log(Tabby);
// console.log(Orantiajalantelous);



class Pirate {
  constructor(name, favoriteWord, age) {
            this.name=name;
            this.favoriteWord=favoriteWord,
            this.age=age;
  }
  greeting(){
    console.log(`${this.favoriteWord}, my name be ${this.name} and I am but ${this.age} years old!`);
}
learnedWordsFromTheBar(){
    let array=['Ahoy', 'Arg', 'scurvy!','Matey', 'Land Lubbers', 'Har Har']
    console.log(Math.floor(Math.random(array)* array.length));
    return this.favoriteWord=favoriteWord
}
gotDrunk(){
    this.name='Poly'
}
static printPirates(pirateShip){
    for(let i=0; i<pirateShip.length; i++){
        console.log(pirateShip[i].name);
        console.log(pirateShip[i].favoriteWord);
        console.log(pirateShip[i].age)
    }
}
}

let jollyRoger=[
    new Pirate('jollyRoger', 'Arg!', 56),
    new Pirate('Rick','Ahoy', 33),
    new Pirate('Ron', 'scurvy!', 55)
]

let blackPearl=[
    new Pirate ('blackPearl', 'Matey', 67),
    new Pirate('blondie', 'Land Lubbers', 34),
    new Pirate('Red','Har Har', 99)
]


console.log(jollyRoger);
console.log(blackPearl);
Pirate.printPirates(jollyRoger)
Pirate.printPirates(blackPearl)

