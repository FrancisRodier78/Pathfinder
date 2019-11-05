<?php
//	$data = unserialize(file_get_contents('towns.txt')); // Récupération de la liste complète des dons
	$data = array('A terre à cheval*', 'Adepte de la matraque*', 'Maître de la matraque*', 'Arme de prédilection*', 'Arme de prédilection supérieure*', 
					'Combat chorégraphié*', 'Démonstration*', 'Coup final sanglant*', 'Briser les défenses*', 'Frappe mortelle*', 
					'Démonstration décourageante*', 'Entraînement au combat féroce*', 'Frappe puissante*', 'Frappe puissante supérieure*', 'Maître des bâtons*', 
					'Maîtrise du fouet*', 'Science de la maîtrise du fouet*', 'Maîtrise du fouet supérieure*', 'Spécialisation martiale*', 'Maîtrise du tir à bout portant*', 
					'Spécialisation martiale supérieure*', 'Tireur couché*', 'Arme jetable', 'Arme naturelle supérieure', 'Arme en main*', 
					'Frappe ondoyante*', 'Armure naturelle supérieure', 'Assommant*', 'Attaque en finesse*', 'Grâce tranchante*', 
					'Attaque en puissance*', 'Assaut étourdissant*', 'Assaut hébétant*', 'Assaut repoussant*', 'Assaut sanglant*', 
					'Briseur d’objets*', 'Brute enragée', 'Concentration malgré la fureur*', 'Carnage effroyable*', 'Coup déstabilisant*', 
					'Coups protecteurs*', 'Enchaînement*', 'Enchaînement final*', 'Succession d\'enchaînements*', 'Science de l\’enchaînement final*', 
					'Science de la bousculade*', 'Bousculade rapide*', 'Bousculade supérieure*', 'Choc de l’enragé', 'Coup bousculant*', 
					'Coup fabuleux', 'Science du coup fabuleux*', 'Réduction agressive*', 'Science de la destruction*', 'Coup destructeur*', 
					'Destruction d\'arme supérieure*', 'Science de l\’entraînement*', 'Attirer rapidement*', 'Entraînement supérieur*', 'Science du renversement*', 
					'Charge renversante*', 'Renversement supérieur*', 'Attaque en vol', 'Attaques multiples*', 'Attaques réflexes*', 
					'Coincer*', 'Garde du corps*', 'Interception de coups*', 'Patrouille en combat*', 'Immobiliser*', 
					'Boucherie impitoyable*', 'Bretteur amateur*', 'Briser la tenaille*', 'Capture', 'Combat à deux armes*', 
					'Double frappe*', 'Éventration à deux armes*', 'Double tueur', 'Feinte à deux armes*', 'Science du combat à deux armes*', 
					'Combat à deux armes supérieur*', 'Science de la feinte à deux armes*', 'Défense à deux armes*', 'Combat à plusieurs armes*', 'Combat en aveugle*', 
					'Science du combat en aveugle*', 'Maîtrise du combat en aveugle*', 'Combat monté*', 'Astuce d’équitation*', 'Tirailleur monté*', 
					'Bouclier pour la monture*', 'Tir monté*', 'Attaque au galop*', 'Charge dévastatrice*', 'Piétinement*', 
					'Désarçonner*', 'Combattant de spectacle*', 'Maître du combat de spectacle*', 'Conseil de combat', 'Coup dans l’ombre*', 
					'Coup de grâce de l’enragé', 'Coup final mortel*', 'Coup odieux*', 'Cri de guerre*', 'Crocs acérés', 
					'Cul sec', 'Don pour les critiques*', 'Critique assourdissant*', 'Critique aveuglant*', 'Critique d’empalement*', 
					'Science du critique d’empalement*', 'Critique fatigant*', 'Critique épuisant*', 'Critique fébrile*', 'Critique handicapant*', 
					'Critique ralentissant*', 'Critique étourdissant*', 'Critique sanglant*', 'Critique maudit', 'Critique de plaie', 
					'Critique de plaie supérieur', 'Maîtrise du critique de plaie', 'Maîtrise du critique*', 'Précision sournoise', 'Donner l’initiative', 
					'Éclats d’arme', 'Endurance', 'Combattre dans la tempête*', 'Dur à cuire', 'Développement de la résistance', 
					'Science du développement de la résistance', 'Guérison rapide', 'Récupération héroïque', 'Résistance héroïque', 'Refuser la mort', 
					'Entraînement défensif aux armes*', 'Esquive*', 'Lanceur à courte distance*', 'Fausse ouverture*', 'Manœuvre de désorientation', 
					'Souplesse du serpent*', 'Acrobate rusé*', 'Attaque éclair*', 'Esquive anticipée*', 'Contre-réflexes*', 
					'Glissade', 'Pas de côté*', 'Science du pas de côté*', 'Roulade*', 'Sous les jambes*', 
					'Comme le vent*', 'Comme l’éclair*', 'Esquive acrobatique', 'Étreinte fatale*', 'Horreur de l’étreinte fatale*', 
					'Maître de l’étreinte fatale*', 'Expertise du combat*', 'Aide rapide*', 'Attaque en groupe*', 'Travail en équipe*', 
					'Manoeuvre surprise', 'Renvoi de l’insaisissable', 'Seconde chance*', 'Science de la seconde chance*', 'Science du désarmement*', 
					'Briser la garde*', 'Coup désarmant*', 'Désarmement supérieur*', 'Désarmement contrôlé*', 'Science de la feinte*', 
					'Échange trompeur', 'Feinte de dégagement*', 'Dégagement flamboyant*', 'Coup de dégagement*', 'Feinte supérieure*', 
					'Science du croc-en-jambe*', 'Coup déséquilibrant*', 'Croc-en-jambe supérieur*', 'Croc-en-jambe au bâton*', 'Balayage au bâton*', 
					'Entraîner au sol*', 'Lancer ki*', 'Entrave à distance*', 'Bousculade tourbillonnante*', 'Science du lancer ki*', 
					'Science du repositionnement*', 'Coup repositionnant*', 'Repositionnement rapide*', 'Repositionnement supérieur*', 'Science du sale coup*', 
					'Sale coup rapide*', 'Sale coup supérieur*', 'Science de la subtilisation*', 'Subtilisation rapide*', 'Subtilisation supérieure*', 
					'Attaque en rotation*', 'Fente*', 'Feinte jumelée*', 'Flexibilité martiale supplémentaire', 'Force intimidante*', 
					'Tuerie fracassante*', 'Massacre effroyable*', 'Frappe décisive*', 'Coup final violent*', 'Frappe dévastatrice*', 
					'Science de la frappe dévastatrice*', 'Frappe agrippante*', 'Frappe de l’hiver*', 'Frappe féerique*', 'Science de la frappe décisive*', 
					'Frappe décisive supérieure*', 'Frappe inspirée', 'Frappe magique*', 'Critique de dissipation*', 'Frappe déchirante*', 
					'Frappe magique sanguine*', 'Fuite renversante*', 'Griffes coupantes*', 'Griffes magiques*', 'Haine cinglante*', 
					'Préjugé extrême', 'Héritage monastique*', 'Homme de main*', 'Ingénieur de siège*', 'Maître ingénieur de siège*', 
					'Tireur à l’arme de siège*', 'Initié du refus de mourir*', 'Maître du refus de mourir*', 'Zélote du refus de mourir*', 'Ki supplémentaire', 
					'Lacération furieuse*', 'Science de la lacération furieuse*', 'Lacération furieuse supérieure*', 'Lancer à deux mains*', 'Lancer improvisé*', 
					'Arme à aspersion à ricochet', 'Lanceur enragé', 'Maîtrise des armes improvisées*', 'Lanceur à distance*', 'Maîtrise des armes de spectacle*', 
					'Maîtrise du combat défensif*', 'Maniement d\'une arme exotique*', 'Adepte du filet*', 'Filet et trident*', 'Manœuvrer le filet*', 
					'Ruse au filet*', 'Maniement des boucliers', 'Science du coup de bouclier*', 'Frappe du bouclier*', 'Maîtrise du bouclier*', 
					'Coup de bouclier opportuniste*', 'Art du bouclier*', 'Art du bouclier supérieur*', 'Bouclier contre les projectiles*', 'Bouclier contre les rayons*', 
					'Bouclier protecteur*', 'Spécialisation au bouclier*', 'Spécialisation supérieure aux boucliers*', 'Bouclier salvateur*', 'Maniement du pavois*', 
					'Mur de boucliers canalisé', 'Manœuvres agiles*', 'Par-dessus et par-dessous*', 'Marteler la faille*', 'Meurtre silencieux*', 
					'Monture de taille inférieure*', 'Mort venue du ciel*', 'Peau de fer', 'Pouvoir de rage supplémentaire', 'Précision elfique', 
					'Première volée*', 'Prendre l\’avantage*', 'Profil bas*', 'Protection contre un ennemi juré', 'Rechargement rapide*', 
					'Maîtrise des arbalètes*', 'Regard intimidant', 'Regard pénétrant', 'Renaissance canalisée', 'Responsable du siège*', 
					'Retour en force', 'Riposte*', 'Robustesse', 'S’avancer*', 'Poursuite*', 
					'Avance et frappe*', 'Science de l’initiative*', 'Science du combat à mains nues*', 'Artiste du KO', 'Contre-droite*', 
					'Coup bouleversant*', 'Coup étourdissant*', 'Briser la mâchoire*', 'Briser les os*', 'Briser le cou*', 
					'Coup écrasant*', 'Étourdir l’immobile*', 'Coup mémorable*', 'Coup parfait*', 'École du scorpion*', 
					'Poing de la gorgone*', 'Fureur de la méduse*', 'Coup de la cockatrice*', 'Frappe de la vipère*', 'Empoisonneur précis*', 
					'Frappe de domaine*', 'Frappe de l’école*', 'Frappe drainante', 'Frappe ensorcelée', 'Frappe maléfique*', 
					'Frappe paralysante*', 'Frappe révélatrice*', 'Maître des écoles de combat*', 'Parade de projectiles*', 'Capture de projectiles*', 
					'Renvoi de projectile*', 'Piétinement vicieux*', 'Poing de cauchemar*', 'Tisseur de cauchemar*', 'Frappe de cauchemar*', 
					'Poing déstabilisant*', 'Poing élémentaire*', 'Poing du croisé*', 'Poing de dissipation', 'Poing hébétant*', 
					'Science de la lutte*', 'Bouclier vivant*', 'Étreinte étouffante*', 'KO sur l’immobile*', 'Lutte supérieure*', 
					'Éventration de l’immobile*', 'Lutteur rapide*', 'Strangulation*', 'Toucher de la sérénité*', 'Science du critique*', 
					'Se relever avec le ki', 'Surprise*', 'Tacticien expérimenté', 'Talent de tueur supplémentaire', 'Tir à bout portant*', 
					'Impact du tir critique*', 'Lancer lors d’une charge*', 'Science du lancer lors d’une charge*', 'Tir de loin*', 'Tir lobé*', 
					'Tir de précision*', 'Aspersion contrôlée*', 'Tir avec concentration*', 'Tir de sommation*', 'Tirs groupés*', 
					'Science du tir de précision*', 'Viser juste*', 'Tir en mouvement*', 'Tir en retraite*', 'Tir impitoyable*', 
					'Tir optimisé*', 'Tir perturbateur*', 'Tir rapide*', 'Coup de flèche*', 'Feu nourri*', 
					'Tir soudain*', 'Épée et pistolet*', 'Science du tir soudain*', 'Tir soudain supérieur*', 'Tireur à la fronde couché*', 
					'Tonnerres jumeaux*', 'Déluge des tonnerres jumeaux*', 'Maître des tonnerres jumeaux*', 'Touche d’ombre*', 'Tour de passe-passe*', 
					'Traqueur au clair de lune*', 'Feinte du traqueur au clair de lune*', 'Maître de la traque au clair de lune*', 'Tueur intimidant', 'Tueur miséricordieux', 
					'Tueur menaçant', 'Tueur prolongé', 'Tueur supplémentaire', 'Vigueur du scalde', 'Vigueur surhumaine du scalde', 
					'Vigueur en rage', 'Vigueur surhumaine', 'Science de la vigueur surhumaine', 'Virage sur l\'aile', 'Visage de pierre', 
					'Viser*', 'Croc-en-jambe à distance*', 'Désarmement à distance*', 'Tireur astucieux*', 'Traction exceptionnelle*', 
					'Voltigeur', 'Feinte du tueur*', 'Ramassage acrobatique*', 'Yeux de lynx');

	$dataLen = count($data);
	
	sort($data); // On trie les dons dans l'ordre alphabétique
	
	$results = array(); // Le tableau où seront stockés les résultats de la recherche
	
	// La boucle ci-dessous parcourt tout le tableau $data, jusqu'à un maximum de 10 résultats
	
	for ($i = 0 ; $i < $dataLen && count($results) < 10 ; $i++) {
	    if (stripos($data[$i], $_GET['s']) === 0) { // Si la valeur commence par les mêmes caractères que la recherche
	        array_push($results, $data[$i]); // On ajoute alors le résultat à la liste à retourner
	    }
	}
	
	echo implode('|', $results); // Et on affiche les résultats séparés par une barre verticale |
?>