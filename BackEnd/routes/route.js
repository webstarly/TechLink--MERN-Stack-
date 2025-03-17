const express = require('express');

const nigerianStateController = require('../controller/nigerianState');
const stateCitiesController = require('../controller/stateCities');

const router = express.Router();

{/* */}
router.get("/states", nigerianStateController );
router.get("/cities/:stateName", stateCitiesController )



module.exports = router