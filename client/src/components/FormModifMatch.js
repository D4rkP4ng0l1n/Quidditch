import React from 'react';

const FormModifMatch = () => {
    return (
        <article>
            <header>
                <h1>Modifier un match</h1>
            </header>
            <div>
                <form>
                    Date : <input type="date" name="dateMatch" />
                    Heure : <input type="time" name="heure" />
                    Equipe adverse : <input type="text" name="equipeAdverse" />
                    Lieu : <input type="text" name="lieu" />
                    Score de l'équipe <input type="number" name="score" />
                    Score de l'équipe adverse <input type="number" name="scoreAdverse" />
                    <input type="submit" value="Valider" class="bouton" />
		            <input type="reset" value="Annuler" onclick="" class="bouton" />
                </form>
            </div>
        </article>
    );
};

export default FormModifMatch;