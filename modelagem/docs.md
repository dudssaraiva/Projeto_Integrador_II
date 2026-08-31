# Arquitetura e Modelagem — Buriti Monitor

## 1. Introdução

O Buriti Monitor é uma solução baseada em Internet das Coisas (IoT) voltada ao monitoramento de parâmetros relacionados à água. O sistema será composto por dispositivos responsáveis pela coleta de dados, mecanismos de comunicação, armazenamento e uma interface destinada à visualização das informações. Este documento apresenta a modelagem inicial da solução desenvolvida na Etapa 2 do Projeto Integrador II.

## 2. Objetivo da solução

O objetivo do Buriti Monitor é utilizar recursos de IoT para realizar a coleta e o acompanhamento de informações relacionadas à água, permitindo que os dados obtidos sejam transmitidos, armazenados e apresentados de forma organizada.

## 3. Arquitetura geral

A solução será organizada em diferentes componentes:
- Sensores;
- Microcontrolador;
- Comunicação;
- Processamento;
- Armazenamento;
- Interface de visualização;
- Usuário.

O relacionamento entre esses componentes é apresentado no diagrama de arquitetura.

![Arquitetura geral](diagramas/arquitetura.png)


## 4. Fluxo de funcionamento

O funcionamento inicial da solução será representado pelo seguinte fluxo:

1. Inicialização do dispositivo;
2. Coleta das informações pelos sensores;
3. Processamento inicial das leituras;
4. Validação dos dados;
5. Transmissão das informações;
6. Recebimento e armazenamento dos dados;
7. Disponibilização das informações para visualização;
8. Verificação das condições monitoradas;
9. Geração de alerta quando necessário;
10. Continuidade do monitoramento.

![Fluxo de funcionamento](diagramas/fluxo-sistema.png)


## 5. Fluxo de dados

Os dados deverão percorrer o seguinte fluxo:

Sensor → Microcontrolador → Comunicação → Processamento/Servidor → Banco de Dados → Interface → Usuário.

![Fluxo de dados](diagramas/fluxo-dados.png)


## 6. Modelo de dados

O modelo de dados inicial deverá representar as principais informações utilizadas pelo sistema, incluindo dispositivos, sensores, parâmetros, leituras e, quando aplicável, usuários e alertas.

![Modelo de dados](diagramas/modelo-dados.png)


## 7. Interface

A interface deverá apresentar as informações coletadas pelo sistema de maneira organizada e compreensível.

Entre os elementos previstos estão:

- Informações das leituras;
- Identificação dos parâmetros;
- Data e hora das medições;
- Histórico de dados;
- Estado do dispositivo;
- Alertas, quando aplicáveis.

O protótipo da interface será desenvolvido em ferramenta de prototipação e documentado nesta seção.


## 8. Tecnologias e componentes

Nesta etapa, serão definidas as tecnologias e os componentes necessários para a implementação da solução.

### Hardware

- Microcontrolador: [definir]
- Sensores: [definir]
- Alimentação: [definir]

### Comunicação

- Tecnologia/protocolo: [definir]

### Software

- Linguagem: [definir]
- Banco de dados: [definir]
- Interface: [definir]


## 9. Decisões arquiteturais

As principais decisões técnicas serão registradas nesta seção juntamente com suas respectivas justificativas.

| Decisão | Alternativas avaliadas | Escolha | Justificativa |
| Microcontrolador | A definir | A definir | A definir |
| Sensores | A definir | A definir | A definir |
| Comunicação | A definir | A definir | A definir |
| Banco de dados | A definir | A definir | A definir |


## 10. Relação com os requisitos

A modelagem deverá atender aos requisitos definidos na Etapa 1.

As relações entre requisitos, tarefas do backlog e elementos da arquitetura serão utilizadas para garantir a rastreabilidade do projeto.


## 11. Conclusão

A modelagem apresentada estabelece uma visão inicial da arquitetura do Buriti Monitor e serve como base para o desenvolvimento das próximas etapas do projeto. Os elementos poderão ser refinados conforme as decisões técnicas e a implementação da solução avancem.
