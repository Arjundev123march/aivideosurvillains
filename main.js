status="";
objects=[];
function preload(){
    video=createVideo('video.mp4');
}
function setup(){
    canvas=createCanvas(480,380);
    canvas.center();
    video.hide();
}
function A(){
    x=ml5.objectDetector('cocossd',modelloaded);
    document.getElementById("B").innerHTML="status:detecting object";
}
function modelloaded(){
    console.log("modelloaded");
    status=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}
function gotresult(error,results){
  if(error){
      console.log(error);
  }  
console.log(results);
    objects=results;
}
function draw(){
    image(video,0,0,480,380);
    if(status != ""){
   x.detect(video,gotresult);   
        for(i=0;i<objects.length;i++){
        document.getElementById("B").innerHTML="status:object detected";    
            document.getElementById("V").innerHTML="number of objects detected :-"+objects.length;
            fill("red");
            noFill();
            stroke("red");
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
            percent=floor(objects[i].confidence*100);
            text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15);
        }
       }
}