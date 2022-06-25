import { Router } from 'express';
import { v4 as uuidV4 } from 'uuid';

const pizzaRoutes = Router();

const pizzas = [];

pizzaRoutes.post("/pizzas", (request, response) => {
    const { price } = request.body;

    pizzas.push({
        id: uuidV4(), //video inserindo tipagem para categoria, precisa de construtor por id
        price
    });

    return response.status(201).send();
})


export { pizzaRoutes };