# 🛒 Quicklist — Lista de Compras

Aplicação simples para gerenciar a lista de compras da semana. É possível adicionar itens, marcar como concluídos e remover quando não forem mais necessários, com feedback visual para as ações realizadas.

Projeto desenvolvido como **desafio prático da [Rocketseat](https://app.rocketseat.com.br/projects/desafio-pratico-lista-de-compras)** (Frontend · Intermediário).

🔗 **Demo:** [cristiandelima.github.io/lista-de-compras](https://cristiandelima.github.io/lista-de-compras/)

<!-- Adicione um print da aplicação aqui:
![Preview do Quicklist](./assets/preview.png)
-->

## ✨ Funcionalidades

- Lista iniciada com itens pré-cadastrados (Pão de forma, Café preto, Suco de laranja e Bolacha)
- Adicionar novos itens pelo campo de texto e pelo botão **Adicionar item**
- Campo de texto limpo automaticamente após a adição
- Bloqueio de itens vazios
- Marcar e desmarcar itens como concluídos (texto riscado)
- Remover itens da lista pelo ícone de lixeira
- Alerta na parte inferior ao remover um item (**"O item foi removido da lista"**), que some sozinho após alguns segundos ou ao clicar no **X**
- Layout responsivo para desktop e mobile

## 🛠️ Tecnologias

- **HTML5** — estrutura semântica da página
- **CSS3** — variáveis customizadas (`:root`), nesting, media queries e checkbox customizado com `appearance: none`
- **JavaScript (vanilla)** — manipulação do DOM e eventos

## 📁 Estrutura do projeto

```
lista-de-compras/
├── assets/       # ícones e imagens
├── styles/       # arquivos CSS
├── index.html    # estrutura da página
└── script.js     # lógica da aplicação
```

## 🚀 Como executar

Não há dependências para instalar. Basta clonar o repositório e abrir o `index.html` no navegador:

```bash
# Clone o repositório
git clone https://github.com/CristianDeLima/lista-de-compras.git

# Acesse a pasta
cd lista-de-compras
```

Depois, abra o `index.html` diretamente no navegador ou use uma extensão como o **Live Server** (VS Code) para recarregar a página automaticamente durante o desenvolvimento.

## 🎯 Objetivos de aprendizado

- Manipulação do DOM com JavaScript
- Tratamento de eventos (click, change)
- Estilização com variáveis CSS e design responsivo
- Customização de elementos nativos de formulário (`input[type="checkbox"]`)
- Feedback visual ao usuário (alerta de remoção, item concluído)

## 📄 Sobre o desafio

O objetivo do desafio é desenvolver o **Quicklist**, uma aplicação simples para gerenciar a lista de compras da semana. O usuário pode adicionar novos itens, marcar como concluídos e também removê-los da lista quando não forem mais necessários.

Além disso, a interface deve ser responsiva, funcionando tanto em desktop quanto em mobile, com feedback visual para as ações realizadas, como a remoção de itens.

O enunciado completo e os requisitos estão disponíveis na plataforma da Rocketseat:
[Desafio prático: Lista de compras]

## 👤 Autor

Feito por **Cristian de Lima**

[![GitHub](https://img.shields.io/badge/GitHub-CristianDeLima-181717?logo=github)](https://github.com/CristianDeLima)
