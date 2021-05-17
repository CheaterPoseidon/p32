const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var engine, world
var ground,stand,stand2
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12
var polygon
var slingshot
var score=0
var x
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine=Engine.create()
  world=engine.world
  ground= new Ground(400,390,800,20)
  stand=new Ground(475,285,120,20)
  box1=new Box(475,200,30,30)
  box2=new Box(460,230,30,30)
  box3=new Box(490,230,30,30)
  box4=new Box(445,260,30,30)
  box5=new Box(475,260,30,30)
  box6=new Box(505,260,30,30)
  polygon= new Polygon(150,300,50)

  stand2=new Ground(600,235,120,20)
  box7=new Box(600,150,30,30)
  box8=new Box(585,180,30,30)
  box9=new Box(615,180,30,30)
  box10=new Box(570,210,30,30)
  box11=new Box(600,210,30,30)
  box12=new Box(630,210,30,30)
  //console.log(box1.body)
  slingshot= new SlingShot(polygon.body,{x:250,y:275})

  
  
}

function draw() {
  changeColor();
  if(x){
  background(x)}
  ground.display()  
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  stand.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  stand2.display()
  box1.score()
  box2.score()
  box3.score()
  box4.score()
  box5.score()
  box6.score()
  box7.score()
  box8.score()
  box9.score()
  box10.score()
  box11.score()
  box12.score()
  polygon.display()
  slingshot.display()
  textSize(25)
  text("Score : "+score,75,50)
  Engine.update(engine)
  //drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode===32){
    slingshot.attach(polygon.body)
  }
}

async function changeColor(){
  var response= await fetch("http://worldtimeapi.org/api/timezone/America/New_York")
  var responseJson= await response.json()
  var dayTime=responseJson.datetime.slice(11,13)
  console.log(dayTime)
  if(dayTime>06&&dayTime<18){
    x=255
  }
  else{
    x=0
  }
}
