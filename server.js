'use strict';
const getMusic = require('./src/handler')
const Hapi = require('@hapi/hapi');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route(
        {
            method: 'GET',
            path: '/',
            handler: getMusic
        },
        {
        method: 'GET',
        path: '/callback',
        handler: async (request, h) => {
            console.log('requery', request.query);
            const code = request.query.code;
            console.log('code', code)
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();