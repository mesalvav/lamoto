class FinishLine {

  constructor(ctx) {
    this.ctx = ctx;
    this.x=960;  this.y=0;  this.width=30; this.height=600;
  }

  drawItself() {
    // this.ctx.fillStyle = "#FF1111";
    this.ctx.fillRect(this.x, this.y, this.width, this.height);

    // this.ctx.fillStyle = "#111111";
    // this.ctx.font = "20px Georgia";
    // this.ctx.fillText("Finish", 10, 50);
    // canvas 1000 x 600
    // this.ctx.fillStyle = "#FFFFFF";
  }
}