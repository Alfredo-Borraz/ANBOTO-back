import express from 'express';
import cors from 'cors';
import routes from './routes/product.routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api');

app.use((req, res, next)=>{
    res.status(404).json({
        message: "pagina no encontrada"
    });
})

export default app;

