const nums = [3, 4, 5, 6, 7, 8];

const newNum = [];

for(let i=0; i<nums.length; i++){
    let element = nums[i];
    const square = element * element;
    newNum.push(square);
}
console.log(newNum);

    const numbers = [3, 4, 5, 6, 7, 8];
    numbers.map(function(element, index){
        console.log(element, index);
    })

    const numbers = [3, 4, 5, 6, 7, 8];
    numbers.map(function(element, index, array){
        console.log(element, index, array);
    })

    const numbers = [3, 4, 5, 6, 7, 8];
    numbers.map(function(element){
        return x = element * element;
    })
    console.log(x);



    const square = element => element * element;
    const square2 = x => x*x;

            //MAP
    const numbers = [3, 4, 5, 6, 7, 8];
    const result = numbers.map(x => x*x);  //map takes 1 by 1 value. 
    console.log(result);

    const bigger = numbers.filter(x => x>5);    //takes all the value according to condition
    console.log(bigger);

    const isThere = numbers.find(x => x>5);     //finds and takes only 1 if found
    console.log(isThere);