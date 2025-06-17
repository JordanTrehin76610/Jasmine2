
//Exercice 1 : Donner la taille de la chaîne de caractères.
let stringLength = function (sentence) {
  let taille = sentence.length
  return taille
}

//Exercice 2 : Remplacer le premier "e" de la chaîne par un espace.
let replaceFirstEBySpace = function (sentence) {
  sentence = sentence.replace("e", ' ')
  return sentence
}

//Exercice 3 : Concaténer les deux chaînes de caractères.
let concatenateSentences = function (firstSentence, secondSentence) {
  let phrase = firstSentence + secondSentence
  return phrase
}

//Exercice 4 : Afficher le cinquième caractère de la chaîne.
let displayFifthCharacter = function (sentence) {
  let caractère = sentence.charAt(4)
  return caractère
}

//Exercice 5 : Afficher les 9 premiers caractère.
let displayFirstNineCharacters = function (sentence) {
  let neuf = sentence.substring(0, 9)
  return neuf
}

//Exercice 6 : Mettre en majuscule la chaîne.
let upperTheSentence = function (sentence) {
  let upper = sentence.toUpperCase()
  return upper
}

//Exercice 7 : Mettre en minuscule la chaîne.
let lowerTheSentence = function (sentence) {
  let lower = sentence.toLowerCase()
  return lower
}

//Exercice 8 : Supprimer les espaces avant et après la chaîne.
let removeSpaces = function (sentence) {
  let noSpace = sentence.trim()
  return noSpace
}

//Exercice 9 : Afficher true si le paramètre d'entrée de la fonction est de type *string*.
let isString = function (sentence) {
  if (typeof sentence === 'string') {
    vraiOuFaux = true
  } else {
    vraiOuFaux = false
  }
  return vraiOuFaux
}

//Exercice 10 : Afficher l'extension du fichier.
let displayExtension = function (fileName) {
  extension = fileName.split('.')
  extention = extension.reverse()
  extension = extension[0]
  return extension
}

//Exercice 11 : Compter le nombre d'espace dans la chaîne.
let countSpaces = function (sentence) {
  esp = sentence.split(' ').length - 1
  return esp
}

//Exercice 12 : Inverser une chaîne de caractères.
let invertSentence = function (sentence) {
  al_envers = sentence.split('').reverse().join('');
  return al_envers
}

//Exercice 13 : Chercher si dans la chaîne de caractère se trouve "Afpa".
let searchInSentence = function (sentence) {
  let resultat = sentence.indexOf("Afpa")
  if (resultat > -1) {
    vraiOuFaux = true
  } else {
    vraiOuFaux = false
  }
  return vraiOuFaux
}

//Exercice 14 : Afficher la valeur absolue d'un nombre.
let displayAbsoluteValue = function (number) {
  absolue = Math.abs(number)
  return absolue
}

//Exercice 15 : Afficher les valeurs absolues de plusieurs nombres.
let displayAbsoluteValues = function (numbersArray) {
  let absolues = numbersArray.map(function (element) {
    return Math.abs(element);
  });
  return absolues
}

//Exercice 16 : Calculer la surface d'un cercle en fonction de son rayon. L'arrondir à l'entier le plus proche.
let calculateArea = function (radius) {
  surface = 3.14 * (radius ** 2) + 1
  surface = Math.round(surface)
  return surface
}

//Exercice 17 : Calculer l'hypothènuse d\'un triangle rectangle. Arrondir à l'entier inférieur.
let calculateHypotenuse = function (a, b) {
  hypothènuse = (a ** 2) + (b ** 2)
  hypothènuse = Math.sqrt(hypothènuse)
  hypothènuse = Math.round(hypothènuse)
  return hypothènuse
}
