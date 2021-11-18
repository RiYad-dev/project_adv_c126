difference = 0;
leftWristX = 0;
rightWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 550);

    canvas = createCanvas(450, 450);
    canvas.position(650, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw() {
    background('#003cff');
    fill('#ffffff');
    stroke('#ffffff');
    text('Rishabh', 25, 225);
    textSize(50);
    document.getElementById("font_size").innerHTML = "The size of the text is " + difference + "px";
    textSize(difference);
}
function modelLoaded() {
    console.log("PoseNet is initialised!");
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = " + leftWristX + ", rightWristX = " + rightWristX + ", difference = " + difference);
    }
}