//Rock paper scissors is a 2 player game, where each player chooses either rock, paper or scissors
//Outcomes: Rock destroys scissors.Scissors cut paper. Paper covers rock.
//3 phases: User makes a choice, Computer makes a choice, Compare function will determine who wins

var userChoice = function() {
    userChoice = prompt("Do you choose rock, paper or scissors?");
    //asks user which option they want to pick. will later use this choice in the compare function to dertermine winner
}

var computerChoice = Math.random(); {
//computer makes a choice. declares a variable computerChoice and sets it equal to Math.random(). the compuetChoice will equal a number between 0 and 1
}

//since computerChoice now equals a randon number between 0 and 1, we need to translate this randon number into a randome choice of rock, paper, or scissors.

if (computerChoice <= 0.33) {
    computerChoice = 'rock';
    //if computerChoice is between 0 and 0.33, make computerChoice equal to 'rock'
}

else if (computerChoice >= 0.34 <= 0.66) {
    computerChoice = 'paper';
    //if computerChoice is between 0.34 and 0.66, make computerChoice equal to 'paper'
}
else {
    computerChoice = 'scissors';
    //if computerChoice is between 0.67 and 1, make computerChoice equal to 'scissors'
}

var compare = function(choice1, choice2) {
    //declare function called compare that takes two parameters, choice1 and choice2. inside the function, write an if statement
    if (choice1 === choice2) {
        return "The result is a tie!";
    }
    else if (choice1 === 'rock') {
        //if choice1 is rock, then...
        if (choice2 === 'scissors') {
        //...a) if choice2 is scissiors, then rock wins over scissors
            return 'rock wins';
        }
        else {
            return 'paper wins';
            //the only scenario that is left is (if choice 1 is rock and) if choice2 is paper. therefore, paper wins over rock.
        }
    }
    else if (choice1 === 'paper') {
    //if choice1 is paper, then...
       if (choice2 === 'rock') {
            return 'paper wins';
            //...if choice2 is rock, then paper wins over rock
        }
        else {
            return 'scissors win';
            //the only scenario left (if (choice1 is paper and) if choice2 is scissors. therefore, scissors wins over paper.
        }
    }
    else if (choice1 === 'scissors') {
        //if choice 1 is scissors, then...
        if (choice2 === 'rock') {
            return 'rock wins';
            //...if choice2 is rock, then rock wins over scissors
        }
        else {
            return 'scissors wins';
            //the only scenario left (if choice1 is paper and) if choice2 is rock. therefore, scissors wins over paper.
        }
    } 
}

compare(userChoice, computerChoice);
