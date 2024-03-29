const user={
    name:"tenzin",
    email:"tenzin@gmail.com",
    isactive:true
}

function createuser({name,ispaid}:{name:string,ispaid:boolean}){ //here the parameter should be string and bool

}
let newuser={name:"tenzintsomo",ispaid:false,email:"tt@gmail.com"}
createuser(newuser) //see here we are getting email but it still accepting why?

function createcourse():{name:string,price:number} //here the return type should be string and number
{
    return {name:"reactjs",price:399}
}
export {}