//loose form of a class
interface User {
  readonly dbid: number;
  email: string;
  userid: number;
  googleId?: string;
  //startTrial:()=>string //saying it returns string
  startTrial(): string; //better way to do than the above
  getCoupon(couponname: string, value: number): number;
}
//reopening of interface (type cannot do it)
interface User {
  githubid: string;
}

//also interface support extending(inheritance)
interface Admin extends User {  // type has a way like doing  type Admin=User &{ role:....}
  role: "admin" | "ta" | "lean";
}
const tenzin: Admin = {
  role: "admin", //only for the Admin interface // if u put User delete this line
  githubid: "tenzdelek",
  dbid: 22,
  email: "ten@gmail.com",
  userid: 12,
  startTrial: () => {
    return "tenzin"; //return a string is mandatory
  },
  getCoupon: (name: "freepass", val: 2) => {
    return val;
  },
};
