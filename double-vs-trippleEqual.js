const first = 2;    //Not equal, easy
const second = 3;

if(first==second){
    console.log("Both are equal");
}
else{
    console.log("Not equal");
}

const first2 = 2;  //Obviously true
const second2 = 2;

if(first2==second2){
    console.log("Both are equal");
}
else{
    console.log("Not equal");
}

const first3 = 2;   //Still true
const second3 = '2';

if(first3==second3){
    console.log("Both are equal");
}
else{
    console.log("Not equal");
}

const first4 = 2;  //value same, but type is not same, so false
const second4 = '2';

if(first4 === second4){
    console.log("Both are equal");
}
else{
    console.log("Not equal");
}