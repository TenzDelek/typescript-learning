type User={ // now this can be used multiple places
    name:string,
    email:string,
    isacitve:boolean
}

function createuser(user:User):User
{
    return({name:"tenzin",email:"de@gmail.com",isacitve: true})
}

createuser({name:"tenzin",email:"de@gmail.com",isacitve: true})

type MyOwn ={
    readonly _id:string, //now it cant be changed
    name:string,
    surname?:string //the ? made it optional 
}

let myuser1:MyOwn={
    _id:"123",
    name:"tenzinpro"
}

myuser1.name="tenzin not pro"
// myuser1._id="3434" //now this cant be change as it was made read only



//mix and match

type cardNumber ={
    cardnumber:string
}
type cardDate={
    carddate:string
}

type cardDetail=cardDate & cardNumber & {
    cvv:number
}
export{}