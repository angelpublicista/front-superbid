

const getApiFolders = () => {
    const fieldSubasta = document.querySelectorAll('.rg-api-folder');
    const fieldSubastaWrr = document.querySelectorAll('.wrr-api-folder');

    const url_prod = "https://superbidcolombia.com/documentos"
    const url_test = "https://superbidcolombia.com/pruebas2"
    const url_local = "http://localhost/form-superbid"
    
    if(fieldSubasta){
        for (const field of fieldSubasta) {
            let folder = field.dataset.folder
            fetch(`${url_prod}/api/api-folders.php?folder=${folder}`)
            .then(res => res.json())
            .then(data =>{
                for (const item of data) {
                    let option = document.createElement("option")
                    option.text = item.nameFolder
                    option.value = item.nameFolder
    
                    field.add(option)
                }
            })
        }
    }

    if(fieldSubastaWrr){
        for (const field of fieldSubastaWrr) {
            let folder = field.dataset.folder
            fetch(`${url_prod}/api/api-folders.php?folder=${folder}`)
            .then(res => res.json())
            .then(data =>{
                for (const item of data) {
                    let option = document.createElement("option")
                    option.text = item.nameFolder
                    option.value = item.nameFolder
    
                    field.add(option)
                }
            })
        }
    }
}

export default getApiFolders;