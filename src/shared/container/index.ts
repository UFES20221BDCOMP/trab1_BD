import { container } from "tsyringe"
import { SaucesRepository } from "../../modules/pizzas/repositories/implementations/SaucesRepository"
import { MeatsRepository } from "../../modules/pizzas/repositories/implementations/MeatsRepository"
import { CrustsRepository } from "../../modules/pizzas/repositories/implementations/CrustsRepository"
import { SizesRepository } from "../../modules/pizzas/repositories/implementations/SizesRepository"
import { ISaucesRepository } from "../../modules/pizzas/repositories/ISaucesRepository"
import { IMeatsRepository } from "../../modules/pizzas/repositories/IMeatsRepository"
import { ICrustsRepository } from "../../modules/pizzas/repositories/ICrustsRepository"
import { ISizesRepository } from "../../modules/pizzas/repositories/ISizesRepository"
import { IOrdersRepository } from "../../modules/pizzas/repositories/IOrdersRepository"
import { OrdersRepository } from "../../modules/pizzas/repositories/implementations/OrdersRepository"

container.registerSingleton<ISaucesRepository>(
    "SaucesRepository",
    SaucesRepository
);

container.registerSingleton<IMeatsRepository>(
    "MeatsRepository",
    MeatsRepository
);

container.registerSingleton<ICrustsRepository>(
    "CrustsRepository",
    CrustsRepository
);

container.registerSingleton<ISizesRepository>(
    "SizesRepository",
    SizesRepository
);

container.registerSingleton<IOrdersRepository>(
    "OrdersRepository",
    OrdersRepository
);