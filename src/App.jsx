import "./App.css";
import "./styles/App.scss";
import Tabla from "./components/Tabla";
import TablaItem from "./components/TablaItem";
import Consulta from "./components/Consulta";

//router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

//redux
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./features/Lista/Lista";

function App() {
  const { api: data } = useSelector((state) => state.lista);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>list</h1>

      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Tabla>
                {data.map((elemento) => {
                  return <TablaItem elemento={elemento} key={elemento._id} />;
                })}
              </Tabla>
            }
          />
          <Route path="consult/:id" element={<Consulta data={data} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
