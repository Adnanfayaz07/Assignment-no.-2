class Astrologer {
    constructor(id, name, isTop = false) {
      this.id = id;
      this.name = name;
      this.isTop = isTop;
      this.currentFlow = 0;
    }
  }
  
  module.exports = Astrologer;