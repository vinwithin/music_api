const Hapi = require('@hapi/hapi');
const {getMusic, getAlbum} = require('./src/handler')

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route([
        {
            method: 'GET',
            path: '/',
            handler: getMusic
        },
        {
            method: 'GET',
            path: '/album',
            handler: getAlbum
        },
        
        
    ]);

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();