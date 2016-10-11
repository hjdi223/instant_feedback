var socket = io('/terie');     //http://socket.io/docs/
var message_state = 0;
var buttons = [];
var last_played;

var like_count = 0, love_count = 0, haha_count=0, wow_count=0, angry_count=0, sad_count=0;

function button(y, imgtype) {
    this.xpos = width;
    this.ypos = y;
    this.type = imgtype;
}

button.prototype.display = function() {
    image(this.type, this.xpos, this.ypos, 50, 50);
};

button.prototype.update = function() {
    var rando = random(25, 100);
    var speed = random(.25, 2);
    this.xpos = this.xpos-speed;
    this.ypos = this.ypos + sin(frameCount / rando);
};

function setup(){
    createCanvas(windowWidth, (windowWidth / 16) * 9);
    background(255);
    frameRate(30);
    smooth();
}

function preload() {
    //images
    
    
    like = loadImage("images/like.png");
    love = loadImage("images/love.png");
    haha = loadImage("images/haha.png");
    wow = loadImage("images/wow.png");
    angry = loadImage("images/angry.png");
    sad = loadImage("images/sad.png");
    
    //sounds
   
    like_song = loadSound("sounds/like_song.mp3");
    love_song = loadSound("sounds/love_song.mp3");
    wow_song = loadSound("sounds/wow_song.mp3");
    haha_song = loadSound("sounds/haha_song.mp3");
    angry_song = loadSound("sounds/angry_song.mp3");
    sad_song = loadSound("sounds/sad_song.mp3");
   
    default_song = loadSound("sounds/default.mp3");
}



function draw(){
    background(198,198,198,255);
    fill(255, 102, 153);
    text_size=40;
    
    last_played = default_song;
   
    
    image(like, windowWidth/2-220, .85*windowHeight, 40, 40);
    text(like_count, windowWidth/2-180, .85*windowHeight);

    image(love, windowWidth/2-140, .85*windowHeight, 40, 40);
    text(love_count, windowWidth/2-100, .85*windowHeight);

    image(haha, windowWidth/2-60, .85*windowHeight, 40, 40);
    text(haha_count, windowWidth/2-20, .85*windowHeight);

    image(wow, windowWidth/2+20, .85*windowHeight, 40, 40);
    text(haha_count, windowWidth/2+60, .85*windowHeight);

    image(angry, windowWidth/2+100, .85*windowHeight, 40, 40);
    text(angry_count, windowWidth/2+140, .85*windowHeight);

    image(sad, windowWidth/2+180, .85*windowHeight, 40, 40);
    text(sad_count, windowWidth/2+220, .85*windowHeight);

    if(message_state==0){

    }
    else if(message_state==1){

    }
    else if(message_state==2){

    }
    else if(message_state==3){

    }
    else if(message_state==4){

    }
    else if(message_state==5){

    }
   else if(message_state==6){

  }
    for(var i = 0; i < buttons.length; i++) {
         buttons[i].display();
         buttons[i].update();
    }

}

socket.on('like', function(){
    console.log("like fired");
    message_state=1;
    buttons.push(new button(25, like));
 
    stop_everything();
    like_song.play();
  
    like_count++;
})

socket.on('love', function(){
    console.log("love");
    message_state=2;
    buttons.push(new button(50, love));

    stop_everything();
    love_song.play();
  
    love_count++;
})

socket.on('haha', function(){
    console.log("haha");
    message_state=3;
    buttons.push(new button(75, haha));
   
    stop_everything();
    haha_song.play();

    haha_count++;
})

socket.on('wow', function(){
    console.log("wow");
    message_state=4;
    buttons.push(new button(100, wow));
    
    stop_everything();
    wow_song.play();
   
    wow_count++;
   
})

socket.on('angry', function(){
    console.log("angry");
    message_state=5;
    buttons.push(new button(125, angry));
  
    stop_everything();
    angry_song.play();
    
    angry_count++;
})

socket.on('sad', function(){
    console.log("sad");
    message_state=6;
    buttons.push(new button(175, sad));

    stop_everything();
    sad_song.play();
  
    sad_count++;
})


function stop_everything() {
    if (like_song.isPlaying()){
        like_song.stop();
    }
    else if (love_song.isPlaying()) {
        love_song.stop();
    }
    else if (haha_song.isPlaying()) {
        haha_song.stop();
    }
    else if (wow_song.isPlaying()) {
        wow_song.stop();
    }
    else if (angry_song.isPlaying()) {
        angry_song.stop();
    }
    else if (sad_song.isPlaying()) {
        sad_song.stop();
    }
}

