var socket = io('/terie');     //http://socket.io/docs/
var message_state = 0;
var buttons = [];
var last_played;
var popular;

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
    most_popular();
}

socket.on('like', function(){
    console.log("like fired");
    message_state=1;
    
    like_count++;
    
    if(popular == "like" && !like_song.isPlaying()) {
        stop_everything();
        like_song.play();
    }
    
    buttons.push(new button(7/60*windowHeight, like));

   
})

socket.on('love', function(){
    console.log("love");
    message_state=2;
    
    love_count++;
    
    if(popular == "love" && !love_song.isPlaying()) {
        stop_everything();
        love_song.play();
    }

    buttons.push(new button(14/60*windowHeight, love));

    
})

socket.on('haha', function(){
    console.log("haha");
    message_state=3;
   
    haha_count++;
    
    if(popular == "haha" && !haha_song.isPlaying()) {
        stop_everything();
        haha_song.play();
    }

    buttons.push(new button(21/60*windowHeight, haha));
   
})

socket.on('wow', function(){
    console.log("wow");
    message_state=4;

    wow_count++;
    
    if(popular == "wow" && !wow_song.isPlaying()) {
        stop_everything();
        wow_song.play();
    }
    
    buttons.push(new button(28/60*windowHeight, wow));
  
   
})

socket.on('angry', function(){
    console.log("angry");
    message_state=5;

    angry_count++;
    
    if(popular == "angry" && !angry_song.isPlaying()) {
        stop_everything();
        angry_song.play();
    }
    
    buttons.push(new button(35/60*windowHeight, angry));
    
})

socket.on('sad', function(){
    console.log("sad");
    message_state=6;

    sad_count++;
    
    if(popular == "sad" && !sad_song.isPlaying()) {
        stop_everything();
        sad_song.play();
    }
    
    buttons.push(new button(.7*windowHeight, sad));
    
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


function most_popular() {
 
    if(like_count > love_count && like_count > haha_count && like_count > wow_count && like_count > angry_count && like_count > sad_count) {
        popular = "like";
    }
    else if(love_count > like_count && love_count > haha_count && love_count > wow_count && love_count > angry_count && love_count > sad_count) {
        popular = "love";
    }
    else if(haha_count > like_count && haha_count > love_count && haha_count > wow_count && haha_count > angry_count && haha_count > sad_count) {
        popular = "haha";
    }
    else if(wow_count > like_count && wow_count > love_count && wow_count > haha_count && wow_count > angry_count && wow_count > sad_count) {
        popular = "wow";
    }
    else if(angry_count > like_count && angry_count > love_count && angry_count > haha_count && angry_count > wow_count && angry_count > sad_count) {
        popular = "angry";
    }
    else if(sad_count > like_count && sad_count > love_count && sad_count > haha_count && sad_count > wow_count && sad_count > angry_count) {
        popular = "sad";
    }
    
}

