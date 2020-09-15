export function validateRegister(req, res) {
  const {
    body: { email, password, name },
  } = req;

  const errors = [];

  if (email == null) {
    errors.push('Email must not be empty');
  }
  if (password == null) {
    errors.push('Password must not be empty');
  }
  if (name == null) {
    errors.push('Name must not be empty');
  }

  if (errors.length > 0) {
    res.statusCode = 400;
    res.json({ message: "There's something wrong with your input", errors });
  }
}