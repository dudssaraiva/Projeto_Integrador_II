// ============================================================
// BURITI MONITOR
// Projeto Integrador II
// HTML + CSS + JavaScript
// ============================================================


// ============================================================
// 1. DADOS SIMULADOS
// ============================================================

// Estes valores são fictícios.
// Eles simulam as leituras que poderiam ser recebidas
// de sensores em uma versão futura do projeto.

let dados = {
    parametro1: [42, 48, 45, 51, 49, 55, 52, 58, 54, 60],
    parametro2: [35, 38, 37, 42, 40, 44, 43, 47, 45, 49],
    parametro3: [25, 28, 27, 30, 29, 33, 31, 35, 34, 37]
};

// ============================================================
// REGISTRO DOS ALERTAS
// ============================================================

// Guarda as ocorrências identificadas durante a simulação.
// Os dados são mantidos enquanto o sistema estiver aberto.

let registrosAlertas = [];


// ============================================================
// 2. LIMITES DA SIMULAÇÃO
// ============================================================

// ATENÇÃO:
// Estes valores NÃO representam limites reais de qualidade
// da água. Eles foram definidos somente para demonstrar
// o funcionamento do protótipo.
//
// Cada parâmetro possui três situações:
//
// NORMAL
// ATENÇÃO
// ALERTA

const limites = {

    parametro1: {
        normal: 50,
        alerta: 70
    },

    parametro2: {
        normal: 40,
        alerta: 55
    },

    parametro3: {
        normal: 30,
        alerta: 45
    }

};


// ============================================================
// 3. ELEMENTOS DO HTML
// ============================================================

const pageTitle = document.getElementById("page-title");
const pageSubtitle = document.getElementById("page-subtitle");

const paginas = document.querySelectorAll(".page");
const botoesMenu = document.querySelectorAll(".menu-item");


// ============================================================
// 4. INFORMAÇÕES DAS PÁGINAS
// ============================================================

const informacoesPaginas = {

    dashboard: {
        titulo: "Dashboard — Buriti Monitor",
        subtitulo:
            "Acompanhe as informações coletadas pelos dispositivos"
    },

    monitoramento: {
        titulo: "Monitoramento",
        subtitulo:
            "Acompanhe as leituras atuais dos parâmetros monitorados"
    },

    historico: {
        titulo: "Histórico",
        subtitulo:
            "Consulte o histórico das medições realizadas"
    },

    alertas: {
        titulo: "Alertas",
        subtitulo:
            "Acompanhe possíveis condições que precisam de atenção"
    }

};


// ============================================================
// 5. NAVEGAÇÃO
// ============================================================

// Quando o usuário clicar em um item do menu,
// mostramos somente a página correspondente.

botoesMenu.forEach(botao => {

    botao.addEventListener("click", function () {

        const paginaSelecionada = this.dataset.page;

        // ----------------------------------------------------
        // Remove a seleção dos outros botões
        // ----------------------------------------------------

        botoesMenu.forEach(item => {
            item.classList.remove("active");
        });

        // Coloca o botão clicado como ativo
        this.classList.add("active");


        // ----------------------------------------------------
        // Esconde todas as páginas
        // ----------------------------------------------------

        paginas.forEach(pagina => {
            pagina.classList.remove("active-page");
        });


        // ----------------------------------------------------
        // Mostra a página selecionada
        // ----------------------------------------------------

        const pagina =
            document.getElementById(paginaSelecionada);

        if (pagina) {
            pagina.classList.add("active-page");
        }


        // ----------------------------------------------------
        // Atualiza título e subtítulo
        // ----------------------------------------------------

        if (informacoesPaginas[paginaSelecionada]) {

            pageTitle.textContent =
                informacoesPaginas[paginaSelecionada].titulo;

            pageSubtitle.textContent =
                informacoesPaginas[paginaSelecionada].subtitulo;
        }


        // Atualiza os dados da página
        atualizarInterface();

    });

});


// ============================================================
// 6. OBTER VALORES ATUAIS
// ============================================================

function obterValoresAtuais() {

    return {

        parametro1:
            dados.parametro1[
                dados.parametro1.length - 1
            ],

        parametro2:
            dados.parametro2[
                dados.parametro2.length - 1
            ],

        parametro3:
            dados.parametro3[
                dados.parametro3.length - 1
            ]

    };

}


// ============================================================
// 7. DETERMINAR SITUAÇÃO DO PARÂMETRO
// ============================================================

function determinarSituacao(valor, limite) {

    // Valor dentro da faixa considerada normal
    if (valor <= limite.normal) {

        return {
            nome: "Normal",
            classe: "normal"
        };

    }


    // Valor acima do normal, mas ainda não em alerta
    if (valor <= limite.alerta) {

        return {
            nome: "Atenção",
            classe: "atencao"
        };

    }


    // Valor acima do limite de alerta
    return {
        nome: "Alerta",
        classe: "alerta"
    };

}


