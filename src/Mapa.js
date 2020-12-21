import React, { useState } from "react";
//import data from "./data.json";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import "./App.css";
import { FaWhatsapp, FaMailBulk } from "react-icons/fa";
function CharacterDropDown() {
    const [items] = React.useState([
        {
            label: "2019",
            value: "2019"
        },
        { label: "2018", value: "2018" },
        { label: "2017", value: "2017" },
        { label: "2016", value: "2016" },
        { label: "2015", value: "2015" },
        { label: "2014", value: "2014" }
    ]);
    return (React.createElement("select", null, items.map(item => (React.createElement("option", { key: item.value, value: item.value }, item.label)))));
}
;
function Ranking() {
    const [items1] = React.useState([
        { "nome": "OLIMPO" },
        { "nome": "SAO PASCHOALL" },
        { "nome": "BATISTA MINEIRO" },
        { "nome": "SESI" },
        { "nome": "GABARITO" }
    ]);
    const [items2] = React.useState([
        { "nome": "OLIMPO" },
        { "nome": "SESI" },
        { "nome": "GABARITO" },
        { "nome": "SAO PASCHOALL" },
        { "nome": "BATISTA MINEIRO" }
    ]);
    return (React.createElement("ol", { style: {
            fontWeight: "bold",
            fontSize: "18px",
            marginLeft: "2.5%",
            marginTop: "10px"
        } }, items1.map(item => (React.createElement(React.Fragment, null,
        React.createElement("li", null, item.nome))))));
}
const SimpleMap = (props) => {
    const getMapOptions = (maps) => {
        return {
            disableDefaultUI: true,
            mapTypeControl: true,
            streetViewControl: true,
            styles: [
                {
                    featureType: "poi",
                    elementType: "labels",
                    stylers: [{ visibility: "on" }]
                }
            ]
        };
    };
    const [items] = useState([
        { "lat": -18.9118287, "lng": -48.2798463 },
        { "lat": -18.8978481,
            "lng": -48.2643775 },
        { "lat": -18.9091761,
            "lng": -48.2900221 },
        { "lat": -18.91861, "lng": -48.27722 },
        { "lat": -18.8937147, "lng": -48.2521332 }
    ]);
    const [center] = useState({ lat: -18.9113, lng: -48.2622 });
    const [zoom] = useState(11);
    return (React.createElement("div", null,
        React.createElement("div", null,
            React.createElement("header", { className: "head1" }),
            React.createElement("header", { className: "head2" },
                React.createElement("h2", null, "\u2003 EducaUB")),
            React.createElement("div", { className: "bg" }),
            React.createElement("div", { className: "bg bg2" }),
            React.createElement("div", { className: "bg bg3" })),
        React.createElement("div", { style: {
                marginLeft: "5%",
                marginTop: "10px"
            } },
            React.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
            React.createElement("link", { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" }),
            React.createElement("style", { dangerouslySetInnerHTML: {
                    __html: "\n.btn {\n  background-color: #ffffff;\n  color: black;\n  padding: 8px;\n  font-size: 12px;\n  border: none;\n  outline: none;\n}\n\n.dropdown {\n  position: relative;\n  display: inline-block;\n}\n\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f1f1f1;\n  min-width: 160px;\n  z-index: 1;\n}\n\n.dropdown-content a {\n  color: black;\n  padding: 8px 8px;\n  text-decoration: none;\n  display: block;\n}\n\n.dropdown-content a:hover {background-color: #ddd}\n\n.dropdown:hover .dropdown-content {\n  display: block;\n}\n\n.btn:hover, .dropdown:hover .btn {\n  background-color: #0b7dda;\n}\n"
                } }),
            React.createElement("h3", { style: { display: "inline-block", fontWeight: "bold" } }, "Ranking \u2003"),
            React.createElement(CharacterDropDown, null)),
        React.createElement(Ranking, null),
        React.createElement("br", null),
        React.createElement("div", { style: {
                height: "50vh",
                width: "50%",
                display: "flex",
                marginLeft: "45%",
                marginTop: "-150px",
                border: "5px solid #555"
            } },
            React.createElement(GoogleMapReact, { bootstrapURLKeys: { key: "AIzaSyAiJZxEHUFT6PhO5gEqwfTL5EpmRy9ZGAg" }, defaultCenter: center, defaultZoom: zoom, options: getMapOptions },
                React.createElement(Marker, { lat: -18.9118287, lng: -48.2798463, name: "My Marker", color: "red" }),
                React.createElement(Marker, { lat: -18.8978481, lng: -48.2643775, name: "My Marker", color: "red" }),
                React.createElement(Marker, { lat: -18.9091761, lng: -48.2900221, name: "My Marker", color: "red" }),
                React.createElement(Marker, { lat: -18.91861, lng: -48.27722, name: "My Marker", color: "red" }),
                React.createElement(Marker, { lat: -18.8937147, lng: -48.2521332, name: "My Marker", color: "red" }))),
        React.createElement("div", null,
            React.createElement("footer", null,
                React.createElement("div", null,
                    React.createElement("h3", null,
                        "\u2003 D\u00FAvidas? Contate-nos: \u2003",
                        " ",
                        React.createElement("span", { style: { marginLeft: "20%" } },
                            " ",
                            React.createElement(FaMailBulk, null),
                            " xxxxx.xxxxx@ufu.br \u2003 ",
                            React.createElement(FaWhatsapp, null),
                            " (34) 9xxxx-xxxx",
                            " ")))))));
};
export default SimpleMap;
/*AIzaSyAiJZxEHUFT6PhO5gEqwfTL5EpmRy9ZGAg*/