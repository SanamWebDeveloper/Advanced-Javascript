function add(){
        //ok
    // var day = "Friday!";
    // console.log(day);


        //undefined
    // console.log(day);
    // var day = "Friday!!";

    console.log(day);
    for(let i=0; i <1; i++){
        console.log(day);
        var day = "Friday!!!";    
    }

}
const result = add();  //Function k kew call na korle function execute e hobe na. okay?


  //Okay
var day = "Saturday";
console.log(day);

  //Undefined
console.log(day);
var day = "Saturday";


function add(){
    const arrOfValues = ([...arguments]);

       sum=0;
    for(let i=0; i<arrOfValues.length; i++){
       sum += arrOfValues[i];
    }
    return sum;
}

const result = add(10, 10, 2, 3, 5, 100);
console.log(result);


console.log(x);
var x;

let x;
console.log(x);