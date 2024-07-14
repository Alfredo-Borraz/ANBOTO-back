import bodyParser from 'body-parser';
import express from 'express';
import productoRoutes from './routes/producto.routes.js';
import usuarioAdminRoutes from './routes/usuarioAdmin.routes.js';

const app = express();

app.use(bodyParser.json());
app.use('/api/usuario_admin', usuarioAdminRoutes);
app.use('/api/producto', productoRoutes);

export default app;



