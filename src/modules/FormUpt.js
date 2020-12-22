import {completeFields, buttonEnabled, buttonDisabled, isDocumentValid, isFileUpload, activeFiles, setErrorFor, setSuccessFor } from './../helpers/Validation';

const formUpt = () => {
    //progressBar("#form-update");
    const form_upt = document.getElementById("form-update");
    const upt_numDocumento = form_upt.querySelector("#upt-num-doc");

    if (screen.width < 768) {
        upt_numDocumento.addEventListener('input', e => {
            e.preventDefault();
            let codigoKey = e.which;
            let valorKey = String.fromCharCode(codigoKey);
            let valor = parseInt(valorKey);

            if(upt_numDocumento.value.length <= 9){
                if (valor || valorKey == "0") {
                    upt_numDocumento.value += valor;
                    setSuccessFor(upt_numDocumento);
                    if (completeFields('#form-update #step-1', '.input-required')) {
                        buttonEnabled("#form-update #step-1",".next-step");
                    }
                }
            } else {
                return false
            }
        });
    } else {
        upt_numDocumento.addEventListener('keypress', e => {
        
            e.preventDefault();
            let codigoKey = e.which;
            let valorKey = String.fromCharCode(codigoKey);
            let valor = parseInt(valorKey);
    
            if(upt_numDocumento.value.length <= 9){
                if (valor || valorKey == "0") {
                    upt_numDocumento.value += valor;
                    setSuccessFor(upt_numDocumento);
                    if (completeFields('#form-update #step-1', '.input-required')) {
                        buttonEnabled("#form-update #step-1",".next-step");
                    }
                    
                }
            } else {
                return false
            }
        });
    }

    form_upt.addEventListener('change', function(){
        const upt_val_fields1 = completeFields('#form-update #step-1', '.input-required');

        const upt_tipoDocumento = form_upt.querySelector("#upt-tipo-doc");
        const upt_tipoPersona = form_upt.querySelector("#upt-tipo-persona");

        const upt_registro = form_upt.querySelector('.campos-registro');
        const upt_titulo_registro = upt_registro.querySelector('.sb-title-head-docs');
        const upt_camara_comercio = upt_registro.querySelector('.wrap-camara-comercio');
        const upt_rep_legal = upt_registro.querySelector('.wrap-rep-legal');

        // Selección según tipo de documento
        if (upt_tipoDocumento.options[upt_tipoDocumento.selectedIndex].value == "nit") {
            upt_tipoPersona.selectedIndex = "2";
            upt_tipoPersona.options["1"].disabled = true;
            upt_tipoPersona.options["2"].disabled = false;
            setSuccessFor(upt_tipoPersona);
        } else if(upt_tipoDocumento.options[upt_tipoDocumento.selectedIndex].value == "cedula-ciudadania"){
            upt_tipoPersona.selectedIndex = "1";
            upt_tipoPersona.options["1"].disabled = false;
            upt_tipoPersona.options["2"].disabled = true;
            setSuccessFor(upt_tipoPersona);
        } else {
            upt_tipoPersona.options["1"].disabled = false;
            upt_tipoPersona.options["2"].disabled = false;
        }

        //Selección documentos, según tipo de persona
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

        const upt_validDocuments1 = isDocumentValid('#upt-tipo-doc', '#upt-num-doc');

        if (upt_val_fields1 && upt_validDocuments1) {
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