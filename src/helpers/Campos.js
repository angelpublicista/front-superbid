class Campos {
    constructor(contenedor, tipo_campos, nombre_subasta) {
        this.contenedor = contenedor;
        this.tipo_campos = tipo_campos;
        this.nombre_subasta = nombre_subasta;

        this.box = document.querySelector(this.contenedor);
        this.fields_box = this.box.querySelector(`.${this.tipo_campos}`);
    }

    crearCampos() {
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
                contenido = `<div class="sb-docs sb-docs-pagos">
                                <h3 class="sb-title-head-docs">Documentos de pagos</h3>
                                <div class="row mt-3">
                                    <div class="col-6 col-md-3">
                                        <div class="form-group sb-group-file position-relative text-center">
                                            <input type="file" id="rg-field-carta-tercero" class="sb-input-file" name="rg-field-carta-tercero">
                                            <div class="icon-file">
                                                <i class="fas fa-file"></i>
                                            </div>
                                            <label for="rg-field-carta-tercero" class="mt-2">Carta de tercero</label>
                                        </div>
                                    </div>

                                    <div class="col-6 col-md-3">
                                        <div class="form-group sb-group-file position-relative text-center">
                                            <input type="file" id="rg-field-soporte-pago-lote" class="sb-input-file" name="rg-field-soporte-pago-lote">
                                            <div class="icon-file">
                                                <i class="fas fa-file"></i>
                                            </div>
                                            <label for="rg-field-soporte-pago-lote" class="mt-2">Soporte pago lote</label>
                                        </div>
                                    </div>

                                    <div class="col-6 col-md-3">
                                        <div class="form-group sb-group-file position-relative text-center">
                                            <input type="file" id="rg-field-soporte-pago-comision" class="sb-input-file" name="rg-field-soporte-pago-comision">
                                            <div class="icon-file">
                                                <i class="fas fa-file"></i>
                                            </div>
                                            <label for="rg-field-soporte-pago-comision" class="mt-2">Soporte pago comisión</label>
                                        </div>
                                    </div>

                                    <div class="col-6 col-md-3">
                                        <div class="form-group sb-group-file position-relative text-center">
                                            <input type="file" id="rg-field-soporte-pago-traspasos" class="sb-input-file" name="rg-field-soporte-pago-traspasos">
                                            <div class="icon-file">
                                                <i class="fas fa-file"></i>
                                            </div>
                                            <label for="rg-field-soporte-pago-traspasos" class="mt-2">Soporte pago traspasos</label>
                                        </div>
                                    </div>

                                    <div class="col-6 col-md-3">
                                        <div class="form-group sb-group-file position-relative text-center">
                                            <input type="file" id="rg-field-soporte-pago-fianza" class="sb-input-file" name="rg-field-soporte-pago-fianza">
                                            <div class="icon-file">
                                                <i class="fas fa-file"></i>
                                            </div>
                                            <label for="rg-field-soporte-pago-fianza" class="mt-2">Soporte pago fianza</label>
                                        </div>
                                    </div>
                                </div>
                            </div>`
                break;

            case "campos-garantia":
                contenido = `<div class="sb-docs sb-docs-garantia">
                                <h3 class="sb-title-head-docs">Documentos de garantía</h3>
                                <div class="row mt-3">
                                    <div class="col-6 col-md-3">
                                        <div class="form-group sb-group-file position-relative text-center">
                                            <input type="file" id="rg-field-soporte-garantia" class="sb-input-file" name="rg-field-soporte-garantia">
                                            <div class="icon-file">
                                                <i class="fas fa-file"></i>
                                            </div>
                                            <label for="rg-field-soporte-garantia" class="mt-2">Soporte de garantía</label>
                                        </div>
                                    </div>

                                    <div class="col-6 col-md-3">
                                        <div class="form-group sb-group-file position-relative text-center">
                                            <input type="file" id="rg-field-certificacion-bancaria" class="sb-input-file" name="rg-field-certificacion-bancaria">
                                            <div class="icon-file">
                                                <i class="fas fa-file"></i>
                                            </div>
                                            <label for="rg-field-certificacion-bancaria" class="mt-2">Certificación bancaria</label>
                                        </div>
                                    </div>

                                    <div class="col-6 col-md-3">
                                        <div class="form-group sb-group-file position-relative text-center">
                                            <input type="file" id="rg-field-documentos-garantias" class="sb-input-file" name="rg-field-documentos-garantias">
                                            <div class="icon-file">
                                                <i class="fas fa-file"></i>
                                            </div>
                                            <label for="rg-field-documentos-garantias" class="mt-2">Documentos garantias</label>
                                        </div>
                                    </div>
                                </div>
                            </div>`
                break;

            case "campos-retiros":
                contenido = `<div class="sb-docs sb-docs-retiro">
                                <h3 class="sb-title-head-docs">Documentos de retiro</h3>
                                <div class="row mt-3">
                                    <div class="col-6 col-md-3">
                                        <div class="form-group sb-group-file position-relative text-center">
                                            <input type="file" id="rg-field-planilla-aportes" class="sb-input-file" name="rg-field-planilla-aportes">
                                            <div class="icon-file">
                                                <i class="fas fa-file"></i>
                                            </div>
                                            <label for="rg-field-planilla-aportes" class="mt-2">Planilla de aportes</label>
                                        </div>
                                    </div>

                                    <div class="col-6 col-md-3">
                                        <div class="form-group sb-group-file position-relative text-center">
                                            <input type="file" id="rg-field-poliza" class="sb-input-file" name="rg-field-poliza">
                                            <div class="icon-file">
                                                <i class="fas fa-file"></i>
                                            </div>
                                            <label for="rg-field-poliza" class="mt-2">Póliza</label>
                                        </div>
                                    </div>

                                    <div class="col-6 col-md-3">
                                        <div class="form-group sb-group-file position-relative text-center">
                                            <input type="file" id="rg-field-rtm" class="sb-input-file" name="rg-field-rtm">
                                            <div class="icon-file">
                                                <i class="fas fa-file"></i>
                                            </div>
                                            <label for="rg-field-rtm" class="mt-2">RTM</label>
                                        </div>
                                    </div>

                                    <div class="col-6 col-md-3">
                                        <div class="form-group sb-group-file position-relative text-center">
                                            <input type="file" id="rg-field-soat" class="sb-input-file" name="rg-field-soat">
                                            <div class="icon-file">
                                                <i class="fas fa-file"></i>
                                            </div>
                                            <label for="rg-field-soat" class="mt-2">SOAT</label>
                                        </div>
                                    </div>
                                </div>
                            </div>`
                break;

            default:
                break;
        }

        this.fields_box.innerHTML += contenido;
    }

    borrarCampos() {
        this.fields_box.innerHTML = "";
    }

}

export default Campos;