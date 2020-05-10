// make buttons and other elements appear after the video ends
function beginConsultVidEnd() {
  var beginConsultBtn = document.getElementById("beginConsultBtn");
  var hoverImages = document.getElementById("hoverImages");
  var imageText = document.getElementById("imageText");
  var hoverBooks = document.getElementById("hoverBooks");
  var bookText = document.getElementById("bookText");

      beginConsultBtn.style.display = "block";
      hoverImages.style.display = "block";
      imageText.style.display = "block";
      hoverBooks.style.display = "block";
      bookText.style.display = "block";
}

// poster page functions
// eye poster
function hover1(){
  var eyePoster = document.getElementById("eyePoster");
  var grayLayerPoster = document.getElementById("grayLayerPoster");
  var text1 = document.getElementById("text1");

      text1.style.display = "block";
      eyePoster.style.display = "block";
      grayLayerPoster.style.display = "block";
}

function nohover1(){
  var eyePoster = document.getElementById("eyePoster");
  var grayLayerPoster = document.getElementById("grayLayerPoster");
  var text1 = document.getElementById("text1");

      text1.style.display = "none";
      eyePoster.style.display = "none";
      grayLayerPoster.style.display = "none";
}

// lip poster
function hover2(){
  var lipPoster = document.getElementById("lipPoster");
  var grayLayerPoster = document.getElementById("grayLayerPoster");
  var text2 = document.getElementById("text2");

      text2.style.display = "block";
      lipPoster.style.display = "block";
      grayLayerPoster.style.display = "block";
}

function nohover2(){
  var lipPoster = document.getElementById("lipPoster");
  var grayLayerPoster = document.getElementById("grayLayerPoster");
  var text2 = document.getElementById("text2");

      text2.style.display = "none";
      lipPoster.style.display = "none";
      grayLayerPoster.style.display = "none";
}

// diagram posters
function hover3(){
  var diagramPoster = document.getElementById("diagramPoster");
  var grayLayerPoster = document.getElementById("grayLayerPoster");
  var text3 = document.getElementById("text3");

      text3.style.display = "block";
      diagramPoster.style.display = "block";
      grayLayerPoster.style.display = "block";
}

function nohover3(){
  var diagramPoster = document.getElementById("diagramPoster");
  var grayLayerPoster = document.getElementById("grayLayerPoster");
  var text3 = document.getElementById("text3");

      text3.style.display = "none";
      diagramPoster.style.display = "none";
      grayLayerPoster.style.display = "none";
}

// stall poster
function hover4(){
  var stallPoster = document.getElementById("stallPoster");
  var grayLayerPoster = document.getElementById("grayLayerPoster");
  var text4 = document.getElementById("text4");

      text4.style.display = "block";
      stallPoster.style.display = "block";
      grayLayerPoster.style.display = "block";
}

function nohover4(){
  var stallPoster = document.getElementById("stallPoster");
  var grayLayerPoster = document.getElementById("grayLayerPoster");
  var text4 = document.getElementById("text4");

      text4.style.display = "none";
      stallPoster.style.display = "none";
      grayLayerPoster.style.display = "none";
}

// surgery poster
function hover5(){
  var surgeryPoster = document.getElementById("surgeryPoster");
  var grayLayerPoster = document.getElementById("grayLayerPoster");
  var text5 = document.getElementById("text5");

      text5.style.display = "block";
      surgeryPoster.style.display = "block";
      grayLayerPoster.style.display = "block";
}

function nohover5(){
  var surgeryPoster = document.getElementById("surgeryPoster");
  var grayLayerPoster = document.getElementById("grayLayerPoster");
  var text5 = document.getElementById("text5");

      text5.style.display = "none";
      surgeryPoster.style.display = "none";
      grayLayerPoster.style.display = "none";
}

// face poster
function hover6(){
  var facePoster = document.getElementById("facePoster");
  var grayLayerPoster = document.getElementById("grayLayerPoster");
  var text6 = document.getElementById("text6");

      text6.style.display = "block";
      facePoster.style.display = "block";
      grayLayerPoster.style.display = "block";
}

function nohover6(){
  var facePoster = document.getElementById("facePoster");
  var grayLayerPoster = document.getElementById("grayLayerPoster");
  var text6 = document.getElementById("text6");

      text6.style.display = "none";
      facePoster.style.display = "none";
      grayLayerPoster.style.display = "none";
}

// book homepage
function bookHover(){
  var grayLayerBooks = document.getElementById("grayLayerBooks");
  var textBook = document.getElementById("textBook");

      textBook.style.display = "block";
      grayLayerBooks.style.display = "block";
}

function nobookHover(){
  var grayLayerBooks = document.getElementById("grayLayerBooks");
  var textBook = document.getElementById("textBook");

      textBook.style.display = "none";
      grayLayerBooks.style.display = "none";
}


function welcomeVidEnd() {
  var welcomeBtn = document.getElementById("welcomeBtn");

      welcomeBtn.style.display = "block";
}

function introVidEnd(){
  var grayLayer = document.getElementById("grayLayer");
  var option1 = document.getElementById("option1");
  var option2 = document.getElementById("option2");
  var option3 = document.getElementById("option3");
  var option4 = document.getElementById("option4");

      grayLayer.style.display = "block";
      option1.style.display = "block";
      option2.style.display = "block";
      option3.style.display = "block";
      option4.style.display = "block";
}

function eyeVidEnd() {
  var eyeContinueBtn = document.getElementById("eyeContinueBtn");

      eyeContinueBtn.style.display = "block";
}

function eyebrowsVidEnd() {
  var eyebrowsContinueBtn = document.getElementById("eyebrowsContinueBtn");

      eyebrowsContinueBtn.style.display = "block";
}

function lipsVidEnd() {
  var lipsContinueBtn = document.getElementById("lipsContinueBtn");

      lipsContinueBtn.style.display = "block";
}

function noseVidEnd() {
  var noseContinueBtn = document.getElementById("noseContinueBtn");

      noseContinueBtn.style.display = "block";
}

function endVidEnd() {
  var grayLayerEnd = document.getElementById("grayLayerEnd");
  var endBtn = document.getElementById("endBtn");
  var contactInfo = document.getElementById("contactInfo");

      endBtn.style.display = "block";
      grayLayerEnd.style.display = "block";
      contactInfo.style.display = "block";
}
