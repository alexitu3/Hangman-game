var userText = document.getElementById("user-text");
// add queryslector  and lower case

  // Next, we give JavaScript a function to execute when onkeyup event fires.
  // document.onkeyup = function(event) {
  // userText.textContent = event.key;

  // }
  
  // work on this for the group.... make sure its good...
  function displayedWord (word) {
    for(var i = 0; i < word.length; i++) {
    
     word[i] = "- ";
     console.log(word[i]);
     // var html = "<p>" + word + "</p>";
     // document.querySelector("#game-data").innerHTML = html;
        
    }
  }

  displayedWord(randoName);
  


  // function checker checker

  function letterChecker (word) {
  for (var i = 0; i < word.length; i++) {
    letter = word[i];
    position.push(i);
  }
}

// another function to  check 
  function positionChecker (position) {
  for (var i = 0; i < postion.length; i++) {
    displayedWord[positon[i]] = key[positon[i]];
  }
}

    make this a different function 

  function wordChecker () {

    if (userText  === alphabet && LetterUsed.indexOf(userText) !== -1) {
      
      if (userText.indexOf(randoName) >= 0) {
          nameBlock.push(userText); 
      } 
      else  (userText.indexOf(randoName) < 0 ) { 
          lettersRemaing--;
      
        letterUsed.push(userText);
      }
    }
  }

//   // function resest () {

//   // }