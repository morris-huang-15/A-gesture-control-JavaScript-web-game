
var cvs = document.getElementById("gameBackground");
var ctx = cvs.getContext('2d');

var spaceship = new Image();
var bg = new Image();
var ad = new Image();
spaceship.src = "spaceship.png";
bg.src = "background.png";
ad.src = "asteroid.png";

var adCollection = [];
adCollection[0] = {
  x:30,
  y:0
}


//var ad_start_pos_y = 0;

handsfree = new Handsfree({
  showDebug: true,
  hands: true
})


handsfree.start()


document.addEventListener('handsfree-data', event => {
document.getElementById("p1").innerHTML = handsfree.data.hands.multiHandLandmarks[0][0].x;
})

drawBackground();
//draw();


function drawBackground()
{
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(bg,0,0,300,150);
  requestAnimationFrame(drawBackground);
}

function draw (){
  
   ctx.imageSmoothingEnabled = false;

   for (var i = 0; i < adCollection.length; i++){

  ctx.drawImage(ad,30,adCollection[i].y,25,25);
  adCollection[i].y++;
  
  }
  document.addEventListener('handsfree-data', event => {
  
  ctx.drawImage(spaceship,250*handsfree.data.hands.multiHandLandmarks[0][0].x,100,15,20);
  })
  requestAnimationFrame(draw);
  }
  
  
  
 


