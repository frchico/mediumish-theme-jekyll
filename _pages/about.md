---
layout: post
title: Sobre
# author: frchico
categories: [ ]
tags: ""
permalink: /about
comments: false
menus: header

---
{% assign author = site.data.authors.frchico %}
---
# Quem sou

{{ author.description }}

## Finalidade do site

O propósito deste site é dar visibilidade aos projetos que venho desenvolvendo. Alguns deles são frutos da curiosidade, de estudo, de projetos de pesquisa, por perceber a repetição de trabalho ou quando encontro uma forma de fazer que me proporcione alguma agilidade.

## Ferramentas utilizadas

Construído com Jekyll, teve como base o template Mediumish template e nele foram feitas algumas modificações como:

- *Collections* para os projetos pessoais com a possibilidade da exibição da equipe através de arquivo de dados;
- Ajuste da região explorer para exibir as categorias das *collections*
- Inclusão das *collections* na pesquisa
- Alguns plugins para renderização do menu de forma automática
- Suporte ao [travis-ci](https://travis-ci.com/) para *build* e *deploy* no *branch git-pages*
- Exibição de imagens usando o site gravatar
- Ajuste na obtenção dos dados dos autores para ser recuperado de um arquivo de dados ao invés de um arquivo de configuração;
- Inclusão de *templates* de tags;
- Inclusão de *plugins*
  
E mantidas as seguintes funcionalidades:
- Featured Posts
- Index Pagination
- SEO
- Feed
- Sitemap
- Post Share
- Post Categories
- Prev/Next Link
- Category Archives
- Jumbotron Categories
- Integrations:
  - Disqus Comments
  - Google Analaytics
  - Mailchimp Integration
- Design Features:
  - Bootstrap v4.x
  - Font Awesome
  - Masonry
- Layouts:
  - Default
  - Post
  - Page
  - Archive
  - Categories

Devido o volume de alterações e de plugins que o site está utilizado (ou que necessite utilizar), fiz a integração da compilação e implantação utilizando o [Travis-CI](https://travis-ci.com).

Hoje o build está como [![Build Status](https://travis-ci.com/frchico/mediumish-theme-jekyll.svg?branch=desenv)](https://travis-ci.com/frchico/mediumish-theme-jekyll) e leva cerca de 1 min 50 seg para que uma nova versão esteja disponível.

## Como contribuir

Caso queira esudar o código, contribuir ou corrigir algo no site, faça seu pull request [aqui](https://github.com/frchico/mediumish-theme-jekyll/tree/desenv).

## Como utilizar

<ol>
<li><a href="https://github.com/wowthemesnet/mediumish-theme-jekyll/archive/master.zip">Download</a> or <code>git clone https://github.com/wowthemesnet/mediumish-theme-jekyll.git</code></li>

<li><code>cd mediumish-theme-jekyll</code></li>

<li><code>bundle</code></li>

<li>Edit <code>_config.yml</code> options. If your site is in root: <code>baseurl: ''</code>. Also, change your Google Analytics code, disqus username, authors, Mailchimp list etc.</li>

<li><code>jekyll serve --watch</code></li>

<li>Start by adding your <code>.md</code> files in <code>_posts</code>. Mediumish already has a few examples. </li>

<li>YAML front matter

<ul>
<li>featured post - <code>featured:true</code></li>

<li>exclude featured post from "All stories" loop to avoid duplicated posts - <code>hidden:true</code></li>

<li>post image - <code>image: assets/images/mypic.jpg</code></li>

<li>external post image - <code>image: "https://externalwebsite.com/image4.jpg"</code></li>

<li>page comments - <code>comments:true</code></li>

<li>meta description (optional) - <code>description: "this is my meta description"</code></li></ul></li>
</ol>

<h5 id="yamlpostexample">YAML Post Example:</h5>

<pre><code>---
layout: post
title:  "We all wait for summer"
author: john
categories: [ Jekyll, tutorial ]
image: assets/images/5.jpg
featured: true
---
</code></pre>

<h5 id="yamlpageexample">YAML Page Example</h5>

<pre><code>---
layout: page
title: Mediumish Template for Jekyll
comments: true
---
</code></pre>