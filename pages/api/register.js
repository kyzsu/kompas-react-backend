import register from '../../auth/register';
import { validateRegister } from '../../auth/validation';

export default (req, res) => {
  const {
    body: { email, password, name },
  } = req;
  const data = { email, password, name };
  let fail = false;

  validateRegister(data, ({ message, errors, code = 200 }) => {
    res.statusCode = code;
    if (code != 200) {
      res.json({ message, errors });
      fail = true;
    }
  });

  if (!fail) {
    register(data, ({ message, errors, data, code = 200 }) => {
      res.statusCode = code;
      if (code != 200) {
        res.json({ message, errors });
      } else {
        res.json({ message, data });
      }
    });
  }
};
