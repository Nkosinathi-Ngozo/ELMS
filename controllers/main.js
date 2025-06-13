const leaseService = require('../service/lease');
const paymentService = require('../service/payment');

const getLeasesAndPayments = async () => {
  const [leases, payments] = await Promise.all([
    leaseService.getAllLeases(),
    paymentService.getAllPayments()
  ]);
  return { leases, payments };
};

const mainController = {
  async getDashboard(req, res) {
    try {
      const { leases, payments } = await getLeasesAndPayments();
      return res.status(200).json({ leases, payments });
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      return res.status(500).json({ message: 'Failed to load dashboard data', error });
    }
  },

  async getReports(req, res) {
    try {
      const { leases, payments } = await getLeasesAndPayments();
      return res.status(200).json({ leases, payments });
    } catch (error) {
      console.error('Error fetching report data:', error);
      return res.status(500).json({ message: 'Failed to load report data', error });
    }
  }
};

module.exports = mainController;
