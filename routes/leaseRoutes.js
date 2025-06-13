const router = require('express').Router();
const leaseController = require('../controllers/lease')
const { verifyToken } = require('../middleware/auth')
const upload = require('../middleware/upload')

//! GET lease BY ID
router.get("/find/:id", verifyToken, leaseController.getLeaseById);

//! CREATE NEW lease
router.post('/', verifyToken, leaseController.createLease);

//! GET ALL leases
router.get('/', verifyToken, leaseController.getAllLeases);

//! UPDATE lease
router.put("/:id", verifyToken, leaseController.updateLease);

//! DELETE lease
router.delete("/:id", verifyToken, leaseController.deleteLease);

module.exports = router;