
var wordBank = ["miller", "talib", "siemian", "thomas",
"anderson", "sanders", "wolfe", "taylor", "latimer", 
 "roby", "marshall", "harris", "ray"];
var wordPicker = wordBank[Math.floor(Math.random() * wordBank.length)];
var dashes = [];
var lettersGuessed = [];
var guesses = 13;
var score = 0;


var validationChecker = function(inputStr) {
    patt=/[A-Za-z]/g; // pattern to check against - g is global
    var isLetter = patt.test(inputStr); // check if input is a letter T/F
    return isLetter
}
// alert users .... linked to html?
function notLetter (str) {
    alert( str + "Is not a letter. lease type letters only! (a-z)");
}

// creates dashes but still needs to link to html
function displayDashes(str) {
    var wordCount = str.length;
    for(var i = 0; i< wordCount.length; i++){
        dashes[i] = "_";
        console.log(dashes);
    }
}

// compare user input to selected word
function keyCompare(str1, str2) {
    if(str1.indexOf(str2) !== -1) {
        displayRight(str2, dashes, str1)
       } else {
           guesses --;
           lettersGuessed.push(str2);
           document.querySelector("#letters-guessed").innerHTML = lettersGuessed;
           if(guesses === 0) {
                alert("you lose");
               gameReset();
            }
       }
}
function displayRight(userInput, dashes, wordPicker) {
    var swapDashes = [];
    for(i = 0; i < wordPicker.length; i++){
        if(userInput === wordPicker[i]){
            swapDashes[i] = userInput;
        }else if (dashes[i] === wordPicker[i]){
            swapDashes[i] = dashes[i];
        } else {
            swapDashes[i];
        }
        console.log(swapDashes);
        dashes = swapDashes;
        // write to html
    }
    if(dashes.indexOf("_") === -1){
        score ++;
        document.onKeyUp = function(event){
            gameReset();
        }
    }
}

// still need to add html linkage

document.addEventListener("keyup", function(event){
    var userInput =  event.key.toLowerCase();// key press value
    console.log(userInput);   
    var isLetter = validationChecker(userInput);
    console.log(isLetter);
        // isLetter ? compareLetter(userInput) : notLetter(userInput);
            if (isLetter) {
                // true
                console.log(userInput);
                displayDashes(userInput);
                keyCompare(userInput);
            } else { 
                // false
                console.log(isLetter);
                notLetter(userInput);
            }
});

// need to add a reset function. 