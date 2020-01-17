// this is a self-invoking anonymous function
// also called an IIFE
// also called a module (its a pattern)

(() => {
  console.log('HELLO FROM OUTER SPACE');

  //find the elements in the document
  let toggleButton = document.querySelector(".switch-text"),
    myHeading = document.querySelector('h1');
    //svgImg = document.querySelector("#badge"), -- this is for a 1 to 1
    allSVGs = document.querySelectorAll(".svg");

// this function should change the heading text
  function changeText()  {
    myHeading.textContent = "I yam Script";
  }

// this function should log the ID for each SVG to the console
  function logSVG() {
    console.log(this.id);
  }


// this a user can do to make stuff happen on the page
toggleButton.addEventListener("click", changeText);

//svgImg.addEventListener("click", logSVG);
//svgImg2.addEventListener("click", logSVG);

allSVGs.forEach(item => item.addEventListener("click", logSVG));
  //document.querySelector('h1').textContent = "I yam script ";
})();
