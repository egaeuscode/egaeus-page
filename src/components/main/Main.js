import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import mainStyles from './MainStyle';
import logo from '../../assets/3logo.png';
import Menu from './menu/Menu'
import Algorithm from '../algorithm/Algorithm';
import {Route, Link, useHistory} from 'react-router-dom'
import News from "../news/News";
import colors from "../../resources/colors";
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import {getAlgorithmsService} from "./menu/MenuService";

export default function Main() {
    const classes = mainStyles();
    const [calledService, setCalledService] = React.useState(false);
    const [algorithms, setAlgorithms] = React.useState([]);
    const [showSearch, setShowSearch] = React.useState(false);
    const [searchAlgorithms, setSearchAlgorithms] = React.useState([]);
    const [selectedAlgorithm, setSelectedAlgorithm] = React.useState('');
    const history = useHistory();

    if (!calledService) {
        setCalledService(true);
        getAlgorithmsService().then(snapshot => {
            let list = []
            snapshot.forEach(obj => {
                const algorithm = obj.data();
                algorithm["id"] = obj.id;
                list.push(algorithm);
            })
            setAlgorithms(list);
        });
    }

    function onSearch(event) {
        const search = event.target.value.toLocaleLowerCase().split(" ");
        const list = [];
        algorithms.forEach(algorithm => {
            algorithm['count'] = 0;
            search.forEach(item => {
                if (item.length > 0)
                    algorithm['count'] += (algorithm['name'].toLocaleLowerCase().indexOf(item) >= 0 ? 1 : 0)
            });
            if (algorithm['count'] > 0)
                list.push(algorithm);
        });
        list.sort((a, b) => a['count'] !== b['count'] ? b['count'] - a['count'] : a['name'].toLocaleLowerCase() <= b['name'].toLocaleLowerCase() ? -1 : 1);
        setSearchAlgorithms(list);
        setShowSearch(list.length > 0 && event.target.value.trim().length > 0);
        if (list.length > 0)
            setSelectedAlgorithm(list[0]['id']);
    }

    function keyPress(event) {
        if (event.key === 'Enter' && searchAlgorithms.length > 0) {
            setShowSearch(false);
            history.push('/algorithms/' + selectedAlgorithm);
        }
    }

    function keyUp(event) {
        let index = searchAlgorithms.findIndex(algorithm => algorithm.id === selectedAlgorithm);
        if (index >= 0) {
            if (event.key === 'ArrowUp')
                index = Math.max(index - 1, 0);
            else if (event.key === 'ArrowDown') {
                index = Math.min(index + 1, searchAlgorithms.length - 1);
            }
            setSelectedAlgorithm(searchAlgorithms[index].id);
        }
    }

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <Link to={'/algorithms'}>
                        <img edge="start" className={classes.menuButton} color="inherit" src={logo} alt="Logo"/>
                    </Link>
                    <div className={classes.title}>
                        <Paper component="div" className={classes.rootSearch} style={{background: colors.black}}>
                            <IconButton type="submit" className={classes.iconButton} aria-label="search"
                                        style={{color: colors.silver}}>
                                <SearchIcon/>
                            </IconButton>
                            <InputBase
                                className={classes.input}
                                style={{color: colors.white}}
                                placeholder="Buscar"
                                type="text"
                                onChange={onSearch}
                                onFocus={() => setShowSearch(searchAlgorithms.length > 0)}
                                onBlur={() => setTimeout(() => setShowSearch(false), 50)}
                                onKeyPress={keyPress}
                                onKeyUp={keyUp}
                            />
                            <div style={{
                                backgroundColor: colors.black,
                                borderWidth: 1,
                                height: 310,
                                width: 300,
                                top: 50,
                                position: "absolute",
                                overflow: 'hidden',
                                display: showSearch ? '' : 'none'
                            }}>
                                {
                                    searchAlgorithms.slice(0, 8).map(algorithm => {
                                        return (
                                            <Link to={'/algorithms/' + algorithm.id} key={algorithm.id}
                                                  style={{textDecoration: 'none'}}>
                                                <Typography style={{
                                                    margin: 10,
                                                    color: selectedAlgorithm === algorithm.id ? colors.black : colors.white,
                                                    backgroundColor: selectedAlgorithm === algorithm.id ? colors.white : colors.black,
                                                }}>
                                                    {algorithm['name']}
                                                </Typography>
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                        </Paper>
                    </div>
                    <a href='https://github.com/egaeuscode' target='_blank' rel="noopener noreferrer">
                        <img src={require('../../assets/github_logo.png')} className={classes.githubImage}
                             alt='github'></img>
                    </a>
                    <a href='https://codeforces.com/profile/egaeus.code' target='_blank' rel="noopener noreferrer">
                        <img src={require('../../assets/codeforces_logo.png')} className={classes.codefocesImage}
                             alt='codeforces'></img>
                    </a>
                    <a href='https://www.youtube.com/channel/UC5Cnp7HMS12SJmvIYHUnwdQ' target='_blank'
                       rel="noopener noreferrer">
                        <img src={require('../../assets/yt_logo_rgb_dark.png')} className={classes.youtubeImage}
                             alt='youtube'></img>
                    </a>
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
                    <img src={require('../../assets/logo.svg')} style={{height: 15}} alt={'logo'}/>
                    <Typography style={{color: colors.silver_footer, fontSize: 11, marginLeft: -2, marginRight: 2}}>React
                        + Firebase</Typography>
                    <img src={require('../../assets/lockup.png')} alt={'firebase'} style={{height: 15}}/>
                </div>
            </div>
        </div>
    );
}
