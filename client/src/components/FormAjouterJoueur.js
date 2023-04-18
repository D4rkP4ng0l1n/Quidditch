import React from 'react';

const FormAjouterJoueur = () => {
    return (
        <article>
            <header className='titreFormulaire'>
                <h1> Ajouter un joueur </h1>
            </header>
            <main className='mainFormulaire'>
                <section>
                    <form action="" method='post'>
                        Nom <input type="text" />
                        Prenom <input type="text" />
                        Numero de licence <input type="text" />
                        Date de naissance <input type="text" />
                        Date de naissance <input type="date" />
                        Taille en cm <input type="text" />
                        Poids en kg <input type="text" />
                        Poste prefere <select name="" id="">
                            <option value=""> -- Choisir un poste -- </option>
                            <option value=""> Attrapeur </option>
                            <option value=""> Poursuiveur </option>
                            <option value=""> Gardien </option>
                            <option value=""> Batteur </option>
                        </select>
                        Statut <select name="" id="">
                            <option value=""> -- Choisir un statut </option>
                            <option value=""> Actif </option>
                            <option value=""> Blesse </option>
                            <option value=""> Suspendu </option>
                            <option value=""> Absent </option>
                        </select>
                        Photo <input type="file" />
                        <input type="submit" value="Valider" />
                        <input type="button" value="Annuler" />
                    </form>
                </section>
            </main>
        </article>
    );
};

export default FormAjouterJoueur;