const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,rubber,stone,iron,particle1,particle2,particle3,particle4,particle5,particle6,
particle7,particle8,particle9,particle10;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber = new Rubber(900,450,70);
    stone = new Stone(700,320,100,100); 
    iron = new Iron(300,350);
    particle1 = new Particle(500,450,10);
    particle2 = new Particle(505,445,10);
    particle3 = new Particle(510,445,10);
    particle4 = new Particle(515,445,10);
    particle5 = new Particle(520,445,10);
    particle6 = new Particle(525,445,10);
    particle7 = new Particle(530,445,10);
    particle8 = new Particle(535,445,10);
    particle9 = new Particle(540,445,10);
    particle10 = new Particle(550,450,10);
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    stone.display();
    iron.display();
    particle1.display();
    particle2.display();
    particle3.display();
    particle4.display();
    particle5.display();
    particle6.display();
    particle7.display();
    particle8.display();
    particle9.display();
    particle10.display();
}