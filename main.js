

// Exercise 1

/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}


console.log(Object.keys(person3))  // DONE CORRECT

// EXERCISE 2

/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person5(name, age){
    this.name = name;
    this.age = age;

    this.addAge = () => {
        this.age = this.age + 1;
    }

    // a Method inside a prototype
    this.printInfo = () => {
        
        console.log('Hello, ' + this.name + ' you are ' + this.age + ' years old');
        this.addAge();
        return 'Goodbye'
    }
}

const luke = new Person5('Luke', 23)
const callie = new Person5('Bob', 24)
console.log(callie.printInfo())
console.log(callie.printInfo())
console.log(callie.printInfo())
console.log(luke.printInfo())
console.log(luke.printInfo())
console.log(luke.printInfo())
console.log(luke.printInfo())

// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const wordBig = (strng) => {
    return new Promise( (resolve, reject) => {
        if(strng.length > 10) {
            resolve(true)
        } else {
            reject(false)
        }

    })
}


wordBig('hippopotamus')


.then( (result) => {
    console.log('Big Word ' + result)
})


.catch( (error) => {
    console.log('Small Number ' + error)
})

console.log(wordBig('hippopotamus'))