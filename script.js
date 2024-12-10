const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

let int = setInterval(blurring, 30);

function blurring() {
    load++;
    if (load > 99) {
        clearInterval(int);
    }

    loadText.innerHTML = `${load}%`;

    // Reduce blur as the loading progresses
    bg.style.filter = `blur(${30 - (load / 100) * 30}px)`;
}
