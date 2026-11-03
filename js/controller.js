
function excluirReserva(vaga) {
    const confirmar = confirm("Deseja remover a reserva da vaga " + vaga + "?");

    if (confirmar) {
        removerReserva(vaga);
        mostrarReservas();
        mostrarVagas();
        alert("Reserva removida com sucesso!");
    }
}

function cadastrarReserva(evento) {
    evento.preventDefault();

    const reserva = {
        placa: document.getElementById("placa").value.trim().toUpperCase(),
        proprietario: document.getElementById("proprietario").value.trim(),
        apartamento: document.getElementById("apartamento").value.trim(),
        bloco: document.getElementById("bloco").value.trim(),
        modelo: document.getElementById("modelo").value.trim(),
        cor: document.getElementById("cor").value.trim(),
        vaga: document.getElementById("vaga").value
    };

    if (!reserva.vaga) {
        alert("Selecione uma vaga disponível.");
        return;
    }

    const salvou = salvarReserva(reserva);

    if (salvou) {
        console.log("Reserva cadastrada:", reserva);
        alert("Reserva cadastrada com sucesso!");
        window.location.href = "index.html";
    } else {
        alert("Esta vaga já está ocupada.");
        mostrarVagas();
    }
}

const formulario = document.getElementById("form-reserva");

if (formulario) {
    formulario.addEventListener("submit", cadastrarReserva);
}

mostrarReservas();
mostrarVagas();
