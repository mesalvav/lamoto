

$(document).ready(function(){
  console.log("hi ");
  
let ctx = $("#dcanvas")[0].getContext('2d');
let stateKeyboard = new StateKeyboard();

let crono = new Chronos();
let moto1 = new Moto(ctx, 150);
let moto2 = new Moto2(ctx, 450);
moto1.drawItself();
moto2.drawItself();

let obstacles = new Obstacle(ctx, 900, 300, 50 ,50);

$('#start-button').click(function(){
  
  crono.startTheCrono();

  moto2.moveForeverXdirection();
  moto1.moveForeverXdirection();
  
  animate();
  


}); // end of start-button


$(document).keydown(function(e){
  
  
    stateKeyboard.updateStateKeyDown(e);

    moto1.moveYourSelfWithState(stateKeyboard);
    moto2.moveYourSelfWithState(stateKeyboard);

    console.log("from down " + JSON.stringify( stateKeyboard));

  }); // end of keydown 

  $(document).keyup(function(e){
    
    // console.log("key code up " + e.key);
    stateKeyboard.updateStateKeyUp(e);
    console.log("from up " + JSON.stringify( stateKeyboard));
    

  }); // end of keydown 



  function animate() {
    
  console.log("animate ... ");
  setInterval(()=>{

    ctx.clearRect(0,0,1000,600);
    
    drawEverything();
    detectCollisions();
  }, 50);

  }// end of animate func 

  function drawEverything() {
    moto1.drawItself();
    moto2.drawItself();
    obstacles.moveLeftForever();
  }

  function detectCollisions() {

  }

  
}); // end of document ready