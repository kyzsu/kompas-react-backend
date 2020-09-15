import authenticate from '../../auth/login';

export default (req, res) => {
  const {
    body: { email, password, name },
  } = req;
  const data = { email, password, name };

  authenticate(data, ({ message, errors, data, code = 200 }) => {
    res.statusCode = code;
    if(code != 200) {
      res.json({ message, errors });
    } else {
      res.json({ message, data });
    }
  });
};
