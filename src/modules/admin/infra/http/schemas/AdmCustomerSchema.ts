import { celebrate, Segments } from "celebrate";
import Joi from "joi";

export const AdmUpdateCustomerSchema = celebrate({
    [Segments.BODY]: {
        id: Joi.string().required(),
        name: Joi.string(),
        email: Joi.string().email(),
        cpfOrCnpj: Joi.string(),
        password: Joi.string(),
        birthday: Joi.date(),
        complement: Joi.string()
    },
});

export const AdmDeleteCustomerSchema = celebrate({
    [Segments.BODY]: {
        id: Joi.string().required(),
    },
});

export const AdmUpdateStateCustomerSchema = celebrate({
    [Segments.BODY]: {
        id: Joi.string().required(),
        active: Joi.boolean().required(),
    },
});