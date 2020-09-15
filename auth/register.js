const fs = require('fs');

export default function register(user, res) {
  const path = './db/users.json';

  fs.readFile(path, (err, data) => {
    if (err) {
      console.error(err);

      res({
        message: 'Failed to register user',
        errors: ['Please contact admin'],
        code: 500,
      });
    } else {
      const userTable = JSON.parse(data);

      if (notUniqueUser(userTable, user)) {
        res({
          message: 'User with similar email already exists',
          errors: ["You can't use same email"],
          code: 400,
        });
      } else {
        const lastId = userTable.data.length;

        userTable.data.push({ id: lastId + 1, ...user });

        fs.writeFile(path, JSON.stringify(userTable), err => {
          if (err) {
            console.log(err);

            res({
              message: 'Failed to register user',
              errors: ['Please contact admin'],
              code: 500,
            });
          }

          delete user.password;

          res({ message: 'Successfully registered user', data: { id: lastId + 1, ...user } });
        });
      }
    }
  });
}

function notUniqueUser(table, { email }) {
  return table.data.find(registered => registered.email == email) ? true : false;
}
