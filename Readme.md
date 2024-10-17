## Sobre o desafio

1. Vou simular como logar em um site. Os fluxos escolhidos para este exemplo serão:

 - Fluxo de login (com credenciais válidas, inválidas, e-mail inválido, campo de senha vazia)

2. Como um usuário, eu gostaria de:
   
 - Fazer login com minhas credenciais para acessar minha conta.

3. O sistema deve validar:

 - Login com credenciais válidas.
 - Login com credenciais inválidas (senha errada).
 - Login com campo de e-mail inválido.
 - Login com campo de senha vazio.
 - Login com sucesso.

4. Casos de Testes:
   
 - Login com usuário obrigatório.
 - Login com senha obrigatória.
 - Login com usuário não existe.
 - Login com senha incorreta.
 - Login com sucesso.

5. Estimativa de Tempo de Teste:   

  - Fiz uma primeira execução dos testes para ver o tempo de cada caso de testes e no final o tempo que levou para executar todos, podendo estimar o tempo conforme abaixo:
    
    - usuário obrigatório (1041ms)
    - senha obrigatória (507ms)
    - usuário não existe (754ms)
    - senha incorreta (726ms)
    - com sucesso (802ms)
   - Total: 4 segundos.

6. Desenvolvimento de Testes Automatizados (Cypress):
   
 - Aqui está um exemplo de como os testes automatizados seriam implementados para o fluxo de login, utilizando Cypress.

Repositório do Desafio: Workflow de testes contínuos em Cypress no Github Actions

## Stacks
- Cypress
- Javascript
- Cypress Dashboard

## Rodando no Actions

1. Clicar na aba Actions no Github
2. Clicar no Workflow Cypress Tests, para rodar direto no Actions
3. Clicar no botão Run Workflow para executar os testes automatizados
   
Obs: Criei o botão para executar os testes automatizados sem precisar fazer commit (Pensei em executar os testes todas vez que fosse feito um commit) o que pra mim fez mais sentido a função de automatizar usando o actions.

## Gerar resultados no Cypress Cloud

1. Clicar na aba Actions no Github
2. Clicar no Workflow Cypress Cloud, para gerar os resultados direto no Cypress Cloud
3. Clicar no botão Run Workflow para executar os testes automatizados   
 - Executa os testes automatizados toda vez que clicar no botão Run Worklow.
 - Configurei as variaveis e o ambiente de testes com uma imagem docker node18, que contem os navegadores electron, chrome, e firefox
 - realizei os testes em multibrowser aumentando a cobertura dos testes, uma vez que rodei os teste no navegagor electron e depois rodei nos outros navegadores para testar a compatibilidade com outro navegadores

Obs: Criei o Workflow Cypress Cloud, para executar os testes automatizados e gerar o relatório direto no Cypress Cloud, gerando o Cypress results que dá acesso ao link do dashboard dos testes na nuvem, podendo acessar cada teste que por sinal passou todos, mostra a versão do navegador mostra o agrupamento que foi criado via script, qual que foi o sistema operacional e máquina que rodou o teste, se eu clicar no teste eu tenho aqui mais informações, clicando no play eu posso ver o vídeo posso ver a execução do teste em real time.

