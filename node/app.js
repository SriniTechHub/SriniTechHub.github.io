var express = require('express');
var router = express();
var PORT = process.env.PORT || 3000;

var middleware = {
    reauthentication: function(req, res, next) {
        console.log('private route hit !!!');
        next();
    },
    logger: function(req, res, next) {
        console.log('Request:', req.method, req.originalUrl);
        next();
    }
};
router.use(middleware.reauthentication);
router.use(middleware.logger);
router.use(express.static(__dirname));
router.listen(PORT, function() {
    console.log('Express server started on port:', PORT);
});
