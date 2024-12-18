import { celebrate, Joi, Segments } from "celebrate";

export const createAdmOrdertSchema = celebrate({
    [Segments.BODY]: {
        id: Joi.string().required(),
        customerCpfOrCnpj: Joi.string().required(),
        points_customer: Joi.number().required(),
        obs: Joi.string().required(),
    },
});

export const decreaseCustomerAdmOrdertSchema = celebrate({
    [Segments.BODY]: {
        customerCpfOrCnpj: Joi.string().required(),
        points_customer: Joi.number().required(),
    },
});
export const decreaseConsulantAdmOrdertSchema = celebrate({
    [Segments.BODY]: {
        consulantCpf: Joi.string().required(),
        points_consulant: Joi.number().required(),
    },
});

export const deletAdmOrdertSchema = celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.string().required()
       }),
});
export const listAdmOrdertSchema = celebrate({
    [Segments.BODY]: {
        id: Joi.string().required(),
    },
});