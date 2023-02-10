# Projeto Trivia API

Projeto realizado durante módulo de Front-end do curso de desenvolvimento web da Trybe.

<details>
  <summary><strong>O que foi feito</strong></summary></br>

  Neste projeto desenvolvemos um jogo de perguntas e respostas baseado no jogo Trivia (tipo um show do milhão americano rs) utilizando `React` e `Redux`, desenvolvendo em grupo suas funcionalidades de acordo com as demandas definidas em um quadro `Kanban`.
  
Nesta aplicação, é possível:

- Logar no jogo e, se o email tiver cadastro no site Gravatar, ter sua foto associada ao perfil da pessoa usuária.
- Acessar a página referente ao jogo, onde se deverá escolher uma das respostas disponíveis para cada uma das perguntas apresentadas. A resposta deve ser marcada antes do contador de tempo chegar a zero, caso contrário a resposta deverá ser considerada errada.
- Ser redirecionada, após 5 perguntas respondidas, para a tela de score, onde o texto mostrado depende do número de acertos.
- Visualizar a página de ranking, se quiser, ao final de cada jogo.
- Configurar algumas opções para o jogo em uma tela de configuração acessível a partir do cabeçalho do app.
  
A aplicação foi desenvolvida com:

- `React`
- `JavaScript`
- `Redux`

</details>
<details>
  <summary><strong>Como rodar o projeto</strong></summary></br>
  
- [ ] git clone do repositório
- [ ] `npm install`
- [ ] `npm start`
- [ ] acessar no browser `http://localhost:3000`

</details>

<details>
  <summary><strong>:memo: Tecnologias utilizadas</strong></summary><br />
  
- `React`
- `JavaScript`
- `Redux`
- `RTL`
- `Thunk`
- `React router dom`

</details>
<details>
  <summary><strong>:memo: Habilidades</strong></summary><br />

- Criar um store Redux em aplicações React
- Criar reducers no Redux em aplicações React
- Criar actions no Redux em aplicações React
- Criar dispatchers no Redux em aplicações React
- Conectar Redux aos componentes React
- Criar actions assíncronas na sua aplicação React que faz uso de Redux.
- Escrever testes para garantir que sua aplicação possua uma boa cobertura de testes.

</details>

<details>
  <summary><strong>Devs responsáveis</strong></summary>

