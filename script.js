const password = document.querySelector("#id_contraseña");
const boton = document.querySelector(".boton");
const container_respuesta = document.querySelector(".back");
const icono = document.querySelector(".fa-regular");

boton.addEventListener("click", function() {
    let exp_regular = /^[a-zA-Z0-9\s.,!?]+$/;
    let contraseña = password.value;
    if(exp_regular.test(contraseña) == false) {
        container_respuesta.classList.remove('ocultar');
        icono.classList.remove('fa-circle-xmark')
        icono.classList.add('fa-circle-check');
        icono.style.color = "green";
        setTimeout(function(){
            container_respuesta.classList.add('ocultar');
        }, 5000);
    } else {
        container_respuesta.classList.remove('ocultar');
        icono.classList.remove('fa-circle-check');
        icono.classList.add('fa-circle-xmark');
        icono.style.color = "red";
        setTimeout(function(){
            container_respuesta.classList.add('ocultar');
        }, 5000);
    }
});
/* 
    <i class="fa-regular fa-circle-check"></i>
    <i class="fa-regular fa-circle-xmark"></i>
*/