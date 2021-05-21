const { validationResult } = require('express-validator');
const mongoose = require('mongoose');

const param = ({params: { id }}, res, next) => {
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No valid param!');
    next();
}

const errors = (req, res, next) => {
    const errors = validationResult(req);
    const extractedErrors = {}
    if(!errors.isEmpty()){
        errors.array({ onlyFirstError: true }).map(err => extractedErrors[err.param] = err.msg );
        res.status(400).json(extractedErrors);
    }else
        return next();
}


module.exports = { param, errors, };