import React from 'react';

const AccueilMainContent = () => {
    return (
        <section className='centrerContent'>
            <h1> Application de gestion d'une equipe de Quidditch </h1>
            <img className='imgAccueil' src={`${process.env.PUBLIC_URL}/assets/images/ImgAccueil.png`} alt="Accueil" />
        </section>
    );
};

export default AccueilMainContent;