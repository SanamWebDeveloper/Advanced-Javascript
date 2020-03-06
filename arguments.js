// // CASE 1  //providing parameter as needs
// function add(num1, num2){
//     return num1+num2
// }
// const result = add(5,10);
// console.log(result);


// // CASE 2 // only 1 parameter //NaN (Not a number)
// function add(num1, num2){
//     return num1+num2
// }
// const result = add(5);
// console.log(result);


// // CASE 3 //1 extra value is coming than parameter declared, it will not count it!
// function add(num1, num2){
//     return num1+num2
// }
// const result = add(5,10, 3);
// console.log(result);

// // CASE 4
// function add(num1, num2){
//     console.log(arguments);  //we can inspect all values by "arguments"
//                                 //we can see an "arry-like-object"!
//                                 //curly brace ache, object! array er moto index ache! Array like object!
//     return num1+num2
// }
// const result = add(5,10,3);
// console.log(result);

// // CASE 5  //tempo solution for 1 extra value.
// function add(num1, num2){
// //console.log(arguments);
//     return num1+num2+arguments[2]; //arguments theke 3rd position value ta add kore nilam!
// }
// const result = add(5,10,3);
// console.log(result);

// // CASE 6 //How many extra will come? You never know! so previous method may NOT work.
// function add(num1, num2){
//     return num1+num2;
// }
// const result = add(5,10,3,7);
// console.log(result);

// CASE 7 //we cant get ".length" or apply for loop efficiently as it is NOT an Array.
    //we will use Spread Out method three dot(...) here. :D Lucky you!
// function add(num1, num2){
//     //like this, lets check...
//     console.log(...arguments);  //it should provide all values like 5 10 3 7 separately! Nice!!
//     return num1+num2
// }
// const result = add(5, 10, 3, 7);
// console.log(result);


//  //NOW We have to create a Shottikarer Array from this Arry-like-object that has made spread number (vua array).
//     // "..."  plus  "arguments"  plus  [] ; //... (spread operator); arguments (elements inspector, that makes them array like object); and finally result will be put inside the [], so they will be real array then;
//     //>> ([...aruments])
//  function add(num1, num2){
//     console.log(arguments);       //array like object           // [Arguments] { '0': 5, '1': 10, '2': 3, '3': 7 }
//     console.log(...arguments);    //spread outs elements        // 5 10 3 7
//     console.log([...arguments]);  //Makes the array, how cool?! // [ 5, 10, 3, 7 ]
//     return num1+num2;
//  }
//  const result = add(5, 10, 3, 7);
//  console.log(result); 


//  //Now kintu Amader Shomosshar shomadhan Has! xD
//  function add(){
//     //console.log([...arguments]); //Astece all elements
//     const arrayOfElements = ([...arguments]); 
//     //console.log(arrayOfElements);  //ekta variable arakhlam just.
  
//     for(let i = 0; i < arrayOfElements.length; i++){
//     }
//  }
//  const result = add(5, 10, 3, 7);
//  console.log(result);




//             ////// Fresh CODE! ///////
//   function add(){
//     let arrayMaking = ([...arguments]);
//     //console.log(arrayMaking); // values are now well arry!

//          sum = 0;
//          console.log(sum);
//     for(let i = 0; i <arrayMaking.length; i++){
//         let sum = sum + arrayMaking[i];
//         console.log(sum);
//     }
//     console.log(sum);
// }
//   const result = add(5, 10, 3, 7);
//   console.log(result);


// function add(){
//     const arrayOfElements = ([...arguments]);
//     sum = 0;
//     for(let i = 0; i <arrayOfElements.length; i++){
//         const num = arrayOfElements[i];
//         sum += num;
//     }
//     return sum;
// }
// const result = add(5, 10, 3, 7, 100);
// console.log(sum);


 //////AND again, born to practice!

 function add(){
     const arrOfValues = ([...arguments]);

        sum=0;
     for(let i=0; i<arrOfValues.length; i++){
        sum += arrOfValues[i];
     }
     return sum;
 }

 const result = add(10, 10, 2, 3, 5);
 console.log(result);