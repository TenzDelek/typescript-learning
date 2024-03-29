"use strict";
const name1 = [];
function identityone(val) {
    return val;
}
function identitytwo(val) {
    return val;
}
//similar to any but when we pass it then it is locked
//like if we pass a number now it stays number
function identitythree(val) {
    return val;
}
identitythree(3);
//used a lot
//most people use this
function identityfour(val) {
    return val;
}
identityfour({ brand: "Example Brand", type: 1 });
//-----------------------------------------
function getsearchproduct(product) {
    const index = 3;
    return product[index];
}
//arrow function
//T[] says it can be string array,can be number array
//in react and all many use <T,> the , says it is not a
//part of tag rather it is a generic
const getmoresearch = (product) => {
    const index = 4;
    return product[index];
};
function anotherfunction(val1, val2) {
    return {
        val1,
        val2,
    };
}
// anotherfunction(3,"r") -error//kind of kills the meaning of generic as we are extend
//E to number
anotherfunction(4, { connection: "sql", username: "tenzin", password: "123" });
class Sellable {
    constructor() {
        this.cart = [];
    }
    addtocart(product) {
        this.cart.push(product);
    }
}
