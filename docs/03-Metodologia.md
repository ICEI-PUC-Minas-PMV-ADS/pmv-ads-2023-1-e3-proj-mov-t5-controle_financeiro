
# Metodologia

Esta seção descreve como a equipe tratará para desenvolver as soluções para este projeto que foca em soluções para uma educação de controle financeiro. As seções a seguir descrevem os ambientes de trabalho aplicados pela equipe bem como a estrutura utilizada para gerenciar o código-fonte e a definição do processo e da ferramenta pela qual a equipe se organiza.
Metodologia de trabalho: A equipe está usando a metodologia Agile para gerenciar o desenvolvimento do software. O Agile é uma abordagem iterativa e incremental para o desenvolvimento de software que enfatiza a colaboração entre a equipe, a entrega de software funcionando em intervalos regulares e a resposta às mudanças do projeto. A equipe está usando scrum.
Ambiente de trabalho: A equipe está usando React Native para desenvolver o software. O React Native é um framework para desenvolvimento de aplicativos móveis multiplataforma que permite o uso de JavaScript e React para criar aplicativos para IOS e Android. 
Para o gerenciamento das atividades executadas: A equipe também está usando o Git e o GitHub para controle de versão e distribuição de tarefas. O Git é um sistema de controle de versão distribuído que permite que várias pessoas trabalhem em um mesmo código fonte e registrem as alterações. O GitHub é uma plataforma baseada em nuvem para hospedar repositórios Git e gerenciar colaboração em projetos de software. A equipe também está usando o Microsoft Teams para comunicação. O Microsoft Teams é uma plataforma de comunicação baseada em nuvem que permite que a equipe se comunique por chat, vídeo e chamadas de áudio.


## Relação de Ambientes de Trabalho

Os dados do projeto são apresentados a partir de diversas plataformas e a relação dos ambientes com seu respectivo propósito é apresentado na tabela que se segue.

