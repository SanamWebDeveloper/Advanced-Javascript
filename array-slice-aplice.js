const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 , 13, 14, 15];
//console.log(nums);

const copyPart = nums.slice(1, 5) //1 hocche INDEX number, 2nd position! 5 is 6th position.
console.log(copyPart);
console.log(nums);

const cutPart = nums.splice(1, 5);   //5 hocche delete number, ba cut korar shonkha ta!
console.log(cutPart);
console.log(nums);

const cutPart2 = nums.splice(2, 3, 77, 88, 99); // 2 index number means 3rd position, then cut 3, inject rest of the given
console.log(cutPart2);
console.log(nums);


    //join() shob shomoy string a convert kore dey!
const number2 = [1,2,3,4,5];

const together= number2.join();
console.log(together);
console.log(typeof(together));

const together2= number2.join("");
console.log(together2);

const together3= number2.join(" ");
console.log(together3);

const together4= number2.join(",");
console.log(together4);
console.log(typeof(together4));

const together5= number2.join("-0");
console.log(together5);