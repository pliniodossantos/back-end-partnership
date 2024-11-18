import { celebrate, Joi, Segments } from "celebrate";


export const sessionCustomerSchema = celebrate({
    [Segments.BODY]: {
        cpfOrCnpj: Joi.string().required(),
        password: Joi.string().required()
    },
});