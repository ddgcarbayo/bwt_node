var config = {
    env: 'local',
    server : {
        port: 8080,
        ip: undefined,
        components : {
            compression: true,
            'body-parser': {
                extended: false,
                json: {
                    limit: '50mb'
                }
            },
            'method-override' : true,
            'cookie-parser' : true,
            'connect-multiparty' : {
                uploadDir: __dirname+'/../tmp'
            },
            'express-session' : {
                secret: 'SECRETO',
                //store: new MySQLStore(options),
                cookie:{
                    maxAge: ( 30 * 1000 * 60 )
                },
                rolling : true
                //resave: false,
                //saveUninitialized: false,
                //unset: 'destroy'
            }
        },
        static : __dirname+'/../public'
    }
};
module.exports = config;
