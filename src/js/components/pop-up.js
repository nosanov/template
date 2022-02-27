/*
** TODO: rewrite this with Class
*/

function initPopup() {

    const srcButtons = document.querySelectorAll('[data-for="pop-up"]');
    const body = document.body;

    if (srcButtons.length) {
        const popUps = document.querySelectorAll('.pop-up');

        if (!popUps.length) {
            console.error('No one "pop-up" was found');
            return;
        }

        srcButtons.forEach(button => {

            button.addEventListener('click', () => {
                const targetHash = button.dataset.target;
                const popUp = document.getElementById(targetHash);

                if (!popUp) {
                    console.error('Pop-up for this target not found');
                    return;
                }

                popUp.classList.add('visible');
                body.classList.add('fixed');
            });
        });

        popUps.forEach(popUp => {
            const closeBtn = popUp.querySelector('.pop-up__close');

            if (!closeBtn) {
                console.error(popUp, 'has no close button');
            } else {
                closeBtn.addEventListener('click', () => {
                    popUp.classList.remove('visible');
                    body.classList.remove('fixed');
                });
            }
        });
    }
}

export { initPopup };