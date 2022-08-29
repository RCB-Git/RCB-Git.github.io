let file;
function preload(){
file = loadStrings('Rex.txt');

}

function setup() {
createCanvas(400, 400, WEBGL);

}

function draw() {
  fill(255);
  background(100);
  
 // print(file[frameCount]);
}
let vertexes;
let poly;

function loadvalues(){
  for(let i = 0; i < file.length; i++ ){
    let line = file[i];
    if(line.substring() == "v  ")
      {
        line = line.substring(3)
        print(line);

      }
      if(line.substring() == "f  ")
      {



      }
  }


  }
  
