import React from 'react';

const FormAjoutMatch = () => {
    return (
        <article>
            <header>
                <h1>Ajouter un match</h1>
            </header>
            <div>
                <form>
                    Date : <input type="date" name="dateMatch" />
                    Heure : <input type="time" name="heure" />
                    Equipe adverse : <input type="text" name="equipeAdverse" />
                    Lieu : <input type="text" name="lieu" />
                    <input type="submit" value="Valider" class="bouton" />
		            <input type="reset" value="Annuler" onclick="" class="bouton" />
                </form>
            </div>
        </article>
    );
};

export default FormAjoutMatch;