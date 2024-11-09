"use strict";
var _a, _b;
//******** * 1.4*********//
let friends = ['a', 'b', 'c'];
// tuple
let a = [1, 3, 'a', true];
//******** * 1.5*********//
const user = {
    fName: 'riaz',
    lName: 'shahman'
};
//******** * 1.6*********//
function add(a, b) {
    return a + b;
}
add(2, 3);
//arrow function
const difference = (c, d) => c - d;
//object ---> function ----> method
const pUser = {
    name: 'a',
    balance: 0,
    addBalance(balance) {
        return `My new balance is ${this.balance} + ${balance}`;
    }
};
// console.log(pUser.addBalance);
// for array
const num = [1, 2, 3, 4];
const newArray = num.map((e) => e * e);
//******** * 1.7*********//
//SPREAD OPERATOR for ARRAY
const bros1 = ['ab', 'cd', 'ed'];
const bros2 = [...bros1, 'ef', 'ge', 'fh']; //1ST WAY
const bros3 = ['t', 'f', 'c'];
bros1.push(...bros3); //2ND WAY
//SPREAD OPERATOR for OBJ           
const b = {
    name: 'riaz',
    age: 24
};
const c = {
    name: "sr",
    age: 25
};
const d = Object.assign(Object.assign({}, a), b);
// REST OPERATOR
const greetFriends = (...frnd) => {
    // console.log(`hi ${frnd}`);
    frnd.forEach((fr) => console.log(fr));
};
//******** * 1.8*********//
// Destructuring in typescript
const e = {
    id: 23,
    name: {
        f: 'shahman',
        m: "",
        l: 'riaz'
    },
    contact: '017'
};
//l is changed to lastName, here type cant be assigned
const { contact, name: { l: lastName } } = e;
const myFriends = ['a', 'b', 'c', 'd', 'f', 'g'];
const [, , bestF, ...restFriend] = myFriends;
const student = {
    name: 'sri',
    age: 23,
    address: 'sf'
};
const add1 = (num3, num4) => num3 + num4;
const newDeveloper = 'juniorDev';
const fullStackDeveloper = {
    skills: ['html'],
    designation1: 'Frontend Developer',
    designation2: 'Backend Developer'
};
//******** * 1.11*********//
//Ternary, optional chaining &
const age = 15;
if (age >= 18) {
    // console.log('adult');
}
else {
    // console.log('not adult');
}
const isAdult = age >= 18 ? 'adult' : 'not adult';
//nullish coalescing operator:?? it will work for only null and undefined.
const isAuthenticated = null;
const result1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : 'Guest';
const isAuthenticated2 = '';
const result2 = isAuthenticated2 ? isAuthenticated2 : 'Guest';
const user5 = {
    name: 'r',
    address: {
        city: 'Dhaka',
        presentAdd: 'puran Dhaka'
    }
};
const permanentAddress = (_b = (_a = user5 === null || user5 === void 0 ? void 0 : user5.address) === null || _a === void 0 ? void 0 : _a.permanentAdd) !== null && _b !== void 0 ? _b : "No permanent address";
// console.log({permanentAddress});
//******** * 1.12*********//
// nullable type
const searchName = (v) => {
    if (v) {
        console.log('searching');
    }
    else {
        console.log("NOthing");
    }
};
// searchName(null)
// UNKNOWN tyPE
const getSpeedInMeterPerSecond = (v) => {
    if (typeof v === 'number') {
        console.log(v * 100);
    }
};
// NEVER
const throwError = (msg) => {
    throw new Error(msg);
};
throwError('m');
