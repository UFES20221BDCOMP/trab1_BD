import { Router } from "express";
import { MeatsRepository } from "../modules/pizzas/repositories/MeatsRepository";
import { CreateMeatService } from "../modules/pizzas/services/CreateMeatService";

const meatsRoutes = Router();

const meatsRepository = new MeatsRepository();

meatsRoutes.post("/", (request, response) => {
    const {name, price} =  request.body;
    const createMeatService = new CreateMeatService(meatsRepository);

    createMeatService.execute({name, price});

    return response.status(201).send();
});

meatsRoutes.get("/", (request, response) => {
    const all = meatsRepository.list();

    return response.json(all);
})

export { meatsRoutes }