var stBg,rhymesImg,learningImg,swarImg,vyanjanImg,countingImg,alphabetsImg;
var rhymes,alphabets,counting,learning,swar,vyanjan;
var gameState=0;
var play,playImg;
var bg2;
var s1img,s2img,s3img,s4img,s5img,s6img,s7img,s8img,s9img,s10img,s11img,s12img,s13img;

function preload(){
    stBg=loadImage("IMAGES/bg1.jpg")
    rhymesImg=loadImage("IMAGES/rhymes.png")
    learningImg=loadImage("IMAGES/LEARNING.png")
    swarImg=loadImage("IMAGES/swar.png")
    vyanjanImg=loadImage("IMAGES/vyanjan.png")
    countingImg=loadImage("IMAGES/counting.PNG")
    alphabetsImg=loadImage("IMAGES/maxresdefault.jpg")
    playImg = loadImage("IMAGES/b3.png")
    bg2 = loadImage("IMAGES/1582694.jpg")
    bg = loadImage("IMAGES/bg.jpg")

    s1img = loadImage("swar/S1.png");
    s2img = loadImage("swar/S2.png");
    s3img = loadImage("swar/S3.png");
    s4img = loadImage("swar/S4.png");
    s5img = loadImage("swar/S5.png");
    s6img = loadImage("swar/S6.png");
    s7img = loadImage("swar/S7.png");
    s8img = loadImage("swar/S8.png");
    s9img = loadImage("swar/S9.png");
    s10img = loadImage("swar/S10.png");
    s11img = loadImage("swar/S11.png");
    s12img = loadImage("swar/S12.png");
    s13img = loadImage("swar/S13.png");
    
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    rhymes = createSprite(800,200);
    rhymes.addImage(rhymesImg);
    rhymes.scale = 0.3
    rhymes.visible = false;

    learning = createSprite(width/2-3,height-250);
    learning.addImage(learningImg);
    learning.scale = 0.4
    learning.visible = false;

    swar = createSprite(200,200);
    swar.addImage(swarImg);
    swar.scale = 0.5
    swar.visible = false;

    vyanjan = createSprite(width/2-200,height-130);
    vyanjan.addImage(vyanjanImg);
    vyanjan.scale = 0.6
    vyanjan.visible = false;

    counting = createSprite(width/2+250,200);
    counting.addImage(countingImg);
    counting.scale = 0.8
    counting.visible = false;

    alphabets = createSprite(width-250,height-130);
    alphabets.addImage(alphabetsImg);
    alphabets.scale = 0.3
    alphabets.visible = false;

    play = createSprite(width/2-4,350)
    play.addImage(playImg)
    play.visible = true;

    s1 = createSprite(200,100);
    s1.addImage(s1img)
    s1.scale =0.18;
    s1.visible = false

    
    s2 = createSprite(width/2-200,100);
    s2.addImage(s2img)
    s2.scale =0.18;
    s2.visible = false

    
    s3 = createSprite(width/2+200,100);
    s3.addImage(s3img)
    s3.scale =0.18;
    s3.visible = false

    
    s4 = createSprite(width-200,100);
    s4.addImage(s4img)
    s4.scale =0.18;
    s4.visible = false

    
    s5 = createSprite(width/2-500,270);
    s5.addImage(s5img)
    s5.scale =0.18;
    s5.visible = false

    
    s6 = createSprite(width/2,270);
    s6.addImage(s6img)
    s6.scale =0.2;
    s6.visible = false

    
    s7 = createSprite(width-300,270);
    s7.addImage(s7img)
    s7.scale =0.18;
    s7.visible = false

    
    s8 = createSprite(200,450);
    s8.addImage(s8img)
    s8.scale =0.18;
    s8.visible = false

    
    s9 = createSprite(width/2-200,450);
    s9.addImage(s9img)
    s9.scale =0.18;
    s9.visible = false

    
    s10 = createSprite(width/2+200,450);
    s10.addImage(s10img)
    s10.scale =0.18;
    s10.visible = false

    
    s11 = createSprite(width-200,450);
    s11.addImage(s11img)
    s11.scale =0.18;
    s11.visible = false

    
    s12 = createSprite(width/2-350,height-100);
    s12.addImage(s12img)
    s12.scale =0.18;
    s12.visible = false

    
    s13 = createSprite(width/2+350,height-100);
    s13.addImage(s13img)
    s13.scale =0.18;
    s13.visible = false

}

function draw(){
    if(gameState ===0){
   background(stBg)

stroke("BLACK")
textAlign(CENTER)
textSize(50)
text("Hi kid ,WELCOME to ",575,100)

stroke("BLACK")
textAlign(CENTER)
textSize(50)
text("WORLD OF LEARNING",825,600)

if(mousePressedOver(play)){
    gameState = 1
}

    drawSprites();
    }
    if(gameState ===1){

        background(stBg);
        drawSprites();
        rhymes.visible = true;
        learning.visible = true;
        swar.visible = false;
        vyanjan.visible = false;
        counting.visible = false;
        alphabets.visible = false;
        play.visible = false;
        
        if(mousePressedOver(rhymes)){
            gameState = 2
        }
    
        if(mousePressedOver(learning)){
            gameState = 3
        }
    
    }
    if(gameState ===2){
        background(stBg);
        drawSprites();
        rhymes.visible = false;
        learning.visible = false;
        swar.visible = false;
        vyanjan.visible =  false;
        counting.visible = false;
        alphabets.visible =  false;
        play.visible = false;
    }
    if(gameState ===3){
        background(bg2);
        drawSprites();
        rhymes.visible = false;
        learning.visible = false;
        swar.visible = true;
        vyanjan.visible = true;
        counting.visible = true;
        alphabets.visible = true;
        play.visible = false;
        
        if(mousePressedOver(swar)){
            gameState = 4
        }
    
        if(mousePressedOver(vyanjan)){
            gameState = 5
        }
    
        if(mousePressedOver(counting)){
            gameState = 6
        }
    
        if(mousePressedOver(alphabets)){
            gameState = 7
        } 

    }
    if(gameState ===4){
        background(bg);
        drawSprites();
        rhymes.visible = false;
        learning.visible = false;
        swar.visible = false;
        vyanjan.visible = false;
        counting.visible = false;
        alphabets.visible = false;
        play.visible = false;
        s1.visible = true;
        s2.visible = true;
        s3.visible = true;
        s4.visible = true;
        s5.visible = true;
        s6.visible = true;
        s7.visible = true;
        s8.visible = true;
        s9.visible = true;
        s10.visible = true;
        s11.visible = true;
        s12.visible = true;
        s13.visible = true;   

    }
    if(gameState ===5){
        background(0);
        drawSprites();
        rhymes.visible = false;
        learning.visible = false;
        swar.visible = false;
        vyanjan.visible = false;
        counting.visible = false;
        alphabets.visible = false;
        play.visible = false;

    }
    if(gameState ===6){
        background(0);
        drawSprites();
        rhymes.visible = false;
        learning.visible = false;
        swar.visible = false;
        vyanjan.visible = false;
        counting.visible = false;
        alphabets.visible = false;
        play.visible = false;

    }
}