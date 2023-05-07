## Registro de Testes de Software para Aplicativo de Controle Financeiro

### Teste de Unidade: Cadastro de Contas Bancárias

| Caso de Teste | Resultado | Observações |
| --- | --- | --- |
| Cadastrar nova conta bancária. | Passou | - |
| Cadastrar conta bancária com nome em branco. | Falhou | Deve exigir um nome de conta válido. |
| Cadastrar conta bancária com número de conta inválido. | Falhou | Deve exigir um número de conta válido. |
| Cadastrar conta bancária com tipo de conta em branco. | Falhou | Deve exigir um tipo de conta válido. |
| Cadastrar conta bancária com saldo inicial negativo. | Falhou | Deve exigir um saldo inicial válido. |

### Teste de Unidade: Cadastro de Despesas e Receitas

| Caso de Teste | Resultado | Observações |
| --- | --- | --- |
| Cadastrar nova despesa. | Passou | - |
| Cadastrar nova receita. | Passou | - |
| Cadastrar despesa com nome em branco. | Falhou | Deve exigir um nome de despesa válido. |
| Cadastrar receita com nome em branco. | Falhou | Deve exigir um nome de receita válido. |
| Cadastrar despesa sem valor. | Falhou | Deve exigir um valor de despesa válido. |
| Cadastrar receita sem valor. | Falhou | Deve exigir um valor de receita válido. |

### Teste de Unidade: Consulta de Extratos Bancários

| Caso de Teste | Resultado | Observações |
| --- | --- | --- |
| Consultar extrato bancário de uma conta válida. | Passou | - |
| Consultar extrato bancário de uma conta inexistente. | Falhou | Deve informar que a conta não foi encontrada. |
| Consultar extrato bancário com período válido. | Passou | - |
| Consultar extrato bancário com período inválido. | Falhou | Deve exigir um período válido. |

### Teste de Unidade: Geração de Relatórios Financeiros

| Caso de Teste | Resultado | Observações |
| --- | --- | --- |
| Gerar relatório de despesas e receitas do mês. | Passou | - |
| Gerar relatório de despesas e receitas do ano. | Passou | - |
| Gerar relatório de despesas e receitas com período inválido. | Falhou | Deve exigir um período válido. |
| Gerar relatório de despesas e receitas sem movimentação. | Falhou | Deve informar que não há movimentação no período especificado. |

### Teste de Integração

| Caso de Teste | Resultado | Observações |
| --- | --- | --- |
| Cadastrar nova conta bancária e nova despesa e gerar relatório de despesas e receitas do mês. | Passou | - |
| Cadastrar nova conta bancária e nova receita e gerar relatório de despesas e receitas do ano. | Passou | - |
| Consultar extrato bancário e gerar relatório de despesas e receitas com base no extrato. | Falhou | Não foi possível gerar o relatório corretamente a partir do extrato bancário. |
| Cadastrar novo cartão de crédito e associá-lo a uma categoria de despesa e gerar relatório de despesas por categoria. | Passou | - |
| Realizar transferência entre contas bancárias e gerar relatório de transferências realizadas. | Passou | - |
| Adicionar novo usuário e verificar se ele tem acesso às contas e transações registradas. | Passou | - |
