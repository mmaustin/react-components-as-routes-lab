import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
        {actors.map((actor, idx) => (
            <div key={idx}>
                <p> Actor Name: {actor.name}</p>
                <p> Actor Movies:</p>
                <ul>
                    {actor.movies.map((movie, index) => (
                        <li key={index}>{movie}</li>
                    ))}
                </ul>
            </div>
        ))}
    </div>
  );
};

export default Actors;
