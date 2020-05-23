import {makeStyles} from '@material-ui/core/styles';
import background from '../../assets/background.png';
import colors from "../../resources/colors";

const newsStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
        backgroundImage: "url(" + background + ")",
        backgroundSize: 'cover',
        opacity: 1,
        display: 'flex',
    },
    title: {
        width: '100%',
        color: colors.white,
        fontSize: 100,
        textAlign: "right",
        marginBottom: 20
    },
    container: {
        flex: 1
    },
    newsTitle: {
        width: '100%',
        color: colors.white,
        fontSize: 30,
        fontWeight: "bold"
    },
    front: {
        height: '100%',
        display: 'flex',
        padding: 20,
        flex: 1,
        backgroundColor: colors.black + 'aa',
        flexDirection: 'column',
    },
    news: {
        fontSize: 20,
        color: colors.white,
        marginBottom: 10,
    }
}));

export default newsStyles;
