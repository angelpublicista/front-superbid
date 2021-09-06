

const getApiFolders = () => {
    const fieldSubasta = document.querySelectorAll('.rg-api-folder');
    const fieldSubastaWrr = document.querySelectorAll('.wrr-api-folder');
    
    if(fieldSubasta){
        for (const field of fieldSubasta) {
            let folder = field.dataset.folder
            fetch(`https://superbidcolombia.com/documentos/api/api-folders.php?folder=${folder}`)
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
            fetch(`https://superbidcolombia.com/documentos/api/api-folders.php?folder=${folder}`)
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