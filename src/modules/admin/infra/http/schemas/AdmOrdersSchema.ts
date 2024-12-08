import { celebrate, Joi, Segments } from "celebrate";

export const createAdmOrdertSchema = celebrate({
    [Segments.BODY]: {
        id: Joi.string().required(),
        customerCpfOrCnpj: Joi.string().required(),
        points_customer: Joi.number().required(),
        obs: Joi.string().required(),
    },
});

export const deletAdmOrdertSchema = celebrate({
    [Segments.BODY]: {
        id: Joi.string().required(),
    },
});
export const listAdmOrdertSchema = celebrate({
    [Segments.BODY]: {
        id: Joi.string().required(),
    },
});