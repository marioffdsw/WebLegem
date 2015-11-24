var liveServer = require("live-server");

var params = {
    port: 8181, // Set the server port. Defaults to 8080.
    host: "0.0.0.0", // Set the address to bind to. Defaults to 0.0.0.0.
    //    root: ".", // Set root directory that's being server. Defaults to cwd.
    open: '/build/index.html', // When false, it won't load your browser by default.
    ignore: '.\docs,.\src,.\.git', // comma-separated string for paths to ignore
    wait: 0 // Waits for all changes, before reloading. Defaults to 0 sec.
};

liveServer.start(params);