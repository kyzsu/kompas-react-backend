const fs = require('fs');

export default function register(user, res) {
  const path = './db/users.json';

  return fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      return false;
    } else {
      const userTable = JSON.parse(data);
      userTable.data.push(user);

      fs.writeFile(path, JSON.stringify(userTable), err => {
        if (err) {
          console.log(err);
          return false;
        }
      });
    }
  });
}
