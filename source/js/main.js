//----- Библиотеки js -----//
import $ from 'jquery';

global.jQuery = $;
global.$ = $;

//----- Основной js -----//
import {slickSlider} from "./modules/slick-slider";
import {swiper} from "./modules/swiper";
import {inputmask} from "./modules/mask-tel";
import {validation} from "./modules/validation";
import {vendors} from "./modules/vendors";
import {ymap} from "./modules/ymap";
import {forms} from "./modules/forms";

slickSlider();
swiper();
inputmask();
validation();
vendors();
ymap();
forms();
