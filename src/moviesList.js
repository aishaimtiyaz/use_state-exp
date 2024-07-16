import React from "react";
import moviesData from "./data/moviesData";

export default function MoviesList({setSelectedMovie})
{
    return(
        <div>
          <div>
         <ul>
         {
                moviesData.map((item)=>(
                <li><h3 onClick={()=>setSelectedMovie(item)}>{item.title}</h3></li>
                ))
           }
         </ul>
          </div>
        </div>
    );
}