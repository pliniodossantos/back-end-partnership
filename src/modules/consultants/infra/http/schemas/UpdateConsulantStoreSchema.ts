import { celebrate, Joi, Segments } from "celebrate";

export const updateConsultantStoreSchema = celebrate({
    [Segments.PARAMS]: Joi.object().keys({
     id: Joi.string().required()
    }),
    
     [Segments.BODY]: {
       cnpjStore: Joi.string().required(),
     },
   });