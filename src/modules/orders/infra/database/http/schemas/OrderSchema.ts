import { celebrate, Joi, Segments } from "celebrate";

export const createOrdertSchema = celebrate({

    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.string().required()
    }),
    [Segments.BODY]: {
        customerCpfOrCnpj: Joi.string().required(),
        points_customer: Joi.number().required(),
        obs: Joi.string().required(),
    },
});
