// this is a self-invoking anonymous function
// also called an IIFE
// also called a module (its a pattern)

(() => {
  console.log('HELLO FROM OUTER SPACE');

  //find the elements in the document
  let toggleButton = document.querySelector(".switch-text"),
    myHeading = document.querySelector('h1');
    svgImg = document.querySelector("#badge");

  function changeText()  {
    myHeading.textContent = "I yam Script";
  }

  function logSVG() {
    console.log(this.id);
  }

toggleButton.addEventListener("click", changeText);
svgImg.addEventListener("mouseover", logSVG);

  //document.querySelector('h1').textContent = "I yam script ";
})();
