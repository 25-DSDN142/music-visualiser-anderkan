
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {

   drawBackground();
   colorMode(HSB);

   //drawCurve(vocal,drum,bass,other);
   //drawSphere(vocal,drum,bass,other,counter);
   //rotateK(counter,vocal,drum,bass,other);
   wave(bass,drum);
   soundBar(vocal,drum,bass,other);
}

function drawBackground(){
   background(0);
   push();
   fill(180,0,0);
   rect(-960,-540,1920,540);
   pop();
}

function rotateK(counter,vocal,drum,bass,other){
   let angle = counter/60;
   push();
   rotate(angle);
   kaleidoscope(vocal,drum,bass,other);
   pop();

   /*push();
   rotate(-angle);
   kaleidoscope(vocal,drum,bass,other);
   pop();*/
}

function kaleidoscope(vocal,drum,bass,other){
   //setup
   angleMode(DEGREES);
   let symmetry = 1;
   let angle = 360 / symmetry;
   
   //drawing
   for (let i = 0; i < symmetry; i++){
      rotate(angle);
      soundBar(vocal,drum,bass,other);
      
      
   }

}

function drawSphere(other,bass,counter){
   colorMode(HSB)
   background(0);
   let sizeM = 100
   let colorS = map(counter,0,200,0,1);

   let from = color(180,100,100);
   let to = color(300,100,100);

   let colorA = lerpColor(from,to,colorS);

   push();
   translate(0,0);
   pointLight(255,255,255,200,-200,200);
   specularMaterial(colorA);
   shininess(50);
   fill(0,0,0);

   rotateWithFrameCount();
   stroke(lerpColor(from,to,colorS));
   strokeWeight(5);
   fill(colorA);
   noFill();
   sphere(sizeM,14,7);
   pop();

}

function soundBar(vocal,drum,bass,other){
   //generates bars that visualize the variables
   let bars = 8; //height

   let random1 = map(drum,0,100,0.1,0.6); //To emulate randomness 
   let random2 = map(other,0,100,0.1,1.5);
   
   let from = color(180,100,100);
   let to = color(0,100,100);
   let fromAlpha = color(180,100,100,0.5);
   let toAlpha = color(0,100,10,0.5);

   //generate
   
   let type = [];
   //pushes the variable mappings into an array
   type.push(map(vocal,0,100,0,bars*random1));
   type.push(map(vocal,0,100,0,bars*1.5));
   type.push(map(vocal,0,100,0,bars*random2));

   type.push(map(bass,0,100,0,bars*random2));
   type.push(map(bass,0,100,0,bars*1.5));

   type.push(map(drum,0,100,0,bars));
   type.push(map(other,0,100,0,bars));

   type.push(map(bass,0,100,0,bars*random1));

   

   
   //set up for sound bars
   translate(0,0);
   strokeWeight(0);

   //nested for loop looping through the array-setting up a bar for each
   for(let j = 0; j<type.length; j++){
      for(let i = 0; i<type[j]; i++){
         push();
         strokeWeight(5);
         stroke(lerpColor(fromAlpha,toAlpha,0+(1/bars)*i));

         fill(lerpColor(from,to,0+(1/bars)*i));
         //rect(-730+(200*j),-7.5-(30*i),50,15);
         ellipse(-672+(192*j),0-(30*i),20,20);
         pop();

      }
   }

   for(let j = 0; j<type.length; j++){
      for(let i = 0; i<type[j]; i++){
         push();
         strokeWeight(5);
         stroke(lerpColor(fromAlpha,toAlpha,0+(1/bars)*i));

         fill(lerpColor(from,to,0+(1/bars)*i));
         //rect(-730+(200*j),-7.5+(30*i),50,15);
         ellipse(-672+(192*j),0+(30*i),20,20);
         pop();

      }
   }

 }

function drawCurve(vocal,drum,bass,other){
   //setup
   let x1 = map(drum,0,100,-500,500)
   let y1 = map(other,0,100,-1000,1000);


   push();
   noFill();
   stroke(120,50,50);
   strokeWeight(1);

   bezier(-960,0,x1,y1,-x1,-y1,960,0);
   line(-960,0,960,0);
   pop();
}

function wave(bass,drum){
   let bass1 = map(bass,0,100,0,75);
   let bass2 = map(bass,0,100,-10,75);
   let bass3 = map(drum,0,100,0,75);
   let vibration = random(-5,5);
   
   strokeWeight(5);
   stroke(180,100,75);
   fill(0,0,0);
   
   push();
   rotate(45);
   ellipse(-300+vibration,950-(bass1+vibration),200,50);
   ellipse(-300,950-((bass2*1.25)+vibration),150,25);
   ellipse(-300,950-((bass2*1.5)+vibration),100,12.5);
   ellipse(-300,950-((bass2*1.75)+vibration),50,6.25);
   pop();
   
   push();
   rotate(135);
  ellipse(+300+vibration,950-(bass1+vibration),200,50);
   ellipse(300,950-((bass2*1.25)+vibration),150,25);
   ellipse(300,950-((bass2*1.5)+vibration),100,12.5);
   ellipse(300,950-((bass2*1.75)+vibration),50,6.25);
   pop();

   push();   
   rotate(225);
   ellipse(-300+vibration,950-(bass1+vibration),200,50);
   ellipse(-300,950-((bass2*1.25)+vibration),150,25);
   ellipse(-300,950-((bass2*1.5)+vibration),100,12.5);
   ellipse(-300,950-((bass2*1.75)+vibration),50,6.25);
   pop();
   
   push();
   rotate(315);
   ellipse(300+vibration,950-(bass1+vibration),200,50);
   ellipse(300,950-((bass2*1.25)+vibration),150,25);
   ellipse(300,950-((bass2*1.5)+vibration),100,12.5);
   ellipse(300,950-((bass2*1.75)+vibration),50,6.25);
   pop();
}

function rotateWithFrameCount(){
   rotateY(frameCount);
   rotateX(frameCount);
}