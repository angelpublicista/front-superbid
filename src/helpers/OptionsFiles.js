const optionFiles = (boton) => {
    let docs_options = document.querySelectorAll(boton);

    for (const doc of docs_options) {
        doc.addEventListener('click', function(e) {
            e.preventDefault();
            if(this.classList.contains('active')){
                this.classList.remove('active')
            } else {
                this.classList.add('active')
            }
        })
    }
}

export default optionFiles;