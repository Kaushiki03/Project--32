const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;
var Sunrise1,Sunrise2,Sunrise3,Sunrise4,Sunrise5,Sunrise6;
var Sunset7,Sunset8,Sunset9,Sunset10,Sunset11,Sunset12;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();

}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg)
    background(backgroundImg)

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var  respond = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")

    //change the data in JSON format
    var respondJSON= await respond.json()

    // write code slice the datetime
    var datetime = respondJSON.datetime
    var h = datetime.slice(11,13)

    // add conditions to change the background images from sunrise to sunset
    if(hour <= 8 && hour >= 6){
        var bg = "Sunrise1.png";
     }else if(hour <= 10 && hour >= 8){
        var bg = "Sunrise2.png";
     }else if(hour <= 12 && hour >= 10){
        var bg = "Sunrise4.png";
     }else if(hour <= 14 && hour >= 12){
        var bg = "Sunrise5.png";
     }else if(hour <= 15 && hour >= 14){
        var bg = "Sunset7.png";
     }else if(hour <= 17 && hour >= 15){
        var bg = "Sunset10.png";
     }else if(hour <= 20 && hour >= 17){
        var bg = "Sunset11.png";
     }else {
         var bg = "Sunset12.png";
     }

   //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);
}
