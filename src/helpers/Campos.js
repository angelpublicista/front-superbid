class Campos {
    constructor(contenedor, tipo_campos, nombre_subasta){
        this.contenedor = contenedor;
        this.tipo_campos = tipo_campos;
        this.nombre_subasta = nombre_subasta;

        this.box = document.querySelector(this.contenedor);
        this.fields_box = this.box.querySelector(`.${this.tipo_campos}`);
    }

    crearCampos(){
        let contenido = ""
        switch (this.tipo_campos) {
            case "campos-registro":
                contenido = `
                    <div class="sb-docs sb-docs-registro">
                        <h3 class="sb-title-head-docs">Documentos de registro</h3>
                        <div class="row mt-3">
                            <div class="col-6 col-md-3">
                                <div class="form-group sb-group-file position-relative text-center">
                                    <input type="file" id="rg-field-documento" class="sb-input-file" name="rg-field-documento">
                                    <div class="icon-file">
                                        <i class="fas fa-file"></i>
                                    </div>
                                    <label for="rg-field-documento" class="mt-2">Documento de identidad</label>
                                </div>
                            </div>

                            <div class="col-6 col-md-3">
                                <div class="form-group sb-group-file position-relative text-center">
                                    <input type="file" id="rg-field-documento" class="sb-input-file" name="rg-field-documento">
                                    <div class="icon-file">
                                        <i class="fas fa-file"></i>
                                    </div>
                                    <label for="rg-field-documento" class="mt-2">Documento de identidad</label>
                                </div>
                            </div>
                        </div>
                    </div>
                
                `
                break;

            case "campos-pagos":
                contenido = `<p>Campos de pagos</p>`
                break;
        
            default:
                break;
        }

        this.fields_box.innerHTML += contenido;
    }

    borrarCampos(){
        this.fields_box.innerHTML = "";
    }
    
}

export default Campos;