/*
** TODO: rewrite this with Class
*/

function initHeader() {

    const header = document.querySelector('header');

    if (header) {
        const behaviour = header.dataset.behaviour;

        switch(behaviour) {
            case 'standard':
                initStandardBehaviour();
                break;
            case 'fixed':
                // nothing to do, just css-fixed header
                break;
            default:
                initStandardBehaviour();
        }

        /*
        ** when scroll down we should hide 'header'
        */
        function initStandardBehaviour() {
            let prev_scroll_position = 0;
            let last_known_scroll_position = 0;
            let ticking = false;

            function toggleHeader(last_scroll_pos, prev_scroll_pos) {
                if (last_scroll_pos > prev_scroll_pos) {
                    // scrolled down
                    header.classList.add('header--collapsed');
                } else {
                    header.classList.remove('header--collapsed');
                }
                prev_scroll_position = last_known_scroll_position;
            }

            window.addEventListener('scroll', (ev) => {
                last_known_scroll_position = window.scrollY;

                if (!ticking) {
                    window.requestAnimationFrame(function() {
                        toggleHeader(last_known_scroll_position, prev_scroll_position);
                        ticking = false;
                    });

                    ticking = true;
                }
            });
        }
    }
}

export { initHeader };