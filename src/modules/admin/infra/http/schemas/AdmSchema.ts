import { celebrate, Joi, Segments } from "celebrate";

export const idParamsValidate = celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  });


  export const createAdmSchema = celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      cpf: Joi.string().required(),
      password: Joi.string().required(),
      keyAcess: Joi.string().required()
    },
  });

  export const updateAdmSchema = celebrate({
   [Segments.PARAMS]: Joi.object().keys({
    id: Joi.string().required()
   }),
   
    [Segments.BODY]: {
      name: Joi.string(),
      email: Joi.string().email(),
      cpf: Joi.string(),
    },
  });
  export const approveAdmSchema = celebrate({
    
     [Segments.BODY]: {
      id: Joi.string().required(),
       pending: Joi.boolean().required(),
     },
   });