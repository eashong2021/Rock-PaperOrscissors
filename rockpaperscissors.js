const getUserChoice = userInput => {

    userInput = userInput.toLowerCase();
    
    if (userInput  ===  'rock'  ||  userInput ===  'paper'  ||userInput === 'scissors' ||  userInput === 'bomb' ) {
    
    return userInput;
    }
     else {
    console.log('Error!, please type: rock,  paper or scissors');
    }
    }
    
    //Test stage1
    console.log(getUserChoice('Paper')); // should print 'paper'
    console.log(getUserChoice('fork'));  // should print 'fork'
    
    
    const getComputerChoice = ()  =>  {
      const randomNumber  = Math.floor(Math.random() * 3);
      switch (randomNumber) {
    
    case 0:
    return 'rock';
    
    case 1:
    return 'paper';
    
    case 2:
    return 'scissors';
      }
    };
    
    //Test Stage2
    console.log(getComputerChoice());
    
    console.log(getComputerChoice());
    
    console.log(getComputerChoice());
    
    const determineWinner = (userChoice, computerChoice) => {
      if (userChoice  ===   computerChoice) {
    
    return 'This game is a tie!';
      }
      if (userChoice ==='rock'){
       if (computerChoice === 'paper'){
         return 'The computer won!';
       } 
       else {
         return 'You won!';
       }
      }
      if (userChoice === 'paper'){
        if (computerChoice === 'scissors' ){
         return  'The computer won!';
        }
        else {
          return 'You won!';
        }
      }
      if(userChoice  ===  'rock'){
        if(computerChoice  === 'paper') {
          return 'You won!';
        }
        else {
          return 'The computer won!';
        }
      }
       if(userChoice === 'bomb'){
         return 'You won!';
       }
    };
    
    //test stage3
    console.log(determineWinner('paper', 'scissors')); // prints something like 'The computer won!'
    console.log(determineWinner('paper', 'paper')); // prints something like 'The game is a tie!'
    console.log(determineWinner('paper', 'rock')); // prints something like 'The user won!'
    
    const userChoice  =  getUserChoice('paper');
    const computerChoice  = getComputerChoice();
    
    console.log('You threw:  ' + userChoice);
    console.log('The computer threw:  ' + computerChoice);
    
    const playGame = () => {
       const userChoice = getUserChoice('bomb');
       const computerChoice = getComputerChoice();
    
    
       console.log('You threw: ' + userChoice);
       console.log('The computer threw:' + computerChoice);
       console.log(determineWinner(userChoice, computerChoice));
    
      
    };
    playGame();
    
    