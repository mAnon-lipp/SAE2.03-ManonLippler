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
    try {
        // Envoie une requête HTTP au serveur pour récupérer les films
        let answer = await fetch(HOST_URL + "/server/script.php?todo=readmovies");

        // Vérifie si la réponse est OK (status 200-299)
        if (!answer.ok) {
            throw new Error(`HTTP error! status: ${answer.status}`);
        }

        // Vérifie si la réponse contient du contenu
        let text = await answer.text();
        if (!text) {
            throw new Error("Empty response from server");
        }

        // Tente de parser le contenu en JSON
        let data = JSON.parse(text);

        // Retourne les données des films
        return data;
    } catch (error) {
        console.error("Error fetching movies:", error);
        return null; // Ou gérez l'erreur selon vos besoins
    }
};

export { DataMovie };