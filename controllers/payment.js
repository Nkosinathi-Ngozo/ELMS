const paymentService = require('../service/payment');

const paymentController = {

    async getpaymentById(req, res) {
        const {id} = req.params
        try {
            const payment = await paymentService.getpaymentById(id);
            res.status(200).json(payment);
        } catch (error) {
            console.error('Error getting payment:', error);
            res.status(500).json({error})
        }
        
    },

    async createPayment(req, res) {
        
        try {
            const payment = await paymentService.createPayment(req.body);
            res.status(200).json(payment);
        } catch (error) {
            console.error('Error creating payment:', error);
            res.status(500).json({error})
        }
    },

    async updatePayment(req, res) {
        const {id} = req.params

        try {
            const payment = await paymentService.updatePayment(id, req.body);
            res.status(200).json(payment);
        } catch (error) {
            console.error('Error updating payment:', error);
            res.status(500).json({error})
        }
    }, // returns payment

    async deletePayment(req, res) {
        const {id} = req.params

        try {
            const payment = await paymentService.deletePayment(id);
            res.status(200).json(payment);
        } catch (error) {
            console.error('Error deleting payment:', error);
            res.status(500).json({error})
        }
    }, // returns payment

    async getAllPayments() {
        try {
            const payment = await paymentService.getAllPayments();
            res.status(200).json(payment);
        } catch (error) {
            console.error('Error getting all payments:', error);
            res.status(500).json({error})
        }
    }, // returns [] of payments
};

module.exports = paymentService;