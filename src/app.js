import cors from 'cors';
import express from 'express';
import routes from './routes/usuarioAdmin.routes.js'; // Ajusta el nombre del archivo según sea necesario

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api');

app.use('/api/usuarioAdmin', routes);

app.use((req, res, next) => {
    res.status(404).json({
        message: "Página no encontrada"
    });
});

export default app;

