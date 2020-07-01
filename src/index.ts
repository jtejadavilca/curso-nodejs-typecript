import Server from './server/server';
import MySQL from './mysql/mysql';

const server = Server.init( 3000 );
MySQL.instance;



server.start(() => {
    console.log('Servidor corriendo en el puerto 3000');
});

