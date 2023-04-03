const router = require('express').Router();
const cityStateCtrl = require('../../controllers/cityState.controller');
const dealerCtrl = require('../../controllers/dealer.controller');
const leadEnquiryCtrl = require('../../controllers/leadEnquiry.controller');
const testRideCtrl = require('../../controllers/testRide.controller');
const serviceCtrl = require('../../controllers/service.controller');
const productCtrl = require('../../controllers/product.controller');

router.get('/allStates', cityStateCtrl.allStates);

router.get('/allCities', cityStateCtrl.allCity);

router.get('/saveDealer', dealerCtrl.insertDealer);

router.get('/getDealer', dealerCtrl.getDealer);

router.post('/getSingleDealer', dealerCtrl.getOne);

router.get('/getEnquiry', leadEnquiryCtrl.getData);

router.get('/getEnquiryCount', leadEnquiryCtrl.getCount);

router.post('/saveEnquiry', leadEnquiryCtrl.insertData);

router.post('/saveRide', testRideCtrl.insertData);

router.get('/getRides', testRideCtrl.getData);

router.get('/getRideCount', testRideCtrl.getCount);

router.post('/saveService', serviceCtrl.insertData);

router.get('/getService', serviceCtrl.getData);

router.get('/getServiceCount', serviceCtrl.getCount);

router.get('/saveProduct', productCtrl.insertData);

router.get('/getProduct', productCtrl.getData);

module.exports = router;