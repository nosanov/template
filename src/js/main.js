import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// import { initPopup } from './components/pop-up';
import Popup  from './components/pop-up';
import Header from './components/header';
import { initOwlCarousel } from './components/owl';

gsap.registerPlugin(ScrollTrigger);

window.addEventListener('load', () => {
    // console.warn('loaded');
});

document.addEventListener('DOMContentLoaded', () => {
    // console.warn('DOMContentLoaded');

    // init pop-ups
    document.querySelectorAll('[data-for="pop-up"]').forEach(button => {
        const popUp = new Popup(button.dataset.target);
    });

    // init header
    const header = new Header('#header');

    // init carousel
    initOwlCarousel();
});