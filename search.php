<?php
//	$data = unserialize(file_get_contents('towns.txt')); // Récupération de la liste complète des dons
	$data = array('À terre à cheval*', 'Abondance de révélations', 'Absorption rageuse', 'Adepte de la discipline', 'Adepte de la matraque*',
'Maître de la matraque*', 'Agilité dimensionnelle', 'Assaut dimensionnel', 'Derviche dimensionnel', 'Manœuvres dimensionnelles', 
'Savant dimensionnel', 'Aisance', 'Déplacement acrobatique', 'Pas léger', 'Déplacement mystique', 
'Alchimie inspirée', 'Allié naturel spontané', 'Âme animale', 'Âme commune', 'Âme d’acier', 
'Amplification supplémentaire', 'Ancre douloureuse', 'Antagoniste', 'Apparence enfantine', 'Appel du conjurateur', 
'Appel spirituel', 'Apprendre un piège de rôdeur', 'Aptitude magique', 'Arcane supplémentaire', 'Arme de prédilection*', 
'Arme de l’Élu*', 'Science de l’arme de l’Élu*', 'Arme de l’Élu supérieure*', 'Arme de prédilection supérieure*', 'Combat chorégraphié*', 
'Déluge du croisé', 'Étude à distance*', 'Démonstration*', 'Coup final sanglant*', 'Briser les défenses*', 
'Frappe mortelle*', 'Démonstration décourageante*', 'Entraînement au combat féroce*', 'Frappe puissante*', 'Frappe puissante supérieure*', 
'Maître des bâtons*', 'Maîtrise du fouet*', 'Science de la maîtrise du fouet*', 'Maîtrise du fouet supérieure*', 'Spécialisation martiale*', 
'Maîtrise du tir à bout portant*', 'Spécialisation martiale supérieure*', 'Tireur couché*', 'Une fronde pour fléau*', 'Arme jetable', 
'Arme naturelle supérieure', 'Arme en main*', 'Frappe ondoyante*', 'Armure naturelle supérieure', 'Armure résiliente', 
'Artisanat de groupe', 'Aspect bestial', 'Assommant*', 'Assurer sa prise', 'Attaque magique', 
'Autonome', 'Athlétisme', 'Attaque en finesse*', 'Grâce tranchante*', 'Attaque en puissance*', 
'Assaut étourdissant*', 'Assaut hébétant*', 'Assaut repoussant*', 'Assaut sanglant*', 'Briseur d’objets*', 
'Brute enragée', 'Concentration malgré la fureur*', 'Carnage effroyable*', 'Coup déstabilisant*', 'Coups protecteurs*', 
'Enchaînement*', 'Enchaînement final*', 'Succession d\'enchaînements*', 'Science de l’enchaînement final*', 'La mort ou la gloire*', 
'Rage imprudente', 'Science de la bousculade*', 'Bousculade rapide*', 'Bousculade supérieure*', 'Choc de l’enragé', 
'Coup bousculant*', 'Coup fabuleux', 'Science du coup fabuleux*', 'Réduction agressive*', 'Science de la destruction*', 
'Coup destructeur*', 'Destruction d\'arme supérieure*', 'Science de l’entraînement*', 'Attirer rapidement*', 'Entraînement supérieur*', 
'Science du renversement*', 'Charge renversante*', 'Renversement supérieur*', 'Attaque en vol', 'Attaques multiples*', 
'Attaques réflexes*', 'Coincer*', 'Garde du corps*', 'Interception de coups*', 'Patrouille en combat*', 
'Immobiliser*', 'Attaque spéciale renforcée', 'Attrait de la vie', 'Aura de fléau des dragons', 'Aura d’intrépidité', 
'Bénédiction accélérée', 'Bénédiction canalisée', 'Bénédiction de guerre', 'Bien préparé', 'Bienfait du croyant', 
'Mains du croyant', 'Bluff magique', 'Bombes supplémentaires', 'Bombe télécommandée', 'Boucherie impitoyable*', 
'Bouclier magique', 'Boyaux d\'acier', 'Bretteur amateur*', 'Briser la tenaille*', 'Briser le masque mental*', 
'Camouflage au sol', 'Canal d’énergie', 'Canalisateur polyvalent', 'Canalisation alignée', 'Canalisation agressive', 
'Canalisation armée*', 'Canalisation élémentaire', 'Canalisation rapide', 'Guérison réactive', 'Canalisation sélective', 
'Canalisation supplémentaire', 'Capture', 'Champion expérimenté', 'Changement de focalisation efficace', 'Changement rapide de focalisation', 
'Chantesort', 'Chanteur de guerre', 'Chanteur de la nature', 'Chanteur des roches', 'Charge explosive', 
'Châtiment canalisé*', 'Châtiment canalisé supérieur', 'Charge radieuse', 'Chasseur métamorphe', 'Chute ralentie', 
'Cœur de vermine', 'Coeur vaillant', 'Collectionneur planaire', 'Combat à deux armes*', 'Double frappe*', 
'Éventration à deux armes*', 'Double tueur', 'Enchantement dual', 'Feinte à deux armes*', 'Science du combat à deux armes*', 
'Combat à deux armes supérieur*', 'Science de la feinte à deux armes*', 'Défense à deux armes*', 'Combat à plusieurs armes*', 'Combat en aveugle*', 
'Science du combat en aveugle*', 'Maîtrise du combat en aveugle*', 'Combat monté*', 'Astuce d’équitation*', 'Tirailleur monté*', 
'Bouclier pour la monture*', 'Tir monté*', 'Attaque au galop*', 'Charge dévastatrice*', 'Piétinement*', 
'Désarçonner*', 'Combattant de spectacle*', 'Maître du combat de spectacle*', 'Combattant psychique*', 'Combattre au-delà de la mort', 
'Compagnon évolué', 'Concentration rageuse', 'Conducteur de talent', 'Conducteur expérimenté', 'Conduit émotionnel', 
'Connaissance supérieure de la pierre', 'Perception via la pierre', 'Connaissances magiques étendues', 'Connaissances officieuses', 'Conseil de combat', 
'Contact magique bondissant', 'Contrôle des morts-vivants', 'Convocation sacrée', 'Convocations supplémentaires', 'Cosmopolite', 
'Coup dans l’ombre*', 'Coup de grâce de l’enragé', 'Coup final mortel*', 'Coup odieux*', 'Course', 
'Couteau de sorcière', 'Crâne allongé', 'Création d\'anneaux magiques', 'Création d’armes à feu', 'Création d\'armes et armures magiques', 
'Création de créatures artificielles', 'Création de reliques, armes ou boucliers', 'Création de baguettes magiques', 'Création de bâtons magiques', 'Création d\'objets merveilleux', 
'Création de sceptres magiques', 'Création de tatouages magiques', 'Cri de guerre*', 'Crocs acérés', 'Cul sec', 
'Déclenchement manuel', 'Découverte supplémentaire', 'Défense fantomatique', 'Défenseur psychique', 'Démarche de l’araignée', 
'Marche sur les nuages', 'Détection de l’expertise', 'Détection officieuse', 'Discernement ultérieur', 'Discret', 
'Dissipation destructrice', 'Doigts de fée', 'Don de l’esprit', 'Don pour les critiques*', 'Critique assourdissant*', 
'Critique aveuglant*', 'Critique d’empalement*', 'Science du critique d’empalement*', 'Critique fatigant*', 'Critique épuisant*', 
'Critique fébrile*', 'Critique handicapant*', 'Critique ralentissant*', 'Critique étourdissant*', 'Critique sanglant*', 
'Critique maudit', 'Critique de plaie', 'Critique de plaie supérieur', 'Maîtrise du critique de plaie', 'Maîtrise du critique*', 
'Précision sournoise', 'Donner l’initiative', 'Douleur composée*', 'Dispense de composantes matérielles', 'Éclats d’arme', 
'Éclectisme', 'École renforcée', 'Amélioration des créatures convoquées', 'Convocation supérieure', 'Monstre invoqué évolué', 
'Art du devin', 'Convocation lunaire', 'Convocation solaire', 'Convocation stellaire', 'École supérieure', 
'Maître des morts-vivants', 'Transmutation tenace', 'Spécialisation magique', 'Spécialisation magique supérieure', 'Écriture de parchemins', 
'Efficacité des sorts accrue', 'Efficacité des sorts accrue supérieure', 'Eidolon concentré', 'Eidolon protecteur', 'Eidolon résilient', 
'Eidolon vigilant', 'Élément renforcé', 'Élément supérieur', 'Empathe', 'Empathie rapide', 
'Empathie sauvage supérieure', 'Endurance', 'Combattre dans la tempête*', 'Dur à cuire', 'Développement de la résistance', 
'Science du développement de la résistance', 'Guérison rapide', 'Récupération héroïque', 'Résistance héroïque', 'Refuser la mort', 
'Enquêteur amateur', 'Combattant étudié', 'Science du combattant étudié', 'Ennemi des métamorphes', 'Entraînement défensif aux armes*', 
'Équilibre spirituel', 'Esprit concentré', 'Esquive*', 'Lanceur à courte distance*', 'Fausse ouverture*', 
'Manœuvre de désorientation', 'Souplesse du serpent*', 'Acrobate rusé*', 'Attaque éclair*', 'Esquive anticipée*', 
'Contre-réflexes*', 'Glissade', 'Pas de côté*', 'Science du pas de côté*', 'Roulade*', 
'Sous les jambes*', 'Comme le vent*', 'Comme l’éclair*', 'Esquive acrobatique', 'Étrange héritage', 
'Science de l’étrange héritage', 'Étrange héritage supérieur', 'Étreinte fatale*', 'Horreur de l’étreinte fatale*', 'Maître de l’étreinte fatale*', 
'Évolutions supplémentaires', 'Expériences variées', 'Expertise magique mineure', 'Expertise magique majeure', 'Expertise du combat*', 
'Aide rapide*', 'Attaque en groupe*', 'Travail en équipe*', 'Manoeuvre surprise', 'Renvoi de l’insaisissable', 
'Seconde chance*', 'Science de la seconde chance*', 'Science du désarmement*', 'Briser la garde*', 'Coup désarmant*', 
'Désarmement supérieur*', 'Désarmement contrôlé*', 'Science de la feinte*', 'Échange trompeur', 'Feinte de dégagement*', 
'Dégagement flamboyant*', 'Coup de dégagement*', 'Feinte supérieure*', 'Science du croc-en-jambe*', 'Coup déséquilibrant*', 
'Croc-en-jambe supérieur*', 'Croc-en-jambe au bâton*', 'Balayage au bâton*', 'Entraîner au sol*', 'Lancer ki*', 
'Entrave à distance*', 'Bousculade tourbillonnante*', 'Science du lancer ki*', 'Science du repositionnement*', 'Coup repositionnant*', 
'Repositionnement rapide*', 'Repositionnement supérieur*', 'Science du sale coup*', 'Sale coup rapide*', 'Sale coup supérieur*', 
'Science de la subtilisation*', 'Subtilisation rapide*', 'Subtilisation supérieure*', 'Attaque en rotation*', 'Exploitation arcanique supplémentaire', 
'Exploitation des connaissances', 'Explosion d’adieu', 'Explosion retardée', 'Extension de pouvoir magique', 'Familier évolué', 
'Familier libéré', 'Familier supérieur', 'Fantôme concentré', 'Fantôme vigilant', 'Feinte hypnotique*', 
'Feinte hypnotique supérieure*', 'Feinte jumelée*', 'Fente*', 'Flexibilité martiale supplémentaire', 'Focalisation instrumentale', 
'Focalisation mentale supplémentaire', 'Foi absolue', 'Force de propulsion', 'Force intimidante*', 'Tuerie fracassante*', 
'Massacre effroyable*', 'Forme animale optimale', 'Forme animale planaire', 'Forme animale rapide', 'Forme puissante', 
'Fort lien avec un instrument', 'Fourberie', 'Frappe bénie', 'Frappe décisive*', 'Coup final violent*', 
'Frappe dévastatrice*', 'Science de la frappe dévastatrice*', 'Frappe agrippante*', 'Frappe de l’hiver*', 'Frappe féerique*', 
'Science de la frappe décisive*', 'Frappe décisive supérieure*', 'Frappe inspirée', 'Frappe magique*', 'Critique de dissipation*', 
'Frappe déchirante*', 'Frappe magique sanguine*', 'Frappe sanglante ensorcelée', 'Fraternité animale', 'Fuite renversante*', 
'Gardien spirituel', 'Gnome hanté*', 'Assaut de gnome hanté*', 'Linceul de gnome hanté*', 'Grâce supérieure', 
'Grâce ultime', 'Grâce supplémentaire', 'Griffes coupantes*', 'Griffes magiques*', 'Grimpeur bien accroché', 
'Gros buveur', 'Guérison psychique', 'Guérison vertueuse', 'Guerrier fantôme', 'Guide divin', 
'Haine cinglante*', 'Préjugé extrême', 'Halfelin porte-chance', 'Héritage monastique*', 'Héritage racial', 
'Homme de main*', 'Imitation animale prolongée', 'Imitation du traqueur', 'Implantation de bombe', 'Imposition des mains supplémentaire', 
'Inaperçu', 'Incantation animale', 'Incantation contre un ennemi juré', 'Incantation rageuse', 'Induction d’hypnotiseur supplémentaire', 
'Ingénieur de siège*', 'Maître ingénieur de siège*', 'Tireur à l’arme de siège*', 'Initié du chakra', 'Adepte du chakra', 
'Maître du chakra', 'Initié du refus de mourir*', 'Maître du refus de mourir*', 'Zélote du refus de mourir*', 'Inoculation perspicace', 
'Inspiration concentrée', 'Inspiration supplémentaire', 'Interférence divine', 'Intuition partagée', 'Intuition prophétique', 
'Invocateur de squelettes', 'Invocation de conduits', 'Jugement partagé', 'Jugement instantané', 'Jugement partial', 
'Jugement renforcé', 'Ki supplémentaire', 'Lacération furieuse*', 'Science de la lacération furieuse*', 'Lacération furieuse supérieure*', 
'Lai de la terre', 'Lancer à deux mains*', 'Lancer improvisé*', 'Arme à aspersion à ricochet', 'Lanceur enragé', 
'Maîtrise des armes improvisées*', 'Lanceur à distance*', 'Langue sauvage', 'Lutteur des bars*', 'Maestro psychique', 
'Mage talentueux', 'Magie de guerre', 'Concentration instinctive', 'Magie de la nature', 'Maître alchimiste', 
'Maître artisan', 'Maître des chevaux*', 'Maîtrise des armes de spectacle*', 'Maîtrise des sorts', 'Magie flexible', 
'Science de la magie flexible', 'Maîtrise du combat défensif*', 'Maléfice flexible', 'Maléfice magique', 'Maléfice maudit', 
'Maléfice supplémentaire', 'Maniement des armes courantes', 'Maniement d\'une arme de guerre', 'Maniement d\'une arme exotique*', 'Adepte du filet*', 
'Filet et trident*', 'Manœuvrer le filet*', 'Ruse au filet*', 'Maniement des boucliers', 'Science du coup de bouclier*', 
'Frappe du bouclier*', 'Maîtrise du bouclier*', 'Coup de bouclier opportuniste*', 'Art du bouclier*', 'Art du bouclier supérieur*', 
'Bouclier contre les projectiles*', 'Bouclier contre les rayons*', 'Bouclier protecteur*', 'Spécialisation au bouclier*', 'Spécialisation supérieure aux boucliers*', 
'Bouclier salvateur*', 'Maniement du pavois*', 'Mur de boucliers canalisé', 'Manœuvres agiles*', 'Par-dessus et par-dessous*', 
'Marqué pour punir', 'Marteler la faille*', 'Mémoire des formules', 'Métamagie spontanée', 'Meurs pour ton maître', 
'Meurtre silencieux*', 'Modification de paysage mental binaire', 'Monture de taille inférieure*', 'Mot de guérison', 'Mort venue du ciel*', 
'Musique flamboyante', 'Odorat supérieur', 'Perception de la peur', 'Oeil du juge', 'Optimisation de la frappe magique', 
'Oracle du péché', 'Palpation curative supplémentaire', 'Parade cinétique', 'Parle-esprit', 'Passer pour un humain', 
'Peau de fer', 'Perception des esprits', 'Perfection magique', 'Personnalité affirmée', 'Persuasion', 
'Coup déloyal', 'Fioritures rhétoriques', 'Perturbateur*', 'Briseur de sorts*', 'Tacticien de la téléportation', 
'Pied marin', 'Piège de rodeur étendu', 'Piège de rôdeur évolué', 'Piège de rôdeur supplémentaire', 'Pistolier amateur*', 
'Pivotement', 'Port des armures légères', 'Entraînement aux armures renforcé*', 'Port de l’armure magique*', 'Port des armures intermédiaires', 
'Maîtrise de l’armure magique*', 'Port des armures lourdes', 'Pouvoir de focalisation supplémentaire', 'Pouvoir de rage supplémentaire', 'Pouvoir de résonance accru', 
'Pouvoir magique rapide', 'Précision elfique', 'Première volée*', 'Prendre l’avantage*', 'Préparation de potions', 
'Création d’élixir sanguin', 'Préparation étendue', 'Présence cachée', 'Présence manipulatrice', 'Présence intrusive', 
'Prestidigitateur gnome', 'Prestige', 'Prêt à se battre', 'Prêt à souffrir', 'Prêt de canalisation', 
'Prêtre guerrier', 'Proche de la terre', 'Prodige', 'Profil bas*', 'Protection contre un ennemi juré', 
'Protection divine', 'Rage retrouvée', 'Rageur talentueux', 'Raillerie', 'Rapide', 
'Rage supplémentaire', 'Rayon d\'énergie canalisée', 'Rechargement rapide*', 'Maîtrise des arbalètes*', 'Récompense de grâce', 
'Récompense de vie', 'Réflexes surhumains', 'Science des réflexes surhumains', 'Regard étendu', 'Regard hypnotique intimidant*', 
'Regard intimidant', 'Regard pénétrant', 'Renaissance canalisée', 'Renvoi des morts-vivants', 'Réparations de fortune', 
'Répartition des maléfices', 'Répartition des maléfices majeurs', 'Représentation intimidante', 'Représentation obsédante', 'Représentation supplémentaire', 
'Réserve magique supplémentaire', 'Réserve phrénique accrue', 'Réservoir supplémentaire', 'Résilience renforcée', 'Responsable du siège*', 
'Retour en force', 'Révélation supplémentaire', 'Rêveur lucide', 'Riposte*', 'Robustesse', 
'Roublard studieux', 'S’avancer*', 'Poursuite*', 'Avance et frappe*', 'Sabotage magique', 
'Sage harmonique', 'Sang manifeste', 'Sang rageur', 'Saut cinétique', 'Science de la canalisation', 
'Science de la connaissance des monstres', 'Science de l’initiative*', 'Science du chant funèbre', 'Chant funèbre supérieur', 'Science du combat à mains nues*', 
'Artiste du KO', 'Contre-droite*', 'Coup bouleversant*', 'Coup étourdissant*', 'Briser la mâchoire*', 
'Briser les os*', 'Briser le cou*', 'Coup écrasant*', 'Étourdir l’immobile*', 'Coup mémorable*', 
'Coup parfait*', 'École du scorpion*', 'Poing de la gorgone*', 'Fureur de la méduse*', 'Coup de la cockatrice*', 
'Frappe de la vipère*', 'Empoisonneur précis*', 'Frappe de domaine*', 'Frappe de l’école*', 'Frappe drainante', 
'Frappe ensorcelée', 'Frappe maléfique*', 'Frappe paralysante*', 'Frappe révélatrice*', 'Maître des écoles de combat*', 
'Parade de projectiles*', 'Capture de projectiles*', 'Renvoi de projectile*', 'Piétinement vicieux*', 'Poing de cauchemar*', 
'Tisseur de cauchemar*', 'Frappe de cauchemar*', 'Poing déstabilisant*', 'Poing élémentaire*', 'Poing du croisé*', 
'Poing de dissipation', 'Poing hébétant*', 'Science de la lutte*', 'Bouclier vivant*', 'Étreinte étouffante*', 
'KO sur l’immobile*', 'Lutte supérieure*', 'Éventration de l’immobile*', 'Lutteur rapide*', 'Strangulation*', 
'Toucher de la sérénité*', 'Science du contresort', 'Parade de sorts', 'Science du critique*', 'Science du partage des sorts', 
'Sensibilité psychique', 'Adepte psychique', 'Disciple psychique', 'Sens très affûtés', 'Se relever avec le ki', 
'Sociable', 'Sort de prédilection', 'Souvenir destructeur', 'Surprise*', 'Synergie de dissipation', 
'Synergie des sens', 'Tacticien expérimenté', 'Talent', 'Linguistique ésotérique', 'Orateur', 
'Talent d’enquêteur supplémentaire', 'Talent de tueur supplémentaire', 'Talent magique', 'Talent sauvage supplémentaire', 'Talent supplémentaire', 
'Terreur inspiratrice', 'Théurgie', 'Tir à bout portant*', 'Impact du tir critique*', 'Lancer lors d’une charge*', 
'Science du lancer lors d’une charge*', 'Tir de loin*', 'Tir lobé*', 'Tir de précision*', 'Aspersion contrôlée*', 
'Tir avec concentration*', 'Tir de sommation*', 'Tirs groupés*', 'Science du tir de précision*', 'Viser juste*', 
'Tir en mouvement*', 'Tir en retraite*', 'Tir impitoyable*', 'Tir optimisé*', 'Tir perturbateur*', 
'Tir rapide*', 'Coup de flèche*', 'Feu nourri*', 'Tir soudain*', 'Épée et pistolet*', 
'Science du tir soudain*', 'Tir soudain supérieur*', 'Tireur à la fronde couché*', 'Tonnerres jumeaux*', 'Déluge des tonnerres jumeaux*', 
'Maître des tonnerres jumeaux*', 'Touche d’ombre*', 'Tour de passe-passe*', 'Tours de magie ou oraisons supplémentaires', 'Tumeur aberrante', 
'Traits supplémentaires', 'Transfert de sort distant', 'Transfert longue distance', 'Traqueur au clair de lune*', 'Feinte du traqueur au clair de lune*', 
'Maître de la traque au clair de lune*', 'Troisième oeil', 'Tueur intimidant', 'Tueur miséricordieux', 'Tueur menaçant', 
'Tueur prolongé', 'Tueur supplémentaire', 'Ultime fermeté', 'Vigilance', 'Vigilance instinctive', 
'Vigueur du scalde', 'Vigueur surhumaine du scalde', 'Vigueur en rage', 'Vigueur surhumaine', 'Science de la vigueur surhumaine', 
'Virage sur l\'aile', 'Virtuose psychique', 'Visage de pierre', 'Viser*', 'Croc-en-jambe à distance*', 
'Désarmement à distance*', 'Tireur astucieux*', 'Traction exceptionnelle*', 'Vision affûtée', 'Vision prophétique', 
'Voix de la sibylle', 'Voix discordante', 'Vol stationnaire', 'Volonté de fer', 'Science de la volonté de fer', 
'Voltigeur', 'Feinte du tueur*', 'Ramassage acrobatique*', 'Xénoglossie', 'Yeux de lynx');

	$dataLen = count($data);
	
	sort($data); // On trie les dons dans l'ordre alphabétique
	
	$results = array(); // Le tableau où seront stockés les résultats de la recherche
	
	// La boucle ci-dessous parcourt tout le tableau $data, jusqu'à un maximum de 10 résultats
	
	for ($i = 0 ; $i < $dataLen && count($results) < 10 ; $i++) {
	    if (stripos($data[$i], $_GET['s']) === 0) { // Si la valeur commence par les mêmes caractères que la recherche
	        array_push($results, $data[$i]); // On ajoute alors le résultat à la liste à retourner
	    }
	};
	
	echo implode('|', $results); // Et on affiche les résultats séparés par une barre verticale |
?>

<span style="color: rgb(252, 233, 79); font-size: x-large; background-color: rgb(204, 0, 0);">( ! )</span> Parse error: syntax error, unexpected 'une' (T_STRING), expecting ')' in C:\wamp64\www\Pathfinder\search.php on line <i>101</i>