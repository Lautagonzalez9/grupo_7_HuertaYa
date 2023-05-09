import React, { Component } from "react";
import GenreCard from "../../../GenreCard/GenreCard";
import {useState,useEffect} from "react";

function GenresInDB () {
 const [category , setCategory] = useState([])
 const URL_BASE = 'http://localhost:3500/api/products/'
 useEffect(() =>{
    console.log('se monto');
        fetch(URL_BASE)
         .then(response => response.json())
            .then(data => {
                let arrayCategorias = [] //Creo array de categorias, recorro las keys del objeto y extraigo los nombres de las keys y los productos, los guardo en el array para poder recorrerlo con map
                Object.keys(data.data.countByCategory).forEach(key => {
                    let cat = {
                        name: key,
                        prods: data.data.countByCategory[key]
                    }
                arrayCategorias.push(cat)
                })
                return arrayCategorias
            })
            .then(categories => {
                setCategory(categories)
            })
            .catch(error => console.log(error));
 },[])
 useEffect(() =>{
    console.log('se actualizo');

 },[category])
 useEffect(()=>{
    return () => console.log('se desmonto');
 },[])
  

    
        return (
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Categorias de productos</h5>
                    </div>
                    <div className='card-body'>
                        <div className="row">
             {
                category.map((cat, i) => (
                    <GenreCard key={cat.name + i} name={cat.name} prods={cat.prods}/>
                ))
            }
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }


export default GenresInDB;