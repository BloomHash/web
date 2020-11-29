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
            isDefaultDataSet: true
        };
    }

    render() {
        return (
            <div>
                <Header/>
                {this.renderMap()}
                <Controls toggleDataset={() => this.toggleDataset()}
                          isDefaultDataSet={this.state.isDefaultDataSet}/>
                <Footer/>
            </div>
        );
    }

    renderMap() {
        if (this.state.isDefaultDataSet) {
            return (
                <MapDefault/>
            );
        } else {
            return (
                <MapTwitter/>
            );
        }
    }

    toggleDataset(){
        //console.log("GOT CALLED");
        //console.log(this.state.isDefaultDataSet);
        const current = this.state.isDefaultDataSet;
        this.setState({isDefaultDataSet: !current});
    }
}

export default App;