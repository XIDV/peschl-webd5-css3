document.addEventListener('DOMContentLoaded', dcl => {


    const iccb = document.querySelector('#impCSwitch');
    const icc = document.querySelector('#importantContainer');

    iccb.addEventListener('click', e => toggleICCB('mouse'));
    iccb.addEventListener('touchstart', e => toggleICCB('touch'));


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