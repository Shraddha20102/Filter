function setup(){
    canvas = createCanvas(400, 350)
    canvas.center()

    video = createCapture(VIDEO);
    video.hide()

    model = ml5.poseNet(video, modelLoaded)
    model.on("pose" , showResult)
}
nosex = 0;
nosey = 0;

function showResult(result){
    console.log(result)
    nosex = result[0].pose.nose.x;
    nosey = result[0].pose.nose.y;
}

function modelLoaded(){
    console.log("poseNet is linked")
}
function preload(){
    crown = loadImage('crown.png')
    blush = loadImage('blush.png')
}
function draw(){
    image(video, 0, 0, 400, 350)
    uc = document.getElementById('dd').value

    if(uc == "Clown"){
        fill("red")
        stroke("red")
        circle(nosex -125, nosey -75, 20)
    }
    
    if(uc == "Crown"){
        image(crown, nosex -167, nosey -210, 100, 100)
    }

    if(uc == "Blush"){
        image(blush, nosex -150, nosey -75, 20, 10)
    }
}
function takepic(){
    save("filter.png")
}