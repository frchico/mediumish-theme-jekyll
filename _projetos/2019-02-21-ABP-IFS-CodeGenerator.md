---
layout: projeto
title: ABP IFS CodeGenerator
excerpt:  Gerador de código para o AspNetBoilerPlate desenvolvido em conjunto com o projeto de estação de tratamento de efluentes para otimizar o processo da construção do software.

author: frchico
toc: false  
equipe: 
  - frchico
categories: [ Projetos, ABP, AspNetBoilerPlate, C#, Opensource ]
image: /uploads/slider/codigo.jpg # assets/images/11.jpg
featured: true
hidden: false

excerpt_separator: <!--more-->
---

# Sobre o CodeGenerator aka ABP IFS CodeGenerator

Gerador de código para o [AspNetBoilerPlate](http://aspnetboilerplate.com) v.3.9.0 desenvolvido em conjunto com o [projeto]({{ site.baseurl }}{% link _projetos/2019-02-13-sistema-efluentes.md %}) de estação de tratamento de efluentes para otimizar o processo da construção do software.

Esta versão é um *Fork* do [CodeGenerator de HisKingdom](https://github.com/HisKingdom/CodeGenerator)  e trabalha com a versão gratuita do AspNetBoilerPlate para auxiliar na construção telas não modais para visualização e edição de dados.

Desta forma aplicação orienta o processo da geração dos arquivos, entretanto, para que ele consiga gerar o código é necessário que sejam adicionadas algumas *tags* na solução para que sejam incluídos os códigos e ajustado o arquivo de configuração, informando os diretórios que possuem os *códigos base*.

## Site oficial

Visite o [site oficial](https://saneamentoambiental.github.io/CodeGenerator/) para saber mais.

## Situação do *build*

| Repositorio |  Status                                                     |
| :---------: | :---------------------------------------------------------: |
|   GitHub    | [![Build status](https://ci.appveyor.com/api/projects/status/tv4ap6797k4nmtfh?svg=true)](https://ci.appveyor.com/project/saneamentoambiental/codegenerator) |
