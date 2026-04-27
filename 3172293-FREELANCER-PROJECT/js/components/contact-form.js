document.addEventListener("DOMContentLoaded", function(){
    const form = document.querySelector(".services__form-container")

    if(!form) return;
        fetch("/views/components/contact-form.html")
        // La respuesta la convierte a texto plano
        .then(response => response.text())
        // Inserta el contenido HTML del navbar en el contenedor correspondiente
        .then(data => {
            form.innerHTML = data
    })
        .catch(error => console.log("Error cargando el Formulario", error));    
});