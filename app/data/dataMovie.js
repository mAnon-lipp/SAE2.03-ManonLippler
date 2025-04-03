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
    let answer = await fetch(HOST_URL + "/server/script.php?todo=getMovies");
    // Extrait les données JSON de la réponse
    let data = await answer.json();
    // Retourne les données des films
    return data;
};

export { DataMovie };