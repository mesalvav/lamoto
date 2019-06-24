

let dDocument  = $(document).ready(function(){
  console.log("hi ");
  
let ctx = $("#dcanvas")[0].getContext('2d');
let stateKeyboard = new StateKeyboard();

let crono = new Chronos();
let moto1 = new Moto(ctx, 150);
let moto2 = new Moto2(ctx, 450);
moto1.drawItself();
moto2.drawItself();

let obstacles = new Obstacle(ctx, 900, 300, 50 ,50);
let gameStarted = false;

let startButton = $('#start-button').click(function(){
  
  if ( gameStarted) {
    startButton.text('Start');
    location.reload();
  } else {
    crono.startTheCrono();

    let startGameWithDelay = () => {

      startButton.text('Reset Game');
      moto2.moveForeverXdirection();
      moto1.moveForeverXdirection();
      animate();
    }

    setTimeout( startGameWithDelay, 5000);
       
  }
    
  gameStarted = !gameStarted;


}); // end of start-button


$(document).keydown(function(e){
  
  
    stateKeyboard.updateStateKeyDown(e);

    moto1.moveYourSelfWithState(stateKeyboard);
    moto2.moveYourSelfWithState(stateKeyboard);

    // console.log("from down " + JSON.stringify( stateKeyboard));

  }); // end of keydown 

  $(document).keyup(function(e){
    
    // console.log("key code up " + e.key);
    stateKeyboard.updateStateKeyUp(e);
    // console.log("from up " + JSON.stringify( stateKeyboard));
    

  }); // end of keydown 



  function animate() {
    
  console.log("animate ... ");
  setInterval(()=>{

    ctx.clearRect(0,0,1000,600);
    
    drawEverything();
    detectCollisions(moto1, moto2, obstacles);
  }, 50);

  }// end of animate func 

  function drawEverything() {
    moto1.drawItself();
    moto2.drawItself();
    obstacles.moveLeftForever();
  }

  function detectCollisions(moto1, moto2, obstacles) {

    var collided = function(obj1, obj2) {
          let posibleXXcollision = obj1.x < (obj2.x + obj2.width) && (obj1.x + obj1.width) > obj2.x;
          let posibleYYcollision = obj1.y < (obj2.y + obj2.height) && (obj1.y + obj1.height) > obj2.y;

        return posibleXXcollision && posibleYYcollision;
    }

    console.log("players collision detected " + collided(moto1, moto2) );
    if (collided(moto1, moto2)) {
      moto1.x = moto1.x - 3;
      moto1.y = moto1.y - 10;

      moto2.x = moto2.x - 3;
      moto2.y = moto2.y + 10;
        
    }
  }

  
}); // end of document ready