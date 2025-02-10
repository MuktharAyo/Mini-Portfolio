function toggleMenu() {
    document.querySelector('.menu').classList.toggle('active');
    document.querySelector('.hamburger').classList.toggle('active');
}
function closeMenu() {
    document.querySelector('.menu').classList.remove('active');
    document.querySelector('.hamburger').classList.remove('active');
}