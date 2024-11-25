import { celebrate, Joi, Segments } from "celebrate";


export const ForgotAdmPasswordSchema = celebrate({
    [Segments.BODY]: {
        email: Joi.string().email().required(),
    },
});

export const ResetAdmPasswordSchema =  celebrate(
    {
        [Segments.BODY]: {
            token: Joi.string().uuid().required(),
            password: Joi.string().required(),
            password_confirmation: Joi.string().valid(Joi.ref('password')).required(),
        },
    }
);

export const updateAdmPasswordSchema = celebrate({
    [Segments.PARAMS]: Joi.object().keys({
     id: Joi.string().required()
    }),
    
     [Segments.BODY]: {
       oldPassword: Joi.string(),
       newPassword: Joi.string(),
       newPassword_confirmation: Joi.string().valid(Joi.ref('newPassword')).required(), 
     },
   });