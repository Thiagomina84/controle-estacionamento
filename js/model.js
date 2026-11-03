
const TOTAL_VAGAS = 30;

function listarReservas() {
    const dados = localStorage.getItem("reservas");
    return dados ? JSON.parse(dados) : [];
}

function salvarReserva(reserva) {
    const reservas = listarReservas();
    const vagaOcupada = reservas.some(item => item.vaga === reserva.vaga);
    if (vagaOcupada) {
        return false;
    }
    reservas.push(reserva);
    localStorage.setItem("reservas", JSON.stringify(reservas));
    return true;
}

function removerReserva(vaga) {
    const reservas = listarReservas();
    const atualizadas = reservas.filter(item => item.vaga !== vaga);
    localStorage.setItem("reservas", JSON.stringify(atualizadas));
}
