abstract class TakePhotos {
    constructor ( public cameraMode:string,
        public filter:string)
    {

    }
    abstract getdetail():void
}

class Sony extends TakePhotos{
    constructor ( public cameraMode:string,
        public filter:string,
        public burst:number)
    {
        super(cameraMode,filter)
    }
    getdetail():void{
        console.log("detaisl")
    }
    getreeltime():number{
        return 8
    }
}
//AS THE TAKEPHOTO CLASS IS ABSTRACT WE CANT
//USE IT TO CREATE A NEW OBJECT IT IS RESPONSIBILTY
//OF THE EXTEND CLASS(SONY) TO DO THAT
const tenzin1=new Sony("manual","promist",3)

tenzin1.getreeltime()