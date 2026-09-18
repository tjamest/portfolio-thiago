# Portfólio - Thiago Gioso Fernandes

Site de página única para apresentar experiência, projetos de dados e canais de contato.

## Arquitetura

O projeto usa HTML, CSS e JavaScript sem dependências de build. Essa escolha mantém o portfólio rápido, simples de publicar e fácil de atualizar.

```text
index.html                 estrutura semântica e pontos de montagem
assets/
  css/
    styles.css             tokens visuais, layout e componentes
  js/
    portfolio-data.js      conteúdo editável do portfólio
    main.js                renderização dos cards e interações
  images/                  foto, capas dos projetos e ícones próprios
```

O conteúdo fica separado do código de renderização em `portfolio-data.js`. Para atualizar textos, habilidades ou links de projetos, a edição deve acontecer preferencialmente nesse arquivo.

## Seções planejadas

1. Apresentação
2. Sobre
3. Projetos
4. Experiência
5. Stack
6. Formação e certificações
7. Contato

## Como abrir localmente

Abra `index.html` diretamente no navegador. O site não depende de servidor local nem de etapas de instalação para renderizar conteúdo e interações.
