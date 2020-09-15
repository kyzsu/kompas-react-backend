const fs = require('fs');

export default function authenticate(user, res) {
  const path = './db/users.json';

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.statusCode = 500;
      res.json({ message: 'Failed to authenticate user', errors: ['Please contact admin'] });
    } else {
      const userTable = JSON.parse(data);
      const checkUser = userTable.data.find(
        registered => registered.email == user.email && registered.password == user.password
      );

      if (checkUser) {
        res.statusCode = 200;
        res.json({
          message: 'Successfully login',
          data: { id: checkUser.id, email: user.email, name: checkUser.name },
        });
      } else {
        res.statusCode = 400;
        res.json({ message: 'Email or password is wrong' });
      }
    }
  });
}