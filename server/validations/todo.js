const { check } = require('express-validator');

const required = 'Campo obligatorio';
const expReg = /^[A-Za-z0-9., ]+$/;
const validate = () => {
    return [
        check('description')
            .notEmpty().withMessage(required)
            .isLength({min: 4, max: 100}).withMessage('Longitud minima 4 y maxima 100')
            .matches(expReg).withMessage('Solo letras y numeros'),
        check('task')
            .notEmpty().withMessage(required)
            .isLength({min: 4, max: 100}).withMessage('Longitud minima 4 y maxima 100')
            .matches(expReg).withMessage('Solo letras y numeros')
    ]
}

module.exports = { validate }