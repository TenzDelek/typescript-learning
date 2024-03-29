const haro:[] =[]
//if we leave the type like [] then it is for the
//empty array

const haros:string[]=[] //string array
const harocount:number[]=[]
//or you can define it by
const haroanotherway:Array<number>=[]

type User={
    name:string,
    isactive:boolean
}
const alluser:User[]=[] // now the value push 
//should follow this way
haros.push("cho messi")
harocount.push(1)

alluser.push({name:"tenzin",isactive:true})