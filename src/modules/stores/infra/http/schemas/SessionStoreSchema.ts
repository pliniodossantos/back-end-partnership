import { celebrate, Joi, Segments } from "celebrate";


export const sessionStoreSchema = celebrate({
    [Segments.BODY]: {
        cnpj: Joi.string().required(),
        password: Joi.string().required()
    },
});