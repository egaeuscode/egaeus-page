import { makeStyles } from '@material-ui/core/styles';
import colors from "../../../resources/colors";

const menuStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxHeight: '100%',
        overflowY: 'auto',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flex: 1,
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    menuExpansionPanelDetails: {
        flexDirection: 'column',
    },
    itemMenu: {
        fontSize: theme.typography.pxToRem(15),
        margin: 10,
        cursor: "pointer",
    },
    link: {
        color: colors.black,
        textDecoration: 'none'
    }
}));

export default menuStyles;
