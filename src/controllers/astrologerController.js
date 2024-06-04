const FlowDistributionService = require('../services/flowDistributionService');
const Astrologer = require('../models/astrologer');

let astrologers = [
  new Astrologer(1, 'Astrologer 1', true),
  // Add more astrologers as needed
];

const flowService = new FlowDistributionService(astrologers);

exports.toggleTopAstrologer = (req, res) => {
  const { astrologerId, isTop } = req.body;
  flowService.toggleTopAstrologer(astrologerId, isTop);
  res.send('Astrologer status updated');
};