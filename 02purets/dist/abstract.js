"use strict";
class TakePhotos {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
}
class Sony extends TakePhotos {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getdetail() {
        console.log("detaisl");
    }
    getreeltime() {
        return 8;
    }
}
//AS THE TAKEPHOTO CLASS IS ABSTRACT WE CANT
//USE IT TO CREATE A NEW OBJECT IT IS RESPONSIBILTY
//OF THE EXTEND CLASS(SONY) TO DO THAT
const tenzin1 = new Sony("manual", "promist", 3);
tenzin1.getreeltime();
