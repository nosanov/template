export default class Popup {

    constructor(el) {
        this.el = el;
        this.popUp = document.getElementById(this.el);
        this.halfScreenClose = this.popUp.dataset.halfscreenClose;


        document.querySelectorAll('[data-for="pop-up"]').forEach(button => {
            if (button.dataset.target == this.el) {
                this.openBtn = button;
            }

            if (this.openBtn) {
                this.openBtn.addEventListener('click', () => {
                    this.show(this.popUp);
                });
            }
        });

        this.closeBtn = this.popUp.querySelector('.pop-up__close-button');
        this.closeBtn.addEventListener('click', () => {
            this.hide(this.popUp);
        });

        if (this.halfScreenClose) {
            this.popUp.addEventListener('click', (ev) => {
                this.hide(this.popUp);
            });
            this.popUp.querySelector('.pop-up__container').addEventListener('click', (ev) => {
                ev.stopPropagation();
            })
        }
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