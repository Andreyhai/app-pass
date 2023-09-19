import {Component} from "react";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./AppRouter";

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        );
    }
}