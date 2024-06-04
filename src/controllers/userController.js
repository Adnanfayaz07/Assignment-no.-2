const FlowDistributionService = require('../services/flowDistributionService');
const User = require('../models/user');

let users = [
  new User(1, 'User 1'),
  // Add more users as needed
];

const flowService = new FlowDistributionService(astrologers);

exports.distributeUsers = (req, res) => {
  flowService.distributeUsers(users);
  res.send('Users distributed');
};