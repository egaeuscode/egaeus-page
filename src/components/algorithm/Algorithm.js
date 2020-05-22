import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import algorithmStyles from "./AlgorithmStyle";
import { useTheme } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import {useParams} from 'react-router-dom';

export default function Algorithm() {
    const classes = algorithmStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const [id, setId] = React.useState(undefined);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        setId(idAlgorithm);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
        setId(idAlgorithm);
    };

    let { idAlgorithm } = useParams();

    if(idAlgorithm !== id) {
        //const algorithm = data.algorithms
    }

    return (
        <Paper className={classes.root}>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor = "primary"
                textColor = "primary"
                variant="fullWidth"
            >
                <Tab label="Descripción" />
                <Tab label="Código" />
                <Tab label="Ejercicios" />
                <Tab label="Vídeo" />
            </Tabs>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <div>
                    {idAlgorithm}
                </div>
                <div>
                    Item Two
                </div>
                <div>
                    Item Three
                </div>
                <div>
                    Item Four
                </div>
            </SwipeableViews>
        </Paper>
    );
}