import React, { Fragment } from 'react';
import Tarea from './Tarea';

const ListadoTareas = () => {

    const TareasProyecto = [
        { nombre: 'Elegir Plataforma', estado: true },
        { nombre: 'Elegir Colores', estado: false },
        { nombre: 'Elegir Plataforma de pago', estado: false },
        { nombre: 'Elegir Hosting', estado: true }
    ];

    return (
        <Fragment>
            <h2>Proyecto: Tienda Virtual</h2>

            <ul className="listado-tareas">
                {TareasProyecto.length === 0
                    ? (<li className="tarea"><p>No hay Tareas</p></li>)
                    : TareasProyecto.map(tarea => (
                        <Tarea
                            tarea={tarea}
                        />
                    ))
                }
            </ul>

            <button 
                type="button" 
                className="btn btn-eliminar sombra"
            >Eliminar Proyecto &times;</button>
        </Fragment>
    );
}
 
export default ListadoTareas;