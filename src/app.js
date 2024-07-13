import bodyParser from 'body-parser';
import express from 'express';
import usuarioAdminRoutes from './routes/usuarioAdmin.routes.js';

const app = express();

app.use(bodyParser.json());
app.use('/api/usuario_admin', usuarioAdminRoutes);

export default app;



