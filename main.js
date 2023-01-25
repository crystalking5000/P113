function preload(){

}

function take_snapshot(){
    save ("milan_picture.png");
}

function draw(){
    image(video, 0, 0, 640, 480);
    circle(30, 30, 55, 55);
    circle(30, 450, 55, 55);
    circle(610, 30, 55, 55);
    circle(610, 450, 55, 55);
}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(150, 150);
    video = createCapture(VIDEO);
    video.hide();
}