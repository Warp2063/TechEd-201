var maxAttempts = 6;
var largest = 100; // largest possible guess
var secretNum = 0;

var attemptsMade = 0;
var min = 1;
var max = 100;
var userGuess;

resetGame();  // when the page loads, we want to start with a fresh slate and set the HTML correctly

var setupForm = document.getElementById("form");  //TODO final form name
var gameForm;
setupForm.addEventListener("submit", function() {
    //TODO add code
});

gameForm.addEventListener("submit", function () {
    //TODO add code
});

/**
 * Resets the guessing game to default values
 */
function resetGame() {
    secretNum = Math.floor(Math.random() * largest) + 1;  // creates a random integer from 1 to LARGEST inclusive
    attemptsMade = 0;
    min = 1;
    max = largest;
    guessButtonDisabled(false);
    document.getElementById("outputField").innerHTML = buildGameStr();
}

/**
 * Prompts the user for a numerical guess, then updates the game state.
 */
function makeGuess() {
    userGuess = NaN;
    while (attemptsMade < maxAttempts && Number.isInteger(userGuess) == false) {
        //console.log("in while loop");
        userGuess = prompt("What is your guess?");

        //console.log("user guess input was: " + userGuess);

        // If user has hit cancel, abort the guess without doing anything
        if (userGuess == null) {
            return;
        }

        userGuess = parseInt(userGuess); // Note: if a floating point number is entered, the parser retains only the integer portion and does not regard it as an illegal input
        
        //console.log("understood user guess was: " + userGuess);

        if (Number.isInteger(userGuess) == false) {
            alert("That's not an integer!  Please try again!");
        }
    }
    
    attemptsMade++;

    let outputStr = "";

    switch (true) {
        case (userGuess == secretNum): // success
            outputStr = `You guessed the secret number, ${addTags(secretNum, "span", "number", )} on guess ${addTags(attemptsMade, "span", "number", )} of ${addTags(maxAttempts, "span", "number", )}!`;
            guessButtonDisabled(true);
            break;
        case (attemptsMade >= maxAttempts): // did not succeed, ran out of guesses
            outputStr = `Too bad!  You ran out of guesses!  The secret number was ${addTags(secretNum, "span", "number", )}.`;
            guessButtonDisabled(true);
            break;
        case (userGuess < secretNum): // guess was too low
            if (userGuess > min) {
                min = userGuess + 1;
            }
            outputStr = `${addTags(userGuess, "span", "number", )} is too low! ${buildGameStr()}`;
            break;
        case (userGuess > secretNum): // guess was too high
            if (userGuess < max) {
                max = userGuess - 1;
            }
            outputStr = `${addTags(userGuess, "span", "number", )} is too high! ${buildGameStr()}`;
            break;
        default: 
            outputStr = "There was some error; this shouldn't have been encountered!";
            guessButtonDisabled(true);
            break;
    }

    document.getElementById("outputField").innerHTML = outputStr;
}

/**
 * Returns a string in the format "I'm thinking of a number between ${min} and ${max} inclusive.  ${MAXATTEMPTS - attemptsMade} attempt(s) remaining."
 * @returns {string} 
 */
function buildGameStr() {
    let outputStr = `I'm thinking of a number between ${addTags(min, "span", "number", "minNum")} and ${addTags(max, "span", "number", "maxNum")} inclusive.  ${addTags(maxAttempts - attemptsMade, "span", "number", "attemptsNum")}`;
    
    if (maxAttempts - attemptsMade > 1) {
        return outputStr.concat(" attempts remain."); // multiple attempts remain
    }
    else if (maxAttempts - attemptsMade == 1) {
        return outputStr.concat(" attempt remains."); // one attempt remains
    }
    else {
        return "Error.  Zero or negative number of attempts remain.";
    }
}

/**
 * Sets whether the Guess button is disabled - TRUE if disabled, FALSE if enabled.
 * @param {boolean} setDisabled
 */
function guessButtonDisabled(setDisabled) {
    document.getElementById("guessButton").disabled = setDisabled;
}

/**
 * Outputs a string representing the inputString enclosed in the selected HTML tags. If className or idName are left null or empty, that attribute will be omitted.
 * @param {string} content
 * @param {string} elementType
 * @param {string} classSelector
 * @param {string} idSelector
 * @returns {string}
 */
function addTags(content, elementType, classSelector, idSelector) {
    let output = ['<' + elementType];

    if (classSelector != null && classSelector.length > 0) {
        output.push(' class=\'', classSelector, '\'');
    }

    if (idSelector != null && idSelector.length > 0) {
        output.push(' id=\'', idSelector, '\'');
    }
    
    return "".concat(...output, '>', content, '</', elementType, '>');
}