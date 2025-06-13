const router = require('express').Router();
const paymentController = require('../controllers/payment')
const { verifyToken } = require('../middleware/auth')

//! GET payment BY ID
router.get("/find/:id", verifyToken, paymentController.getPaymentById);

//! CREATE NEW payment
router.post('/', verifyToken, paymentController.createPayment);

//! GET ALL payments
router.get('/', verifyToken, paymentController.getAllPayments);
 
//! UPDATE payment
router.put("/:id", verifyToken, paymentController.updatePayment);

//! DELETE payment
router.delete("/:id", verifyToken, paymentController.deletePayment);

module.exports = router;