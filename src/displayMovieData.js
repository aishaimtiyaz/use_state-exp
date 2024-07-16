import React from "react";

export default function DisplayDetails({selectedMovie})
{
   return(
    <div>
{
            selectedMovie != null &&(
                <div>
                    <h3>{selectedMovie.title}</h3>
                    <p>{selectedMovie.actor}</p>
                    <p>{selectedMovie.genre}</p>
                    <p>{selectedMovie.director}</p>
                </div>)
}
    </div>
   );
}