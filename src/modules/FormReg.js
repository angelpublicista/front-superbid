import progressBar from './../helpers/ProgressBar';
import Campos from '../helpers/Campos';
import optionFiles from './../helpers/OptionsFiles';
import { isActive } from './../helpers/Validation';

const formReg = () => {
    progressBar('#form-register');
    optionFiles('.button-file');
    
    let form_reg = document.querySelector('#form-register');
    const buttons_opt = form_reg.querySelectorAll('.button-file');

    for (const button of buttons_opt) {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            let id_button = button.getAttribute('id');
            let campos_activar = button.dataset.active;
            let seccion_subastas = document.querySelector('.datos-subasta');
            
            let formCampos = new Campos('.sb-ind-files', `${campos_activar}`);

            if(isActive(`#${id_button}`)){
                formCampos.crearCampos();
                seccion_subastas.classList.remove('d-none')
            } else {
                formCampos.borrarCampos();
                for (const sel_button of buttons_opt) {
                    if (sel_button.classList.contains('.active')) {
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
