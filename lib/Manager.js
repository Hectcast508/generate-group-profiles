const employee = require('./Employee');

class manager extends employee {
  constructor(officeNumber) {
    super();
    this.officeNumber = officeNumber;
  }
  getOffice() {
    return this.officeNumber;
  }
  getRole() {
    return 'Manager';
  }
}

module.exports = manager;