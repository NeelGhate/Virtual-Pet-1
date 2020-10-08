//Create variables here
var dog,happyDog,database,FoodS,foodStock;
var dogIMG, happyDogImg;
function preload()
{
  //load images here
  dogIMG = loadImage("images/Dog.png");
  happyDogImg = loadImage("images/happydog.png");
}

function setup() {
  database = firebase.database(); 
  createCanvas(800, 700);
  
  dog = createSprite(250,250,100,60);
  dog.addImage(dogIMG);

  foodStock = database.ref('food');
  foodStock.on("value",readStock);
}



function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogImg);
  }
  drawSprites();
  //add styles here
  text("Milk Bottles : ", +foodS , 250,100 );
}




function readStock(data){
   foodS = data.val();
}

function writeStock(x){

  if( x <= 0){
      x =0;
  }
    else{
      x = x-1;
    }
    database.ref('/').update({
      food:x
    })
}

