import React from "react";
import Mandalorian from "../../../../assets/images/mandalorian.jpg";
import SuperCard from "../../../SuperCard/SuperCard";
import {useState,useEffect} from "react";


function LastMovieInDB() {

    const [productos, setProductos] = useState([]);
    const [ultimoProducto, setUltimoProducto] = useState([]);

    const URL_BASE = "/api/"
    async function getData(ruta){

        const response = await fetch(URL_BASE + ruta);
        const data = await response.json();
    
        return data   
    }
    
    useEffect(()=> {
        getData("products")
          .then(data => {
              setProductos(data.data.products)
           })
          .catch(e => console.log(e))
      },[])

    useEffect(()=> {

        let id = productos[productos.length - 1].id

        getData("products/" + id)
        .then(data => {
            setUltimoProducto(data.data)
        })

      },[productos])

    return (
        <SuperCard title="Último usuario creado">
            <div className="text-center">
                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: "40rem" }} src={ultimoProducto.images.url} alt=" Star Wars - Mandalorian " />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa citationem ratione aperiam voluptatum non corporis ratione aperiam voluptatum quae dolorem culpa ratione aperiam voluptatum?</p>
            <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a>
        </SuperCard>


    )
}

export default LastMovieInDB;