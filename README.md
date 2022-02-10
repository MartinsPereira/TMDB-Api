## Clonar o projeto e instalar as dependências


Clonar Projeto
  ```sh
   git clone https://github.com/MartinsPereira/TMDB-Api.git
  ```
Entrar na pasta do projeto
  ```sh
   cd TMDB-Api    
  ```
Instalar todas as dependências usadas
  ```sh
   npm install
  ```
Iniciar o projeto localmente
  ```sh
   npm start
  ```

## Dependências

Lista de dependências usadas durante o desenvolvimento do projeto

* [Typescript](https://www.typescriptlang.org/)
* [React Router](https://reactrouter.com/)
* [Axios](https://axios-http.com/docs/intro)
* [Apexcharts](https://apexcharts.com/)
* [Sass](https://sass-lang.com/)

## Funcionalidades

- [x] O usuário deve ter acesso a uma listagem dos filmes mais populares do dia
- [x] O usuário deve conseguir paginar a lista para encontrar novos filmes
- [x] O usuário deve ter acesso a uma outra página com detalhes sobre o filme, ao clicar em um item na listagem
- [x] O usuário deve conseguir voltar para a página de listagem de filmes com os filtros ainda ativos
- [x] O usuário deve conseguir filtrar os filmes listados por gênero, com a possibilidade de usar mais de um gênero
- [x] O usuário deve conseguir remover filtros e a listagem deve ser atualizada de acordo com o filtro removido
- [x] A página com detalhes de um filme deve possuir uma rota própria e estar preparada para ser indexada em mecanismos de pesquisa
- [x] Adicionado loading enquanto a Api está carregando