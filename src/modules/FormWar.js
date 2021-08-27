import optionFiles from './../helpers/OptionsFiles';
import { completeFields, isActiveAll, buttonEnabled, buttonDisabled, isDocumentValid, isFileUpload, activeFiles, setSuccessFor, inputDocument, setErrorFor } from './../helpers/Validation';

const formWar = () => {
    optionFiles('.button-file');
    
    const form_war = document.querySelector('#form-warranty');
    const buttons_opt = form_war.querySelectorAll('.button-file');

    inputDocument('#form-warranty #wrr-num-doc', '#form-warranty #step-2', 9);

    form_war.addEventListener('change', function(){
        const tipoDocumento = form_war.querySelector("#wrr-tipo-doc");
        const tipoPersona = form_war.querySelector("#wrr-tipo-persona");

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
        } else {
            tipoPersona.options["1"].disabled = false;
            tipoPersona.options["2"].disabled = false;
        }

        // Validation step 1
        const valFields2 = completeFields('#form-warranty #step-2', '.input-required');
        const validDocuments2 = isDocumentValid('#form-warranty #wrr-tipo-doc', '#form-warranty #wrr-num-doc');

        if (valFields2 && validDocuments2) {
            buttonEnabled("#form-warranty #step-2",".next-step");
        } else {
            buttonDisabled("#form-warranty #step-2",".next-step");
        }
        
        // Validation step 3
        activeFiles('.sb-group-file');
        const valFields3 = completeFields('#form-warranty #step-3', '.input-required');

        if(valFields3 && isFileUpload('.sb-group-file')){
            buttonEnabled("#form-warranty #step-3",".next-step");
        } else {
            buttonDisabled("#form-warranty #step-3",".next-step");
        }

    })

    for (const button of buttons_opt) {
        let alerts2 = document.querySelector("#form-warranty #step-2 .alerts");
        let buttonNext2 = document.querySelector('#form-warranty #step-2 .next-step');

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
    
}

export default formWar;
