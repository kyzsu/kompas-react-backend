const fs = require('fs');

export default function register(user, res) {
  const path = './db/users.json';

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.statusCode = 500;
      res.json({ message: 'Failed to register user', errors: ['Please contact admin'] });
    } else {
      const userTable = JSON.parse(data);

      if (notUniqueUser(userTable, user)) {
        res.statusCode = 400;
        res.json({
          message: 'User with similar email already exists',
          errors: ["You can't use same email"],
        });
      } else {
        const lastId = userTable.data.length;

        userTable.data.push({ id: lastId + 1, ...user });

        fs.writeFile(path, JSON.stringify(userTable), err => {
          if (err) {
            console.log(err);
            res.statusCode = 500;
            res.json({ message: 'Failed to register user', errors: ['Please contact admin'] });
          }

          res.statusCode = 200;
          res.json({ message: 'Successfully registered user', data: user });
        });
      }
    }
  });
}

function notUniqueUser(table, { email }) {
  return table.data.find(registered => registered.email == email) ? true : false;
}
