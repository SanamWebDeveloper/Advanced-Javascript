const age1 = 4;

if(age1){
    console.log("True");
}
else{
    console.log("false");
}
////////////
const age2 = -4;

if(age2){
    console.log("True");
}
else{
    console.log("false");
}
/////////
const age3 = 0;

if(age3){
    console.log("True");
}
else{
    console.log("false");
}

////////
const age4 = '0';

if(age4){
    console.log("True");
}
else{
    console.log("false");
}

let name;
console.log(name);

let name1= null;  //null is falsy value.
console.log(name1);

//Null
//NaN     is also falsy value.
// ""     is falsy
// 0
// Undefined
// false      <-value is declared as false!


//True but confusing??
// '0'
// {}     An object, may not properties, True!
// []     Array, same as empty Object.
// -5     Any Negative values also True. (Only 0 is the number false)
