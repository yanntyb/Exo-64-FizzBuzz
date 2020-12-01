let i = 0;

while(i<101){
    let result = ((i%3 === 0)&&(i%5!==0)) ? console.log(i + " fizz") : ((i%5 === 0)&&(i%3!==0)) ? console.log(i + " buzz") : ((i%5 === 0) || (i%3 ===0)) ? console.log(i + " fizzbuzz") : ((i%5!==0)||(i%3!==0)) ? console.log(i) : console.log("error")
    i++;
}