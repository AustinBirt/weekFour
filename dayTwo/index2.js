class Animal {
	constructor(eyes, legs, isAwake, isMoving) {
		this.eyes = eyes;
    this.legs = legs;
    this.isAwake = isAwake;
    this.isMoving = isMoving;
	  // return is not needed because the new object is returned by default
	}
  sleep() {
    this.isAwake = false;
  }
  wake() {
    this.isAwake = true;
  }
  sit() {
    this.isMoving = false;
  }
  walk() {
    this.isMoving = true;
  }
  speak(sound) {
    console.log(sound);
  }
  toString(animal = 'Animal') {
    return `This ${animal} has ${this.eyes} eyes and ${this.legs} legs. It ${this.isAwake ? 'is' : 'is not'} awake, and ${this.isMoving ? 'is' : 'is not'} moving.`;
  }
}

class Cat extends Animal {
    constructor(fur, isAwake, isMoving) {
        super(2, 4, isAwake, isMoving);
        this.fur = fur;
      }
      speak() {
        super.speak("Meow...");
      }
      toString() {
        return super.toString("Cat");
      }
    }
    
    class Dog extends Animal {
      constructor(fur, isAwake, isMoving) {
        super(2, 4, isAwake, isMoving);
        this.fur = fur;
      }
      speak() {
        super.speak("Woof!");
      }
      toString() {
        return super.toString("Dog");
      }
    }
    
    class Cow extends Animal {
      constructor(hair, isAwake, isMoving) {
        super(2, 4, isAwake, isMoving);
        this.hair = hair;
      }
      speak() {
        super.speak("Moo.");
      }
      toString() {
        return super.toString("Cow");
      }
    }



const cat1 = new Cat("Orange", true, false);
const cat2 = new Cat("Black and White", false, false);
const dog1 = new Dog("Gold", true, true);
const cow1 = new Cow("Brown", true, false);

console.log(cow1);


// class human extends animal{
//     constructor(wearsClothes, thinks,){
//         super(2, 2, true, true)
//         this.clothes=clothes;
//         this.thinks=thinks;
//     }
// }