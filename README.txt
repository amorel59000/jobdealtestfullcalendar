
1-télécharger et installer node.js

2-télécharger et installer meteor

3-Telecharger le projet GIT a l adresse : https://github.com/amorel59000/jobdealtestfullcalendar.git

4-a Creer un projet jobdealtestfullcalendar dans le workspace de votre Node.js avec la commande : meteor create jobdealtestfullcalendar 

4-b Supprimer du projet nouvellement créer, les dossiers : client et server

4-c Ecraser les fichiers du dossier jobdealtestfullcalendar en provenance de la repository GIT vers le dossier jobdealtestfullcalendar que vous venez de creer se trouvant donc dans le workspace de votre node.js) /!\ ATTENTION : Prenez le soin de déselectionner au préalable les 2 dossiers .meteor et .git

5-Installer les paquets suivants  :
meteor npm install --save react react-dom
meteor npm install --save react-addons-pure-render-mixin
npm install fullcalendar
meteor add react-meteor-data
meteor add fullcalendar:fullcalendar 
meteor add momentjs:moment


6-Lancer le projet via la commande : meteor

7-Tester l'application avec Chrome ou Firefox : http://localhost:3000/
--> Pour ajouter un evenement : cliquez sur une date du calendrier, puis saisissez un libellé dans le champs en haut de page, et appuyer sur la touche entrée du clavier
--> Pour supprimer un evenement, cliquez sur l'evenement pour le selectionner puis cliquez sur le bouton "Supprimer l'evenement sélectionné" qui apparaitra en haut de page
--> Pour modifier un evenement, cliquez sur l'evenement pour le selectionner puis :
	-modifier son libellé dans le champs texte en haut de page
	-sélectionner une nouvelle date sur le calendrier
	-recliquer sur le champs texte pour avoir le focus dessus et appuyer sur la touche entrée du clavier
