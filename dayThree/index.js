// const adventurer = {
// 	name: "Timothy",
// 	hitpoints: 10,
// 	belongings: ["sword", "potion", "Tums"],
// 		companion: {
// 			name: "Velma",
// 			type: "Bat",
// 			companion: {name:"Tim",
// 						type:"Parasite",
// 						bagOfHolding: ["Mini Knife", "Scarf of Flight", "Staff of Wisdom", "health insurance"],
// 						}
// 		}
// 	}


// // console.log(adventurer.belongings)
// // console.log(adventurer.belongings[adventurer.belongings.indexOf(adventurer.belongings.at('sword'))]);
// // //console.log(adventurer.belongings[0])

// // for (let items of adventurer.belongings){
// // 	console.log(items);
// // }


// // console.log(adventurer.companion);
// // console.log(adventurer.companion.name);
// // console.log(adventurer.companion.type);
// // console.log(adventurer.companion.companion.type);
// console.log(adventurer.companion.companion.bagOfHolding[adventurer.companion.companion.bagOfHolding.indexOf("health insurance")]);

// // console.log(player1);
// // console.log(player2);
// // console.log(typeof player1);
// // console.log(typeof player2);



// class Character {
// 	constructor(name, age, eyes, hair,lovesCats,lovesDogs=false) {
// 		this.legs=2;
// 		this.arms=2;
// 		this.name=name;
// 		this.age=age;
// 		this.eyes=eyes;
// 		this.hair=hair;
// 		this.lovesCats = lovesCats;
//     	this.lovesDogs = lovesDogs;
//   }

// 	greet(anotherPlayer) {
// 		console.log("Hi " + anotherPlayer + "!");
// 	}
// 	smite(){
// 		console.log("I smite thee");
// 	}
// 	setHair(hairColor){
// 		this.hair=hairColor
// 	}
// 	classyGreeting(otherCharacter){
// 		console.log(`Hello ${this.hair}. I like your ${this.hair} hair`);
// 	}
// }

// let player1=new Character('Austin', 27, "black", "brown",true,false);
// let player2=new Character('Angela', 24, "green", "black",true,true);

// // player1.greet("Player 2");
// // player2.greet('Player 1');
// // player1.smite()

// player1.setHair('Black')
// player1.classyGreeting(player2);
// // player2.classyGreeting(player1);


// console.log(player1);
// console.log(player2);






//Working with multiple classes, re posted code

class Character {
	constructor (name, age, eyes, hair, lovesCats, lovesDogs) {
	  this.legs = 2;
	  this.arms = 2;
	  this.name = name;
	  this.age = age;
	  this.eyes = eyes;
	  this.hair = hair;
	  this.lovesCats = lovesCats;
	  this.lovesDogs = lovesDogs;
	}
	greet (otherCharacter) {
	  console.log('Hi ' + otherCharacter + '!');
	}
	classyGreeting (otherClassyCharacter) {
	  console.log('Greetings ' + otherClassyCharacter.name + '!');
	}
	setHair (hairColor) {
	  this.hair = hairColor;
	}
	smite () {
	  console.log('I smite thee you vile person!');
	}
  }

class Elves extends Character{
	constructor(name, age, eyes, hair, lovesCats, lovesDogs, birthLand, abilities){
		super(name,age,eyes,hair,lovesCats,lovesDogs)
		this.birthLand=birthLand;
		this.abilities=abilities;
	}
	gossip(bestFriend1, bestFriend2){
		console.log("I'm not going to lie, " + bestFriend1.name +
		" is my best friend. I really used to enjoy hanging out with "
		+ bestFriend2.name +" but we just don't see eachother anymore")
	}
	getAttacked(){
		console.log("Oh no! I've been attacked!");
		return this.age=this.age-1;
	}
}

let Frost=new Elves('Frost',101, 'gold', 'silver', true, false, 'Arithia', 'ice');
let Leorania=new Elves('Leoronia', 100, 'Dull Gold', 'grey', true, false, 'Arithia', 'Water')
let Argia=new Elves('Argia',90, 'hazel', 'black', true, true, 'larandak', 'earth')
Frost.getAttacked();
Frost.gossip(Leorania,Argia)
console.log(Frost);



class Tome {
	constructor (maker, serialNum) {
	  this.maker = maker;
	  this.spellType = spellType;
	  this.serialNum = serialNum;
	}
	cast () {
	  console.log('Casting a spell!');
	}
  }
  
  const fireTome = new Tome('Merlin', 'Fire', 1);
  console.log(fireTome);


  class Factory {
	constructor (maker) {
	  this.maker = maker;
	  this.tomes = [];
	}
	generateTome (spellType) {
	  const newTome = new Tome(this.maker, spellType, this.tomes.length);
	  this.tomes.push(newTome);
	}
	findTome (index) {
	  return this.tomes[index];
	}
  }
  
  const merlin = new Factory('Merlin');
  merlin.generateTome('Fire');
  merlin.generateTome('Water');
  merlin.generateTome('Earth');
  merlin.generateTome('Air');
  console.log(merlin);
  console.log(merlin.findTome(0));


  const gandalf = new Factory('Gandalf');
  gandalf.generateTome('Light');
  gandalf.generateTome('Dark');
  console.log(gandalf);
  console.log(gandalf.findTome(0));














//   class Hobbit extends Character {
// 	constructor (name,age, eyes, hair) {
// 		super(name, age, eyes, hair);
// 		this.skills = ["thievery", "speed", "willpower"];
// 	  }
// 	steal () {
// 	  console.log("Let's get away!");
// 	}
// 	greet(otherCharacter){
// 		console.log(`Hello ${otherCharacter}, you're my friend.`)
// 	}
// 	smite(){
// 		super.smite();
// 		this.steal();
// 	}
//   }
//   const bilbo= new Hobbit('Bilbo', 30, "black", "brown");
//   const frodo = new Hobbit('Frodo', 30, 'brown', 'black')
//   console.log(frodo);
//   frodo.smite(bilbo);



// //   bilbo.greet('Frodo')