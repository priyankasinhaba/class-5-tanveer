var GameState = "wait"
var wall1,wall2,wall3,wall4,Player;
var score = 0
function preload(){
    splash_Screen = loadImage('Untitled design.gif');
    Game_Screen = loadImage('background1.jpeg')
    player_img = loadImage('player.png')
    
    enemy1_img = loadImage('enemy1.png')
    enemy2_img= loadImage('enemy2.png')
    coin = loadImage('coin.png')
    trophy = loadImage('trophy.png')
    checkpoint = loadSound('checkpoint.mp3')
    //die = loadSound('die.mp3')
    win = loadSound('win.mp3')
}
function setup(){
    createCanvas(600,600)
  

    Play_Button = createImg('play.png')
    About_Button = createImg('about button.png')
    Play_Button.position (260,310)
    About_Button.position (162,300)
    About_Button.size (75,75)
    Play_Button.size (50,50)


// boundary walls
wall1 = createSprite(30,300,10,550)
wall1.shapeColor = "orange";
wall2 = createSprite(300,25,550,10)
wall2.shapeColor = "blue";
wall3 = createSprite(300,580,550,10)
wall3.shapeColor = "pink";
wall4 = createSprite(570,300,10,550)
wall4.shapeColor = "tan";
Player = createSprite(280,200)
Player.addImage(player_img);
Player.scale = 0.07
 

enemy1 = createSprite(100,200)
enemy1.addImage(enemy1_img);
enemy1.scale = 0.2
enemy1.velocityX=1
enemy1.velocityY=-1;

enemy2 = createSprite(100,350)
enemy2.addImage(enemy2_img);
enemy2.scale = 0.2
enemy2.velocityX=1
enemy2.velocityY=-1

wall5 = createSprite(300,300,160,10)
wall5.shapeColor = "black";
wall6 = createSprite(300,350,160,10)
wall6.shapeColor = "black";
wall7 = createSprite(255,250,10,100)
wall7.shapeColor = "black";
wall8 = createSprite(255,400,10,100)
wall8.shapeColor = "black";
wall9 = createSprite(345,250,10,100)
wall9.shapeColor = "black";
wall10 = createSprite(345,400,10,100)
wall10.shapeColor = "black";
wall11 = createSprite(180,200,160,10)
wall11.shapeColor = "black";
wall12 = createSprite(225,450,100,10)
wall12.shapeColor = "black";
wall13 = createSprite(395,200,200,10)
wall13.shapeColor = "black";
wall14 = createSprite(375,450,100,10)
wall14.shapeColor = "black";
wall15 = createSprite(180,250,10,100)
wall15.shapeColor = "black";
wall16 = createSprite(180,400,10,100)
wall16.shapeColor = "black";
wall17 = createSprite(420,250,10,100)
wall17.shapeColor = "black";
wall18 = createSprite(420,400,10,100)
wall18.shapeColor = "black";
wall19 = createSprite(490,323,10,400)
wall19.shapeColor = "black";
wall20 = createSprite(100,330,10,490)
wall20.shapeColor = "black";
Exit = createSprite(65,540)
//Exit.shapeColor = "red";
Exit.addImage(trophy);
Exit.scale=0.2;

coin1 = createSprite(50,100)
coin1.addImage(coin)
coin1.scale = 0.1
coin2 = createSprite(80,230)
coin2.addImage(coin)
coin2.scale = 0.1
coin3 = createSprite(320,280)
coin3.addImage(coin)
coin3.scale = 0.1
coin4 = createSprite(270,330)
coin4.addImage(coin)
coin4.scale = 0.1
coin5 = createSprite(350,530)
coin5.addImage(coin)
coin5.scale = 0.1
coin6 = createSprite(200,220)
coin6.addImage(coin)
coin6.scale = 0.1
coin7 = createSprite(320,400)
coin7.addImage(coin)
coin7.scale = 0.1
coin8 = createSprite(120,430)
coin8.addImage(coin)
coin8.scale = 0.1
coin9 = createSprite(230,360)
coin9.addImage(coin)
coin9.scale = 0.1
coin10 = createSprite(320,150)
coin10.addImage(coin)
coin10.scale = 0.1
coin11 = createSprite(450,130)
coin11.addImage(coin)
coin11.scale = 0.1
coin12 = createSprite(400,240)
coin12.addImage(coin)
coin12.scale = 0.1
coin13 = createSprite(450,240)
coin13.addImage(coin)
coin13.scale = 0.1
coin14= createSprite(334,400)
coin14.addImage(coin)
coin14.scale = 0.1
coin15 = createSprite(500,390)
coin15.addImage(coin)
coin15.scale = 0.1
coin16 = createSprite(125,350)
coin16.addImage(coin)
coin16.scale = 0.1
coin17 = createSprite(290,120)
coin17.addImage(coin)
coin17.scale = 0.1
coin18 = createSprite(500,290)
coin18.addImage(coin)
coin18.scale = 0.1
coin19= createSprite(535,230)
coin19.addImage(coin)
coin19.scale = 0.1
coin20 = createSprite(530,560)
coin20.addImage(coin)
coin20.scale = 0.1


}
function draw(){
  

if (GameState == "wait")
{background(splash_Screen);
  score=0;
Play_Button.show();
About_Button.show();

//make Player, wall, enemy, coin, enemy, exit invisible in "wait" state
Player.visible=false;
Exit.visible = false;
wall1.visible=false
wall2.visible=false
wall3.visible=false
wall4.visible=false
wall5.visible=false
wall6.visible=false
wall7.visible=false
wall8.visible=false
wall9.visible=false
wall10.visible=false
wall11.visible=false
wall12.visible=false
wall13.visible=false
wall14.visible=false
wall15.visible=false
wall16.visible=false
wall17.visible=false
wall18.visible=false
wall19.visible=false
wall20.visible=false

enemy1.visible = false;
enemy2.visible = false;
coin1.visible = false;
coin2.visible = false;
coin3.visible = false;
coin4.visible = false;
coin5.visible = false;
coin6.visible = false;
coin7.visible = false;
coin8.visible = false;
coin9.visible = false;
coin10.visible = false;
coin11.visible = false;
coin12.visible = false;
coin13.visible = false;
coin14.visible = false;
coin15.visible = false;
coin16.visible = false;
coin17.visible = false;
coin18.visible = false;
coin19.visible = false;
coin20.visible = false;
}
    About_Button.mousePressed(() => {
Play_Button.hide();
About_Button.hide()
GameState = "about"
    })
    Play_Button.mousePressed(() => {
        Play_Button.hide();
        About_Button.hide()
        GameState = "play"
            })
    if (GameState == "about"){
        About_Game()
    }
if (GameState == "play"){
  background(Game_Screen)

   

   //make Player, wall, enemy, coin, exit visible in "play" state
   Player.visible = true;
    Exit.visible = true;
    wall1.visible = true;
    wall2.visible = true;
    wall3.visible = true;
    wall4.visible = true;
    wall5.visible = true;
    wall6.visible = true;
    wall7.visible = true;
    wall8.visible = true;
    wall9.visible = true;
    wall10.visible = true;
    wall11.visible = true;
    wall12.visible = true;
    wall13.visible = true;
    wall14.visible = true;
    wall15.visible = true;
    wall16.visible = true;
    wall17.visible = true; 
    wall18.visible = true;
    wall19.visible = true;
    wall20.visible = true;
    coin1.visible=true;
    coin2.visible = true;
    coin3.visible = true;
    coin4.visible = true;
    coin5.visible = true;
    coin6.visible = true;
    coin7.visible = true;
    coin8.visible = true;
    coin9.visible = true;
    coin10.visible = true;
    coin11.visible=true;
    coin12.visible = true;
    coin13.visible = true;
    coin14.visible = true;
    coin15.visible = true;
    coin16.visible = true;
    enemy1.visible = true;
    enemy2.visible = true;

//write conditions for movement of Player
 if(keyDown("UP_ARROW"))
 {
  
  Player.velocityY=-5
  Player.velocityX=0
}
if(keyDown("DOWN_ARROW"))
{
    
    Player.velocityY=+5
    Player.velocityX=0
  }
 if(keyDown("LEFT_ARROW"))
 {
    
      Player.velocityY=0
      Player.velocityX=-5
    }
if(keyDown("RIGHT_ARROW"))
{
        
        Player.velocityY=0
        Player.velocityX=5
}
if(keyWentUp("UP_ARROW"))
{
 
 Player.velocityY=0
 Player.velocityX=0
}
if(keyWentUp("DOWN_ARROW"))
{
   
   Player.velocityY=0
   Player.velocityX=0
 }
if(keyWentUp("LEFT_ARROW"))
{
   
     Player.velocityY=0
     Player.velocityX=0
   }
if(keyWentUp("RIGHT_ARROW"))
{
       
       Player.velocityY=0
       Player.velocityX=0
}


 //write code to bounceoff the player against wall

 Player.bounceOff(wall1)
 Player.bounceOff(wall2)
 Player.bounceOff(wall3)
 Player.bounceOff(wall4)
 Player.bounceOff(wall5)
 Player.bounceOff(wall6)
 Player.bounceOff(wall7)
 Player.bounceOff(wall8)
 Player.bounceOff(wall9)
 Player.bounceOff(wall10)
 Player.bounceOff(wall11)
 Player.bounceOff(wall12)
 Player.bounceOff(wall13)
 Player.bounceOff(wall14)
 Player.bounceOff(wall15)
 Player.bounceOff(wall16)
 Player.bounceOff(wall17)
 Player.bounceOff(wall18)
 Player.bounceOff(wall19)
 Player.bounceOff(wall20)

  //write conditions for enemies bouncing off all the walls
  enemy1.bounceOff(wall1)
  enemy1.bounceOff(wall2)
  enemy1.bounceOff(wall3)
  enemy1.bounceOff(wall4)
  enemy1.bounceOff(wall5)
  enemy1.bounceOff(wall6)
  enemy1.bounceOff(wall7)
  enemy1.bounceOff(wall8)
  enemy1.bounceOff(wall9)
  enemy1.bounceOff(wall10)
  enemy1.bounceOff(wall11)
  enemy1.bounceOff(wall12)
  enemy1.bounceOff(wall13)
  enemy1.bounceOff(wall14)
  enemy1.bounceOff(wall15)
  enemy1.bounceOff(wall16)
  enemy1.bounceOff(wall17)
  enemy1.bounceOff(wall18)
  enemy1.bounceOff(wall19)
  enemy1.bounceOff(wall20)
  enemy2.bounceOff(wall1)
  enemy2.bounceOff(wall2)
  enemy2.bounceOff(wall3)
  enemy2.bounceOff(wall4)
  enemy2.bounceOff(wall5)
  enemy2.bounceOff(wall6)
  enemy2.bounceOff(wall7)
  enemy2.bounceOff(wall8)
  enemy2.bounceOff(wall9)
  enemy2.bounceOff(wall10)
  enemy2.bounceOff(wall11)
  enemy2.bounceOff(wall12)
  enemy2.bounceOff(wall13)
  enemy2.bounceOff(wall14)
  enemy2.bounceOff(wall15)
  enemy2.bounceOff(wall16)
  enemy2.bounceOff(wall17)
  enemy2.bounceOff(wall18)
  enemy2.bounceOff(wall19)
  enemy2.bounceOff(wall20)



//condition for player touching the coin - when player touches the coins, score gets increased
  if(Player.isTouching(coin1)){
    coin1.remove();
    score = score+10;
    win.play()
    
  }
  if(Player.isTouching(coin2)){
    coin2.remove();
    score = score+10;
    win.play()
  }

  if(Player.isTouching(coin3)){
    coin3.remove();
    score = score+10;
    win.play()
  }

  if(Player.isTouching(coin4)){
    coin4.remove();
    score = score+10;
    win.play()
  }
  if(Player.isTouching(coin5)){
    coin5.remove();
    score = score+10;
    win.play()
  }

  if(Player.isTouching(enemy1)){
   // die.play()
    Player.remove();
    GameState = 'lose';
  }
  if(Player.isTouching(enemy2)){
    //die.play()
    Player.remove();
    GameState = 'lose';
    
  }

  if(Player.isTouching(coin6)){
    win.play()
    coin6.remove();
    score = score+10;
    
  }
  if(Player.isTouching(coin7)){
    win.play()
    coin7.remove();
    score = score+10;
    
  }

  if(Player.isTouching(coin8)){
    win.play()
    coin8.remove();
    score = score+10;
    
  }

  if(Player.isTouching(coin9)){
    win.play()
    coin9.remove();
    score = score+10;
    
  }
  if(Player.isTouching(coin10)){
    win.play()
    coin10.remove();
    score = score+10;
    
  }

  if(Player.isTouching(coin11)){
    win.play()
    coin11.remove();
    score = score+10;
    
  }
  if(Player.isTouching(coin12)){
    win.play()
    coin12.remove();
    score = score+10;
    
  }

  if(Player.isTouching(coin13)){
    win.play()
    coin13.remove();
    score = score+10;
    
  }

  if(Player.isTouching(coin14)){
    win.play()
    coin14.remove();
    score = score+10;
    
  }
  if(Player.isTouching(coin15)){
    win.play()
    coin15.remove();
    score = score+10;
    
  }
  if(Player.isTouching(coin16)){
    win.play()
    coin16.remove();
    score = score+10;
    
  }
  if(Player.isTouching(coin17)){
    win.play()
    coin17.remove();
    score = score+10;
    
  }

  if(Player.isTouching(coin18)){
    win.play()
    coin18.remove();
    score = score+10;
    
  }

  if(Player.isTouching(coin19)){
    win.play()
    coin19.remove();
    score = score+10;
    
  }
  if(Player.isTouching(coin20)){
    win.play()
    coin20.remove();
    score = score+10;
    
  }




  if(Player.isTouching(Exit)){
    win.play()
    GameState = "Win"
  }
  if (GameState == "Win"){
    enemy1.velocityX=0;
    enemy1.velocityY=0;
    enemy2.velocityX=0;
    enemy2.velocityY=0;
    Player.velocityX=0;
    Player.velocityY=0;
    Player.visible = false;
    winState()
  }
}

drawSprites();
fill("red")
textSize(20);
text("Score:"+score,50,50)



if(GameState == 'lose'){
  //die.play()
    enemy1.velocityX=0;
    enemy1.velocityY=0;
    enemy2.velocityX=0;
    enemy2.velocityY=0;
    
    gameOver()
  
   }

}
 

function winState(){
    swal({
title:"You Win!",
text:"now go get a snack to reward yourself",
textAlign:"centre",
//imageUrl:"",
//imageSize:"",
confirmButtonText:"to main menu",
confirmButtonColor:"green",

    },
    function(){
      window.location.reload()
    })
}

function About_Game(){
    swal({
title:"About Game",
text:"Kill all the enemies visible to win the game",
textAlign:"centre",
//imageUrl:"",
//imageSize:"",
confirmButtonText:"Lets Play",
confirmButtonColor:"green",

    },
    function(){
        GameState = "wait"
    })
}

function gameOver(){
  swal({
title:"You Lost",
text:"Better luck next time",
textAlign:"centre",
//imageUrl:"",
//imageSize:"",
confirmButtonText:"Play Again",
confirmButtonColor:"green",

  },
  function(){
      window.location.reload()
  })
}