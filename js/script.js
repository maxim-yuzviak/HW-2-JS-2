
function debounce(fn, delay) {
  let timerId;
  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => fn(...args), delay);
  };
}

const slider = document.querySelector(".slider__input");
const img = document.querySelector(".slider__image");

function valueToScale(v) {
  const minScale = 0.5;
  const maxScale = 2.0;
  const t = (v - 1) / (100 - 1);
  return minScale + t * (maxScale - minScale);
}

const applyImageScale = (val) => {
  const scale = valueToScale(Number(val));
  img.style.transform = `scale(${scale})`;
};

const applyImageScaleDebounced = debounce(applyImageScale, 100);

function onInput(e) {
  applyImageScaleDebounced(e.target.value);
}

slider.addEventListener("input", onInput);

applyImageScale(slider.value);
