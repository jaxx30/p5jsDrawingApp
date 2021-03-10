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


function setup() {
  createCanvas(DISPLAYX, DISPLAYY);
    textFont(myFont);

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
  
  if(mouseX > DISPLAYX / 3 - 190 && mouseX < DISPLAYX / 3 - 190 + 175 && mouseY > DISPLAYY / 3 + PICTURE_SIZE / 2 + 5 && mouseY < DISPLAYY / 3 + PICTURE_SIZE / 2 + 5 +175)
  {
    overBox = true
    if(clicked == true){
      clear();
      textSize(34);
      textAlign(CENTER);
      text("Drawing App",DISPLAYX / 2 , DISPLAYY/2 -120);


      fill(255);
    
  rect(DISPLAYX / 2 - PICTURE_SIZEX / 2 - GALLERY_OFFSET, DISPLAYY / 2 - PICTURE_SIZEX / 2, PICTURE_SIZEX, PICTURE_SIZEY, 15);
   // image(img1,DISPLAYX / 2 - PICTURE_SIZEX / 2 - PICTURE_OFFSET + 5, DISPLAYY / 2 - PICTURE_SIZEX / 4 , PICTURE_SIZEX -10 , PICTURE_SIZEY -80);
  rect(DISPLAYX / 2 - PICTURE_SIZEX / 2, DISPLAYY / 2 - PICTURE_SIZEX / 2, PICTURE_SIZEX, PICTURE_SIZEY, 15);
  rect(DISPLAYX / 2 - PICTURE_SIZEX / 2 +  GALLERY_OFFSET, DISPLAYY / 2 - PICTURE_SIZEX / 2, PICTURE_SIZEX, PICTURE_SIZEY, 15);

    }
  }

}

function mousePressed(){
    clicked = true;
}

