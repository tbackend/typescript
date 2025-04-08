"use strict";
// what is the use of abstract classes if interfaces are already available? 
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
}
// const photo = new TakePhoto("test", "test");
// we cannot create new objects with an abstract class.
// abstract classes are a BLUEPRINT.
// but an object can be created by extending the abstract class with another class.
class NewClass extends TakePhoto {
    getSepia() {
        console.log("We got sapia.");
    }
}
const photo = new NewClass("test", "test"); // this is allowed.
