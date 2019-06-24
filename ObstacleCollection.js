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
        let numberOfObstacles = 6;
        for(let i=0; i< numberOfObstacles; i++) {

          let randomHeight = Math.floor(Math.random()* 570) + 20;
           let randomWidth = 1000 + (Math.floor(Math.random()* 500));


          let randomObstacle = new Obstacle(this.ctx,randomWidth, randomHeight, 80, 40);

          this.collection.push(randomObstacle);

        }


        for(let i=0; i< numberOfObstacles; i++) {

          let randomHeight = Math.floor(Math.random()* 570) + 20;
           let randomWidth = 1000 + (Math.floor(Math.random()* 6000));


          let randomObstacle = new Obstacle(this.ctx,randomWidth, randomHeight, 80, 40);

          this.collection.push(randomObstacle);

        }




    }

      movecollectionForever(){

          setInterval(()=>{

            this.collection.forEach(( obstaclex )=>{

              obstaclex.ctx.clearRect(obstaclex.x, obstaclex.y, obstaclex.width, obstaclex.height);
              obstaclex.x -= 0.3;
              obstaclex.drawItself();

          });
          
        },200);  // end of setinterval()
        
    }



} 