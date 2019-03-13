---
title: Busca por alternativas para o Latex?
layout: post
author: frchico
categories: [latex, markdown, ferramentas]
tags: latex markdown ferramentas
image: uploads/slider/tools.jpeg
featured: true
hidden: false
---

Uma das minhas maiores dificuldades era fazer um conteúdo de um manual de instruções que fosse dinâmico (com vários layouts) e que também pudesse ser distribuído como livros.

Para atender a demanda que não era facilmente atendida pelo Latex, iniciei os estudos no *Markdown* com *GitBook* e acabei descobrindo, também, a [Jekyll]. Até então tudo bem. Usando o Jekyll consegui aumentar a produtividade na publicação de textos e *helps* de ferramentas que construía, mas a publicação de textos com a formatação que o Latex proporciona eu ainda não conseguia encontrar.

Outro ponto que incomoda é que em algumas editoras é necessário fazer o envio de documentos no formato *Word*. E para que já trabalhou com Latex sabe o quanto é complicado fazer a conversão de Word para Latex para Word.

Em 2019 a inquietação voltou, pois um novo projeto de pesquisa foi aprovado e nele precisávamos construir um manual básico para os novos bolsistas/membros com grandes chances para publicação comocapítulos de livros. Ou seja, a busca de novas ferramentas foi iniciada e ao buscar uma forma de automatizar o processo de publicação que o GitBook *oferece* me deparei com o [rmarkdown] através do [livro](https://bookdown.org/yihui/bookdown/) de Yihui Xie.

Algumas coisas que me chamaram a atenção:

> * Generate printer-ready books and ebooks from R Markdown documents
> * A markup language easier to learn than LaTeX, and to write elements such as section headers, lists, quotes, figures, tables, and citations
> * Multiple choices of output formats: PDF, LaTeX, HTML, EPUB, and Word.
> * Possibility of including dynamic graphics and interactive applications (HTML widgets and Shiny apps)
> * Support for languages other than R, including C/C++, Python, and SQL, etc.
> * LaTeX equations, theorems, and proofs work for all output formats
> * Can be published to GitHub, bookdown.org, and any web servers
> * Integrated with the RStudio IDE
> * One-click publishing to https://bookdown.org

{% include vimeoPlayer.html id=178485416 %}
Vídeo que está disponível na página de introdução do [R Markdown](https://rmarkdown.rstudio.com/lesson-1.html)


Até o momento estou no processo de construção de ambiente e adaptação de materiais que já fiz para compreender o quanto ele é extensível, mas ao que pude observar é uma tendência que não tem mais volta. Será?!

## Saiba mais

* [Authoring Books and Technical Documents with R Markdown](https://github.com/rstudio/bookdown)
* [R Markdown: The Definitive Guide](https://bookdown.org/yihui/rmarkdown/)
* [R with Visual Studio Code](http://jdav.is/2015/07/28/r-with-visual-studio-code/)
* [Formatos/templates disponíveis](https://rmarkdown.rstudio.com/formats.html)
* [Galeria de exemplos](https://rmarkdown.rstudio.com/gallery.html)
* [Templates acadêmicos](https://github.com/rstudio/rticles)

[rmarkdown]: https://rmarkdown.rstudio.com/formats.html
[Jekyll]: http://jekyllrb.com