let para = document.getElementById('para');
let parallax = document.getElementById('parallax')
let h1 = document.getElementById('h1')
window.addEventListener('scroll',()=>{
    let value = window.scrollY;
    para.style.marginTop = value * 2.5 +'px';
    parallax.style.left = value * -1.5 +'px';
    h1.style.marginBottom = value * -2.5 +'px';
});