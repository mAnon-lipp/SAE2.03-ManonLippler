// URL où se trouve le répertoire "server" sur mmi.unilim.fr
let HOST_URL = "..";//"http://mmi.unilim.fr/~????"; // CHANGE THIS TO MATCH YOUR CONFIG

let DataMovie = {};

 /**
     * Fetches data from the server based on the specified day.
     *
     * @param {string} day - The day parameter to be sent to the server.
     * @returns The response from the server.
     * 
     * DataMenu.request permet de récupérer des données depuis le serveur.
     * Elle prend en paramètre un jour (lundi mardi...) de la semaine et 
     * renvoie les données contenues dans la réponse du serveur (data).
     */
DataMovie.add = async function(mdata){
    let config = {
        method: "POST", // méthode HTTP à utiliser
        body: mdata // données à envoyer sous forme d'objet FormData
    };
    let answer = await fetch(HOST_URL + "/server/script.php?todo=add", config);
    let data = await answer.json();
    return data;
    
}