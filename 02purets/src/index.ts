class User {
  //usually if u dont make any, it default set to public
  public email: string;
  name: string;
  city: string = ""; //as we are not taking it in constructor we explicitly declare it
  readonly weight: number = 66;
  private bankid: string = "ten thousand";
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const hitesh = new User("tenzin@gmail.com", "tenzin");
hitesh.city = "mungod";
// hitesh.weight=343//cant change cause of readonly
console.log(hitesh.city);
// hitesh.bankid ->cant even access it as private

//above User is not that well wriiten we write like this

class User2 {
  protected coursecount = 1;
  readonly weight: number = 66;
  constructor(public email: string, public name: string) {}

  get getAppleEmail(): string {
    return `apple ${this.email}`;
  }

  get courseCount(): number {
    return this.coursecount;
  }
  //remember the get and set fn name should be same
  //in setter dont put any return type like string void,number
  set courseCount(coursenum) {
    if (coursenum <= 1) {
      throw new Error("course count should be more than 1");
    }
    this.coursecount = coursenum;
  }
  private deletetoken() { //now this cant be use with better object
    console.log("delete token");
  }
}

class SubUser extends User2 {
    isfamily:boolean=true
    changecoursecount()
    {
        this.coursecount=4 
        //if the coursecount was private it will be not be accessible in
        //the subuser but as it is protected, the subclass can access it
        //but not that the object still cant access it
    }
}
const better = new User2("tenz@gmail", "tenzin");

const appleEmail = better.getAppleEmail;
console.log(appleEmail);
better.courseCount = 3; //setter
console.log(better.courseCount); //getter
