//060
//กลุ่ม
const studentScores = [{name: 'Alice', score:85},
    {name: 'Bob', score:92},
    {name: 'Charlie', score:68},
    {name: 'David', score:55},
    {name: 'Eve', score:78}
];
function getPassingNames (students){
    return students.filter(student => student.score >= 70)
    .map(student => student.name.toUpperCase());
}

const passingNames = getPassingNames(studentScores);
console.log(passingNames);

console.log(Array.isArray([]));
console.log(Array.isArray(["a",12,false]));
console.log(Array.isArray(new Array(2)));

console.log(Array.isArray("[]"));
console.log(Array.isArray(123));
console.log(Array.isArray(false));
console.log(Array.isArray("1"));
console.log(Array.isArray({}));

const num1 =[1,2,3]
const num2 =[3,5,7]
console.log([...num1,...num2]);
console.log(num1.concat(num2));

console.log(num1.toString());
console.log(num2.toString());


console.log("mangoteen".includes("go"));
console.log(["mangoteen", "mango"].includes("go"));


const array14 = [1,30,4,21,100000]
array14.sort((a, b) => a - b)
console.log(array14);

const students = [
    {id: 66500102, name: "Suda", gpa: 2.5},
    {id: 66500555, name: "ada", gpa: 2.8},
    {id: 66500589, name: "pornchai", gpa: 3.25},
    {id: 66500102, name: "Pornsak", gpa: 3.8},
]
const student = students.sort((a, b) => a.name.localeCompare(b.name))
console.log(student);
