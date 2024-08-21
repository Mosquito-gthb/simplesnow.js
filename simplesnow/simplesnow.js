const snow_cont = document.getElementById('snow_cont');
snow_cont_height = snow_cont.clientHeight;

let screen_width = window.innerWidth;
let screen_index = 0;

if (screen_width > 1440) {
    screen_index = 0.6;
} else if (screen_width > 1020) {
    screen_index = 0.8;
} else if (screen_width > 600) {
    screen_index = 1.5;
} else if (screen_width < 600) {
    screen_index = 2;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function createSnowFlake() {
    let flake = snow_cont.appendChild(document.createElement('div'));

    flake.className = 'snowflake';

    let flake_size = getRandomInt(10)+5;

    flake.style.setProperty('--flake-size', `${flake_size}px`);
    flake.style.setProperty('--flake-radius', `${flake_size/2}px`);
    flake.style.setProperty('--flake-position', `${getRandomInt(96)+1}%`)
    
    setTimeout(function moveflake() {
         
        flake.style.setProperty('transform', `translateY(${snow_cont_height-15}px)`)
        
    }, 1000);
    setTimeout(function hideflake() {
        flake.style.opacity = 0;
    }, 3000)
    setTimeout(function deleteflake() {
        flake.remove()
    }, 9000)
    
}

let snowFlakeTimeout = setInterval(() => {createSnowFlake()}, 50*screen_index);
clearInterval(snowFlakeTimeout)
let isSnow = false;

function startSnow() {
    snowFlakeTimeout = setInterval(() => {createSnowFlake()}, 50*screen_index);
    isSnow = true;
}

function stopSnow() {
    clearInterval(snowFlakeTimeout)
    isSnow = false;
}

function switchSnow() {
    isSnow ? stopSnow() : startSnow()
}
