# Projeto Integrador II - Buriti Monitor

## Sobre o projeto
O **Buriti Monitor** é uma solução baseada em *IoT* desenvolvida para auxiliar no monitoramento da quantidade e da qualidade da água. A proposta utiliza sensores para coletar informações do ambiente e disponibilizá-las para acompanhamento, possibilitando a identificação de alterações e situações que necessitem de atenção.
> **Observação:** nesta versão do projeto, as leituras são simuladas para demonstrar o funcionamento do protótipo. A integração com sensores físicos não faz parte desta versão final.

## Problema
Dificuldade de acompanhar a situação da água continuamente, falta de informações em tempo real, possibilidade de desperdício da água, dificuldade para identificar alterações rapidamente e necessidade de acompanhamento mais eficiente dos reservatórios.

## Solução proposta
O Buriti Monitor propõe uma solução *IoT* capaz de realizar a coleta de informações relacionadas à quantidade e à qualidade da água por meio de sensores. Os dados coletados poderão ser acompanhados por meio de uma interface de monitoramento, permitindo identificar alterações nas condições monitoradas e emitir alertas quando determinados parâmetros apresentarem situações fora dos valores estabelecidos.

## Objetivo geral
Desenvolver uma solução baseada em IoT para monitorar informações relacionadas à quantidade e à qualidade da água, permitindo o acompanhamento dos dados e a identificação de situações que necessitem de intervenção.

## Objetivos específicos
Desenvolver uma solução para coleta de dados relacionados à água, utilizar sensores para obtenção das informações, enviar os dados coletados para um sistema de acompanhamento, permitir a visualização das informações monitoradas, identificar situações anormais, emitir alertas quando necessário, contribuir para a redução de desperdícios e auxiliar na tomada de decisões relacionadas ao uso da água.

## Público-alvo
órgãos públicos no geral, como prefeituras, companhias de abastecimento, secretarias relacionadas ao meio ambiente e todos os responsáveis pelo gerenciamento de recursos hídricos.

## Como a solução funciona
O funcionamento segue um fluxo dessa forma:
1. Os sensores coletam informações da água;
2. O microcontrolador recebe os dados;
3. Os dados são processados;
4. As informações são transmitidas para o sistema;
5. O usuário acompanha os dados;
6. O sistema pode identificar situações fora dos parâmetros definidos;
7. Alertas podem ser emitidos quando necessário.

## Funcionalidades
O protótipo possui as seguintes funcionalidades:

- Dashboard com visão geral do monitoramento;
- apresentação das leituras atuais;
- atualização automática das leituras;
- classificação das situações em:
  - Normal;
  - Atenção;
  - Alerta;
- registro de ocorrências de Atenção e Alerta;
- histórico de medições;
- visualização de alertas;
- indicação do status do dispositivo;
- gráfico de acompanhamento das leituras;
- interface web organizada para acompanhamento das informações.

## Tecnologias Utilizadas
### Hardware
- Sensores
- Microcontrolador
- Componentes eletrônicos.
  
### Software
- HTML5
- CSS3
- JavaScript
- Visual Studio Code
- Git
- GitHub
- Trello

## Guia de Execução
### Como executar
#### Pré-requisitos
Para executar o protótipo, é necessário possuir:
- um navegador web atualizado;
- Visual Studio Code;
- os arquivos do projeto.
#### Execução pelo Visual Studio Code
1. Baixe ou clone este repositório.
2. Abra a pasta do projeto no Visual Studio Code.
3. Acesse a pasta src.
4. Localize o arquivo index.html.
5. Abra o arquivo utilizando um servidor local, como o Live Server.
6. O sistema será aberto no navegador.

### Execução
Após abrir o sistema, o usuário poderá acessar as seguintes áreas:
- Dashboard
- Monitoramento
- Histórico
- Alertas

### Funcionamento
O protótipo utiliza dados simulados para representar o comportamento de um sistema de monitoramento.
As leituras são atualizadas automaticamente e classificadas de acordo com as condições estabelecidas no código do protótipo.
As situações apresentadas são:

1. Normal
Representa uma leitura dentro da condição normal definida para a demonstração.
2. Atenção
Representa uma leitura que atingiu uma condição intermediária que requer atenção.
3. Alerta
Representa uma leitura que atingiu uma condição de alerta.

Os valores utilizados para essas classificações são exclusivamente demonstrativos e não representam limites oficiais de qualidade da água.

## Validação e testes
Foram realizados testes funcionais para verificar:
- inicialização do sistema;
- navegação;
- apresentação das leituras;
- atualização automática;
- classificação das situações;
- registro de alertas;
- histórico;
- Dashboard;
- interface;
- execução do sistema.

Os resultados e procedimentos detalhados estão disponíveis em testes/testes.md

## Resultados finais
Ao final da etapa de desenvolvimento, foi obtido um protótipo web funcional capaz de demonstrar:
- acompanhamento das leituras;
- atualização automática;
- classificação das condições;
- identificação de situações de atenção e alerta;
- registro de ocorrências;
- consulta do histórico;
- apresentação de informações em um Dashboard.

O protótipo permite demonstrar o funcionamento da proposta do Buriti Monitor em um ambiente web.

### Limitações da versão atual
A versão atual possui algumas limitações:
- utilização de dados simulados;
- ausência de sensores físicos;
- ausência de integração com microcontrolador;
- ausência de armazenamento permanente em banco de dados;
- parâmetros e limites utilizados apenas para demonstração.
Essas limitações fazem parte do escopo da versão atual do protótipo.

### Documentação
A documentação do projeto está organizada no repositório, incluindo requisitos do sistema, modelagem, diagramas, testes e validação e código-fonte do protótipo.

## Status
Concluído (aberto a alterações futuras)
