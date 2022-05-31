### `Enoncer du projet`

TP noté : Pokédex en ReactJS (débutant)

Il conviendra de réaliser un Pokédex, basé sur la librairie React.js. 

Le Pokédex est une base de données répertoriant différentes espèces de petits monstres combattants appelés Pokémon. Il devra également garder trace des plus grands combats de Pokémon de l'Histoire.
Un Pokédex contient des espèces de Pokémon.
Une espèce de Pokémon est identifiée par un nom unique. Elle est décrite par différentes caractéristiques morphologiques (couleur et taille moyenne), et un ou deux (jamais zéro) types (feu, eau, acier, ...). Il existe naturellement plusieurs espèces du même type. Une espèce peut être l'évolution d'une autre espèce. Par exemple, Raichu est l'évolution de Pikachu. On considère qu'une espèce ne peut évoluer, au plus, qu'en une seule autre espèce, et que deux espèces différentes ne peuvent jamais évoluer en une même espèce. Il faut bien sûr afficher son aspect (image) sur l'application.

Cette application devra manipuler des données provenant d'au moins une API externe, avec notamment un CRUD le plus complet possible. 
Techniquement, il faudra que l'application comporte :

Au moins 4 écrans fonctionnellement différents
- Listing de données d'un Pokédex
- Donnant accès aux détails d'un élément
- Formulaires de création de données et de modification de données
   
Un mécanisme de persistance des données locales (Local Storage)
 
Les éléments suivants devront être obligatoirement présents :
-  Stockage dans le navigateur
-  package.json à jour
 
De manière optionnelle, vous pouvez utiliser :
-  Routage dynamique (plusieurs "pages")

Les points suivants seront également pris en compte :
   - Clarté du code
   - Architecture propre
   - Utilisation des hooks
   - Bonne utilisation des const/var/let
   - Styles et design de l'application (possibilité d'utiliser un framework CSS)
   - Utilisation pertinente de librairie(s) externe(s)
   - Bonne gestion de l'état (state) de l'application et ses composants

### `Présentation du projet`

Nous avons créé un Pokédex avec 807 Pokémon différent et pour chacun d'eux une page qui regroupe pas mal de données comme la taille, le poids ou le type. Avec un aussi grand nombre de Pokémon nous avons créé une barre de recherche qui va permettre de retrouver son Pokémon préféré.

### `Groupe du projet`
Kuba Stanislawski DAD A 
Daouda Condetto Keita DAD B

### `Listes des fonctionnalités implémentées`
- Listing des pokémon sur une page pokédex
- Page de detail (pour chaque pokemon)
- Une barre de recherche

### `Difficultés`
Quelques petits problèmes avec les versions des mobules importés / le design avec materiel-ui.
Sinon dans l'ensemble pas de plus gros problème.
