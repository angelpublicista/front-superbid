export const isActive = (campo) => {
    let button = document.querySelector(campo);

    if (button.classList.contains('active')) {
        return true;
    }

    return false;
}

export const isActiveAll = (form_step, buttons) => {
    let step = document.querySelector(form_step);
    let sel_buttons = step.querySelectorAll(buttons);

    for (const button of sel_buttons) {
        if (button.classList.contains('active')) {
            return true;
        }
    }
    return false;
}

export const buttonEnabled = (btn_step, btn) => {
    let sel_step = document.querySelector(btn_step);
    let sel_button = sel_step.querySelector(btn);

    sel_button.classList.remove('button-disabled');
    sel_button.classList.add('step-button-next');
}

export const buttonDisabled = (btn_step, btn) => {
    let sel_step = document.querySelector(btn_step);
    let sel_button = sel_step.querySelector(btn);

    sel_button.classList.add('button-disabled');
    sel_button.classList.remove('step-button-next');
}

export const completeFields = (form_step ,fields) => {
    let step = document.querySelector(form_step);
    let sel_fields = step.querySelectorAll(fields);


    for (const field of sel_fields) {
        let fieldName = field.localName;
        
        if (fieldName == "input") {
            let fieldType = field.getAttribute('type');
            if (fieldType == "text" || fieldType == "number") {
                let fieldVal = field.value;
                if (fieldVal.length <= 0) {
                    return false;
                }            
            }            
        }

        if (fieldName == "select") {
            let selectVal = field.options[field.selectedIndex].value;
            if (!selectVal) {
                return false;
            }
        }


    }

    return true;
}

export const isDocumentValid = (fieldType ,field) => {
    let fieldDoc = document.querySelector(field);
    let fieldTypeDoc = document.querySelector(fieldType);
    let fieldTypeVal = fieldTypeDoc.options[fieldTypeDoc.selectedIndex].value;
    let fieldDocVal = fieldDoc.value;
    
    if (fieldTypeVal == 'cedula-ciudadania') {
        let fieldDocNum = parseInt(fieldDocVal);
        if(isNaN(fieldDocNum)){
            return false;
        }
    }

    return true;
}

export const isFileUpload = (files) => {
    let sel_files = document.querySelectorAll(files);

    for (const file of sel_files) {
        if (file.value.length > 0) {
            return true;
        }
    }

    return false;
}

export const activeFiles = (files) => {
    let input_files = document.querySelectorAll(files);

    for (const file of input_files) {
        let fileValue = file.querySelector('.sb-input-file')
        if (fileValue.value.length > 0) {
            file.classList.add('file-active');
        } else {
            file.classList.remove('file-active');
        }
    }
}