const keys = Array.from(document.querySelectorAll('.key'));

/*
keys.forEach((key) => key.addEventListener('transitionend', (e) => {
    if (e.propertyName !== 'transform') return;

    e.target.classList.remove('playing');
}));
*/

window.addEventListener('keydown', (keyInp) => {
    const audio = document.querySelector(`audio[data-key="${keyInp.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${keyInp.keyCode}"]`);

    if (!audio) return;

    if (Math.random() > 0.5) {
        key.style.rotate = Math.random() * 20 + "deg";
    } else {
        key.style.rotate = Math.random() * -20 + "deg";
    }

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
});

window.addEventListener('keyup', (keyInp) => {
    const key = document.querySelector(`div[data-key="${keyInp.keyCode}"]`);

    if (key != null) {
        key.classList.remove('playing');
        key.style.rotate = "0deg";
    }
})

keys.forEach((key) => key.addEventListener("mousedown", (key) => {

    console.log(key.target.parentElement.classList);

    let keyId;
    if (key.target.parentElement.classList.contains("key")) {
        keyId = key.target.parentElement.dataset.key;
    } else if (key.target.classList.contains("key")) {
        keyId = key.target.dataset.key;
    }

    if (keyId != undefined) {
        const audio = document.querySelector(`audio[data-key="${keyId}"]`);
        const keyElem = document.querySelector(`div[data-key="${keyId}"]`);

        if (!audio) return;

        keyElem.classList.add('playing');
        if (Math.random() > 0.5) {
            keyElem.style.rotate = Math.random() * 20 + "deg";
        } else {
            keyElem.style.rotate = Math.random() * -20 + "deg";
        }
        audio.currentTime = 0;
        audio.play();
    }
}));

// mouseover

keys.forEach((key) => key.addEventListener("mouseup", (key) => {

    console.log(key.target.parentElement.classList);

    let keyId;
    if (key.target.parentElement.classList.contains("key")) {
        keyId = key.target.parentElement.dataset.key;
    } else if (key.target.classList.contains("key")) {
        keyId = key.target.dataset.key;
    }

    if (keyId != undefined) {
        const key = document.querySelector(`div[data-key="${keyId}"]`);

        if (key != null) {
            key.classList.remove('playing');
            key.style.rotate = "0deg";
        }
    }
}));

keys.forEach((key) => key.addEventListener("mouseleave", (key) => {

    console.log(key.target.parentElement.classList);

    let keyId;
    if (key.target.parentElement.classList.contains("key")) {
        keyId = key.target.parentElement.dataset.key;
    } else if (key.target.classList.contains("key")) {
        keyId = key.target.dataset.key;
    }

    if (keyId != undefined) {
        const key = document.querySelector(`div[data-key="${keyId}"]`);

        if (key != null) {
            key.classList.remove('playing');
            key.style.rotate = "0deg";
        }
    }
}));