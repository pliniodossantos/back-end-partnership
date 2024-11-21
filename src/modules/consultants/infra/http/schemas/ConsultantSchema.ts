import { celebrate, Joi, Segments } from "celebrate";

export const idParamsValidate = celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  });


  export const createConsultantSchema = celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      cpf: Joi.string().required(),
      password: Joi.string().required(),
      birthday: Joi.date().required(),
      cnpjStore: Joi.string().required()
    },
  });

  export const updateConsultantSchema = celebrate({
   [Segments.PARAMS]: Joi.object().keys({
    id: Joi.string().required()
   }),
   
    [Segments.BODY]: {
      name: Joi.string(),
      email: Joi.string().email(),
      cpf: Joi.string(),
      birthday: Joi.date()
    },
  });