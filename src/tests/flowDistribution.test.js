const assert = require('assert');
const Astrologer = require('../models/astrologer');
const FlowDistributionService = require('../services/flowDistributionService');

describe('Flow Distribution Service', () => {
  it('should distribute users evenly among astrologers', () => {
    let astrologers = [
      new Astrologer(1, 'Astrologer 1'),
      new Astrologer(2, 'Astrologer 2'),
    ];
    let users = [1, 2, 3, 4, 5].map(id => ({ id }));

    const flowService = new FlowDistributionService(astrologers);
    flowService.distributeUsers(users);

    assert.strictEqual(astrologers[0].currentFlow, 3);
    assert.strictEqual(astrologers[1].currentFlow, 2);
  });

  it('should prioritize top astrologers', () => {
    let astrologers = [
      new Astrologer(1, 'Astrologer 1', true),
      new Astrologer(2, 'Astrologer 2'),
    ];
    let users = [1, 2, 3].map(id => ({ id }));

    const flowService = new FlowDistributionService(astrologers);
    flowService.distributeUsers(users);

    assert.strictEqual(astrologers[0].currentFlow, 3);
    assert.strictEqual(astrologers[1].currentFlow, 0);
  });
});