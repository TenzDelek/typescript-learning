let greeting : string="tashi delek"
// greeting=6 - will show error as greeting type  is string
console.log(greeting)
let mynum:number =1

// mynum.toUpperCase() //string function cant be use on number
export {}

//number type include all int ,float
let userid:number=345343
//but here it is obvoius that here it number,string, bool
//so there is no use of using explicitly(complulsory ) to write number like
let id:12323 //fine (typescript is smart enough)
//boolean

let islogin:boolean=false

//any
let hero:string;

function gethero()
{
    return "superman"
}
hero=gethero() //if u hover over the hero here it will show the
//type of any 
//so one way is to give on line 19 the type for hero, now the 
//hero type is string and can only take string from that function

export{}