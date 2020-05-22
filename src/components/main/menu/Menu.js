import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import mainStyles from './MainStyle';
import logo from '../../assets/3logo.png';

export default function ButtonAppBar() {
    const classes = mainStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <img edge="start" className={classes.menuButton} color="inherit" src={logo} alt="Logo" />
                    <Typography variant="h6" className={classes.title}>
                        Donde éste
                    </Typography>
                    <Button color="inherit">Algoritmos</Button>
                    <Button color="inherit">Vídeos</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}