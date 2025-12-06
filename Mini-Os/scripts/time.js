function actualizarHora() {
        const ahora = new Date();
        const hora = ahora.toLocaleTimeString("es-CO", {
            hour: "2-digit",
            minute: "2-digit"
        });
        document.getElementById("hora").textContent = hora;
    }

    setInterval(actualizarHora, 1000);
    actualizarHora();


