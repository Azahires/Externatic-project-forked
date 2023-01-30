const AbstractManager = require("./AbstractManager");

class ApplicationManager extends AbstractManager {
  constructor() {
    super({ table: "application" });
  }

  insert(application) {
    return this.connection.query(
      `insert into ${this.table} (user_id, offer_id, application_date) values (?,?,?)`,
      [application.user_id, application.offer_id, application.application_date]
    );
  }

  update(application) {
    return this.connection.query(
      `update ${this.table} set user_id = ? offer_id where id = ?`,
      [application.user_id, application.offer_id]
    );
  }
}

module.exports = ApplicationManager;
