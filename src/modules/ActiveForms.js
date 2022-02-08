import progressBar from './../helpers/ProgressBar';

const toggleForms = (buttons, forms) => {
    const form_buttons = document.querySelectorAll(buttons);
    const forms_cont = document.querySelectorAll(forms);
    if(form_buttons){
        for (const btn of form_buttons) {
            btn.addEventListener('click', function(e) {
                //e.preventDefault();

                let form_active = btn.dataset.form;
                for (const uni_form of forms_cont) {
                    uni_form.classList.remove('form-active')
                }
                
                for (const newBtn of form_buttons) {
                    newBtn.classList.remove('active');
                }
                this.classList.add('active');

                document.querySelector(form_active).classList.add('form-active');
                progressBar(form_active);  
            })
        }
    }
}

export default toggleForms;