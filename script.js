const $name = document.querySelector(".name");
const $email = document.querySelector(".email");
const $password = document.querySelector(".contrasenia");
const $boton_enviar = document.querySelector(".button");
const $formulario = document.querySelector(".formulario");
const $text = document.querySelector(".text_error");

const nombre = "Gonzalo";
const correo = "gonzalo@gmail.com";
const contrasenia = "123";

$formulario.addEventListener("submit", function(event) {
    if ($name.value == "") {
        $name.classList.add("error_input");
        event.preventDefault();
    }
    if ($email.value == "") {
        $email.classList.add("error_input");
        event.preventDefault();
    }
    if ($password.value == "") {
        $password.classList.add("error_input");
        event.preventDefault();
    }
    if ($name.value != nombre || $email.value != correo || $password.value != contrasenia) {
        $text.textContent = "Datos ingresados incorrectamente";
        $text.classList.remove("ocultar_text_error");
        event.preventDefault();
    } else {
        $text.textContent = "Ingreso éxitoso";
        $text.classList.remove("text_error");
        $text.classList.add("text_confirm");
        $text.classList.remove("ocultar_text_error");
        $name.value = "";
        $email.value = "";
        $password.value = "";
        $name.focus();
        event.preventDefault();
    }
});

$name.addEventListener("input", function() {
    $name.classList.remove("error_input");
});
$email.addEventListener("input", function() {
    $email.classList.remove("error_input");
})
$password.addEventListener("input", function() {
    $password.classList.remove("error_input");
});