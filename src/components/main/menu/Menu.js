import React from 'react';
import menuStyles from './MenuStyle';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import data from './MenuService';
import {Link} from "react-router-dom";

export default function Menu() {
    const classes = menuStyles();

    const [expanded, setExpanded] = React.useState('');

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={classes.root}>
            {getCategories()}
        </div>
    );

    function getCategories() {
        return data.categories.map(category => {
            return (
                <ExpansionPanel expanded={expanded === 'panel' + category.id}
                                onChange={handleChange('panel' + +category.id)} key={category.id}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography className={classes.heading}>{category.name}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.menuExpansionPanelDetails}>
                        {getAlgorithms(category)}
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            )
        })
    }

    function getAlgorithms(category) {
        return data.algorithms.filter(algorithm => algorithm.idCategory === category.id).map(algorithm => {
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
}