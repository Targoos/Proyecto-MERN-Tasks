import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    // STATE PARA INICIAR SESION
    const [ usuario, guardarUsuario ] = useState({
        email:'',
        password:''
    });

    const { email, password } = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    // CUANDO EL USUARIO QUIERE INICIAR SESION
    const onSubmit = e => {
        e.preventDefault();

        // VALIDAR QUE LOS CAMPOS ESTEN LLENOS 
        

    }

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesion</h1>

                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Tu Email"
                            value={email}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu Password"
                            value={password}
                            onChange={onChange}
                        />
                    </div>

                    <input type="submit" className="btn btn-primario btn-block" value="Iniciar Sesion"/>
                </form>
                <Link to={'/nueva-cuenta'} className="enlace-cuenta">
                    Obtener Cuenta
                </Link>
            </div>
        </div>
    );
}
 
export default Login;