![image](https://user-images.githubusercontent.com/103541634/229383830-8a28e30f-a185-41eb-b57a-fa52aba46158.png)


## Controle de Versão

A ferramenta de controle de versão adotada no projeto foi o Git , sendo que o Github foi utilizado para hospedagem do repositório.
O projeto segue a seguinte etiqueta para o nome de branches:
- main: versão stable já teste do software
- unstable: versão já testei do software, porém com certeza
- testing: versão em testes do software
- dev: versão de desenvolvimento do software
Para organização e distribuição das tarefas do projeto, a equipe está utilizando o Excel com as seguintes listas:
- Backlog: com todas as tarefas listadas, cada uma com uma etiqueta indicando a qual sprint pertence.
- To Do: Esta lista representa o Sprint Backlog. Este é o Sprint atual que estamos trabalhando.
- Doing: Quando uma tarefa foi iniciada, ela é movida para cá.
- Test: Checagem de Qualidade. Quando as tarefas forem concluídas, eles serão movidos para o “CQ”. No final da semana, eu revejo essa lista para garantir que tudo saiu perfeito.
- Done: nesta lista são colocadas as tarefas que passaram pelos testes e controle de qualidade e estão prontas para serem entregues ao usuário. Não há mais edições ou revisões necessárias, ele está agendado e pronto para a ação. Locked: Quando alguma coisa impede a conclusão da tarefa, ela é movida para esta lista junto com um comentário sobre o que está travando a tarefa.

### Quanto à gerência de questões, o projeto adota a seguinte etiqueta para etiquetas:
- documentation: melhorias ou acréscimos a documentos
- bug: uma funcionalidade encontra-se com problemas
- enhancement: uma funcionalidade precisa ser melhorada
- feature: uma nova funcionalidade precisa ser atendida


## Gerenciamento de Projeto

### Divisão de Papéis

Apresente a divisão de papéis entre os membros do grupo.
A equipe utiliza metodologias ágeis, tendo escolhido o Scrum como base para definição do processo de desenvolvimento. Sendo realizadas reuniões semanais para alinhamento da equipe e entendimento e (re)ordenamento das etapas a serem seguidas. A equipe está organizada da seguinte maneira:
- Scrum Master: Marcos Guimarães;
- Product Owner: Marcos Vidal;
- Equipe de Desenvolvimento: Arthur, Breno, Gilvimar, Marcos Guimarães, Marcos Vidal.
- Equipe de Design: Arthur, Gilvimar.


### Ferramentas

As ferramentas do projeto são apresentados a partir de diversas plataformas e a relação dos ambientes com seu respectivo propósito é apresentado na tabela que se segue.

![image](https://user-images.githubusercontent.com/103541634/229384154-d9716411-5653-4bbc-a552-df537db0db14.png)

### Arquitetura Cliente/Servidor

A Arquitetura escolhida para a implementação do projeto foi a Arquitetura Cliente Servidor. As arquiteturas em camadas se tornaram muito predominantes com a popularidade dos sistemas de software cliente-servidor. Em um aplicativo distribuído que usa uma arquitetura cliente-servidor, também conhecida como arquitetura de duas camadas, clientes e servidores se comunicam diretamente. 
Foi escolhida a arquitetura em duas camadas, onde será utilizado o banco de dados para que seja realizado um pequeno cadastro de usuário para a utilização da Aplicação e será armazenado os dados de controle financeiro da aplicação, mostrando os gastos de forma diária, semanal, mensal, semestral e anual para uma melhor verificação e análise dos controles de gastos.

React Native é uma aplicação ao qual se mostra uma estrutura para construir aplicativos móveis nativos em JavaScript que pode utilizar a biblioteca React JavaScript. O código utilizado no React Native é compilado para componentes nativos na biblioteca de códigos JavaSript. Onde você pode criar aplicativos nativos que pode ser visualizado o que está sendo gerado.

### Ferramentas
As ferramentas empregadas no projeto são:
- Editor de código: Visual Studio Community 2022
- Ferramentas de comunicação: Teams e Whatsapp
- Ferramenta de gerenciamento: Github/Classroom
- Ferramentas de desenho de tela ( wireframing ): Miro
- React Native: é uma estrutura para construir aplicativos móveis nativos em JavaScript usando a biblioteca React JavaScript.

O editor de código foi escolhido porque Visual Studio Code ele possui uma integração com o sistema de versionamento. As ferramentas de comunicação utilizadas possuem integração semelhante e por isso foram selecionadas. Por fim, para criar diagramas, utilizamos essa ferramenta para melhor captar as necessidades da nossa solução.


![grafico](https://user-images.githubusercontent.com/92383852/229385260-0a5d107b-3cce-4f55-a20c-8b3b8cf45a75.png)

###  OBJETIVOS, METAS E INDICADORES DE DESEMPENHO
O objetivo desta etapa do produto será fornecer dados para que possa mensurar os efeitos das etapas já realizados e procurar solucionar eventuais problemas que possam aparecer durante este processo.
    • Indicar as funcionalidades;
    • Compreender as funcionalidades;
    • Desenvolver as funcionalidades;
    • Testar as funcionalidades;
    • Entregar as funcionalidades.

Os Indicadores de Desempenho servem pela medir o desempenho do grupo, setor, empresa etc. Onde servem de norteador para que a gestão siga o melhor caminho durante o processo de implementação e execução da aplicação do produto.
Pensando nisso é necessário que sejam criados métricas e indicadores de desempenho para que seja analisado a capacidade, produtividade e qualidade do produto desenvolvido. Este processo pode ser realizado por meios qualitativos e quantitativos. 
Servindo para identificar o impacto dos eventuais erros, o tempo médio da solução destes erros encontrados e possíveis melhorias que possam ser implementadas.

Os indicadores que serão utilizados são:
    • Disponibilidade do Sistema: serve para manter a infraestrutura da aplicação funcionando sem falhas; Mede o tempo de indisponibilidade de sistemas em relação ao tempo total do período. 
Fórmula:  ((TTP – TIS)/TTP) X 100 
TIS – Tempo de Indisponibilidade de sistemas
TTP – Tempo Total do período 
- Meta: Alcançar 95% durante o ano todo o índice de disponibilidade do Sistema.
Exemplo:
![tab diponibilidade](https://user-images.githubusercontent.com/92383852/236690130-593314bb-ae29-425e-bbfb-b616d48da173.png)
![diponibilidade do Sistema](https://user-images.githubusercontent.com/92383852/236690150-955548e7-648c-44be-9d7a-6e7b2d3393b5.png)

    • Tempo de Resposta: serve para medir a eficiência da equipe de atendimento ao suporte da aplicação quanto menor o tempo melhor.
   
Fórmula: EDD = DE / (DE+DU) x 100
EDD – Eficiência Detecção dos Defeitos
DE – Defeitos encontrados pela Equipe
DU– Defeitos reportados pelos Usuários
Meta: Alcançar durante o ano o índice maior que 80% 
![tab eficiencia](https://user-images.githubusercontent.com/92383852/236690243-4b951c30-264a-4962-ba53-9995c71376bb.png)
![Eficiencia](https://user-images.githubusercontent.com/92383852/236690268-4711df47-321e-4154-adb6-a94b70bfae4e.png)

    • Tempo de Falhas: O Tempo Médio Entre Falhas indica os intervalos de tempo entre uma falha e outra. 
Fórmula: TF= TO/NF
TF – Tempo de Falha
TO – Tempo de Operação
NF – Número de Falhas
Meta: Alcançar Zero Falhas durante o Mês.
Exemplo:
![tab tempo de falhas](https://user-images.githubusercontent.com/92383852/236690351-6ef80a2b-6216-4833-97c6-b23d524ab300.png)
![tempo de falhas](https://user-images.githubusercontent.com/92383852/236690370-81648e70-d636-4e7a-ae3c-2e270e7004d0.png)

    • Satisfação do Usuário: serve para medir a satisfação do usuário para a aplicação, ele demostrará se a aplicação está de fácil entendimento ou não, 
    
    
Meta: Alcançar o percentual de 90% de classificação de Bom e/ou Muito Bom.
      Exemplo: 
      ![tab satisfacao usuario](https://user-images.githubusercontent.com/92383852/236690451-7aaf46bf-8c68-4c33-baee-89d5c3797c5b.png)

![Satisfação](https://user-images.githubusercontent.com/92383852/236690476-f183c4ac-e2c4-4744-b83d-d01733e881c7.png)

    • Qualidade dos Serviços: serve para obter o retorno dos usuários quanto ao funcionamento da aplicação.
Meta: Alcançar em todos os Índices de qualidade do Serviço de Bom e/ou Muito Bom (acima de 6)
Exemplo:
![tab qualidade serviço](https://user-images.githubusercontent.com/92383852/236690549-98b065a1-ea37-4f55-9413-260d52b3e785.png)

![Qulidade dos Serviços](https://user-images.githubusercontent.com/92383852/236690575-57e4b89b-4e6c-45c7-9054-ab34610fd336.png)

