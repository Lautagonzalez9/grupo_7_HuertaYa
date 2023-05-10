import React from "react";
import Table from "../../components/Table/Table";
import { useState, useEffect, useRef } from "react";

const URL_BASE = 'http://localhost:3500/api/users'

function Usuarios(){

    const [columns,setColumns] = useState({ iduser: "ID",first_name: "Nombre", last_name: "Apellido", email: "Correo Electronico" })
    const [arrayUser,setArrayUser] = useState([])

  useEffect(() =>{
        fetch(URL_BASE)
         .then(response => response.json())
            .then(users => {
                setArrayUser(users.data)
                
            })
            .catch(error => console.log(error));
 },[])


            return (
                <Table data={arrayUser} columns={columns} />
            )
    }



export default Usuarios;