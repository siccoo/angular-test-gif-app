import React, { Component } from "react";
import { Navbar } from "react-bootstrap";

class Header extends Component {
    render() {
        return (
            <>
                <Navbar bg="black" variant="black" className="nav-bar">
                    <Navbar.Brand href="/" className="navbar-text">
                        <img
                            alt=""
                            src="/giphy_mark.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                        GIPHYSearch
                    </Navbar.Brand>
                </Navbar>
            </>
        );
    }
};

export default Header;
