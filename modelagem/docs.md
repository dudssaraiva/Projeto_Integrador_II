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

https://github.com/dudssaraiva/Projeto_Integrador_II/blob/ab7d19eca8e93dd1d67a476166af1d8b340b2ffd/modelagem/ARQUITETURA%20GERAL.drawio.png


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

https://github.com/dudssaraiva/Projeto_Integrador_II/blob/a7a6e14981ac1f2ee8e8fb1c743ff8d6c5a7694a/modelagem/FLUXOGRAMA%20DE%20FUNCIONAMENTO.drawio.png


## 5. Fluxo de dados

Os dados deverão percorrer o seguinte fluxo:

Sensor → Microcontrolador → Comunicação → Processamento/Servidor → Banco de Dados → Interface → Usuário.

https://github.com/dudssaraiva/Projeto_Integrador_II/blob/a7a6e14981ac1f2ee8e8fb1c743ff8d6c5a7694a/modelagem/FLUXO%20DOS%20DADOS.drawio.png


## 6. Modelo de dados

O modelo de dados inicial deverá representar as principais informações utilizadas pelo sistema, incluindo dispositivos, sensores, parâmetros, leituras e, quando aplicável, usuários e alertas.

https://github.com/dudssaraiva/Projeto_Integrador_II/blob/d132a75c38342126d2b97f36cffdff5213c42960/modelagem/MODELO%20DE%20DADOS.drawio.png


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
https://github.com/dudssaraiva/Projeto_Integrador_II/blob/23b11ce5bbf9a62a1ce6692ed3e52541cd9c90ef/modelagem/PROT%C3%93TIPO%20DA%20INTERFACE.drawio.png


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


## 9. Relação com os requisitos

A modelagem deverá atender aos requisitos definidos na Etapa 1.

As relações entre requisitos, tarefas do backlog e elementos da arquitetura serão utilizadas para garantir a rastreabilidade do projeto.


## 10. Conclusão

A modelagem apresentada estabelece uma visão inicial da arquitetura do Buriti Monitor e serve como base para o desenvolvimento das próximas etapas do projeto. Os elementos poderão ser refinados conforme as decisões técnicas e a implementação da solução avancem.
