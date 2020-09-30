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
            let formCampos = new Campos('.sb-ind-files', `${campos_activar}`);
            if(isActive(`#${id_button}`)){
                formCampos.crearCampos();
            } else {
                formCampos.borrarCampos();
            }
        })
    }
    
    
}

export default formReg;
