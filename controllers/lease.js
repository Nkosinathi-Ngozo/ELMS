const leaseService = require('../service/lease');

const leaseController = {

    async getleaseById(req, res) {
        const {id} = req.params
        try {
            const lease = await leaseService.getLeaseById(id);
            res.status(200).json(lease);
        } catch (error) {
            console.error('Error getting lease:', error);
            res.status(500).json({error})
        }
        
    },

    async createLease(req, res) {
        
        try {
            const lease = await leaseService.createLease(req.body);
            res.status(200).json(lease);
        } catch (error) {
            console.error('Error creating lease:', error);
            res.status(500).json({error})
        }
    },

    async updateLease(req, res) {
        const {id} = req.params

        try {
            const lease = await leaseService.updateLease(id, req.body);
            res.status(200).json(lease);
        } catch (error) {
            console.error('Error updating lease:', error);
            res.status(500).json({error})
        }
    }, // returns lease

    async deletelease(req, res) {
        const {id} = req.params

        try {
            const lease = await leaseService.deleteLease(id);
            res.status(200).json(lease);
        } catch (error) {
            console.error('Error deleting lease:', error);
            res.status(500).json({error})
        }
    }, // returns lease

    async getAllLeases() {
        try {
            const lease = await leaseService.getAllLeases();
            res.status(200).json(lease);
        } catch (error) {
            console.error('Error getting all leases:', error);
            res.status(500).json({error})
        }
    }, // returns [] of leases
};

module.exports = leaseService;