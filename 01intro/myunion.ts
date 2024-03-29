// now the score can have num or string
let score: number | string = 33;

score = "stringhaha";

type User = {
  name: string;
  id: number;
};
type Admin = {
  username: string;
  id: number;
};
let tenzin: User | Admin = {
  //using User type
  name: "tenzin",
  id: 123,
};
tenzin = { username: "tenzin", id: 123 }; //type of admin

getdbid(3);
getdbid("3");
function getdbid(id: string | number) {
  // id.toLowerCase() // if we directly try to use , it will throw error as it can be number
  if (typeof id === "string") {
    id.toLowerCase(); // now the id is 100% string not maybe
  }
  console.log(`db id is ${id}`);
}

//array
const data1:number[]=[1,2,3]
const data2:string[]=["1","2","3"]
//this below says that it can be either num or string
//but what we want is a mixture
// const data3:string[] | number[]=["1","2","3",4]
//so we use ()
const data4:(string | number)[]=[1,"2",3,"4"] //now it can have both string and number

//strict type
let pi:3.14=3.14

// pi=3.145 //error

//similarly here is an another example
let seatallotment:"aisle" | "middle"| "window"

seatallotment:seatallotment="middle"
// seatallotment:seatallotment="crew" //error as it is not mention in our let