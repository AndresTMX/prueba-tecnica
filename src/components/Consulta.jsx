import React, { useEffect } from "react";
import { useParams } from "react-router-dom";


function Consulta({ data }) {

  //funcion de filtrado de fechas
  const FiltrarFechas = (fecha) => {
  
    const year = filterDate.slice(0, 4); 

    const month = filterDate.slice(4, 6);

    const day = filterDate.slice(6, 8);

    const dataFilter = `${year}-${month}-${day}`;

    return dataFilter;

  };

  const params = useParams();
  const idconsulta = params.id;
  const consultas =  data.find(element => element._id === idconsulta )

  return (
  <div className="item-consult">

    <ul>
      <li>{'id : ' + consultas._id}</li>
      <li>{'cityid : ' + consultas.cityid }</li>
      <li>{'validdateutc : ' + consultas.validdateutc}</li>
      <li>{'winddirectioncardinal : ' + consultas.winddirectioncardinal }</li>
      <li>{'probabilityofprecip : ' + consultas.probabilityofprecip }</li>
      <li>{'relativehumidity : ' + consultas.relativehumidity }</li>
      <li>{'name : ' + consultas.name}</li>
      <li>{'longitude : ' + consultas.longitude }</li>
      <li>{'state : ' + consultas.state }</li>
      <li>{'lastreporttime : ' + consultas.lastreporttime }</li>
      <li>{'skydescriptionlong : ' + consultas.skydescriptionlong }</li>
      <li>{'stateabbr : ' + consultas.stateabbr }</li>
      <li>{'tempc: ' + consultas.tempc }</li>
      <li>{'latitude : ' + consultas.latitude }</li>
      <li>{'inconcode : ' + consultas.iconcode }</li>
      <li>{'windspeedkm : ' + consultas.windspeedkm }</li>
    </ul>
  
  
  </div>
  );
}

export default Consulta;
