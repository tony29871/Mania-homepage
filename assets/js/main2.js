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
