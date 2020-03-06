const student = [
    {id: 10, name: 'Omar'},
    {id: 20, name: 'Manna'},
    {id: 30, name: 'Moyouri'},
    {id: 40, name: 'Deepjol'}
];

const names = student.map( x => x.name); //map access/takes 1 element of an array at a time.
console.log(names);

const ids = student.map(y => y.id);
console.log(ids);

        //FILTER and FIND print all the properties according to condition.
            //it cant print only "name" ar only "id"!!
const bigger = student.filter(a => a.id>15);
console.log(bigger);
const bigger1 = student.filter(a => a.id>30);
console.log(bigger1);


const smaller = student.map(a => a.id);
console.log(smaller);

const smaller1 = student.find(a => a.id >20);
console.log(smaller1);