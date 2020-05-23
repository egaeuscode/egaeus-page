import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import mainStyles from './MainStyle';
import logo from '../../assets/3logo.png';
import Menu from './menu/Menu'
import Algorithm from '../algorithm/Algorithm';
import {Route} from 'react-router-dom'
import {Link} from "@material-ui/core";

export default function Main() {
    const classes = mainStyles();

    return (

        <div className={classes.root}>
            {console.log("Main")}
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <img edge="start" className={classes.menuButton} color="inherit" src={logo} alt="Logo" />
                    <Typography variant="h6" className={classes.title}>
                        egaeus
                    </Typography>
                    <Link href='https://github.com/egaeuscode' target='_blank'>
                        <img src={require('../../assets/github_logo.png')} className={classes.githubImage} alt='github'></img>
                    </Link>
                    <Link href='https://codeforces.com/profile/egaeus.code' target='_blank'>
                        <img src={require('../../assets/codeforces_logo.png')} className={classes.codefocesImage} alt='codeforces'></img>
                    </Link>
                    <Link href='https://www.youtube.com/channel/UC5Cnp7HMS12SJmvIYHUnwdQ' target='_blank'>
                        <img src={require('../../assets/yt_logo_rgb_dark.png')} className={classes.youtubeImage} alt='youtube'></img>
                    </Link>
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
