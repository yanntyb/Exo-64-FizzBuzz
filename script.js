let i = 0;

function verif(number){
    let message = [" fizz"," buzz"," fizzbuzz"];
    if ((number%3 === 0)&&(number%5!==0)){
        return (number + message[0]);
    }else if((i%5 === 0)&&(number%3!==0)){
        return (number + message[1]);
    }else if ((i%5 === 0) || (number%3 ===0)){
        return (number + message[2]);
    }else{
        return (number);
    }
}

function verif2(number){
    let message = [" fizz"," buzz"," fizzbuzz"];
    if(number%3 === 0){
        if (number%5!==0){
            return (number + message[0]);
        }
        else{
            return (number + message[2]);
        }
    }else if (i%5 === 0){
        return (number + message[1]);
    }else {
        return (number);
    }
}


while(i<101){
    console.log(verif2(i));
    i++;
}