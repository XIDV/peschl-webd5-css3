document.addEventListener('DOMContentLoaded', dcl => {

    const navButton = document.querySelector('#navButton');
    const pageNav = document.querySelector('#pageNav');

    const iccb = document.querySelector('#impCSwitch');
    const icc = document.querySelector('#importantContainer');


    navButton.addEventListener('click', e => toggleMenu());
    navButton.addEventListener('touchstart', e => toggleMenu());

    iccb.addEventListener('click', e => toggleICCB('mouse'));
    iccb.addEventListener('touchstart', e => toggleICCB('touch'));


    let navStatus = false;
    function toggleMenu() {
        if(!navStatus) {
            pageNav.style.height = '25rem';
        } else {
            pageNav.style.height = '0';
        }
        navStatus = !navStatus;
    }

    let iccbStatus = false;
    function toggleICCB(typeofevent) {
        if(!iccbStatus) {
            icc.style.right = '0';
        } else {
            icc.style.right = '-15rem';
        }
        iccbStatus = !iccbStatus;
    }
});