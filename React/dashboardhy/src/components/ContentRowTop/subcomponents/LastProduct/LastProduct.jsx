import React from "react";
import SuperCard from "../../../SuperCard/SuperCard";
import {useState,useEffect} from "react";


function LastProduct() {

    const [ultimoProducto, setUltimoProducto] = useState([]);

    const URL_BASE = "/api/"
    async function getData(ruta){

        const response = await fetch(URL_BASE + ruta);
        const data = await response.json();
    
        return data   
    }
    
    const productos = getData("products").then(data => {return data.data.products})
    const id = productos.then(productos => productos[productos.length - 1].id)

    useEffect(()=> {

        id.then(id =>{
        getData("products/" + id)
        .then(data => {
            setUltimoProducto(data.data)
        })
    })
      },[])



    return (
        <SuperCard title="Último producto creado">
            <div className="text-center">
                <h3>{ultimoProducto.name}</h3>
                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: "40rem" }} src={ultimoProducto.images?.url} alt={"Imagen id:" + ultimoProducto.images?.idimage} />
            <p>{ultimoProducto.description}</p>
            </div>
            
            <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a>
            
        </SuperCard>


    )
}

export default LastProduct;