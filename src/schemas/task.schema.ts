import Joi from "joi";

export const taskTypeSchema = Joi.object({
  task: Joi.string().required(),
  author: Joi.string().required(),
  status: Joi.boolean().required()
});


