class Chronos {

  constructor() {
      // this.counter = 4;
    }
    
    startTheCrono() {
      let counter = 4;
      let countFromFour = function() {

        let $countdown = $('#countdown');
          console.log('one seconds ' + counter);
      
          if (counter > 3) {
            $countdown.text("rev up");
          } else if (counter < 4 && counter > 0) {
            $countdown.text(counter);
          } else if ( counter == 0 ){
            $countdown.text("Go.....!")    
          } else {
            let negative = counter * -1;
            $countdown.text(negative)
          }
          counter-=1;
      
        }

      
      setInterval(countFromFour, 1000);
    }

  
  
} 