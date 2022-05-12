song1 = ""
song2 = ""
left_wristX = 0;
left_wristY = 0;
right_wristX = 0;
right_wristY = 0;

function preload(){
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function setup(){
    canvas = createCanvas(750, 750);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', got_poses);
}

function modelLoaded(){
    console.log("Posenet is initialized :)")
}

function got_poses(results){
    if(results > 0){
        console.log(results);
        left_wristX = results[0].pose.leftWrist.x;
        left_wristY = results[0].pose.leftWrist.y;
        console.log("Left wrist x = " + left_wristX + "left wrist y = " + left_wristY);
        right_wristX = results[0].pose.rightWrist.x;
        right_wristY = resuls[0].pose.rightWrist.y;
        console.log("Right wrist x = " + right_wristX + "Right wrist y = " + right_wristY);
    }
}

function draw(){
    image(video, 0, 0, 600, 500);
    fill("purple");
    stroke("purple");

    if(score_right_wrist > 0){
        circle(right_wristX,right_wristY, 20);
        if(right_wristY > 0 && right_wristY <= 100){
            document.getElementById("speed").innerHTML = "Speed = 0.5x";
            song.rate(0.5);
        }
        else if(right_wristY > 100 && right_wristY <= 200){
            document.getElementById("speed").innerHTML = "Speed = 1x";
            song.rate(1);
        }
        else if(right_wristY > 200 && right_wristY <= 300){
            document.getElementById("speed").innerHTML = "Speed = 1.5x";
            song.rate(1.5);
        }
        else if(right_wristY > 300 && right_wristY <= 400){
            document.getElementById("speed").innerHTML = "Speed = 2x";
            song.rate(2);
        }
        else if(right_wristY > 400 && right_wristY <= 500){
            document.getElementById("speed").innerHTML = "Speed = 2x";
            song.rate(2);
        }
    }
    if(score_left_wrist > 0.2){
        circle(left_wristX, left_wristY, 20);
        inNumberlefty = Number(left_wristY);
        remove_decimal = floor(inNumberlefty);
        volume = remove_decimal/500;
        document.getElementById("volume").innerHTML = "Volume = " + volume;
        song.setVolume(volume);
    }

}
