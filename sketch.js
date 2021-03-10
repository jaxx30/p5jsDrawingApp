const DISPLAYY = 1024 / 2;
const DISPLAYX = 1326 / 2;

const PICTURE_SIZE = 100;
const PICTURE_SIZEX = 139;
const PICTURE_SIZEY= 200;

const PICTURE_OFFSET = 130;
const GALLERY_OFFSET =  160;

let overBox = false;
let clicked = false;

let followTheDots;
let identifyTheObject;
let colorInsideTheLines;
let myFont;
let img1;


function preload() {
  followTheDots = loadImage("FollowTheDotedLine.png")
  identifyTheObject = loadImage("Matching.png")
  colorInsideTheLines = loadImage("ColorInsideTheLines.png")
 // img1 = loadImage('./Images/how-to-draw-an-elephant.jpg');
  myFont = loadFont('./Fonts/PatrickHand-Regular.ttf');
}

let button, button2, button3, button4;
function setup() {
  createCanvas(DISPLAYX, DISPLAYY);
    textFont(myFont);
  button = createButton('');
  button2 = createButton('Main Menu');
  button3 = createButton('');
  button4 = createButton('');
  
  
  button2.mousePressed(returnToMenu);
  button4.mousePressed(menu3);
  button3.mousePressed(menu2);
  button.mousePressed(menu1);
  
  //button4
  button4.position(DISPLAYX / 2 + PICTURE_OFFSET * 1.5 - 87, DISPLAYY / 3 + PICTURE_SIZE / 2 + 5, 175, 175);
  button4.size(175,175);
  button4.style('background-color:transparent');
  button4.style('cursor: pointer;');
  button4.style('border-radius: 3px');
  button4.style('border: none');
  button4.style('text-decoration: none');
  button4.style('outline: none');
  button4.mouseOver(()=>{
    button4.style('background-color:rgba(0, 102, 153, .2)');
  })
   button4.mouseOut(()=>{
    button4.style('background-color:rgba(0,0,0,0)');
  })
  
  //button3
   button3.position( DISPLAYX / 2 - 91, DISPLAYY / 3 + PICTURE_SIZE / 2 + 5, 175, 175);
  button3.size(175,175);
  button3.style('background-color:transparent');
  button3.style('cursor: pointer;');
  button3.style('border-radius: 3px');
  button3.style('border: none');
  button3.style('text-decoration: none');
  button3.style('outline: none');
  button3.mouseOver(()=>{
    button3.style('background-color:rgba(0, 102, 153, .2)');
  })
   button3.mouseOut(()=>{
    button3.style('background-color:rgba(0,0,0,0)');
  })
  
  //button2
  button2.position(19,19);
  button2.style('cursor: pointer;');
  button2.style('border-radius: 3px');
  button2.style('border: none');
  button2.style('text-decoration: none');
  button2.style('outline :none');
 
  button2.style('color:rgb(0, 102, 153)')
  button2.hide();


  
  //button1
  button.position( DISPLAYX / 3 - 190, DISPLAYY / 3 + PICTURE_SIZE / 2 + 5, 175, 175);
  button.size(175,175);
  button.style('background-color:transparent');
  button.style('cursor: pointer;');
  button.style('border-radius: 3px');
  button.style('border: none');
  button.style('text-decoration: none');
  button.style('outline: none');
  button.mouseOver(()=>{
    button.style('background-color:rgba(0, 102, 153,.2)');
  });
   button.mouseOut(()=>{
    button.style('background-color:rgba(0,0,0,0)');
  });


}

function draw() {
  background(255);
  fill(0, 102, 153);
  let mainMenu = 0
  
  //main menu

  textSize(34);
  textAlign(CENTER);
  text("Main Menu", DISPLAYX / 2 , DISPLAYY/2 -120)
  
  textSize(15);
  text("Follow the Dots", DISPLAYX / 3 - PICTURE_SIZE, DISPLAYY / 3 + PICTURE_SIZE / 2);
  image(followTheDots, DISPLAYX / 3 - 190, DISPLAYY / 3 + PICTURE_SIZE / 2 + 5, 175, 175);
  
  text("Identify the Object", DISPLAYX / 2 - 5, DISPLAYY / 3 + PICTURE_SIZE / 2);
  image(identifyTheObject, DISPLAYX / 2 - 91, DISPLAYY / 3 + PICTURE_SIZE / 2 + 5, 175, 175);
  
  text("Color Inside the Lines", DISPLAYX / 2 + PICTURE_OFFSET * 1.5, DISPLAYY / 3 + PICTURE_SIZE / 2);
  image(colorInsideTheLines, DISPLAYX / 2 + PICTURE_OFFSET * 1.5 - 87, DISPLAYY / 3 + PICTURE_SIZE / 2 + 5, 175, 175);

  
  if(clicked == true){
      button.hide();
      clear();
      textSize(34);
      textAlign(CENTER);
      text("Pick What You Want to Draw!",DISPLAYX / 2 , DISPLAYY/2 -120);


      fill(255);
    
  rect(DISPLAYX / 2 - PICTURE_SIZEX / 2 - GALLERY_OFFSET, DISPLAYY / 2 - PICTURE_SIZEX / 2, PICTURE_SIZEX, PICTURE_SIZEY, 15);
   // image(img1,DISPLAYX / 2 - PICTURE_SIZEX / 2 - PICTURE_OFFSET + 5, DISPLAYY / 2 - PICTURE_SIZEX / 4 , PICTURE_SIZEX -10 , PICTURE_SIZEY -80);
  rect(DISPLAYX / 2 - PICTURE_SIZEX / 2, DISPLAYY / 2 - PICTURE_SIZEX / 2, PICTURE_SIZEX, PICTURE_SIZEY, 15);
  rect(DISPLAYX / 2 - PICTURE_SIZEX / 2 +  GALLERY_OFFSET, DISPLAYY / 2 - PICTURE_SIZEX / 2, PICTURE_SIZEX, PICTURE_SIZEY, 15);

    }
  

}



function returnToMenu(){
  clicked=false;
  button2.hide();
  button.show();
}

function menu1(){
    clicked = true;
  button2.show();
}

function menu2(){
    clicked = true;
  button2.show();
}
function menu3(){
    clicked = true;
  button2.show();
}
