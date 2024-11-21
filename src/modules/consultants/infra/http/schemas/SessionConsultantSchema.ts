import { celebrate, Joi, Segments } from "celebrate";


export const sessionConsultantSchema = celebrate({
    [Segments.BODY]: {
        cpf: Joi.string().required(),
        password: Joi.string().required()
    },
});