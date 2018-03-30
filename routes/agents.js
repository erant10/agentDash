var express = require('express');
var router = express.Router();
const AgentController = require('../controllers/CRUD/agent_controller')

/* GET agent. */
router.get('/:id', AgentController.getOneById);

// create a driver
router.post('/create', AgentController.create);

// create a driver
router.post('/login', AgentController.authenticate);

module.exports = router;