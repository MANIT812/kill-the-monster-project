const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var bg1;
var ground1,box1;
var monster1,superhero1;
var box2,box3,box4,box5,box6,box7,box8,box9,box10;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20;
var rope1,ground2;

function preload(){
bg1=loadImage("images/gamingbackground2.png");
}
function setup(){
    createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    ground1=new ground(450,600,600);
    box1=new box(500,100);
    box2=new box(500,140);
    box3=new box(500,180);
    box4=new box(500,220);
    box5=new box(500,260);
    box6=new box(500,300);
    box7=new box(500,340);
    box8=new box(500,380);
    box9=new box(500,420);
    box10=new box(500,460);
    b1=new box(540,100);
    b2=new box(540,140);
    b3=new box(540,180);
    b4=new box(540,220);
    b5=new box(540,260);
    b6=new box(540,300);
    b7=new box(540,340);
    b8=new box(540,380);
    b9=new box(540,420);
    b10=new box(540,460);
    b11=new box(580,100);
    b12=new box(580,140);
    b13=new box(580,180);
    b13=new box(580,220);
    b14=new box(580,260);
    b15=new box(580,300);
    b16=new box(580,340);
    b17=new box(580,380);
    b18=new box(580,420);
    b19=new box(580,460);
    superhero1=new superhero(100,100);
    monster1=new monster(800,400);
    rope1=new Rope(superhero1.body,{x:220,y:150});
    ground2=new ground(800,450,150);
}
function draw (){
background("pink");
Engine.update(engine);
ground1.display();
superhero1.display();
box1.display();
monster1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
b1.display();
b2.display();
b3.display();
b4.display();
b5.display();
b6.display();
b7.display();
b8.display();
b9.display();
b10.display();
b11.display();
b12.display();
b13.display();
b14.display();
b15.display();
rope1.display();
b16.display();
b17.display();
b18.display();
b19.display();
}
function mouseDragged(){
    Matter.Body.setPosition(superhero1.body,{x:mouseX,y:mouseY});
} 