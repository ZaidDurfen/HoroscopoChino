function calcularSigno() {
    const año = document.getElementById("añoNacimiento").value;

    if (!año || año < 0) {
        alert("Por favor, ingresa un año válido.");
        return;
    }

    const signos = [
        { nombre: "Mono", imagen: "imagenes/mono.jpeg" },
        { nombre: "Gallo", imagen: "imagenes/gallo.jpeg" },
        { nombre: "Perro", imagen: "imagenes/perro.jpeg" },
        { nombre: "Cerdo", imagen: "imagenes/cerdo.jpeg" },
        { nombre: "Rata", imagen: "imagenes/rata.jpeg" },
        { nombre: "Buey", imagen: "imagenes/buey.jpeg" },
        { nombre: "Tigre", imagen: "imagenes/tigre.jpeg" },
        { nombre: "Conejo", imagen: "imagenes/conejo.jpeg" },
        { nombre: "Dragón", imagen: "imagenes/dragon.jpeg" },
        { nombre: "Serpiente", imagen: "imagenes/serpiente.jpeg" },
        { nombre: "Caballo", imagen: "imagenes/caballo.jpeg" },
        { nombre: "Cabra", imagen: "imagenes/cabra.jpeg" },
    ];

    const resto = año % 12;
    const signo = signos[resto];

    document.getElementById("residuoTexto").textContent = resto;
    document.getElementById("signoTexto").textContent = signo.nombre;
    const imagenSigno = document.getElementById("imagenSigno");
    imagenSigno.src = signo.imagen;
    imagenSigno.alt = signo.nombre;
}
