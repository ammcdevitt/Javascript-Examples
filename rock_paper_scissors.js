//Rock paper scissors is a 2 player game, where each player chooses either rock, paper or scissors
//Outcomes: Rock destroys scissors.Scissors cut paper. Paper covers rock.
//3 phases: User makes a choice, Computer makes a choice, Compare function will determine who wins

var userChoice = function() {
    userChoice = prompt("Do you choose rock, paper or scissors?");
    //ask sthe user which option they want to pick. will later use this choice in the compare function to dertermine the winner
}

var computerChoice = Math.random(); {
//computer makes a choice. declares a variable computerChoice and sets it equal to Math.random(). the compuetChoice will equal a number between 0 and 1
}

//since computerChoice now equals a randon number between 0 and 1, we need to translate this randon number into a randome choice of rock, paper, or scissors.

//if computerChoice is between 0 and 0.33, make computerChoice equal to 'rock'
if (computerChoice <= 0.33) {
    computerChoice = 'rock';
}
//if computerChoice is between 0.34 and 0.66, make computerChoice equal to 'paper'
else if (computerChoice >= 0.34 <= 0.66) {
    computerChoice = 'paper';
}
//if computerChoice is between 0.67 and 1, make computerChoice equal to 'scissors'
else {
    computerChoice = 'scissors';
}

//declare function called compare that takes two parameters, choice1 and choice2. inside the function, write an if statement
var compare = function(choice1, choice2) {
    if (choice1 === choice2) {
        return "The result is a tie!";
    }

    //if choice1 is rock, then...
    else if (choice1 === 'rock') {
        //...a) if choice2 is scissiors, then rock wins over scissors
        if (choice2 === 'scissors') {
            return 'rock wins';
        }
        //the only scenario that is left is (if choice 1 is rock and) if choice2 is paper. therefore, paper wins over rock.
        else {
            return 'paper wins';
        }
    }

    //if choice1 is paper, then...
    else if (choice1 === 'paper') {
       //...if choice2 is rock, then paper wins over rock
       if (choice2 === 'rock') {
            return 'paper wins';
        }
        //the only scenario left (if (choice1 is paper and) if choice2 is scissors. therefore, scissors wins over paper.
        else {
            return 'scissors win';
        }
    }

    //if choice 1 is scissors, then...
    else if (choice1 === 'scissors') {
        //...if choice2 is rock, then rock wins over scissors
        if (chice2 === 'rock') {
            return 'rock wins';
        }
        //the only scenario left (if choice1 is paper and) if choice2 is rock. therefore, scissors wins over paper.
        else {
            return 'scissors wins';
        }
    } 
}

compare(userChoice, computerChoice);
