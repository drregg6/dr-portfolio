export default function() {
  let x = document.querySelector('.top-nav');
  console.log(x);
  if (x.className === 'top-nav nav') {
    x.className += ' responsive';
  } else {
    x.className = 'top-nav nav';
  }
}