// ============================================================
// 8. GERAR NOVA LEITURA
// ============================================================

function gerarNovaLeitura() {

    const valores = obterValoresAtuais();


    // Pequenas variações aleatórias
    let novo1 =
        valores.parametro1 +
        Math.floor(Math.random() * 11) - 5;

    let novo2 =
        valores.parametro2 +
        Math.floor(Math.random() * 11) - 5;

    let novo3 =
        valores.parametro3 +
        Math.floor(Math.random() * 9) - 4;


    // Evita valores negativos
    novo1 = Math.max(0, novo1);
    novo2 = Math.max(0, novo2);
    novo3 = Math.max(0, novo3);


    // --------------------------------------------------------
    // Ocasionalmente gera uma leitura mais elevada.
    // Isso serve apenas para demonstrar a funcionalidade
    // de Atenção e Alerta.
    // --------------------------------------------------------

    const chance = Math.random();

    if (chance > 0.75) {

        const parametro =
            Math.floor(Math.random() * 3) + 1;


        if (parametro === 1) {

            novo1 =
                limites.parametro1.alerta +
                Math.floor(Math.random() * 10) + 1;

        }


        if (parametro === 2) {

            novo2 =
                limites.parametro2.alerta +
                Math.floor(Math.random() * 8) + 1;

        }


        if (parametro === 3) {

            novo3 =
                limites.parametro3.alerta +
                Math.floor(Math.random() * 8) + 1;

        }

    }


    // Adiciona as novas leituras
    dados.parametro1.push(novo1);
    dados.parametro2.push(novo2);
    dados.parametro3.push(novo3);


    // Mantém somente as últimas 20 leituras
    if (dados.parametro1.length > 20) {
        dados.parametro1.shift();
    }

    if (dados.parametro2.length > 20) {
        dados.parametro2.shift();
    }

    if (dados.parametro3.length > 20) {
        dados.parametro3.shift();
    }


    // Atualiza a interface
    atualizarInterface();

    // Verifica e registra novas ocorrências
    registrarAlertas();

}


// ============================================================
// 9. ATUALIZAR HORÁRIO
// ============================================================

function atualizarHorario() {

    const agora = new Date();

    const horas =
        String(agora.getHours()).padStart(2, "0");

    const minutos =
        String(agora.getMinutes()).padStart(2, "0");

    const horario =
        `${horas}:${minutos}`;


    // Dashboard
    const lastUpdate =
        document.getElementById("last-update");

    if (lastUpdate) {
        lastUpdate.textContent = horario;
    }


    // Monitoramento
    const monitorTime =
        document.getElementById("monitor-time");

    if (monitorTime) {
        monitorTime.textContent = horario;
    }

}


// ============================================================
// 10. ATUALIZAR MONITORAMENTO
// ============================================================

function atualizarMonitoramento() {

    const valores = obterValoresAtuais();


    // --------------------------------------------------------
    // Parâmetro 1
    // --------------------------------------------------------

    atualizarParametro(
        1,
        valores.parametro1,
        limites.parametro1
    );


    // --------------------------------------------------------
    // Parâmetro 2
    // --------------------------------------------------------

    atualizarParametro(
        2,
        valores.parametro2,
        limites.parametro2
    );


    // --------------------------------------------------------
    // Parâmetro 3
    // --------------------------------------------------------

    atualizarParametro(
        3,
        valores.parametro3,
        limites.parametro3
    );

}


// ============================================================
// 11. ATUALIZAR CADA PARÂMETRO
// ============================================================

function atualizarParametro(numero, valor, limite) {

    // Valor
    const elementoValor =
        document.getElementById(`value-${numero}`);


    if (elementoValor) {
        elementoValor.textContent = valor;
    }


    // Situação
    const situacao =
        determinarSituacao(valor, limite);


    const elementoStatus =
        document.getElementById(`status-${numero}`);


    if (elementoStatus) {

        elementoStatus.textContent =
            situacao.nome;

        // Remove as classes anteriores
        elementoStatus.classList.remove(
            "status-normal",
            "status-atencao",
            "status-alerta"
        );


        // Adiciona a classe correspondente
        elementoStatus.classList.add(
            `status-${situacao.classe}`
        );

    }

}


// ============================================================
// 12. VERIFICAR TODOS OS ALERTAS
// ============================================================

