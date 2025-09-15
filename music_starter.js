let count = 0;


// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
   colorMode(HSB);
   background(0);
   starBackground();
   drawSphere(vocal,drum,bass,other,counter);
   wave(bass,drum);
   soundBar(vocal,drum,bass,other);
}

function starBackground() {
  //ChatGPT generated star sim, as I was short on time and needed a little bit extra for the visualizer.
   if (!this.stars) {
    this.stars = Array.from({length: 600}, () => ({
      x: random(-width/2, width/2),
      y: random(-height/2, height/2),
      z: random(width)
    }));
  }
  background(0);
  for (let s of this.stars) {
    s.z -= 8; // speed toward camera
    if (s.z < 1) {
      s.x = random(-width/2, width/2);
      s.y = random(-height/2, height/2);
      s.z = width;
    }
    let sx = map(s.x / s.z, 0, 1, 0, width/2);
    let sy = map(s.y / s.z, 0, 1, 0, height/2);
    let r = map(s.z, 0, width, 5, 0);
    noStroke();
    fill(255);
    ellipse(sx, sy, r, r);
  }
}

function drawSphere(vocal,bass,drum,counter){
   colorMode(HSB)
   let sizeM = map(drum,0,100,0,50)

   push();
   translate(0,-50);
   //black hole
   strokeWeight(5);
   stroke(60,40,80);
   fill(50,100,100);
   ellipse(0,50,(200+count)+sizeM,(200+count)+sizeM,40);
   push();
   strokeWeight(0);
   ellipse(0,50,(450+(count*1.5))+sizeM,(30+(count*0.30))+sizeM,40);
   pop();
   push();
   strokeWeight(0);
   fill(50,100,0);
   ellipse(0,50,(100+count)+sizeM,(100+count)+sizeM,40);
   pop();
   pop();

   //counting function
   if(count < 600){
      count = count+0.1;
   }

}

function soundBar(vocal,drum,bass,other){
   //generates bars that visualize the variables
   let bars = 8; //height

   let random1 = map(drum,0,100,0.1,0.6); //To emulate randomness 
   let random2 = map(other,0,100,0.1,1.5);
   
   let from = color(180,100,100);
   let to = color(320,100,100);
   let fromAlpha = color(180,100,100,0.5);
   let toAlpha = color(320,100,10,0.5);

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
         ellipse(-672+(192*j),0+(30*i),20,20);
         pop();

      }
   }

 }


function wave(bass,drum){
   let bass1 = map(bass,0,100,0,75);
   let bass2 = map(bass,0,100,-5,75);
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