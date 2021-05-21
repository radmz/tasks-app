const Task = require('../models/todo');

const getTodos = async (req, res) => {
    try {
        const data = await Task.find();
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wron chaval!"});
    }
}

const createTodo = async ({ body }, res) => {
    const { task, description } = body;
    const todo = new Task({task, description});
    try {
        const data = await todo.save()
        res.json(data)    
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wron chaval!"});
    }
}

const deleteTodo = async ({params: { id }}, res) => {
    try {
        await Task.findByIdAndRemove(id);
        res.status(204).json({message: 'All Right Chaval!'})
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wron chaval!"});
    }
}

module.exports = { getTodos, createTodo, deleteTodo }