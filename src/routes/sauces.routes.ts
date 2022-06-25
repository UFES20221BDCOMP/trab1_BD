import { SaucesRepository } from '../repositories/SaucesRepository';
import { CreateSauceService } from '../services/CreateSauceService';
import { Router } from 'express';

const saucesRoutes = Router();

const saucesRepository = new SaucesRepository();

saucesRoutes.post("/", (request, response) => {
    const { name, price } = request.body;

    const createSauceService = new CreateSauceService(saucesRepository);

    createSauceService.execute({ name, price });

    return response.status(201).send();
});

saucesRoutes.get("/", (request, response) => {
    const all = saucesRepository.list();

    return response.json(all);
})


export { saucesRoutes };