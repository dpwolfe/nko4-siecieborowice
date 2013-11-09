// https://github.com/nko4/website/blob/master/module/README.md#nodejs-knockout-deploy-check-ins
require('nko')('yTltgBB-j8Iq2LKk');
var app = require('express')();
var passport = require('passport');
var strategy = require('./Scripts/lib/setup-passport');

var isProduction = (process.env.NODE_ENV === 'production');
var port = (isProduction ? 80 : 8000);

app.get(/^(.+)$/, (req, res) => {
    res.sendfile(__dirname + req.params[0]);
});

app.listen(port, function (err) {
    if (err) { console.error(err); process.exit(-1); }

    // if run as root, downgrade to the owner of this file
    if (process.getuid && process.getuid() === 0) {
        require('fs').stat(__filename, function (err, stats) {
            if (err) { return console.error(err); }
            process.setuid(stats.uid);
        });
    }

    console.log('Server running at http://0.0.0.0:' + port + '/');
});