import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { create } from "../../actions";
import { useForm } from 'react-hook-form';
import Modal from './Modal';
import { Button, Tooltip, TextField } from "@material-ui/core";
import AddCircleIcon from '@material-ui/icons/AddCircle';

const Form = () => {
    const { sending } = useSelector(state => state.tasks);
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);
    const { handleSubmit, setError, register, errors } = useForm();
    const onSubmit = data => dispatch(create( data, setError, closeModal))

    return (
        <>
            <Tooltip title='Nueva tarea'>
                <Button onClick={openModal} color='primary' endIcon={<AddCircleIcon />} variant='contained'>
                    Nueva tarea
                </Button>
            </Tooltip>
            <Modal open={open} close={closeModal}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField 
                        error={Boolean(errors.task)}
                        name='task'
                        variant="outlined"
                        margin='normal'
                        fullWidth
                        label='Tarea'
                        type='text'
                        inputRef = { register ({
                            required: 'Campo obligatorio',
                            minLength: { value: 4, message: 'Longitud minima 4' },
                            pattern: { value: /^[a-zA-ZáéíóúñÁÉÍÓÚÑ,. ]{4,100}$/i, message: 'Hay valores no permitidos' },
                            maxLength: { value: 100, message: 'Longitud maxima 100' }
                        })}
                        helperText={errors.task ? errors.task.message : null}
                    />
                    <TextField 
                        error={Boolean(errors.description)}
                        name='description'
                        variant="outlined"
                        margin='normal'
                        fullWidth
                        label='Descripcion'
                        type='text'
                        inputRef = { register ({
                            required: 'Campo obligatorio',
                            minLength: { value: 4, message: 'Longitud minima 4' },
                            pattern: { value: /^[a-zA-ZáéíóúñÁÉÍÓÚÑ,. ]{4,100}$/i, message: 'Hay valores no permitidos' },
                            maxLength: { value: 100, message: 'Longitud maxima 100' }
                        })}
                        helperText={errors.description ? errors.description.message : null}
                    />
                    { sending ? 'Enviando....' : <Button type='submit' fullWidth color='primary' variant='contained'>Registrar</Button> }
                </form>
            </Modal>
        </>
    )
}

export default Form;