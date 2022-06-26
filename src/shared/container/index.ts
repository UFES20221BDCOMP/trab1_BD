import { container } from "tsyringe"
import { IMeatsRepository } from "../../modules/pizzas/repositories/IMeatsRepository"
import { SaucesRepository } from "../../modules/pizzas/repositories/implementations/SaucesRepository"
import { MeatsRepository } from "../../modules/pizzas/repositories/implementations/MeatsRepository"
import { ISaucesRepository } from "../../modules/pizzas/repositories/ISaucesRepository"

container.registerSingleton<ISaucesRepository>(
    "SaucesRepository",
    SaucesRepository
);

container.registerSingleton<IMeatsRepository>(
    "MeatsRepository",
    MeatsRepository
);