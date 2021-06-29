import React, { useState, useEffect } from 'react';
import { Hero } from './Hero';
import { View } from './View';
import '../index.css';

const HeroList = () => {

    const [heroList, setHeroList] = useState([]);

    const [view, setView] = useState([]);

    console.log(view);

    //El primer paso que va a hacer cuando renderiza es llamar a getHero
    //actualiza el estado
    useEffect(() => {
        getHero()
            //.then(heroes => setHeroList(heroes))
    }, []) //Para que se renderice una vez

    const getHero = async () => {

        const url = '/data.json';
        const res = await fetch(url);
        const data = await res.json();
        //console.log(data);


        const heroes = data.map(hero => {
            return {
                id: hero.id,
                superhero: hero.superhero,
                publisher: hero.publisher,
                image: hero.image,
                publisher: hero.publisher,
                alter_ego: hero.alter_ego,
                first_appearance: hero.first_appearance
            }

        })
        //return heroes;
        setHeroList(heroes);
    }
    return (
        <>
            <h1>Marvel Comics</h1>
            {
                heroList.map(hero => (
                    <Hero
                        key={hero.id}
                        hero={hero}
                        heroList={heroList}
                        setView={setView}
                    />
                ))
            }

           <div className="container text-center mt-5">
            {
                view.map(v => (
                    <View key={v.id} view={v} />
                ))
            }
           </div>

        </>
    )

}


export default HeroList;