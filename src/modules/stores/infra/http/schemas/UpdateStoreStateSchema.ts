import { celebrate, Joi, Segments } from "celebrate";

export const updateStoreStateSchema = celebrate({
    [Segments.PARAMS]: Joi.object().keys({
     id: Joi.string().required()
    }),
    
     [Segments.BODY]: {
       active: Joi.boolean(),
     },
   });