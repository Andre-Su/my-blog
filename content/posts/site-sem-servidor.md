+++ 
draft = false
date = 2024-12-08T20:26:44-03:00
title = "Criando um site com Hugo e Github Pages"
description = "Como criar um site com Hugo e Github Pages"
slug = ""
authors = ["andre-su"]
tags = ["tutoriais", "projetos", "blog"]
categories = ["tutoriais"]
externalLink = ""
series = []
+++

## Introdução

Este site é montado em cima de páginas estáticas de puro HTML.
Páginas assim, são muito velozes para carregar e são uma forma bem simples de carregar páginas da web e era assim que as coisas funcionavam (há muito tempo atrás...) antes de gerenciadores de conteúdo dinâmicos como o Wordpress.
Para modernizar um pouco as coisas, decidi utilizar um gerador de site estático que pega o conteúdo do site e transforma ele em páginas estáticas utilizando alguns modelos de estrutura HTML.

Funciona de uma forma parecida com o diagrama abaixo:
![diagrama simplificado de como funciona um gerador de site estático](SSG.png)

Entre as muitas opções disponíveis como [Jelykll](https://jekyllrb.com/), [Nuxtjs](https://nuxtjs.org/) e [Astro](https://astro.build/), decidi usar o [Hugo](https://gohugo.io/).
É uma ferramenta de geração de site estático de código aberto muito flexível, com várias funções interessantes e que atendeu muito bem minhas espectativas para este projeto.

Aqui irei fazer um passo a passo sobre como criar um site com várias páginas, adicionar sistema de multi linguagem e criar seu primeiro post.

### Dificuldade Fácil

### Requisitos

- Conhecimento básico sobre terminal, git e github
- Conhecimento básico sobre HTML, CSS e Javascript
- Instalar o Visual Studio Code (recomendado)
- Possuir ou criar uma conta no Github
- Possuir ou criar uma conta na Cloudflare (caso queira publicar aqui)

## 1. Hugo

Você pode explorar a incrível documentação do Hugo [aqui](https://gohugo.io/documentation/).
**Basicamente...**
> instale o **hugo**
instale o **git**
adicione um **tema**
configure o **hugo.toml** <-- arquivo de configuração do hugo
adicione **conteúdo**
publique usando **Github Pages**

### 1.2 Instalando o necessário

Para começar, você precisa [instalar](https://gohugo.io/getting-started/installing/) o Hugo com uma versão compatível ao seu sistema operacional e ambiente de produção. Para debian, ubuntu e derivados use `sudo apt-get install hugo`.
Se a instalação for bem sucedida, você poderá usar o comando `hugo version` no seu terminal favorito. A resposta deve ser a versão do aplicativo instalado:
![Captura de tela mostrando o resultado do comando hugo version](hugo-version.png)

Agora instale o git, você pode encontrar instruções adequadas [aqui](https://git-scm.com/downloads). Para debian, ubuntu e derivados use `sudo apt-get install git`.
Caso bem sucedido, o comando `git version` irá mostrar a versão instalada:
![Captura de tela mostrando o resultado do comando git version](git-version.png)

### 1.3 Iniciando um projeto

Criando um novo site com o Hugo é muito simples, digite `hugo new site meu-site`.
Com isso foi criada uma pasta com uma estrutura de arquivos chamada "meu-site".
![Exemplo da estrutura de pastas e arquivos criada pelo comando](hugo-file-structure.png)
Vamos entrar nela e começar a construir! Use `cd meu-site` para entrar na pasta.
Crie um repositório git na pasta com `git init` e você terá um projeto criado e pronto para subir no Github.

### 1.4 Escolhendo um tema

Agora você precisaria criar os modelos de HTML, CSS e Javascript que irão moldar o seu site.
Porém o Hugo possui uma galeria de temas já construídos pela comunidade, você pode ver todos eles [aqui](https://themes.gohugo.io/).
Vamos adiantar as coisas e utilizar um tema chamado Hugo-coder. Você pode acessar o [site](https://themes.gohugo.io/themes/hugo-coder/) e o [repositório](https://github.com/luizdepra/hugo-coder) do tema para ver como ele funciona e conferir a documentação.
Adicione ele como um submódulo do repositório usando `git submodule add https://github.com/luizdepra/hugo-coder.git themes/hugo-coder`.
Para adicionar ele como tema do site, adicione a linha `theme = 'hugo-coder'` ao arquivo "hugo.toml" na pasta do seu site ou use o comando `echo "theme = 'hugo-coder'" >> hugo.toml` para fazer isso automaticamente.
![Resultado do comando para adicionar o tema hugo-coder](hugo-theme-config.png)

### 1.5 Iniciando o site criado

Depois de toda essa configuração, vamos iniciar o servidor de testes pela primeira vez!

Digite `hugo server` para iniciar.
O servidor hugo publica suas alterações automaticamente quando houver edições.
Isso irá gerar uma nova pasta chamada "public" na pasta do seu site. Dentro dela estão todas as páginas estáticas que serão usadas no site.
O resultado do comando será algo parecido como isso:
![Primeira inicialização do servidor Hugo](hugo-server-start.png)

Você pode entrar na url <http://localhost:1313> para ver seu novo site!
![Captura da tela com o site hospedado no link acima](website-first-preview.png)
Para parar você pode usar 'CTRL + C' no terminal.

## 2. Adicionando conteúdo

Está bem sem graça aqui, precisamos adicionar mais conteúdo...

Para adicionar uma postagem no site, execute o comando `hugo new content posts/meu-primeiro-post.md`. Isso irá criar um novo arquivo dentro de `content/posts` chamado **meu-primeiro-post.md**
![Imagem mostrando o arquivo recém criado](first-post-vscode.png)

Modifique os valores em `""` dos campos `title`, `description` e `authors` para adicionar o título, descrição e autoria dessa publicação. Escreva um título com `##` e abaixo escreva o texto.
O campo `draft = true`, faz com que o post seja considerado rascunho e não renderizado ao gerar o servidor. Use `hugo server -D` para iniciar renderizando os rascunhos.

Para criar uma página de conteúdo traduzida, use o mesmo comando e adicione um `.<LINGUAGEM>` ao nome do arquivo. Por exemplo, use `.pt-br` para criar o conteúdo em português, assim: `hugo new content posts/meu-primeiro-post.pt-br.md`.
Use o parâmetro `slug = ""` para traduzir o URL do post também.

### 2.1 Sugestões de edição adicional

Para personalizar conteúdo na página inicial, barra de navegação, idioma, entre outros, podemos modificar o `hugo.toml`.

#### Configurações da página

``` toml
baseURL = 'https://example.org/'
title = 'My Hugo Site'
theme = 'hugo-coder'

defaultContentLanguage = "en"

[pagination]
pagerSize = 6
```

#### Adicionar alguns itens na tela inicial

``` toml
[languages.en.params]
author = "John Doe"
description = "John's personal blog"
keywords = "blog,developer,personal"
info = ["Front-end developer"]

[languages.pt-br.params]
author = "João Ninguém"
info = "Desenvolvedor front-end"
description = "Site pessoal de João"
keywords = "blog,desenvolvedor,pessoal"
```

#### Alterar padrões do site com base na linguagem

``` toml
[languages.en]
languageName = "EN"
dateFormat = "January 2, 2006"

[languages.pt-br]
title = 'Meu Hugo Site'
languageName = "BR"
dateFormat = "2 de Janeiro 2006"
```

#### Criar itens na barra de navegação

``` toml
[[languages.en.menu.main]]
name = "Home"
weight = 1
url = "/"

[[languages.en.menu.main]]
name = "Blog"
weight = 2
url = "posts/"

[[languages.en.menu.main]]
name = "About"
weight = 3
url = "about/"

[[languages.pt-br.menu.main]]
name = "Início"
weight = 1
url = "/"

[[languages.pt-br.menu.main]]
name = "Blog"
weight = 2
url = "blog/"

[[languages.en.menu.main]]
name = "Sobre"
weight = 3
url = "sobre/"
```

## Agora vamos publicar

Para publicar, iremos criar um repositório no Github e enviar nossas alterações. Você pode enviar os arquivos manualmente para o repositório no site do Github, usar a linha de comando ou usar a integração do Github pelo VSCode.
Envie o repositório para o Github.

### GitHub Pages

### Cloudflare Pages

***//* Em Construção *//***

## Fontes
