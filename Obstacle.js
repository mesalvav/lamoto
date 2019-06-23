class Obstacle{

  constructor(ctx, theX, theY, theWidth, theHeight){
    this.x = theX;
    this.y = theY;
    this.width = theWidth;
    this.height = theHeight;

    this.ctx = ctx;
  }

  drawItself(){
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  moveLeftForever(){
      setInterval(()=>{
        this.ctx.clearRect(this.x, this.y, this.width, this.height);
        this.x -= 0.6;
        this.drawItself();
      },200)
  }
}

