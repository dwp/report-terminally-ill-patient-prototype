const express = require('express')
const router = express.Router()

router.get('/sr1/', function(req, res) {
    res.render('el1/el1');
});

router.get('/sr1/el1-q1', function(req, res) {
    res.render('el1/el1-q1');
});



router.get('/sr1/sr1-6or12', function(req, res) {
    res.render('sr1/sr1-6or12');
});

router.get('/sr1/sr1-dob', function(req, res) {
    res.render('sr1/sr1-dob');
});

router.get('/sr1/sr1-ratip', function(req, res) {
    res.render('sr1/1sr1-ratip');
});

router.get('/sr1/sr1-start', function(req, res) {
    res.render('sr1/sr1-start');
});





router.route ('/el1/el1-6or12')
.post ((req, res, next) => {
    let redirectUrl
    // console.table(req.body)
    console.log(req.body.el1Start)
    switch (req.body.el1Start) {
        case '12-months':
            redirectUrl = '/sr1/sr1-start'
            break
            case '6-months':
                redirectUrl = '/v14-start'
                break
                default:
                    redirectUrl = req.path
                    break
    }
    res.redirect(redirectUrl)
})

// Add your routes here - above the module.exports line

module.exports = router
