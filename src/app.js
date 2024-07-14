import bodyParser from 'body-parser';
import express from 'express';
import estadoRoutes from './routes/estado.routes.js';
import metodoPagoAdminRoutes from './routes/metodoPagoAdmin.routes.js';
import pagoRoutes from './routes/pago.routes.js';
import planSuscripcionRoutes from './routes/planSuscripcion.routes.js';
import productoRoutes from './routes/producto.routes.js';
import usuarioAdminRoutes from './routes/usuarioAdmin.routes.js';

const app = express();

app.use(bodyParser.json());
app.use('/api/usuario_admin', usuarioAdminRoutes);
app.use('/api/producto', productoRoutes);
app.use('/api/plan_suscripcion', planSuscripcionRoutes);
app.use('/api/pago', pagoRoutes);
app.use('/api/metodo_pago_admin', metodoPagoAdminRoutes);
app.use('/api/estado', estadoRoutes);


export default app;



