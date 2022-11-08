const queries = {
  createUser: (name, email, password) => {
    return `INSERT IGNORE users 
                (name, email, password)
                     VALUES
                        ("${name}", "${email}", "${password}");`;
  },

  checkCreds: (email, password) => {
    return `SELECT id
                FROM users
                    WHERE 
                        email = "${email}"
                            AND 
                                password = "${password}";`;
  },

  addToken: (user_id, token) => {
    return `INSERT INTO logins
                    (user_id, token)
                            VALUES
                                (${user_id}, "${token}");`;
  },

  removeToken: (token) => {
    return `DELETE FROM logins
                WHERE token = "${token}";`;
  },

  getUser: (token) => {
    return `SELECT name, email, users.entry_date FROM users
              JOIN logins
                ON users.id = logins.user_id
                  WHERE token = "${token}";`;
  },

  deleteUser: (token) => {
    return `DELETE users, logins
              FROM users
                  JOIN logins
                      ON users.id = logins.user_id
                        WHERE token = "${token}";`;
  },

  updateUser: (name, email, password, token) => {
    return ` UPDATE users
                        JOIN logins
                           ON users.id = logins.user_id
                            SET
                                users.name = "${name}", users.email = "${email}", users.password = "${password}"
                                  WHERE token = "${token}";`;
  },
};

module.exports = queries;
