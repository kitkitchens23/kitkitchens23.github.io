document.getElementById('year').textContent = new Date().getFullYear();
const button = document.querySelector('.menu');
const navigation = document.querySelector('.nav nav');
button.addEventListener('click', () => navigation.classList.toggle('open'));
document.querySelectorAll('.nav nav a').forEach(link => link.addEventListener('click', () => navigation.classList.remove('open')));
