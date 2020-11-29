import React, {Component} from 'react';
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import withStyles from "@material-ui/core/styles/withStyles";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://github.com/bloomhash/">
                BloomHash
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = theme => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
});

class Footer extends Component {

    render() {
        const { classes } = this.props;
        return (
            <footer className={classes.footer}>
                <Copyright/>
            </footer>
        );
    }
}
export default withStyles(useStyles)(Footer)