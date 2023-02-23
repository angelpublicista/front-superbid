// Libs
import $ from "jquery";
import 'bootstrap';
import AOS from 'aos';

//Modules
import toggleForms from "./modules/ActiveForms";
import formReg from "./modules/FormReg";
import formUpt from "./modules/FormUpt";
import formWar from "./modules/FormWar";
import getApiFolders from "./modules/ApiFolders";


// Styles
import "./styles/main.sass";

// Statics
import "./static/add-doc.svg";
import "./static/update-doc.svg";
import "./static/logo-superbid.svg";
import "./static/logo_superbid_nova_marca_purple.svg";
import "./static/agenda.png";
import "./static/garantia.png";
import "./static/checked-dollar-01.png";
import "./static/icon-doc-updRecurso.svg";
import "./static/rolling-1s-200px.gif";
import "./static/money-dollar-circle-line.svg";
import "./static/calendar-2-line.svg";
import "./static/file.png";
import "./static/favicon-superbid.png";


AOS.init();

formReg();

// Módulo desactivado
// formUpt();

formWar();
$('.button-tooltip').tooltip();

toggleForms('.button-form', '.sb-form');

getApiFolders();

$('.sb-form').on('submit', function(e) {
    $('.sb-loader-wrap').addClass('active')
})
