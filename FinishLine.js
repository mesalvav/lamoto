class FinishLine {

  constructor(ctx) {
    this.ctx = ctx;
    this.x=960;  this.y=0;  this.width=40; this.height=600;
  }

  drawItself() {
    
    // this.ctx.fillRect(this.x, this.y, this.width, this.height);

    this.drawImage();
  }


  drawImage( ) {
    let finishImg = new Image();

    // "src" has to point as the image is used in HTML file
    finishImg.src = "diamonds.png";
    // ctx.drawImage(whichImage, x, y, width, height);
    this.ctx.drawImage(finishImg, this.x, this.y, this.width, this.height);

  }
}