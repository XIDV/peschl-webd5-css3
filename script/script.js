document.addEventListener('DOMContentLoaded', dcl => {
    const navButton = document.querySelector('#navButton');
    const pageNav = document.querySelector('#pageNav');
    const iccb = document.querySelector('#impCSwitch');
    const icc = document.querySelector('#importantContainer');
    const loginContainer = document.querySelector('#loginContainer');
    const pageFooter = document.querySelector('footer');


    navButton.addEventListener('click', e => toggleMenu());
    navButton.addEventListener('touchstart', e => toggleMenu());

    iccb.addEventListener('click', e => toggleICCB());
    iccb.addEventListener('touchstart', e => toggleICCB());

    window.addEventListener('resize', e => setDynamicElements())
    setDynamicElements();

    function setDynamicElements() {
        const innerWidth = window.innerWidth;
        if(innerWidth >= 1024) {
            pageNav.style.height = '2.5rem';
            loginContainer.open = true;
            pageFooter.style.position = 'sticky';
            pageFooter.style.bottom = '0';
        } else {
            pageNav.style.height = '0';
            loginContainer.open = false;
            pageFooter.style.position = 'static';
        }
        innerWidth >= 1920 ? icc.style.right = '0' : icc.style.right = '-15rem';
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