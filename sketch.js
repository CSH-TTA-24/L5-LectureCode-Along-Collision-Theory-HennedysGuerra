
let myXPos = 100;
let myYPos = 100;
let mySize;

let enemyXPos = 300;
let enemyYpos = 300;
let enemySize;

mySize = random(50,100);

function setup() {
  createCanvas(500, 500);
  noStroke();

  enemySize = random(50, 100);
  mySize = random(50, 100);
}


function draw() {
  background(0);

fill(255,0,0);
  ellipse(enemyXPos, enemyYpos, enemySize, enemySize)
  
  fill(0, 0, 255);
  ellipse(myXPos, myYPos, mySize, mySize);

  if (keyIsDown(LEFT_ARROW)) {
    myXPos -= 3;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    myXPos += 3;
  }

  if (keyIsDown(UP_ARROW)) {
    myYPos -= 3;
  }

  if (keyIsDown(DOWN_ARROW)) {
    myYPos += 3;

    let distance = dist(myXPos, myYPos, enemyXPos, enemyYpos);

    if(distance <= (mySize/2) + (enemySize / 2)){

fill(random(255), random(255), random(255));
      textSize(22);
      text("I am the one who knocks.",140,480)

      
    }
  }
}


