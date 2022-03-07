export default class Popup {

    constructor(el) {
        this.el = el;
        this.popUp = document.getElementById(this.el);
        document.querySelectorAll('[data-for="pop-up"]').forEach(button => {
            if (button.dataset.target == this.el) {
                this.openBtn = button;
            }
        });
        if (!this.openBtn) {
            console.error(this.popUp, 'has no open button');
        } else {
            this.openBtn.addEventListener('click', () => {
                this.show(this.popUp);
            });
        }

        this.closeBtn = this.popUp.querySelector('.pop-up__close');
        this.closeBtn.addEventListener('click', () => {
            this.hide(this.popUp);
        });
    }

    show(popUp) {
        popUp.classList.add('visible');
        document.body.classList.add('fixed');
    }

    hide(popUp) {
        popUp.classList.remove('visible');
        document.body.classList.remove('fixed');
    }
}