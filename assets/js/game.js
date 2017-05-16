$(document).ready(function(){
  // global variables for game
  var wins = 0;
  var losses = 0;
  var currentNumber;
  var randomGameNumber = 0;
  var randomDiamond = 0;
  var randomRuby = 0; 
  var randomSapphire = 0;
  var randomEmerald = 0;
  
  // function that takes the max and min values and returns values no lower than min but also less, not equal to the max
  function randomValue(maxValue, minValue){
    return Math.floor(Math.random() * (maxValue - minValue)) + minValue;
  }
  
  // function to initialize game
  function newGame(){
    // sets random game number value for the game
    randomGameNumber = randomValue(121, 19);
    
    // sets the random values of the four crystals
    randomDiamond = randomValue(13, 1);
    randomRuby = randomValue(13, 1);
    randomSapphire = randomValue(13, 1);
    randomEmerald = randomValue(13, 1);
    
    // sets up html with game values
    $('#game-number').html(randomGameNumber);
    $('#current-number').html(currentNumber);
    $('#wins').html(wins);
    $('#losses').html(losses);
    
    currentNumber = 0;
  };
  // function to check the score and reset game
  function scoreChecker(){
    
    // if current number is equal to the random game number, player wins!
    if(currentNumber === randomGameNumber){
      wins++;
      alert('You Win!');
      newGame();
    }
    // else if the current number is over the random game number, player loses!
    else if(currentNumber > randomGameNumber){
      losses++;
      alert('You lose, sorry')
      newGame();
    }
  }
  
  newGame();
  
  // on click, add random diamond value to current number then run score checker function
  $('#diamond').on('click', function(){
    
    if(currentNumber < randomGameNumber){
      currentNumber += randomDiamond;
      $('#current-number').html(currentNumber);
      scoreChecker();
    }
    
  })
  
  // on click, add random ruby value to current number then run score checker function
  $('#ruby').on('click', function(){
    
    if(currentNumber < randomGameNumber){
      currentNumber += randomRuby;
      $('#current-number').html(currentNumber);
      scoreChecker();
    }
    
  })
  
  // on click, add random sapphire value to current number then run score checker function
  $('#sapphire').on('click', function(){
    
    if(currentNumber < randomGameNumber){
      currentNumber += randomSapphire;
      $('#current-number').html(currentNumber);
      scoreChecker();
    }
    
  })
  
  // on click, add random emerald value to current number then run score checker function
  $('#emerald').on('click', function(){
    
    if(currentNumber < randomGameNumber){
      currentNumber += randomEmerald;
      $('#current-number').html(currentNumber);
      scoreChecker();
    }
    
  })
})