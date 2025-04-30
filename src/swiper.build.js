/*! Swiper v11 - MIT License - https://swiperjs.com/ */

import Swiper from 'swiper';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

Swiper.use([EffectFade, Navigation, Pagination]);

window.Swiper = Swiper;

export default Swiper;