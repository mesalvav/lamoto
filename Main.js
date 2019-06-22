

$(document).ready(function(){
  console.log("hi ");
  
let ctx = $("#dcanvas")[0].getContext('2d');


$('#start-button').click(function(){
  
  let crono = new Chronos();
  crono.startTheCrono();

  let moto1 = new Moto(ctx, 150);
  moto1.drawItself();
  
  let moto2 = new Moto2(ctx, 450);
  moto2.drawItself();
  let obstacle = new Obstacle(ctx, 500, 300, 50, 50)// canvas w = 1000 x h = 600
  obstacle.drawItself();
  obstacle.moveDownForever();
  
  $(document).keydown(function(e){
    
    console.log(e.key);
    moto1.moveYourSelf(e.key);
    moto2.moveYourSelf(e.key);
  }); // end of keydown 
  
}); // end of start-button
  
}); // end of document ready