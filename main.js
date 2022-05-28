cursor = document.getElementById("cursor");
invertedcursor = document.getElementById("invertedcursor");
title = document.getElementById("title");
title2 = document.getElementById("title2");
buttons = document.getElementById("buttons");
games = document.getElementById("games");
bottomsection = document.getElementById("bottom-section");
games.style.display = "none";
bottomsectionarrow = document.getElementById("bottom-section-arrow");



document.addEventListener("mousemove", () => {
  
  let mousex = event.clientX; // Gets Mouse X
  let mousey = event.clientY; // Gets Mouse Y
  
  cursor.style.left = "calc(" + mousex + "px" + " / " + "3)";
  
  cursor.style.top = "calc(" + mousey + "px" + " / " + "3)";
  


});
document.body.onmousemove = function(e) {
  document.documentElement.style.setProperty (
    '--x', (
      e.clientX+window.scrollX
    )
    + 'px'
  );
  document.documentElement.style.setProperty (
    '--y', (
      e.clientY+window.scrollY
    )
    + 'px'
  );
}


document.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
      

//if 6 key pressed
  let codeanswer = prompt("code");
  
  
  if(codeanswer === secretcode){
    
    title.style.display = "none";
    title2.style.display = "none";
    buttons.style.display = "none";
    bottomsection.style.display = "none";
    games.style.display = "inline";
    bottomsectionarrow.style.display = "none";
    }

  
  
    }
});



