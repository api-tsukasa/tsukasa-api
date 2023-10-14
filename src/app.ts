import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';
import path from 'path';
import cors from 'cors';

import indexRoutes from './routes/index';

// Inicializaciones
const app: Application = express();

// Configuraciones
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api', indexRoutes);

// Esta carpeta se utilizará para almacenar archivos públicos, como imágenes
app.use('/uploads', express.static(path.resolve('uploads')));

// Nuevo Endpoint
app.get('/hello', (req: Request, res: Response) => {
  res.send('¡Hola, mundo!');
});

export default app;
