import React, {Component} from 'react';
import MapDefault from './Map/MapDefault';
import Controls from "./Controls";
import Header from './Margins/Header';
import Footer from "./Margins/Footer";
import MapTwitter from "./Map/MapTwitter";
import MapPolls from "./Map/MapPolls";
import MapCompActual from "./Map/MapCompActual";
import MapCompPolls from "./Map/MapCompPolls";

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
        if (this.state.dataSetType === 'Polls') {
            return (
                <MapPolls/>
            );
        }
        if (this.state.dataSetType === 'comp-actual') {
            return (
                <MapCompActual/>
            );
        }
        if (this.state.dataSetType === 'comp-polls') {
            return (
                <MapCompPolls/>
            );
        }
    }

    toggleDataset(value){
        this.setState({dataSetType: value});
        console.log(this.state.dataSetType);
    }
}

export default App;