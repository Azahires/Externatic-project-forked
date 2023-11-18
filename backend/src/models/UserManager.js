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

  getByEmail(user) {
    return this.connection.query(
      `select * from ${this.table} where email = ?`,
      [user.email]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${this.table} set lastname= ?, firstname=?, email= ?, phonenumber=?, linkedinlink=?, githublink=?, city=?, postalcode=?, activeSearch=?, biography=?, avatar=?, CV=?  where id = ?`,
      [
        user.lastname,
        user.firstname,
        user.email,
        user.phonenumber,
        user.linkedinlink,
        user.githublink,
        user.city,
        user.postalcode,
        user.activeSearch,
        user.biography,
        user.avatar,
        user.CV,
        user.id,
      ]
    );
  }

  updateFile(fieldname, file, id) {
    return this.connection.query(
      `update ${this.table} set ${fieldname}= ? where id = ?`,
      [file, id]
    );
  }
}

module.exports = UserManager;
