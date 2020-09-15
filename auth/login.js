const fs = require('fs');

export default function authenticate(user, res) {
  const path = './db/users.json';

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res({ message: 'Failed to authenticate user', errors: ['Please contact admin'], code: 500 });
    } else {
      const userTable = JSON.parse(data);
      const checkUser = userTable.data.find(
        registered => registered.email == user.email && registered.password == user.password
      );

      if (checkUser) {
        res({
          message: 'Successfully login',
          data: { id: checkUser.id, email: user.email, name: checkUser.name },
        });
      } else {
        res({
          message: 'Please check your inputs',
          errors: ['Email or password is wrong'],
          code: 400,
        });
      }
    }
  });
}
