// Why is interface important.

interface TakePhoto {
    cameraMode: string,
    filter: string,
    burstMode: number
};

interface Story {
    createStory(): void
}

class Instagram implements TakePhoto {
    constructor (
        public cameraMode: string,
        public filter: string,
        public burstMode: number
    ) {}
}

class Youtube implements TakePhoto, Story {
    constructor (
        public cameraMode: string,
        public filter: string,
        public burstMode: number,
        public shorts: string
    ) {} // cannot do less than the defined interface.

    createStory(): void {
        console.log(`Story created`) 
    }
};