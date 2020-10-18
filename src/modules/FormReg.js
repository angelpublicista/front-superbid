import progressBar from './../helpers/ProgressBar';
import Campos from '../helpers/Campos';
import optionFiles from './../helpers/OptionsFiles';
import { isActive, completeFields, isActiveAll, buttonEnabled, buttonDisabled, isDocumentValid, isFileUpload, activeFiles, setErrorFor } from './../helpers/Validation';

const formReg = () => {
    progressBar('#form-register');
    optionFiles('.button-file');
    
    let form_reg = document.querySelector('#form-register');
    const buttons_opt = form_reg.querySelectorAll('.button-file');

    form_reg.addEventListener('change', function(){
        const tipoDocumento = document.querySelector("#rg-tipo-doc");
        const tipoPersona = document.querySelector("#rg-tipo-persona");

        if (tipoDocumento.options[tipoDocumento.selectedIndex].value == "nit") {
            tipoPersona.selectedIndex = "2";
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

        const valFields1 = completeFields('#step-1', '.input-required');
        const validDocuments1 = isDocumentValid('#rg-tipo-doc', '#rg-num-doc');

        if (valFields1 && validDocuments1) {
            buttonEnabled("#step-1",".next-step");
        } else {
            buttonDisabled("#step-1",".next-step");
        }


        // Validation step 2
        let inputRadio = document.getElementsByName('rg-type-document');

        for (const field of inputRadio) {
            let customRadioCheck = field.parentElement;
            let activeFields = field.dataset.fields;
            if (field.checked) {
                customRadioCheck.classList.add("success");
                document.querySelector(`#${activeFields}`).classList.remove("d-none");
                let subasta = document.querySelector(`#${activeFields} #rg-nombre-subasta`);
                if (subasta) {
                    subasta.classList.add("input-required");
                }
                
                buttonEnabled("#step-2",".next-step");
            } else {
                document.querySelector(`#${activeFields}`).classList.add("d-none");
                let subasta = document.querySelector(`#${activeFields} #rg-nombre-subasta`);
                if (subasta) {
                    subasta.classList.remove("input-required");
                }
                customRadioCheck.classList.remove("success");
            }
            
        }

        activeFiles('.sb-group-file');
        
        const valFields3 = completeFields('#step-3', '.input-required');
        

        if(valFields3 && isFileUpload('.sb-group-file')){
            buttonEnabled("#step-3",".next-step");
        } else {
            buttonDisabled("#step-3",".next-step");
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
            
            let id_button = button.getAttribute('id');
            let campos_activar = button.dataset.active;
            let seccion_subastas = document.querySelector('.datos-subasta');
            
            let formCampos = new Campos('.sb-ind-files', `${campos_activar}`);

            if(isActive(`#${id_button}`)){
                formCampos.crearCampos();
                if (campos_activar != "campos-registro") {
                    seccion_subastas.classList.remove('d-none')   
                }
            } else {
                formCampos.borrarCampos();
                for (const sel_button of buttons_opt) {
                    let sel_campos_activar = sel_button.dataset.active;

                    if (sel_button.classList.contains('.active') && sel_campos_activar != "campos-registro") {
                        seccion_subastas.classList.remove('d-none')
                        return;
                    }

                    seccion_subastas.classList.add('d-none')
                }
            }

        })
    }
    
    
}

export default formReg;
