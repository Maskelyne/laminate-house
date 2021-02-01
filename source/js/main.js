//----- Библиотеки js -----//
import $ from 'jquery';

global.jQuery = $;
global.$ = $;

//----- Основной js -----//
import {swiper} from "./modules/swiper";
import {inputmask} from "./modules/mask-tel";
import {validation} from "./modules/validation";
import {vendors} from "./modules/vendors";

swiper();
inputmask();
validation();
vendors();
