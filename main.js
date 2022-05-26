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
}