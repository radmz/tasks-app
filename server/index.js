const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
dotenv.config();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true, limit: '30mb'}))
app.use(cors({ origin: 'http://localhost:3000', credentials: true }))
const mess = "What's up guys, welcome to first App using firebase as db!"

app.get('/', (req, res) => res.send(mess));
app.use('/todos', require('./routes/todo'));

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)) )
    .catch(err => console.log(err.message))

mongoose.set('useFindAndModify', false);

