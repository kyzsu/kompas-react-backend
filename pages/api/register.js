import { validateRegister } from '../../auth/validation';

export default (req, res) => {
  const {
    body: { email, password, name },
  } = req;

  validateRegister(req, res);

  res.statusCode = 200;
  res.json({ email, password, name });
};
