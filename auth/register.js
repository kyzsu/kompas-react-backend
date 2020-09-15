const fs = require('fs');

export default function register(user) {
  const path = './db/users.json';

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      return false;
    } else {
      const userTable = JSON.parse(data);
      const lastId = userTable.data.length;

      userTable.data.push({ id: lastId + 1, ...user });

      fs.writeFile(path, JSON.stringify(userTable), err => {
        if (err) {
          console.log(err);
          return false;
        }
      });
    }
  });

  return true;
}
