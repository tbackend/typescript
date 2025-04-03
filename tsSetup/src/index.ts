// classes in TS + getters and setters 

// class User {
//     email: string
//     name: string
//     private readonly city: string = "New York" // kind of an optional field, private properties are only accesible in a class.
//     constructor (name: string, email: string) {
//         this.email = email;
//         this.name = name;
//     }
// };

// better way to write classes.

class User {
    // private _courseCount = 1; // private causes the property to be limited to ONLY this class, cannot be used out of this class.

    protected _courseCount = 1 // protected lets you use a prperty in this class and the class that inherits the properties of this class.
    private readonly city: string = "New York"
    constructor (public name: string, public email: string) {
        this.name = name,
        this.email = email
    }

    get courseCount (): number { 
        return this._courseCount
    }

    set courseCount (value) {
        if (value <= 1) {
            throw new Error("value should nbe greater than 1.")
        }
        this.courseCount = value
    }

    // private methods
    private privateMethod () {
        console.log(`this is a private method.`)
    }
}

// when extending the parent class, the sub class cannot inherit private properties and functions of a paret class.

class SubUser extends User {
    family : boolean = true
    changeCouseCount () {
        this._courseCount = 3;
    }
}

const user = new User("Jane Doe", "jane@gamil.com");

// user.city = "ajsas" // Cannot assign to 'city' because it is a read-only property.
// user.delete(); not allowed.

// all the properties not marked as private are public in typescript.