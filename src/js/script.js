/* ==========================================
   BURITI MONITOR
   JAVASCRIPT PRINCIPAL
========================================== */


/* ==========================================
   DADOS SIMULADOS
========================================== */

const dados = {

    parametro1: [
        42, 48, 45, 51, 49,
        55, 52, 58, 54, 60
    ],

    parametro2: [
        35, 38, 37, 42, 40,
        44, 43, 47, 45, 49
    ],

    parametro3: [
        25, 28, 27, 30, 29,
        33, 31, 35, 34, 37
    ]

};


/* ==========================================
   ELEMENTOS DO SISTEMA
========================================== */

const menuItems =
    document.querySelectorAll(".menu-item");

const pages =
    document.querySelectorAll(".page");

const pageTitle =
    document.getElementById("page-title");

const pageSubtitle =
    document.getElementById("page-subtitle");


/* ==========================================
   NAVEGAÇÃO
========================================== */

menuItems.forEach(item => {

    item.addEventListener("click", () => {

        const pageId =
            item.dataset.page;


        /* Remove seleção dos menus */

        menuItems.forEach(menu => {

            menu.classList.remove("active");

        });


        /* Ativa o menu clicado */

        item.classList.add("active");


        /* Esconde todas as páginas */

        pages.forEach(page => {

            page.classList.remove("active-page");

        });


        /* Mostra a página escolhida */

        document
            .getElementById(pageId)
            .classList.add("active-page");


        atualizarCabecalho(pageId);

    });

});


/* ==========================================
   CABEÇALHO
========================================== */

function atualizarCabecalho(page) {

    const titulos = {

        dashboard: [
            "Dashboard — Buriti Monitor",
            "Acompanhe as informações coletadas pelos dispositivos"
        ],

        monitoramento: [
            "Monitoramento",
            "Acompanhe as leituras atuais dos parâmetros monitorados"
        ],

        historico: [
            "Histórico",
            "Consulte as informações registradas pelo sistema"
        ],

        alertas: [
            "Alertas",
            "Acompanhe situações identificadas durante o monitoramento"
        ]

    };


    pageTitle.textContent =
        titulos[page][0];

    pageSubtitle.textContent =
        titulos[page][1];

}


/* ==========================================
   DATA E HORA
========================================== */

function atualizarHorario() {

    const agora = new Date();

    const hora =
        agora.toLocaleTimeString(
            "pt-BR",
            {
                hour: "2-digit",
                minute: "2-digit"
            }
        );


    document.getElementById(
        "last-update"
    ).textContent = hora;


    document.getElementById(
        "monitor-time"
    ).textContent = hora;

}


/* ==========================================
   LEITURAS ATUAIS
========================================== */

function atualizarLeituras() {

    const valor1 =
        dados.parametro1[
            dados.parametro1.length - 1
        ];

    const valor2 =
        dados.parametro2[
            dados.parametro2.length - 1
        ];

    const valor3 =
        dados.parametro3[
            dados.parametro3.length - 1
        ];


    document.getElementById(
        "value-1"
    ).textContent = valor1;


    document.getElementById(
        "value-2"
    ).textContent = valor2;


    document.getElementById(
        "value-3"
    ).textContent = valor3;

}


/* ==========================================
   CRIAÇÃO DO GRÁFICO
========================================== */

function criarPontos(valores) {

    const maior =
        Math.max(...valores);

    const menor =
        Math.min(...valores);


    const intervalo =
        maior - menor || 1;


    return valores
        .map((valor, index) => {

            const x =
                (index / (valores.length - 1)) * 600;


            const y =
                190 -
                ((valor - menor) / intervalo) * 150;


            return `${x},${y}`;

        })
        .join(" ");

}


function atualizarGrafico() {

    document.getElementById(
        "chart-line-1"
    ).setAttribute(
        "points",
        criarPontos(dados.parametro1)
    );


    document.getElementById(
        "chart-line-2"
    ).setAttribute(
        "points",
        criarPontos(dados.parametro2)
    );


    document.getElementById(
        "chart-line-3"
    ).setAttribute(
        "points",
        criarPontos(dados.parametro3)
    );

}


