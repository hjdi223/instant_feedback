function setup(){
  createCanvas(windowWidth, windowHeight);
  background(0);
  console.log("Ready to listen to Input -->");
}

function preload() {
  wow = loadImage("images/wow.png");
  angry = loadImage("images/angry.png");
  haha = loadImage("images/haha.png");
  like = loadImage("images/like.png");
  love = loadImage("images/love.png");
  sad = loadImage("images/sad.png");
}

function draw(){
  background(0);

  image(like,windowWidth/2.5,windowHeight/47,.15*windowHeight,.15*windowHeight)
  image(love,windowWidth/2.5,windowHeight*8/47,.15*windowHeight,.15*windowHeight)
  image(haha,windowWidth/2.5,windowHeight*15/47,.15*windowHeight,.15*windowHeight)
  image(wow,windowWidth/2.5,windowHeight*22/47,.15*windowHeight,.15*windowHeight)
  image(angry,windowWidth/2.5,windowHeight*29/47,.15*windowHeight,.15*windowHeight)
  image(sad,windowWidth/2.5,windowHeight*36/47,.15*windowHeight,.15*windowHeight)
}
//like
function touchEnded() {
    if(mouseX>windowWidth/2.5&&mouseX<(windowWidth/2.5+.15*windowHeight)&&mouseY>windowHeight/47&&mouseY<(windowHeight/47+.15*windowHeight)){
        console.log("like!");

        httpGet('/like');
    }
//love
    if(mouseX>windowWidth/2.5&&mouseX<(windowWidth/2.5+.15*windowHeight)&&mouseY>windowHeight*8/47&&mouseY<(windowHeight*8/47+.15*windowHeight)){
        console.log("love!");

        httpGet('/love');
    }
//haha
    if(mouseX>windowWidth/2.5&&mouseX<(windowWidth/2.5+.15*windowHeight)&&mouseY>windowHeight*15/47&&mouseY<(windowHeight*15/47+.15*windowHeight)){
        console.log("haha");

        httpGet('/haha');
    }
//wow
    if(mouseX>windowWidth/2.5&&mouseX<(windowWidth/2.5+.15*windowHeight)&&mouseY>windowHeight*22/47&&mouseY<(windowHeight*22/47+.15*windowHeight)){
        console.log("wow");

        httpGet('/wow');
    }
//angry
    if(mouseX>windowWidth/2.5&&mouseX<(windowWidth/2.5+.15*windowHeight)&&mouseY>windowHeight*29/47&&mouseY<(windowHeight*29/47+.15*windowHeight)){
        console.log("angry");

        httpGet('/angry');
    }
//sad
    if(mouseX>windowWidth/2.5&&mouseX<(windowWidth/2.5+.15*windowHeight)&&mouseY>windowHeight*36/47&&mouseY<(windowHeight*36/47+.15*windowHeight)){
        console.log("sad");
        httpGet('/sad');

    }
}