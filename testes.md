# Testes e Validação — Buriti Monitor

## 1. Introdução
Este documento apresenta os testes e procedimentos de validação realizados no protótipo funcional do Buriti Monitor, desenvolvido no Projeto Integrador II.
O Buriti Monitor é uma proposta de solução baseada no conceito de Internet das Coisas (IoT), voltada ao acompanhamento de informações relacionadas ao monitoramento da água. O protótipo desenvolvido possui uma interface web responsável por apresentar leituras, situações de monitoramento, histórico e alertas.
Nesta etapa do projeto, os testes têm como objetivo verificar se as principais funcionalidades implementadas estão funcionando conforme o planejamento, identificar possíveis problemas e registrar os resultados obtidos durante a utilização do sistema.
Como o protótipo atual não está conectado a sensores físicos, os dados apresentados pelo sistema são simulados, sendo utilizados para demonstrar o funcionamento da coleta, atualização, classificação das situações e geração de alertas.

## 2. Objetivos dos testes

Os testes foram realizados com os seguintes objetivos:

- verificar se o sistema é inicializado corretamente;
- verificar o funcionamento da navegação entre as páginas;
- verificar a apresentação das leituras dos parâmetros;
- verificar a atualização automática dos dados;
- verificar a classificação das leituras em Normal, Atenção e Alerta;
- verificar o registro das ocorrências de atenção e alerta;
- verificar a apresentação do histórico de medições;
- verificar o funcionamento do Dashboard;
- verificar o comportamento da interface em diferentes tamanhos de tela;
- identificar possíveis erros durante a execução do sistema;
- registrar limitações encontradas durante a validação;
- verificar se o protótipo atende às funcionalidades definidas nos requisitos do projeto.
  
## 3. Ambiente de testes

Os testes foram realizados utilizando um computador pessoal e um navegador web.

### 3.1 Hardware
Computador pessoal;
teclado e mouse;
monitor.
### 3.2 Software
Sistema operacional Windows;
Visual Studio Code;
Google Chrome;
HTML;
CSS;
JavaScript.
### 3.3 Forma de execução

Durante o desenvolvimento e os testes iniciais, o sistema foi executado diretamente a partir do arquivo:

src/index.html

Posteriormente, para uma validação mais adequada do comportamento do navegador e do carregamento dos arquivos, recomenda-se executar o projeto por meio de um servidor local, como o Live Server disponível no Visual Studio Code.

## 4. Metodologia

A validação foi realizada por meio de testes funcionais, nos quais cada funcionalidade foi executada individualmente e comparada com o comportamento esperado.
Os testes foram realizados diretamente na interface do Buriti Monitor, utilizando os menus e recursos disponíveis no protótipo.
Para as funcionalidades relacionadas às leituras e aos alertas, foram utilizados dados simulados. O sistema realiza atualizações automáticas e classifica os valores de acordo com os limites definidos no protótipo.
As situações utilizadas para demonstração são:

- Normal;
- Atenção;
- Alerta.

Essas classificações foram implementadas exclusivamente para fins de demonstração e validação do funcionamento do protótipo. Os valores utilizados não representam limites oficiais ou parâmetros técnicos de qualidade da água.

## 5. Casos de teste
### T01 — Inicialização do sistema

Objetivo:
Verificar se o sistema é carregado corretamente ao abrir o arquivo principal.

Procedimento:

Abrir o arquivo index.html.
Observar a página inicial.
Verificar a presença do Dashboard.
Verificar se os elementos da interface são apresentados corretamente.

Resultado esperado:
O sistema deve ser carregado e apresentar o Dashboard do Buriti Monitor.

Resultado obtido:
O sistema foi carregado corretamente, apresentando a interface principal do Buriti Monitor.

Situação: Aprovado.

### T02 — Navegação entre as páginas

Objetivo:
Verificar o funcionamento do menu principal.

Procedimento:

Acessar o Dashboard.
Clicar em Monitoramento.
Clicar em Histórico.
Clicar em Alertas.
Retornar ao Dashboard.

Resultado esperado:
Cada opção deve direcionar para sua respectiva seção sem interromper o funcionamento do sistema.

