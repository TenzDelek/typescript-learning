interface TakePhoto {
  cameraMode: string;
  filter: string;
  burst: number;
}

interface story{
    createstory():void
    //or
    createstory:()=>void
}

//class and interface use implements
//interface to interface use extends
//class and class use extends also
class Instagram implements TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {}
}

class Youtube implements TakePhoto,story {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
    public short: string, //we can create more , but not less than the interface given
    
    ) {}
    public createstory():void{
        console.log("story was created")
    }
}
