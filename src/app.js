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


AOS.init();

formReg();
formUpt();
formWar();
$('.button-tooltip').tooltip();

toggleForms('.button-form', '.sb-form');

getApiFolders();
