import React, { Component } from "react";
import GenreCard from "../../../GenreCard/GenreCard";
import {useState,useEffect} from "react";

function GenresInDB () {
 const [category , setCategory] = useState([])
 const URL_BASE = 'http://localhost:3500/api/category/'
 useEffect(() =>{
    console.log('se monto');
        fetch(URL_BASE)
         .then(response => response.json())
            .then(data => {
                setCategory(data.categories)
                console.log(data.categories);
            }).catch(error => console.log(error));
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
                        <h5 className="m-0 font-weight-bold text-gray-800">Categories in Data Base</h5>
                    </div>
                    <div className='card-body'>
                        <div className="row">
             {
                category.map((cat, i) => (
                    <GenreCard key={cat.name + i} name={cat.name} />
                ))
            }
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }


export default GenresInDB;