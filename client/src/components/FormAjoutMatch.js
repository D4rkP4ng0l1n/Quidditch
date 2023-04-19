import React from 'react';

const FormAjoutMatch = () => {
    return (
        <article>
            <header className='containerTitre'>
                <h1>Ajouter un match</h1>
            </header>
            <div className='containerTabAndButtons'>
                <form>
                    Date : <input type="date" name="dateMatch" />
                    Heure : <input type="time" name="heure" />
                    Equipe adverse : <input type="text" name="equipeAdverse" />
                    Lieu : <input type="text" name="lieu" />
                </form>
                <div>
                    <button>Valider</button>
                    <button>Annuler</button>
                </div>
            </div>
        </article>
    );
};

export default FormAjoutMatch;