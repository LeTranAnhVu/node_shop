import React,  {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container} from "reactstrap";

import "./App.css";


// components
import NavbarApp from "./NavbarApp";
import ShoppingList from "./ShoppingList";

class App extends Component {
    render() {
        return (
            <div>
                <NavbarApp/>
                <Container className="">
                    <ShoppingList/>
                </Container>
            </div>
        )
    }
}

export default App;