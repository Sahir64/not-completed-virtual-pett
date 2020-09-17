//Create variables here
var dog 
var happyDog 
var database
var foodS 
var foodStock


function preload()
{
  //load images here
  var Dog = loadImage("images/dogImg.png");
  var Happydog = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  
  
  dog = createSprite(250,250,20,20)
  happyDog = createSprite(250,250,20,20)

foodStock=database.ref('Food');
foodStock.on("value",readStock);

}


function draw() {  

if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(dogHappy);
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  
  if(x<-0){
   x-0;
  }else{
x-x - 1;

  }

  database.ref('/').update({

  }


  )
  
}





  drawSprites();
  //add styles here

}



