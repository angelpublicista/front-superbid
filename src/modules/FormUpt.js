import optionFiles from './../helpers/OptionsFiles';
import { isActive, completeFields, isActiveAll, buttonEnabled, buttonDisabled, isDocumentValid, isFileUpload, activeFiles, setErrorFor } from './../helpers/Validation';

const formUpt = () => {
    //progressBar("#form-update");
    const form_upt = document.getElementById("form-update");

    form_upt.addEventListener('change', function(){
        const upt_val_fields1 = completeFields('#form-update #step-1', '.input-required');

        const upt_tipoDocumento = form_upt.querySelector("#upt-tipo-doc");
        const upt_tipoPersona = form_upt.querySelector("#upt-tipo-persona");

        const upt_registro = form_upt.querySelector('.campos-registro');
        const upt_titulo_registro = upt_registro.querySelector('.sb-title-head-docs');
        const upt_camara_comercio = upt_registro.querySelector('.wrap-camara-comercio');
        const upt_rep_legal = upt_registro.querySelector('.wrap-rep-legal');

        
        if (upt_tipoDocumento.options[upt_tipoDocumento.selectedIndex].value == "nit") {
            upt_tipoPersona.selectedIndex = "2";
        }

        if (upt_tipoPersona.selectedIndex == "1") {
            upt_camara_comercio.classList.remove('input-required');
            upt_rep_legal.classList.remove('input-required');

            upt_camara_comercio.style.display = "none";
            upt_rep_legal.style.display = "none";
            upt_titulo_registro.innerText = "Documentos de registro - Persona natural";
        } else {
            upt_camara_comercio.classList.add('input-required');
            upt_rep_legal.classList.add('input-required');

            upt_camara_comercio.style.display = "flex";
            upt_rep_legal.style.display = "flex";
            upt_titulo_registro.innerText = "Documentos de registro - Persona jurídica";

        }

        if (upt_val_fields1) {
            buttonEnabled("#form-update #step-1",".next-step");
        } else {
            buttonDisabled("#form-update #step-1",".next-step");
        }
        
        const upt_val_fields3 = completeFields('#form-update #step-2', '.input-required');

        activeFiles('.sb-group-file');
        if(upt_val_fields3 && isFileUpload('.sb-group-file')){
            buttonEnabled("#form-update #step-2",".next-step");
        } else {
            buttonDisabled("#form-update #step-2",".next-step");
        }
    })
}

export default formUpt;