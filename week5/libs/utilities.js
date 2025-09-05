function echo(msg){
    return msg
}
function getLength(str){
    return str.length
}
const GPAverage = 3.0
class Book{
    constructor(isbn) {
        this.isbn = isbn
    }
}
export {echo, getLength as default, GPAverage, Book}
//module.exports = { echo, getLength, GPA: GPAverage }
