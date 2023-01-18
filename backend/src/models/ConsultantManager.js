const AbstractManager = require("./AbstractManager");

class ConsultantManager extends AbstractManager {
  constructor() {
    super({ table: "consultant" });
  }

  insert(item) {
    return this.connection.query(
      `insert into ${this.table} (name, firstname) values (?, ?)`,
      [item.name, item.firstname]
    );
  }

  update(item) {
    return this.connection.query(
      `update ${this.table} set name = ? where id = ?`,
      [item.name, item.firstname]
    );
  }
}

module.exports = ConsultantManager;
