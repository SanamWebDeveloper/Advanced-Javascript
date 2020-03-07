let pakhi;           //value is not set
console.log(pakhi); 

function add(x,y){      //no returning anything
 console.log(x+y);
    //No return
}
const result = add(10,20);
console.log(result);


    function add(x,y){
       const sum = console.log(x+y);     //no second value given
        return sum;
    }
    const result = add(10);
    console.log(result);

    function add(x,y=0){  // solution set a default value
        const sum = x+y;
         return sum;
     }
     const result = add(10);
     console.log(result);

    const premik = {name: "smart dude", phone:123456};
    console.log(premik.gf); //property e nai. undefined

     let fun = undefined;
     console.log(fun);

     let ages = [2, 4, 6];
     console.log(ages[10]);  // 11th value e to nai! undefined

            //NULL is explicitly set!
        let x = null;
        console.log(x);   