/* ==========================================
   HISTÓRICO
========================================== */

function preencherHistorico() {

    const tabela =
        document.getElementById(
            "history-table"
        );


    tabela.innerHTML = "";


    const agora =
        new Date();


    for (
        let i = 0;
        i < 8;
        i++
    ) {

        const data =
            new Date(
                agora.getTime() -
                i * 60 * 60 * 1000
            );


        const dataFormatada =
            data.toLocaleDateString(
                "pt-BR"
            );


        const hora =
            data.toLocaleTimeString(
                "pt-BR",
                {
                    hour: "2-digit",
                    minute: "2-digit"
                }
            );


        const parametro =
            `Parâmetro ${(i % 3) + 1}`;


        const valor =
            dados[
                `parametro${(i % 3) + 1}`
            ][
                dados[
                    `parametro${(i % 3) + 1}`
                ].length - 1
            ];


        const linha =
            document.createElement("tr");


        linha.innerHTML = `

            <td>${dataFormatada}</td>

            <td>${hora}</td>

            <td>${parametro}</td>

            <td>${valor}</td>

            <td>
                <span class="online">
                    Normal
                </span>
            </td>

        `;


        tabela.appendChild(linha);

    }

}


/* ==========================================
   ALERTAS
========================================== */

function verificarAlertas() {

    const valor1 =
        dados.parametro1[
            dados.parametro1.length - 1
        ];


    const valor2 =
        dados.parametro2[
            dados.parametro2.length - 1
        ];


    const valor3 =
        dados.parametro3[
            dados.parametro3.length - 1
        ];


    const alertas = [];


    /*
       Estes limites são apenas para
       SIMULAÇÃO do protótipo.
       Não representam limites reais
       de qualidade da água.
    */

    if (valor1 > 70) {

        alertas.push(
            "Parâmetro 1 apresentou uma alteração."
        );

    }


    if (valor2 > 55) {

        alertas.push(
            "Parâmetro 2 apresentou uma alteração."
        );

    }


    if (valor3 > 45) {

        alertas.push(
            "Parâmetro 3 apresentou uma alteração."
        );

    }


    const contador =
        document.getElementById(
            "alert-count"
        );


    contador.textContent =
        `${alertas.length} alerta${alertas.length === 1 ? "" : "s"}`;


    mostrarAlertas(alertas);

}


/* ==========================================
   MOSTRAR ALERTAS
========================================== */

function mostrarAlertas(alertas) {

    const dashboard =
        document.getElementById(
            "dashboard-alerts"
        );


    const lista =
        document.getElementById(
            "alerts-list"
        );


    dashboard.innerHTML = "";

    lista.innerHTML = "";


    if (alertas.length === 0) {

        dashboard.innerHTML = `

            <div class="alert-item success">

                <strong>
                    ● Monitoramento contínuo
                </strong>

                <span>
                    Nenhuma condição de atenção identificada.
                </span>

            </div>

        `;


        lista.innerHTML = `

            <div class="alert-item success">

                <strong>
                    ● Sistema operacional
                </strong>

                <span>
                    Nenhum alerta identificado no momento.
                </span>

            </div>

        `;


        return;

    }


    alertas.forEach(alerta => {

        const item =
            document.createElement("div");


        item.className =
            "alert-item warning";


        item.innerHTML = `

            <strong>
                ⚠ Condição de atenção
            </strong>

            <span>
                ${alerta}
            </span>

        `;


        dashboard.appendChild(
            item.cloneNode(true)
        );


        lista.appendChild(item);

    });

}


/* ==========================================
   INICIALIZAÇÃO
========================================== */

function iniciarSistema() {

    atualizarHorario();

    atualizarLeituras();

    atualizarGrafico();

    preencherHistorico();

    verificarAlertas();

}


/* ==========================================
   EXECUTAR
========================================== */

iniciarSistema();