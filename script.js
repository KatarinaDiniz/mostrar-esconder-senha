let mostrarSenha = document.querySelector('.mostrar');
let ocultarSenha = document.querySelector('.ocultar');
let input = document.getElementById('senha');

    mostrarSenha.addEventListener('click', (e)=>{
        input.setAttribute('type', 'text');
        mostrarSenha.style.display = 'none';
        ocultarSenha.style.display = 'block';
})

    ocultarSenha.addEventListener('click', (e)=>{
        input.setAttribute('type', 'password');
        mostrarSenha.style.display = 'block';
        ocultarSenha.style.display = 'none';
    })