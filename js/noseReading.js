//holds taken photos
let snapshot1 = [];

// face variables
let leftEyeMouthDistance;

//picture triggering variables
let noseDone;
let noseSeconds = 3000;

// progress bar variables
let barWidth = 640;

// hover over instructions
function noseInstructions(){
  var instructions = document.getElementById("instructions");

      instructions.style.display = "block";
}

function nonoseInstructions(){
  var instructions = document.getElementById("instructions");

      instructions.style.display = "none";
}

function preload() {
  // CONTROLS CAMERA THAT HAS FACE TRACKING
  capture = createCapture({
    audio: false,
    video: {
      width: w,
      height: h
    }
  }, function() {
    console.log('capture ready.')
  });
  capture.elt.setAttribute('playsinline', '');
  capture.size(w, h); // We need this !!
  capture.hide();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // background(0);
  setupFaceTracking();

  // re-attach the webcam to capture in order to fix the p5.Capture object
  capture = createCapture(VIDEO);
  capture.hide();
}

function noseSnap() {
  let snapshot = createImage( capture.width, capture.height );
  snapshot.copy(capture, 0, 0, capture.width, capture.height, 0, 0, snapshot.width, snapshot.height);

  // console.log(snapshot);
    snapshot1.push( snapshot );
}

function draw() {
  background(36, 116, 165);
  updateFaceTracking();

  //code to show the images
  //variables of image position on screen
  let iX = windowWidth/2;
  let iY = 200;
  let iW = 640;
  let iH = 480;

  // draws video where images are being taken
  let tempImg = createImage( capture.width, capture.height );
  tempImg.copy(capture, 0, 0, capture.width, capture.height, 0, 0, tempImg.width, tempImg.height);
  image(tempImg, 100, 200, w, h);

  for (let i = 0; i < snapshot1.length; i++) {
    image(snapshot1[i], iX, iY, iW, iH); //IMAGE DOESN'T SHOW ON SIDE
  }

  //progress bar
  noStroke();
  if (barWidth <= 640 && barWidth >= 480) {
    fill(255,0,0);
  } else if (barWidth < 480 && barWidth >= 320) {
    fill(255,140,25);
  } else if (barWidth < 320 && barWidth >= 160) {
    fill(132,222,2);
  } else {
    fill(73,255,47);
  }
  rect(100,200,barWidth,10);

  // //empty After image placeholder
  // fill(233, 241, 246);
  // rect(740, 200, 640, 480);

  //face tracking display & distance numbers
  if (fPositions.length > 0) {
    //NOSE
    let noseDistance = round(dist(fPositions[62].x, fPositions[62].y,
      fPositions[47].x, fPositions[47].y));
    stroke(255, 255, 255);
    line(fPositions[62].x, fPositions[62].y,
      fPositions[47].x, fPositions[47].y);

    // noStroke();
    // fill(0, 0, 255);
    // text('nose ' + noseDistance, 10, 70);

    //left eye and mouth distance
    let leftEyeMouthDistance = round(dist(fPositions[27].x, fPositions[27].y,
      fPositions[47].x, fPositions[47].y));
    // stroke(255, 0, 255);
    // line(fPositions[27].x, fPositions[27].y,
      // fPositions[57].x, fPositions[57].y);

    headTilt = noseDistance/leftEyeMouthDistance;
    // console.log('nose ' + headTilt);
    if (headTilt <= .3) {
      // if parameter helps control when snapshot goes off so that it doesn't take a picture anytime it ulfills the eyeDistIncrease >= .4
      noseSeconds = noseSeconds - 50;
      if (noseSeconds <= 0) {
        noseDone = setTimeout(noseSnap, noseSeconds);
        barWidth == 0;
      } else {
        barWidth = barWidth - 10.8296;
      }
      console.log('head tilted');
    } else {
      barWidth = 640;
      noseSeconds = 3000;
      clearTimeout(noseDone);
      console.log('head not tilted');
    }
  }
}

// This example code is based on Kyle McDonald's CV examples and adjusted for beginner level students.
// https://kylemcdonald.github.io/cv-examples/
//https://github.com/kylemcdonald/AppropriatingNewTechnologies/wiki/Week-2
let capture;
let tracker
let w = 640,
h = 480;
let fPositions = [];

function setupFaceTracking() {
  tracker = new clm.tracker();
  tracker.init();
  tracker.start(capture.elt);
}

function updateFaceTracking() {
  let positions = tracker.getCurrentPosition();
  if (positions.length > 0) {
    fPositions = [];
  }
  for (let i = 0; i < positions.length; i++) {
    fPositions.push(new FacePosition(positions[i][0], positions[i][1], i));
  }
}

// controls the position of the facial point code on the screen
class FacePosition {
  constructor(x, y, i) {
    this.x = x + 100;
    this.y = y + 200;
    this.index = i;
  }
}
