import bodyParser from 'body-parser';
import express from 'express';
import planSuscripcionRoutes from './routes/planSuscripcion.routes.js';
import productoRoutes from './routes/producto.routes.js';
import usuarioAdminRoutes from './routes/usuarioAdmin.routes.js';

const app = express();

app.use(bodyParser.json());
app.use('/api/usuario_admin', usuarioAdminRoutes);
app.use('/api/producto', productoRoutes);
app.use('/api/plan_suscripcion', planSuscripcionRoutes);


export default app;



