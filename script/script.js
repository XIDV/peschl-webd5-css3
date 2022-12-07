document.addEventListener('DOMContentLoaded', dcl => {

    const navButton = document.querySelector('#navButton');
    const pageNav = document.querySelector('#pageNav');

    const iccb = document.querySelector('#impCSwitch');
    const icc = document.querySelector('#importantContainer');


    navButton.addEventListener('click', e => toggleMenu());
    navButton.addEventListener('touchstart', e => toggleMenu());

    iccb.addEventListener('click', e => toggleICCB());
    iccb.addEventListener('touchstart', e => toggleICCB());

    window.addEventListener('resize', e => setPageNav())

    function setPageNav() {
        window.innerWidth >= 1024 ? pageNav.style.height = '3rem' : pageNav.style.height = '0';
    }

    let navStatus = false;
    function toggleMenu() {
        if(window.innerWidth < 1024) {
            !navStatus ? pageNav.style.height = '25rem' : pageNav.style.height = '0';
            navStatus = !navStatus;

        }
    }

    let iccbStatus = false;
    function toggleICCB() {
        !iccbStatus ? icc.style.right = '0' : icc.style.right = '-15rem';
        iccbStatus = !iccbStatus;
    }
});