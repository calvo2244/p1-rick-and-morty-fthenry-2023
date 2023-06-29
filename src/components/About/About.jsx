import React from "react";
import styled from "./About.module.css"

class About extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        // console.log(this.props.c);
        return (
            <div className={styled.containerAbout}>
                <h1>Este es el componente About</h1>
                <br />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut ipsam labore sequi 
                    totam vitae quidem, quos suscipit cupiditate distinctio magnam id perferendis tempore 
                    modi nemo mollitia culpa laboriosam hic reprehenderit!</p>
                    
            </div>
        )
    }
}
export default About;