export default function() {
  let navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => link.classList.toggle('navbar-show'));
}