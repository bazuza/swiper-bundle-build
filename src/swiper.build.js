/*! Swiper v11 - MIT License - https://swiperjs.com/ */

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

Swiper.use([Navigation, Pagination]);

window.Swiper = Swiper;

export default Swiper;