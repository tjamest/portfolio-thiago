# Portfólio - Thiago Gioso Fernandes

Portfólio de navegação lateral para apresentar experiência em desenvolvimento de software, projetos técnicos e canais de contato. A interface está disponível em português e inglês.

## Arquitetura

O projeto usa HTML, CSS e JavaScript sem dependências de build. Essa escolha mantém o portfólio rápido, simples de publicar e fácil de atualizar.

```text
index.html                 estrutura das seções laterais e do rodapé de contato
assets/
  css/
    styles.css             tokens visuais, layout e componentes
  js/
    portfolio-data.js      conteúdo editável em português e inglês
    main.js                renderização, troca de idioma, navegação e transições
  images/                  foto, capas dos projetos e ícones próprios
```

O conteúdo fica separado do código de renderização em `portfolio-data.js`. Para atualizar textos, habilidades ou links de projetos, edite os dados nos dois idiomas nesse arquivo. O seletor no cabeçalho alterna o idioma da página e atualiza também os metadados e os rótulos acessíveis.

## Seções

1. Início
2. Sobre e formação
3. Habilidades
4. Projetos
5. Experiência
6. Contato fixo no rodapé

## Como abrir localmente

Abra `index.html` diretamente no navegador. O site não depende de servidor local nem de etapas de instalação para renderizar conteúdo e interações.
