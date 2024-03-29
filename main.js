noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(400, 400);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', getPoses)

}

function getPoses(result){
    if(result.length > 0){
        console.log(result);
        noseX = result[0].pose.nose.x;
        noseY = result[0].pose.nose.y;

        console.log("noseX = "+noseX+" noseY = "+noseY)

        leftWristX = result[0].pose.leftWrist.x;
        rightWristX = result[0].pose.rightWrist.x;

        difference = floor(leftWristX - rightWristX);
        console.log("difference = "+difference);
    }
    else{
        console.log('Error')
    }
}

function modelLoaded(){
    console.log("Model is Initialized");
}

function draw(){
    background("#34eb49");
    textSize(difference);
    fill("purple");
    text('Shashwat', noseX, noseY)
}