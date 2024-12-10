+++ 
draft = true
date = 2024-12-08T20:26:44-03:00
title = "Criando um blog com Hugo e Github/Cloudflare Pages"
description = "Como criar um website \"serverless\" com Hugo e Cloudflare/Github Pages"
slug = ""
authors = ["andre-su"]
tags = ["tutoriais", "projetos", "blog"]
categories = ["tutoriais"]
externalLink = ""
series = []
+++

### Dificuldade Fácil

**Requisitos:**

- Conhecimento básico sobre terminal, git e github
- Conhecimento básico sobre HTML, CSS e Javascript
- Instalar o Visual Studio Code (recomendado)
- Possuir ou criar uma conta no Github
- Possuir ou criar uma conta na Cloudflare (caso queira publicar aqui)

## Introdução

Este blog é montado em cima de páginas estáticas de puro HTML.
Páginas assim, são muito velozes para carregar e são uma forma bem simples de carregar páginas da web e era assim que as coisas funcionavam (há muito tempo atrás...) antes de gerenciadores de conteúdo dinâmicos como o Wordpress.
Para modernizar um pouco as coisas, decidi utilizar um gerador de site estático que pega o conteúdo do site e transforma ele em páginas estáticas utilizando alguns modelos de estrutura HTML.

Funciona de uma forma parecida com o diagrama abaixo:
![diagrama simplificado de como funciona um gerador de site estático](/images/content/SSG.png)

Entre as muitas opções como [Jelykll](https://jekyllrb.com/), [Nuxtjs](https://nuxtjs.org/) e [Astro](https://astro.build/), decidi usar o [Hugo](https://gohugo.io/).
É uma ferramenta de geração de site estático de código aberto muito flexível, com várias funções interessantes e que atendeu muito bem minhas espectativas para este projeto.

## Hugo

Você pode explorar a incrível documentação do Hugo [aqui](https://gohugo.io/documentation/).
**Basicamente...**
> instale o **hugo**
instale o **git**
adicione um **tema**
configure o **hugo.toml** <-- arquivo de configuração do hugo
adicione **conteúdo**
publique usando **Github Pages**

### Instalando o necessário

Para começar, você precisa [instalar](https://gohugo.io/getting-started/installing/) o Hugo com uma versão compatível ao seu sistema operacional e ambiente de produção. Para debian, ubuntu e derivados use `sudo apt-get install hugo`.
Se a instalação for bem sucedida, você poderá usar o comando `hugo version` no seu terminal favorito. A resposta deve ser a versão do aplicativo instalado:
![Captura de tela mostrando o resultado do comando hugo version](/images/content/hugo-version.png)

Agora instale o git, você pode encontrar instruções adequadas [aqui](https://git-scm.com/downloads). Para debian, ubuntu e derivados use `sudo apt-get install git`.
Caso bem sucedido, o comando `git version` irá mostrar a versão instalada:
![Captura de tela mostrando o resultado do comando git version](/images/content/git-version.png)

### Iniciando um projeto

Para começar um novo site com o Hugo é muito simples, digite `hugo new site meu-site`.
Com isso foi criada uma pasta com uma estrutura de arquivos chamada "meu-site".
![Exemplo da estrutura de pastas e arquivos criada pelo comando](/images/content/hugo-file-structure.png)
Vamos entrar nela e começar a construir! Use `cd meu-site` para entrar na pasta.
Crie um repositório git na pasta com `git init` e você terá um projeto criado e pronto para subir no Github.

### Escolhendo um tema

Agora você precisaria criar os modelos de HTML, CSS e Javascript que irão moldar o seu site.
Porém o Hugo possui uma galeria de temas já construídos pela comunidade, você pode ver todos eles [aqui](https://themes.gohugo.io/).
Vamos adiantar as coisas e utilizar um tema chamado Hugo-coder. Você pode acessar o [site](https://themes.gohugo.io/themes/hugo-coder/) e o [repositório](https://github.com/luizdepra/hugo-coder) do tema para ver como ele funciona e conferir a documentação.
Vamos colocar ele como um submódulo do repositório usando `git submodule add https://github.com/luizdepra/hugo-coder.git themes/hugo-coder`.
Para adicionar ele como tema do site, adicione a linha `theme = 'hugo-coder'` ao arquivo "hugo.toml" na pasta do seu site ou use o comando `echo "theme = 'hugo-coder'" >> hugo.toml` para fazer isso automaticamente.
![Resultado do comando para adicionar o tema hugo-coder](/images/content/hugo-theme-config.png)

### Iniciando o site criado

Depois de toda essa configuração, vamos iniciar o servidor de testes pela primeira vez!

Digite `hugo server` para iniciar.
Isso irá gerar uma nova pasta chamada "public" na pasta do seu site. Dentro dela estão todas as páginas estáticas que serão usadas no site.
O resultado do comando será algo parecido como isso:
![Primeira inicialização do servidor Hugo](/images/content/hugo-server-start.png)

Agora você pode entrar na url `https://localhost:1313` para ver seu novo site!
![Captura da tela com o site hospedado no link acima](/images/content/website-first-preview.png)
Para parar você pode usar 'CTRL + C' no terminal.

### Adicionando conteúdo

Está bem sem graça aqui, precisamos adicionar mais conteúdo...
Para personalizar conteúdo na página inicial, podemos modificar o `hugo.toml`.


## Agora vamos publicar

### GitHub Pages

### Cloudflare Pages

## Fontes
