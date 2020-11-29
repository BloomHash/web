import React, {Component} from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

const useStyles = ({
    appBar: {
        position: 'relative',
    },
});

class Header extends Component {
    render() {
        const { classes } = this.props;
        return (
            <AppBar position="absolute" color="default" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        BloomHash
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }
}
export default withStyles(useStyles)(Header)