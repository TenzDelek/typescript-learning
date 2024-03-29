"use strict";
//type narrowing-
//refining the type of a variable so that TypeScript understands
//it to be more specific than its initial type
function detecttype(val) {
    if (typeof val == "string") {
        return val.toLowerCase();
    }
    return val + 3; //the code will only reach here
    //if the val is not string so it doesnt show error
}
//we should treat null also as cautious similar to number and strings
function provideId(id) {
    if (!id) {
        console.log("there is no id provided");
        return;
    }
    id.toLowerCase();
}
function printall(strs) {
    if (strs) {
        if (typeof strs === "object") {
            //array type is object
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
function isAdminAccount(account) {
    if ("isAdmin" in account) {
        //the isadmin is only in Admin interface so it check whether it is in that
        return account.isAdmin; //acount is 100% admin now
    }
    return account.email;
}
//now in above try to hover on each account the first/second will show user or admin
//the third will show admin and the last will show user
//instance of narrowing--------------------
function logval(x) {
    if (x instanceof Date) {
        //instance ofcan only be used where new key word is applicable
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toLowerCase());
    }
}
function isFish(pet) {
    //if the return from below is true then pet is Fish
    return pet.swim !== undefined;
}
function getFood(pets) {
    if (isFish(pets)) {
        pets; //here the pet is 100% fish
        return "fish food";
    }
    else {
        pets;
        return "bird food";
    }
}
function gettrueshape(shape) {
    if (shape.kind === "circle") //as we have a common ground call kind it make us easier to narrow down
     {
        return Math.PI * shape.radius ** 2;
    }
    return shape.side * shape.side;
}
//also we can make use of switch
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return shape.radius;
        case "square":
            return shape.side;
        default: //not suppose to run - so when some case like rectangle comes it havent been check yet
            //so the default shouldnt be running ,but it is as rectangle is not handle, so it raised when every
            //case are not handled (just a checker type to make sure every case are handled)
            //exhaustive checking------------------
            //just a standard way to write for default
            const defaultshape = shape;
            return defaultshape;
    }
}
