import { makeStyles } from '@material-ui/core/styles';
import colors from '../../resources/colors';

const mainStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
    },
    menuButton: {
        marginRight: theme.spacing(2),
        height: 50,
        color: colors.white,
    },
    title: {
        flexGrow: 1,
    },
    menu: {
        width: '20%',
    },
    appBar: {
        backgroundColor: colors.black
    },
    footer: {
        backgroundColor: colors.black,
        height: 60,
    },
    center: {
        flex: 1,
        backgroundColor: colors.white,
        flexDirection: 'row',
        display: 'flex',
        overflow: 'hidden',
    },
    content: {
        flex: 1,
        height: '100%',
        marginLeft: 10,
    },
    youtubeImage: {
        height: 25
    },
    codefocesImage: {
        height: 45,
        marginRight: 12
    },
    githubImage: {
        height: 45
    }
}));

export default mainStyles;
