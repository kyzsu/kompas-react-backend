import authenticate from '../../auth/login';

export default (req, res) => {
  const {
    body: { email, password, name },
  } = req;
  const data = { email, password, name };

  authenticate(data, res);
};
