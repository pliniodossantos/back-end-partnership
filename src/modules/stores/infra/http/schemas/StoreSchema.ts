import { celebrate, Joi, Segments } from "celebrate";

export const idParamsValidate = celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  });


  export const createStoreSchema = celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      cnpj: Joi.string().required(),
      password: Joi.string().required(),
      birthday: Joi.date().required()
    },
  });

  export const updateStoreSchema = celebrate({
   [Segments.PARAMS]: Joi.object().keys({
    id: Joi.string().required()
   }),
   
    [Segments.BODY]: {
      name: Joi.string(),
      email: Joi.string().email(),
      cnpj: Joi.string(),
      password: Joi.string(),
      active: Joi.boolean(),
      birthday: Joi.date()
    },
  });