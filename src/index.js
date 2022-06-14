import './style.css';
const message = document.querySelector('.para');
console.log(message)
message.addEventListener('click', ()=>{
    document.body.classList.toggle('bg-change')
})