Resultado obtido:
A navegação entre as seções foi implementada e testada, permitindo acessar Dashboard, Monitoramento, Histórico e Alertas.

Situação: Aprovado.

### T03 — Apresentação das leituras

Objetivo:
Verificar se os valores dos parâmetros são apresentados na página de Monitoramento.

Procedimento:

Acessar a página Monitoramento.
Observar os cartões dos três parâmetros.
Verificar se os valores são apresentados.

Resultado esperado:
Os três parâmetros devem apresentar valores numéricos simulados.

Resultado obtido:
Os parâmetros são apresentados na interface com valores simulados.

Situação: Aprovado.

### T04 — Atualização automática das leituras

Objetivo:
Verificar se os valores são atualizados automaticamente.

Procedimento:

Acessar a página Monitoramento.
Observar os valores apresentados.
Aguardar o intervalo de atualização.
Comparar os valores antes e depois da atualização.

Resultado esperado:
Os valores devem ser atualizados automaticamente após o intervalo definido no sistema.

Resultado obtido:
O sistema realiza atualização automática das leituras simuladas.

Situação: Aprovado.

### T05 — Classificação Normal

Objetivo:
Verificar se uma leitura dentro da faixa normal é identificada corretamente.

Procedimento:

Acessar a página Monitoramento.
Observar uma leitura classificada pelo sistema.
Aguardar novas leituras até que uma situação normal seja apresentada.

Resultado esperado:
A leitura deve apresentar a situação Normal.

Resultado obtido:
O sistema apresenta a classificação Normal para valores que estão dentro da condição definida no protótipo.

Situação: Aprovado.

### T06 — Classificação Atenção

Objetivo:
Verificar se o sistema identifica uma situação que necessita de atenção.

Procedimento:

Permanecer na página Monitoramento.
Aguardar uma nova leitura.
Observar a classificação apresentada.
Verificar se a situação Atenção é exibida quando o valor correspondente é atingido.

Resultado esperado:
O sistema deve classificar a leitura como Atenção.

Resultado obtido:
O sistema foi implementado para identificar e apresentar a situação Atenção de acordo com os limites simulados.

Situação: Aprovado.

### T07 — Classificação Alerta

Objetivo:
Verificar se o sistema identifica uma situação de alerta.

Procedimento:

Permanecer na página Monitoramento.
Aguardar novas leituras.
Observar os valores apresentados.
Verificar a classificação da leitura.

Resultado esperado:
Quando o valor ultrapassar o limite definido no protótipo, o sistema deve apresentar a situação Alerta.

Resultado obtido:
O sistema foi implementado para gerar situações de Alerta a partir dos valores simulados.

Situação: Aprovado.

### T08 — Registro de ocorrências

Objetivo:
Verificar se situações de Atenção e Alerta são registradas na página de Alertas.

Procedimento:

Acessar o sistema.
Aguardar uma situação de Atenção ou Alerta.
Acessar a página Alertas.
Observar a lista de ocorrências registradas.
Aguardar outra ocorrência e verificar novamente a lista.

Resultado esperado:
As ocorrências devem ser registradas e apresentadas na página de Alertas.

Resultado obtido:
O sistema registra ocorrências de Atenção e Alerta durante a sessão atual e apresenta essas informações na página correspondente.

Situação: Aprovado.

### T09 — Histórico de medições

Objetivo:
Verificar a apresentação das leituras na página de Histórico.

Procedimento:

Acessar Histórico.
Observar a tabela apresentada.
Verificar as informações de data, hora, parâmetro, valor e situação.

Resultado esperado:
O sistema deve apresentar as leituras registradas em uma tabela organizada.

Resultado obtido:
O histórico apresenta as informações das leituras simuladas, permitindo sua visualização de forma organizada.

Situação: Aprovado.

### T10 — Dashboard

Objetivo:
Verificar se o Dashboard apresenta um resumo das informações do monitoramento.

Procedimento:

Acessar o Dashboard.
Observar os cartões de informação.
Verificar o status do dispositivo.
Verificar o horário da última atualização.
Verificar a quantidade de alertas.
Observar o gráfico e o painel de alertas.

