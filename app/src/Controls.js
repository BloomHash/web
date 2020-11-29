import React, {Component} from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";


const useStyles = theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(2, 0, 0),
        },
    },
});

class Controls extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dataSetType: 'Twitter'
        };
    }

    changeDataset() {
        if (this.props.isDefaultDataSet) {
            this.setState({dataSetType: 'Default'});
        } else {
            this.setState({dataSetType: 'Twitter'});
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Grid container justify = "center">
                    <Button variant="contained" color="primary" onClick={() => { this.props.toggleDataset(); this.changeDataset()}}>Change to {this.state.dataSetType} Dataset</Button>
                </Grid>
            </div>
        );
    }
}
export default withStyles(useStyles)(Controls)