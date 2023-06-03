// class Governor {
//     static Name='Salt';
//     static Age=35;
//     static Degree='Poilitics'
//     static Speech="On this day in June of 2023. I stand before you to announce..."

//     static powerSpeech(){
//         console.log(this.Speech.toUpperCase())
//     }
// }

// Governor.powerSpeech();
// console.log(Governor.Name)

class Person {
    constructor(hair, skin, hasLove){
        this.hair=hair;
        this.skin=skin;
        this.hasLove=hasLove;
    }
    static goingToSleep(){
       let date= Date().split(" ")
        return console.log(`You're going to bed at ${date[4]} O'Clock.`)
    }
}
// Person.goingToSleep()

class PostalWorker extends Person {
    constructor(hair,skin,hasLove){
        super(hair,skin, hasLove)
        this.legs=2;
        this.arms=2;
        this.drives=true
    }
    static goingToSleep(){
        super.goingToSleep();
    }
    static alarm(){
        Date().split(" ")[4]==="9:00:00" ? console.log("Wake up!") : console.log("You can sleep more");
    }
}

PostalWorker.goingToSleep();

class Chef extends Person{
    constructor(hair,skin,hasLove,restaurant,hoursWorkedPerDay,lovesFood=true){
        super(hair, skin, hasLove);
        this.restaurant=restaurant;
        this.hoursWorkedPerDay=hoursWorkedPerDay;
        this.lovesFood=lovesFood;
    }

    stillLoveWork(yearsWorked){
        return yearsWorked>10 ? this.lovesFood=false : this.lovesFood=true
    }

    rageQuit(overWorked){
        return overWorked ? this.restaurant="Woody's Oasis" : this.restaruant=this.restaraunt
    }
}

let chef1=new Chef('Brown', 'Brown', true, 'Olive Garden', 9)
let chef2=new Chef('black','black',true,'Olive Garden', 9)
let postalWorker1=new PostalWorker('white','white',true)
let postalWorker2=new PostalWorker('yellow','tan',true,)

console.log(chef1);
console.log(chef1.stillLoveWork(20));
console.log(chef1);
console.log(chef2);
console.log(postalWorker1);
console.log(postalWorker2);