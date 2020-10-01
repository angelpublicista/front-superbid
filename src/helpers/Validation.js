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
    sel_button.removeAttribute('disabled');
}

export const buttonDisabled = (btn_step, btn) => {
    let sel_step = document.querySelector(btn_step);
    let sel_button = sel_step.querySelector(btn);

    sel_button.classList.add('button-disabled');
    sel_button.setAttribute('disabled', true);
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