import React from "react";
import {useState,useEffect} from "react";
import Card from "./subcomponents/Card/Card";
import LastProduct from "./subcomponents/LastProduct/LastProduct";
import GenresInDB from "./subcomponents/GenresInDB/GenresInDB";

function ContentRowTop(){

    const [productos, setProductos] = useState([]);
    const [usuarios, setUsuarios] = useState([]);
    const [categorias, setCategorias] = useState(["Cargando..."]);

    const URL_BASE = "/api/"
    async function getData(ruta){

        const response = await fetch(URL_BASE + ruta);
        const data = await response.json();
    
        return data   
    }

    useEffect(()=> {
      getData("products")
        .then(data => {
            setProductos(data.data)
         })
        .catch(e => console.log(e))
    },[])
    useEffect(()=> {
      getData("users")
        .then(data => {
            setUsuarios(data.data)
         })
        .catch(e => console.log(e))
    },[])
    useEffect(()=> {
      getData("products")
        .then(data => {
            setCategorias(data.data.categories)
         })
        .catch(e => console.log(e))
    },[])

    let arrayCards = [
        {
            titulo: "Total de productos",
            cifra: productos.count ? productos.count : "Cargando...",
            color: "primary",
            icono:"fa-pepper-hot"
        },
        {
            titulo: "Total de usuarios",
            cifra: usuarios.length ? usuarios.length : "Cargando...",
            color: "success",
            icono:"fa-user"
        },
        {
            titulo: "Total de categorias",
            cifra: categorias ? categorias : "Cargando...",
            color: "warning",
            icono:"fa-layer-group"
        }
    ]

    return(
        <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
        </div>
    
        {/* <!-- Content Row Movies--> */}
        <div className="row">

            {
                arrayCards.map((card, i) => <Card key={ card.titulo + i } titulo={card.titulo} color={card.color} cifra={card.cifra} icono={card.icono} />)
            }
                        
        </div>
        {/* <!-- End movies in Data Base --> */}
        

        {/* <!-- Content Row Last Movie in Data Base --> */}
        <div className="row">
            {/* <!-- Last Movie in DB --> */}
            <LastProduct />
            {/* <!-- End content row last movie in Data Base --> */}

            {/* <!-- Genres in DB --> */}
            <GenresInDB />
        </div>
    </div>
    )
}

export default ContentRowTop;