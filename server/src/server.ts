import fastify from 'fastify';

const app = fastify();


//Rotas
app.get('/hello', () => {
    return 'Hello Word!';
});

app.listen({
    port: 3333,
}).then(() => {
    console.log('HTTP server running on 👌 http://localhost:3333');
});















// const nome: string = "Daniel";


// console.log(nome);




















/*
Autor: Daniel Oliveira
Email: danieloliveira.webmaster@gmail.com
Manaus/Amazonas/Brasil
16/05/2023
*/ 