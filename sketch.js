const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var polygon_img

var box1,box2,box3,box4,box5,box5,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;

function preload() {
  
polygon_img = loadImage("polygon.png");

}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(390,370,280,20)
    //level1
    block1 = new Box (300,275,30,40);
    block2 = new Box (330,275,30,40);
    block3 = new Box (360,275,30,40);
    block4 = new Box (390,275,30,40);
    block5 = new Box (420,275,30,40);
    block6 = new Box (450,275,30,40);
    block7 = new Box (480,275,30,40);
    
    //level2
    block8 = new Box (330,235,30,40);
    block9 = new Box (360,235,30,40);
    block10 = new Box (390,235,30,40);
    block11 = new Box (420,235,30,40);
    block12 = new Box (450,235,30,40);
    //level13
    block13 = new Box (360,195,30,40);
    block14 = new Box (390,195,30,40);
    block15 = new Box (420,195,30,40);
    //top
    block16 = new Box (390,155,30,40);


    ground1 = new Ground(900,320,280,20)
    //level1
    Block1 = new Box (810,275,30,40);
    Block2 = new Box (840,275,30,40);
    Block3 = new Box (870,275,30,40);
    Block4 = new Box (900,275,30,40);
    Block5 = new Box (930,275,30,40);
    Block6 = new Box (960,275,30,40);
    Block7 = new Box (990,275,30,40);
    //level2
    Block8 = new Box (840,235,30,40);
    Block9 = new Box (870,235,30,40);
    Block10 = new Box (900,235,30,40);
    Block11 = new Box (930,235,30,40);
    Block12 = new Box (960,235,30,40);
    //level13
    Block13 = new Box (870,195,30,40);
    Block14 = new Box (900,195,30,40);
    Block15 = new Box (930,195,30,40);
    //top
    Block16 = new Box (900,155,30,40);

    polygon = Bodies.circle(50,200,40);
    World.add(world,polygon);
    
   rope=new Slingshot(this.polygon,{x:50,y:200}) 
}

function draw(){
    Engine.update(engine);
    background("black");
    strokeWeight(4); 
    ground.display();
    ground1.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    Block1.display();
    Block2.display();
    Block3.display();
    Block4.display();
    Block5.display();
    Block6.display();
    Block7.display();
    Block8.display();
    Block9.display();
    Block10.display();
    Block11.display();
    Block12.display();
    Block13.display();
    Block14.display();
    Block15.display();
    Block16.display();

    fill("gold");
    imageMode(CENTER);
    image(polygon_img,polygon.position.x,polygon.position.y,40,40);
}

function mouseDragged (){
Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased () {
rope.fly();
}

function keyPressed(){
    if(keyCode === 32){
     rope.attach(this.polygon);
    }
}