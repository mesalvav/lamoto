class Chronos {

  constructor() {
      this.counter = 4;
       
    }
    
    startTheCrono() {
      
      let countFromFour = () => {
        let $countdown = $('#countdown');

          if (this.counter > 3) {
            $countdown.text("rev up");
          } else if (this.counter < 4 && this.counter > 0) {
            $countdown.text(this.counter);
          } else if ( this.counter == 0 ){
            $countdown.text("Go.....!")    
          } else {
            let negative = this.counter * -1;
            $countdown.text(negative)
          }
          this.counter-=1;
          
        }

      
      setInterval(countFromFour, 1000);
    }



} 