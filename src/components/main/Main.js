import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import mainStyles from './MainStyle';
import logo from '../../assets/3logo.png';
import Menu from './menu/Menu'
import Algorithm from '../algorithm/Algorithm';
import {Route, Redirect} from 'react-router-dom'
import {Link} from "@material-ui/core";
import News from "../news/News";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import {searchAlgorithm} from "../algorithm/AlgorithmService";


export default function Main() {
    const classes = mainStyles();
    const [options, setOptions] = React.useState([]);
    const [searching, setSearching] = React.useState(false);
    const [redirect, setRedirect] = React.useState(false);
    const [algorithmSelected, setAlgorithmSelected] = React.useState(null);

    function keyPress(e) {
        if (e.key === 'Enter') {
            setSearching(true);
            let searchText = e.target.value;
            searchAlgorithm(searchText).then(json => {
                setOptions(json);
                setSearching(false);
            });
        }
    }

    if( redirect && algorithmSelected != null) {
        setRedirect(false);
        console.log("-----  ", algorithmSelected.id);
        return (<Redirect to={'/algorithms/' + algorithmSelected.id}/>)
    } else
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <Link href={'/algorithms'}>
                        <img edge="start" className={classes.menuButton} color="inherit" src={logo} alt="Logo"/>
                    </Link>
                    <Typography variant="h6" className={classes.title}>
                        egaeus
                    </Typography>
                    <Autocomplete
                        id="search"
                        autoHighlight
                        style={{width: 300}}
                        getOptionSelected={(option, value) =>  option.name === value.name}
                        onChange={(event, value, reason)=>{
                            if( reason === "select-option") {

                                setAlgorithmSelected(value);
                                setRedirect(true);
                            }

                        }}
                        getOptionLabel={(option) => option.name}
                        options={options}
                        loading={searching}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Buscar"
                                onKeyPress={keyPress}
                                InputProps={{
                                    ...params.InputProps,
                                    endAdornment: (
                                        <React.Fragment>
                                            {searching ? <CircularProgress color="inherit" size={20}/> : null}
                                            {params.InputProps.endAdornment}
                                        </React.Fragment>
                                    ),
                                }}
                            />
                        )}
                    />
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
            </div>
        </div>
    );
}
