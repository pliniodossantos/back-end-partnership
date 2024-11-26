import { celebrate, Joi, Segments } from "celebrate";

export const idParamsValidate = celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  });


  export const createCustomerSchema = celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      cpfOrCnpj: Joi.string().required(),
      password: Joi.string().required(),
      birthday: Joi.date().required(),
      complement: Joi.string().required()
    },
  });

  export const updateCustomerSchema = celebrate({
   [Segments.PARAMS]: Joi.object().keys({
    id: Joi.string().required()
   }),
   
    [Segments.BODY]: {
      name: Joi.string(),
      email: Joi.string().email(),
      cpfOrCnpj: Joi.string(),
      birthday: Joi.date(),
      complement: Joi.string()
    },
  });