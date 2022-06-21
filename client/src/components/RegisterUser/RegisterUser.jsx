import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './RegisterUser.module.css';
import { register } from '../../redux/actions';

export default function RegisterUser () {
    let usuario = "user"

    const dispatch = useDispatch()
    const [user, setUser] = useState({
        name:"",
        lastname:"",
        username:"",
        cuit_cuil: 0,
        email:"",
        cbu:0,
        password:"",
        repeatPassword: "",
        telephone: 0,
        company:"" 
    });

    const [errors, setErrors] = useState({
        name:"",
        lastname:"",
        username:"",
        cuit_cuil:"",
        email:"",
        cbu:"",
        password:"",
        repeatPassword: "",
        telephone:"",
        company:"" 
    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    };

    const handleBlur = (e) => {
        if(e.target.name === "name"){
            if(e.target.value === ""){
                setErrors({
                    ...errors,
                    [e.target.name]: "Por favor ingrese un nombre"
                })
            }else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(e.target.value)){
                setErrors({
                    ...errors,
                    [e.target.name]: "Por favor ingrese un nombre sin numeros o caracteres especiales"
                })
            } else {
                setErrors({
                    ...errors,
                    [e.target.name]: ""
                })
            }
        }
        if(e.target.name === "lastname"){
            if(e.target.value === ""){
                setErrors({
                    ...errors,
                    [e.target.name]: "Por favor ingrese un apellido"
                })
            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(e.target.value)){
                setErrors({
                    ...errors,
                    [e.target.name]: "Por favor ingrese un apellido sin numeros o caracteres especiales"
                })
            } else {
                setErrors({
                    ...errors,
                    [e.target.name]: ""
                })
            }
        }
        if(e.target.name === "username"){
            if(e.target.value === ""){
                setErrors({
                    ...errors,
                    [e.target.name]: "Por favor ingrese un nombre de usuario"
                })
            } else {
                setErrors({
                    ...errors,
                    [e.target.name]: ""
                })
            }
        }
        if(e.target.name === "cuit_cuil"){
            if(e.target.value === ""){
                setErrors({
                    ...errors,
                    [e.target.name]: "Por favor ingrese un cuit o cuil"
                })
            } else if(!/^([0-9])*$/.test(e.target.value)){
                setErrors({
                    ...errors,
                    [e.target.name]: "Por favor los caracteres ingresados deben ser numeros"
                })
            } else {
                setErrors({
                    ...errors,
                    [e.target.name]: ""
                })
            }
        }

        if(e.target.name === "email"){
            if(e.target.value === ""){
                setErrors({
                    ...errors,
                    [e.target.name]: "Por favor un email"
                })
            } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(e.target.value)){
                setErrors({
                    ...errors,
                    [e.target.name]: "Ingrese un email valido"
                })
            } else {
                setErrors({
                    ...errors,
                    [e.target.name]: ""
                })
            }
        }

        if(e.target.name === "cbu"){
            if(e.target.value === ""){
                setErrors({
                    ...errors,
                    [e.target.name]: "Por favor ingrese un cbu"
                })
            } else if(!/^([0-9])*$/.test(e.target.value)){
                setErrors({
                    ...errors,
                    [e.target.name]: "Por favor los caracteres ingresados deben ser numeros"
                })
            } else {
                setErrors({
                    ...errors,
                    [e.target.name]: ""
                })
            }
        }

        if (e.target.name === "password") {
            if (e.target.value === "") {
              setErrors({
                ...errors,
                [e.target.name]: "Por favor ingrese una contraseña",
              });
            } else if (
              !/^(?=.{10,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/.test(
                e.target.value
              )
            ) {
              setErrors({
                ...errors,
                [e.target.name]:
                  "La contraseña ingresada debe tener almenos 1 mayuscula, 1 minuscula, 1 numero, 1 caracter especial y un minimo de 10 caracteres",
              });
            } else {
              setErrors({
                ...errors,
                [e.target.name]: "",
              });
            }
          }

          if(e.target.name === "repeatPassword"){
            console.log(user.password, e.target.name, e.target.value)
            if(e.target.value === ""){
                setErrors({
                    ...errors,
                    [e.target.name]: "Tiene que repetir la contraseña ingresada"
                })
            }else if(e.target.value !== user.password){
                setErrors({
                    ...errors,
                    [e.target.name]: "La contraseña ingresada no coincide con la anterior"
                })
            }else {
                setErrors({
                    ...errors,
                    [e.target.name]: ""
                })
            }
          }

          if(e.target.name === "telephone"){
            if(e.target.value === ""){
                setErrors({
                    ...errors,
                    [e.target.name]: "Por favor ingrese un numero de telefono"
                })
            } else if (isNaN(Number(e.target.value))){
                setErrors({
                    ...errors,
                    [e.target.name]: "Solo se puede ingresar numeros"
                })
            }
          }

          if(e.target.name === "company"){
            if( typeof e.target.value !== "string"){
                setErrors({
                    ...errors,
                    [e.target.name]: "El nombre de la compania debe ser un nombre"
                })
            } else {
                setErrors({
                    ...errors,
                    [e.target.name]: ""
                })
            }
          }
    };

    const handleSubmit = (e) => {
        console.log("entro")
        e.preventDefault()
        dispatch(register(usuario,user))
        alert("Se registro el usuario correctamente")
    }; 

    return(
        <div className={style.containerRegisterUser}>
                    <h2 className={style.title}>Crear cuenta</h2>
            {usuario === "producer" ? <form onSubmit={handleSubmit} className={style.containerForm} >
                   <div> <input name="name" className={style.inputForm} onChange={handleChange} onBlur={handleBlur} type="text" placeholder="Nombre" /> {errors.name && <label>{errors.name}</label>}</div>
                   <div> <input name="lastname" className={style.inputForm} onChange={handleChange} onBlur={handleBlur} type="text" placeholder="Apellido" /> {errors.lastname && <label>{errors.lastname}</label>}</div>
                   <div> <input name="username" className={style.inputForm} onChange={handleChange} onBlur={handleBlur} type="text" placeholder="Nombre de Usuario" /> {errors.username && <label>{errors.username}</label>}</div>
                   <div> <input name="cuit_cuil" className={style.inputForm} onChange={handleChange} onBlur={handleBlur} type="text" placeholder="Cuit_Cuil" /> {errors.cuit_cuil && <label>{errors.cuit_cuil}</label>}</div>
                   <div> <input name="email" className={style.inputForm} onChange={handleChange} onBlur={handleBlur} type="text" placeholder="Correo electronico"/> {errors.email && <label>{errors.email}</label>}</div>
                   <div> <input name="cbu" className={style.inputForm} onChange={handleChange} onBlur={handleBlur} type="number" placeholder="cbu" /> {errors.cbu && <label>{errors.cbu}</label>}</div>
                   <div> <input name="password" className={style.inputForm} onChange={handleChange} onBlur={handleBlur} type="password" placeholder="Contraseña"/> {errors.password && <label>{errors.password}</label>}</div>
                   <div> <input name="repeatPassword" className={style.inputForm} onChange={handleChange} onBlur={handleBlur} type="password" placeholder="Confirmar Contraseña"/> {errors.repeatPassword && <label>{errors.repeatPassword}</label>}</div>
                   <div> <input name="telephone" className={style.inputForm} onChange={handleChange} onBlur={handleBlur} type="number" placeholder="Telefono" /> {errors.telephone && <label>{errors.telephone}</label>}</div>
                   <div> <input name="company" className={style.inputForm} onChange={handleChange} onBlur={handleBlur} type="text" placeholder="Compania" /> {errors.company && <label>{errors.company}</label>}</div>
                   <button className={style.inputForm}  type="submit">Crear</button>
            </form>:
                <form onSubmit={handleSubmit} className={style.containerForm}>
                <div> <input name="username" className={style.inputForm} onChange={handleChange} onBlur={handleBlur} type="text" placeholder="Nombre de Usuario" /> {errors.username && <label>{errors.username}</label>}</div>
                <div> <input name="email" className={style.inputForm} onChange={handleChange} onBlur={handleBlur} type="text" placeholder="Correo electronico"/> {errors.email && <label>{errors.email}</label>}</div>
                <div> <input name="password" className={style.inputForm} onChange={handleChange} onBlur={handleBlur} type="password" placeholder="Contraseña"/> {errors.password && <label>{errors.password}</label>}</div>
                <div> <input name="repeatPassword" className={style.inputForm} onChange={handleChange} onBlur={handleBlur} type="password" placeholder="Confirmar Contraseña"/> {errors.repeatPassword && <label>{errors.repeatPassword}</label>}</div>
                <button className={style.inputForm} type="submit">Crear</button>
            </form>}
            <div className={style.containerSocialRegister}>
                <button>Registrarse con Google</button>
                <button>Registrarse con Facebook</button>
            </div>
        </div>
    )
}