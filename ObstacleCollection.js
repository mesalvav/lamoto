class ObstacleCollection {

  constructor(ctx){
    this.ctx = ctx;
    this.collection = [];
  }

    drawCollection() {

        this.collection.forEach( (obstaclex, index) => {

            obstaclex.drawItself();
        });

    }

    randomCollection(){
        let numberOfObstacles = 4;
        for(let i=0; i< numberOfObstacles; i++) {

          let randomHeight = Math.floor(Math.random()* 570) + 20;
           let randomWidth = 1000 + (Math.floor(Math.random()* 500));


          let randomObstacle = new Obstacle(this.ctx,randomWidth, randomHeight, 80, 40);

          this.collection.push(randomObstacle);

        }


        for(let i=0; i< numberOfObstacles; i++) {

          let randomHeight = Math.floor(Math.random()* 570) + 20;
           let randomWidth = 1000 + (Math.floor(Math.random()* 2000));


          let randomObstacle = new Obstacle(this.ctx,randomWidth, randomHeight, 40, 40);

          this.collection.push(randomObstacle);

        }
    }

    movecollectionForever(){
      this.collection.forEach((obstaclex)=>{
          obstaclex.moveLeftForever();
      });
    }

} 