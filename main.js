function preload(){
    song = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(750, 750);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', got_poses);
}