import React, { useState } from 'react';

export const Hero = ({ hero, heroList,setView}) => {

    const { id, superhero, image} = hero;

    const handleAdd = idL => {
        const hero = heroList.filter((heroe) => heroe.id === idL);
        setView([...hero]);
    }

    return (
        <>
            <div className="card hero">
                <img src={image} className="card-img-top" alt={superhero}></img>
                <div className="card-body">
                    <p className="card-text">{superhero}</p>
                    <button type="button" onClick={() => handleAdd(id)} className="btn btn-dark">
                        View
                    </button>
                </div>
            </div>

        </>
    )
}
