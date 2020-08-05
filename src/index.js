// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const title = document.querySelector("h2");
const superEventHandler = {
  handleMouseover: function() {
    title.innerHTML = "The mouse is here!";
    title.style.color = "#1abc9c";
  },
  handleMouseleave: function() {
    title.innerHTML = "The mouse is gone!";
    title.style.color = "#3498db";
  },
  handleResized: function() {
    title.innerHTML = "You just resized!!";
    title.style.color = "#9b59b6";
  },
  handleContextmenu: function() {
    title.innerHTML = "You was a right click!";
    title.style.color = "#f39c12";
  }
};
window.addEventListener("resize", superEventHandler.handleResized);
title.addEventListener("mouseover", superEventHandler.handleMouseover);
title.addEventListener("mouseleave", superEventHandler.handleMouseleave);
window.addEventListener("contextmenu", superEventHandler.handleContextmenu);
