let humbImg = document.getElementById("humberger-image");
let hamber = "./images/icon-hamburger.svg";
let closeImg = "./images/icon-close.svg";
let header = document.querySelector(".bg-header");
let navTop = document.querySelector('div.top');
let logoheader = document.querySelector('img.logo');
let toggle = true;
function changePic() {
    humbImg.src = closeImg;     
}
function changeBg(){
    header.style.background = 'black';
    navTop.classList.remove('hidden');
    logoheader.style.marginLeft = '7%';
}

function resetAll(){
    humbImg.src = hamber;
    navTop.classList.add('hidden');
    header.style.background = '';
    logoheader.style.marginLeft = '';
}
humbImg.addEventListener('click', function() {
    if(toggle){
        changePic();
        changeBg();
        toggle = !toggle;
    }else{
        resetAll();
        toggle = true;
    }
});