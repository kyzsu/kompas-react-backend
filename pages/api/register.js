import register from '../../auth/register';
import { validateRegister } from '../../auth/validation';

export default (req, res) => {
  const {
    body: { email, password, name },
  } = req;
  const data = { email, password, name };

  validateRegister(data, res);

  register(data, res);
};
