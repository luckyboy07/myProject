'use strict';

module.exports = function(database, app, log, config) {
    database.connect(function onConnect(err, isConnected) {
        if (err) {
            log.error('Error Connecting Mongodb database');
        } else {
            app.listen(config.port, function connection(err) {
                if (err instanceof Error) {
                    log.error('Unable to start Server', config.port);
                } else {
                    log.info('Server started at ' + config.port + ' Using ' + config.api_version);
                }
            });
        }
    });
};
