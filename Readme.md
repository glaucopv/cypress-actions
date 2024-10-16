## Sobre

1. Vou simular como logar um site, que geralmente tem fluxos amplamente utilizados. Os fluxos escolhidos para este exemplo serão:

 - Fluxo de login (com credenciais válidas, inválidas, e-mail inválido, campo de senha vazia)

2. Como um usuário, eu gostaria de:
   
 - Fazer login com minhas credenciais para acessar minha conta.

3. O sistema deve validar:

 - Login com credenciais válidas.
 - Login com credenciais inválidas (senha errada).
 - Login com campo de e-mail inválido.
 - Login com campo de senha vazio.

4. Casos de Testes:
   
 - Login com usuário obrigatório.
 - Login com senha obrigatória.
 - Login com usuário não existe.
 - Login com senha incorreta.
 - Login com sucesso.

5. Estimativa de Tempo de Teste:   

    ✓ usuário obrigatório (1041ms)
    ✓ senha obrigatória (507ms)
    ✓ usuário não existe (754ms)
    ✓ senha incorreta (726ms)
    ✓ com sucesso (802ms)
    Total: 4 segundos.

6. Desenvolvimento de Testes Automatizados (Cypress)
Aqui está um exemplo de como os testes automatizados seriam implementados para o fluxo de login, utilizando Cypress.

Repositório do Desafio: Workflow de testes contínuos em Cypress no Github Actions

## Stacks
- Cypress
- Javascript
- Cypress Dashboard
- Tesults

## Rodando

1. Workflow de Automação de Testes no Github Actions:
   
 - Executa os testes automatizados toda vez que clicar no botão Run Worklow.


