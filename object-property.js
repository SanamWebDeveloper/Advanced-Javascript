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