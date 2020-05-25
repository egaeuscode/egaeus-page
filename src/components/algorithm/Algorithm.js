import React, {useRef} from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import algorithmStyles from "./AlgorithmStyle";
import {useParams} from 'react-router-dom';
import {getAlgorithmsService, getAlgorithmCode, getDescription} from './AlgorithmService';
import Typography from '@material-ui/core/Typography';
import MathJax from 'react-mathjax2'
import ReactMarkdown from "react-markdown";
import CodeBlock from "../../config/CodeBlock";
import {Link} from "@material-ui/core";

export default function Algorithm() {
    const classes = algorithmStyles();
    const [value, setValue] = React.useState(2);
    const [id, setId] = React.useState(undefined);
    const [algorithm, setAlgorithm] = React.useState(null);
    const [algorithmCode, setAlgorithmCode] = React.useState(null);
    const [description, setDescription] = React.useState(null);
    const ref = useRef(null);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        setId(idAlgorithm);
    };

    let {idAlgorithm} = useParams();

    if (idAlgorithm !== id) {
        setId(idAlgorithm);
        loadAlgorithm();
        loadDescription();
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

    function copy() {
        ref.current.value = algorithmCode.substr(algorithmCode.indexOf('\n'), algorithmCode.lastIndexOf('`') - 2 - algorithmCode.indexOf('\n'));
        ref.current.select();
        document.execCommand('copy');
    }

    function loadDescription() {
        getDescription(idAlgorithm).then(description => {
            setDescription(description);
        });
    }

    function a11yProps(index) {
        return {
            id: `wrapped-tab-${index}`,
            'aria-controls': `wrapped-tabpanel-${index}`,
        };
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
                        <Tab value={1} label="Descripción" disabled={description ? false : true} {...a11yProps(1)} />
                        <Tab value={2} label="Código" disabled={algorithmCode ? false : true} {...a11yProps(2)}/>
                        <Tab value={3} label="Ejercicios"
                             disabled={algorithm && algorithm.exercises ? false : true} {...a11yProps(3)} />
                        <Tab value={4} label="Vídeo"
                             disabled={algorithm && algorithm.video ? false : true} {...a11yProps(4)}/>
                    </Tabs>
                    <div style={{height: "calc(100% - 108px)", margin: 20}}>
                        <div role="tabpanel"
                             hidden={value !== 1}
                             id={'wrapped-tabpanel-1'}
                             aria-labelledby={'wrapped-tab-1'}
                             className={classes.tabContainer}>
                            <ReactMarkdown
                                source={description}
                                skipHtml={false}
                                escapeHtml={false}
                            />
                        </div>
                        <textarea style={{position: 'absolute', top: -10000}} ref={ref}></textarea>
                        <div role="tabpanel"
                             hidden={value !== 2}
                             id={'wrapped-tabpanel-2'}
                             aria-labelledby={'wrapped-tab-2'}
                             className={classes.tabContainer}>
                            <ReactMarkdown
                                source={algorithmCode}
                                skipHtml={false}
                                escapeHtml={false}
                                renderers={{code: CodeBlock}}
                            />
                        </div>
                        <div role="tabpanel"
                             hidden={value !== 3}
                             id={'wrapped-tabpanel-3'}
                             aria-labelledby={'wrapped-tab-3'}
                             className={classes.tabContainer}>
                            {getExercises()}
                        </div>
                        <div className={classes.tabContainer}
                             role="tabpanel"
                             hidden={value !== 4}
                             id={'wrapped-tabpanel-4'}
                             aria-labelledby={'wrapped-tab-4'}
                             style={{textAlign: 'center'}}
                        >
                            {getVideos()}
                        </div>

                    </div>
                </Paper>
            </div>
            <div className={classes.information}>
                <div className={classes.titleInfo}>
                    <img alt='copy' onClick={copy} src={require('../../assets/content-copy.png')}
                         style={{width: 30, top: 80, position: "absolute", cursor: 'pointer'}}/>
                    <Typography className={classes.title}>
                        {algorithm?.name}
                    </Typography>
                </div>
                <div className={classes.allInfo}>
                    <div className={classes.rowInfo}>
                        <Typography className={classes.subtitleInfo}>Complejidad: </Typography>
                        {getComplexity()}
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

    function getExercises() {
        if (algorithm && algorithm.exercises) {
            return algorithm.exercises.map(exercise => {
                return (
                    <li style={{margin: 10}}><Link href={exercise}>{exercise}</Link></li>
                )
            });
        }
        return null;
    }

    function getVideos() {
        if (algorithm && algorithm.video) {
            return algorithm.video.map(video => {
                return (
                    <iframe width="560" height="315" src={video} frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen title={video}></iframe>
                );
            });
        }
        return null;
    }

    function getComplexity() {
        if (algorithm && algorithm.complexity) {
            return algorithm.complexity.split(",").map(text => {
                return (
                    <MathJax.Context>
                        <MathJax.Node>{text}</MathJax.Node>
                    </MathJax.Context>
                )
            });
        } else return (<Typography>{algorithm && algorithm.complexity ? '' : 'No disponible'}</Typography>)
    }
}
