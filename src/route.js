import React, {Component, Fragment} from 'react';
import Header from "./header";
import {Switch, Route, withRouter} from "react-router-dom";
import Home from "./home";
import Video from "./video";

class RouteComponent extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/video" component={Video}/>
                </Switch>
            </Fragment>
        );
    }
}

export default withRouter(RouteComponent);
