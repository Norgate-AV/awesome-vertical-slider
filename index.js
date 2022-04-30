const controlBox = document.getElementsByClassName("control-box")[0];
const cbSlider = controlBox.querySelector("input.slider");
const cbFill = controlBox.querySelector(".bar .fill");
const cbValue = controlBox.querySelector(".value");

function setBar() {
    const min = parseInt(cbSlider.getAttribute("min"));
    const max = parseInt(cbSlider.getAttribute("max"));
    const value = parseInt(cbSlider.value);
    const percent = ((value - min) / (max - min)) * 100;

    cbFill.style.height = percent + "%";
    cbValue.innerText = Math.round(percent) + "%";

    if (percent > 0) {
        controlBox.classList.add("on");
    } else {
        controlBox.classList.remove("on");
    }
}

cbSlider.addEventListener("input", setBar);
setBar();
