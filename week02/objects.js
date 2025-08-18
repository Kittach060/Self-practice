//060
//กลุ่ม
const a ={id:{num:60}, 
student:{name:"student",
age:19, 
student:true}, 
null:null, 
array:[1,2,3],
}
console.log(a);

function student(id,name,grade){
    this.id = id
    this.name = name
    this.grade = grade
}
let me = new student(60, "Kittach", "A")
console.log(me);

//060
//กลุ่ม
class Name{
    constructor(firstname, lastname){
        this.firstname = firstname
        this.lastname = lastname
    }
}
const person = new Name("Kittach", "Sodsri")
console.log(person);

const personstudent = Object.create(person)
console.log(personstudent.firstname);
console.log(personstudent.lastname);

const per1 = {firstname: "Kittach", lastname: "Sodsri"}
console.log(per1.firstname);
console.log(per1["lastname"]);
for (const key in per1) {
    console.log(key);
    console.log(per1[key]);
         
}

function dosomething(obj){
    obj = {id:1, name:"yoyo"}
    obj.name = 'xxx'
}
const pet = {id:1,
    name:'yoyo'
}
console.log(pet.name);
dosomething(pet)
console.log(pet.name);

//060
//กลุ่ม
function compareStudent(obj1,obj2){
    return obj1.id === obj2.id && obj1.name === obj2.name
}
const std1 = { id: 1, name: "Somchai" }
const std2 = { id: 1, name: "Somchai" }
console.log(compareStudent(std1,std2));

const std = {id:1,name:"Somchai",adress:{no:111,city:"Bangkok"}}
let {name: fullName, id} = std
console.log(fullName);
console.log(id);
let {adress:{city:myAddress}} = std;
console.log(myAddress);


