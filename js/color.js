$(function() {
	if ($('#nom_du_personnage').val(' ')) {
		$('#nom_du_personnage').focus();
		$('#nom_du_personnage').css('background','#B0F2B6');
	};

	$('#nom_du_personnage').change(function() {
		$('#nom_du_personnage').css('background','#FFFFFF');
		$('#alignement').focus();
		$('#alignement').css('background','#B0F2B6');
    });

	$('#alignement').change(function() {
		$('#alignement').css('background','#FFFFFF');
		$('#nom_du_joueur').focus();
		$('#nom_du_joueur').css('background','#B0F2B6');
    });

	$('#nom_du_joueur').change(function() {
		$('#nom_du_joueur').css('background','#FFFFFF');
		$('#classe').focus();
	    $('#classe').css('background','#B0F2B6');
    });

    $('#classe').change(function() {
		$('#classe').css('background','#FFFFFF');
		$('#niveau').focus();
		$('#niveau').css('background','#B0F2B6');
    });

	$('#niveau').change(function() {
		$('#niveau').css('background','#FFFFFF');
		$('#origine').focus();
		$('#origine').css('background','#B0F2B6');
    });

	$('#origine').change(function() {
		$('#origine').css('background','#FFFFFF');
		$('#divinite').focus();
		$('#divinite').css('background','#B0F2B6');
    });

	$('#divinite').change(function() {
		$('#divinite').css('background','#FFFFFF');
		$('#race').focus();
		$('#race').css('background','#B0F2B6');
    });

	$('#race').change(function() {
//		$('#cat_taille').focus();
//		$('#cat_taille').css('background','#B0F2B6');
//    });

//	$('#cat_taille').change(function() {
		$('#race').css('background','#FFFFFF');
		$('#sexe').focus();
		$('#sexe').css('background','#B0F2B6');
    });

	$('#sexe').change(function() {
		$('#sexe').css('background','#FFFFFF');
		$('#saisie_age').focus();
		$('#saisie_age').css('background','#B0F2B6');
    });

	$('#saisie_age').change(function() {
		$('#saisie_age').css('background','#FFFFFF');
		$('#saisie_taille').focus();
		$('#saisie_taille').css('background','#B0F2B6');
    });

	$('#saisie_taille').change(function() {
		$('#saisie_taille').css('background','#FFFFFF');
		$('#saisie_poids').focus();
		$('#saisie_poids').css('background','#B0F2B6');
    });

	$('#saisie_poids').change(function() {
		$('#saisie_poids').css('background','#FFFFFF');
		$('#cheveux').focus();
		$('#cheveux').css('background','#B0F2B6');
    });

	$('#cheveux').change(function() {
		$('#cheveux').css('background','#FFFFFF');
		$('#yeux').focus();
		$('#yeux').css('background','#B0F2B6');
    });

	$('#yeux').change(function() {
		$('#yeux').css('background','#FFFFFF');
		$('#for_saisie').focus();
		$('#for_saisie').css('background','#B0F2B6');
    });

	$('#for_saisie').change(function() {
		$('#for_saisie').css('background','#FFFFFF');
		$('#dex_saisie').focus();
		$('#dex_saisie').css('background','#B0F2B6');
    });

	$('#dex_saisie').change(function() {
		$('#dex_saisie').css('background','#FFFFFF');
		$('#con_saisie').focus();
		$('#con_saisie').css('background','#B0F2B6');
    });

	$('#con_saisie').change(function() {
		$('#con_saisie').css('background','#FFFFFF');
		$('#int_saisie').focus();
		$('#int_saisie').css('background','#B0F2B6');
    });

	$('#int_saisie').change(function() {
		$('#int_saisie').css('background','#FFFFFF');
		$('#sag_saisie').focus();
		$('#sag_saisie').css('background','#B0F2B6');
    });

	$('#sag_saisie').change(function() {
		$('#sag_saisie').css('background','#FFFFFF');
		$('#cha_saisie').focus();
		$('#cha_saisie').css('background','#B0F2B6');
    });

	$('#cha_saisie').change(function() {
		$('#cha_saisie').css('background','#FFFFFF');
		$('#point_de_vie_total').focus();
		$('#point_de_vie_total').css('background','#B0F2B6');
    });

	$('#point_de_vie_total').change(function() {
		$('#point_de_vie_total').css('background','#FFFFFF');
		$('#ca_bon_arm').focus();
		$('#ca_bon_arm').css('background','#B0F2B6');
    });

	$('#ca_bon_arm').change(function() {
		$('#ca_bon_arm').css('background','#FFFFFF');
		$('#ca_bon_bou').focus();
		$('#ca_bon_bou').css('background','#B0F2B6');
    });

	$('#ca_bon_bou').change(function() {
		$('#ca_bon_bou').css('background','#FFFFFF');
		$('#famille_arme_I').focus();
		$('#famille_arme_I').css('background','#B0F2B6');
    });

	$('#famille_arme_I').change(function() {
		$('#famille_arme_I').css('background','#FFFFFF');
		$('#maniement_arme_I').focus();
		$('#maniement_arme_I').css('background','#B0F2B6');
    });

	$('#maniement_arme_I').change(function() {
		$('#maniement_arme_I').css('background','#FFFFFF');
		$('#arme_I').focus();
		$('#arme_I').css('background','#B0F2B6');
    });

	$('#arme_I').change(function() {
		$('#arme_I').css('background','#FFFFFF');
		$('#bonus_I').focus();
		$('#bonus_I').css('background','#B0F2B6');
    });

	$('#bonus_I').change(function() {
		$('#bonus_I').css('background','#FFFFFF');
		$('#famille_arme_II').focus();
		$('#famille_arme_II').css('background','#B0F2B6');
    });

	$('#famille_arme_II').change(function() {
		$('#famille_arme_II').css('background','#FFFFFF');
		$('#maniement_arme_II').focus();
		$('#maniement_arme_II').css('background','#B0F2B6');
    });

	$('#maniement_arme_II').change(function() {
		$('#maniement_arme_II').css('background','#FFFFFF');
		$('#arme_II').focus();
		$('#arme_II').css('background','#B0F2B6');
    });

	$('#arme_II').change(function() {
		$('#arme_II').css('background','#FFFFFF');
		$('#bonus_II').focus();
		$('#bonus_II').css('background','#B0F2B6');
    });

	$('#bonus_II').change(function() {
		$('#bonus_II').css('background','#FFFFFF');
		$('#famille_arme_III').focus();
		$('#famille_arme_III').css('background','#B0F2B6');
    });

	$('#famille_arme_III').change(function() {
		$('#famille_arme_III').css('background','#FFFFFF');
		$('#maniement_arme_III').focus();
		$('#maniement_arme_III').css('background','#B0F2B6');
    });

	$('#maniement_arme_III').change(function() {
		$('#maniement_arme_III').css('background','#FFFFFF');
		$('#arme_III').focus();
		$('#arme_III').css('background','#B0F2B6');
    });

	$('#arme_III').change(function() {
		$('#arme_III').css('background','#FFFFFF');
		$('#bonus_III').focus();
		$('#bonus_III').css('background','#B0F2B6');
    });

	$('#bonus_III').change(function() {
		$('#bonus_III').css('background','#FFFFFF');
		$('#famille_arme_IV').focus();
		$('#famille_arme_IV').css('background','#B0F2B6');
    });

	$('#famille_arme_IV').change(function() {
		$('#famille_arme_IV').css('background','#FFFFFF');
		$('#maniement_arme_IV').focus();
		$('#maniement_arme_IV').css('background','#B0F2B6');
    });

	$('#maniement_arme_IV').change(function() {
		$('#maniement_arme_IV').css('background','#FFFFFF');
		$('#arme_IV').focus();
		$('#arme_IV').css('background','#B0F2B6');
    });

	$('#arme_IV').change(function() {
		$('#arme_IV').css('background','#FFFFFF');
		$('#bonus_IV').focus();
		$('#bonus_IV').css('background','#B0F2B6');
    });

	$('#bonus_IV').change(function() {
		$('#bonus_IV').css('background','#FFFFFF');
		$('#famille_arme_V').focus();
		$('#famille_arme_V').css('background','#B0F2B6');
    });

	$('#famille_arme_V').change(function() {
		$('#famille_arme_V').css('background','#FFFFFF');
		$('#maniement_arme_V').focus();
		$('#maniement_arme_V').css('background','#B0F2B6');
    });

	$('#maniement_arme_V').change(function() {
		$('#maniement_arme_V').css('background','#FFFFFF');
		$('#arme_V').focus();
		$('#arme_V').css('background','#B0F2B6');
    });

	$('#arme_V').change(function() {
		$('#arme_V').css('background','#FFFFFF');
		$('#bonus_V').focus();
		$('#bonus_V').css('background','#B0F2B6');
    });

	$('#bonus_V').change(function() {
		$('#bonus_V').css('background','#FFFFFF');
		$('#rang_Acrobatie').focus();
		$('#rang_Acrobatie').css('background','#B0F2B6');
    });

	$('#rang_Acrobatie').change(function() {
		$('#rang_Acrobatie').css('background','#FFFFFF');
		$('#rang_artisanat_I').focus();
		$('#rang_artisanat_I').css('background','#B0F2B6');
    });

	$('#rang_artisanat_I').change(function() {
		$('#rang_artisanat_I').css('background','#FFFFFF');
		$('#rang_artisanat_II').focus();
		$('#rang_artisanat_II').css('background','#B0F2B6');
    });

	$('#rang_artisanat_II').change(function() {
		$('#rang_artisanat_II').css('background','#FFFFFF');
		$('#rang_artisanat_III').focus();
		$('#rang_artisanat_III').css('background','#B0F2B6');
    });

	$('#rang_artisanat_III').change(function() {
		$('#rang_artisanat_III').css('background','#FFFFFF');
		$('#rang_artdelamagie').focus();
		$('#rang_artdelamagie').css('background','#B0F2B6');
    });

	$('#rang_artdelamagie').change(function() {
		$('#rang_artdelamagie').css('background','#FFFFFF');
		$('#rang_bluff').focus();
		$('#rang_bluff').css('background','#B0F2B6');
    });

	$('#rang_bluff').change(function() {
		$('#rang_bluff').css('background','#FFFFFF');
		$('#rang_Connaissances_exploration').focus();
		$('#rang_Connaissances_exploration').css('background','#B0F2B6');
    });

	$('#rang_Connaissances_exploration').change(function() {
		$('#rang_Connaissances_exploration').css('background','#FFFFFF');
		$('#rang_Connaissances_Folklore_Locale').focus();
		$('#rang_Connaissances_Folklore_Locale').css('background','#B0F2B6');
    });

	$('#rang_Connaissances_Folklore_Locale').change(function() {
		$('#rang_Connaissances_Folklore_Locale').css('background','#FFFFFF');
		$('#rang_Connaissances_Geographie').focus();
		$('#rang_Connaissances_Geographie').css('background','#B0F2B6');
    });

	$('#rang_Connaissances_Geographie').change(function() {
		$('#rang_Connaissances_Geographie').css('background','#FFFFFF');
		$('#rang_Connaissances_Histoire').focus();
		$('#rang_Connaissances_Histoire').css('background','#B0F2B6');
    });

	$('#rang_Connaissances_Histoire').change(function() {
		$('#rang_Connaissances_Histoire').css('background','#FFFFFF');
		$('#rang_Connaissances_Ingénieurie').focus();
		$('#rang_Connaissances_Ingénieurie').css('background','#B0F2B6');
    });

	$('#rang_Connaissances_Ingénieurie').change(function() {
		$('#rang_Connaissances_Ingénieurie').css('background','#FFFFFF');
		$('#rang_Connaissances_Mystères').focus();
		$('#rang_Connaissances_Mystères').css('background','#B0F2B6');
    });

	$('#rang_Connaissances_Mystères').change(function() {
		$('#rang_Connaissances_Mystères').css('background','#FFFFFF');
		$('#rang_Connaissances_Nature').focus();
		$('#rang_Connaissances_Nature').css('background','#B0F2B6');
    });

	$('#rang_Connaissances_Nature').change(function() {
		$('#rang_Connaissances_Nature').css('background','#FFFFFF');
		$('#rang_Connaissances_Noblesse').focus();
		$('#rang_Connaissances_Noblesse').css('background','#B0F2B6');
    });

	$('#rang_Connaissances_Noblesse').change(function() {
		$('#rang_Connaissances_Noblesse').css('background','#FFFFFF');
		$('#rang_Connaissances_Plan').focus();
		$('#rang_Connaissances_Plan').css('background','#B0F2B6');
    });

	$('#rang_Connaissances_Plan').change(function() {
		$('#rang_Connaissances_Plan').css('background','#FFFFFF');
		$('#rang_Connaissances_Religion').focus();
		$('#rang_Connaissances_Religion').css('background','#B0F2B6');
    });

	$('#rang_Connaissances_Religion').change(function() {
		$('#rang_Connaissances_Religion').css('background','#FFFFFF');
		$('#rang_deguisement').focus();
		$('#rang_deguisement').css('background','#B0F2B6');
    });

	$('#rang_deguisement').change(function() {
		$('#rang_deguisement').css('background','#FFFFFF');
		$('#rang_diplomatie').focus();
		$('#rang_diplomatie').css('background','#B0F2B6');
    });

	$('#rang_diplomatie').change(function() {
		$('#rang_diplomatie').css('background','#FFFFFF');
		$('#rang_discretion').focus();
		$('#rang_discretion').css('background','#B0F2B6');
    });

	$('#rang_discretion').change(function() {
		$('#rang_discretion').css('background','#FFFFFF');
		$('#rang_dressage').focus();
		$('#rang_dressage').css('background','#B0F2B6');
    });

	$('#rang_dressage').change(function() {
		$('#rang_dressage').css('background','#FFFFFF');
		$('#rang_equitation').focus();
		$('#rang_equitation').css('background','#B0F2B6');
    });

	$('#rang_equitation').change(function() {
		$('#rang_equitation').css('background','#FFFFFF');
		$('#rang_escalade').focus();
		$('#rang_escalade').css('background','#B0F2B6');
    });

	$('#rang_escalade').change(function() {
		$('#rang_escalade').css('background','#FFFFFF');
		$('#rang_escamotage').focus();
		$('#rang_escamotage').css('background','#B0F2B6');
    });

	$('#rang_escamotage').change(function() {
		$('#rang_escamotage').css('background','#FFFFFF');
		$('#aligrang_estimationnement').focus();
		$('#rang_estimation').css('background','#B0F2B6');
    });

	$('#rang_estimation').change(function() {
		$('#rang_estimation').css('background','#FFFFFF');
		$('#rang_evasion').focus();
		$('#rang_evasion').css('background','#B0F2B6');
    });

	$('#rang_evasion').change(function() {
		$('#rang_evasion').css('background','#FFFFFF');
		$('#rang_intimidation').focus();
		$('#rang_intimidation').css('background','#B0F2B6');
    });

	$('#rang_intimidation').change(function() {
		$('#rang_intimidation').css('background','#FFFFFF');
		$('#rang_linguistique').focus();
		$('#rang_linguistique').css('background','#B0F2B6');
    });

	$('#rang_linguistique').change(function() {
		$('#rang_linguistique').css('background','#FFFFFF');
		$('#rang_natation').focus();
		$('#rang_natation').css('background','#B0F2B6');
    });

	$('#rang_natation').change(function() {
		$('#rang_natation').css('background','#FFFFFF');
		$('#rang_perception').focus();
		$('#rang_perception').css('background','#B0F2B6');
    });

	$('#rang_perception').change(function() {
		$('#rang_perception').css('background','#FFFFFF');
		$('#rang_premiersecours').focus();
		$('#rang_premiersecours').css('background','#B0F2B6');
    });

	$('#rang_premiersecours').change(function() {
		$('#rang_premiersecours').css('background','#FFFFFF');
		$('#rang_profession_I').focus();
		$('#rang_profession_I').css('background','#B0F2B6');
    });

	$('#rang_profession_I').change(function() {
		$('#rang_profession_I').css('background','#FFFFFF');
		$('#rang_profession_II').focus();
		$('#rang_profession_II').css('background','#B0F2B6');
    });

	$('#rang_profession_II').change(function() {
		$('#rang_profession_II').css('background','#FFFFFF');
		$('#rang_psychologie').focus();
		$('#rang_psychologie').css('background','#B0F2B6');
    });

	$('#rang_psychologie').change(function() {
		$('#rang_psychologie').css('background','#FFFFFF');
		$('#rang_representation_I').focus();
		$('#rang_representation_I').css('background','#B0F2B6');
    });

	$('#rang_representation_I').change(function() {
		$('#rang_representation_I').css('background','#FFFFFF');
		$('#rang_representation_II').focus();
		$('#rang_representation_II').css('background','#B0F2B6');
    });

	$('#rang_representation_II').change(function() {
		$('#rang_representation_II').css('background','#FFFFFF');
		$('#rang_sabotage').focus();
		$('#rang_sabotage').css('background','#B0F2B6');
    });

	$('#rang_sabotage').change(function() {
		$('#rang_sabotage').css('background','#FFFFFF');
		$('#rang_survie').focus();
		$('#rang_survie').css('background','#B0F2B6');
    });

	$('#rang_survie').change(function() {
		$('#rang_survie').css('background','#FFFFFF');
		$('#rang_utilisationobjet').focus();
		$('#rang_utilisationobjet').css('background','#B0F2B6');
    });

	$('#rang_utilisationobjet').change(function() {
		$('#rang_utilisationobjet').css('background','#FFFFFF');
		$('#rang_vol').focus();
		$('#rang_vol').css('background','#B0F2B6');
    });

	$('#rang_vol').change(function() {
		$('#rang_vol').css('background','#FFFFFF');
		$('#objet_I').focus();
		$('#objet_I').css('background','#B0F2B6');
    });

	$('#objet_I').change(function() {
		$('#objet_I').css('background','#FFFFFF');
		$('#objet_II').focus();
		$('#objet_II').css('background','#B0F2B6');
    });

	$('#objet_II').change(function() {
		$('#objet_II').css('background','#FFFFFF');
		$('#objet_III').focus();
		$('#objet_III').css('background','#B0F2B6');
    });

	$('#objet_III').change(function() {
		$('#objet_III').css('background','#FFFFFF');
		$('#objet_IV').focus();
		$('#objet_IV').css('background','#B0F2B6');
    });

	$('#objet_IV').change(function() {
		$('#objet_IV').css('background','#FFFFFF');
		$('#objet_V').focus();
		$('#objet_V').css('background','#B0F2B6');
    });

	$('#objet_V').change(function() {
		$('#objet_V').css('background','#FFFFFF');
		$('#objet_VI').focus();
		$('#objet_VI').css('background','#B0F2B6');
    });

	$('#objet_VI').change(function() {
		$('#objet_VI').css('background','#FFFFFF');
		$('#objet_VII').focus();
		$('#objet_VII').css('background','#B0F2B6');
    });

	$('#objet_VII').change(function() {
		$('#objet_VII').css('background','#FFFFFF');
		$('#objet_VIII').focus();
		$('#objet_VIII').css('background','#B0F2B6');
    });

	$('#objet_VIII').change(function() {
		$('#objet_VIII').css('background','#FFFFFF');
		$('#objet_IX').focus();
		$('#objet_IX').css('background','#B0F2B6');
    });

	$('#objet_IX').change(function() {
		$('#objet_IX').css('background','#FFFFFF');
		$('#objet_X').focus();
		$('#objet_X').css('background','#B0F2B6');
    });

	$('#objet_X').change(function() {
		$('#objet_X').css('background','#FFFFFF');
		$('#objet_XI').focus();
		$('#objet_XI').css('background','#B0F2B6');
    });

	$('#objet_XI').change(function() {
		$('#objet_XI').css('background','#FFFFFF');
		$('#objet_XII').focus();
		$('#objet_XII').css('background','#B0F2B6');
    });

	$('#objet_XII').change(function() {
		$('#objet_XII').css('background','#FFFFFF');
		$('#objet_XIII').focus();
		$('#objet_XIII').css('background','#B0F2B6');
    });

	$('#objet_XIII').change(function() {
		$('#objet_XIII').css('background','#FFFFFF');
		$('#objet_XIV').focus();
		$('#objet_XIV').css('background','#B0F2B6');
    });

	$('#objet_XIV').change(function() {
		$('#objet_XIV').css('background','#FFFFFF');
		$('#objet_XV').focus();
		$('#objet_XV').css('background','#B0F2B6');
    });

	$('#objet_XV').change(function() {
		$('#objet_XV').css('background','#FFFFFF');
		$('#objet_XVI').focus();
		$('#objet_XVI').css('background','#B0F2B6');
    });

	$('#objet_XVI').change(function() {
		$('#objet_XVI').css('background','#FFFFFF');
		$('#objet_XVII').focus();
		$('#objet_XVII').css('background','#B0F2B6');
    });

	$('#objet_XVII').change(function() {
		$('#').css('background','#FFFFFF');
		$('#objet_XVIII').focus();
		$('#objet_XVIII').css('background','#B0F2B6');
    });

	$('#objet_XVIII').change(function() {
		$('#objet_XVIII').css('background','#FFFFFF');
		$('#objet_XIX').focus();
		$('#objet_XIX').css('background','#B0F2B6');
    });

	$('#objet_XIX').change(function() {
		$('#objet_XIX').css('background','#FFFFFF');
		$('#objet_XX').focus();
		$('#objet_XX').css('background','#B0F2B6');
    });

	$('#objet_XX').change(function() {
		$('#objet_XX').css('background','#FFFFFF');
		$('#objet_XXI').focus();
		$('#objet_XXI').css('background','#B0F2B6');
    });

	$('#objet_XXI').change(function() {
		$('#objet_XXI').css('background','#FFFFFF');
		$('#objet_XXII').focus();
		$('#objet_XXII').css('background','#B0F2B6');
    });

	$('#objet_XXII').change(function() {
		$('#objet_XXII').css('background','#FFFFFF');
		$('#objet_XXIII').focus();
		$('#objet_XXIII').css('background','#B0F2B6');
    });

	$('#objet_XXIII').change(function() {
		$('#objet_XXIII').css('background','#FFFFFF');
		$('#search_I').focus();
		$('#search_I').css('background','#B0F2B6');
    });

	$('#search_I').change(function() {
		$('#search_I').css('background','#FFFFFF');
		$('#search_II').focus();
		$('#search_II').css('background','#B0F2B6');
    });

	$('#search_II').change(function() {
		$('#search_II').css('background','#FFFFFF');
		$('#search_III').focus();
		$('#search_III').css('background','#B0F2B6');
    });

	$('#search_III').change(function() {
		$('#search_III').css('background','#FFFFFF');
		$('#search_IV').focus();
		$('#search_IV').css('background','#B0F2B6');
    });

	$('#search_IV').change(function() {
		$('#search_IV').css('background','#FFFFFF');
		$('#search_V').focus();
		$('#search_V').css('background','#B0F2B6');
    });

	$('#search_V').change(function() {
		$('#search_V').css('background','#FFFFFF');
		$('#search_VI').focus();
		$('#search_VI').css('background','#B0F2B6');
    });

	$('#search_VI').change(function() {
		$('#search_VI').css('background','#FFFFFF');
		$('#search_VII').focus();
		$('#search_VII').css('background','#B0F2B6');
    });

	$('#search_VII').change(function() {
		$('#search_VII').css('background','#FFFFFF');
		$('#search_VIII').focus();
		$('#search_VIII').css('background','#B0F2B6');
    });

	$('#search_VIII').change(function() {
		$('#search_VIII').css('background','#FFFFFF');
		$('#search_IX').focus();
		$('#search_IX').css('background','#B0F2B6');
    });

	$('#search_IX').change(function() {
		$('#search_IX').css('background','#FFFFFF');
		$('#search_X').focus();
		$('#search_X').css('background','#B0F2B6');
    });

	$('#search_X').change(function() {
		$('#search_X').css('background','#FFFFFF');
		$('#search_XI').focus();
		$('#search_XI').css('background','#B0F2B6');
    });

	$('#search_XI').change(function() {
		$('#search_XI').css('background','#FFFFFF');
		$('#search_XII').focus();
		$('#search_XII').css('background','#B0F2B6');
    });

	$('#search_XII').change(function() {
		$('#search_XII').css('background','#FFFFFF');
		$('#search_XIII').focus();
		$('#search_XIII').css('background','#B0F2B6');
    });

	$('#search_XIII').change(function() {
		$('#search_XIII').css('background','#FFFFFF');
		$('#search_XIV').focus();
		$('#search_XIV').css('background','#B0F2B6');
    });

	$('#search_XIV').change(function() {
		$('#search_XIV').css('background','#FFFFFF');
		$('#search_XV').focus();
		$('#search_XV').css('background','#B0F2B6');
    });

	$('#search_XV').change(function() {
		$('#search_XV').css('background','#FFFFFF');
		$('#search_XVI').focus();
		$('#search_XVI').css('background','#B0F2B6');
    });

	$('#search_XVI').change(function() {
		$('#search_XVI').css('background','#FFFFFF');
		$('#search_XVII').focus();
		$('#search_XVII').css('background','#B0F2B6');
    });

	$('#search_XVII').change(function() {
		$('#search_XVII').css('background','#FFFFFF');
		$('#search_XVIII').focus();
		$('#search_XVIII').css('background','#B0F2B6');
    });

	$('#search_XVIII').change(function() {
		$('#search_XVIII').css('background','#FFFFFF');
		$('#search_XIX').focus();
		$('#search_XIX').css('background','#B0F2B6');
    });

	$('#search_XIX').change(function() {
		$('#search_XIX').css('background','#FFFFFF');
		$('#search_XX').focus();
		$('#search_XX').css('background','#B0F2B6');
    });

	$('#search_XX').change(function() {
		$('#search_XX').css('background','#FFFFFF');
		$('#search_XXI').focus();
		$('#search_XXI').css('background','#B0F2B6');
    });

//	$('#search_XXI').change(function() {
//		$('#alignement').focus();
//  });
});
    