//holds taken photos
let snapshot1 = [];

// face variables
let leftRatio;
let leftEyedistance;
let eyeDistIncrease;

//picture triggering variables
let eyeDone;
let eyeSeconds = 3000;

// progress bar variables
let barWidth = 640;

// hover over instructions
function eyeInstructions(){
  var instructions = document.getElementById("instructions");

      instructions.style.display = "block";
}

function noeyeInstructions(){
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

function eyeSnap() {
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
    //left eye
    let leftEyedistance = round(dist(fPositions[24].x, fPositions[24].y,
      fPositions[26].x, fPositions[26].y));
    stroke(255);
    line(fPositions[24].x, fPositions[24].y,
      fPositions[26].x, fPositions[26].y);

    noStroke();
    fill(255);
    // text('Left eye ' + leftEyedistance, 130, 235);

    //right eye
    let rightEyedistance = round(dist(fPositions[29].x, fPositions[29].y,
      fPositions[31].x, fPositions[31].y));
    stroke(255);
    line(fPositions[29].x, fPositions[29].y,
      fPositions[31].x, fPositions[31].y);

    noStroke();
    fill(255);
    // text('Right eye ' + rightEyedistance, 130, 250);

    //NOSE
    let noseDistance = round(dist(fPositions[62].x, fPositions[62].y,
      fPositions[47].x, fPositions[47].y));

    eyeDistIncrease = leftEyedistance/noseDistance;
    console.log('eyes: ' + eyeDistIncrease);
    console.log(eyeSeconds);

    if (eyeDistIncrease >= .39) {
      // if parameter helps control when snapshot goes off so that it doesn't take a picture anytime it fulfills the eyeDistIncrease >= .4
      eyeSeconds = eyeSeconds - 50;
      if (eyeSeconds <= 0) {
        eyeDone = setTimeout(eyeSnap, eyeSeconds);
        barWidth == 0;
      } else {
        barWidth = barWidth - 10.8296;
      }
      console.log('eyes wide');
    } else {
      barWidth = 640;
      eyeSeconds = 3000;
      clearTimeout(eyeDone);
      console.log('eyes not wide');
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
