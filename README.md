# Controle de Estacionamento

## Descrição

Sistema de controle de estacionamento desenvolvido como parte do
Desafio 1 da Unidade Curricular de Desenvolvimento Web.

A aplicação permite cadastrar reservas de vagas, visualizar
as vagas disponíveis e ocupadas e remover reservas.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript

O projeto foi desenvolvido sem utilização de frameworks.

## Funcionalidades

- Cadastro de reservas de estacionamento.
- Listagem das reservas cadastradas.
- Visualização das vagas disponíveis e ocupadas.
- Remoção de reservas.
- Atualização dos indicadores de ocupação.
- Armazenamento dos dados no navegador com localStorage.
- Exibição dos dados cadastrados no Console.

## Estrutura do projeto

controle-estacionamento/
    index.html
    cadastro.html
    css/
        style.css
    js/
        model.js
        view.js
        controller.js
    README.md

## Organização do código

O projeto utiliza uma organização inspirada no padrão MVC:

- Model: responsável pelo gerenciamento dos dados.
- View: responsável pela apresentação das informações.
- Controller: responsável pelas ações e eventos do usuário.

## Como executar

1. Baixe os arquivos do projeto.
2. Abra a pasta do projeto.
3. Execute o arquivo index.html em um navegador.
4. Utilize o menu para acessar o cadastro de reservas.

## Observações

O sistema utiliza 30 vagas fictícias.

As informações são armazenadas no localStorage do navegador,
sem utilização de banco de dados ou servidor.

## Desenvolvedor

Thiago Manoel Pereira Mina

Curso: Tecnologia em Análise e Desenvolvimento de Sistemas
Unidade Curricular: Desenvolvimento Web