function addtwo(num:number):number
{
    return num+2
    // return "hello" //but this doesnt give error? so to make sure that
    //this function addtwo will return only number we make type for function also like above 
}
function getupper(val:string)
{
    return val.toUpperCase()
}
function signupuser(name:string,email:string,ispaid:boolean)
{

}

//here the ispaid has a default value of false
let loginuser=(name: string ,email: string,ispaid:boolean=false)=>{

}
let res=addtwo(5)
let up=getupper("tenzin")
signupuser("tenzin","delek@gmail.com",true)
loginuser("tenzindelek","sharp@gmail.com")


//but here now see we are returning either a 
//boolean or a string so how can we explicitly 
//make a type for the function ?
// function getvalue(myval:number)
// {
//     if(myval>5)
//     {
//         return true
//     }
//     return "200 OK"
// }

const gethello=(s:string):string=>{
    return ""
}
const heros=["tenzin","delek","tibet"]
heros.map((hero):string=>{ //we make it string so the return must be string
    return `hero is ${hero}`
})


function consoleerror(errormsg:string):void {
    console.log(errormsg)
}

//some function never returns a value
//never is used with mostly throwing an exception or termination
function handleerror(errormsg:string):never{ //here never is used
    throw new Error(errormsg)
}
export{}