// Libs
import $ from "jquery";
import 'bootstrap';
import '@fortawesome/fontawesome-free/js/all.js';
import '@fortawesome/fontawesome-free/css/all.css';
import AOS from 'aos';

//Modules
import toggleForms from "./modules/ActiveForms";
import formReg from "./modules/FormReg";
import formUpt from "./modules/FormUpt";


// Styles
import "./styles/main.sass";

// Statics
import "./static/add-doc.svg";
import "./static/update-doc.svg";
import "./static/logo-superbid.svg";


AOS.init();

formReg();
formUpt();
$('.button-file').tooltip();

toggleForms('.button-form', '.sb-form');
