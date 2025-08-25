//กลุ่ม
//060
function number(num1,num2){
    return num1 + num2
}
console.log(number(5,4));

const x = number
console.log(x(1, 2));
const sum2=() => {a + b}
const sum3 = function(){
    return a + b
}

function object1(obj1,obj2){
    return obj1 + obj2
}
function object2(obj1){
    return obj1 * 10
}
console.log(object1(1,4));
console.log(object2(object1(1,4)));


function Test(x) {
    return x
}
function Test2(x) {
    return x + 50
}
 
console.log(Test(Test2)(10));

function sum(a){
    let result = 0
    for(i=0;i<arguments.length;i++){
        result =result+arguments[i]
    }
    return result
}
console.log(sum());
console.log(sum(1));
console.log(sum(1,2));
console.log(sum(1,2,3,5));