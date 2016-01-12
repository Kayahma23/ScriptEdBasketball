

function promptForPlayerName (player) {
var name = prompt ( player + ", What's your name");
    var n =name.length;
       if (n>15){
        alert ("Wow, that’s a long name!")
           
       }
       return name;
}
        
    
     
function tryTwoPointShot(two){
var a= Math.random();
var b= Math.random();

  if (a>.2 && b>.2) {
    return true;
      
  }
 
    return false;

  
  
}



function tryThreePointShot(two){
    var c= Math.random();
    var d= Math.random();

  if (c>=.2 && d>=.8) {
    return true;
      
  }

   return false;

  
  
}



function getShotString(name, NumberOfPoints, Scored) {
  var message = name+ " attempted a "+ NumberOfPoints + " pointer. It was ";
  if (Scored){
       message = message+ "Good";
      
  }
  else
  {
       message = message+ "No Good";
  }
  return message;
    
}

function updateScore(Scored, gamePoints, shotPoints) {

  if (Scored){ 
     var sum=  gamePoints +shotPoints;
     return sum;
     
  }
  return gamePoints;
}

function isEndOfGame(Score, Name){
    
     if (Score >= 20){
        alert ("The game is over")
        return true;
     }
     return false;
}
 
      
      
    
    

 
