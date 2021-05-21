const { Router } = require('express');
const router = Router();
const { getTodos, createTodo, editTodo, deleteTodo } = require('../controllers/todo');
const { validate } = require('../validations/todo');
const { param, errors } = require('../validations');

router.get('/', getTodos);
router.post('/', validate(), errors, createTodo);
router.delete('/:id', param, deleteTodo);

module.exports = router