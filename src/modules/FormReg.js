import progressBar from './../helpers/ProgressBar';
import Campos from '../helpers/Campos';
import optionFiles from './../helpers/OptionsFiles';
import { isActive, completeFields, isActiveAll, buttonEnabled, buttonDisabled } from './../helpers/Validation';

const formReg = () => {
    progressBar('#form-register');
    optionFiles('.button-file');
    
    let form_reg = document.querySelector('#form-register');
    const buttons_opt = form_reg.querySelectorAll('.button-file');

    form_reg.addEventListener('change', function(){
        if (completeFields('#step-1', '.input-required')) {
            buttonEnabled("#step-1",".step-button-next");
        } else {
            buttonDisabled("#step-1",".step-button-next");
        }
        
    })

    for (const button of buttons_opt) {
        button.addEventListener('click', function(e) {
            e.preventDefault();

            // Validación de campos
            if (isActiveAll('#step-2', '.button-file')) {
                buttonEnabled("#step-2",".step-button-next");
            } else {
                buttonDisabled("#step-2",".step-button-next");
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
