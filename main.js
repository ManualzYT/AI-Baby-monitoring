
img = "";
status = "";
object = [];

  

  function preload(){
    img = loadImage('baby_image.jpg');
  }
  
  function setup() {
    canvas = createCanvas(680, 423);
    canvas.center();
  }
  
  function draw(){
    image(img, 180, 55, 400, 300);
    noFill();
    stroke(255, 0, 0);
    text("Baby 100%", 285, 190);
    rect(280, 175, 210, 180 );    

    function setup(){
        canvas = createCanvas(380,380);
        canvas.center();
        video = createCapture(VIDEO);
        video.hide();
        video.size(380,380)
        objectDetector = ml5.objectDetector('cocossd', modelLoaded);
        document.getElementById("status").innerHTML = "Status: Baby Found"; 
    }
    
    function modelLoaded(){
        console.log("coco SSD model loaded");
        status = true;
    }   
    
    function gotResult(error,results){
        if(error){
            console.log(error);
        }
        else{
            console.log(results);
            object = results;
        }
    }
    
    function draw(){
        image(video,0,0,380,380);
        if(status != ""){
            r = random(255);
            g = random(255);
            b = random(255);
            objectDetector.detect(video,gotResult);
            for(i = 0; i < object.length; i++){
                document.getElementById("status").innerHTML = "status: baby found";
                fill(r,g,b);
                noFill();
                textSize(20);
                percent = floor(object[i].confidence * 100);
                text(object[i].label + " " + percent + "%" , object[i].x, object[i].y);
                stroke(r,g,b);
                rect(object[i].x, object[i].y , object[i].width, object[i].height);
            }
        }
        
    }
}