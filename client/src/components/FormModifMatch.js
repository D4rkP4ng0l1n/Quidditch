import React from 'react';

const FormModifMatch = () => {
    return (
        <article>
            <header className='containerTitre'>
                <h1>Modifier un match</h1>
            </header>
            <div className='containerTabAndButtons'>
                <form>
                    Date : <input type="date" name="dateMatch" />
                    Heure : <input type="time" name="heure" />
                    Equipe adverse : <input type="text" name="equipeAdverse" />
                    Lieu : <input type="text" name="lieu" />
                    Score de l'équipe <input type="number" name="score" />
                    Score de l'équipe adverse <input type="number" name="scoreAdverse" />
                </form>
                <div>
                    <button>Valider</button>
                    <button>Annuler</button>
                </div>
            </div>
        </article>
    );
};

export default FormModifMatch;