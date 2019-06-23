class StateKeyboard {

  constructor(){
    
    // player on top
    this.ArrowUp = false;
    this.ArrowDown = false;
    this.ArrowLeft = false;
    this.ArrowRight = false;

    //player at bottom
    this.w =false; // up
    this.s = false;  // s forward
    this.x = false;  // down
    this.a = false; // left 
  }

  updateStateKeyDown(event){
    // player top
    if (event.key === "ArrowUp") {
      this.ArrowUp = true;
      // console.log("from class arrowUp " + this.ArrowUp);
    }

    if (event.key === "ArrowDown") {
      this.ArrowDown = true;
      // console.log("from class arrowUp " + this.ArrowUp);
    }
    if (event.key === "ArrowLeft") {
      this.ArrowLeft = true;
      // console.log("from class arrowUp " + this.ArrowUp);
    }
    if (event.key === "ArrowRight") {
      this.ArrowRight = true;
      // console.log("from class arrowUp " + this.ArrowUp);
    }

    // player bottom 
    if (event.key === "w") {  // w is up
      this.w = true;
     
    }

    if (event.key === "s") {
      this.s = true; // s is forward
     
    }
    if (event.key === "x") {
      this.x = true;  // x is down
      
    }
    if (event.key === "a") {
      this.a = true;  // aa is lef t or backward
      
    }

  }

  updateStateKeyUp(event){
    if (event.key === "ArrowUp") {
      this.ArrowUp = false;
    }

    if (event.key === "ArrowDown") {
      this.ArrowDown = false;
      // console.log("from class arrowUp " + this.ArrowUp);
    }
    if (event.key === "ArrowLeft") {
      this.ArrowLeft = false;
      // console.log("from class arrowUp " + this.ArrowUp);
    }
    if (event.key === "ArrowRight") {
      this.ArrowRight = false;
      // console.log("from class arrowUp " + this.ArrowUp);
    }

    // player bottom 
    if (event.key === "w") {  // w is up
      this.w = false;
     
    }

    if (event.key === "s") {
      this.s = false; // s is forward
     
    }
    if (event.key === "x") {
      this.x = false;  // x is down
      
    }
    if (event.key === "a") {
      this.a = false;  // aa is lef t or backward
      
    }



  }


}