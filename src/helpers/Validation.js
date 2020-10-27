export const isActive = (campo) => {
  let button = document.querySelector(campo);

  if (button.classList.contains("active")) {
    return true;
  }

  return false;
};

export const isActiveAll = (form_step, buttons) => {
  let step = document.querySelector(form_step);
  let sel_buttons = step.querySelectorAll(buttons);

  for (const button of sel_buttons) {
    if (button.classList.contains("active")) {
      return true;
    }
  }
  return false;
};

export const setErrorFor = (input, message) => {
  const formGroup = input.parentElement;
  const small = formGroup.querySelector("small");

  //Add error
  small.innerText = message;
  formGroup.classList.add("error");
  formGroup.classList.remove("success");
};

export const setSuccessFor = (input) => {
  const formGroup = input.parentElement;
  //Add error
  formGroup.classList.add("success");
  formGroup.classList.remove("error");
};

export const buttonEnabled = (btn_step, btn) => {
  let sel_step = document.querySelector(btn_step);
  let sel_button = sel_step.querySelector(btn);

  if (sel_button.classList.contains("button-submit")) {
    sel_button.setAttribute("type", "submit");
    sel_button.classList.remove("button-disabled");
    sel_button.classList.add("step-button-next");
  } else {
    sel_button.classList.remove("button-disabled");
    sel_button.classList.add("step-button-next");
  }
};

export const buttonDisabled = (btn_step, btn) => {
  let sel_step = document.querySelector(btn_step);
  let sel_button = sel_step.querySelector(btn);

  if (sel_button.classList.contains("button-submit")) {
    sel_button.setAttribute("type", "button");
    sel_button.classList.add("button-disabled");
    sel_button.classList.remove("step-button-next");
  } else {
    sel_button.classList.add("button-disabled");
    sel_button.classList.remove("step-button-next");
  }
};

export const completeFields = (form_step, fields) => {
  let step = document.querySelector(form_step);
  let sel_fields = step.querySelectorAll(fields);

  for (const field of sel_fields) {
    let fieldName = field.tagName.toLowerCase();

    if (fieldName == "input") {
      let fieldType = field.getAttribute("type");
      if (fieldType == "text" || fieldType == "number") {
        let fieldVal = field.value;
        if (fieldVal.length <= 0) {
          setErrorFor(field, "Debe completar este campo");
          return false;
        } else {
          setSuccessFor(field);
        }
      }

      if (fieldType == "checkbox") {
        if (!field.checked) {
          return false;
        }
      }
    }

    if (fieldName == "select") {
      let selectVal = field.options[field.selectedIndex].value;
      if (!selectVal) {
        setErrorFor(field, "Debe completar este campo");
        return false;
      } else {
        setSuccessFor(field);
      }
    }
  }

  return true;
};

export const isDocumentValid = (fieldType, field) => {
  let fieldDoc = document.querySelector(field);
  let fieldTypeDoc = document.querySelector(fieldType);
  let fieldTypeVal = fieldTypeDoc.options[fieldTypeDoc.selectedIndex].value;
  let fieldDocVal = fieldDoc.value;

  if (fieldTypeVal == "cedula-ciudadania") {
    let fieldDocNum = parseInt(fieldDocVal);
    if (isNaN(fieldDocNum)) {
      setErrorFor(fieldDoc, "Por favor ingrese un documento válido");
      return false;
    } else {
      setSuccessFor(fieldDoc);
    }
  }

  return true;
};

export const isFileUpload = (files) => {
  let sel_files = document.querySelectorAll(files);
  for (const file of sel_files) {
    if (file.classList.contains("file-active")) {
      return true;
    }
  }
  return false;
};

export const activeFiles = (files) => {
  let input_files = document.querySelectorAll(files);
  const uploadMaxSize = 2000000; //1MB = 1 millón bytes

  for (const file of input_files) {
    let fileInput = file.querySelector(".sb-input-file");
    let fileUp = fileInput.files[0];
    let boxNameFile = file.querySelector(".sb-name-file");
    if (fileUp) {
      let fileSize = fileUp.size;
      if (fileSize < uploadMaxSize) {
        let nameFile = fileUp.name;
        boxNameFile.innerHTML = nameFile;
        file.classList.add("file-active");
      } else {
        alert("El archivo supera el tamaño máximo permitido: 1MB");
        fileInput.value = "";
        file.classList.remove("file-active");
        boxNameFile.innerHTML = "";
      }
    }
  }
};

export const onlyNumbers = (e) => {
  console.log("Evento keypress");
}
