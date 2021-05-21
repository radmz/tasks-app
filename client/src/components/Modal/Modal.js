import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import { Dialog, DialogTitle, DialogContent, IconButton, Typography } from "@material-ui/core";
import { Close } from "@material-ui/icons";

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2)
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1)
    }
});

const Title = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <DialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6" >{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <Close />
                </IconButton>
            ) : null}
        </DialogTitle>
    )
})

const Content = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2)
    }   
}))(DialogContent)

const Modal = ({children, open, close }) => {
    return(
        <Dialog onClose={close} open={open}>
            <Title onClose={close}> Crear nueva tarea! </Title>
            <Content dividers>
                {children}
            </Content>
        </Dialog>
    )
}

export default Modal;