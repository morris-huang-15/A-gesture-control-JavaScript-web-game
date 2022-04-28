

var cvs = document.getElementById("gameBackground");
var ctx = cvs.getContext('2d');






// Use the hand with defaults (and show the webcam with wireframes)
handsfree = new Handsfree({
    showDebug: true,
    hands: true
  })

  // Start webcam and tracking (personally, I always like to ask first)
  handsfree.start()

  //
  document.addEventListener('handsfree-data', event => {
  document.getElementById("p1").innerHTML = handsfree.data.hands.multiHandLandmarks[0][0].x;

})


