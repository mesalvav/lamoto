class Obstacle{

  constructor(ctx, theX, theY, theWidth, theHeight){
    this.x = theX;
    this.y = theY;
    this.width = theWidth;
    this.height = theHeight;

    this.ctx = ctx;

    this.setItervalID = 0;
  }

  drawItself(){
    // this.ctx.fillStyle = "#FFFFFF";
    // this.ctx.fillRect(this.x, this.y, this.width, this.height);

    let obsImg = new Image();

    // "src" has to point as the image is used in HTML file
    obsImg.src = "helipolice.png";
    // ctx.drawImage(whichImage, x, y, width, height);
    this.ctx.drawImage(obsImg, this.x, this.y, this.width, this.height);
  }

  // not use when use collection 
  /*
  moveLeftForever(){
      setInterval(()=>{
        this.ctx.clearRect(this.x, this.y, this.width, this.height);
        this.x -= 0.3;
        this.drawItself();
      },200)
  }
  */
}

