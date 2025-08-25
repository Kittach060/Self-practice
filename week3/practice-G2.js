function getFreqOfWords(sentence){
    if(sentence === null || undefined){
        return undefined
    }
    const word = sentence.toLowerCase().split(" ");
    const obj ={};
    for(let i of word){
        obj[i] = (obj[i]||0)+1;
    }
    return obj;
}
console.log(getFreqOfWords("Today is present and present is your gift"));
