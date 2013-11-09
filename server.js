// https://github.com/nko4/website/blob/master/module/README.md#nodejs-knockout-deploy-check-ins
require('nko')('yTltgBB-j8Iq2LKk');

var express = require('express');
var app = express();
var passport = require('passport');
var strategy = require('./Scripts/lib/setup-passport');
var usergrid = require('usergrid');

var isProduction = (process.env.NODE_ENV === 'production');
var port = (isProduction ? 80 : 8000);

var client = new usergrid.client({
    orgName: 'siecieborowice',
    appName: 'siecieborowice',
    authType: usergrid.AUTH_CLIENT_ID,
    clientId: 'b3U6NNxoSkkJEeOYMWX0Wk-YXw',
    clientSecret: 'b3U6MyJy6GYHsHeiwzmUd6nKfjqy0LU',
    logging: false,
    buildCurl: false
});

app.configure(function () {
    app.use(express.static('public'));
    app.use(express.cookieParser());
    app.use(express.bodyParser());
    app.use(express.session({ secret: 'keyboard cat' }));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(app.router);
});

app.listen(port, function (err) {
    if (err) {
        console.error(err);
        process.exit(-1);
    }

    if (process.getuid && process.getuid() === 0) {
        require('fs').stat(__filename, function (err, stats) {
            if (err) {
                return console.error(err);
            }
            process.setuid(stats.uid);
        });
    }

    console.log('Server running at http://127.0.0.1:' + port + '/');
});

// Auth0 callback handler
app.get('/callback', passport.authenticate('auth0', { failureRedirect: '/500' }), function (req, res) {
    if (!req.user) {
        throw new Error('user null');
    }
    res.redirect("/");
});

app.get('/', function (req, res) {
    if (req.user) {
        var user = JSON.stringify(req.user);
        res.sendfile("main.html");
    } else {
        res.sendfile("landing.html");
    }
});

app.get(/^(.+)$/, function (req, res) {
    res.sendfile(__dirname + req.params[0]);
});
//# sourceMappingURL=server.js.map
