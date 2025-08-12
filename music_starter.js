let size = 0;
let bassM = 0;



// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {

   size = map(vocal,1,100,100,250);
   bassM = map(vocal,0,100,0,20);

   drawSphere(size,bassM);
   forLoop(size,bassM);
}


function drawSphere(size,bassM){
   
   background(20);

   push();
   pointLight(255,255,255,200,-200,200);
   specularMaterial(0,255,0);
   shininess(50);
   fill(0,0,0);

   rotateWithFrameCount();
   stroke(0,255,255);
   strokeWeight(5);
   noFill();
   sphere(size,10,10);
   pop();

}

function forLoop(size,bassM){
   translate(0,400);
   for(let i = 0; i<bassM; i ++){
      rect(300,50*-i,100,50);
      fill(255,255-(18*i),0);

   }
}

function rotateWithFrameCount(){
   rotateY(frameCount);
   rotateX(frameCount);
}