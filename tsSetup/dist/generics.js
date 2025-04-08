"use strict";
// Generics 
const score = [];
const anotherName = [];
function identity(value) {
    return value;
}
;
;
identity({
    brand: "",
    type: "",
    price: 0
});
;
const createUser = ({ username, email, password, status, isAdmin }) => {
    if (!username || !email || !password || !status) {
        console.log("all fields are required.");
    }
    return {
        username: "test",
        email: "test@gamil.com",
        password: "jsagdjhasgd",
        status: 1
    };
};
