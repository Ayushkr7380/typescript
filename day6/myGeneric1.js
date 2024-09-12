//Normal way to create array ..
var heros = ["ayush", "ayush2", "ayush3"];
var data = ["ayush", 123, true, 3454];
//Generic way to create array ..
var heros2 = ["ayush", "ayush2", "ayush3"];
var data1 = [true, false, 1234, "ayush"];
//Normal Functions
//Here in this function i am passing value as a string or number and also returning string or number.
//What if i want to pass another datatype then we will add that ..right..
//But for how long we will do that ..Instead of that we can use Generic..
function identityOne(val) {
    return val;
}
//Now you might think you can use "any" ..
//But here also you have do idea about datatype.
function identityTwo(val) {
    return val;
}
//Generic function..
//Now in this function it is ready to accept any number, string, boolean ,whatever we like
//Here i write "Type" but it is not compulsory to write "Type" , you can write anything but all the places it should be same.
//Mostly "T" is used instead of "Type"
function identityThree(val) {
    return val;
}
identityThree("ayush");
identityThree(false);
identityThree(123);
function identityFour(val) {
    return val;
}
identityFour("ayush");
identityFour(4545);
identityFour(true);
