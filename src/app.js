// Libs
import $ from "jquery";
import 'bootstrap';
import '@fortawesome/fontawesome-free/js/all.js';
import '@fortawesome/fontawesome-free/css/all.css';
import AOS from 'aos';

//Modules
import { formReg } from "./modules/FormReg";

// Styles
import "./styles/main.sass";

// Statics
import "./static/add-doc.svg";
import "./static/update-doc.svg";
import "./static/logo-superbid.svg";


AOS.init();

formReg();
$('.button-file').tooltip();
