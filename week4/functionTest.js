const words = ["apple", "mango", "orange", "banana"]
//word.reverse()
//console.log(word);

const StartAWords = words.filter((word) => word.startsWith("a"))
console.log(StartAWords);

const StartAWords1 = words.filter(function(word) {
    return word.startsWith("a")
})
console.log(StartAWords1);

const checkStarA = (word) => word.startsWith("a")
const StartAWords2 = words.filter(checkStarA)
console.log(StartAWords2);

function checkStarA2(word) {
    return word.startsWith("a")
}
const StartAWords3 = words.filter(checkStarA2)
console.log(StartAWords3);

const StartAWords4 = []
words.forEach((word) => {
    if(word.startsWith("a")){
        StartAWords4.push(word)
    }
})
console.log(StartAWords4);

const employees = [
  {
    id: 'e1001',
    firstname: "Somchai",
    lastname: "Jaidee",
  },
  {
    id: 'e1002',
    firstname: "Pornchai",
    lastname: "Deejai",
  },
  {
    id: 'e1005',
    firstname: "Suda",
    lastname: "Rakdee",
  },
]
 
//060
//กลุ่ม
const employeesName = employees.map((fullname) => 
fullname.firstname.toUpperCase() + " " + fullname.lastname.toUpperCase() )
const StartJai =  employeesName.filter(word => word.includes("JAI"))
console.log(employeesName)
console.log(StartJai);

const cart = [{
    productId: 1002,
    price: 10,
    amount: 5
},
{
    productId: 2005,
    price: 100,
    amount: 2
},
{
    productId: 5001,
    price: 5,
    amount: 4
}
]
const totalprice = cart.reduce((total, item) => total + (item.price * item.amount),0);
console.log(totalprice);
const netprice = totalprice * 1.07
console.log(netprice);

const nums = [2, 4, 6]
// nums[nums.length] = 8
console.log(nums.push(8)) //append in the end of array, return new length
console.log(nums)
nums.unshift(10) //add in the beginning of array
console.log(nums)
nums.pop() //remove in the end of array
console.log(nums)
nums.shift() //remove in the beginning of array
console.log(nums)
