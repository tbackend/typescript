// Type alises

type Course = {
    readonly _id: string
    name: string, 
    price: number,
    cardDetails?: number
}

const createCourse = (course: Course): Course => {
    return course
}

createCourse({
        _id: "21bnd18b91dtwdb", // if using a variable we will not be able to modify this field.
        name: "nodejs", 
        price: 2000
    })

// type is mutable and interface is immutable 
// values in type can be added easily while values in interface are to be added via using intersections.

type cardNumber = {
    cNum : string
}
type cardDate = {
    cDate: number
}

// for creating a type from the above to types we use '&'.
type cardDetails = cardNumber & cardDate;


// Arrays

// const marvel: string[] = ["spiderman", "sung jinwoo"];
const marvel: Array<string> = ["spiderman", "sung jinwoo"]; // can also be done like this.

const mlModels: number[][] = [
    [20132, 3213213, 32113123],
    [2131231, 32134, 213123]
]

// Union types

// sometimes we are not sure what kind of a datatype will we recieve and there might be some possiblties, union type helps us in catering this issue

const getDbID = (id : number | string) => {
    if (typeof id === "string") { // here we strictly check if the id is string 
        id.toLowerCase()
    } else {
        id + 2 // else we add 2 to the id
    }
}

// const data : number[] = [1, 2, 4, 5]; // this is an all numbers array
// const data : number[] | string[] = []; // this suggests that it will either be an only string or an ony numbers array.

// if we want to have both numbers and strings in our array
const data : (number | string)[] = ["1", 2, 4]; // allowed

// Literal assignments

let seatAllotment : "aisle" | "middle" | "window";
seatAllotment = "window"; // allowed
// seatAllotment = "crew"; // not allowed

// Tuples

// they are basically ordered lists and there order cannot be compromised. In short the order of elements in a tuple is immutable.

// const user: [number, string, boolean] = [21312, "name", true]; // the order is maintained.

type RGB = [
    red: number,
    blue: number,
    green: number
]

const rgb: RGB = [255, 255, 255]; 

// cons

// user[1] = "jojo" // values can be overwritten without manual checks.
// user.push(true) // apparently this will not be stopped and we can push this value in the array, completely nullifying the protocol we provided it.

// In short try your best not to mutate or apply any of these functions on tuples.

// Enums

// It is used to define the set of named constants, i.e., a collection of related values. TypeScript supports both numeric and string-based enums.

const enum SeatChoice { // using const we can miimize js code as it produces an iife otherwise.
    AISLE,
    MIDDLE,
    WINDOW
}; // default starting number is 0 though itcan be redfined to your choice as well.

const seat = SeatChoice.MIDDLE; // you get an automatic suggestion.

// Interfaces

interface User {
    readonly dbId: number,
    name: string,
    email: string,
    gId?: string,
    // startTrial: () => string // defines a method.
    // methods can also be defined as: 
    startTrial() : string,
    getCupon(cuponName: string, value: number) : number
};

interface User {
    githubToken: number
} // we can add properties to an interface

//intrefaces also provide inheritance

interface Admin extends User{ // we can also extend more interfaces by putting ',' (comma).
    role: "ADMIN"
};


// const user: User = {
//     dbId : 22,
//     name: 'Jane Doe',
//     email: 'jane@gamil.com',
//     startTrial: () => {
//         return `Trial Started!`
//     },
//     getCupon: (name : 'Discount', value: 10) => {
//         return value
//     },
//     githubToken: 123214413,
// };

const user: Admin = {
    dbId : 22,
    name: 'Jane Doe',
    email: 'jane@gamil.com',
    startTrial: () => {
        return `Trial Started!`
    },
    getCupon: (name : 'Discount', value: 10) => {
        return value
    },
    githubToken: 123214413,
    role: "ADMIN"
};
