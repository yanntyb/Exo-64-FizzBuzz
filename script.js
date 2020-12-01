let i = 0;

while(i<101){
    if ((i%3 === 0)&&(i%5!==0)){
        console.log(i + " fizz")
    }else if ((i%5 === 0)&&(i%3!==0)){
        console.log(i + " buzz")
    }else if ((i%5 === 0) || (i%3 ===0)){
        console.log(i + " fizzbuzz")
    }else if ((i%5!==0)||(i%3!==0)){
        console.log(i)
    }
    i++;
}