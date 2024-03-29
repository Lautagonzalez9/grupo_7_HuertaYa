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

    const cargaImagen = ()=> {
        if(ultimoProducto.images){
            return <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: "40rem" }} src={ultimoProducto.images?.url} alt={"Imagen id:" + ultimoProducto.images?.idimage} />
        } else {
            return <h1>Cargando...</h1>
        }
    }

    return (
        <SuperCard title="Último producto creado">
            <div className="text-center">
                <h3>{ultimoProducto.name}</h3>
                {cargaImagen()}
            <p>{ultimoProducto.description}</p>
            <a className="btn btn-danger" target="_blank" rel="nofollow" href={"http://localhost:3500/producto/" + ultimoProducto?.idProducto}>Ver detalle de producto</a>
            </div>
            
            
        </SuperCard>


    )
}

export default LastProduct;