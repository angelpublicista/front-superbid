import optionFiles from './../helpers/OptionsFiles';
import { completeFields, isActiveAll, buttonEnabled, buttonDisabled, isDocumentValid, isFileUpload, activeFiles, setSuccessFor, inputDocument, setErrorFor } from './../helpers/Validation';

const formWar = () => {
    optionFiles('.button-file');
    
    const form_war = document.querySelector('#form-warranty');
    const buttons_opt = form_war.querySelectorAll('.button-file');

    inputDocument('#form-warranty #rg-num-doc', '#form-warranty #step-2', 9);

    form_war.addEventListener('change', function(){
        const tipoDocumento = form_war.querySelector("#rg-tipo-doc");
        const tipoPersona = form_war.querySelector("#rg-tipo-persona");

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

        //Selección documentos, según tipo de persona
        const registro = document.getElementById('campos-registro');
        const titulo_registro = registro.querySelector('.sb-title-head-docs');
        const camara_comercio = registro.querySelector('.wrap-camara-comercio');
        const rep_legal = registro.querySelector('.wrap-rep-legal');
        const doc_identidad = registro.querySelector('.wrap-doc-identidad');

        if (tipoPersona.selectedIndex == "1") {
            camara_comercio.classList.remove('input-required');
            rep_legal.classList.remove('input-required');
            
            doc_identidad.style.display ="flex";
            camara_comercio.style.display = "none";
            rep_legal.style.display = "none";
            titulo_registro.innerText = "Documentos de registro - Persona natural";
        } else {
            camara_comercio.classList.add('input-required');
            rep_legal.classList.add('input-required');

            doc_identidad.style.display ="none";
            camara_comercio.style.display = "flex";
            rep_legal.style.display = "flex";
            titulo_registro.innerText = "Documentos de registro - Persona jurídica";

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
