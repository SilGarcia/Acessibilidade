document.getElementById("increase-font-size").addEventListener("click", function() {
    changeFontSize(1);
  });
  
  document.getElementById("decrease-font-size").addEventListener("click", function() {
    changeFontSize(-1);
  });
  
  function changeFontSize(step) {
    var currentFontSize = parseFloat(getComputedStyle(document.body).fontSize);
    var newFontSize = currentFontSize + step;
    document.body.style.fontSize = newFontSize + "px";
  }

