import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import carritoCompraRoutes from './routes/carritoCompra.routes.js';
import configuracionesReciboRoutes from './routes/configuracionesRecibo.routes.js';
import datosTiendaRoutes from './routes/datosTienda.routes.js';
import estadoRoutes from './routes/estado.routes.js';
import itemCarritoRoutes from './routes/itemCarrito.routes.js';
import metodoPagoAdminRoutes from './routes/metodoPagoAdmin.routes.js';
import metodoPagoClienteRoutes from './routes/metodoPagoCliente.routes.js';
import opinionRoutes from './routes/opinion.routes.js';
import pagoRoutes from './routes/pago.routes.js';
import pagoClienteRoutes from './routes/pagoCliente.routes.js';
import pedidoRoutes from './routes/pedido.routes.js';
import planSuscripcionRoutes from './routes/planSuscripcion.routes.js';
import productoRoutes from './routes/producto.routes.js';
import usuarioAdminRoutes from './routes/usuarioAdmin.routes.js';
import usuarioClienteRoutes from './routes/usuarioCliente.routes.js';

const app = express();

app.use(cors());
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
app.use('/api/opinion', opinionRoutes);
app.use('/api/carrito_compra', carritoCompraRoutes);
app.use('/api/metodo_pago_cliente', metodoPagoClienteRoutes);
app.use('/api/item_carrito', itemCarritoRoutes);
app.use('/api/datos_tienda', datosTiendaRoutes);


export default app;



