let outline = document.querySelector('.outline');
let cursor = document.querySelector('.cursor');
let links = document.querySelectorAll('a');
let btn = document.querySelector('.btn-menu')
let menu_mobile = document.querySelector('.menu-mobile')
let main_section = document.querySelector('.main-title');
let container = document.querySelector(".container");


// Animate the mouse 
document.addEventListener('mousemove', function(e){
    let x = e.clientX;
    let y = e.clientY;

    outline.style.transform = `translate(calc(${x}px - 50%), calc(${y}px - 50%))`;
    cursor.style.transform = `translate(calc(${x}px - 50%), calc(${y}px - 50%))`;
});

// Distortion of image background if mouse over
main_section.addEventListener('mouseover', function() {
    outline.classList.add('distortion');
    cursor.classList.add('distortion');
});

main_section.addEventListener("mouseleave", function() {
    outline.classList.remove('distortion');
    cursor.classList.remove('distortion');
});

//Scroll to animate the image background

window.addEventListener('scroll', function() {
    let scrollTop = document.documentElement.scrollTop; 
    
    // Check screen width 
    if(window.screen.width > 767) {
        document.getElementById('main').style.width = 100 + scrollTop / 2 + '%';
        document.getElementById('main').style.transform = 'translate(' + (0 - scrollTop / 10) + '%,' + (0 - scrollTop / 10) + '%)';
    }
    
    document.getElementById('main').style.opacity = 1 - scrollTop/500;
});

// Animate links on mouseover
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

// menu mobile
let btn_clicked = false;
function showMobileMenu() {
    console.log('ciao');
    if(!btn_clicked){
        btn_clicked = true;
        container.classList.add('hide');
        menu_mobile.classList.add('show');
    } else {
        container.classList.remove('hide');
        menu_mobile.classList.remove('show');
        btn_clicked= false;
    }
};
