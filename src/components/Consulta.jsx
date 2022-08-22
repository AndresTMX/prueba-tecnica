import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function Consulta({ data }) {

  const params = useParams();
  const idconsulta = params.id;
  console.log(idconsulta)
  return <>

  {
    console.log(data._id)
  }
  
  </>;
}

export default Consulta;
