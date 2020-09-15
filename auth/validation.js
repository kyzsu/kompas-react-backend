export function validateRegister({ email, password, name }, res) {
  const errors = [];

  if (email == null || email == '') {
    errors.push('Email must not be empty');
  }
  if (password == null || password == '') {
    errors.push('Password must not be empty');
  }
  if (password.length < 8) {
    errors.push("The password has to be equals or longer than 8 digits!");
  }
  if (name == null || name == '') {
    errors.push('Name must not be empty');
  }

  if (errors.length > 0) {
    res({ message: "There's something wrong with your input", errors, code: 400 });
  }
}
