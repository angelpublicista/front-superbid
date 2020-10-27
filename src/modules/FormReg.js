import optionFiles from './../helpers/OptionsFiles';
import { isActive, completeFields, isActiveAll, buttonEnabled, buttonDisabled, isDocumentValid, isFileUpload, activeFiles, setErrorFor, setSuccessFor } from './../helpers/Validation';

const formReg = () => {
    optionFiles('.button-file');
    
    const form_reg = document.querySelector('#form-register');
    const buttons_opt = form_reg.querySelectorAll('.button-file');
    const numDocumento = form_reg.querySelector("#rg-num-doc");

    numDocumento.addEventListener('keypress', e => {
        e.preventDefault();
        let codigoKey = e.keyCode;
        let valorKey = String.fromCharCode(codigoKey);
        let valor = parseInt(valorKey);

        if (valor) {
            numDocumento.value += valor;
            setSuccessFor(numDocumento);
            if (completeFields('#form-register #step-1', '.input-required')) {
                buttonEnabled("#step-1",".next-step");
            }
            
        }
    });

    form_reg.addEventListener('change', function(){
        const tipoDocumento = form_reg.querySelector("#rg-tipo-doc");
        const tipoPersona = form_reg.querySelector("#rg-tipo-persona");

        // Selección según tipo de documento
        if (tipoDocumento.options[tipoDocumento.selectedIndex].value == "nit") {
            tipoPersona.selectedIndex = "2";
            tipoPersona.options["1"].disabled = true;
            tipoPersona.options["2"].disabled = false;
            setSuccessFor(tipoPersona);
        } else if(tipoDocumento.options[tipoDocumento.selectedIndex].value == "cedula-ciudadania"){
            tipoPersona.selectedIndex = "1";
            tipoPersona.options["1"].disabled = false;
            tipoPersona.options["2"].disabled = true;
            setSuccessFor(tipoPersona);
        }

        const registro = document.getElementById('campos-registro');
        const titulo_registro = registro.querySelector('.sb-title-head-docs');
        const camara_comercio = registro.querySelector('.wrap-camara-comercio');
        const rep_legal = registro.querySelector('.wrap-rep-legal');

        if (tipoPersona.selectedIndex == "1") {
            camara_comercio.classList.remove('input-required');
            rep_legal.classList.remove('input-required');

            camara_comercio.style.display = "none";
            rep_legal.style.display = "none";
            titulo_registro.innerText = "Documentos de registro - Persona natural";
        } else {
            camara_comercio.classList.add('input-required');
            rep_legal.classList.add('input-required');

            camara_comercio.style.display = "flex";
            rep_legal.style.display = "flex";
            titulo_registro.innerText = "Documentos de registro - Persona jurídica";

        }

        const valFields1 = completeFields('#form-register #step-1', '.input-required');
        const validDocuments1 = isDocumentValid('#rg-tipo-doc', '#rg-num-doc');

        if (valFields1 && validDocuments1) {
            console.log("Todo válido");
            buttonEnabled("#step-1",".next-step");
        } else {
            buttonDisabled("#step-1",".next-step");
        }


        // Validation step 2
        let inputRadio = document.getElementsByName('rg-type-document');

        for (const field of inputRadio) {
            const customRadioCheck = field.parentElement;
            const activeFields = field.dataset.fields;
            const subasta = document.querySelector(`#${activeFields} #rg-nombre-subasta`);
            if (field.checked) {
                customRadioCheck.classList.add("success");
                document.querySelector(`#${activeFields}`).classList.remove("d-none");
                if (subasta) {
                    subasta.classList.add("input-required");
                    subasta.required = true;
                    subasta.setAttribute('name', 'rg-nombre-subasta');
                }
                
                buttonEnabled("#step-2",".next-step");
            } else {
                document.querySelector(`#${activeFields}`).classList.add("d-none");
                if (subasta) {
                    subasta.classList.remove("input-required");
                    subasta.required = false;
                    subasta.removeAttribute('name');
                }
                customRadioCheck.classList.remove("success");
            }
            
        }

        activeFiles('.sb-group-file');
        
        const valFields3 = completeFields('#step-3', '.input-required');
        

        if(valFields3 && isFileUpload('.sb-group-file')){
            buttonEnabled("#form-register #step-3",".next-step");
        } else {
            buttonDisabled("#form-register #step-3",".next-step");
        }

    })

    for (const button of buttons_opt) {
        let alerts2 = document.querySelector("#step-2 .alerts");
        let buttonNext2 = document.querySelector('#step-2 .next-step');

        button.addEventListener('click', function(e) {
            e.preventDefault();
           
            // Validación de campos
            if (isActiveAll('#step-2', '.button-file')) {
                
                alerts2.innerHTML = "";
            } else {
                buttonDisabled("#step-2",".next-step");
                if (!isActiveAll('#step-2', '.button-file')) {
                    buttonNext2.addEventListener('click', function(e) {
                        e.preventDefault();
                        alerts2.innerHTML = `<div class="alert alert-danger text-left" role="alert">
                            Por favor seleccione al menos un tipo de documento
                        </div>`;
                    })   
                }
            }
            
        })
    }
    
    form_reg.addEventListener('submit', function() {
        const response = grecaptcha.getResponse();

        if (response.length == 0) {
            document.getElementById("g-recaptcha-error").innerHTML = "Debe marcar esta casilla";
            return false;
        }
        return true;
    })
    
}

export default formReg;
