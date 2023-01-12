![WaiterApp-Capa](https://user-images.githubusercontent.com/87530595/204070663-280a66ce-63c5-4fa3-9034-49e137817c48.png)

<p align="center">
  <img alt="Waiter App - O App do Garçom" width='280px' src="/fe/src/assets/images/logo.svg" />
</p>

## :rocket: Projeto

Aplicação para Bares e Restaurante para gerenciamento de pedidos de comanda.

Nessa Aplicação temos o diretório web, mobile e a api.

O app mobile será utilizado pelos garçons, anotando os pedidos das mesas. E a partir do app, o pedido é enviado em tempo real para a plataforma web do Waiter App, onde o pedido é automaticamente inserido na fila de espera da cozinha.

A plataforma web foi construída utilizando React e será a responsável por fornecer à cozinha do restaurante quais sao os pedidos e os seus respectivos status, podendo alterá-lo pela plataforma conforme o pedido avança ou também pode cancelar o respectivo pedido.

A nossa api foi construída com node js, utilizando o express. Foi utilizado o Multer para download em disco das imagens enviadas e o Socket.io para a conexão em tempo real com websocket entre as plataformas.

A plataforma foi construída utilizando Vite para a construção do frontend e NodeJs com Prisma e SQLite no banco de dados para a construção das APIs consumidas pela plataforma. Os dados persistidos pelo site são variáveis e recebem todas as informações via API do server.

As principais bibliotecas JS utilizadas nesse projeto são: Express para a construção da API, mongoDB como banco de dados da aplicação, Multer para o download das imagens enviadas para registro dos produtos cadastrados, Socket.io para a utilização de websocket na plataforma para receber os pedidos em tempo real em tela da plataforma web, Docker para a realização da conexão com o banco em containers, Styled Components para a estilização da plataforma web e app mobile. 📚

## :bulb: Tecnologias:

- `Typescript`
- `React`
- `Vite`
- `Styled Components`
- `React Native`
- `Expo`
- `Node JS`
- `MongoDB`
- `Docker`
- `Multer`
- `Socket.io`

## :gear: Executar o projeto:

Em todos os projetos, ao acessar a pasta, é preciso baixar os pacotes com o gerenciador de sua preferencia.

Acesse a documentação de cada projeto:

- [Backend](./api/README.md)
- [Web](./fe/README.md)
- [Mobile](./app/README.md)

## :computer::iphone: Telas

<div align='center' style="justify-content: center; align-items: center;">

<h3>Mobile - App do Garçom</h3>

<img src='https://user-images.githubusercontent.com/87530595/204069637-770d8300-9538-47e4-a089-e8c0a669cfc8.png' height='450' />

<img src='https://user-images.githubusercontent.com/87530595/204069639-d1dcecb6-b967-43d0-b8bb-03c5af6dd345.png' height='450' />

<img src='https://user-images.githubusercontent.com/87530595/204069642-7e791b49-d001-485c-b964-855751c20e7c.png' height='450' />

<br/>
<br/>

<img src='https://user-images.githubusercontent.com/87530595/204069644-4a2cba4d-41df-47e8-9de2-7a31ec07824f.png' height='450' />

<img src='https://user-images.githubusercontent.com/87530595/204069648-5518e1bc-d387-47e5-b2de-7291a4c34b16.png' height='450' />

<img src='https://user-images.githubusercontent.com/87530595/204069650-e522837e-7e75-45ee-9ac9-73f784a4ad8e.png' height='450' />

<br/>
<br/>

<h3>Plataforma Web - Utilizada na cozinha</h3>

![waiter-app-web1](https://user-images.githubusercontent.com/87530595/204069894-7f61e068-52ef-4390-8501-bfa8e07131e6.png)

![waiter-app-web2](https://user-images.githubusercontent.com/87530595/204069651-5573f436-039f-4319-9fe5-143cfc0f4bce.png)

![waiter-app-web3](https://user-images.githubusercontent.com/87530595/204069804-ee1b280a-5fa8-4a2e-80ce-2a6ab7bfad66.png)

![waiter-app-web4](https://user-images.githubusercontent.com/87530595/204069806-965a9a8c-05d1-40f7-8d33-a336d78b14e1.png)

</div>
