import imageLogo from "../../image/logo.png"
import React from "react";
import styled from "./Nav.module.css"
import SearchBar from "../search/SearchBar"
import { Link } from "react-router-dom";

class Nav extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        //  {console.log(this.props);}
        return (
            <div className={styled.containerNav}>
                <div className={styled.divLogo}>
                <img
                    src={imageLogo}
                    alt="logo Ricky and Morty"
                    className={styled.logo}
                />
                </div>
                <div className={styled.divMenu}>
                <Link to={"/home"}>
                    <h3>| HOME |</h3>
                </Link>
                <Link to={"/about"}>
                    <h3>| ABOUT |</h3>
                </Link>
                </div>
                <div className={styled.divSearchBar}>
                <SearchBar onSearch={this.props.onSearch} />
                </div>
            </div>
        );
    }
}
export default Nav;