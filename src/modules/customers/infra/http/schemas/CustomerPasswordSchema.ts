import { celebrate, Joi, Segments } from "celebrate";


export const ForgotCustomerPasswordSchema = celebrate({
    [Segments.BODY]: {
        email: Joi.string().email().required(),
    },
});

export const ResetCustomerPasswordSchema =  celebrate(
    {
        [Segments.BODY]: {
            token: Joi.string().uuid().required(),
            password: Joi.string().required(),
            password_confirmation: Joi.string().valid(Joi.ref('password')).required(),
        },
    }
);

export const updateCustomerPasswordSchema = celebrate({
    [Segments.PARAMS]: Joi.object().keys({
     id: Joi.string().required()
    }),
    
     [Segments.BODY]: {
       oldPassword: Joi.string(),
       newPassword: Joi.string(),
       newPassword_confirmation: Joi.string().valid(Joi.ref('newPassword')).required(), 
     },
   });