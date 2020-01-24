import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NuevaCuenta = () => {

    // STATE PARA INICIAR SESION
    const [ usuario, guardarUsuario ] = useState({
        nombre:'',
        email:'',
        password:'',
        confirmar:''
    });

    const { nombre, email, password, confirmar } = usuario;

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

        // PASSWORD MINIMO DE 6 CARACTERES

        // LOS 2 PASSWORD'S SEAN IGUALES 

        // PASARLO AL ACTION
        

    }

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Obtener una nueva cuenta</h1>

                <form
                    onSubmit={onSubmit}
                >

                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Tu Nombre"
                            value={nombre}
                            onChange={onChange}
                        />
                    </div>

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

                    <div className="campo-form">
                        <label htmlFor="confirmar">Confirmar password</label>
                        <input
                            type="password"
                            id="confirmar"
                            name="confirmar"
                            placeholder="Repite tu password"
                            value={confirmar}
                            onChange={onChange}
                        />
                    </div>

                    <input type="submit" className="btn btn-primario btn-block" value="Registrarme"/>
                </form>
                <Link to={'/nueva-cuenta'} className="enlace-cuenta">
                    Volver a Iniciar Sesion
                </Link>
            </div>
        </div>
    );
}
 
export default NuevaCuenta;