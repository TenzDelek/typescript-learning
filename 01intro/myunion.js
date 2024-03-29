// now the score can have num or string
var score = 33;
score = "stringhaha";
var tenzin = {
    //using User type
    name: "tenzin",
    id: 123,
};
tenzin = { username: "tenzin", id: 123 }; //type of admin
getdbid(3);
getdbid("3");
function getdbid(id) {
    // id.toLowerCase() // if we directly try to use , it will throw error as it can be number
    if (typeof id === "string") {
        id.toLowerCase(); // now the id is 100% string not maybe
    }
    console.log("db id is ".concat(id));
}
//array
var data1 = [1, 2, 3];
var data2 = ["1", "2", "3"];
//this below says that it can be either num or string
//but what we want is a mixture
// const data3:string[] | number[]=["1","2","3",4]
//so we use ()
var data4 = [1, "2", 3, "4"]; //now it can have both string and number
//strict type
var pi = 3.14;
// pi=3.145 //error
//similarly here is an another example
var seatallotment;
seatallotment: seatallotment = "middle";
// seatallotment:seatallotment="crew" //error as it is not mention in our let
