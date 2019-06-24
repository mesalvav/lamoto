class Moto {

  constructor(ctx, posY) {
    this.ctx = ctx
    this.x=30;  this.y=posY;  this.width=30; this.height=30;

  } // end of constructor 
  
  drawItself() {
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    // canvas 1000 x 600
  }

  moveForeverXdirection() {
    setInterval(()=> {
      this.x+=0.1;
    });
  }

  moveYourSelf(event) {
   // this.ctx.clearRect(this.x, this.y, this.width, this.height);

    // console.log("dentro" + whichDirection);
    let whichDirection = event.key;

    if(whichDirection ==="ArrowUp"){
      this.y -= 10;
    } else if (whichDirection === "ArrowDown"){
      this.y += 10;
    } else if (whichDirection === "ArrowLeft"){
      this.x -= 10;
    } else if (whichDirection === "ArrowRight"){
      // this.x -=10;
    }

    if(this.x > 970)
    this.x = 970;

    if(this.x < 0)
    this.x = 0;

    if(this.y > 570)
    this.y = 570

    if(this.y < 0)
    this.y = 0;

     // this.drawItself();
  }
//moto 1
  moveYourSelfWithState(keyState) {
    // this.ctx.clearRect(this.x, this.y, this.width, this.height);
 
    if (keyState.ArrowUp && keyState.ArrowRight) {
      this.x +=0.3;
      this.y -= 10;
    } else if (keyState.ArrowDown && keyState.ArrowRight ) {
      this.x +=0.3;
      this.y += 10;
    }
     else if(keyState.ArrowUp){
       this.y -= 10;
     } else if (keyState.ArrowDown){
       this.y += 10;
     } else if (keyState.ArrowLeft){
       this.x -= 10;
     } else if (keyState.ArrowRight){
        this.x +=0.6;
     }
 
     if(this.x > 970)
     this.x = 970;
 
     if(this.x < 0)
     this.x = 0;
 
     if(this.y > 570)
     this.y = 570
 
     if(this.y < 0)
     this.y = 0;
 
      // this.drawItself();
   }


}  // end of the class


// start moto 2
class Moto2 {
  constructor(ctx, posY){
    this.ctx = ctx
    this.x=30;  this.y=posY;  this.width=30; this.height=30;
  }

  drawItself(){
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    // canvas 1000 x 600
  }

  moveForeverXdirection() {
    setInterval(()=> {
      this.x+=0.1;
    });
  }
  
  moveYourSelf(event) {
    // this.ctx.clearRect(this.x, this.y, this.width, this.height);
    
    // console.log("dentro moto22" + whichDirection);
    let whichDirection = event.key;

    if(whichDirection === "w"){
      this.y -= 10;
    } else if (whichDirection === "x"){
      this.y += 10;
    } else if (whichDirection === "a"){
      this.x -= 10;
    } else if (whichDirection === "s"){
      // this.x += 10;
    }

    if(this.x > 970)
    this.x = 970;

    if(this.x < 0)
    this.x = 0;

    if(this.y > 570)
    this.y = 570

    if(this.y < 0)
    this.y = 0;

     // this.drawItself();
  } // end of move yourself moto2 

  moveYourSelfWithState(keyState) {
    // this.ctx.clearRect(this.x, this.y, this.width, this.height);
    // this.w =false; // up
    // this.s = false;  // s forward
    // this.x = false;  // down
    // this.a = false; // left 

    if (keyState.w && keyState.s) {
      this.x += 0.1;
      this.y -= 10;
    } else if (keyState.x && keyState.s ) {
      this.x +=0.1;
      this.y += 10;
    }
     else if(keyState.w){
       this.y -= 10;
     } else if (keyState.x){
       this.y += 10;
     } else if (keyState.a){
       this.x -= 10;
     } else if (keyState.s){
        this.x +=0.6;
     }
 
     if(this.x > 970)
     this.x = 970;
 
     if(this.x < 0)
     this.x = 0;
 
     if(this.y > 570)
     this.y = 570
 
     if(this.y < 0)
     this.y = 0;
 
      
   } // end of move yourself with state of  moto 2




}  // end of the class moto 2