const paymentModel = require('../models/payment');

const paymentService = {

    async getPaymentById(paymentId) {
        const payment = await paymentModel.findById(paymentId);

        if (!payment) return null;
        return payment; // returns payment
    },

    async createPayment(paymentData) {
        const newpayment = new paymentModel(paymentData);
        await newpayment.save();
        return newpayment; // returns payment
    },

    async updatePayment(paymentId, paymentData) {
        return await paymentModel.findByIdAndUpdate(paymentId, paymentData, { new: true }); // `new: true` returns the updated document
    }, // returns payment

    async deletePayment(paymentId) {
        return await paymentModel.findByIdAndDelete(paymentId);
    }, // returns payment

    async getAllPayments() {
        return await paymentModel.find();
    }, // returns [] of payments
};

module.exports = paymentService;