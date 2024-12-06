function guessTheNumber(){
    let range;
    let randomNumber;
    let attampt =0;
    let maxAttampt;
    
    switch (difficulty){
        case 'easy':
            range=10;
            maxAttampt=5;
            randomNumber=Math.floor(Math.random()*10+1);
            console.log(randomNumber);
            break;

            case 'medium':
                range=100;
                maxAttampt=5;
                randomNumber=Math.floor(Math.random()*100+1);
                console.log(randomNumber);
                break;

                case 'hard':
                   range=1000;
                    maxAttampt=5;
                    randomNumber=Math.ceil(Math.random()*1000)
                    console.log(randomNumber);
                    break;
                   default:
                    console.error("invalid difficulty level choose 'easy' 'medium' 'hard' ")
    }

 while (attampt<maxAttampt){
    let guess = parseInt(prompt(`Guess a number between 1 and ${range} 
        (Inclusive).you have ${maxAttampt-attampt} attampt left`));
    attampt++;

    if (guess===randomNumber){
        console.log('Congratulations! you guess the number in', 
            attampt, "attampt");
            break;
    }
     else if (guess<randomNumber){
        console.log('Too low! Try Again');
     } else {
        console.log('Too high! Try again');
     }
     
    console.log(guess);

    if(maxAttampt===attampt){
        console.log('Sorry you  run out of attemp . The number was', randomNumber);
    }


    }
}

let difficulty= prompt('Choose the Difficulty(easy, medium, hard)'.toLowerCase());
console.log(difficulty);
guessTheNumber(difficulty);
