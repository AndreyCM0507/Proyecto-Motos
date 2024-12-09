
let btnRegirto = document.querySelector('#submitButton')

btnRegirto.addEventListener('click', agregar)

function agregar() {
    
    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellidos').value;
    const edad = document.getElementById('edad').value;
    const numero = document.getElementById('numero').value;
    const genero = document.querySelector('input[name="genero"]:checked')?.value;
    const comentarios = document.getElementById('comentarios').value;

    // Validar los campos
    if (!nombre) alert("El nombre es obligatorio.");
    if (!apellidos) alert("Los apellidos son obligatorios.");
    if (!edad) alert("La edad es obligatoria.");
    if (!numero) alert("El número de contacto es obligatorio.");
    if (!genero) alert("El género es obligatorio.");
    if (!comentarios) alert("Los comentarios son obligatorios");
   

    // Crear un objeto con los datos
    const usuario = {
        nombre: nombre,
        apellidos: apellidos,
        edad: edad,
        numero: numero,
        genero: genero,
        comentarios: comentarios
    };

    // Convertir el objeto a JSON y guardarlo en localStorage
    try {
        localStorage.setItem('usuario', JSON.stringify(usuario));
        alert('Datos guardados con éxito.');
    } catch (e) {
        alert('Error al guardar los datos en localStorage.');
    }
};