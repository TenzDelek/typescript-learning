function addtwo(num) {
    return num + 2;
    // return "hello" //but this doesnt give error? so to make sure that
    //this function addtwo will return only number we make type for function also like above 
}
function getupper(val) {
    return val.toUpperCase();
}
function signupuser(name, email, ispaid) {
}
//here the ispaid has a default value of false
var loginuser = function (name, email, ispaid) {
    if (ispaid === void 0) { ispaid = false; }
};
var res = addtwo(5);
var up = getupper("tenzin");
signupuser("tenzin", "delek@gmail.com", true);
loginuser("tenzindelek", "sharp@gmail.com");
