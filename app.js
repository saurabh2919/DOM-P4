const sec = document.querySelector('.sec');
const hrs = document.querySelector('.hrs');
const min = document.querySelector('.min');
const start = document.querySelector('.start');
const reset = document.querySelector('.reset');
let state = false;
let id;

function incLastChild(ele) {
    ele.lastElementChild.innerText++;
    if (ele.lastElementChild.innerText === '10') {
        incFirstChild(ele);
    }
}

function incFirstChild(ele) {
    console.log('reached');
    ele.lastElementChild.innerText = 0;
    ele.firstElementChild.innerText++;
}

function resetChild(ele) {
    ele.firstElementChild.innerText = 0;
    ele.lastElementChild.innerText = 0;
}

function resetTimer() {
    resetChild(min);
    resetChild(hrs);
    resetChild(sec);
}

reset.addEventListener('click', resetTimer);

start.addEventListener('click', () => {
    state = !state;

    if (state === true) {
        id = setInterval(() => {
            incLastChild(sec);
            if (sec.firstElementChild.innerText === '6') {
                incLastChild(sec);
                resetChild(sec);
            }
            if (min.firstElementChild.innerText === '6') {
                incLastChild(hrs);
                resetChild(min);
                resetChild(sec);
            }
        }, 1000);
    }
    else {
        clearInterval(id);
    }
})