"use strict";
// Why is interface important.
;
class Instagram {
    constructor(cameraMode, filter, burstMode) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burstMode = burstMode;
    }
}
class Youtube {
    constructor(cameraMode, filter, burstMode, shorts) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burstMode = burstMode;
        this.shorts = shorts;
    } // cannot do less than the defined interface.
    createStory() {
        console.log(`Story created`);
    }
}
;
