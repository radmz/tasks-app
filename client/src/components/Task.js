import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Card, CardContent, Typography, CardHeader, Avatar, CardActions, Tooltip, IconButton, CircularProgress } from "@material-ui/core";
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import { Delete } from "@material-ui/icons";
import { get, remove } from "../actions";

const Task = () => {
    const { loading, tasks } = useSelector(state => state.tasks);
    const dispatch = useDispatch();
    useEffect(() => dispatch(get()), [dispatch])
    const deleteTask = (id, task) => {
        if(window.confirm(`Deseas eliminar la tarea ${task}?`))
            dispatch(remove(id))
    }
    return(
        <Grid container spacing={3} style={{ marginTop: '20px' }}>
            { loading 
                ? <CircularProgress /> 
                : tasks.length 
                    ? tasks.map((t, i) => (
                        <Grid item xs={12} sm={4} md={3} key={i}>
                            <Card>
                                <CardHeader
                                    avatar={
                                        <Avatar style={{ backgroundColor: 'coral' }} >
                                            <FormatListBulletedIcon />
                                        </Avatar>
                                    }
                                    title={t.task}
                                    subheader={new Date(t.createdAt).toLocaleDateString()}
                                />
                                <CardContent>
                                    <Typography variant='body1'>{t.description}</Typography>
                                </CardContent>
                                <CardActions style={{ justifyContent: 'flex-end' }}>
                                    <Tooltip title='Eliminar'>
                                        <IconButton color='secondary' onClick={() => deleteTask(t._id, t.task)}  > <Delete /> </IconButton>
                                    </Tooltip>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))
                : <p style={{ color: 'white', fontSize: '25px' }} >Parece que aun no hay tareas!</p>
            }
        </Grid>
    )
}

export default Task;