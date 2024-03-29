//type narrowing-
//refining the type of a variable so that TypeScript understands
//it to be more specific than its initial type
function detecttype(val: string | number) {
  if (typeof val == "string") {
    return val.toLowerCase();
  }
  return val + 3; //the code will only reach here
  //if the val is not string so it doesnt show error
}

//we should treat null also as cautious similar to number and strings
function provideId(id: string | null) {
  if (!id) {
    console.log("there is no id provided");
    return;
  }
  id.toLowerCase();
}

function printall(strs: string | string[] | null) {
  if (strs) {
    if (typeof strs === "object") {
      //array type is object
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}

// the (in) operator narrowing
interface User {
  name: string;
  email: string;
}
interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}
function isAdminAccount(account: User | Admin) {
    if ("isAdmin" in account) //the isadmin is only in Admin interface so it check whether it is in that
    {
        return account.isAdmin //acount is 100% admin now
    }
    return account.email
}

//now in above try to hover on each account the first/second will show user or admin
//the third will show admin and the last will show user