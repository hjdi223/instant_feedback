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
    image(this.type, this.xpos, this.ypos, windowHeight/15, windowHeight/18);
};

button.prototype.update = function() {
    var rando = random(25, 100);
    var speed = random(.25, 2);
    this.xpos = this.xpos-speed;
    this.ypos = this.ypos + sin(frameCount / rando);
};

function setup(){
    createCanvas(windowWidth, windowHeight);
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
    background(400,400,400,255);
    fill(255, 102, 153);

    text_size=40;
    
    last_played = default_song;

    image(like, .3*windowWidth, .85*windowHeight, windowHeight/25, windowHeight/25);
    text(like_count, .33*windowWidth, .88*windowHeight);

    image(love, .37*windowWidth, .85*windowHeight, windowHeight/25, windowHeight/25);
    text(love_count, .4*windowWidth, .88*windowHeight);

    image(haha, .44*windowWidth, .85*windowHeight, windowHeight/25, windowHeight/25);
    text(haha_count, .47*windowWidth, .88*windowHeight);

    image(wow, .51*windowWidth, .85*windowHeight, windowHeight/25, windowHeight/25);
    text(wow_count, .54*windowWidth, .88*windowHeight);

    image(angry, .58*windowWidth, .85*windowHeight, windowHeight/25, windowHeight/25);
    text(angry_count, .61*windowWidth, .88*windowHeight);

    image(sad, .65*windowWidth, .85*windowHeight, windowHeight/25, windowHeight/25);
    text(sad_count, .68*windowWidth, .88*windowHeight);

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
 
    stop_everything();
    like_song.play();

    buttons.push(new button(7/60*windowHeight, like));

    like_count++;
})

socket.on('love', function(){
    console.log("love");
    message_state=2;

    stop_everything();
    love_song.play();
  

    buttons.push(new button(14/60*windowHeight, love));

    love_count++;
})

socket.on('haha', function(){
    console.log("haha");
    message_state=3;
   
    stop_everything();
    haha_song.play();


    buttons.push(new button(21/60*windowHeight, haha));

    haha_count++;
})

socket.on('wow', function(){
    console.log("wow");
    message_state=4;

    stop_everything();
    wow_song.play();

    buttons.push(new button(28/60*windowHeight, wow));

    wow_count++;
   
})

socket.on('angry', function(){
    console.log("angry");
    message_state=5;

    stop_everything();
    angry_song.play();

    buttons.push(new button(35/60*windowHeight, angry));

    angry_count++;
})

socket.on('sad', function(){
    console.log("sad");
    message_state=6;

    stop_everything();
    sad_song.play();
  

    buttons.push(new button(.7*windowHeight, sad));

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

