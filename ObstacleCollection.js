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
        let numberOfObstacles = 7;
        for(let i=0; i< numberOfObstacles; i++) {

          let randomHeight = Math.floor(Math.random()* 570) + 20;
           let randomWidth = 1000 + (Math.floor(Math.random()* 500));


          let randomObstacle = new Obstacle(this.ctx,randomWidth, randomHeight, 80, 40);

          this.collection.push(randomObstacle);

        }


        for(let i=0; i< numberOfObstacles; i++) {

          let randomHeight = Math.floor(Math.random()* 570) + 20;
           let randomWidth = 1000 + (Math.floor(Math.random()* 2000));


          let randomObstacle = new Obstacle(this.ctx,randomWidth, randomHeight, 80, 40);

          this.collection.push(randomObstacle);

        }

        for(let i=0; i< numberOfObstacles; i++) {

          let randomHeight = Math.floor(Math.random()* 570) + 20;
           let randomWidth = 1000 + (Math.floor(Math.random()* 4000));


          let randomObstacle = new Obstacle(this.ctx,randomWidth, randomHeight, 80, 40);

          this.collection.push(randomObstacle);

        }

        

    }

      movecollectionForever(){

          this.collection = this.collection.filter((obstaclex)=>{
            if ( obstaclex.x < 10) {
              console.log(" obstaclex less than 10px ... ");
            }
            return obstaclex.x > -10;
          });

          setInterval(()=>{

            this.collection.forEach(( obstaclex )=>{

              obstaclex.ctx.clearRect(obstaclex.x, obstaclex.y, obstaclex.width, obstaclex.height);
              obstaclex.x -= 0.3;
              obstaclex.drawItself();

          });
          
        },200);  // end of setinterval()
        
    }



} 