# 🎲 Jogo de Adivinhação em JavaScript

Este é um projeto simples e divertido que implementa um jogo de adivinhação. O objetivo é adivinhar um número aleatório gerado pelo sistema. Cada tentativa fornece dicas se o número correto é maior ou menor do que o palpite. O jogo reinicia automaticamente após o acerto.

## 🔗 [Experimente o jogo online!](https://logica-js-2.vercel.app/)

---

## 📋 Funcionalidades

- **Número aleatório sem repetições:** O sistema escolhe um número único a cada rodada.
- **Dicas para os palpites:** Indica se o número correto é maior ou menor que o escolhido.
- **Contador de tentativas:** Informa quantas tentativas foram necessárias para acertar.
- **Botão de reiniciar:** Disponível após o acerto.

---

## 🛠️ Tecnologias Utilizadas

- **HTML:** Para a estrutura básica do jogo.
- **CSS:** Para estilização simples (se aplicável).
- **JavaScript:** Para a lógica do jogo e manipulação do DOM.

---

## 🚀 Como Funciona?

1. Escolha um número entre **1 e 10** (valor padrão de `limiteNumerico`).
2. Digite o número no campo de entrada e pressione **Enter** ou clique no botão de verificar.
3. Receba dicas:
   - O número é maior ou menor que o palpite.
   - Mensagem de vitória ao acertar!
4. Após o acerto, o botão de **reiniciar** estará habilitado para começar uma nova rodada.

---

## 📂 Estrutura do Código

### Lógica do Jogo
- **Geração de número aleatório:** Implementada com `Math.random()`, garantindo que os números não se repitam enquanto houver números disponíveis.
- **Verificação do palpite:** Compara o número escolhido pelo jogador com o gerado.
- **Dicas ao jogador:** Atualiza dinamicamente as mensagens na tela.
- **Reinício do jogo:** Zera as variáveis e gera um novo número.

### Principais Funções

- `gerarNumeroAleatorio()`: Gera e retorna um número aleatório único.
- `verificarChute()`: Verifica se o palpite está correto e fornece feedback.
- `limparCampo()`: Limpa o campo de entrada após cada tentativa.
- `reiniciarJogo()`: Reinicia o jogo após a vitória.
- `exibirTexto(tag, texto)`: Atualiza dinamicamente o texto de um elemento HTML.