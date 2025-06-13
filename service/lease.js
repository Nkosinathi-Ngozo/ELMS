const leaseModel = require('../models/lease');

const leaseService = {

    async getLeaseById(leaseId) {
        const lease = await leaseModel.findById(leaseId);

        if (!lease) return null;
        return lease; // returns lease
    },

    async getLeaseByEmail(email) {
        const lease = await leaseModel.findOne({ email });

        if (!lease) return null;
        return lease; // returns lease
    },

    async createLease(leaseData) {
        const newLease = new leaseModel(leaseData);
        await newLease.save();
        return newLease; // returns lease
    },

    async updateLease(leaseId, leaseData) {
        return await leaseModel.findByIdAndUpdate(leaseId, leaseData, { new: true }); // `new: true` returns the updated document
    }, // returns lease

    async deleteLease(leaseId) {
        return await leaseModel.findByIdAndDelete(leaseId);
    }, // returns lease

    async getAllLeases() {
        return await leaseModel.find();
    }, // returns [] of leases
};

module.exports = leaseService;