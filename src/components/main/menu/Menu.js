import React from 'react';
import menuStyles from './MenuStyle';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { getCategoriesService, getAlgorithmsService } from './MenuService';
import {Link} from "react-router-dom";

export default function Menu() {
    const classes = menuStyles();

    const [expanded, setExpanded] = React.useState('');
    const [categories, setCategories] = React.useState([]);
    const [algorithms, setAlgorithms] = React.useState({});
    const [calledCategories, setCalledCategories] = React.useState(false);


    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    if (!calledCategories) {
        setCalledCategories(true);
        callCategories();
        callAlgorithms();
    }

    return (
        <div className={classes.root}>
            {getCategories()}
        </div>
    );

    function getCategories() {
        return categories.map(category => {
            return (
                <ExpansionPanel expanded={expanded === 'panel' + category.id}
                                onChange={handleChange('panel' + category.id)} key={category.id}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography className={classes.heading}>{category.name}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.menuExpansionPanelDetails} children={getAlgorithms(category.id)}>

                    </ExpansionPanelDetails>
                </ExpansionPanel>
            )
        })
    }

    function getAlgorithms(idCategory){
        if( idCategory in algorithms) {
            return algorithms[idCategory].map(algorithm => {
                    return (
                        <Link to={'/algorithms/' + algorithm.id} key={algorithm.id}>
                            <Typography className={classes.itemMenu}>
                                {algorithm.name}
                            </Typography>
                        </Link>
                    )
                }
            )
        }
        return null;
    }

    function callCategories() {
        getCategoriesService().then(snapshot => {
            let arr = [];
            snapshot.forEach( data => {
                let obj = data.data();
                obj["id"] = data.id;
                arr.push(obj);
            });
            setCategories(arr);
        })
    }

    function callAlgorithms() {
        getAlgorithmsService().then( snapshot => {
            let map = {}
            snapshot.forEach( obj => {
                const algorithm = obj.data();
                algorithm["id"] = obj.id;
                if( !(algorithm.id_class in map) ){
                    map[algorithm.id_class] = [];
                }
                map[algorithm.id_class].push(algorithm);
            })
            setAlgorithms(map);
        });
    }
}