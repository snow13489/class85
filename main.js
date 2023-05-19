var canvas = document.getElementById("canva");
ctx= canvas.getContext("2d");

var rover_width= 100;
var rover_height= 90;

background_image= "mars.jpg";
rover_image= "rover.png";

rover_x=10;
rover_y=10;

function add() {
    background_imgTag = new Image();
    background_imgTag.onload= uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag =new Image();
    rover_imgTag.onload= uploadrover;
    rover_imgTag.src = rover_image;

}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}
function uploadrover(){
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown" , KD);
function KD(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);

if(keyPressed == '37'){
     Left();

}
 
if(keyPressed == '38'){
    Up();
}

if(keyPressed == '39'){
   Right();
}

if(keyPressed == '40'){
    Down();
}

}
function Up(){
    if(rover_y>=0){
        rover_y =rover_y -10;
        console.log("x= "+ rover_x + ",y=" + rover_y);
        uploadBackground();
            uploadrover();
        
    }
}

function Down(){
    if(rover_y<=500){
        rover_y =rover_y +10;
        console.log("x= "+ rover_x + ",y=" + rover_y);
        uploadBackground();
            uploadrover();
        
    }
}

function Left(){
    if(rover_x>=0){
        rover_x =rover_x -10;
        console.log("x= "+ rover_x + ",y=" + rover_y);
        uploadBackground();
            uploadrover();
        
    }
}
function Right(){
    if(rover_x<=700){
        rover_x =rover_x +10;
        console.log("x= "+ rover_x + ",y=" + rover_y);
        uploadBackground();
            uploadrover();
        
    }
}