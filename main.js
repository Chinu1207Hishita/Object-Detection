img = "";
status = "";

function preload()
{
img = loadImage ('dog_cat.jpg');
}

function setup()
{
    canvas = createCanvas (640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded()
{
   console.log('ModelLoaded')
   status = true;
   objectDetector.dectect(img, gotResult);
}

function gotResult(error, results)
{
if(error) {
    console.log(error);
}
    console.log(results);
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("FF8787");
    noFill();
    text("Dog" , 45, 75);
    stroke("#000000");
    rect (30, 60, 450, 350);

    fill("FF8787");
    noFill();
    text("Cat" ,320, 120);
    stroke("blueviolet");
    rect (300, 90, 250, 320);
}