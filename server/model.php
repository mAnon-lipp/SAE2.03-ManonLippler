<?php
/**
 * Ce fichier contient toutes les fonctions qui réalisent des opérations
 * sur la base de données, telles que les requêtes SQL pour insérer, 
 * mettre à jour, supprimer ou récupérer des données.
 */

/**
 * Définition des constantes de connexion à la base de données.
 *
 * HOST : Nom d'hôte du serveur de base de données, ici "localhost".
 * DBNAME : Nom de la base de données
 * DBLOGIN : Nom d'utilisateur pour se connecter à la base de données.
 * DBPWD : Mot de passe pour se connecter à la base de données.
 */
define("HOST", "localhost");
define("DBNAME", "lippler1");
define("DBLOGIN", "lippler1");
define("DBPWD", "lippler1");

/**
 * Récupère la liste des films disponibles en base de données.
 *
 * @return array Un tableau contenant les informations nécessaires : titre, affiche et identifiant.
 */
function getMovies() {
    // Connexion à la base de données
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
    // Requête SQL pour récupérer les films
    $sql = "SELECT id, name, image FROM Films";
    $answer = $cnx->query($sql);
        return $answer->fetchAll(PDO::FETCH_OBJ);
}