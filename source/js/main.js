//----- Библиотеки js -----//
import $ from 'jquery';

global.jQuery = $;
global.$ = $;

//----- Основной js -----//
import {swiper} from "./modules/swiper";
import {inputmask} from "./modules/mask-tel";
import {validation} from "./modules/validation";
import {ymap} from "./modules/ymap";
import {forms} from "./modules/forms";
import {main} from "./modules/main.js";
import {vendors} from "./modules/vendors";
import {jqueryForm} from "./modules/jquery-form";

swiper();
inputmask();
validation();
ymap();
forms();
main();
vendors();
jqueryForm();
