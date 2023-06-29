import React from "react";
import { useState } from "react";
import styled from "./FormLogin.module.css"
// import { Link } from "react-router-dom";


const regexpEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
const regexpPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;


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

    const validate = (userData) => {
        const errors = {}
        if (!userData.username) {
            errors.username = " debe ingresar un email"
        }
        else if (!userData.password) {
            errors.password = " debe ingresar un password"
        } else if (!regexpEmail.test(userData.username)) {
            errors.username = " debe ingresar un email Valido"
        } else if (!regexpPassword.test(userData.password)) {
            errors.password = " debe ingresar un Password Valido"
        }
        return errors;
    }

    const handleChange = (event) => {
        setuserData({
            ...userData,
            [event.target.name]: event.target.value
        });

        setErrors(validate({
            ...userData,
            [event.target.name]: event.target.value
        })
        );
        // console.log(userData);
        // const property = event.target.name;
        // const value = event.target.value;
        // setuserData({ ...userData, [property]: value });
        // validation({ ...userData, [property]: value }, errors, setErrors)
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const aux = Object.keys(errors)
        // console.log("ingresaa submitHandler -aux- ", aux.length);
        // console.log("ingresaa submitHandler -event- ", event);
        if (aux.length === 0) {
            setuserData({
                username: "",
                password: "",
            })
            setErrors({
                username: "",
                password: "",
            })
            return login(userData) // llama la funcion login de app.js que trae por props
        }
        return alert("Errorrrr")
        // login(userData);
    }



    //!RENDER
    return (
        <form onSubmit={submitHandler} >
            <div className={styled.divcontainer}>
                <h1>¡Bienvenido!</h1>
                <div className={styled.divusername}>
                    <label htmlFor="username">Username: </label>
                    <input
                        type="text"
                        name="username"
                        value={userData.username}
                        onChange={handleChange}
                        placeholder="Email ....."></input>
                    <p>{errors?.username}</p>
                </div>
                <div className={styled.divpassword}>
                    <label htmlFor="password">Password: </label>
                    <input
                        type="text"
                        name="password"
                        value={userData.password}
                        onChange={handleChange}
                        placeholder="Contraseña ....."></input>
                    <p>{errors?.password}</p>
                </div>
                {
                    Object.keys(errors).length === 0 ? (
                        <button type="submit">LOGIN </button>
                    ) : null
                }


            </div>
        </form>
    );
};
export default Form;