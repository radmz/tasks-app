import React from 'react';
import { Container, Typography } from "@material-ui/core";
import Task from './components/Task';
import Form from './components/Modal/Form';
const App = () => {
    return(
        <Container>
            <Typography align='center' variant='h4' color='primary'>Lista de Actividades!</Typography>
            <Form />
            <Task />
        </Container>
    )
}

export default App;