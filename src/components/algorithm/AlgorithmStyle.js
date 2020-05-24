import {makeStyles} from '@material-ui/core/styles';
import colors from "../../resources/colors";

const algorithmStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        height: '100%',
        flexDirection: 'row',
        margin: 10,
    },
    content: {
        flex: 1
    },
    information: {
        width: 250,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    paper: {
        height: '100%',
    },
    titleInfo: {
        flex: 1,
        width: '100%',
        marginTop: 10,
        marginLeft: 8,
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    title: {
        width: '100%',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        color: colors.silver,
    },
    allInfo: {display: 'flex', flexDirection: 'column', flex: 1},
    rowInfo: {flexDirection: 'column', display: 'flex', marginLeft: 20, marginRight: 20, marginBottom: 10},
    subtitleInfo: {fontWeight: 'bold', marginRight: 5},
    tabContainer:{
        height: '100%',
        overflowY: 'auto',
    }
}));

export default algorithmStyles;
