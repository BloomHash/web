import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import {FormControl} from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";


const useStyles = theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(2, 0, 0),
        },
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
});

class Controls extends Component {

    state = {
        age: ''
    }

    render() {
        const { classes } = this.props;

        const handleChange = (event) => {
            this.props.toggleDataset(event.target.value);
            this.setState({age: event.target.value});
        }

        return (
            <div className={classes.root}>
                <Grid container justify = "center">
                    <FormControl className={classes.formControl}>
                        <InputLabel id='dataset-dropdown'>Dataset</InputLabel>
                        <Select
                            labelId='dataset-dropdown'
                            id='dropdown'
                            value={this.state.age}
                            onChange={handleChange}
                            >
                                <MenuItem value={'Actual'}>Actual</MenuItem>
                                <MenuItem value={'Polls'}>Polls (Last week of polling)</MenuItem>
                                <MenuItem value={'Twitter'}>Twitter Analysis</MenuItem>
                                <MenuItem value={'comp-actual'}>Compare Actual and Twitter</MenuItem>
                                <MenuItem value={'comp-polls'}>Compare Polls and Twitter</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </div>
        );
    }
}
export default withStyles(useStyles)(Controls)