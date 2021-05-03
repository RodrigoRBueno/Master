
//Change Header style when user scroll down.
window.addEventListener('scroll', function () {
    let header = document.querySelector('.header');
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scroll-active', windowPosition);
});