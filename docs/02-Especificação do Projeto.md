# Especificações do Projeto

A definição exata do problema e os pontos mais relevantes a serem tratados neste projeto foi consolidada com a participação dos usuários em um trabalho de imersão feita pelos membros da equipe a partir da observação dos usuários em seu local natural e por meio de entrevistas. Os detalhes levantados nesse processo foram consolidados na forma de personas e histórias de usuários. 

## Personas

|Maria Joana de Santos|<img src="https://user-images.githubusercontent.com/103541634/226197214-dc553a84-73e6-4803-9af4-bbf9d08ab956.png" width="100">|
|---|---| 
|Idade: 32 anos|Ocupação: Chef de Cozinha|
|Motivações: | <ul><li>Possui problemas financeiros</li><li> Não consegue economizar para uma viagem de curto prazo</li></ul>|
|Hobbies:|<ul><li>Pescar</li><li>Ir a shows</li></ul>|

|João Carlos da Silva|<img src="https://user-images.githubusercontent.com/103541634/226199366-afe82fac-df56-4654-844d-3788a5f6d0bb.png" width="100">|
|---|---| 
|Idade: 44 anos|Ocupação: Vendedor|
|Motivações: | <ul><li>Possui dívidas e quer identifar onde pode reduzir seus gastos</li><li> Está tendo gastos maiores que sua renda</li></ul>|
|Hobbies:|<ul><li>Viajar</li><li>Pescar</li></ul>|

|Eduardo Navares|<img src="https://user-images.githubusercontent.com/103541634/226199433-12d83718-cb3a-4554-9263-8e2fd5cd9b46.png" width="100">|
|---|---|
|Idade: 28 anos|Ocupação: Scrum Master|
|Motivações:| <ul><li> Acredita que pode poupar mais</li><li> Desconhece as suas despesas</li></ul>|
|Hobbies:|<ul><li>Jogar basquete</li><li>Ir ao parque</li></ul>|

|Gil Costa|<img src="https://user-images.githubusercontent.com/103541634/226199498-e2548029-8722-474f-82dc-aa64ade28273.png" width="100">|
|---|---| 
|Idade: 46 anos|Ocupação: Médico|
|Motivações: | <ul><li>Possui vários gastos imprevisíveis</li><li> Deseja ter um controle sobre suas finanças pessoais</li></ul>|
|Hobbies:|<ul><li>Esquiar </li><li>Tocar guitarra</li></ul>|


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
| Maria Joana de Santos  |	Cortar despesas                   |	Para que realize uma viagem de férias  |
| João Carlos da Silva | Identificar aonde pode cortar suas despesas   | Acabar com suas dívidas          |
| Eduardo Navares  | Identificar suas despesas e receitas      | Juntar mais dinheiro                 |
| Gil   Costa   | Possuir um histórico das suas finanças     | Ter previsibilidade dos seus gastos |

## Modelagem do Processo de Negócio 

### Análise da Situação Atual

Apresente aqui os problemas existentes que viabilizam sua proposta. Apresente o modelo do sistema como ele funciona hoje. Caso sua proposta seja inovadora e não existam processos claramente definidos, apresente como as tarefas que o seu sistema pretende implementar são executadas atualmente, mesmo que não se utilize tecnologia computacional. 

### Descrição Geral da Proposta

Apresente aqui uma descrição da sua proposta abordando seus limites e suas ligações com as estratégias e objetivos do negócio. Apresente aqui as oportunidades de melhorias.

### Processo 1 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 1. Em seguida, apresente o modelo do processo 1, descrito no padrão BPMN. 

![Processo 1](img/02-bpmn-proc1.png)

### Processo 2 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 2. Em seguida, apresente o modelo do processo 2, descrito no padrão BPMN.

![Processo 2](img/02-bpmn-proc2.png)

## Indicadores de Desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Colocar no mínimo 5 indicadores. 

Usar o seguinte modelo: 

![Indicadores de Desempenho](img/02-indic-desemp.png)
Obs.: todas as informações para gerar os indicadores devem estar no diagrama de classe a ser apresentado a posteriori. 

## Requisitos

O escopo funcional do projeto é definido por meio dos requisitos funcionais que descrevem as possibilidades interação dos usuários, bem como os requisitos não funcionais que descrevem os aspectos que o sistema deverá apresentar de maneira geral. Estes requisitos são apresentados a seguir.

### Requisitos Funcionais

