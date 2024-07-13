const minimum=1;
const maximum =100;

const answer = Math.floor(Math.random()* (maximum - minimum +1))+ minimum;

let attempts =0;
let guess;
let running = true;


while(running){

    guess = window.prompt(`Guess a number between ${minimum} and ${maximum}`);
    guess =  Number(guess);
    console.log(typeof guess,guess);
    if(isNaN(guess)){
        window.alert(" give a no");
    }
    else if(guess < minimum || guess > maximum){
        window.alert(`Out of range, pick a number between ${minimum} and ${maximum}`);
    }

    else{
        attempts++;
    }
    if(guess<answer){
        window.alert("sorry guess is too low try again");
    }
    else if(guess > answer){
        window.alert("YOO! too high try again!");
    }
    else{
        window.alert(`Correct! the answer was ${answer}. It took you ${attempts} attempts.`);
        running = false;
    }
}








