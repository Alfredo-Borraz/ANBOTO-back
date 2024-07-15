import bodyParser from 'body-parser';
import express from 'express';
import configuracionesReciboRoutes from './routes/configuracionesRecibo.routes.js';
import estadoRoutes from './routes/estado.routes.js';
import metodoPagoAdminRoutes from './routes/metodoPagoAdmin.routes.js';
import pagoRoutes from './routes/pago.routes.js';
import pagoClienteRoutes from './routes/pagoCliente.routes.js';
import pedidoRoutes from './routes/pedido.routes.js';
import planSuscripcionRoutes from './routes/planSuscripcion.routes.js';
import productoRoutes from './routes/producto.routes.js';
import usuarioAdminRoutes from './routes/usuarioAdmin.routes.js';
import usuarioClienteRoutes from './routes/usuarioCliente.routes.js';

const app = express();

app.use(bodyParser.json());
app.use('/api/usuario_admin', usuarioAdminRoutes);
app.use('/api/producto', productoRoutes);
app.use('/api/plan_suscripcion', planSuscripcionRoutes);
app.use('/api/pago', pagoRoutes);
app.use('/api/metodo_pago_admin', metodoPagoAdminRoutes);
app.use('/api/estado', estadoRoutes);
app.use('/api/pedido', pedidoRoutes);
app.use('/api/pago_cliente', pagoClienteRoutes);
app.use('/api/configuraciones_recibo', configuracionesReciboRoutes);
app.use('/api/usuario_cliente', usuarioClienteRoutes);


export default app;



