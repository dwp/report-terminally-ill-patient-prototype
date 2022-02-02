const express = require('express')
const router = express.Router()

router.get('/el1/', function(req, res) {
    res.render('el1/el1');
});

router.get('/el1/', function(req, res) {
    res.render('el1/el1-q1');
});

router.get('/el1/', function(req, res) {
    res.render('el1/el1-dob');
});

router.get('/el1/', function(req, res) {
    res.render('el1/el1-6or12');
});

router.get('/el1/', function(req, res) {
    res.render('el1/el1-dob');
});

router.get('/el1/', function(req, res) {
    res.render('el1/el1-ratip');
});

router.get('/el1/', function(req, res) {
    res.render('el1/el1-start');
});





router.route ('/el1/el1-6or12')
.post ((req, res, next) => {
    let redirectUrl
    // console.table(req.body)
    switch (req.body ['el1-6or12]']) {
        case '12months':
            redirectUrl = 'el1-start'
            break
            case '6months':
                redirectUrl = 'v14-start'
                break
                default:
                    redirectUrl = req.path
                    break
    }
    res.redirect(redirectUrl)
})

// Add your routes here - above the module.exports line

module.exports = router
