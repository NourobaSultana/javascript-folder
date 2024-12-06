function guessTheNumber(){
    let range;
    let attemp=0;
    let randomNumber;
    let maxAttemp;
    
    switch(chooseLevel){
        case 'easy':
        range=10;
        maxAttemp=5;
        randomNumber=Math.floor(Math.random()*10+1);
        console.log(randomNumber);
        break;

        case 'medium':
            range=100;
            maxAttemp=5;
            randomNumber=Math.floor(Math.random()*100+1);
            console.log(randomNumber);
            break;
        
        case 'hard':
            range=1000;
            maxAttemp=5;
            randomNumber= Math.floor(Math.random()*1000+1);
            console.log(randomNumber);
            break;

            default:
                console.error('Invalid choose level "easy" "medium" "hard" ');
    }

    while(attemp<maxAttemp){
       let guess= parseInt(prompt(`Guess a number between 1 and ${range}(Inclusive). you have ${maxAttemp-attemp} attemps left`));
       attemp++;

       if(guess===randomNumber){
        console.log('Congratulation! you guess the number in ', attemp, "attemp");
        break;
       }
       else if(guess<randomNumber){
        console.log('Too low! Please try again');
       }
       else{
        console.log('Too high! Please try again');
       }
       console.log(guess);

    
    }

    if(maxAttemp===attemp){
        console.log('Sorry you run out the number. The number was ', randomNumber);
    }

}

let chooseLevel =prompt('Choose level(easy, medium, hard)'.toLowerCase());
console.log(chooseLevel);
guessTheNumber();