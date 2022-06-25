import express from 'express';
import { saucesRoutes } from './routes/sauces.routes';
const app = express();

app.use(express.json());

app.use("/sauces", saucesRoutes);



app.listen(3333, () => console.log("Server is running!"));