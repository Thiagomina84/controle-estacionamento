
function mostrarReservas() {
    const tabela = document.getElementById("lista-reservas");
    if (!tabela) {
        return;
    }

    const reservas = listarReservas();
    tabela.innerHTML = "";

    for (const reserva of reservas) {
        const linha = document.createElement("tr");
        const valores = [
            reserva.vaga,
            reserva.placa,
            reserva.proprietario,
            reserva.apartamento,
            reserva.bloco,
            reserva.modelo,
            reserva.cor
        ];

        for (const valor of valores) {
            const coluna = document.createElement("td");
            coluna.textContent = valor;
            linha.appendChild(coluna);
        }

        const colunaAcoes = document.createElement("td");
        const botao = document.createElement("button");
        botao.textContent = "Remover";
        botao.className = "btn-remover";
        botao.addEventListener("click", function () {
            excluirReserva(reserva.vaga);
        });
        colunaAcoes.appendChild(botao);
        linha.appendChild(colunaAcoes);
        tabela.appendChild(linha);
    }

    if (reservas.length === 0) {
        const linha = document.createElement("tr");
        const coluna = document.createElement("td");
        coluna.colSpan = 8;
        coluna.textContent = "Nenhuma reserva cadastrada.";
        linha.appendChild(coluna);
        tabela.appendChild(linha);
    }
}

function mostrarVagas() {
    const lista = document.getElementById("lista-vagas-disponiveis");
    const seletor = document.getElementById("vaga");
    const reservas = listarReservas();
    const ocupadas = reservas.map(item => Number(item.vaga));

    if (lista) {
        lista.innerHTML = "";
    }

    if (seletor) {
        seletor.innerHTML = '<option value="">Selecione uma vaga</option>';
    }

    for (let numero = 1; numero <= TOTAL_VAGAS; numero++) {
        const ocupada = ocupadas.includes(numero);

        if (lista) {
            const elemento = document.createElement("span");
            elemento.className = ocupada ? "vaga ocupada" : "vaga disponivel";
            elemento.textContent = "Vaga " + numero;
            lista.appendChild(elemento);
        }

        if (seletor && !ocupada) {
            const opcao = document.createElement("option");
            opcao.value = numero;
            opcao.textContent = "Vaga " + numero;
            seletor.appendChild(opcao);
        }
    }

    const total = document.getElementById("total-vagas");
    const disponiveis = document.getElementById("vagas-disponiveis");
    const ocupadasElemento = document.getElementById("vagas-ocupadas");

    if (total) {
        total.textContent = TOTAL_VAGAS;
    }
    if (disponiveis) {
        disponiveis.textContent = TOTAL_VAGAS - ocupadas.length;
    }
    if (ocupadasElemento) {
        ocupadasElemento.textContent = ocupadas.length;
    }
}