function verificarAlertas() {

    const valores = obterValoresAtuais();

    const alertas = [];


    // Parâmetro 1
    if (valores.parametro1 > limites.parametro1.alerta) {

        alertas.push({
            parametro: "Parâmetro 1",
            valor: valores.parametro1,
            limite: limites.parametro1.alerta
        });

    }


    // Parâmetro 2
    if (valores.parametro2 > limites.parametro2.alerta) {

        alertas.push({
            parametro: "Parâmetro 2",
            valor: valores.parametro2,
            limite: limites.parametro2.alerta
        });

    }


    // Parâmetro 3
    if (valores.parametro3 > limites.parametro3.alerta) {

        alertas.push({
            parametro: "Parâmetro 3",
            valor: valores.parametro3,
            limite: limites.parametro3.alerta
        });

    }


    return alertas;

}

// ============================================================
// REGISTRAR ALERTAS
// ============================================================

function registrarAlertas() {

    const valores = obterValoresAtuais();

    const parametros = [
        {
            nome: "Parâmetro 1",
            valor: valores.parametro1,
            limite: limites.parametro1
        },

        {
            nome: "Parâmetro 2",
            valor: valores.parametro2,
            limite: limites.parametro2
        },

        {
            nome: "Parâmetro 3",
            valor: valores.parametro3,
            limite: limites.parametro3
        }
    ];


    parametros.forEach(parametro => {

        const situacao =
            determinarSituacao(
                parametro.valor,
                parametro.limite
            );


        // Só registramos situações que precisam
        // de atenção ou alerta.

        if (
            situacao.classe === "atencao" ||
            situacao.classe === "alerta"
        ) {

            const agora = new Date();


            const horario =
                agora.toLocaleTimeString(
                    "pt-BR",
                    {
                        hour: "2-digit",
                        minute: "2-digit"
                    }
                );


            const data =
                agora.toLocaleDateString("pt-BR");


            // Evita registrar exatamente a mesma
            // ocorrência várias vezes seguidas.

            const ultimo =
                registrosAlertas[0];


            if (
                !ultimo ||
                ultimo.parametro !== parametro.nome ||
                ultimo.valor !== parametro.valor
            ) {

                registrosAlertas.unshift({

                    parametro: parametro.nome,

                    valor: parametro.valor,

                    situacao: situacao.nome,

                    classe: situacao.classe,

                    data: data,

                    horario: horario

                });


                // Mantém no máximo 20 registros
                if (registrosAlertas.length > 20) {

                    registrosAlertas.pop();

                }

            }

        }

    });


    atualizarPaginaAlertas();
}


// ============================================================
// 13. ATUALIZAR ALERTAS DO DASHBOARD
// ============================================================

function atualizarDashboard() {

    const alertas =
        verificarAlertas();


    const contador =
        document.getElementById("alert-count");


    if (contador) {

        contador.textContent =
            `${alertas.length} ${
                alertas.length === 1
                    ? "alerta"
                    : "alertas"
            }`;

    }


    const painel =
        document.getElementById("dashboard-alerts");


    if (!painel) {
        return;
    }


    // --------------------------------------------------------
    // Nenhum alerta
    // --------------------------------------------------------

    if (alertas.length === 0) {

        painel.innerHTML = `

            <div class="alert-item success">

                <strong>
                    ● Monitoramento normal
                </strong>

                <span>
                    Nenhuma condição crítica identificada.
                </span>

            </div>

            <div class="alert-item success">

                <strong>
                    ● Sistema operacional
                </strong>

                <span>
                    Monitoramento contínuo ativo.
                </span>

            </div>

        `;

        return;

    }


    // --------------------------------------------------------
    // Existem alertas
    // --------------------------------------------------------

    painel.innerHTML = alertas.map(alerta => {

        return `

            <div class="alert-item warning">

                <strong>
                    ⚠ ${alerta.parametro}
                </strong>

                <span>
                    Valor registrado: ${alerta.valor}.
                    Limite da simulação: ${alerta.limite}.
                </span>

            </div>

        `;

    }).join("");

}


// ============================================================
// 14. ATUALIZAR PÁGINA DE ALERTAS
// ============================================================

// ============================================================
// ATUALIZAR PÁGINA DE ALERTAS
// ============================================================

function atualizarPaginaAlertas() {

    const lista =
        document.getElementById("alerts-list");


    if (!lista) {
        return;
    }


    // --------------------------------------------------------
    // Nenhum alerta registrado
    // --------------------------------------------------------

    if (registrosAlertas.length === 0) {

        lista.innerHTML = `

            <div class="alert-item success">

                <strong>
                    ● Nenhuma ocorrência registrada
                </strong>

                <span>
                    O sistema ainda não identificou
                    situações de atenção ou alerta.
                </span>

            </div>

        `;

        return;

    }


    // --------------------------------------------------------
    // Existem registros
    // --------------------------------------------------------

    lista.innerHTML =
        registrosAlertas.map(registro => {

            const simbolo =
                registro.classe === "alerta"
                    ? "🔴"
                    : "🟡";


            return `

                <div class="alert-item ${
                    registro.classe === "alerta"
                        ? "warning"
                        : "warning"
                }">

                    <strong>
                        ${simbolo}
                        ${registro.parametro}
                        — ${registro.situacao}
                    </strong>

                    <span>
                        Valor registrado:
                        <strong>${registro.valor}</strong>
                    </span>

                    <span>
                        Data: ${registro.data}
                        • Horário: ${registro.horario}
                    </span>

                    <span>
                        Origem: Simulação de sensor
                    </span>

                </div>

            `;

        }).join("");

}


