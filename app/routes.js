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

router.get('/sr1/1sr1-ratip', function(req, res) {
    res.render('sr1/1sr1-ratip');
});

router.get('/sr11sr1-or-ratip', function(req, res) {
    res.render('sr1/sr1-ratip');
});

router.get('/sr1/sr1-start', function(req, res) {
    res.render('sr1/sr1-start');
});

router.get('/sr1/', function(req, res) {
    res.render('sr1/sr1-ratip');
});

router.get('/sr1/', function(req, res) {
    res.render('sr1/3sr1-ratip');
});

router.get('/sr1/', function(req, res) {
    res.render('sr1/4sr1-ratip');
});

router.get('/sr1/4sr1-ratip', function(req, res) {
    res.render('sr1/4sr1-ratip');
});

router.get('/sr1/4sr1-ratip', function(req, res) {
    res.render('sr1/4sr1-ratip');
});

router.get('/sr1/', function(req, res) {
    res.render('sr1/sr1-guidance');
});

router.get('/sr1/sr1-guidance', function(req, res) {
    res.render('sr1/sr1-guidance');
});

router.get('/sr1/', function(req, res) {
    res.render('sr1/1final-start');
});
router.get('/sr1/', function(req, res) {
    res.render('sr1/2final-start');
});

router.get('/sr1/2final-sr1-or-ratip', function(req, res) {
    res.render('sr1/2final-sr1-or-ratip');
});

router.get('/sr1/', function(req, res) {
    res.render('sr1/final-ds1500');
});





router.route ('/sr1/sr1-6or12')
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

router.route ('/sr1/sr1-or-ratip')
.post ((req, res, next) => {
    let redirectUrl
    // console.table(req.body)
    console.log(req.body.sr1Start)
    switch (req.body.sr1Start) {
        case 'sr1':
            redirectUrl = '/sr1/sr1-start'
            break
            case 'ds1500':
                redirectUrl = '/final-ds1500'
                break
                default:
                    redirectUrl = req.path
                    break
    }
    res.redirect(redirectUrl)


})

router.route ('/sr1/1final-start')
.post ((req, res, next) => {
    let redirectUrl
    // console.table(req.body)
    console.log(req.body.sr1Start)
    switch (req.body.sr1Start) {
        case 'sr1':
            redirectUrl = '/sr1/sr1-start'
            break
            case 'ds1500':
                redirectUrl = '/sr1/final-ds1500'
                break
                default:
                    redirectUrl = req.path
                    break
    }
    res.redirect(redirectUrl)


})


router.route ('/sr1/sr1-age')
.post ((req, res, next) => {
    let redirectUrl
    // console.table(req.body)
    console.log(req.body.ageq)
    switch (req.body.ageq) {
        case 'under16':
            redirectUrl = '/v14-start'
            break
            case 'over66':
                redirectUrl = '/v14-start'
                break
                case 'under16over66':
                redirectUrl = '/sr1/sr1-6or12'
                break
                default:
                    redirectUrl = req.path
                    break
                    
                    
    }
    res.redirect(redirectUrl)
})

router.route ('/sr1/4sr1-ratip')
.post ((req, res, next) => {
    let redirectUrl
    // console.table(req.body)
    console.log(req.body.all1)
    switch (req.body.all1) {
        case 'yes':
            redirectUrl = '/v14-start'
            break
            case 'no':
                redirectUrl = '/sr1/sr1-start'
                break
            
                    
                    
    }
    res.redirect(redirectUrl)
})
// Add your routes here - above the module.exports line

module.exports = router
