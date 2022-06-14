import './style.css';

const message = document.querySelector('.para');
message.addEventListener('click', () => {
  document.body.classList.toggle('bg-change');
});
