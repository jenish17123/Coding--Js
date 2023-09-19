function count(sentence,countInput){
 let sentenceArray = sentence.split("");
 let count = 0;
 for(i=0; i<sentence.length ;i++){
    if(sentenceArray[i]= countInput){
        count = count+1;
    }
 }
 return count;
}
let a = count("My name is Jenis Bhattarai","My")
console.log(a);



