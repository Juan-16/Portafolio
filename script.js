document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const button = event.target.querySelector("input[type='submit']");
    button.value = "Enviando...";
    button.style.transform = "scale(1.1)";
    setTimeout(() => {
        button.value = "Enviar";
        button.style.transform = "scale(1)";
        alert("Formulario enviado exitosamente");
        event.target.submit();
    }, 2000);
});