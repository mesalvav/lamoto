class Moto {
  constructor(ctx, posY){
    this.ctx = ctx
    this.x=30;  this.y=posY;  this.width=30; this.height=30;
  }

  drawItself(){
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    // canvas 1000 x 600
  }

  moveYourSelf(whichDirection) {
    this.ctx.clearRect(this.x, this.y, this.width, this.height);

    console.log("dentro" + whichDirection);

    if(whichDirection ==="ArrowUp"){
      this.y -= 10;
    } else if (whichDirection === "ArrowDown"){
      this.y += 10;
    } else if (whichDirection === "ArrowLeft"){
      this.x -= 10;
    } else if (whichDirection === "ArrowRight"){
      this.x += 10;
    }

    if(this.x > 970)
    this.x = 970;

    if(this.x < 0)
    this.x = 0;

    if(this.y > 570)
    this.y = 570

    if(this.y < 0)
    this.y = 0;

     this.drawItself();
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

  moveYourSelf(whichDirection) {
    this.ctx.clearRect(this.x, this.y, this.width, this.height);

    console.log("dentro moto22" + whichDirection);

    if(whichDirection ==="w"){
      this.y -= 10;
    } else if (whichDirection === "z"){
      this.y += 10;
    } else if (whichDirection === "a"){
      this.x -= 10;
    } else if (whichDirection === "s"){
      this.x += 10;
    }

    if(this.x > 970)
    this.x = 970;

    if(this.x < 0)
    this.x = 0;

    if(this.y > 570)
    this.y = 570

    if(this.y < 0)
    this.y = 0;

     this.drawItself();
  }
}  // end of the class moto 2