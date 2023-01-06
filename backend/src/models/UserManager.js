const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.connection.query(
      `insert into ${this.table} (lastname, firstname, email, hashedPassword) values (?,?,?,?)`,
      [user.lastname, user.firstname, user.email, user.hashedPassword]
    );
  }

  getbyemail(user) {
    return this.connection.query(
      `select * from ${this.table} where email = ?`,
      [user.email]
    );
  }

  // update à modifier
  update(user) {
    return this.connection.query(
      `update ${this.table} set title = ? where id = ?`,
      [user.title, user.id]
    );
  }
}

module.exports = UserManager;
