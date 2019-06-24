

let dDocument  = $(document).ready(function(){
  console.log("hi ");
  

   let ctx = $("#dcanvas")[0].getContext('2d');
  ctx.save();

  let stateKeyboard = new StateKeyboard();

  let crono = new Chronos();
  let moto1 = new Moto(ctx, 150);
  let moto2 = new Moto2(ctx, 450);
    moto1.drawLabel();
    moto2.drawLabel();

  moto1.Player1Img.onload = () => {
    
    
    moto1.drawItself();
    
  };
 
  moto2.Player2Img.onload = () => {
   
    moto2.drawItself();
  };
  
  let finishLine = new FinishLine(ctx);
  finishLine.drawItself();

// let obstacle = new Obstacle(ctx, 900, 300, 50 ,50);
 let randomObstacles = new ObstacleCollection(ctx);

 randomObstacles.randomCollection();

let gameStarted = false;

let startButton = $('#start-button').click(function(){
  
  if ( gameStarted) {  // reset game
    startButton.text('Start');
    location.reload();
  } else {
    crono.startTheCrono();
    startButton.text('Reset Game');
    let startGameWithDelay = () => {

      startButton.text('Reset Game');
      // moto2.moveForeverXdirection();
      // moto1.moveForeverXdirection();
      animate();
      randomObstacles.movecollectionForever();
    }

    setTimeout( startGameWithDelay, 5000);
       
  }
    
  gameStarted = !gameStarted;


}); // end of start-button


$(document).keydown(function(e){
  
  
    stateKeyboard.updateStateKeyDown(e);

    moto1.moveYourSelfWithState(stateKeyboard);
    moto2.moveYourSelfWithState(stateKeyboard);


  }); // end of keydown 

  $(document).keyup(function(e){
    
    stateKeyboard.updateStateKeyUp(e);
   

  }); // end of keydown 



  function animate() {
    
  console.log("animate ... ");
  setInterval(()=>{

    ctx.clearRect(0,0,1000,600);
    
    drawEverything();
    detectCollisions(moto1, moto2, randomObstacles);
  }, 50);

  }// end of animate func 

  function drawEverything() {
    moto1.drawItself();
    moto2.drawItself();
    finishLine.drawItself();
    detectWinner(moto1, moto2);

     randomObstacles.movecollectionForever();

    // randomObstacles.collection.forEach((obstaclex) => {
    //   obstaclex.moveLeftForever();
    // });
    
  }

  function detectCollisions(moto1, moto2, obstacles) {

    let collided = function(obj1, obj2) {
          let posibleXXcollision = obj1.x < (obj2.x + obj2.width) && (obj1.x + obj1.width) > obj2.x;
          let posibleYYcollision = obj1.y < (obj2.y + obj2.height) && (obj1.y + obj1.height) > obj2.y;

        return posibleXXcollision && posibleYYcollision;
    }

    let afterCollisionEffectPlayers = function(obj1, obj2) {
      obj1.x = obj1.x - 6;
      obj1.y = obj1.y - 15;

      obj2.x = obj2.x - 6;
      obj2.y = obj2.y + 15;
    }

    let afterCollisionEffectObstacles = function(obj1, obj2) {
      // obj1 player
      obj1.x = obj1.x - 15;
      obj1.y = obj1.y - 10;
      // obj2 obstacle
      obj2.x = obj2.x - 3;
      obj2.y = obj2.y + 3;
    }

  
    if (collided(moto1, moto2)) {
      afterCollisionEffectPlayers(moto1, moto2);
      console.log("players collision detected ");
    }
    // collision with obstacles player1
    // if (collided(moto1, obstacle)) {
    //   afterCollisionEffectObstacles(moto1, obstacle);

    // }

    // collision with obstacles player1
    //  if (collided(moto2, obstacle)) {
    //   afterCollisionEffectObstacles(moto2, obstacle);

    // }

    randomObstacles.collection.forEach( (obstaclex) => {

          // collision with obstacles player1
          if (collided(moto1, obstaclex)) {
              afterCollisionEffectObstacles(moto1, obstaclex);
            console.log("player1 obstacle collision detected ");

          }
          // collision with obstacles player1
          if (collided(moto2, obstaclex)) {
            afterCollisionEffectObstacles(moto2, obstaclex);
            console.log("player2 obstacle collision detected ");

          }

});



  }

  function detectWinner(moto1, moto2) {
      if (moto1.x > finishLine.x) {
        alert(" player 1 is the winner");
        location.reload();
      }
      if (moto2.x > finishLine.x) {
        alert(" player 2 is the winner");
        location.reload();
      }
  }

  
}); // end of document ready