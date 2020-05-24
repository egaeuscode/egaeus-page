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
        display: 'flex',
        height: '100%',
        alignItems: 'center'
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
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
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
    },
    rootSearch: {
        display: 'flex',
        alignItems: 'center',
        width: 300,
        height: 30,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    }
}));

export default mainStyles;
