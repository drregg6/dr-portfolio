import axios from 'axios';

const capitalize = (str) => {
  str = str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();

  return str;
}

const formatPhone = (phone) => {
  if (phone[0] === '1') {
    phone = phone.slice(1);
  }
  if (phone.length > 10) {
    phone = phone.substring(0,10);
  }
  return `(${phone.substring(0,3)}) ${phone.substring(3,6)}.${phone.substring(6)}`;
}

const responsiveNav = () => {
  let navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => link.classList.toggle('navbar-show'));
}

const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete axios.defaults.headers.common['x-auth-token'];
  }
}

const utils = {
  capitalize,
  formatPhone,
  responsiveNav,
  setAuthToken
}

export default utils;