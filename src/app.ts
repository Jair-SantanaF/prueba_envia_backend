import express from 'express';
import { createServer } from 'http';
import { Server as SocketIOServer } from 'socket.io';
import { PORT } from './config';
import { generateGuide } from './controllers/guideController';

export const app = express();
const httpServer = createServer(app);
let counter = 0;
export const io = new SocketIOServer(httpServer);

app.use(express.static('./public'));

io.on('connection', (socket) => {
    console.log(`Nuevo usuario conectado: ${socket.id}`);
    io.emit('updateCounter', counter);
    
    socket.on('disconnect', () => {
        console.log(`Usuario desconectado: ${socket.id}`);
    });
    socket.on('generateGuide', async (guideData) => {
        const response = await generateGuide(guideData);
        if ((response).status === 200 && response.data.meta != "error") {
            console.log('Guía generada exitosamente');
            counter++;
            io.emit('updateCounter', counter);
        } else {
            console.error('Error al generar la guía');
        }
    });
});

httpServer.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));