// ============================================================
// 15. ATUALIZAR HISTÓRICO
// ============================================================

function atualizarHistorico() {

    const tabela =
        document.getElementById("history-table");


    if (!tabela) {
        return;
    }


    tabela.innerHTML = "";


    const quantidade =
        dados.parametro1.length;


    // Mostra as leituras mais recentes primeiro
    for (
        let i = quantidade - 1;
        i >= 0;
        i--
    ) {

        // Data atual
        const agora = new Date();

        const data =
            agora.toLocaleDateString("pt-BR");


        // Horário fictício para representar
        // o histórico das leituras simuladas
        const hora =
            `${String((i + 1) % 24).padStart(2, "0")}:00`;


        // -----------------------------------------------
        // Parâmetro 1
        // -----------------------------------------------

        adicionarLinhaHistorico(
            tabela,
            data,
            hora,
            "Parâmetro 1",
            dados.parametro1[i],
            limites.parametro1
        );


        // -----------------------------------------------
        // Parâmetro 2
        // -----------------------------------------------

        adicionarLinhaHistorico(
            tabela,
            data,
            hora,
            "Parâmetro 2",
            dados.parametro2[i],
            limites.parametro2
        );


        // -----------------------------------------------
        // Parâmetro 3
        // -----------------------------------------------

        adicionarLinhaHistorico(
            tabela,
            data,
            hora,
            "Parâmetro 3",
            dados.parametro3[i],
            limites.parametro3
        );

    }

}


// ============================================================
// 16. ADICIONAR LINHA AO HISTÓRICO
// ============================================================

function adicionarLinhaHistorico(
    tabela,
    data,
    hora,
    parametro,
    valor,
    limite
) {

    const situacao =
        determinarSituacao(valor, limite);


    const linha =
        document.createElement("tr");


    linha.innerHTML = `

        <td>${data}</td>

        <td>${hora}</td>

        <td>${parametro}</td>

        <td>${valor}</td>

        <td>

            <span class="history-status status-${situacao.classe}">
                ${situacao.nome}
            </span>

        </td>

    `;


    tabela.appendChild(linha);

}


// ============================================================
// 17. ATUALIZAR GRÁFICO
// ============================================================

function atualizarGrafico() {

    const linha1 =
        document.getElementById("chart-line-1");

    const linha2 =
        document.getElementById("chart-line-2");

    const linha3 =
        document.getElementById("chart-line-3");


    if (!linha1 || !linha2 || !linha3) {
        return;
    }


    const largura = 600;
    const altura = 220;

    const margemX = 5;
    const margemY = 20;


    // Últimas 10 leituras
    const valores1 =
        dados.parametro1.slice(-10);

    const valores2 =
        dados.parametro2.slice(-10);

    const valores3 =
        dados.parametro3.slice(-10);


    const todosValores = [
        ...valores1,
        ...valores2,
        ...valores3
    ];


    const maiorValor =
        Math.max(...todosValores, 100);

    const menorValor =
        Math.min(...todosValores, 0);


    function gerarPontos(valores) {

        return valores.map((valor, indice) => {

            const x =
                margemX +
                (
                    indice /
                    (valores.length - 1)
                ) *
                (largura - margemX * 2);


            const y =
                altura -
                margemY -
                (
                    (valor - menorValor) /
                    (maiorValor - menorValor)
                ) *
                (altura - margemY * 2);


            return `${x},${y}`;

        }).join(" ");

    }


    linha1.setAttribute(
        "points",
        gerarPontos(valores1)
    );

    linha2.setAttribute(
        "points",
        gerarPontos(valores2)
    );

    linha3.setAttribute(
        "points",
        gerarPontos(valores3)
    );

}


// ============================================================
// 18. ATUALIZAÇÃO GERAL
// ============================================================

function atualizarInterface() {

    atualizarHorario();

    atualizarMonitoramento();

    atualizarDashboard();

    atualizarPaginaAlertas();

    atualizarHistorico();

    atualizarGrafico();

}


// ============================================================
// 19. INICIALIZAÇÃO
// ============================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        atualizarInterface();


        // Nova leitura a cada 10 segundos
        setInterval(
            gerarNovaLeitura,
            10000
        );

    }
);