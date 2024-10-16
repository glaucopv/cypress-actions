## Sobre

1. Escolha do site e fluxos de teste
Vou simular a escolha de um site, que geralmente tem fluxos amplamente utilizados, como login. Os fluxos escolhidos para este exemplo serão:

Fluxo de login (com credenciais válidas e inválidas)
2. História do Usuário
Como um usuário, eu gostaria de:
Fazer login com minhas credenciais para acessar minha conta.

3. Critérios de Aceite
Para o fluxo de login:

O sistema deve permitir que o usuário faça login com credenciais válidas.
O sistema deve exibir uma mensagem de erro para credenciais inválidas.
Após o login, o usuário deve ser redirecionado para a página inicial.

4. Casos de Testes
Fluxo de Login:

Login com credenciais válidas.
Login com credenciais inválidas (senha errada).
Login com campo de e-mail inválido.
Login com campo de senha vazio.

5. Estimativa de Tempo de Teste
Fatores Considerados:
Complexidade de cada fluxo.
Quantidade de casos de teste por fluxo.
Tempo de execução de cada teste.
Tempo de depuração caso um teste falhe.
Estimativa:
Fluxo de login: 4 casos de teste, cada um levando cerca de 3 minutos (incluso tempo de setup). Total: 12 minutos.

6. Desenvolvimento de Testes Automatizados (Cypress)
Aqui está um exemplo de como os testes automatizados seriam implementados para o fluxo de login e o fluxo de busca de produto, utilizando Cypress.

Repositório do Desafio: Workflow de testes contínuos em Cypress no Github Actions

## Stacks
- Cypress
- Javascript
- Cypress Dashboard
- Tesults

## Rodando

1. Clonar o repositório, instalar as dependências
```
yarn / npm install
```

2. Subir o Cypress UI
```
yarn cypress open / npx cypress open 
```

3. Executar testes em Headless
```
yarn cypress run / npx cypress run 
```

