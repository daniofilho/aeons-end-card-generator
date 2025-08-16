# Aeon's End - Gerador de Cartas

Um gerador de cartas desenvolvido para facilitar a criação de expansões fan made de Aeon's End.
O projeto nasceu para automatizar a criação de cartas da expansão Clair Obscure Expedition 33, publicada por um fã no BGG.

A ideia é simples: ao invés de montar manualmente cada carta, basta preencher as informações no arquivo
`src/scripts/expedition-cards.ts` e o script gera automaticamente as imagens em JPG.

### ⚠️ Aviso

Este projeto não é oficial e foi criado para uso pessoal em expansões fan made.

Você ainda precisará juntar as cartas em PDF e prepará-las para impressão usando outro software.

O uso é de sua inteira responsabilidade.

## Uso

`yarn` => Instalar dependências;

`yarn dev` => Incia um servidor local rodando em http://localhost:5173/;

`yarn preview` => Preview da aplicação em um servidor local rodando em http://localhost:4173/;

`yarn build` => Cria o build de produção na pasta `/dist`;

---

# Aeon's End - Card Generator

A card generator created to make it easier to design fan made expansions for Aeon's End.
The project was originally developed to automate the creation of cards for the Clair Obscure Expedition 33 expansion, published by a fan on BGG.

The idea is simple: instead of manually creating each card, you just need to fill in the information in
`src/scripts/expedition-cards.ts`, and the script will automatically generate the cards as JPG images.

### ⚠️ Disclaimer

This project is not official and was created for personal use in fan made expansions.

You will still need to assemble the cards into a PDF and format them for printing using another software.

Use at your own risk.

## Usage

`yarn` => Install dependencies;

`yarn dev` => Start a local server running on http://localhost:5173/;

`yarn preview` => Preview production build on a local server running on http://localhost:4173/;

`yarn build` => Create production build on `/dist` folder;
