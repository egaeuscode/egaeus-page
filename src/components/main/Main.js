import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import mainStyles from './MainStyle';
import logo from '../../assets/3logo.png';
import Menu from './menu/Menu'
import Algorithm from '../algorithm/Algorithm';
import {Route} from 'react-router-dom'

export default function Main() {
    const classes = mainStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <img edge="start" className={classes.menuButton} color="inherit" src={logo} alt="Logo" />
                    <Typography variant="h6" className={classes.title}>
                        egaeus
                    </Typography>
                    <Button color="inherit">Algoritmos</Button>
                    <Button color="inherit">Codeforces</Button>
                </Toolbar>
            </AppBar>
            <div className={classes.center}>
                <div className={classes.menu}>
                    <Menu></Menu>
                </div>
                <div className={classes.content}>
                    <Route path={'/algorithms/:idAlgorithm'}>
                        <Algorithm></Algorithm>
                    </Route>
                </div>
            </div>
            <div className={classes.footer}>
            </div>
        </div>
    );
}