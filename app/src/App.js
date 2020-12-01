import React, {Component} from 'react';
import MapDefault from './MapDefault';
import Controls from "./Controls";
import Header from './Margins/Header';
import Footer from "./Margins/Footer";
import MapTwitter from "./MapTwitter";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dataSetType: 'Actual'
        };
    }

    render() {
        return (
            <div>
                <Header/>
                {this.renderMap()}
                <Controls toggleDataset={(value) => this.toggleDataset(value)}/>
                <Footer/>
            </div>
        );
    }

    renderMap() {
        if (this.state.dataSetType === 'Actual') {
            return (
                <MapDefault/>
            );
        }
        if (this.state.dataSetType === 'Twitter') {
            return (
                <MapTwitter/>
            );
        }
    }

    toggleDataset(value){
        this.setState({dataSetType: value});
        console.log(this.state.dataSetType);
    }
}

export default App;