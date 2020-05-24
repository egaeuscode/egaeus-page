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
import News from "../news/News";
import colors from "../../resources/colors";
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

export default function Main() {
    const classes = mainStyles();
    const [focused, setFocused] = React.useState(false);

    function changeFocused(focus) {
        console.log(focus+' '+focused);
        if(focus !== focused)
            setFocused(focus);
    }

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <Link href={'/algorithms'}>
                        <img edge="start" className={classes.menuButton} color="inherit" src={logo} alt="Logo"/>
                    </Link>
                    <div className={classes.title}>
                        <Paper component="form" className={classes.rootSearch} style={{background: focused ? colors.white : colors.black}}>
                            <IconButton type="submit" className={classes.iconButton} aria-label="search"
                                        style={{color: focused ? colors.black : colors.silver}}>
                                <SearchIcon/>
                            </IconButton>
                            <InputBase
                                className={classes.input}
                                style={{color: focused ? colors.black : colors.white}}
                                placeholder="Buscar"
                            />
                        </Paper>
                    </div>
                    <Link href='https://github.com/egaeuscode' target='_blank'>
                        <img src={require('../../assets/github_logo.png')} className={classes.githubImage}
                             alt='github'></img>
                    </Link>
                    <Link href='https://codeforces.com/profile/egaeus.code' target='_blank'>
                        <img src={require('../../assets/codeforces_logo.png')} className={classes.codefocesImage}
                             alt='codeforces'></img>
                    </Link>
                    <Link href='https://www.youtube.com/channel/UC5Cnp7HMS12SJmvIYHUnwdQ' target='_blank'>
                        <img src={require('../../assets/yt_logo_rgb_dark.png')} className={classes.youtubeImage}
                             alt='youtube'></img>
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
                    <Route path={['/algorithms', '/']}>
                        <News></News>
                    </Route>
                </div>
            </div>
            <div className={classes.footer}>
                <Typography style={{color: colors.silver_footer, fontSize: 12,}}>Desarrollo: Sebastián Beltrán
                    sebegaeusprogram@gmail.com | Pierre Pradere pepradere@gmail.com</Typography>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Typography style={{color: colors.silver_footer, fontSize: 11,}}>Hecho en</Typography>
                    <img src={require('../../assets/logo.svg')} style={{height: 15}} alt={'logo'} />
                    <Typography style={{color: colors.silver_footer, fontSize: 11, marginLeft: -2, marginRight: 2}}>React
                        + Firebase</Typography>
                    <img src={require('../../assets/lockup.png')} alt={'firebase'} style={{height: 15}}/>
                </div>
            </div>
        </div>
    );
}
