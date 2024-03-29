const name1: Array<string> = [];

function identityone(val: boolean | number): boolean | number {
  return val;
}

function identitytwo(val: any): any {
  return val;
}

//similar to any but when we pass it then it is locked
//like if we pass a number now it stays number
function identitythree<Type>(val: Type): Type {
  return val;
}
identitythree(3);
//used a lot
//most people use this
function identityfour<T>(val: T): T {
  return val;
}

interface bottle {
  brand: string;
  type: number;
}

identityfour<bottle>({ brand: "Example Brand", type: 1 });

//-----------------------------------------
function getsearchproduct<T>(product: T[]): T {
  const index = 3;
  return product[index];
}

//arrow function
//T[] says it can be string array,can be number array
//in react and all many use <T,> the , says it is not a
//part of tag rather it is a generic
const getmoresearch = <T>(product: T[]): T => {
  const index = 4;
  return product[index];
};

//-----------------------------------
interface Database {
  connection: string;
  username: string;
  password: string;
}
function anotherfunction<T, E extends Database>(val1: T, val2: E): object {
  return {
    val1,
    val2,
  };
}
// anotherfunction(3,"r") -error//kind of kills the meaning of generic as we are extend
//E to number
anotherfunction(4, { connection: "sql", username: "tenzin", password: "123" });

interface Quiz {
  name: string;
  type: string;
}
interface Course {
  name: string;
  author: string;
  subject: string;
}
class Sellable<T> {
  public cart: T[] = [];

  addtocart(product: T) {
    this.cart.push(product);
  }
}
