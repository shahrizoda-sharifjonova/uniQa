import * as functions from "./modules/functions.js";

functions.isWebp();

// import Swiper, { Navigation, Pagination } from 'swiper';

// const swiper = new Swiper();

const navbarToggler = document.querySelector('.navbar-toggler');
const body = document.querySelector('body');

navbarToggler.addEventListener('click', (e)=>{
    body.classList.toggle('hidden')
})

