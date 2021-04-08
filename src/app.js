// Libs
import $ from "jquery";
import 'bootstrap';
import AOS from 'aos';

//Modules
import toggleForms from "./modules/ActiveForms";
import formReg from "./modules/FormReg";
import formUpt from "./modules/FormUpt";
import getApiFolders from "./modules/ApiFolders";


// Styles
import "./styles/main.sass";

// Statics
import "./static/add-doc.svg";
import "./static/update-doc.svg";
import "./static/logo-superbid.svg";


AOS.init();

formReg();
formUpt();
$('.button-tooltip').tooltip();

toggleForms('.button-form', '.sb-form');

getApiFolders();
