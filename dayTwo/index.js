class Animal {
	constructor(eyes, legs, isAwake, isMoving) {
		this.eyes = eyes,
    this.legs = legs,
    this.isAwake = isAwake,
    this.isMoving = isMoving,
	  // return is not needed because the new object is returned by default
	}
}

const cat1 = new Animal(2, 4, true, false);