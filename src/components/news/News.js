import React from 'react';
import newsStyles from './NewsStyle';
import Typography from '@material-ui/core/Typography';
import {getNews} from './NewsService';
import {Link} from "@material-ui/core";

export default function News() {
    const classes = newsStyles();
    const [callService, setCallService] = React.useState(false);
    const [news, setNews] = React.useState([]);

    if (!callService) {
        setCallService(true);
        getNews().then(snapshot => {
            const items = [];
            snapshot.forEach(item => {
                let obj = item.data()
                obj['id'] = item.id;
                items.push(obj);
            });
            setNews(items);
        });
    }

    return (
        <div className={classes.root}>
            <div className={classes.front}>
                <div className={classes.container}>
                    <Typography className={classes.newsTitle}>
                        Novedades
                    </Typography>
                    <ul>
                        {getNewViews()}
                    </ul>
                </div>
                <Typography className={classes.title}>
                    egaeus
                </Typography>
            </div>
            <div style={{width: 300, height: '100%', backgroundColor: '#fff'}}></div>
        </div>
    );

    function getNewViews() {
        console.log(news, news.length);
        return news.map(item => {
            return (
                <li className={classes.news} key={item.id}>
                    {item.description}
                    <Link href={item.link} style={{display: item.link?'':'none'}} target={'__blank'}>
                        <img style={{height: 15, marginLeft: 10}} alt={"link"} src={require('../../assets/flecha.png')}></img>
                    </Link>
                </li>
            );
        })
    }
}
