import React from "react";
import SuperCard from "../../components/SuperCard/SuperCard";
import GenreCard from "../../components/GenreCard/GenreCard";
import { useState, useEffect, useRef } from "react";

function Genres(){
  const URL_BASE_API = 'http://localhost:3500/api/products'

    render() {
        return (
            <SuperCard title="Genres in Data Base" >
                {
                    Array.isArray(this.state.genresList) && this.state.genresList.map((genre, i) => <GenreCard key={genre.name + i} name={genre.name} />)
                }
            </SuperCard>
        )
    }

}

export default Genres;