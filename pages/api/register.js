import register from '../../auth/register';
import { validateRegister } from '../../auth/validation';

export default (req, res) => {
  const {
    body: { email, password, name },
  } = req;
  const data = { email, password, name };

  validateRegister(data, res);

  if (register(data)) {
    res.statusCode = 200;
    res.json(data);
  } else {
    res.statusCode = 500;
    res.json({ message: 'Failed to register user' });
  }

};
