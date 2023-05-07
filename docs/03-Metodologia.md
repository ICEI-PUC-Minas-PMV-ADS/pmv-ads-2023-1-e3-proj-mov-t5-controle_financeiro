
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

