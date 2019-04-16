/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
 // Ce qui permet de donner la taille de la chaine de caractères est 'length'
var tailleString = function (texte) {
    return texte.length;
}
// Ce qui permet de remplacer le caractère (e) par un espace est 'replace'
var remplaceECar = function (texte) {
    return texte.replace('e',' ');
}
// Ce qui permet de concatener est le '+', Le terme "concaténer" signifie joindre deux chaînes bout à bout pour n'en former qu'une seule
var concatString = function (texte1, texte2) {
    return texte1+texte2;
}
// Ce si permet d'afficher le cinquième carractère de la chaine est 'CharAt(4)'
var afficherCar5 = function (texte) {
    return texte.charAt(4);
}
// Pour afficher les 9 premiers caractères on utilise 'substr'
var afficher9Car = function (texte) {
    return texte.substr(0,9);
}
// Pour mettre en majuscule la chaine de caractère on utilise (toUpperCase)
var majusculeString = function (texte) {
    return texte.toUpperCase();
}
// Pour mettre en minuscule la chaine de caractère on utilise (toLowerCase)
var minusculeString = function (texte) {
    return texte.toLowerCase();
}
// Pour supprimer les espaces avant et après la chaine de caractère
var SupprEspaceString = function (texte) {
    return texte.trim();
}

var IsString = function (texte) {
    return isNaN(texte);
}
// Pour afficher l'extension d'un fichier on utilise 'slice'
var AfficherExtensionString = function (texte) {
    return texte.slice(-3);
}
// split créé une liste des caracteres demandes, on n'a plus qu'à calculer la taille
var NombreEspaceString = function (texte) {
    return texte.split(' ').length -1;
}
 //on split le texte en une liste, on l'inverse et on recolle les morceaux
var InverseString = function (texte) {
    return texte.split('').reverse().join('');
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {
// pour donner la taille de la chaine de caractère
    return ; Math.pow(x,y);
}
var valeurAbsolue = function (nombre) {
// La fonction Math.abs() retourne la valeur absolue d'un nombre,
    return ; Math.abs(nombre);
}
var valeurAbsolueArray = function (array) {
    return ;
}
var sufaceCercle = function (rayon) {
    return 'A completer';
}
var hypothenuse = function (ab, ac) {
    return 'A completer';
}
var calculIMC = function (poids, taille) {
    return 'A completer';
}
