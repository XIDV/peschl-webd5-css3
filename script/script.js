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
        const buttonIMG = iccb.querySelector('img');
        if(!iccbStatus) {
            icc.style.right = '0';
            buttonIMG.style.transform = 'rotate(-180deg)';
        } else {
            icc.style.right = '-15rem';
            buttonIMG.style.transform = 'rotate(0)';
        }
        iccbStatus = !iccbStatus;
    }
});