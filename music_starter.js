
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {

   background(0);

   //drawSphere(vocal,drum,bass,other);
   soundBar(vocal,drum,bass,other);
}


function drawSphere(vocal){
   colorMode(RGB)
   background(20);
   let sizeM = map(vocal,1,100,100,250);

   push();
   pointLight(255,255,255,200,-200,200);
   specularMaterial(0,255,0);
   shininess(50);
   fill(0,0,0);

   rotateWithFrameCount();
   stroke(360,100,100);
   strokeWeight(5);
   noFill();
   sphere(sizeM,10,10);
   pop();

}

function soundBarOld(vocal,drum,bass,other){
   //generates a bar that visualizes the bass
   let vocalM = map(vocal,0,100,0,20);
   let bassM = map(bass,0,100,0,20);
   let drumM = map(drum,0,100,0,20)
   let otherM = map(other,0,100,0,20)
   

   colorMode(HSB);
   translate(0,400);
   strokeWeight(0);
   for(let i = 0; i<vocalM; i ++){
      fill(120-(8*i),100,100);
      rect(300,30*-i,100,30);

   }

   for(let i = 0; i<vocalM; i ++){
      fill(120-(8*i),100,100);
      rect(100,30*-i,100,30);

   }
}

function soundBar(vocal,drum,bass,other){
   //generates a bar that visualizes the bass

   let type = [];
   //pushes the variable mappings into an array
   type.push(vocalM = map(vocal,0,100,0,20));
   type.push(bassM = map(bass,0,100,0,20));
   type.push(drumM = map(drum,0,100,0,20));
   type.push(otherM = map(other,0,100,0,20));
   
   //set up for sound bars
   colorMode(HSB);
   translate(0,400);
   strokeWeight(0);

   //nested for loop looping through the array-setting up a bar for each
   for(let j = 0; j<type.length; j++){
      for(let i = 0; i<type[j]; i++){
         fill(120-(8*i),100,100);
         rect(-400+(220*j),30-(40*i),200,30);

      }
   }

}

function rotateWithFrameCount(){
   rotateY(frameCount);
   rotateX(frameCount);
}