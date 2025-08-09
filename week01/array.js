let a = ['apple', 1, true]
console.log(a.length);
console.log(a[0]);
console.log(a[a.length-1]);
console.log(a.push([1,2,3,4,5,],['banana']));
console.log(a);
for (i = 0;i<a.length ; i ++){
    console.log(a[i]);
}
a.pop()
console.log(a);

let b ='hello'
const strch=[...b]
console.log(strch);
 
let arr1 = new Array()
console.log(arr1);
let arr2 = new Array(10)
console.log(arr2);
let arr3 = new Array(15,10,5,true)
console.log(arr3);

let arr4=Array.of(5,10,15)
console.log(arr4)
let arr5=Array.from(arr4)
console.log(arr5)

let [,,x,,...z]=[5,10,15,20,25]
console.log(x)
console.log(typeof x)
console.log(z)
console.log(typeof z)