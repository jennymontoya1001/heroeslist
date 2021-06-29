import React from 'react'
import '../components/view.css'

export const View = ({ view }) => {

    const { id, superhero, publisher, alter_ego, image } = view;

    return (
        
            <div className="card view container text-center">
                <img src={image} className="card-img-top" alt={superhero}></img>
                <div className="card-body">
                    <p className="card-text">{superhero}</p>
                    <p className="card-text">{publisher}</p>
                    <p className="card-text">{alter_ego}</p>
                </div>
            </div>
      
    )
}
