# Semana 1: Introdução ao React

## O que são SPA?

Uma **SPA (Single Page Application)** é uma aplicação web que carrega uma única página HTML e atualiza dinamicamente apenas partes do conteúdo conforme o usuário interage com a página. Isso melhora a experiência do usuário, já que evita recarregamentos completos de página.

### Benefícios:
- **Carregamento Rápido**: Depois do primeiro carregamento, as interações subsequentes são muito mais rápidas.
- **Melhor Experiência do Usuário**: Sem recarregamentos completos de página, a navegação é mais fluida.
- **Interatividade**: A interface pode ser mais interativa, pois o JavaScript controla as atualizações da página em tempo real.

## Perdas

### SEO

Aplicações SPA podem ter **desvantagens em SEO (Search Engine Optimization)**. Isso acontece porque, em muitos casos, os mecanismos de busca têm dificuldade em indexar corretamente o conteúdo dinâmico carregado via JavaScript. Por exemplo:

- Um site como o **Stack Overflow** poderia perder tráfego orgânico se fosse completamente uma SPA, pois as páginas carregadas dinamicamente poderiam não ser bem indexadas pelos motores de busca.

### Sobrecarga no Cliente

Como a maior parte da renderização é feita no lado do cliente (navegador do usuário), dispositivos mais fracos podem ser sobrecarregados. No entanto, podemos mitigar isso utilizando técnicas como:

- **SSR (Server-Side Rendering)**: Onde a renderização inicial da página é feita no servidor, e o HTML já é enviado pronto para o cliente.

## Frameworks para SPA

Aqui estão alguns dos principais frameworks que facilitam o desenvolvimento de SPAs:

### Vue.js
Um framework progressivo, ideal para adicionar recursos de SPA em partes de uma aplicação.

### Angular.js
Desenvolvido pelo Google, é um framework completo com tudo que você precisa para criar SPAs.

### React.js
Biblioteca JavaScript para construir interfaces de usuário. React é a escolha mais popular para construir SPAs, focado em componentes reutilizáveis.

## Projeto da Semana

Nesta semana, você criará uma **To-do List Simples** usando conceitos básicos de React, como componentes e props.

### Tecnologias Utilizadas:
- React (com `create-react-app`)

### Funcionalidades do Projeto:
- Adicionar tarefas à lista.
- Remover tarefas da lista.

### Instruções:
1. Crie um novo projeto React com `npx create-react-app semana1-todo-list`.
2. Desenvolva a aplicação conforme as funcionalidades listadas acima.
3. Faça o commit e publique no GitHub.


### Configurações

- Instalar [Material UI](https://mui.com/material-ui/getting-started/installation/)
- Usar overrrides no package.md
- Realizar a primeira build
- Criar theme.js
- Usar palleta no [coolers.co](https://coolors.co/)
- Instalar Extensão Prettier
- Instalar Extensão Tailwind Shades

---
