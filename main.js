img="";
status = "";
objects = [];
function preload() {
    img = loadImage('dog_cat.jpg')
}

function setup() {
    canvas = createCanvas(700,500);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status doesn't want to detect your item(s) but still spending time to do.";
}

function draw() {
    image(img,0,0,700,500);

    if (status != "") {
        console.log("sadly inside the IF:(");
        console.log(objects);

      for (i = 0; i < objects.length; i++)  {
        console.log("sadly the for loop is here:(");
          document.getElementById("status").innerHTML = "Status: Sadly Object was detected after so much energy!:(";
          fill("#6320EE");
          percent = floor(objects[i].confidence * 100);
          text(objects[i].label + " " + percent + "%", objects[i].x +20,objects[i].y+20);
          noFill();
          stroke("#6320EE");
          rect(objects[i].x,objects[i].y, objects[i].height);

      }

    }
    
}

function modelLoaded(){
    console.log("Model is loaded sadly:(");
    status = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results) {
    if(error){
        console.log(error);
    }
    console.log(results);
    objects = results;
}