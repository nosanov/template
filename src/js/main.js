import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import Popup  from './components/pop-up';
import Header from './components/header';
import Form from './components/form';
import Anchor from './components/anchor';
import { initOwlCarousel } from './components/owl';
import initLazyload from './components/lazy';
// import scrollFix from './libs/scrollfix';

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

    // init forms
    const form = new Form('#form-0');

    // init anchors
    const link = new Anchor('[data-type="anchor"]');

    // init carousel
    initOwlCarousel();

    // init lazyloading for images
    initLazyload();

    // init scroll fix
    // scrollFix();
});
