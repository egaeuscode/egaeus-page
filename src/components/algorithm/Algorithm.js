import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import algorithmStyles from "./AlgorithmStyle";
import {useTheme} from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import {useParams} from 'react-router-dom';
import {getAlgorithmsService, getAlgorithmCode} from './AlgorithmService';
import Typography from '@material-ui/core/Typography';
import MathJax from 'react-mathjax2'
import ReactMarkdown from "react-markdown";
import CodeBlock from "../../config/CodeBlock";

export default function Algorithm() {
    const classes = algorithmStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const [id, setId] = React.useState(undefined);
    const [algorithm, setAlgorithm] = React.useState(null);
    const [algorithmCode , setAlgorithmCode] = React.useState(null);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        setId(idAlgorithm);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
        setId(idAlgorithm);
    };

    let {idAlgorithm} = useParams();

    if (idAlgorithm !== id) {

        setId(idAlgorithm);
        loadAlgorithm()
        getAlgorithmsService(idAlgorithm).then(snapshot => {
            const alg = snapshot.data();
            alg['id'] = snapshot.id;
            setAlgorithm(alg);
        });
    }

    function loadAlgorithm() {
        getAlgorithmCode(idAlgorithm).then(algorithmText => {
            setAlgorithmCode(algorithmText);
        });
    }

    return (
        <div className={classes.root}>
            <div className={classes.content}>
                <Paper className={classes.paper}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth"
                    >
                        <Tab label="Descripción"/>
                        <Tab label="Código" />
                        <Tab label="Ejercicios"/>
                        <Tab label="Vídeo"/>
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
                            <ReactMarkdown
                                source={algorithmCode}
                                skipHtml={false}
                                escapeHtml={false}
                                renderers={{ code: CodeBlock }}
                            />
                        </div>
                        <div>
                            Item Three
                        </div>
                        <div>
                            Item Four
                        </div>
                    </SwipeableViews>
                </Paper>
            </div>
            <div className={classes.information}>
                <div className={classes.titleInfo}>
                    <Typography className={classes.title}>
                        {algorithm?.name}
                    </Typography>
                </div>
                <div className={classes.allInfo}>
                    <div className={classes.rowInfo}>
                        <Typography className={classes.subtitleInfo}>Complejidad: </Typography>
                        <MathJax.Context>
                            <MathJax.Node>{ algorithm?.complexity }</MathJax.Node>
                        </MathJax.Context>
                    </div>
                    <div className={classes.rowInfo}>
                        <Typography className={classes.subtitleInfo}>Autor: </Typography>
                        <Typography>
                            {algorithm && algorithm.autor ? algorithm.autor : 'Desconocido'}
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    );
}
