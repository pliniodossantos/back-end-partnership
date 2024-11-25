import { celebrate, Joi, Segments } from "celebrate";

export const AdmUpdateConsultantSchema = celebrate({
    [Segments.BODY]: {
        id: Joi.string().required(),
        name: Joi.string(),
        email: Joi.string().email(),
        cpf: Joi.string(),
        birthday: Joi.date()
    },
});
export const AdmDeleteConsultantSchema = celebrate({
    [Segments.BODY]: {
        id: Joi.string().required(),
    },
});

export const AdmUpdateStateConsultantSchema = celebrate({
    [Segments.BODY]: {
        id: Joi.string().required(),
        active: Joi.boolean().required()
    },
});

export const AdmUpdateStoreConsultantSchema = celebrate({
    [Segments.BODY]: {
        id: Joi.string().required(),
        cnpjStore: Joi.string().required()
    },
});