Resultado esperado:
O Dashboard deve apresentar informações gerais e resumidas sobre o monitoramento.

Resultado obtido:
O Dashboard apresenta o status do dispositivo, horário de atualização, quantidade de alertas, leituras e informações relacionadas ao monitoramento.

Situação: Aprovado.

### T11 — Teste de interface

Objetivo:
Verificar a organização visual e a utilização da interface em diferentes tamanhos de janela.

Procedimento:

Abrir o sistema em uma janela maximizada.
Reduzir o tamanho da janela.
Observar os cartões e menus.
Verificar se as informações continuam acessíveis.

Resultado esperado:
A interface deve permanecer utilizável em diferentes dimensões de tela.

Resultado obtido:
A interface foi desenvolvida com organização responsiva, utilizando estrutura de cartões, menus e áreas adaptáveis.

Situação: Em validação.

## 6. Teste do Console do navegador
### T12 — Verificação de erros no Console

Objetivo:
Verificar se existem erros de JavaScript ou problemas relacionados ao carregamento dos arquivos do sistema.

Procedimento:

Abrir o Buriti Monitor no Google Chrome.
Pressionar F12.
Acessar a aba Console.
Observar as mensagens apresentadas pelo navegador.

Resultado esperado:
Não devem ser apresentados erros relacionados ao código JavaScript ou ao funcionamento das funcionalidades do sistema.

Resultado obtido:
Durante a execução direta do arquivo index.html pelo protocolo file://, o Console apresentou uma mensagem de segurança relacionada ao carregamento de uma URL file:// a partir de outra URL file://.

A mensagem apresentada foi semelhante a:

Unsafe attempt to load URL ... from frame with URL ...
file:// URLs are treated as unique security origins.

Esse comportamento está relacionado à forma como o arquivo foi aberto diretamente pelo computador, e não caracteriza, por si só, um erro de sintaxe ou de lógica do código JavaScript.

Ação corretiva planejada:
Executar o projeto por meio de um servidor local, utilizando o Live Server do Visual Studio Code, e repetir o teste do Console.

Situação: Necessita de nova validação utilizando servidor local.

## 7. Resumo dos resultados
ID	Funcionalidade	Situação
T01	Inicialização do sistema	Aprovado
T02	Navegação	Aprovado
T03	Apresentação das leituras	Aprovado
T04	Atualização automática	Aprovado
T05	Situação Normal	Aprovado
T06	Situação Atenção	Aprovado
T07	Situação Alerta	Aprovado
T08	Registro de ocorrências	Aprovado
T09	Histórico	Aprovado
T10	Dashboard	Aprovado
T11	Interface	Em validação
T12	Console do navegador	Requer nova validação
## 8. Evidências dos testes

Durante a realização dos testes, foram observadas diferentes funcionalidades do sistema, incluindo:

carregamento do Dashboard;
navegação entre as páginas;
apresentação dos parâmetros monitorados;
atualização automática das leituras;
classificação das situações;
geração e registro de alertas;
apresentação do histórico;
atualização das informações do Dashboard.

Também foram realizadas capturas de tela para registrar visualmente o funcionamento do protótipo.

Uma das evidências registradas durante os testes apresenta o Dashboard do Buriti Monitor em funcionamento, com o sistema conectado, dispositivo identificado como online, atualização recente e ocorrência de alertas.

Além disso, foi registrada a mensagem apresentada pelo Console do navegador durante a execução direta do arquivo index.html pelo protocolo file://. Essa ocorrência será utilizada como evidência da necessidade de realizar uma nova validação utilizando um servidor local.

## 9. Validação das funcionalidades

A partir dos testes realizados, foi possível verificar o funcionamento das principais funcionalidades implementadas no protótipo.

O sistema apresenta uma interface organizada em quatro áreas principais:

Dashboard, responsável pela apresentação geral das informações;
Monitoramento, responsável pela apresentação das leituras atuais;
Histórico, responsável pela visualização das medições;
Alertas, responsável pela apresentação das ocorrências identificadas.

Também foi validada a classificação das leituras em três situações:

