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
        if (completeFields('#step-1', '.input-required') && isDocumentValid('#rg-tipo-doc', '#rg-num-doc')) {
            buttonEnabled("#step-1",".next-step");
        } else {
            buttonDisabled("#step-1",".next-step");
        }

        activeFiles('.sb-group-file');
        let nombreSubasta = document.querySelector('.datos-subasta');
        let inputNombre = nombreSubasta.querySelector('#rg-nombre-subasta');
        if(nombreSubasta.classList.contains('d-none')){
            inputNombre.classList.remove('input-required');
        } else {
            inputNombre.classList.add('input-required');
        }

        if(isFileUpload('.sb-input-file') && completeFields('#step-3', '.input-required')){
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
                buttonEnabled("#step-2",".next-step");
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
