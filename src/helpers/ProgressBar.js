const progressBar = (formulario) => {
  let form = document.querySelector(formulario);
  let progressOptions = form.querySelectorAll(".sb-progressbar-option");

  form.addEventListener("click", function (e) {
    let element = e.target;
    let isButtonNext = element.classList.contains("step-button-next");
    let isButtonBack = element.classList.contains("step-button-back");
    let isButtonSubmit = element.classList.contains("button-submit");
    if (isButtonNext || isButtonBack) {
      if (isButtonSubmit) {
        return;
      }

      let currentStep = form.querySelector("#step-" + element.dataset.step);
      let jumpStep = form.querySelector("#step-" + element.dataset.to_step);

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
