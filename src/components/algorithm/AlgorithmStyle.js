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
        margin: 10,
    }
}));

export default mainStyles;