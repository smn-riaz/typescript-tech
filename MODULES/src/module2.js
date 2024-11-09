"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
{
    //******** * 2.1*********//
    // TYPE ASSERTION : we can set the type last part easily like result1  and result2
    let anything;
    anything = "Next Level Web Development";
    anything = 222;
    // (anything as number)
    const kgtogm = (v) => {
        if (typeof v === 'string') {
            const convertedValue = parseFloat(v);
            return `The converted Value is ${convertedValue}`;
        }
        if (typeof v === 'number') {
            return v * 1000;
        }
    };
    const result1 = kgtogm(1000);
    const result2 = kgtogm("1000");
    const user = {
        name: 's',
        age: 2
    };
    const user2 = {
        name: 's',
        age: 2,
        role: "frontend"
    };
    const rollNumber = [1, 2, 3];
    const add = (num1, num2) => num1 + num2;
    //******** * 2.3*********//
    //GENERIC type
    const numArray = [1, 2, 3];
    const numArray2 = [1, 2, 3];
    const numArray3 = [1, 2, 3];
    // GENERIC TUPLE
    const manush = [
        'mrx', 1, 2
    ];
    const manush1 = ['x', 'y'];
    const userWithId = [123, { name: "riaz", email: "h@gmail.com" }];
    const poorDev = {
        name: 'riaz',
        computer: {
            brand: "s",
            model: 'ky',
            releaseYear: 2023
        },
        smartW: {
            brand: 'sd',
            model: 'e'
        }
    };
    const richDev = {
        name: 'riaz',
        computer: {
            brand: "s",
            model: 'ky',
            releaseYear: 2023
        },
        smartW: {
            brand: 'sd',
            model: 'e'
        }
    };
    //******** * 2.5 *********//
    //function with generics
    const createArray = (param) => {
        return [param];
    };
    const createArrayWithGeneric = (param) => {
        return [param];
    };
    const res1 = createArray('bd');
    const res2 = createArrayWithGeneric(true);
    const res3 = createArrayWithGeneric({ id: 23, name: 'riaz' });
    //function with generics tuple
    const createArrayWithTuple = (param1, param2) => {
        return [param1, param2];
    };
    const res4 = createArrayWithTuple("hello", 45);
    //******** * 2.6 *********//
    //Constraints in typescript
    const addCourseToStudent = (student) => {
        const course = 'Next';
        return Object.assign(Object.assign({}, student), { course });
    };
    const student5 = addCourseToStudent({ id: 22, name: 'er' });
    const getPropertyValue = (obj, key) => {
        return obj[key];
    };
    const car = {
        model: 'Toyota 100',
        year: 200
    };
    const res5 = getPropertyValue(car, "year");
    //******** * 2.8 *********//
    // Asynchronous typescript
    const createPromise = () => {
        return new Promise((resolve, reject) => {
            const data = 'something';
            if (data) {
                resolve(data);
            }
            else {
                reject('Failed to load data');
            }
        });
    };
    const showData = () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield createPromise();
        return data;
    });
    showData();
    const getTodo = () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = yield response.json();
        return data;
    });
    getTodo();
    //******** * 2.10 *********//
    //MAPPED TYPES
    const arrofNUmbers = [1, 2, 3];
    // const arrOfStrings: string[] = ['1','2','3']
    const arrOfStrings = arrofNUmbers.map(number => number.toString());
    const area1 = {
        height: "100",
        width: 100
    };
    console.log(area1);
    const obj1 = {
        a: "a",
        b: 'b',
        c: 'c'
    };
    const EmptyObj = {};
}
