

const getApiFolders = () => {
    const fieldSubasta = document.querySelectorAll('.rg-nombre-subasta');
    
    for (const field of fieldSubasta) {
        let folder = field.dataset.folder
        fetch(`http://localhost/form-superbid/api/api-folders.php?folder=${folder}`)
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

export default getApiFolders;