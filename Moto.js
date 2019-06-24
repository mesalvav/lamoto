class Moto {

  constructor(ctx, posY) {
    this.ctx = ctx
    this.x=30;  this.y=posY;  this.width=60; this.height=60;
    this.Player1Img = new Image();
     // "src" has to point as the image is used in HTML file
    this.Player1Img.src = "yellowBal.png";
  
  } // end of constructor 
  
  drawItself() {
    this.ctx.save();
      // this.ctx.fillRect(this.x, this.y, this.width, this.height);


      this.drawImage();  
     
    this.ctx.restore();
    // this.ctx.fillStyle = "#FFFFFF";
    // canvas 1000 x 600
  }

  drawImage( ) {
    // Player1Img.onload = () => {
       this.ctx.drawImage(this.Player1Img, this.x, this.y, this.width, this.height);
    // };
    
    // ctx.drawImage(whichImage, x, y, width, height);
    // this.ctx.drawImage(Player1Img, this.x, this.y, this.width, this.height);

  }
  drawLabel(){
    this.ctx.save();
    this.ctx.fillStyle = "#AABBCC";
    this.ctx.font = "18px Georgia";
    this.ctx.fillText("P1", this.x + 1, this.y + 16);
    this.ctx.restore();
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
      this.x +=5;
      this.y -= 10;
    } else if (keyState.ArrowDown && keyState.ArrowRight ) {
      this.x +=5;
      this.y += 10;
    }
     else if(keyState.ArrowUp){
       this.y -= 10;
     } else if (keyState.ArrowDown){
       this.y += 10;
     } else if (keyState.ArrowLeft){
       this.x -= 10;
     } else if (keyState.ArrowRight){
        this.x +=5;
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
    this.x=30;  this.y=posY;  this.width=60; this.height=60;
    this.Player2Img = new Image();
     // "src" has to point as the image is used in HTML file
    this.Player2Img.src = "multiBal.png";
  
  }

  drawItself(){
    this.ctx.save();
    
    // this.ctx.fillRect(this.x, this.y, this.width, this.height);

    this.drawImage();
     
    this.ctx.restore();
    // canvas 1000 x 600
  }
  drawLabel() {
    this.ctx.save();
    this.ctx.fillStyle = "#AABBCC";
     this.ctx.font = "18px Georgia";
     this.ctx.fillText("P2", this.x + 1, this.y + 16);
     this.ctx.restore();
  }
  drawImage() {
    // ctx.drawImage(whichImage, x, y, width, height);
      this.ctx.drawImage(this.Player2Img, this.x, this.y, this.width, this.height);
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
      this.x += 5;
      this.y -= 10;
    } else if (keyState.x && keyState.s ) {
      this.x +=5;
      this.y += 10;
    }
     else if(keyState.w){
       this.y -= 10;
     } else if (keyState.x){
       this.y += 10;
     } else if (keyState.a){
       this.x -= 10;
     } else if (keyState.s){
        this.x +=5;
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