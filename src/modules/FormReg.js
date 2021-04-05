import optionFiles from './../helpers/OptionsFiles';
import { completeFields, isActiveAll, buttonEnabled, buttonDisabled, isDocumentValid, isFileUpload, activeFiles, setSuccessFor, inputDocument, setErrorFor } from './../helpers/Validation';

const formReg = () => {
    optionFiles('.button-file');
    
    const form_reg = document.querySelector('#form-register');
    const buttons_opt = form_reg.querySelectorAll('.button-file');

    inputDocument('#form-register #rg-num-doc', '#form-register #step-1', 9);

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

        // Validation step 1
        const valFields1 = completeFields('#form-register #step-1', '.input-required');
        const validDocuments1 = isDocumentValid('#form-register #rg-tipo-doc', '#form-register #rg-num-doc');

        if (valFields1 && validDocuments1) {
            buttonEnabled("#form-register #step-1",".next-step");
        } else {
            buttonDisabled("#form-register #step-1",".next-step");
        }


        // Validation step 2
        let inputRadio = document.getElementsByName('rg-type-document');

        for (const field of inputRadio) {
            const customRadioCheck = field.parentElement;
            const activeFields = field.dataset.fields;
            const subasta = form_reg.querySelector(`#${activeFields} #rg-nombre-subasta`);
            const nombreCliente = form_reg.querySelector(`#${activeFields} #rg-nombre-empresa`);

            
            if (field.checked) {
                customRadioCheck.classList.add("success");
                document.querySelector(`#${activeFields}`).classList.remove("d-none");

                if(nombreCliente && activeFields == "campos-creacion"){
                    nombreCliente.classList.add("input-required");
                    nombreCliente.required = true;

                    nombreCliente.addEventListener('change', function() {
                        if(this.value.length <= 0){
                            setErrorFor(nombreCliente, "Debe completar este campo")
                        } else {
                            setSuccessFor(nombreCliente)
                        }
                    })
                }

                if (subasta) {
                    subasta.classList.add("input-required");
                    subasta.required = true;
                    subasta.setAttribute('name', 'rg-nombre-subasta');

                    subasta.addEventListener('change', function() {
                        if(this.value.length <= 0){
                            setErrorFor(subasta, "Debe completar este campo")
                        } else {
                            setSuccessFor(subasta)
                        }
                    })
                }
                
                buttonEnabled("#form-register #step-2",".next-step");
            } else {
                document.querySelector(`#${activeFields}`).classList.add("d-none");
                if (subasta) {
                    subasta.classList.remove("input-required");
                    subasta.required = false;
                    subasta.removeAttribute('name');
                }

                if(nombreCliente){
                    nombreCliente.classList.remove("input-required");
                    nombreCliente.required = false;
                }

                customRadioCheck.classList.remove("success");
            }
            
        }
        
        // Validation step 3
        activeFiles('.sb-group-file');
        const valFields3 = completeFields('#form-register #step-3', '.input-required');

        if(valFields3 && isFileUpload('.sb-group-file')){
            buttonEnabled("#form-register #step-3",".next-step");
        } else {
            buttonDisabled("#form-register #step-3",".next-step");
        }

    })

    for (const button of buttons_opt) {
        let alerts2 = document.querySelector("#form-register #step-2 .alerts");
        let buttonNext2 = document.querySelector('#form-register #step-2 .next-step');

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

export default formReg;
