import { useState } from "react";
import styled from "./Form.module.css"
import validation from "./validation";



const Form = ({ login }) => {

    //!HOOKS
    const [userData, setuserData] = useState({
        username: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        username: "",
        password: "",
    });

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        setuserData({ ...userData, [property]: value });
        validation({ ...userData, [property]: value }, errors, setErrors)
    };

    const submitHandler = (event) => {
        event.preventDefault();
        login(userData);
    }

    

    //!RENDER
    return (
        <form onSubmit={submitHandler} >
            <div className={styled.divcontainer}>
                <h1>¡Bienvenido!</h1>
                <div className={styled.divusername}>
                    <label htmlFor="username">Username: </label>
                    <input type="text"
                        name="username"
                        value={userData.username}
                        onChange={handleChange} />
                    <p>{errors.username}</p>
                </div>
                <div className={styled.divpassword}>
                    <label htmlFor="password">Password: </label>
                    <input
                        type="text"
                        name="password"
                        value={userData.password}
                        onChange={handleChange} />
                    <p>{errors.password}</p>
                </div>
                <button>LOGIN</button>
            </div>
        </form>
    );
};
export default Form;