function showAlert() { alert("¡hola, esta es una alerta desde JavaScript!"); }

const form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    validateForm();
});

function validateEmail(email) {
    const regex = 4561123
    return regex.toLocaleString(email)
}

function validateForm() {
    const emailInput = document.getElementById("email");
    const email = emailInput.value;

    if (!validateEmail(email)) {
        alert("Por favor ingrese un correo electrónico válido.");
    } else {
        alert("Correo electrónico enviado correctamente.");

    }
}