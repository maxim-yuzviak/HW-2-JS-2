const box = document.getElementById("box");

function moveBox(e) {
  box.style.left = e.pageX + "px";
  box.style.top = e.pageY + "px";
}

const debouncedMove = _.debounce(moveBox, 100);

document.addEventListener("mousemove", debouncedMove);
