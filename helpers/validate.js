const validator = require("validator");

const validate = (params) => {
  let resultado = false;
  let name =
    !validator.isEmpty(params.name) &&
    validator.isLength(params.name, { min: 3, max: undefined }) &&
    validator.isAlpha(params.name, "es-ES");
  let nick =
    !validator.isEmpty(params.nick) &&
    validator.isLength(params.nick, { min: 2, max: 60 });
  let email =
    !validate.isEmpty(params.email) && validator.isEmail(params.email);

  let password = !validator.isEmpty(params.password);

  if (params.surname) {
    let surname =
      !validator.isEmpty(params.surname) &&
      validator.isLength(params.surname, { min: 3, max: undefined }) &&
      validator.isAlpha(params.surname, "es-ES");
  }
  if (!surname) {
    throw new Error("no se ha superado la validacion por apellido incorrecto");
    resultado = false;
  } else {
    console.log("Validacion superada en el apellido");
  }
  if (!name || !nick || !password) {
    throw new Error("No se ha superado la validacion");
    resultado = false;
  } else {
    console.log("validacion superada");
    resultado = true;
  }

  return resultado;
};
