import { makeStyles } from '@material-ui/core/styles';

const mainStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        height: 50,
    },
    title: {
        flexGrow: 1,
    },
}));

export default mainStyles;