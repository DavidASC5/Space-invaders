let x = 570
let y = 30
let d = 2

function setup() {
    createCanvas(600,600);
}

function draw(){
    for(i=0;i<1;i++){
        background(255);
        x--
        y++
        ellipse(x,y,20,20);
        console.log(x,y)
        if(x>600 && y>50){
            x = 570
            y = 30
        }
    }
}
   //if(x>= 560 || y>= 560){
       
    /*d*= -1
   }*/
  
   /*if (x<= 0 || y<= 0){
d*= -1
   }
}*/