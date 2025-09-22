# Challenge-amigo-secreto

# 🎁 Sorteio de Amigo Secreto (JavaScript)

Este projeto é uma aplicação simples feita em HTML e JavaScript para realizar o **sorteio de um amigo secreto** de forma interativa.

---

## 🚀 Funcionalidades

- Adicionar nomes de amigos a uma lista
- Exibir a lista de amigos adicionados
- Sortear um amigo secreto aleatório que ainda não foi sorteado
- Exibir o nome sorteado na tela

---

## 🧠 Como funciona o código

### 🔹 Variáveis principais

- `amigos`: array que armazena os nomes dos amigos inseridos.
- `amigosSorteados`: array com os nomes que já foram sorteados.
---

### 🔹 Funções

#### `adicionarAmigo()`

- Captura o nome digitado no campo de entrada.
- Verifica se o nome está vazio (exibe um alerta).
- Adiciona o nome ao array `amigos`.
- Atualiza a lista de amigos exibida na tela.
- Limpa o campo de entrada.

#### `atualizarListaAmigos()`

- Atualiza visualmente a `<ul>` ou `<ol>` na página com os nomes atuais do array `amigos`.

#### `sortearAmigo()`

- Verifica se há amigos suficientes para o sorteio (mínimo de 2).
- Gera um nome aleatório que ainda **não foi sorteado**.
- Adiciona o nome sorteado à lista de `amigosSorteados`.
- Mostra o resultado do sorteio na tela.

---

## 🛑 Validações implementadas

- ❌ Não permite adicionar nomes vazios.
- ❌ Impede o sorteio com menos de 2 amigos.
- ❌ Evita sortear o mesmo nome mais de uma vez.

---
