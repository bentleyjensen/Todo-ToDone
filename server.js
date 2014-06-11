var Hapi = require('hapi');
var config = require('getconfig');
var server = new Hapi.Server('localhost', config.http.port);

var moonbootsConfig = require('./moonbootsConfig');

var todo = require('./todoApi');

// require moonboots_hapi plugin
server.pack.require({'moonboots_hapi': moonbootsConfig}, function (err) {
    if (err) throw err;
    server.pack.register(todo, function (err) {
        if (err) throw err;
        // If everything loaded correctly, start the server:
        server.start(function (err) {
            if (err) throw err;
            console.log("From To-Do To-Done is running at: http://localhost:" + config.http.port + " Yep. That\'s pretty awesome.");
        });
    });
});