- [@Murilo-MRS](https://github.com/Murilo-MRS)
- [@felipe-lima-1](https://github.com/felipe-lima-1)
- [@miranda-almeida](https://github.com/miranda-almeida)
- [@mcalsing](https://github.com/mcalsing)

</details>
<!-- Olá, Tryber!
Esse é apenas um arquivo inicial para o README do seu projeto.
É essencial que você preencha esse documento por conta própria, ok?
Não deixe de usar nossas dicas de escrita de README de projetos, e deixe sua criatividade brilhar!
:warning: IMPORTANTE: você precisa deixar nítido:
- quais arquivos/pastas foram desenvolvidos por você; 
- quais arquivos/pastas foram desenvolvidos por outra pessoa estudante;
- quais arquivos/pastas foram desenvolvidos pela Trybe. -->

<!-- # Requisitos

:warning: **PULL REQUESTS COM ISSUES DE LINTER NÃO SERÃO AVALIADAS.** :warning:

Nesse projeto, a pessoa que joga deve conseguir completar o jogo e conseguir ver seu placar depois de responder todas as 5 perguntas, além de acessar a tela de configurações e de ranking.

:warning: **Lembrem-se de utilizar os conhecimentos adquiridos ao longo dos últimos projetos nas ferramentas do React como o Router, Link, Redux e testes para ajudá-los a completar os requisitos.** :warning:

## Tela de início/login

>Obs: É necessário que a página de Login tenha o caminho `src/pages/Login.js`

## 1. Crie a tela de login, onde a pessoa que joga deve preencher as informações para iniciar um jogo

**PRIORIDADE 0**

Criar a tela de login contendo as informações de nome e email, onde a pessoa que joga deve conseguir escrever seu nome e email nos inputs e o botão de jogar ("Play") deve estar desabilitado caso não tenha alguma dessas informações.
  
:bulb: Recomendamos que o Redux e o Router sejam configurados nesse requisito, para que os demais possam ser feitos paralelamente!

:warning: **Lembre-se das observações técnicas descritas acima para configurar a `store` do `Redux`.**

<details>
  <summary><strong> Observações técnicas:</strong></summary>

  * A pessoa que joga deve conseguir escrever seu nome no input de texto
  * A pessoa que joga deve conseguir escrever seu email no input de email
  * O botão "Play" deve ser desabilitado caso email e/ou nome não estejam preenchidos
  * O campo de texto para o nome deve possuir o atributo `data-testid` com o valor `input-player-name`
  * O campo de texto para o email deve possuir o atributo `data-testid` com o valor `input-gravatar-email`
  * O botão "Play" que leva a pessoa ao jogo deve possuir o atributo `data-testid` com o valor `btn-play`
</details>
<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  * Será validado se é possível escrever o nome da pessoa jogadora
  * Será validado se é possível escrever o email da pessoa jogadora
  * Será validado se o botão "Play" está desabilitado quando a pessoa jogadora não preencher nenhum campo
  * Será validado se o botão "Play" está desabilitado quando a pessoa jogadora escrever apenas o nome
  * Será validado se o botão "Play" está desabilitado quando a pessoa jogadora escrever apenas o email
  * Será validado se o botão "Play" está habilitado quando a pessoa jogadora preencher os campos de nome e email
</details>

---

## 2. Crie o botão de iniciar o jogo

  **PRIORIDADE 1**
  
  O botão "Play" deve fazer requisição para a API para obter o token e redirecionar a pessoa para tela de jogo

<details>
  <summary><strong> Observações técnicas:</strong></summary>

  * Ao clicar no botão "Play", uma requisição para a API do Trivia deve ser feita para obter o _token_ de jogador
  * Após clicar no botão "Play", a pessoa deve ser redirecionada para a tela do jogo. O redirecionamento deve acontecer somente após o retorno do token pela API.
  * O _token_ deve ser armazenado e enviado em todas as requisições seguintes.
  * Salve no `localStorage` o valor do _token_ recebido na API do Trivia, utilizando a chave `token`.
</details>
<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  * Será validado se ao clicar no botão "Play" o jogo é iniciado salvando um token de jogador
</details>

---

## 3. Crie um botão que leva a pessoa para tela de configuração

  **PRIORIDADE 1**
  
  A tela inicial deve conter um botão que leve para a configuração do jogo

<details>
  <summary><strong> Observações técnicas:</strong></summary>

  * O botão que leva a pessoa a tela de configurações deve possuir o atributo `data-testid` com o valor `btn-settings`
  * A tela de configurações deve possuir um título com o atributo `data-testid` contendo o valor `settings-title`
</details>
<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  * Será validado se o botão existe na página
  * Será validado se a tela de configurações possui um título
</details>

---

## 4. Desenvolva testes para atingir 90% de cobertura da tela de Login

> :bulb: Obs: Neste requisito vamos cobrir a nossa tela de login com testes unitários utilizando a biblioteca [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/), aproveite essa oportunidade para colocar em prática o [Desenvolvimento Orientado por Testes](https://blog.betrybe.com/tecnologia/tdd-test-driven-development/)

  **PRIORIDADE 1**
  
  Cobertura de testes da tela de Login

<details>
  <summary><strong> Observações técnicas:</strong></summary>

  * Os testes criados por você não irão influenciar os outros requisitos no avaliador. Você deverá desenvolver seus testes unitários/integração usando a biblioteca React Testing Library, enquanto o avaliador usará a biblioteca [Cypress](https://docs.cypress.io/) para avaliar os requisitos, inclusive os de cobertura.
  * Para os testes passarem é necessário que a página de Login tenha o caminho `src/pages/Login.js`
</details>
<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  * Será validado se ao executar `npm run test-coverage` é obtido os seguintes resultados:
      * `% Funcs` e `% Lines` da linha `Login` é maior ou igual a 90.
</details>

---

## Tela de jogo

>Obs: É necessário que a página de Game tenha o caminho `src/pages/Game.js`

## 5. Crie um _header_ que deve conter as informações da pessoa jogadora

  **PRIORIDADE 1**
  
  O _header_ deve conter as informações sobre a pessoa jogadora, como a imagem do Gravatar, o nome e o placar

<details>
  <summary><strong> Observações técnicas:</strong></summary>

  * A imagem do perfil vinda do Gravatar em um elemento que deve possuir o atributo `data-testid` com o valor `header-profile-picture`
  * O nome da pessoa em um elemento que deve possuir o atributo `data-testid` com o valor `header-player-name`
  * O placar zerado em um elemento que deve possuir o atributo `data-testid` com o valor `header-score`
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  * Será validado se a imagem do Gravatar está presente no header
  * Será validado se o nome da pessoa está presente no header
  * Será validado se o placar zerado está presente no header
</details>

---

## 6. Crie a página de jogo que deve conter as informações relacionadas à pergunta

  **PRIORIDADE 1**
  
  Deve ser feita a requisição para a API para popular o jogo com as perguntas, categoria e alternativas

<details><summary> Ilustração:</summary>

  ![img](req6.gif)
</details><br />
<details>
  <summary><strong> Observações técnicas:</strong></summary>

  * Acessar o jogo com um token inválido leva a um logout, excluindo o token do `localStorage` e redirecionando a página para a tela de login
  * A pergunta e suas alternativas de resposta devem ser recebidas da API do Trivia
  * Apenas **uma** pergunta deve ser exibida por vez
  * A categoria da pergunta (campo _category_) deve ser exibida em um elemento com o atributo `data-testid` com o valor `question-category` para a pessoa que está jogando
  * O texto da pergunta (campo _question_) deve ser exibido em um elemento com o atributo `data-testid` com o valor `question-text` para a pessoa que está jogando
  * <details><summary> O texto com as alternativas devem ser exibidos seguindo as regras abaixo:</summary>

    * Os botões das alternativas devem ser elementos irmãos; ou seja, não podem estar dentro de outra tag
    * O elemento com a alternativa correta deve possuir o atributo `data-testid` com o valor `correct-answer`
    * Os elementos com as alternativas incorretas devem possuir o atributo `data-testid` com o valor `wrong-answer-${index}`, com `${index}` iniciando com o valor `0`
    * As alternativas devem estar dentro de uma tag que possui o atributo `data-testid` com o valor `answer-options`
    * As alternativas devem ser exibidas em ordem aleatória
    * Dica: utilize botões (`<button/>`) para as alternativas
  </details>
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  * Será validado se o token inválido é excluído e a aplicação é redirecionada
  * Será validado se as respostas da API são tratadas corretamente
  * Será validado se a categoria da pergunta está presente
  * Será validado se o texto da pergunta está presente
  * Será validado se as alternativas estão presentes
  * Será validado se a quantidade de alternativas corretas é 1
  * Será validado se as alternativas estão posicionadas em ordem aleatória
</details>

---

## 7. Desenvolva o estilo que, ao clicar em uma resposta, a correta deve ficar verde e as incorretas, vermelhas

  **PRIORIDADE 2**
  
  Ao responder a pergunta, se a alternativa for correta, deve ficar verde, caso contrário, vermelha

<details>
  <summary><strong> Observações técnicas:</strong></summary>

  * Utilize a propriedade css `border` com o valor `3px solid rgb(6, 240, 15)` para a alternativa correta.
  * Utilize a propriedade css `border` com o valor `3px solid red` para as alternativas incorretas.
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  * Será validado se a cor da alternativa correta é "rgb(6, 240, 15)" ao acertar a questão
  * Será validado se a cor das alternativas incorretas é definida como "red" ao acertar a questão.
  * Será validado se a cor da alternativa correta é "rgb(6, 240, 15)" ao errar a questão
  * Será validado se a cor das alternativas incorretas é definida como "red" ao errar a questão
</details>

---

## 8. Desenvolva um timer onde a pessoa que joga tem 30 segundos para responder

  **PRIORIDADE 3**
  
  A página deve conter um timer com o tempo máximo de 30 segundos para responder. Caso ultrapasse o tempo, a pergunta é considerada errada

<details>
  <summary><strong> Observações técnicas:</strong></summary>

  * Caso a pergunta não seja respondida a tempo, a resposta é considerada como errada
  * Respostas incorretas não somam pontos ao placar
  * Um temporizador deve aparecer na tela da pessoa, começando de 30 segundos e indo de forma decrescente até zero
  * Após o tempo se esgotar, todos os botões das alternativas devem ser desabilitados

  :bulb: **Dica**: Lembre-se do `setTimeout` e do `setInterval`
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  * Será validado se é possível aguardar 5 segundos e responder a alternativa correta
  * Será validado se ao aguardar mais de 30 segundos para responder, todos botões estão desabilitados
</details>

---

## 9. Crie o placar com as seguintes características:

  **PRIORIDADE 3**
  
  Ao clicar na resposta correta, pontos devem ser somados no placar da pessoa que está jogando

<details>
  <summary><strong> Observações técnicas:</strong></summary>

  * Você deve salvar a pontuação **atual** no estado no redux na chave player.score
  * :bulb: Leia a sub-seção Observações técnicas, na seção [:convenience_store: Desenvolvimento](#orientações) para mais detalhes
  * Respostas erradas não devem somar ao placar
  * A fórmula para cálculo dos pontos por pergunta é: `10 + (timer * dificuldade)`, onde timer é o tempo restante no contador de tempo e dificuldade é `hard: 3, medium: 2, easy: 1`, dependendo da pergunta. :bulb: Exemplo: Se no momento da resposta correta o timer estiver contando 17 segundos, e a dificuldade da pergunta é 2 (média), a pontuação deve ser: `10 + (17 * 2) = 44`
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

   * Será validado se os pontos são somados ao acertar uma questão
   * Será validado se os pontos não são somados ao errar uma questão
</details>

---

## 10. Crie um botão de `Next` que apareça após a resposta ser dada

  **PRIORIDADE 3**
  
  Deve aparecer um botão de próxima ("Next") pergunta após a resposta ser dada

<details>
  <summary><strong> Observações técnicas:</strong></summary>

  * O botão "Next" deve possuir o atributo `data-testid` com o valor `btn-next`
  * Ao clicar nesse botão, a próxima pergunta deve aparecer na tela
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  * Será validado se o botão "Next" não existe no início do jogo
  * Será validado se o botão "Next" está presente quando a pergunta é respondida corretamente
  * Será validado se o botão "Next" está presente quando a pergunta é respondida incorretamente
</details>

---

## 11. Desenvolva o jogo de forma que a pessoa jogadora deve responder 5 perguntas no total

  **PRIORIDADE 2**
  
  O jogo deve ser composto por 5 perguntas, onde, a cada nova pergunta, o timer é reiniciado. Após respondê-las, a pessoa que joga deve ser redirecionada para a tela de feedback

<details>
  <summary><strong> Observações técnicas:</strong></summary>

  * A cada nova pergunta o temporizador deve ser reiniciado para 30 segundos
  * Após a quinta pergunta, o botão "Next" deve redirecionar a pessoa para a tela de _Feedback_
  * Para perguntas com type:"boolean", mostrar somente 2 campos (um para cada resposta possível)
  * Para perguntas com type:"multiple", mostrar a quantidade necessária de campos (um para cada resposta possível)
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  * Será validado se ao clicar no botão "Próxima", uma nova pergunta é exibida
  * Será validado se os pontos são somados de forma correta ao acertar todas as respostas
  * Será validado se os pontos são somados de forma correta ao errar todas as respostas
  * Será validado se a pessoa usuária é redirecionada para a tela de _feedback_ após a quinta pergunta
</details>

---

## Tela de feedback

>Obs: É necessário que a página de Feedback tenha o caminho `src/pages/Feedback.js`

## 12. Desenvolva o header de _feedback_ que deve conter as informações da pessoa jogadora

  **PRIORIDADE 2**
  
  A tela de feedback deve conter as informações da pessoa que joga, incluindo o placar com o valor referente ao desempenho no jogo

<details>
  <summary><strong> Observações técnicas:</strong></summary>

  * A imagem do perfil vinda do Gravatar em um elemento que deve possuir o atributo `data-testid` com o valor `header-profile-picture`
  * O nome da pessoa em um elemento que deve possuir o atributo `data-testid` com o valor `header-player-name`
  * O placar com o valor **atual** em um elemento que deve possuir o atributo `data-testid` com o valor `header-score`
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  * Será validado se a imagem do Gravatar está presente no header
  * Será validado se o nome da pessoa está presente no header
  * Será validado se o placar com o valor atual está presente no header
</details>

---

## 13. Crie a mensagem de _feedback_ para ser exibida a pessoa usuária

  **PRIORIDADE 1**
  
  A tela de feedback deve exibir uma mensagem relacionada ao desempenho da pessoa que jogou

<details>
  <summary><strong> Observações técnicas:</strong></summary>

  * A mensagem deve ser "Could be better..." caso a pessoa acerte menos de 3 perguntas
  * A mensagem deve ser "Well Done!" caso a pessoa acerte 3 perguntas ou mais
  * O elemento da mensagem de _feedback_ deve possuir o atributo `data-testid` com o valor `feedback-text`
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  * Será validado se ao acertar menos de 3 perguntas a mensagem de _feedback_ é "Could be better..."
  * Será validado se ao acertar 3 perguntas a mensagem de _feedback_ é "Well Done!"
  * Será validado se ao acertar mais de 3 perguntas a mensagem de _feedback_ é "Well Done!"
</details>

---

## 14. Exiba as informações relacionadas aos resultados obtidos para a pessoa usuária

  **PRIORIDADE 1**
  
  A tela de feedback deve exibir informações sobre o desempenho da pessoa, como o placar final e o número de perguntas que acertou

<details>
  <summary><strong> Observações técnicas:</strong></summary>

  * O placar final deve ser mostrado em um elemento com o atributo `data-testid` com o valor `feedback-total-score`
  * O número de perguntas que a pessoa acertou deve ser exibido em um elemento com o atributo `data-testid` com o valor `feedback-total-question`
  * Os elementos com os `data-testid` devem possuir apenas o número
  * No `estado do redux` as chaves score e assertions devem ser do tipo number
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  * Será validado se o número exibido é correto quando a pessoa usuária não acerta nenhuma pergunta
  * Será validado se o número exibido é correto quando a pessoa usuária acerta 2 perguntas
  * Será validado se o número exibido é correto quando a pessoa usuária acerta 4 perguntas
</details>

---

## 15. Crie a opção para a pessoa jogadora poder jogar novamente

  **PRIORIDADE 3**
  
  A pessoa terá a opção de jogar novamente ("Play Again") que, ao ser clicada, levará para a tela de inicial

<details>
  <summary><strong> Observações técnicas:</strong></summary>
  
  * Ao clicar no botão "Play Again", a pessoa deve ser redirecionada para a tela de início (login)
  * O botão para "Play Again" deve possuir o atributo `data-testid` com o valor `btn-play-again`
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  * Será validado se a pessoa é redirecionada para tela inicial ao clicar no botão "Play Again"
</details>

---

## 16. Crie a opção para a pessoa jogadora poder visualizar a tela de _ranking_

  **PRIORIDADE 3**
  
  Deve existir um botão que redirecione a pessoa para a tela de ranking

<details>
  <summary><strong> Observações técnicas:</strong></summary>

  * Ao clicar no botão "Ranking", a pessoa deve ser redirecionada para a tela de _ranking_
  * O botão para ir para a tela de _ranking_ deve possuir o atributo `data-testid` com o valor `btn-ranking`
  * A tela de _ranking_ deve possuir um título com o atributo `data-testid` contendo o valor `ranking-title`
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  * Será validado se ao clicar no botão "Ranking" a pessoa é redirecionada para tela de ranking
</details>

---

## 17. Desenvolva testes para atingir 90% de cobertura da tela de Feedbacks

> :bulb: Obs: Neste requisito vamos cobrir a nossa tela de Feedbacks com testes unitários utilizando a biblioteca [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/), aproveite essa oportunidade para colocar em prática o [Desenvolvimento Orientado por Testes](https://blog.betrybe.com/tecnologia/tdd-test-driven-development/)

  **PRIORIDADE 2**
  
  Cobertura de testes da tela de Feedbacks

<details>
  <summary><strong> Observações técnicas:</strong></summary>

  * Os testes criados por você não irão influenciar os outros requisitos no avaliador. Você deverá desenvolver seus testes unitários/integração usando a biblioteca React Testing Library, enquanto o avaliador usará a biblioteca [Cypress](https://docs.cypress.io/) para avaliar os requisitos, inclusive os de cobertura.
  * Para os testes passarem é necessário que a página de Feedbacks tenha o caminho `src/pages/Feedback.js`
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  * Será validado se ao executar `npm run test-coverage` é obtido os seguintes resultados:
      * `% Funcs` e `% Lines` da linha `Feedback` é maior ou igual a 90.
</details>

---

## Tela de ranking

>Obs: É necessário que a página de Ranking tenha o caminho `src/pages/Ranking.js`

## 18. Crie um botão para ir ao início

  **PRIORIDADE 2**
  
  O botão deve redirecionar a pessoa para a tela de inicial (login)

<details>
  <summary><strong> Observações técnicas:</strong></summary>

  * Esse botão deve possuir o atributo `data-testid` com o valor `btn-go-home`
  * Esse botão deve enviar a pessoa para o início (tela de preenchimento dos dados)
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  * Será validado se ao clicar no botão a pessoa volta para a tela inicial
</details>

---

## 19. Crie o conteúdo da tela de _ranking_

  **PRIORIDADE 2**
  
  A tela de ranking deve possuir uma lista com a imagem, nome e pontuação das pessoas que jogaram e deve ficar armazenado no localStorage

<details>
  <summary><strong> Observações técnicas:</strong></summary>

  * Deve-se mostrar uma lista com a imagem de perfil vinda do Gravatar, nome e pontuação das pessoas que jogaram em ordem decrescente (da maior pontuação para a menor)
  * Os elementos com os nomes das pessoas que jogaram devem possuir o atributo `data-testid` com o valor `player-name-${index}`, onde `${index}` é iniciado em zero
  * Os elementos com as pontuações das pessoas que jogaram devem possuir o atributo `data-testid` com o valor `player-score-${index}`, onde `${index}` é iniciado em zero
  * O ranking deve ser armazenado no navegador através do `localStorage`.
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  * Será validado se existe uma pessoa no _ranking_
  * Será validado se existem duas pessoas no _ranking_
  * Será validado se o _ranking_ é ordenado pela pontuação
</details>

---

## 20. Desenvolva testes para atingir 90% de cobertura da tela de Ranking

> :bulb: Obs: Neste requisito vamos cobrir a nossa tela de Ranking com testes unitários utilizando a biblioteca [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/), aproveite essa oportunidade para colocar em prática o [Desenvolvimento Orientado por Testes](https://blog.betrybe.com/tecnologia/tdd-test-driven-development/)

  **PRIORIDADE 2**
  
  Cobertura de testes da tela de Ranking

<details>
  <summary><strong> Observações técnicas:</strong></summary>

  * Os testes criados por você não irão influenciar os outros requisitos no avaliador. Você deverá desenvolver seus testes unitários/integração usando a biblioteca React Testing Library, enquanto o avaliador usará a biblioteca [Cypress](https://docs.cypress.io/) para avaliar os requisitos, inclusive os de cobertura.
  * Para os testes passarem é necessário que a página de Ranking tenha o caminho `src/pages/Ranking.js`
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  * Será validado se ao executar `npm run test-coverage` é obtido os seguintes resultados:
      * `% Funcs` e `% Lines` da linha `Ranking` é maior ou igual a 90.
</details>

---

## Testes da tela de jogo

## 21. Desenvolva testes para atingir 90% de cobertura da tela de Jogo

> :bulb: Obs: Neste requisito vamos cobrir a nossa tela de Jogo com testes unitários utilizando a biblioteca [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/), aproveite essa oportunidade para colocar em prática o [Desenvolvimento Orientado por Testes](https://blog.betrybe.com/tecnologia/tdd-test-driven-development/)

  **PRIORIDADE 3**
  
  Cobertura de testes da tela de Jogo

<details>
  <summary><strong> Observações técnicas:</strong></summary>

  * Os testes criados por você não irão influenciar os outros requisitos no avaliador. Você deverá desenvolver seus testes unitários/integração usando a biblioteca React Testing Library, enquanto o avaliador usará a biblioteca [Cypress](https://docs.cypress.io/) para avaliar os requisitos, inclusive os de cobertura.
  * Para os testes passarem é necessário que a página de Jogo tenha o caminho `src/pages/Game.js`
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  * Será validado se ao executar `npm run test-coverage` é obtido os seguintes resultados:
      * `% Funcs` e `% Lines` da linha `Game` é maior ou igual a 90.
</details>

---

## Testes de cobertura da aplicação

## 22. Desenvolva testes para atingir 95% de cobertura total

> :bulb: Obs: Neste requisito vamos cobrir a nossa aplicação com testes unitários utilizando a biblioteca [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/), aproveite essa oportunidade para colocar em prática o [Desenvolvimento Orientado por Testes](https://blog.betrybe.com/tecnologia/tdd-test-driven-development/)

  **PRIORIDADE 3**
  
  Cobertura de testes da aplicação

<details>
  <summary><strong> Observações técnicas:</strong></summary>

  * Os testes criados por você não irão influenciar os outros requisitos no avaliador. Você deverá desenvolver seus testes unitários/integração usando a biblioteca React Testing Library, enquanto o avaliador usará a biblioteca [Cypress](https://docs.cypress.io/) para avaliar os requisitos, inclusive os de cobertura.
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  * Será validado se ao executar `npm run test-coverage` é obtido o seguinte resultado:
      * `% Branch` da linha `All files` é maior ou igual a 95.
</details>

---

# Requisitos não avaliativos

## Tela de configurações

### 23. Ao mudar o valor do dropdown categoria, apenas perguntas da categoria selecionada devem aparecer para a pessoa que está jogando. Essa configuração será identificada pela chave category no retorno da API;

---

### 24. Ao mudar o valor do dropdown dificuldade, apenas perguntas da dificuldade selecionada devem aparecer para a pessoa que está jogando. Essa configuração será identificada pela chave difficulty no retorno da API;

---

### 25. Ao mudar o valor do dropdown tipo, apenas perguntas do tipo selecionado devem aparecer para a pessoa que está jogando. Essa configuração será identificada pela chave type no retorno da API.

***Obs: A maneira como a API deve ser estruturada segue o seguinte modelo: https://opentdb.com/api_config.php*** -->