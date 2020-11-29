import React, {Component} from "react";
import L from "leaflet";
import 'leaflet.zoomhome';
import statesData from './us-states';
import './map.css';

const style = {
    width: "100%",
    height: "600px"
};

class MapDefault extends Component {

    componentDidMount() {
        // create map
        this.map = L.map("map", {
            center: [37.8, -96],
            zoom: 4,
            zoomControl: false,
            layers: [
                L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZmxvcnZhbmRla2VyY2tob3ZlIiwiYSI6ImNqdGZyMmtrejAxYWw0M3A2OGtwdTMxNWEifQ.5U-KSDZfyKNC_Z74fEWj6g",
                    {
                        maxZoom: 18,
                        attribution:
                            'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
                        id: "streets-v9"
                    })
            ]
        });

        this.geojson = L.geoJson(statesData, {
            style: this.mapStyle,
            onEachFeature: this.onEachFeature
        }).addTo(this.map);

        this.info = L.control();

        const zoomHome = L.Control.zoomHome();
        zoomHome.addTo(this.map);

        this.info.onAdd = function(map) {
            this._div = L.DomUtil.create("div", "info");
            this.update();
            return this._div;
        };

        this.info.update = function(props) {
            this._div.innerHTML =
                "<h4>US Election Results</h4>" +
                (props
                    ? "<b>" +
                    props.name +
                    "</b><br />" +
                    props.trump_fin.toLocaleString() +
                    " Trump Vote Total"
                    +"<br/>" +
                    props.biden_fin.toLocaleString() +
                    " Biden Vote Total"
                    : "Hover over a state");
        };

        this.info.addTo(this.map);

        // add layer
        this.layer = L.layerGroup().addTo(this.map);
    }

    mapStyle = (feature) => {
        return ({
            weight: 2,
            opacity: 1,
            color: "white",
            dashArray: "3",
            fillOpacity: 0.7,
            fillColor: this.getColor(feature.properties.trump_fin - feature.properties.biden_fin)
        });
    }

    getColor = (d) =>{

        return d > 1000
            ? "#800026"
            : "#0000FF";
    }

    onEachFeature = (feature, layer) => {
        layer.on({
            mouseover: this.highlightFeature,
            mouseout: this.resetHighlight,
            click: this.zoomToFeature
        });
    }

    highlightFeature = (e) => {
        const layer = e.target;
        layer.setStyle({
            weight: 5,
            color: "#666",
            dashArray: "",
            fillOpacity: 0.7
        });

        layer.bringToFront();

        this.info.update(layer.feature.properties);
    }
    resetHighlight = (event) => {
        this.geojson.resetStyle(event.target);
        this.info.update();
    }
    zoomToFeature = (e) => {
        this.map.fitBounds(e.target.getBounds());
    }
    render() {
        return <div id="map" style={style} />;
    }
}
export default MapDefault;