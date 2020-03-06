 //function theke 1 ta value charao, objec, array othoba
 //onno ekta function o return kora jay!

function stopWatch(){
    let count = 0;
    return function ab(){
        count++;
        return count;
    }
}
const clock1 = stopWatch();
console.log(clock1);    //Output: [Function],, tarmane stopWatch function ta ekta function return korche!!

console.log(clock1());
console.log(clock1); //function stopWatch k call korche,
                    //karon, clock1 = stopWatch()

console.log(clock1()); //eta kintu same jinish na! eta clock function er function k call korche!
                        //clock1 = stopWatch(), clock1() = stopWatch(){ function ab()}, mane function ad() hocche target.
console.log(clock1());
console.log(clock1()); //clock1(); output dekhar jonno console a ekbare lekha.                    




function stopWatch(){
    let counter = 0;
    return function(){
        counter++;
        return counter;
    }
}

const clock1 = stopWatch();
//console.log(clock1);   //function returns     Output: [Function]

const y =  clock1;      //same as previous      Output: [Function]
console.log(y);

const x =  clock1();   // function er function  Output: 1
console.log(x);

const z =  clock1();   // function er function  Output: 2
console.log(z);

console.log(clock1()); // Oi ek e jinish ek bare lekha 2 line:  Output: 3

console.log(clock1());  // funnction er function k ek sathe call n showing output at the same time.


//console.log(clock2());  //error dekhabe, clock2 to initialized e hoynai.

const clock2 = stopWatch();

console.log("Clock2", clock2());
console.log(clock2());
console.log(clock2());

console.log("C1", clock1());
console.log("c2", clock2());

const clock3 = stopWatch();

console.log("clock3",clock3());
console.log(clock3());
console.log(clock3());
console.log(clock3());
console.log(clock3());
console.log(clock3());
console.log(clock3());
console.log(clock3());
console.log(clock3());
console.log("END!", clock3());
