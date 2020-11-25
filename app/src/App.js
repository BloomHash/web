import React from 'react';
import Map from './Map';
import Header from './Margins/Header';
import Footer from "./Margins/Footer";

class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Map/>
                <Footer/>
            </div>
        );
    }
}

export default App;