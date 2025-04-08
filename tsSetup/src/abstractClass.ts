// what is the use of abstract classes if interfaces are already available? 

abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getSepia() : void // we will only provide the method not its defination.
}

// const photo = new TakePhoto("test", "test");

// we cannot create new objects with an abstract class.
// abstract classes are a BLUEPRINT.

// but an object can be created by extending the abstract class with another class.

class NewClass extends TakePhoto {
    getSepia(): void {
        console.log("We got sapia.")
    }
}

const photo = new NewClass("test", "test"); // this is allowed.

