const progressBar = (formulario) => {
  let form = document.querySelector(formulario);
  let progressOptions = document.querySelectorAll(".sb-progressbar-option");

  form.addEventListener("click", function (e) {
    let element = e.target;
    let isButtonNext = element.classList.contains("step-button-next");
    let isButtonBack = element.classList.contains("step-button-back");
    if (isButtonNext || isButtonBack) {
      let currentStep = document.getElementById("step-" + element.dataset.step);
      let jumpStep = document.getElementById("step-" + element.dataset.to_step);

      let id_step = currentStep.getAttribute("id");
      let state = currentStep.querySelector(".step-button-next");

      currentStep.addEventListener("animationend", function callback() {
        currentStep.classList.remove("active");
        jumpStep.classList.add("active");
        if (isButtonNext) {
          currentStep.classList.add("to-left");
          progressOptions[element.dataset.to_step - 1].classList.add("active");
        } else {
          jumpStep.classList.remove("to-left");
          progressOptions[element.dataset.step - 1].classList.remove("active");
        }
        currentStep.removeEventListener("animationend", callback);
      });
      currentStep.classList.add("inactive");
      jumpStep.classList.remove("inactive");
    }
  });
};

export default progressBar;
