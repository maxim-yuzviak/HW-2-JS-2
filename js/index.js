const box = document.getElementById("box");

// Функція, яка переміщає div
function moveBox(e) {
  box.style.left = e.pageX + "px";
  box.style.top = e.pageY + "px";
}

// Обгортаємо у debounce з 100 мс
const debouncedMove = _.debounce(moveBox, 100);

document.addEventListener("mousemove", debouncedMove);
