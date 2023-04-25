import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StatistiquesGloables = () => {

    const [matchs, setMatchs] = useState([]);
    const [nbMatchsGagnes, setNbMatchsGagnes] = useState(0);
    const [nbMatchsPerdus, setNbMatchsPerdus] = useState(0);
    const [nbMatchsNuls, setNbMatchsNuls] = useState(0);

    useEffect(() => {
        axios.get('http://localhost:5000/match')
            .then(response => {
                const matches = response.data.match;
                const nbMatchsGagnes = matches.reduce((acc, match) => {
                    if (match.score > match.scoreAdverse) {
                        return acc + 1;
                    }
                    return acc;
                }, 0);
                const nbMatchsPerdus = matches.reduce((acc, match) => {
                    if (match.score < match.scoreAdverse) {
                        return acc + 1;
                    }
                    return acc;
                }, 0);
                const nbMatchsNuls = matches.reduce((acc, match) => {
                    if (match.score === match.scoreAdverse) {
                        return acc + 1;
                    }
                    return acc;
                }, 0);
                setMatchs(matches);
                setNbMatchsGagnes(nbMatchsGagnes);
                setNbMatchsPerdus(nbMatchsPerdus);
                setNbMatchsNuls(nbMatchsNuls);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);





    return (
        <section>
            <h1> Statistiques </h1>
            <h5> Nombre de matchs : {matchs.length} </h5>
            <h5> Pourcentage de matchs gagnes : {((nbMatchsGagnes / matchs.length) * 100).toFixed(2)} % </h5>
            <h5> Pourcentage de matchs perdus : {((nbMatchsPerdus / matchs.length) * 100).toFixed(2)} % </h5>
            <h5> Pourcentage de matchs nuls : {((nbMatchsNuls / matchs.length) * 100).toFixed(2)} % </h5>
        </section>
    );
};

export default StatistiquesGloables;