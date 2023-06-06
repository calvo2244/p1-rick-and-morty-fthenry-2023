

const validation = (userData, errors, setErrors) => {

    //username
    if (!userData.username) // si no tiene datos
        setErrors({ ...errors, username: "Por favor completa este campo Username" });
    else if (userData.username.length > 35)
        setErrors({ ...errors, username: "No puede superar los 35 caracteres" });
    else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userData.username))
        setErrors({ ...errors, username: "Email Invalido" });
    else {
        setErrors({ ...errors, username: "" });
    }

    //password
    if (!userData.password)
        setErrors({ ...errors, password: "Por favor completa el campo Password" })
    // else if (userData.password.length < 6)
    //     setErrors({ ...errors, password: "Debe contener mas de 6 caracteres" })
    else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(userData.password))
        setErrors({ ...errors, password: "Mínimo ocho caracteres, al menos una letra mayúscula, una letra minúscula y un número" })
    else {
        setErrors({ ...errors, password: "" })
    }
}

export default validation;