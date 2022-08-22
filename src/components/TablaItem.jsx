import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

//params

function TablaItem({elemento}) {


    const filterDate = `${elemento.lastreporttime}`
    const probabilidadPrecipitacion = `${elemento.probabilityofprecip}`
    const humedadRelativa = `${elemento.relativehumidity}`
  
    //funcion de filtrado de fechas
    const FiltrarFechas = (fecha) => {
  
      const year = filterDate.slice(0, 4); 
  
      const month = filterDate.slice(4, 6);
  
      const day = filterDate.slice(6, 8);
  
      const dataFilter = `${year}-${month}-${day}`;
  
      return dataFilter;
  
    };
  
    //funcion de filtrado de lluvias
    const FilterLLuvia = (probabilidadPrecipitacion, humedadRelativa) => {
  
      if(probabilidadPrecipitacion > 60 || humedadRelativa > 50){
          return 'llueve'
      }else{
          return 'no llueve'
      }
  
    }

    return ( 
      <tr>
        <Link to={`/consult/${elemento._id}`}>Consultar</Link> 
        <td>{elemento._id}</td>
        <td>{elemento.cityid}</td>
        <td>{elemento.name}</td>
        <td>{elemento.state}</td>
        <td>{elemento.probabilityofprecip}</td>
        <td>{elemento.relativehumidity}</td>
        <td>{FiltrarFechas(filterDate)}</td>
        <td>{FilterLLuvia(probabilidadPrecipitacion,humedadRelativa)}</td> 
      </tr>
     );
}

export default TablaItem;