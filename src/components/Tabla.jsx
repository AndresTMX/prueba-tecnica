import React from 'react';
import '../styles/App.scss';

function Tabla({children}) {

    return ( 
      <div className='container-tabla'>
        <table className="table">
        <tr>
          <th>i + </th>
          <th>_id</th>
          <th>Ciudad_id</th>
          <th>Nombre</th>
          <th>Estado</th>
          <th>Prob precipitacion</th>
          <th>Humedad relativa</th>
          <th>Ultimo informe</th>
          <th>Lluvia</th>
        </tr>
  
        {children}
        
      </table>
      </div>
     );
}

export default Tabla;