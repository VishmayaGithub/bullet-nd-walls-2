function ibounce(b,w){
    //if(p1.x-p2.x < p1.width/2 + p2.width/2 && 
     //p2.x - p1.x < p1.width/2 + p2.width/2) {
     //p2.velocityX = p2.velocityX * -1
    //p1.velocityX = p1.velocityX * -1}
     bulletRightEdge = b.x+b.width
     wallLeftEdge = w.x
     if(bulletRightEdge>=wallLeftEdge){
       return true
     }else{return false}
  }