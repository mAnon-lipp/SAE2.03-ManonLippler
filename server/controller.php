<?php

/** ARCHITECTURE PHP SERVEUR  : Rôle du fichier controller.php
 * 
 *  Dans ce fichier, on va définir les fonctions de contrôle qui vont traiter les requêtes HTTP.
 *  Les requêtes HTTP sont interprétées selon la valeur du paramètre 'todo' de la requête (voir script.php)
 *  Pour chaque valeur différente, on déclarera une fonction de contrôle différente.
 * 
 *  Les fonctions de contrôle vont éventuellement lire les paramètres additionnels de la requête, 
 *  les vérifier, puis appeler les fonctions du modèle (model.php) pour effectuer les opérations
 *  nécessaires sur la base de données.
 *  
 *  Si la fonction échoue à traiter la requête, elle retourne false (mauvais paramètres, erreur de connexion à la BDD, etc.)
 *  Sinon elle retourne le résultat de l'opération (des données ou un message) à includre dans la réponse HTTP.
 */

/** Inclusion du fichier model.php
 *  Pour pouvoir utiliser les fonctions qui y sont déclarées et qui permettent
 *  de faire des opérations sur les données stockées en base de données.
 */
require("model.php");

/**
 * readMoviesController
 *
 * Cette fonction traite les requêtes HTTP pour lesquelles le paramètre 'todo' vaut 'readmovies'.
 * Elle appelle la fonction getMovies du modèle pour récupérer la liste des films.
 *
 * @return mixed La liste des films si tout se passe bien, sinon false.
 */
function readMoviesController() {
    // Appel de la fonction getMovies déclarée dans model.php
    $movies = getMovies();
    // Vérifie si des films ont été récupérés
    if (!empty($movies)) {
        return $movies;
    } else {
        return false;
    }
}