Normal;
Atenção;
Alerta.

Essa classificação permite demonstrar como o sistema pode identificar diferentes condições a partir das informações recebidas.

O registro das ocorrências também foi incorporado ao protótipo, permitindo visualizar situações de Atenção e Alerta na seção específica do sistema.

## 10. Validação em contexto

Como o Buriti Monitor é um protótipo desenvolvido para demonstrar uma solução de monitoramento de água, a validação nesta etapa foi realizada principalmente por meio da utilização direta da interface e da simulação de dados.

A ausência de sensores físicos nesta versão significa que não foi possível realizar testes com medições reais de água. Dessa forma, os testes realizados tiveram como foco a funcionalidade da aplicação, incluindo processamento das leituras simuladas, apresentação das informações, classificação das situações e registro de alertas.

A utilização de dados simulados permite demonstrar o comportamento esperado da solução sem depender, nesta etapa, da montagem de um dispositivo físico.

## 11. Limitações identificadas

Durante a validação, foram identificadas algumas limitações do protótipo:

### 11.1 Dados simulados

As leituras utilizadas pelo sistema são simuladas. Portanto, o protótipo ainda não realiza a coleta de dados provenientes de sensores físicos.

### 11.2 Ausência de hardware

Nesta versão, não foi realizada a integração com microcontrolador, sensores ou outros componentes físicos.

### 11.3 Limites de classificação

Os limites utilizados para definir as situações Normal, Atenção e Alerta foram estabelecidos exclusivamente para demonstrar a funcionalidade do protótipo.

Eles não devem ser interpretados como limites oficiais de qualidade da água.

### 11.4 Persistência dos dados

Os registros utilizados no protótipo são mantidos durante a execução da aplicação e não representam ainda uma solução completa de armazenamento em banco de dados.

### 11.5 Execução pelo protocolo file://

Durante os testes iniciais, a abertura direta do arquivo index.html pelo computador ocasionou uma mensagem de segurança do navegador relacionada ao protocolo file://.

Para uma validação mais adequada, o projeto deverá ser executado utilizando um servidor local, como o Live Server.

## 12. Ajustes realizados durante a validação

A etapa de testes também contribuiu para a identificação e correção de problemas durante o desenvolvimento.

Entre os ajustes realizados estão:

implementação da navegação entre as páginas;
atualização dos valores apresentados no monitoramento;
classificação das leituras em Normal, Atenção e Alerta;
inclusão da identificação visual da situação de cada parâmetro;
implementação do registro de ocorrências;
atualização da página de Alertas;
atualização das informações apresentadas no Dashboard;
integração das funcionalidades entre as diferentes áreas do protótipo.

Esses ajustes contribuíram para aproximar o protótipo das funcionalidades definidas no planejamento do projeto.

## 13. Resultado geral da validação

Os testes realizados demonstraram que o protótipo do Buriti Monitor apresenta as principais funcionalidades planejadas para a versão atual.

Foi possível verificar o funcionamento da interface, da navegação, da apresentação das leituras simuladas, da atualização automática, da classificação das situações e do registro de ocorrências.

A validação também permitiu identificar limitações relacionadas à ausência de sensores físicos, ao uso de dados simulados e à execução inicial do sistema diretamente pelo protocolo file://.

Como próximo procedimento de validação, será realizada a execução do projeto por meio de um servidor local para verificar novamente o carregamento dos arquivos e o comportamento do Console do navegador.

## 14. Conclusão

A realização dos testes permitiu verificar o funcionamento das principais funcionalidades desenvolvidas para o protótipo do Buriti Monitor.

Os resultados indicam que a aplicação consegue apresentar informações de monitoramento, atualizar leituras simuladas, classificar situações, registrar ocorrências e organizar essas informações em diferentes áreas da interface.

A etapa de validação também foi importante para identificar limitações e oportunidades de melhoria, principalmente em relação à futura integração com sensores físicos, armazenamento permanente dos dados e utilização de parâmetros reais de monitoramento da água.

Dessa forma, os testes contribuem para a evolução do projeto e fornecem registros para a etapa final de documentação, apresentação e entrega do Buriti Monitor.
