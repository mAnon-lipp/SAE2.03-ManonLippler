// URL où se trouve le répertoire "server" sur mmi.unilim.fr
let HOST_URL = "https://mmi.unilim.fr/~lippler1/SAE2.03-ManonLippler"; // Changez cette valeur pour correspondre à votre configuration

let DataMovie = {};

/**
 * Récupère la liste des films disponibles depuis le serveur.
 *
 * 
 * DataMovie.requestMovies permet de récupérer la liste des films disponibles.
 * Elle interroge le serveur via une requête HTTP avec le paramètre 'todo=readmovies'.
 */
DataMovie.requestMovies = async function() {
    // Envoie une requête HTTP au serveur pour récupérer les films
    let answer = await fetch(HOST_URL + "/server/script.php?todo=readmovies");
    // Extrait les données JSON de la réponse
    let data = await answer.json();
    // Retourne les données des films
    return data;
};

/* C'EST QUOI async/await ?
    
   Certaines instructions prennent du temps, comme fetch, car elles dépendent de la réponse d'un serveur.
   Le mot-clé await permet d'attendre la réponse avant de continuer l'exécution du code.
   Pour utiliser await, la fonction doit être marquée comme async.
*/
DataMovie.getAll = async function () {
    try {
        const movies = await DataMovie.requestMovies();
        return movies; // Retourne la liste des films
    } catch (error) {
        console.error("Erreur lors de la récupération des films :", error);
        return []; // Retourne un tableau vide en cas d'erreur
    }
};

export { DataMovie };