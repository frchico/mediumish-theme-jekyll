---
title: Dicas de uso do R Markdown?
layout: post
author: frchico
categories: [dicas, rmarkdown, ferramentas]
tags: dicas rmarkdown ferramentas
image: uploads/slider/tools.jpeg
featured: true
hidden: true
---

Este post serve como registro de coisas legais que venho encontrando durante meus estudos na construção e adaptação de templates *Gitbook* e  *Latex* para R Markdown, utilizando *bookdown*.

Algumas coisas são sobre R, outras são não. Vamos lá!

## Documentação 

- https://www.rforge.net/doc/packages/knitr/00Index.html
- https://rdrr.io/cran/bookdownplus/src/R/fun.R
- https://rdrr.io/cran/bookdownplus/man/include_image.html
- https://beta.rstudioconnect.com/content/3060/Word_Up_Gotta_Get_Up_To_Get_Bookdown.html#cross_referencing

## Sites em Jekyll com R Markdown

- https://github.com/cabelotaina/vereadorescg-site

## Temas
- https://github.com/yixuan/prettydoc/
- https://statr.me/2016/08/creating-pretty-documents-with-the-prettydoc-package/
- https://github.com/juba/rmdformats
- https://github.com/rstudio/rticles/tree/master/inst/rmarkdown/templates
  
## Adicionando componentes visuais na tela 

- https://walkerke.github.io/2016/12/rmd-dropdowns/

## Erro Ghostscript

- https://community.rstudio.com/t/new-problems-producing-pdf-from-rmarkdown/5850
- https://github.com/rstudio/rmarkdown/issues/1285

## Livros 

- https://r4ds.had.co.nz/r-markdown-formats.html

## Usando um arquivo de script

Crie um arquivo R, adicione suas funções e importe nos Rmd através do comando `read_chunk('foo-bar.R')`

Fonte:  https://yihui.name/knitr/demo/externalization/

## Como fazer quebra de página de forma genérica

```R
  ```{r, echo=FALSE}
  pagebreak <- function() {
  if(knitr::is_latex_output())
    return("\\newpage")
  else
    return('<div style="page-break-before: always;" />')
  }
```

## Curso

- http://leg.ufpr.br/~walmes/ensino/pesq-reprod/slides/10-rmarkdown.html
- http://www.botanicaamazonica.wiki.br/labotam/doku.php?id=bot89:precurso:rmarkdown:inicio
- https://arthurlustosa.github.io/maisumsitesobre//2017/07/primeira-postagem-windows.html
- https://slides.yihui.name/2017-rstudio-conf-rmarkdown-Yihui-Xie.html

## ABNT

- http://leg.ufpr.br/~walmes/ensino/pesq-reprod/
- https://github.com/lhmet/hidrometbook

## Legenda em figuras

-https://www.r-bloggers.com/fast-track-publishing-using-knitr-exporting-images-for-sharing-and-press-part-iii/
- https://stackoverflow.com/questions/13848137/figure-captions-references-using-knitr-and-markdown-to-html

## Quebrando o capítulo em mais de um arquivo / Incluir arquivos

- https://stackoverflow.com/questions/25824795/how-to-combine-two-rmarkdown-rmd-files-into-a-single-output
- https://stackoverflow.com/questions/17593912/insert-portions-of-a-markdown-document-inside-another-markdown-document-using-kn
- https://yihui.name/knitr/demo/child/
- http://zevross.com/blog/2014/07/09/making-use-of-external-r-code-in-knitr-and-r-markdown/

## Como escrever tese/TCC

- https://eddjberry.netlify.com/post/writing-your-thesis-with-bookdown/
- https://rosannavanhespenresearch.wordpress.com/2016/03/30/writing-your-thesis-with-r-markdown-5-the-thesis-layout/
- https://eddjberry.netlify.com/post/writing-your-thesis-with-bookdown/
- https://github.com/ismayc/thesisdown/blob/master/inst/rmarkdown/templates/thesis/skeleton/skeleton.Rmd
- https://github.com/rstudio/rticles/tree/master/inst/rmarkdown/templates

## Como incluir itens .Tex

- https://tex.stackexchange.com/questions/171711/how-to-include-latex-package-in-r-markdown

## União do Jekyll com R Markdown

- http://brendanrocks.com/blogging-with-rmarkdown-knitr-jekyll/

# Olhar com mais calma depois

- https://stackoverflow.com/questions/10966109/how-to-source-r-markdown-file-like-sourcemyfile-r

# Bibliotecas

- https://github.com/r-lib/here