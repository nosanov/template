import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import { initPopup } from './components/pop-up';
import { initHeader } from './components/header';

gsap.registerPlugin(ScrollTrigger);

window.addEventListener('load', () => {
    console.warn('loaded');
});

document.addEventListener('DOMContentLoaded', () => {
    console.warn('DOMContentLoaded');

    initPopup();
    initHeader();
});