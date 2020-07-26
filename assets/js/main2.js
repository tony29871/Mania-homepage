const content = document.querySelector('.content');

function fadein(){
    content.style.visibility="hidden";
    setTimeout(function() {
        content.style.visibility= "visible";
    }, 1000);
}

init = () => {
    fadein();
}

init();

function smoothhtml(){
    const html =document.querySelector('html');
    html.style.scrollBehavior = 'smooth';
}

function autohtml(){
    const html =document.querySelector('html');
    html.style.scrollBehavior = 'auto';
}