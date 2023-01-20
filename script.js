
// cursors script
let outline = document.querySelector('.outline');
let cursor = document.querySelector('.cursor');
let links = document.querySelectorAll('a');

let main_section = document.querySelector('.main-title');

document.addEventListener('mousemove', function(e){
    let x = e.clientX;
    let y = e.clientY;

    outline.style.transform = `translate(calc(${x}px - 50%), calc(${y}px - 50%))`;
    cursor.style.transform = `translate(calc(${x}px - 50%), calc(${y}px - 50%))`;
});

main_section.addEventListener('mouseover', function() {
    console.log('prova');
    outline.classList.add('distortion');
    cursor.classList.add('distortion');
});

main_section.addEventListener("mouseleave", function() {
    outline.classList.remove('distortion');
    cursor.classList.remove('distortion');
});

window.addEventListener('scroll', function() {
    let scrollTop = document.documentElement.scrollTop; 
    document.getElementById('main').style.width = 100 + scrollTop / 2 + '%';
    document.getElementById('main').style.transform = 'translate(' + (0 - scrollTop / 15) + '%)';
    document.getElementById('main').style.opacity = 1 - scrollTop/1100;
    
});

links.forEach((link) => {
    link.addEventListener("mouseover", function() {
        outline.classList.add('hover');
        cursor.classList.add('hover');
    });
    link.addEventListener("mouseleave", function() {
        outline.classList.remove('hover');
        cursor.classList.remove('hover');
    });
});