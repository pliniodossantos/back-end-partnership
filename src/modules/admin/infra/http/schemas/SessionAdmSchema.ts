import { celebrate, Joi, Segments } from "celebrate";


export const sessionAdmSchema = celebrate({
    [Segments.BODY]: {
        cpf: Joi.string().required(),
        password: Joi.string().required()
    },
});