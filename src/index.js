import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import RouteComponent from "./route";

const App = () => {
    return (
        <BrowserRouter>
            <RouteComponent/>
        </BrowserRouter>
    )
};

ReactDOM.render(<App/>, document.getElementById('root'));
