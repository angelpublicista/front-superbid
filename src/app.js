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
import "./static/agenda.png";
import "./static/garantia.png";
import "./static/checked-dollar-01.png";
import "./static/icon-doc-updRecurso.svg";
import "./static/rolling-1s-200px.gif";


AOS.init();

formReg();
formUpt();
formWar();
$('.button-tooltip').tooltip();

toggleForms('.button-form', '.sb-form');

getApiFolders();

$('.sb-form').on('submit', function(e) {
    $('.sb-loader-wrap').addClass('active')
})
