const Joi = require('joi');

module.exports = {

    createUserSchema: Joi.object({

        role: Joi.string().valid('client', 'graphiste', 'admin').required(),

        email: Joi.string().required()
            .email({ minDomainSegments: 2, tlds: {allow: ['com', 'net', 'fr', 'io']}}),

        password: Joi.string().required()
            .pattern(new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@#!%*?&])[A-Za-z\d$@$!%*?&]{8,32}$/)),
            // (?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@#!%*?&])[A-Za-z\d$@$!%*?&]{8,32}$
            // .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

        first_name: Joi.string().empty(''),

        last_name: Joi.string().empty(''),

        company_name: Joi.string().empty(''),

        image: Joi.string().empty('')

        
    }),

    updateUserSchema: Joi.object({

        first_name: Joi.string().empty(''),

        last_name: Joi.string().empty(''),

        company_name: Joi.string().empty(''),

        image: Joi.string().empty(''),

        id: Joi.number()
    }),

    commentSchema: Joi.object({

        text: Joi.string(),

        list_comment_id: Joi.number(),

        user_id: Joi.number()
    }),

    createProjectSchema: Joi.object({

        name: Joi.string()
    }),

    updateProjectSchema: Joi.object({

        name: Joi.string(),

        statut: Joi.string(),

        project_id: Joi.number()
    }),

    loginSchema: Joi.object({

        email: Joi.string().required()
        .email({ minDomainSegments: 2, tlds: {allow: ['com', 'net', 'fr', 'io']}}),

        password: Joi.string().required()
        .pattern(new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@#!%*?&])[A-Za-z\d$@$!%*?&]{8,32}$/))
        // .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    }),

    newCommentListSchema: Joi.object({

        sticker_id: Joi.number(),

        name: Joi.string()
    }),

    newFeedbackSchema: Joi.object({

        project_id: Joi.number(),

        user_id: Joi.number(),

        name: Joi.string()
    }),

    newImageListSchema: Joi.object({

        feedback_id: Joi.number(),

        name: Joi.string()
    }),

}
