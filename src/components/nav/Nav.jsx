import React from "react";
import styled from "./Nav.module.css"
import SearchBar from "../search/SearchBar"

class Nav extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        //  {console.log(this.props);}
        return (
            <div className={styled.container}>
                <SearchBar onSearch={this.props.onSearch} />
            </div>
        );
    }
}
export default Nav;