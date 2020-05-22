import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import mainStyles from './MainStyle';
import logo from '../../assets/3logo.png';
import Menu from './menu/Menu'

export default function Main() {
    const classes = mainStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <img edge="start" className={classes.menuButton} color="inherit" src={logo} alt="Logo" />
                    <Typography variant="h6" className={classes.title}>
                        Donde éste
                    </Typography>
                    <Button color="inherit">Algoritmos</Button>
                    <Button color="inherit">Vídeos</Button>
                </Toolbar>
            </AppBar>
            <div className={classes.center}>
                <div className={classes.menu}>
                    <Menu></Menu>
                </div>
            </div>
            <div className={classes.footer}>

            </div>
        </div>
    );
}