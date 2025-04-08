// Generics 

const score: Array<number> = [];  
const anotherName: Array<string> = [];  

function identity<T>(value: T): T {
    return value;
};

// once a datatype is entered it locks it and returns the value with same data type.

interface Bottle {
    brand: string,
    type: string,
    price: number
};

identity<Bottle>({
    brand: "",
    type: "",
    price: 0
});

// example

interface Users {
    username: string,
    email: string,
    password: string,
    isAdmin?: string,
    status: number  
};

const createUser = ({username, email, password, status, isAdmin}: Users): {} => {
    if (!username || !email || !password || !status) {
        console.log("all fields are required.")
    }
    
    return {
        username: "test",
        email: "test@gamil.com",
        password: "jsagdjhasgd",
        status: 1 
    }
}