var img="";
var statuss="";
var outputt=[];
function preload() {
    img=loadImage("animals.jpg");
}

function setup() {
    canvas=createCanvas(1000,400);
    canvas.position(350,150);
    cocoSsd=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("Status").innerHTML="Status : object Detecting";
}

function draw() {
    image(img,0,0,1000,400);
   if(statuss==true){
       for(i=0;i<outputt.length;i++){
        document.getElementById("Status").innerHTML="Status : object Detected";
        fill("black");
        noFill();
        stroke("black");
        rect(outputt[i].x,outputt[i].y,outputt[i].width,outputt[i].height);
        fill("black");
        text(outputt[i].label+" "+outputt[i].confidence+" %",outputt[i].x,outputt[i].y);
       }
   }
}

function modelLoaded() {
    console.log("model has successfully been loaded");
    cocoSsd.detect(img,loadedModel);
    statuss=true;

}

function loadedModel(error,results) {
if(error){
    console.error(error);
}

else{
    console.log(results);
    outputt=results;
}

}