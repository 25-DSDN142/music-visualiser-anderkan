
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {

   background(0);

   drawSphere(vocal,drum,bass,other);
   soundBar(vocal,drum,bass,other);
}


function drawSphere(vocal,bass){
   colorMode(HSB)
   background(0);
   let sizeM = map(vocal,1,100,100,250);
   let colorS = map(bass,0,100,0,1)

   let from = color(180,100,100);
   let to = color(300,100,100);

   push();
   translate(0,-200);
   pointLight(255,255,255,200,-200,200);
   specularMaterial(0,255,0);
   shininess(50);
   fill(0,0,0);

   rotateWithFrameCount();
   stroke(lerpColor(from,to,colorS));
   strokeWeight(5);
   noFill();
   sphere(sizeM,5,5);
   pop();

}

function soundBar(vocal,drum,bass,other){
   //generates a bar that visualizes the bass
   let bars = 16;

   let from = color(180,100,100);
   let to = color(330,100,100);

   let type = [];
   //pushes the variable mappings into an array
   type.push(vocalM = map(vocal,0,100,0,bars));
   type.push(bassM = map(bass,0,100,0,bars));
   type.push(drumM = map(drum,0,100,0,bars));
   type.push(otherM = map(other,0,100,0,bars));

   type.push(drumM = map(drum,0,100,0,bars));
   type.push(vocalM = map(vocal,0,100,0,bars));
   type.push(otherM = map(other,0,100,0,bars));
   type.push(bassM = map(bass,0,100,0,bars));
   
   //set up for sound bars
   colorMode(HSB);
   translate(0,400);
   strokeWeight(0);
   //nested for loop looping through the array-setting up a bar for each
    /*for(let j = 0; j<type.length; j++){ //how many collums
      for(let i = 0; i<type[j]; i++){ // make collums

         let iMap = map(i, 0,type[j], 0,1 )
         currentColor = lerpColor(green,red,iMap);
         //fill(lerpColor(green,red,0+((1/i)*j)));
         fill(currentColor)
         rect(-730+(200*j),30-(30*i),50,15);

      }
   }*/

   //nested for loop looping through the array-setting up a bar for each
   for(let j = 0; j<type.length; j++){
      for(let i = 0; i<type[j]; i++){
         fill(lerpColor(from,to,0+(1/bars)*i));
         rect(-730+(200*j),30-(30*i),50,15);

      }
   }
 }

function rotateWithFrameCount(){
   rotateY(frameCount);
   rotateX(frameCount);
}