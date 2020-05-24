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
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';

function sleep(delay = 0) {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
}

export default function Main() {
    const classes = mainStyles();
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState([]);
    const [search, setSearch] = React.useState(null);
    const loading = open && options.length === 0;

    React.useEffect(() => {
        let active = true;

        if (!loading) {
            return undefined;
        }

       /* (async () => {
            const response = await fetch('https://country.register.gov.uk/records.json?page-size=5000');
            await sleep(1e3); // For demo purposes.
            const countries = await response.json();

            if (active) {
                setOptions(Object.keys(countries).map((key) => countries[key].item[0]));
            }
        })();
*/
        return () => {
            active = false;
        };
    }, [loading]);

    React.useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);


    function filter(option, value) {
        console.log("aldkjaslkdjas" , option.name , " value ", value.name);
        return option.name === value.name
    }

    function keyPress(e){
        if(e.key === 'Enter'){
            let searchText = e.target.value;
            let url = "https://us-central1-egaeus-75c1e.cloudfunctions.net/searchAlgorithm";
            fetch(url, {
                method: 'POST', // or 'PUT'
                body: JSON.stringify({search:searchText}), // data can be `string` or {object}!
                headers:{
                    'Content-Type': 'application/json'
                }
            }).then(function(response) {
                return response.json();

            }).then( json =>{
                setOptions(json);
            });

        }
    }

    return (

        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <Link href={'/algorithms'}>
                        <img edge="start" className={classes.menuButton} color="inherit" src={logo} alt="Logo" />
                    </Link>
                    <Typography variant="h6" className={classes.title}>
                        egaeus
                    </Typography>


                    <Autocomplete
                        id="asynchronous-demo"
                        style={{ width: 300 }}
                        open={open}
                        onOpen={() => {
                            setOpen(true);
                        }}
                        onClose={() => {
                            setOpen(false);
                        }}
                        getOptionSelected={filter}
                        getOptionLabel={(option) => option.name}
                        options={options}
                        loading={loading}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Asynchronous"
                                variant="outlined"
                                onKeyPress={keyPress}
                                InputProps={{
                                    ...params.InputProps,
                                    endAdornment: (
                                        <React.Fragment>
                                            {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                            {params.InputProps.endAdornment}
                                        </React.Fragment>
                                    ),
                                }}
                            />
                        )}
                    />




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
