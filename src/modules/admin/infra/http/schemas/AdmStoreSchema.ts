import { celebrate, Joi, Segments } from "celebrate";
export const AdmUpdateStoreSchema = celebrate({
    [Segments.BODY]: {
        id: Joi.string().required(),
        name: Joi.string(),
        email: Joi.string().email(),
        cnpj: Joi.string(),
        birthday: Joi.date()
    },
});
export const AdmDeleteStoreSchema = celebrate({
    [Segments.BODY]: {
        id: Joi.string().required(),
    },
});
export const AdmUpdateStateStoreSchema = celebrate({
    [Segments.BODY]: {
        id: Joi.string().required(),
        active: Joi.boolean().required()
    },
});