A tabela a seguir apresenta os requisitos do projeto, identificando a prioridade em que os mesmos devem ser entregues.

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
| RF-001 | A aplicação deve apresentar a funcionalidade do usuário  adicionar custos/despesas individuais        | ALTA | 
| RF-002 | A aplicação deve apresentar a funcionalidade do usuário  adicionar receitas individuais               | ALTA |
| RF-003 | A aplicação deve apresentar a possibilidade do usuário  adicionar setores de despesas                 | ALTA |
| RF-004 | A aplicação deve apresentar a possibilidade do usuário adicionar setores de receitas                  | ALTA |
| RF-005 | A aplicação deve realizar a soma de todos setores de despesas de um lado da tela                      | ALTA |
| RF-006 | A aplicação deve realizar a soma de todos setores de receitas de um lado da tela                      | ALTA |
| RF-007 | A aplicação deve possuir uma área de login para que o usuário possa entrar na sua área de dados financeiros           | MÉDIA |
| RF-008 | A aplicação deve possuir uma tela visual apresentando comparativos entre dias, meses e mais estatísticas sobre os dados apresentados | ALTA |
| RF-009 | A aplicação deve possuir uma lupa para encontrar alguma receita ou despesa específica | MÉDIA |
| RF-010 | A aplicação deve possuir a possibilidade de editar meses anteriores  | MÉDIA |
| RF-011 | A aplicação deve possuir uma tela comparando todos os usuários da plataforma e suas despesas deixando em valores percentuais |BAIXA|


### Requisitos não Funcionais

A tabela a seguir apresenta os requisitos não funcionais que o projeto deverá atender.

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O site da aplicação deve ser responsivo | ALTA | 
|RNF-002| O site da aplicação deve ser compatível com os principais celulares androids de última geração | ALTA | 
|RNF-004| O site da aplicação deve utilixar a linguagem Javascript | ALTA |
|RNF-005| O site da aplicação deve utilizar o banco de dados SQL | MÉDIA |

## Restrições

As questões que limitam a execução desse projeto e que se configuram como obrigações claras para o desenvolvimento do projeto em questão são apresentadas na tabela a seguir. 

|ID   | Restrição                                             |
|-----|-------------------------------------------------------|
|RE-01| O projeto deverá ser entregue no final do semestre, não podendo extrapolar a data de 05/06/2023 |
|RE-02| A equipe não pode subcontratar uma empresa para ajudar a desenvolver o design do aplicativo |
|RE-03| A equipe não pode subcontratar uma empresa para a criação do conteúdo do aplicativo |
|RE-04| A aplicação só poderá ser lançado se os requisitos de funcionalidade e acessibilidade quando forem atendidas |

## Diagrama de Casos de Uso

![DiagramaCasoDeUso](https://user-images.githubusercontent.com/103541634/226203393-6135e0e8-2229-4eec-a2a7-b13c00c0437a.jpeg)

# Matriz de Rastreabilidade

A matriz de rastreabilidade é uma ferramenta usada para facilitar a visualização dos relacionamento entre requisitos e outros artefatos ou objetos, permitindo a rastreabilidade entre os requisitos e os objetivos de negócio. 

A matriz deve contemplar todos os elementos relevantes que fazem parte do sistema, conforme a figura meramente ilustrativa apresentada a seguir.

![image](https://user-images.githubusercontent.com/41563209/233057109-4bc52766-0093-4ad4-a494-52078e1fb6f6.png)

> **Links Úteis**:
> - [Artigo Engenharia de Software 13 - Rastreabilidade](https://www.devmedia.com.br/artigo-engenharia-de-software-13-rastreabilidade/12822/)
> - [Verificação da rastreabilidade de requisitos usando a integração do IBM Rational RequisitePro e do IBM ClearQuest Test Manager](https://developer.ibm.com/br/tutorials/requirementstraceabilityverificationusingrrpandcctm/)
> - [IBM Engineering Lifecycle Optimization – Publishing](https://www.ibm.com/br-pt/products/engineering-lifecycle-optimization/publishing/)


# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

Com diagramas bem organizados que permitem gerenciar o tempo nos projetos, o gerente de projetos agenda e coordena tarefas dentro de um projeto para estimar o tempo necessário de conclusão.

![Diagrama de rede simplificado notação francesa (método francês)](img/02-diagrama-rede-simplificado.png)

O gráfico de Gantt ou diagrama de Gantt também é uma ferramenta visual utilizada para controlar e gerenciar o cronograma de atividades de um projeto. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.


![Gráfico de Gantt](https://user-images.githubusercontent.com/41563209/234076350-8e94de46-ce1d-4f14-8b29-e16f0002582e.png)


## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados. 

![Simple Project Timeline](img/02-project-timeline.png)

## Gestão de Orçamento

O processo de determinar o orçamento do projeto é uma tarefa que depende, além dos produtos (saídas) dos processos anteriores do gerenciamento de custos, também de produtos oferecidos por outros processos de gerenciamento, como o escopo e o tempo.

![Orçamento](img/02-orcamento.png)
