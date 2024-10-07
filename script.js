function horasVividas(fechaNacimiento) {
    const ahora = new Date();
    const nacimiento = new Date(fechaNacimiento);

    const diferencia = ahora - nacimiento;
    const horas = Math.floor(diferencia / (1000 * 60 * 60));

    return `¡Has vivido aproximadamente ${horas.toLocaleString()} horas hasta ahora!`;
}

document.getElementById('calcular').addEventListener('click', () => {
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    if (fechaNacimiento) {
        const resultado = horasVividas(fechaNacimiento);
        document.getElementById('resultado').textContent = resultado;
    } else {
        document.getElementById('resultado').textContent = 'Por favor, selecciona una fecha.';
    }
});

