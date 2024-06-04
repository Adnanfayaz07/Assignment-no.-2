const Astrologer = require('../models/astrologer');

class FlowDistributionService {
  constructor(astrologers) {
    this.astrologers = astrologers;
  }

  distributeUsers(users) {
    const topAstrologers = this.astrologers.filter(ast => ast.isTop);
    const regularAstrologers = this.astrologers.filter(ast => !ast.isTop);

    users.forEach(user => {
      let selectedAstrologer;

      if (topAstrologers.length > 0) {
        selectedAstrologer = topAstrologers.sort((a, b) => a.currentFlow - b.currentFlow)[0];
      } else {
        selectedAstrologer = regularAstrologers.sort((a, b) => a.currentFlow - b.currentFlow)[0];
      }

      selectedAstrologer.currentFlow += 1;
    });
  }

  toggleTopAstrologer(astrologerId, isTop) {
    const astrologer = this.astrologers.find(ast => ast.id === astrologerId);
    if (astrologer) {
      astrologer.isTop = isTop;
    }
  }
}

module.exports = FlowDistributionService;