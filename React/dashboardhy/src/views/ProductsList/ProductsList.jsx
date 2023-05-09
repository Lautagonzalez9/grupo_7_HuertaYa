import React from "react";
import Table from "../../components/Table/Table";
import { useState, useEffect, useRef } from "react";

const URL_BASE = 'http://localhost:3500/api/products'

function Productos(){

    const [columns,setColumns] = useState({ id: "ID", name: "Nombre", description: "Descripción", detail: "Detalle" })
    const [arrayProds,setArrayProds] = useState([])

  useEffect(() =>{
        fetch(URL_BASE)
         .then(response => response.json())
            .then(data => {
                setArrayProds(data.data.products)
            })
            .catch(error => console.log(error));
 },[])


            return (
                <Table data={arrayProds} columns={columns} />
            )
    }



export default Productos;