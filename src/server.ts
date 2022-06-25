import express from 'express';
import { meatsRoutes } from './routes/meats.routes';
import { saucesRoutes } from './routes/sauces.routes';
const app = express();

app.use(express.json());

app.use("/sauces", saucesRoutes);

app.use("/meats", meatsRoutes);

app.listen(3333, () => console.log("Server is running!"));