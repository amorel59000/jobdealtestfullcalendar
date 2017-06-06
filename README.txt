
1-Téléchargez et installez node.js

2-Téléchargez et installez meteor

3-Téléchargez le projet GIT à l'adresse : https://github.com/amorel59000/jobdealtestfullcalendar.git

4-a Créez un projet jobdealtestfullcalendar dans le workspace de votre serveur node.js, avec la commande : meteor create jobdealtestfullcalendar 

4-b Supprimez du projet nouvellement créé, les 2 dossiers suivants : client et server

4-c A partir des fichiers du dossier jobdealtestfullcalendar en provenance de la repository GIT, écrasez ceux du dossier jobdealtestfullcalendar que vous venez de créer se trouvant donc dans le workspace de votre serveur node.js /!\ ATTENTION : Prenez le soin de déselectionner au préalable les 2 dossiers .meteor et .git

5-Lancez un invite de commande MS DOS, placez-vous a l'interieur du projet jobdealtestfullcalendar de votre workspace et installez les paquets suivants  :
meteor npm install --save react react-dom
meteor npm install --save react-addons-pure-render-mixin
npm install fullcalendar
meteor add react-meteor-data
meteor add fullcalendar:fullcalendar 
meteor add momentjs:moment


6-Lancez le projet via la commande : meteor

7-Testez l'application avec Chrome ou Firefox : http://localhost:3000/
--> Pour ajouter un evenement : cliquez sur une date du calendrier, puis saisissez un libellé dans le champs en haut de page, et appuyer sur la touche entrée du clavier
--> Pour supprimer un evenement, cliquez sur l'evenement pour le selectionner puis cliquez sur le bouton "Supprimer l'evenement sélectionné" qui apparaitra en haut de page
--> Pour modifier un evenement, cliquez sur l'evenement pour le selectionner puis :
	-modifier son libellé dans le champs texte en haut de page
	-sélectionner une nouvelle date sur le calendrier
	-recliquer sur le champs texte pour avoir le focus dessus et appuyer sur la touche entrée du clavier
