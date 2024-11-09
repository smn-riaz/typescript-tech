"use strict";
{
    //******** * 3.1  *********//
    // OOP - CLASS
    class Animal {
        constructor(name, species, sound) {
            this.name = name;
            this.species = species;
            this.sound = sound;
        }
        makeSound() {
            console.log(`the ${this.name} says ${this.sound}`);
        }
    }
    const dog = new Animal('German Shepard', "dog", "ghew");
    dog.makeSound();
    // USING PARAMETER PROPERTIES : NO NEED TO DEFINE & INITIALIZE
    class Animal2 {
        constructor(name, species, sound) {
            this.name = name;
            this.species = species;
            this.sound = sound;
        }
        makeSound() {
            console.log(`the ${this.name} says ${this.sound}`);
        }
    }
    const dog2 = new Animal('German Shepard', "dog", "ghew");
    dog.makeSound();
    //******** * 3.2 *********//
    //INHERITENCE
    class Person {
        constructor(name, age, address) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleep(numOfHour) {
            console.log(`${this.name} will sleep for ${numOfHour}`);
        }
    }
    class Student extends Person {
        constructor(name, age, address) {
            super(name, age, address);
        }
    }
    const student1 = new Student("x", 2, "dhaka");
    class Teacher extends Person {
        constructor(name, age, address, designation) {
            super(name, age, address);
            this.designation = designation;
        }
        takeClass(numOfClass) {
            console.log(`${this.name} will take ${numOfClass}`);
        }
    }
    const teacher = new Teacher("x", 2, "dhaka", 'Professor');
    teacher.
    ;
    const add = (par1, par2) => {
        if (typeof par1 === 'number' && typeof par2 === 'number') {
            return par1 + par2;
        }
        else {
            return par1.toString() + par2.toString();
        }
    };
    add("2", '3');
    const getUser = (user) => {
        if ('role' in user) {
            console.log(`${user.name} and ${user.role}`);
        }
        else {
            console.log(`${user.name}`);
        }
    };
    getUser({ name: "uu" });
}
