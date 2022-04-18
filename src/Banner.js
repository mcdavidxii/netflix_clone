import axios from './axios';
import React, { useEffect, useState } from 'react'
import requests from './Requests'
import'./Banner.css'

function Banner() {

    //   ---------------------------fetching the movies---------------------------------

    const [movie,setMovie] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNeflixOrginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random()* request.data.results.length-1)
                ]
            );
            return request;
        }
        fetchData();
    },[]);

    console.log(movie);

    //------------------------------------------------------------------------------------


    // ---------------- reduce the amount of characters in description if above 150-----------

    function truncate(string, numberOfCharacters ){
        return string?.length > numberOfCharacters ? string.substr(0,numberOfCharacters-1) + "..." :string;
    }

    //---------------------------------------------------------------------------------------

  return (
    <header className='banner' 
    style={{backgroundSize: "cover", 
    backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
    backgroundPosition:"center center"}
    }>
        <div className='banner_contents' >
            <h1 className='banner_title' > Movie Name </h1>
            <div className='banner_buttons' >
                <button className='banner_button' >Play</button>
                <button className='banner_button' >My List</button>
            </div>
            <h1 className='banner_description' > 
            {truncate(`Description testing of the movie that was acted by James Blaker.
            Description testing of the movie Description testing of the movie 
            Description testing of the movie Description testing of the movie 
            Description testing of the movie Description testing of the movie 
            Description testing of the movie that was acted by James Blaker.
            Description testing of the movie Description testing of the movie 
            Description testing of the movie Description testing of the movie 
            Description testing of the movie Description testing of the movie `,150)}
            </h1>
        </div>
        <div className='banner--fadeBottom' />
    </header>
  )
}

export default Banner