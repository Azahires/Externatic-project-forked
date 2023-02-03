const AbstractManager = require("./AbstractManager");

class FavoriteManager extends AbstractManager {
  constructor() {
    super({ table: "favorite" });
  }

  insert(favorite) {
    return this.connection.query(
      `insert into ${this.table} (user_id, offer_id) values (?,?)`,
      [favorite.user_id, favorite.offer_id]
    );
  }

  update(favorite) {
    return this.connection.query(
      `update ${this.table} set user_id = ? offer_id where id = ?`,
      [favorite.user_id, favorite.offer_id]
    );
  }

  remove(favorite) {
    return this.connection.query(
      `delete from ${this.table} where user_id = ? and offer_id = ?`,
      [favorite.user_id, favorite.offer_id]
    );
  }
}

module.exports = FavoriteManager;
