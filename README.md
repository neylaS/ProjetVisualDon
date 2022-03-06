# ProjetVisualDon
Projet VisualDon - Tendances Spotify

[Source] : (https://www.kaggle.com/dhruvildave/spotify-charts/activity)
[Source] : (https://www.kaggle.com/ivannatarov/spotify-daily-top-200-songs-with-genres-20172021/activity)

## Contexte:
<p style="text-align:justify;">Nous avons trouvé nos différentes données sur la plateforme [Kaggle](www.kaggle.com). Le premier jeu de données, créée par [Dhruvil Dave],(https://www.kaggle.com/dhruvildave/spotify-charts/activity) recense des données concernant les “TOP 200” et “Viral50” charts depuis 2017. Puis dans un deuxième temps, nous avons trouvé des données sur les daily top 200, créée par [Ivan Natarov](https://www.kaggle.com/ivannatarov/spotify-daily-top-200-songs-with-genres-20172021/activity), qui regroupent les chansons s’y trouvant avec leur genre entre 2017 et 2021. Ces deux groupes de données s’inscrivent dans le contexte de l’application spotify de ces dernières années et ont été reprises de nombreuses fois par d'autres utilisateurs (également appelés contributeurs) utilisant la plateforme Kaggle.</p>

---
## Description :
<p style="text-align:justify;">Le premier jeux de données est présenté sous forme de fichiers .CSV. L’information est organisée par catégories (ou plus précisément par 9 colonnes). Chaque catégorie comporte différents types de données comme texte, nombre, date, pourcentage et pays. Les colonnes,  comportant un titre unique, sont répartie comme tel:</p>
* Titre → (string)
* Rang → (int)
* Date → (date)
* Artiste → (string)
* Url → (string)
* Région → (category)
* Chart → (category)
* Tendence → (category)
* Streams → (int)

<p style="text-align:justify;">L’url des chansons, sert de référence car elle n'ajoute rien à l'information.</p> 

<p style="text-align:justify;">Pour le deuxième jeu, il est également sous forme de fichier .csv. Cependant pour celui-ci, la mise en forme est un peu différentes que le précédent, car toute les données se trouvent dans des colonnes séparées entres elles par des #. </p>

<p style="text-align:justify;">On y retrouve les colonnes suivantes:</p>
* Position 
* Titre de la chanson
* Artiste
* Streams
* Date
* Genre

---
## But :
<p style="text-align:justify;">La musique faisant grande partie du quotidien de chacun, il nous semblait intéressant d'approfondir cette thématique. Nous avons donc pensé qu’analyser les tendances musique de l’application Spotify pourrait nous apprendre d'avantages sur les musiques ainsi que les genres les plus écoutés.

En effet, l’application spotify offre l’option de voir des suggestions de musique s’ajouter dans nos playlist selon ce nos goûts musicaux. Cela montre bien à quel point analyser les habitudes d’écoute des utilisateurs peut être important, car cela permet une personnalisation plus complète de l’expérience utilisateur. De plus, selon des statistiques livrés par spotify eux même en 2019, la recherche d’un titre après l’avoir découvert dans une suggestion, augmenterait de 80%. 

Finalement, il serait intéressant d’analyser ces tendances pour comparer les résultats avec nos habitudes d'écoute. En effet, est-ce que les résultats obtenus reflètent notre réalité, est-ce que l’on se sent concerné par ces tendances, et enfin, peut-on retrouver des similitudes avec les habitudes d’écoute de nos proches? 
Nous nous sommes donc dirigés dans cette direction afin de tenter de démontrer si les résultats correspondent à ces questionnements. Nous avons utilisé les données trouvées pour mettre en images ces tendances.</p>

---
## Références :
<p style="text-align:justify;">Dans un premier temps, nous avons regardé sur internet s’il existait déjà dès visualisation de données sur spotify, et nous avons trouvé quelques recherches.

La première à été faite par [Anne Bode](https://towardsdatascience.com/visualizing-spotify-data-with-python-tableau-687f2f528cdd), qui a utilisé une API de spotify et le logiciel tableau pour analyser et afficher les données de spotify, et plus précisément les top artistes et chansons.
Dans la même direction, une analyse du même type a également été faite par [Rohit Kumar Thakur](https://medium.com/@ninza7?source=post_page-----4af81c5531a7-----------------------------------) en 2021. Les deux analyses ont été faites à l’aide du langage de programmation Python.

Nous avons également trouvé sur [github](https://github.com/willfurtado/Visualizing-Spotify-Data),une personne qui a analysé son propre spotify sur une période d’une année afin d’analyser les patterns qui sont récurrents. Finalement, également sur [gitHub](https://github.com/Julien-Verdun/SpotifyDataVisualizationProject), une personne qui a utilisé les données spotify pour analyser les habitudes d’écoute de musique par jour et pendant la période du covid.</p>

### Dataset
* [Spotify Charts](https://www.kaggle.com/dhruvildave/spotify-charts/code) | Dhruvil Dave

* [Spotify Top50 charts analysis](https://www.kaggle.com/alperenkaran/spotify-top50-charts-analysis)
| Analyse des classements du Top50 avec différents critères tels que la durée de présence d'une chanson dans la playlist, les artistes les plus présents et les streams par région.

* [Exploratory Data Analysis - Taylor Swift](https://www.kaggle.com/aneridalwadi/exploratory-data-analysis-taylor-swift)
| Analysé et sélectionné des données à l'aide de requêtes sql personnalisées sur l'artiste Taylor Swift, en utilisant PySpark pour explorer les données.

* [Exploring Christmas Spirit Across The World](https://www.kaggle.com/ewoudb95/exploring-christmas-spirit-across-the-world)
| Explorer comment la musique est écoutée dans différents pays et avec quels schémas éventuels la musique est consommée.

* [Spotify Charts 🎹 - Exploratory Data Analysis](https://www.kaggle.com/dhruvildave/spotify-charts-exploratory-data-analysis) 
| Importer et "tidying" les données pour analyser les différents types d'écoute de musique, les statistiques des artistes, etc.

* [Spotify daily top 200 songs with genres 2017-2021 | Ivan Natarov](https://www.kaggle.com/ivannatarov/spotify-daily-top-200-songs-with-genres-20172021/code)

* [Spotify: EDA in R](https://www.kaggle.com/marwinsolomon/spotify-eda-in-r)
| Analyser les données en les organisant en utilisant EDA.


Cette liste n’est pas exhaustive. En effet, lorsqu’on regarde les activités de ces différents jeux de données, on peut s’apercevoir qu’ils ont été repris à de nombreuses reprises.

Le premier recense plus de 20’000 vues et près de 2’500 téléchargements. Le deuxième moins connu, à été visionné plus de 7’000 fois et à été téléchargé près de 1’000 fois. Ces nombres montrent bien l’énorme portée de ces données.









