$(function() {
    $('#classe').change(function() {
        switch($('#classe').val()) {
            case ' ' :
                $('#titre_feuille').text('PATHFINDER');
                break;
            case 'Barbare' :
                $('#titre_feuille').text('BARBARE');
                break;
            case 'Barde' :
                $('#titre_feuille').text('BARDE');
                break;
            case 'Druide' :
                $('#titre_feuille').text('DRUIDE');
                break;
            case 'Ensorceleur' :
                $('#titre_feuille').text('ENSORCELEUR');
                break;
            case 'Guerrier' :
                $('#titre_feuille').text('GUERRIER');
                break;
            case 'Magicien' :
                $('#titre_feuille').text('MAGICIEN');
                break;
            case 'Moine' :
                $('#titre_feuille').text('MOINE');
                break;
            case 'Paladin' :
                $('#titre_feuille').text('PALADIN');
                break;
            case 'Prêtre' :
                $('#titre_feuille').text('PRETRE');
                break;
            case 'Rôdeur' :
                $('#titre_feuille').text('RODEUR');
                break;
            case 'Roublard' :
                $('#titre_feuille').text('ROUBLARD');
                break;
            default:
                $('#titre_feuille').text('PATHFINDER');
            }
    });

    function remiseAZero() {
                $('#classe').css('background','#F0F0F0');
    	$('#acrobatie').html('<h2>O</h2>');
    	$('#artisanat_I').html('<h2>O</h2>');
        $('#artisanat_II').html('<h2>O</h2>');
        $('#artisanat_III').html('<h2>O</h2>');
        $('#art_de_la_magie').html('<h2>O</h2>');
        $('#bluf').html('<h2>O</h2>');
        $('#connaissances_I').html('<h2>O</h2>');
        $('#connaissances_II').html('<h2>O</h2>');
        $('#connaissances_III').html('<h2>O</h2>');
        $('#connaissances_IV').html('<h2>O</h2>');
        $('#connaissances_V').html('<h2>O</h2>');
        $('#connaissances_VI').html('<h2>O</h2>');
        $('#connaissances_VII').html('<h2>O</h2>');
        $('#connaissances_VIII').html('<h2>O</h2>');
        $('#connaissances_IX').html('<h2>O</h2>');
        $('#connaissances_X').html('<h2>O</h2>');
        $('#déguisement').html('<h2>O</h2>');
        $('#diplomatie').html('<h2>O</h2>');
        $('#discrétion').html('<h2>O</h2>');
        $('#dressage').html('<h2>O</h2>');
        $('#equitation').html('<h2>O</h2>');
        $('#escalade').html('<h2>O</h2>');
        $('#escamotage').html('<h2>O</h2>');
        $('#estimation').html('<h2>O</h2>');
        $('#évasion').html('<h2>O</h2>');
        $('#intimidation').html('<h2>O</h2>');
        $('#linguistique').html('<h2>O</h2>');
        $('#natation').html('<h2>O</h2>');
        $('#perception').html('<h2>O</h2>');
        $('#premier_secours').html('<h2>O</h2>');
        $('#profession_I').html('<h2>O</h2>');
        $('#profession_II').html('<h2>O</h2>');
        $('#psychologie').html('<h2>O</h2>');
        $('#représentation_I').html('<h2>O</h2>');
        $('#représentation_II').html('<h2>O</h2>');
        $('#sabotage').html('<h2>O</h2>');
        $('#survie').html('<h2>O</h2>');
        $('#utilisation_d_objets_magiques').html('<h2>O</h2>');
        $('#vol').html('<h2>O</h2>');
    }

    $('#classe').change(function() {
        switch($('#classe').val()) {
    		case ' ' :
    			remiseAZero();
    			break;
    		case 'Barbare' :
    			remiseAZero();
                $('#acrobatie').html('<h2>X</h2>');
    			$('#artisanat_I').html('<h2>X</h2>');
        		$('#artisanat_II').html('<h2>X</h2>');
                $('#connaissances_I').html('<h2>X</h2>');
        		$('#dressage').html('<h2>X</h2>');
        		$('#equitation').html('<h2>X</h2>');
        		$('#escalade').html('<h2>X</h2>');
        		$('#intimidation').html('<h2>X</h2>');
        		$('#natation').html('<h2>X</h2>');
        		$('#perception').html('<h2>X</h2>');
        		$('#survie').html('<h2>X</h2>');
    			break;
    		case 'Barde' :
    			remiseAZero();
    			$('#acrobatie').html('<h2>X</h2>');
    			$('#art_de_la_magie').html('<h2>X</h2>');
    			$('#artisanat_I').html('<h2>X</h2>');
        		$('#artisanat_II').html('<h2>X</h2>');
        		$('#artisanat_III').html('<h2>X</h2>');
        		$('#bluf').html('<h2>X</h2>');
        		$('#concentration').html('<h2>X</h2>');
        		$('#connaissances_I').html('<h2>X</h2>');
        		$('#connaissances_II').html('<h2>X</h2>');
        		$('#connaissances_III').html('<h2>X</h2>');
        		$('#connaissances_IV').html('<h2>X</h2>');
        		$('#connaissances_V').html('<h2>X</h2>');
        		$('#décriptage').html('<h2>X</h2>');
        		$('#déguisement').html('<h2>X</h2>');
        		$('#déplacement_silencieux').html('<h2>X</h2>');
        		$('#diplomatie').html('<h2>X</h2>');
        		$('#discrétion').html('<h2>X</h2>');
        		$('#equilibre').html('<h2>X</h2>');
        		$('#escalade').html('<h2>X</h2>');
        		$('#escamotage').html('<h2>X</h2>');
        		$('#estimation').html('<h2>X</h2>');
        		$('#évasion').html('<h2>X</h2>');
        		$('#langues').html('<h2>X</h2>');
        		$('#natation').html('<h2>X</h2>');
        		$('#perception_auditive').html('<h2>X</h2>');
        		$('#profession_I').html('<h2>X</h2>');
        		$('#profession_II').html('<h2>X</h2>');
        		$('#psychologie').html('<h2>X</h2>');
        		$('#renseignements').html('<h2>X</h2>');
        		$('#représentation_I').html('<h2>X</h2>');
        		$('#représentation_II').html('<h2>X</h2>');
        		$('#représentation_III').html('<h2>X</h2>');
        		$('#saut').html('<h2>X</h2>');
        		$('#utilisation_d_objets_magiques').html('<h2>X</h2>');
    			break;
    		case 'Druide' :
    			remiseAZero();
    			$('#art_de_la_magie').html('<h2>X</h2>');
    			$('#artisanat_I').html('<h2>X</h2>');
        		$('#artisanat_II').html('<h2>X</h2>');
        		$('#artisanat_III').html('<h2>X</h2>');
        		$('#concentration').html('<h2>X</h2>');
        		$('#connaissances_I').html('<h2>X</h2>');
        		$('#détection').html('<h2>X</h2>');
        		$('#diplomatie').html('<h2>X</h2>');
        		$('#dressage').html('<h2>X</h2>');
        		$('#equitation').html('<h2>X</h2>');
        		$('#natation').html('<h2>X</h2>');
        		$('#perception_auditive').html('<h2>X</h2>');
        		$('#premier_secours').html('<h2>X</h2>');
        		$('#profession_I').html('<h2>X</h2>');
        		$('#profession_II').html('<h2>X</h2>');
        		$('#saut').html('<h2>X</h2>');
        		$('#survie').html('<h2>X</h2>');
    			break;
    		case 'Ensorceleur' :
    			remiseAZero();
    			$('#art_de_la_magie').html('<h2>X</h2>');
    			$('#artisanat_I').html('<h2>X</h2>');
        		$('#artisanat_II').html('<h2>X</h2>');
        		$('#artisanat_III').html('<h2>X</h2>');
        		$('#bluf').html('<h2>X</h2>');
        		$('#concentration').html('<h2>X</h2>');
        		$('#connaissances_I').html('<h2>X</h2>');
        		$('#profession_I').html('<h2>X</h2>');
        		$('#profession_II').html('<h2>X</h2>');
    			break;
    		case 'Guerrier' :
    			remiseAZero();
    			$('#artisanat_I').html('<h2>X</h2>');
        		$('#artisanat_II').html('<h2>X</h2>');
        		$('#artisanat_III').html('<h2>X</h2>');
        		$('#dressage').html('<h2>X</h2>');
        		$('#equitation').html('<h2>X</h2>');
        		$('#escalade').html('<h2>X</h2>');
        		$('#intimidation').html('<h2>X</h2>');
        		$('#natation').html('<h2>X</h2>');
        		$('#saut').html('<h2>X</h2>');
    			break;
    		case 'Magicien' :
    			remiseAZero();
    			$('#art_de_la_magie').html('<h2>X</h2>');
    			$('#artisanat_I').html('<h2>X</h2>');
        		$('#artisanat_II').html('<h2>X</h2>');
        		$('#artisanat_III').html('<h2>X</h2>');
        		$('#concentration').html('<h2>X</h2>');
        		$('#connaissances_I').html('<h2>X</h2>');
        		$('#connaissances_II').html('<h2>X</h2>');
        		$('#connaissances_III').html('<h2>X</h2>');
        		$('#connaissances_IV').html('<h2>X</h2>');
        		$('#connaissances_V').html('<h2>X</h2>');
        		$('#décriptage').html('<h2>X</h2>');
        		$('#profession_I').html('<h2>X</h2>');
        		$('#profession_II').html('<h2>X</h2>');
    			break;
    		case 'Moine' :
    			remiseAZero();
    			$('#acrobatie').html('<h2>X</h2>');
    			$('#artisanat_I').html('<h2>X</h2>');
        		$('#artisanat_II').html('<h2>X</h2>');
        		$('#artisanat_III').html('<h2>X</h2>');
        		$('#concentration').html('<h2>X</h2>');
        		$('#connaissances_I').html('<h2>X</h2>');
        		$('#connaissances_II').html('<h2>X</h2>');
        		$('#déplacement_silencieux').html('<h2>X</h2>');
        		$('#détection').html('<h2>X</h2>');
        		$('#diplomatie').html('<h2>X</h2>');
        		$('#discrétion').html('<h2>X</h2>');
        		$('#equilibre').html('<h2>X</h2>');
        		$('#escalade').html('<h2>X</h2>');
        		$('#évasion').html('<h2>X</h2>');
        		$('#natation').html('<h2>X</h2>');
        		$('#perception_auditive').html('<h2>X</h2>');
        		$('#profession_I').html('<h2>X</h2>');
        		$('#profession_II').html('<h2>X</h2>');
        		$('#psychologie').html('<h2>X</h2>');
        		$('#représentation_I').html('<h2>X</h2>');
        		$('#représentation_II').html('<h2>X</h2>');
        		$('#représentation_III').html('<h2>X</h2>');
        		$('#saut').html('<h2>X</h2>');
    			break;
    		case 'Paladin' :
    			remiseAZero();
    			$('#artisanat_I').html('<h2>X</h2>');
        		$('#artisanat_II').html('<h2>X</h2>');
        		$('#artisanat_III').html('<h2>X</h2>');
        		$('#concentration').html('<h2>X</h2>');
        		$('#connaissances_I').html('<h2>X</h2>');
        		$('#connaissances_II').html('<h2>X</h2>');
        		$('#diplomatie').html('<h2>X</h2>');
        		$('#dressage').html('<h2>X</h2>');
        		$('#equitation').html('<h2>X</h2>');
        		$('#premier_secours').html('<h2>X</h2>');
        		$('#profession_I').html('<h2>X</h2>');
        		$('#profession_II').html('<h2>X</h2>');
        		$('#psychologie').html('<h2>X</h2>');
    			break;
    		case 'Prêtre' :
    			remiseAZero();
    			$('#art_de_la_magie').html('<h2>X</h2>');
    			$('#artisanat_I').html('<h2>X</h2>');
        		$('#artisanat_II').html('<h2>X</h2>');
        		$('#artisanat_III').html('<h2>X</h2>');
        		$('#concentration').html('<h2>X</h2>');
        		$('#connaissances_I').html('<h2>X</h2>');
        		$('#connaissances_II').html('<h2>X</h2>');
        		$('#connaissances_III').html('<h2>X</h2>');
        		$('#connaissances_IV').html('<h2>X</h2>');
        		$('#diplomatie').html('<h2>X</h2>');
        		$('#premier_secours').html('<h2>X</h2>');
        		$('#profession_I').html('<h2>X</h2>');
        		$('#profession_II').html('<h2>X</h2>');
    			break;
    		case 'Rôdeur' :
    			remiseAZero();
    			$('#artisanat_I').html('<h2>X</h2>');
        		$('#artisanat_II').html('<h2>X</h2>');
        		$('#artisanat_III').html('<h2>X</h2>');
        		$('#concentration').html('<h2>X</h2>');
        		$('#connaissances_I').html('<h2>X</h2>');
        		$('#connaissances_II').html('<h2>X</h2>');
        		$('#connaissances_III').html('<h2>X</h2>');
        		$('#déplacement_silencieux').html('<h2>X</h2>');
        		$('#détection').html('<h2>X</h2>');
        		$('#discrétion').html('<h2>X</h2>');
        		$('#dressage').html('<h2>X</h2>');
        		$('#equitation').html('<h2>X</h2>');
        		$('#escalade').html('<h2>X</h2>');
        		$('#fouille').html('<h2>X</h2>');
        		$('#maîtrise_des_cordes').html('<h2>X</h2>');
        		$('#natation').html('<h2>X</h2>');
        		$('#perception_auditive').html('<h2>X</h2>');
        		$('#premier_secours').html('<h2>X</h2>');
        		$('#profession_I').html('<h2>X</h2>');
        		$('#profession_II').html('<h2>X</h2>');
        		$('#saut').html('<h2>X</h2>');
        		$('#survie').html('<h2>X</h2>');
    			break;
    		case 'Roublard' :
    			remiseAZero();
    			$('#acrobatie').html('<h2>X</h2>');
    			$('#artisanat_I').html('<h2>X</h2>');
        		$('#artisanat_II').html('<h2>X</h2>');
        		$('#artisanat_III').html('<h2>X</h2>');
        		$('#bluf').html('<h2>X</h2>');
        		$('#connaissances_I').html('<h2>X</h2>');
        		$('#contrefaçon').html('<h2>X</h2>');
        		$('#crochetage').html('<h2>X</h2>');
        		$('#décriptage').html('<h2>X</h2>');
        		$('#déguisement').html('<h2>X</h2>');
        		$('#déplacement_silencieux').html('<h2>X</h2>');
        		$('#désamorçage_sabotage').html('<h2>X</h2>');
        		$('#détection').html('<h2>X</h2>');
        		$('#diplomatie').html('<h2>X</h2>');
        		$('#discrétion').html('<h2>X</h2>');
        		$('#equilibre').html('<h2>X</h2>');
        		$('#escalade').html('<h2>X</h2>');
        		$('#escamotage').html('<h2>X</h2>');
        		$('#estimation').html('<h2>X</h2>');
        		$('#évasion').html('<h2>X</h2>');
        		$('#fouille').html('<h2>X</h2>');
        		$('#intimidation').html('<h2>X</h2>');
        		$('#maîtrise_des_cordes').html('<h2>X</h2>');
        		$('#natation').html('<h2>X</h2>');
        		$('#perception_auditive').html('<h2>X</h2>');
        		$('#profession_I').html('<h2>X</h2>');
        		$('#profession_II').html('<h2>X</h2>');
        		$('#psychologie').html('<h2>X</h2>');
        		$('#renseignements').html('<h2>X</h2>');
        		$('#représentation_I').html('<h2>X</h2>');
        		$('#représentation_II').html('<h2>X</h2>');
        		$('#représentation_III').html('<h2>X</h2>');
        		$('#saut').html('<h2>X</h2>');
        		$('#utilisation_d_objets_magiques').html('<h2>X</h2>');
        		$('#non_défini').html('<h2>X</h2>');
    			break;
    	}
    });
});


function influenceClassePersonnage() {
	changeClassePersonnage();
	classeCompétence();
    affichageArtisanat(document.form.artisanat_I_type);
    affichageArtisanat(document.form.artisanat_II_type);
    affichageArtisanat(document.form.artisanat_III_type);
    affichageConnaissance(document.form.connaissances_I_type);
    affichageConnaissance(document.form.connaissances_II_type);
    affichageConnaissance(document.form.connaissances_III_type);
    affichageConnaissance(document.form.connaissances_IV_type);
    affichageConnaissance(document.form.connaissances_V_type);
    affichageProfession(document.form.profession_I_type);
    affichageProfession(document.form.profession_II_type);
    affichageReprésentation(document.form.représentation_I_type);
    affichageReprésentation(document.form.représentation_II_type);
    affichageReprésentation(document.form.représentation_III_type);

    affichageObjet(document.form.objet_I);
    affichageObjet(document.form.objet_II);
    affichageObjet(document.form.objet_III);
    affichageObjet(document.form.objet_IV);
    affichageObjet(document.form.objet_V);
    affichageObjet(document.form.objet_VI);
    affichageObjet(document.form.objet_VII);
    affichageObjet(document.form.objet_VIII);
    affichageObjet(document.form.objet_IX);
    affichageObjet(document.form.objet_X);
    affichageObjet(document.form.objet_XI);
    affichageObjet(document.form.objet_XII);
    affichageObjet(document.form.objet_XIII);
    affichageObjet(document.form.objet_XIV);
    affichageObjet(document.form.objet_XV);
    affichageObjet(document.form.objet_XVI);
    affichageObjet(document.form.objet_XVII);
    affichageObjet(document.form.objet_XVIII);
    affichageObjet(document.form.objet_XIX);
    affichageObjet(document.form.objet_XX);
    affichageObjet(document.form.objet_XXI);
    affichageObjet(document.form.objet_XXII);
    affichageObjet(document.form.objet_XXIII);
    affichageObjet(document.form.objet_XXIV);
    affichageObjet(document.form.objet_XXV);
    affichageObjet(document.form.objet_XXVI);
    affichageObjet(document.form.objet_XXVII);

    affichageEmplacement(document.form.emplacement_I);
    affichageEmplacement(document.form.emplacement_II);
    affichageEmplacement(document.form.emplacement_III);
    affichageEmplacement(document.form.emplacement_IV);
    affichageEmplacement(document.form.emplacement_V);
    affichageEmplacement(document.form.emplacement_VI);
    affichageEmplacement(document.form.emplacement_VII);
    affichageEmplacement(document.form.emplacement_VIII);
    affichageEmplacement(document.form.emplacement_IX);
    affichageEmplacement(document.form.emplacement_X);
    affichageEmplacement(document.form.emplacement_XI);
    affichageEmplacement(document.form.emplacement_XII);
    affichageEmplacement(document.form.emplacement_XIII);
    affichageEmplacement(document.form.emplacement_XIV);
    affichageEmplacement(document.form.emplacement_XV);
    affichageEmplacement(document.form.emplacement_XVI);
    affichageEmplacement(document.form.emplacement_XVII);
    affichageEmplacement(document.form.emplacement_XVIII);
    affichageEmplacement(document.form.emplacement_XIX);
    affichageEmplacement(document.form.emplacement_XX);
    affichageEmplacement(document.form.emplacement_XXI);
    affichageEmplacement(document.form.emplacement_XXII);
    affichageEmplacement(document.form.emplacement_XXIII);
    affichageEmplacement(document.form.emplacement_XXIV);
    affichageEmplacement(document.form.emplacement_XXV);
    affichageEmplacement(document.form.emplacement_XXVI);
    affichageEmplacement(document.form.emplacement_XXVII);

    affichagePoids(document.form.poids_I);
    affichagePoids(document.form.poids_II);
    affichagePoids(document.form.poids_III);
    affichagePoids(document.form.poids_IV);
    affichagePoids(document.form.poids_V);
    affichagePoids(document.form.poids_VI);
    affichagePoids(document.form.poids_VII);
    affichagePoids(document.form.poids_VIII);
    affichagePoids(document.form.poids_IX);
    affichagePoids(document.form.poids_X);
    affichagePoids(document.form.poids_XI);
    affichagePoids(document.form.poids_XII);
    affichagePoids(document.form.poids_XIII);
    affichagePoids(document.form.poids_XIV);
    affichagePoids(document.form.poids_XV);
    affichagePoids(document.form.poids_XVI);
    affichagePoids(document.form.poids_XVII);
    affichagePoids(document.form.poids_XVIII);
    affichagePoids(document.form.poids_XIX);
    affichagePoids(document.form.poids_XX);
    affichagePoids(document.form.poids_XXI);
    affichagePoids(document.form.poids_XXII);
    affichagePoids(document.form.poids_XXIII);
    affichagePoids(document.form.poids_XXIV);
    affichagePoids(document.form.poids_XXV);
    affichagePoids(document.form.poids_XXVI);
    affichagePoids(document.form.poids_XXVII);

    affichageLangues(document.form.langues_I);
    affichageLangues(document.form.langues_II);
    affichageLangues(document.form.langues_III);
    affichageLangues(document.form.langues_IV);
    affichageLangues(document.form.langues_V);
    affichageLangues(document.form.langues_VI);
    affichageLangues(document.form.langues_VII);
    affichageLangues(document.form.langues_VIII);
    affichageLangues(document.form.langues_IX);
    affichageLangues(document.form.langues_X);

    affichageDon(document.form.don_I);
    affichageDon(document.form.don_II);
    affichageDon(document.form.don_III);
    affichageDon(document.form.don_IV);
    affichageDon(document.form.don_V);
    affichageDon(document.form.don_VI);
    affichageDon(document.form.don_VII);
    affichageDon(document.form.don_VIII);
    affichageDon(document.form.don_IX);
    affichageDon(document.form.don_X);
    affichageDon(document.form.don_XI);
    affichageDon(document.form.don_XII);

/* *** */
    affichageArmure(document.form.armure);
    affichageBouclier(document.form.bouclier);
    affichageProtection(document.form.protection_I);
/*    affichageProtection(document.form.protection_II);
    affichageProtection(document.form.protection_III);*/
};

function toucherCommeGuerrier() {
	switch(document.form.niveau.value) {
		case '00' :
			$('#bba').html(' ');
			$('#lut_bon_bas_att').html(' ');
			break;
		case '01' :
			$('#bba').html('1');
			$('#lut_bon_bas_att').html('1');
			break;
		case '02' :
			$('#bba').html('2');
			$('#lut_bon_bas_att').html('2');
			break;
		case '03' :
			$('#bba').html('3');
			$('#lut_bon_bas_att').html('3');
			break;
		case '04' :
			$('#bba').html('4');
			$('#lut_bon_bas_att').html('4');
			break;
		case '05' :
			$('#bba').html('5');
			$('#lut_bon_bas_att').html('5');
			break;
		case '06' :
			$('#bba').html('6');
			$('#lut_bon_bas_att').html('6');
			break;
		case '07' :
			$('#bba').html('7');
			$('#lut_bon_bas_att').html('7');
			break;
		case '08' :
			$('#bba').html('8');
			$('#lut_bon_bas_att').html('8');
			break;
		case '09' :
			$('#bba').html('9');
			$('#lut_bon_bas_att').html('9');
			break;
		case '10' :
			$('#bba').html('10');
			$('#lut_bon_bas_att').html('10');
			break;
		case '11' :
			$('#bba').html('11');
			$('#lut_bon_bas_att').html('11');
			break;
		case '12' :
			$('#bba').html('12');
			$('#lut_bon_bas_att').html('12');
			break;
		case '13' :
			$('#bba').html('13');
			$('#lut_bon_bas_att').html('13');
			break;
		case '14' :
			$('#bba').html('14');
			$('#lut_bon_bas_att').html('14');
			break;
		case '15' :
			$('#bba').html('15');
			$('#lut_bon_bas_att').html('15');
			break;
		case '16' :
			$('#bba').html('16');
			$('#lut_bon_bas_att').html('16');
			break;
		case '17' :
			$('#bba').html('17');
			$('#lut_bon_bas_att').html('17');
			break;
		case '18' :
			$('#bba').html('18');
			$('#lut_bon_bas_att').html('18');
			break;
		case '19' :
			$('#bba').html('19');
			$('#lut_bon_bas_att').html('19');
			break;
		case '20' :
			$('#bba').html('20');
			$('#lut_bon_bas_att').html('20');
			break;
	}
};

function toucherCommePretre() {
	switch(document.form.niveau.value) {
		case '00' :
			$('#bba').html(' ');
			$('#lut_bon_bas_att').html(' ');
			break;
		case '01' :
			$('#bba').html('0');
			$('#lut_bon_bas_att').html('0');
			break;
		case '02' :
			$('#bba').html('1');
			$('#lut_bon_bas_att').html('1');
			break;
		case '03' :
			$('#bba').html('2');
			$('#lut_bon_bas_att').html('2');
			break;
		case '04' :
			$('#bba').html('3');
			$('#lut_bon_bas_att').html('3');
			break;
		case '05' :
			$('#bba').html('3');
			$('#lut_bon_bas_att').html('3');
			break;
		case '06' :
			$('#bba').html('4');
			$('#lut_bon_bas_att').html('4');
			break;
		case '07' :
			$('#bba').html('5');
			$('#lut_bon_bas_att').html('5');
			break;
		case '08' :
			$('#bba').html('6');
			$('#lut_bon_bas_att').html('6');
			break;
		case '09' :
			$('#bba').html('6');
			$('#lut_bon_bas_att').html('6');
			break;
		case '10' :
			$('#bba').html('7');
			$('#lut_bon_bas_att').html('7');
			break;
		case '11' :
			$('#bba').html('8');
			$('#lut_bon_bas_att').html('8');
			break;
		case '12' :
			$('#bba').html('9');
			$('#lut_bon_bas_att').html('9');
			break;
		case '13' :
			$('#bba').html('9');
			$('#lut_bon_bas_att').html('9');
			break;
		case '14' :
			$('#bba').html('10');
			$('#lut_bon_bas_att').html('10');
			break;
		case '15' :
			$('#bba').html('11');
			$('#lut_bon_bas_att').html('11');
			break;
		case '16' :
			$('#bba').html('12');
			$('#lut_bon_bas_att').html('12');
			break;
		case '17' :
			$('#bba').html('12');
			$('#lut_bon_bas_att').html('12');
			break;
		case '18' :
			$('#bba').html('13');
			$('#lut_bon_bas_att').html('13');
			break;
		case '19' :
			$('#bba').html('14');
			$('#lut_bon_bas_att').html('14');
			break;
		case '20' :
			$('#bba').html('15');
			$('#lut_bon_bas_att').html('15');
			break;
	}
};

function toucherCommeMagicien() {
	switch(document.form.niveau.value) {
		case '00' :
			$('#bba').html(' ');
			$('#lut_bon_bas_att').html(' ');
			break;
		case '01' :
			$('#bba').html('0');
			$('#lut_bon_bas_att').html('0');
			break;
		case '02' :
			$('#bba').html('1');
			$('#lut_bon_bas_att').html('1');
			break;
		case '03' :
			$('#bba').html('1');
			$('#lut_bon_bas_att').html('1');
			break;
		case '04' :
			$('#bba').html('2');
			$('#lut_bon_bas_att').html('2');
			break;
		case '05' :
			$('#bba').html('2');
			$('#lut_bon_bas_att').html('2');
			break;
		case '06' :
			$('#bba').html('3');
			$('#lut_bon_bas_att').html('3');
			break;
		case '07' :
			$('#bba').html('3');
			$('#lut_bon_bas_att').html('3');
			break;
		case '08' :
			$('#bba').html('4');
			$('#lut_bon_bas_att').html('4');
			break;
		case '09' :
			$('#bba').html('4');
			$('#lut_bon_bas_att').html('4');
			break;
		case '10' :
			$('#bba').html('5');
			$('#lut_bon_bas_att').html('5');
			break;
		case '11' :
			$('#bba').html('5');
			$('#lut_bon_bas_att').html('5');
			break;
		case '12' :
			$('#bba').html('6');
			$('#lut_bon_bas_att').html('6');
			break;
		case '13' :
			$('#bba').html('6');
			$('#lut_bon_bas_att').html('6');
			break;
		case '14' :
			$('#bba').html('7');
			$('#lut_bon_bas_att').html('7');
			break;
		case '15' :
			$('#bba').html('7');
			$('#lut_bon_bas_att').html('7');
			break;
		case '16' :
			$('#bba').html('8');
			$('#lut_bon_bas_att').html('8');
			break;
		case '17' :
			$('#bba').html('8');
			$('#lut_bon_bas_att').html('8');
			break;
		case '18' :
			$('#bba').html('9');
			$('#lut_bon_bas_att').html('9');
			break;
		case '19' :
			$('#bba').html('9');
			$('#lut_bon_bas_att').html('9');
			break;
		case '20' :
			$('#bba').html('10');
			$('#lut_bon_bas_att').html('10');
			break;
	}
};

function sauverCommeGuerrier() {
	switch(document.form.niveau.value) {
		case '00' :
			$('#sau_bon_bas_ref').html(' ');
			$('#sau_bon_bas_vig').html(' ');
			$('#sau_bon_bas_vol').html(' ');
			break;
		case '01' :
			$('#sau_bon_bas_ref').html('0');
			$('#sau_bon_bas_vig').html('2');
			$('#sau_bon_bas_vol').html('0');
			break;
		case '02' :
			$('#sau_bon_bas_ref').html('0');
			$('#sau_bon_bas_vig').html('3');
			$('#sau_bon_bas_vol').html('0');
			break;
		case '03' :
			$('#sau_bon_bas_ref').html('1');
			$('#sau_bon_bas_vig').html('3');
			$('#sau_bon_bas_vol').html('1');
			break;
		case '04' :
			$('#sau_bon_bas_ref').html('1');
			$('#sau_bon_bas_vig').html('4');
			$('#sau_bon_bas_vol').html('1');
			break;
		case '05' :
			$('#sau_bon_bas_ref').html('1');
			$('#sau_bon_bas_vig').html('4');
			$('#sau_bon_bas_vol').html('1');
			break;
		case '06' :
			$('#sau_bon_bas_ref').html('2');
			$('#sau_bon_bas_vig').html('5');
			$('#sau_bon_bas_vol').html('2');
			break;
		case '07' :
			$('#sau_bon_bas_ref').html('2');
			$('#sau_bon_bas_vig').html('5');
			$('#sau_bon_bas_vol').html('2');
			break;
		case '08' :
			$('#sau_bon_bas_ref').html('2');
			$('#sau_bon_bas_vig').html('6');
			$('#sau_bon_bas_vol').html('2');
			break;
		case '09' :
			$('#sau_bon_bas_ref').html('3');
			$('#sau_bon_bas_vig').html('6');
			$('#sau_bon_bas_vol').html('3');
			break;
		case '10' :
			$('#sau_bon_bas_ref').html('3');
			$('#sau_bon_bas_vig').html('7');
			$('#sau_bon_bas_vol').html('3');
			break;
		case '11' :
			$('#sau_bon_bas_ref').html('3');
			$('#sau_bon_bas_vig').html('7');
			$('#sau_bon_bas_vol').html('3');
			break;
		case '12' :
			$('#sau_bon_bas_ref').html('4');
			$('#sau_bon_bas_vig').html('8');
			$('#sau_bon_bas_vol').html('4');
			break;
		case '13' :
			$('#sau_bon_bas_ref').html('4');
			$('#sau_bon_bas_vig').html('8');
			$('#sau_bon_bas_vol').html('4');
			break;
		case '14' :
			$('#sau_bon_bas_ref').html('4');
			$('#sau_bon_bas_vig').html('9');
			$('#sau_bon_bas_vol').html('4');
			break;
		case '15' :
			$('#sau_bon_bas_ref').html('5');
			$('#sau_bon_bas_vig').html('9');
			$('#sau_bon_bas_vol').html('5');
			break;
		case '16' :
			$('#sau_bon_bas_ref').html('5');
			$('#sau_bon_bas_vig').html('10');
			$('#sau_bon_bas_vol').html('5');
			break;
		case '17' :
			$('#sau_bon_bas_ref').html('5');
			$('#sau_bon_bas_vig').html('10');
			$('#sau_bon_bas_vol').html('5');
			break;
		case '18' :
			$('#sau_bon_bas_ref').html('6');
			$('#sau_bon_bas_vig').html('11');
			$('#sau_bon_bas_vol').html('6');
			break;
		case '19' :
			$('#sau_bon_bas_ref').html('6');
			$('#sau_bon_bas_vig').html('11');
			$('#sau_bon_bas_vol').html('6');
			break;
		case '20' :
			$('#sau_bon_bas_ref').html('6');
			$('#sau_bon_bas_vig').html('12');
			$('#sau_bon_bas_vol').html('6');
			break;
	}
};

function sauverCommeRoublard() {
	switch(document.form.niveau.value) {
		case '00' :
			$('#sau_bon_bas_ref').html(' ');
			$('#sau_bon_bas_vig').html(' ');
			$('#sau_bon_bas_vol').html(' ');
			break;
		case '01' :
			$('#sau_bon_bas_ref').html('2');
			$('#sau_bon_bas_vig').html('0');
			$('#sau_bon_bas_vol').html('2');
			break;
		case '02' :
			$('#sau_bon_bas_ref').html('3');
			$('#sau_bon_bas_vig').html('0');
			$('#sau_bon_bas_vol').html('3');
			break;
		case '03' :
			$('#sau_bon_bas_ref').html('3');
			$('#sau_bon_bas_vig').html('1');
			$('#sau_bon_bas_vol').html('3');
			break;
		case '04' :
			$('#sau_bon_bas_ref').html('4');
			$('#sau_bon_bas_vig').html('1');
			$('#sau_bon_bas_vol').html('4');
			break;
		case '05' :
			$('#sau_bon_bas_ref').html('4');
			$('#sau_bon_bas_vig').html('1');
			$('#sau_bon_bas_vol').html('4');
			break;
		case '06' :
			$('#sau_bon_bas_ref').html('5');
			$('#sau_bon_bas_vig').html('2');
			$('#sau_bon_bas_vol').html('5');
			break;
		case '07' :
			$('#sau_bon_bas_ref').html('5');
			$('#sau_bon_bas_vig').html('2');
			$('#sau_bon_bas_vol').html('5');
			break;
		case '08' :
			$('#sau_bon_bas_ref').html('6');
			$('#sau_bon_bas_vig').html('2');
			$('#sau_bon_bas_vol').html('6');
			break;
		case '09' :
			$('#sau_bon_bas_ref').html('6');
			$('#sau_bon_bas_vig').html('3');
			$('#sau_bon_bas_vol').html('6');
			break;
		case '10' :
			$('#sau_bon_bas_ref').html('7');
			$('#sau_bon_bas_vig').html('3');
			$('#sau_bon_bas_vol').html('7');
			break;
		case '11' :
			$('#sau_bon_bas_ref').html('7');
			$('#sau_bon_bas_vig').html('3');
			$('#sau_bon_bas_vol').html('7');
			break;
		case '12' :
			$('#sau_bon_bas_ref').html('8');
			$('#sau_bon_bas_vig').html('4');
			$('#sau_bon_bas_vol').html('8');
			break;
		case '13' :
			$('#sau_bon_bas_ref').html('8');
			$('#sau_bon_bas_vig').html('4');
			$('#sau_bon_bas_vol').html('8');
			break;
		case '14' :
			$('#sau_bon_bas_ref').html('9');
			$('#sau_bon_bas_vig').html('4');
			$('#sau_bon_bas_vol').html('9');
			break;
		case '15' :
			$('#sau_bon_bas_ref').html('9');
			$('#sau_bon_bas_vig').html('5');
			$('#sau_bon_bas_vol').html('9');
			break;
		case '16' :
			$('#sau_bon_bas_ref').html('10');
			$('#sau_bon_bas_vig').html('5');
			$('#sau_bon_bas_vol').html('10');
			break;
		case '17' :
			$('#sau_bon_bas_ref').html('10');
			$('#sau_bon_bas_vig').html('5');
			$('#sau_bon_bas_vol').html('10');
			break;
		case '18' :
			$('#sau_bon_bas_ref').html('11');
			$('#sau_bon_bas_vig').html('6');
			$('#sau_bon_bas_vol').html('11');
			break;
		case '19' :
			$('#sau_bon_bas_ref').html('11');
			$('#sau_bon_bas_vig').html('6');
			$('#sau_bon_bas_vol').html('11');
			break;
		case '20' :
			$('#sau_bon_bas_ref').html('12');
			$('#sau_bon_bas_vig').html('6');
			$('#sau_bon_bas_vol').html('12');
			break;
	}
};

function sauverCommePretre() {
	switch(document.form.niveau.value) {
		case '00' :
			$('#sau_bon_bas_ref').html(' ');
			$('#sau_bon_bas_vig').html(' ');
			$('#sau_bon_bas_vol').html(' ');
			break;
		case '01' :
			$('#sau_bon_bas_ref').html('0');
			$('#sau_bon_bas_vig').html('2');
			$('#sau_bon_bas_vol').html('2');
			break;
		case '02' :
			$('#sau_bon_bas_ref').html('0');
			$('#sau_bon_bas_vig').html('3');
			$('#sau_bon_bas_vol').html('3');
			break;
		case '03' :
			$('#sau_bon_bas_ref').html('1');
			$('#sau_bon_bas_vig').html('3');
			$('#sau_bon_bas_vol').html('3');
			break;
		case '04' :
			$('#sau_bon_bas_ref').html('1');
			$('#sau_bon_bas_vig').html('4');
			$('#sau_bon_bas_vol').html('4');
			break;
		case '05' :
			$('#sau_bon_bas_ref').html('1');
			$('#sau_bon_bas_vig').html('4');
			$('#sau_bon_bas_vol').html('4');
			break;
		case '06' :
			$('#sau_bon_bas_ref').html('2');
			$('#sau_bon_bas_vig').html('5');
			$('#sau_bon_bas_vol').html('5');
			break;
		case '07' :
			$('#sau_bon_bas_ref').html('2');
			$('#sau_bon_bas_vig').html('5');
			$('#sau_bon_bas_vol').html('5');
			break;
		case '08' :
			$('#sau_bon_bas_ref').html('2');
			$('#sau_bon_bas_vig').html('6');
			$('#sau_bon_bas_vol').html('6');
			break;
		case '09' :
			$('#sau_bon_bas_ref').html('3');
			$('#sau_bon_bas_vig').html('6');
			$('#sau_bon_bas_vol').html('6');
			break;
		case '10' :
			$('#sau_bon_bas_ref').html('3');
			$('#sau_bon_bas_vig').html('7');
			$('#sau_bon_bas_vol').html('7');
			break;
		case '11' :
			$('#sau_bon_bas_ref').html('3');
			$('#sau_bon_bas_vig').html('7');
			$('#sau_bon_bas_vol').html('7');
			break;
		case '12' :
			$('#sau_bon_bas_ref').html('4');
			$('#sau_bon_bas_vig').html('8');
			$('#sau_bon_bas_vol').html('8');
			break;
		case '13' :
			$('#sau_bon_bas_ref').html('4');
			$('#sau_bon_bas_vig').html('8');
			$('#sau_bon_bas_vol').html('8');
			break;
		case '14' :
			$('#sau_bon_bas_ref').html('4');
			$('#sau_bon_bas_vig').html('9');
			$('#sau_bon_bas_vol').html('9');
			break;
		case '15' :
			$('#sau_bon_bas_ref').html('5');
			$('#sau_bon_bas_vig').html('9');
			$('#sau_bon_bas_vol').html('9');
			break;
		case '16' :
			$('#sau_bon_bas_ref').html('5');
			$('#sau_bon_bas_vig').html('10');
			$('#sau_bon_bas_vol').html('10');
			break;
		case '17' :
			$('#sau_bon_bas_ref').html('5');
			$('#sau_bon_bas_vig').html('10');
			$('#sau_bon_bas_vol').html('10');
			break;
		case '18' :
			$('#sau_bon_bas_ref').html('6');
			$('#sau_bon_bas_vig').html('11');
			$('#sau_bon_bas_vol').html('11');
			break;
		case '19' :
			$('#sau_bon_bas_ref').html('6');
			$('#sau_bon_bas_vig').html('11');
			$('#sau_bon_bas_vol').html('11');
			break;
		case '20' :
			$('#sau_bon_bas_ref').html('6');
			$('#sau_bon_bas_vig').html('12');
			$('#sau_bon_bas_vol').html('12');
			break;
	}
};

function sauverCommeMagicien() {
	switch(document.form.niveau.value) {
		case '00' :
			$('#sau_bon_bas_ref').html(' ');
			$('#sau_bon_bas_vig').html(' ');
			$('#sau_bon_bas_vol').html(' ');
			break;
		case '01' :
			$('#sau_bon_bas_ref').html('0');
			$('#sau_bon_bas_vig').html('0');
			$('#sau_bon_bas_vol').html('2');
			break;
		case '02' :
			$('#sau_bon_bas_ref').html('0');
			$('#sau_bon_bas_vig').html('0');
			$('#sau_bon_bas_vol').html('3');
			break;
		case '03' :
			$('#sau_bon_bas_ref').html('1');
			$('#sau_bon_bas_vig').html('1');
			$('#sau_bon_bas_vol').html('3');
			break;
		case '04' :
			$('#sau_bon_bas_ref').html('1');
			$('#sau_bon_bas_vig').html('1');
			$('#sau_bon_bas_vol').html('4');
			break;
		case '05' :
			$('#sau_bon_bas_ref').html('1');
			$('#sau_bon_bas_vig').html('1');
			$('#sau_bon_bas_vol').html('4');
			break;
		case '06' :
			$('#sau_bon_bas_ref').html('2');
			$('#sau_bon_bas_vig').html('2');
			$('#sau_bon_bas_vol').html('5');
			break;
		case '07' :
			$('#sau_bon_bas_ref').html('2');
			$('#sau_bon_bas_vig').html('2');
			$('#sau_bon_bas_vol').html('5');
			break;
		case '08' :
			$('#sau_bon_bas_ref').html('2');
			$('#sau_bon_bas_vig').html('2');
			$('#sau_bon_bas_vol').html('6');
			break;
		case '09' :
			$('#sau_bon_bas_ref').html('3');
			$('#sau_bon_bas_vig').html('3');
			$('#sau_bon_bas_vol').html('6');
			break;
		case '10' :
			$('#sau_bon_bas_ref').html('3');
			$('#sau_bon_bas_vig').html('3');
			$('#sau_bon_bas_vol').html('7');
			break;
		case '11' :
			$('#sau_bon_bas_ref').html('3');
			$('#sau_bon_bas_vig').html('3');
			$('#sau_bon_bas_vol').html('7');
			break;
		case '12' :
			$('#sau_bon_bas_ref').html('4');
			$('#sau_bon_bas_vig').html('4');
			$('#sau_bon_bas_vol').html('8');
			break;
		case '13' :
			$('#sau_bon_bas_ref').html('4');
			$('#sau_bon_bas_vig').html('4');
			$('#sau_bon_bas_vol').html('8');
			break;
		case '14' :
			$('#sau_bon_bas_ref').html('4');
			$('#sau_bon_bas_vig').html('4');
			$('#sau_bon_bas_vol').html('9');
			break;
		case '15' :
			$('#sau_bon_bas_ref').html('5');
			$('#sau_bon_bas_vig').html('5');
			$('#sau_bon_bas_vol').html('9');
			break;
		case '16' :
			$('#sau_bon_bas_ref').html('5');
			$('#sau_bon_bas_vig').html('5');
			$('#sau_bon_bas_vol').html('10');
			break;
		case '17' :
			$('#sau_bon_bas_ref').html('5');
			$('#sau_bon_bas_vig').html('5');
			$('#sau_bon_bas_vol').html('10');
			break;
		case '18' :
			$('#sau_bon_bas_ref').html('6');
			$('#sau_bon_bas_vig').html('6');
			$('#sau_bon_bas_vol').html('11');
			break;
		case '19' :
			$('#sau_bon_bas_ref').html('6');
			$('#sau_bon_bas_vig').html('6');
			$('#sau_bon_bas_vol').html('11');
			break;
		case '20' :
			$('#sau_bon_bas_ref').html('6');
			$('#sau_bon_bas_vig').html('6');
			$('#sau_bon_bas_vol').html('12');
			break;
	}
};

function sauverCommeMoine() {
	switch(document.form.niveau.value) {
		case '00' :
			$('#sau_bon_bas_ref').html(' ');
			$('#sau_bon_bas_vig').html(' ');
			$('#sau_bon_bas_vol').html(' ');
			break;
		case '01' :
			$('#sau_bon_bas_ref').html('2');
			$('#sau_bon_bas_vig').html('2');
			$('#sau_bon_bas_vol').html('2');
			break;
		case '02' :
			$('#sau_bon_bas_ref').html('3');
			$('#sau_bon_bas_vig').html('3');
			$('#sau_bon_bas_vol').html('3');
			break;
		case '03' :
			$('#sau_bon_bas_ref').html('3');
			$('#sau_bon_bas_vig').html('3');
			$('#sau_bon_bas_vol').html('3');
			break;
		case '04' :
			$('#sau_bon_bas_ref').html('4');
			$('#sau_bon_bas_vig').html('4');
			$('#sau_bon_bas_vol').html('4');
			break;
		case '05' :
			$('#sau_bon_bas_ref').html('4');
			$('#sau_bon_bas_vig').html('4');
			$('#sau_bon_bas_vol').html('4');
			break;
		case '06' :
			$('#sau_bon_bas_ref').html('5');
			$('#sau_bon_bas_vig').html('5');
			$('#sau_bon_bas_vol').html('5');
			break;
		case '07' :
			$('#sau_bon_bas_ref').html('5');
			$('#sau_bon_bas_vig').html('5');
			$('#sau_bon_bas_vol').html('5');
			break;
		case '08' :
			$('#sau_bon_bas_ref').html('6');
			$('#sau_bon_bas_vig').html('6');
			$('#sau_bon_bas_vol').html('6');
			break;
		case '09' :
			$('#sau_bon_bas_ref').html('6');
			$('#sau_bon_bas_vig').html('6');
			$('#sau_bon_bas_vol').html('6');
			break;
		case '10' :
			$('#sau_bon_bas_ref').html('7');
			$('#sau_bon_bas_vig').html('7');
			$('#sau_bon_bas_vol').html('7');
			break;
		case '11' :
			$('#sau_bon_bas_ref').html('7');
			$('#sau_bon_bas_vig').html('7');
			$('#sau_bon_bas_vol').html('7');
			break;
		case '12' :
			$('#sau_bon_bas_ref').html('8');
			$('#sau_bon_bas_vig').html('8');
			$('#sau_bon_bas_vol').html('8');
			break;
		case '13' :
			$('#sau_bon_bas_ref').html('8');
			$('#sau_bon_bas_vig').html('8');
			$('#sau_bon_bas_vol').html('8');
			break;
		case '14' :
			$('#sau_bon_bas_ref').html('9');
			$('#sau_bon_bas_vig').html('9');
			$('#sau_bon_bas_vol').html('9');
			break;
		case '15' :
			$('#sau_bon_bas_ref').html('9');
			$('#sau_bon_bas_vig').html('9');
			$('#sau_bon_bas_vol').html('9');
			break;
		case '16' :
			$('#sau_bon_bas_ref').html('10');
			$('#sau_bon_bas_vig').html('10');
			$('#sau_bon_bas_vol').html('10');
			break;
		case '17' :
			$('#sau_bon_bas_ref').html('10');
			$('#sau_bon_bas_vig').html('10');
			$('#sau_bon_bas_vol').html('10');
			break;
		case '18' :
			$('#sau_bon_bas_ref').html('11');
			$('#sau_bon_bas_vig').html('11');
			$('#sau_bon_bas_vol').html('11');
			break;
		case '19' :
			$('#sau_bon_bas_ref').html('11');
			$('#sau_bon_bas_vig').html('11');
			$('#sau_bon_bas_vol').html('11');
			break;
		case '20' :
			$('#sau_bon_bas_ref').html('12');
			$('#sau_bon_bas_vig').html('12');
			$('#sau_bon_bas_vol').html('12');
			break;
	}
};

function sauverCommeRodeur() {
	switch(document.form.niveau.value) {
		case '00' :
			$('#sau_bon_bas_ref').html(' ');
			$('#sau_bon_bas_vig').html(' ');
			$('#sau_bon_bas_vol').html(' ');
			break;
		case '01' :
			$('#sau_bon_bas_ref').html('2');
			$('#sau_bon_bas_vig').html('2');
			$('#sau_bon_bas_vol').html('0');
			break;
		case '02' :
			$('#sau_bon_bas_ref').html('3');
			$('#sau_bon_bas_vig').html('3');
			$('#sau_bon_bas_vol').html('0');
			break;
		case '03' :
			$('#sau_bon_bas_ref').html('3');
			$('#sau_bon_bas_vig').html('3');
			$('#sau_bon_bas_vol').html('1');
			break;
		case '04' :
			$('#sau_bon_bas_ref').html('4');
			$('#sau_bon_bas_vig').html('4');
			$('#sau_bon_bas_vol').html('1');
			break;
		case '05' :
			$('#sau_bon_bas_ref').html('4');
			$('#sau_bon_bas_vig').html('4');
			$('#sau_bon_bas_vol').html('1');
			break;
		case '06' :
			$('#sau_bon_bas_ref').html('5');
			$('#sau_bon_bas_vig').html('5');
			$('#sau_bon_bas_vol').html('2');
			break;
		case '07' :
			$('#sau_bon_bas_ref').html('5');
			$('#sau_bon_bas_vig').html('5');
			$('#sau_bon_bas_vol').html('2');
			break;
		case '08' :
			$('#sau_bon_bas_ref').html('6');
			$('#sau_bon_bas_vig').html('6');
			$('#sau_bon_bas_vol').html('2');
			break;
		case '09' :
			$('#sau_bon_bas_ref').html('6');
			$('#sau_bon_bas_vig').html('6');
			$('#sau_bon_bas_vol').html('3');
			break;
		case '10' :
			$('#sau_bon_bas_ref').html('7');
			$('#sau_bon_bas_vig').html('7');
			$('#sau_bon_bas_vol').html('3');
			break;
		case '11' :
			$('#sau_bon_bas_ref').html('7');
			$('#sau_bon_bas_vig').html('7');
			$('#sau_bon_bas_vol').html('3');
			break;
		case '12' :
			$('#sau_bon_bas_ref').html('8');
			$('#sau_bon_bas_vig').html('8');
			$('#sau_bon_bas_vol').html('4');
			break;
		case '13' :
			$('#sau_bon_bas_ref').html('8');
			$('#sau_bon_bas_vig').html('8');
			$('#sau_bon_bas_vol').html('4');
			break;
		case '14' :
			$('#sau_bon_bas_ref').html('9');
			$('#sau_bon_bas_vig').html('9');
			$('#sau_bon_bas_vol').html('4');
			break;
		case '15' :
			$('#sau_bon_bas_ref').html('9');
			$('#sau_bon_bas_vig').html('9');
			$('#sau_bon_bas_vol').html('5');
			break;
		case '16' :
			$('#sau_bon_bas_ref').html('10');
			$('#sau_bon_bas_vig').html('10');
			$('#sau_bon_bas_vol').html('5');
			break;
		case '17' :
			$('#sau_bon_bas_ref').html('10');
			$('#sau_bon_bas_vig').html('10');
			$('#sau_bon_bas_vol').html('5');
			break;
		case '18' :
			$('#sau_bon_bas_ref').html('11');
			$('#sau_bon_bas_vig').html('11');
			$('#sau_bon_bas_vol').html('6');
			break;
		case '19' :
			$('#sau_bon_bas_ref').html('11');
			$('#sau_bon_bas_vig').html('11');
			$('#sau_bon_bas_vol').html('6');
			break;
		case '20' :
			$('#sau_bon_bas_ref').html('12');
			$('#sau_bon_bas_vig').html('12');
			$('#sau_bon_bas_vol').html('6');
			break;
	}
};

function influenceNiveau() {
    $('#ide').html(parseInt(document.form.niveau.value + 3));
    $('#hide').html((parseInt(document.form.niveau.value + 3) / 2));

	switch(document.form.classe.value) {
		case ' ' :
			$('#sau_bon_bas_ref').html('0');
			$('#sau_bon_bas_vig').html('0');
			$('#sau_bon_bas_vol').html('0');
			$('#bba').html('0');
			$('#lut_bon_bas_att').html('0');
			break;
		case 'Barbare' :
			toucherCommeGuerrier();
			sauverCommeGuerrier();
			reductionDegats();
			calculeReflexes();
			calculeVigeur();
			calculeVolonte();
			calculeLutte();
            competenceClasseBarbare();
			break;
		case 'Barde' :
			toucherCommePretre();
			sauverCommeRoublard();
			calculeReflexes();
			calculeVigeur();
			calculeVolonte();
			calculeLutte();
            competenceClasseBarde()
			break;
		case 'Druide' :
			toucherCommePretre();
			sauverCommePretre();
			calculeReflexes();
			calculeVigeur();
			calculeVolonte();
			calculeLutte();
            competenceClasseDruide()
			break;
		case 'Ensorceleur' :
			toucherCommeMagicien();
			sauverCommeMagicien();
			calculeReflexes();
			calculeVigeur();
			calculeVolonte();
			calculeLutte();
            competenceClasseEnsorceleur()
			break;
		case 'Guerrier' :
			toucherCommeGuerrier();
			sauverCommeGuerrier();
			calculeReflexes();
			calculeVigeur();
			calculeVolonte();
			calculeLutte();
            competenceClasseGuerrier()
			break;
		case 'Magicien' :
			toucherCommeMagicien();
			sauverCommeMagicien();
			calculeReflexes();
			calculeVigeur();
			calculeVolonte();
			calculeLutte();

            affichageEcoles(document.form.ecole_I);
            affichageEcoles(document.form.ecole_II);
            affichageEcoles(document.form.ecole_III);

            competenceClasseMagicien()
			break;
		case 'Moine' :
			toucherCommePretre();
			sauverCommeMoine();
			calculeReflexes();
			calculeVigeur();
			calculeVolonte();
			calculeLutte();
            competenceClasseMoine()
			break;
		case 'Paladin' :
			toucherCommeGuerrier();
			sauverCommeGuerrier();
			calculeReflexes();
			calculeVigeur();
			calculeVolonte();
			calculeLutte();
            competenceClassePaladin()
			break;
		case 'Prêtre' :
			toucherCommePretre();
			sauverCommePretre();
			calculeReflexes();
			calculeVigeur();
			calculeVolonte();
			calculeLutte();
            competenceClassePrêtre()
			break;
		case 'Rôdeur' :
			toucherCommeGuerrier();
			sauverCommeRodeur();
			calculeReflexes();
			calculeVigeur();
			calculeVolonte();
			calculeLutte();
            competenceClasseRodeur()
			break;
		case 'Roublard' :
			toucherCommePretre();
			sauverCommeRoublard();
			calculeReflexes();
			calculeVigeur();
			calculeVolonte();
			calculeLutte();
            competenceClasseRoublard()
			break;
	}

    var competenceDeClasse = new Array();

    competenceDeClasse = ['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23'];
 
    limitationOption('acrobatie',document.form.acrobatie_maîtrise,competenceDeClasse);
    limitationOption('art_de_la_magie',document.form.art_de_la_magie_maîtrise,competenceDeClasse);
    limitationOption('artisanat_I',document.form.artisanat_I_maîtrise,competenceDeClasse);
    limitationOption('artisanat_II',document.form.artisanat_II_maîtrise,competenceDeClasse);
    limitationOption('artisanat_III',document.form.artisanat_III_maîtrise,competenceDeClasse);
    limitationOption('bluf',document.form.bluf_maîtrise,competenceDeClasse);
    limitationOption('concentration',document.form.concentration_maîtrise,competenceDeClasse);
    limitationOption('connaissances_I',document.form.connaissances_I_maîtrise,competenceDeClasse);
    limitationOption('connaissances_II',document.form.connaissances_II_maîtrise,competenceDeClasse);
    limitationOption('connaissances_III',document.form.connaissances_III_maîtrise,competenceDeClasse);
    limitationOption('connaissances_IV',document.form.connaissances_IV_maîtrise,competenceDeClasse);
    limitationOption('connaissances_V',document.form.connaissances_V_maîtrise,competenceDeClasse);
    limitationOption('contrefaçon',document.form.contrefaçon_maîtrise,competenceDeClasse);
    limitationOption('crochetage',document.form.crochetage_maîtrise,competenceDeClasse);
    limitationOption('décriptage',document.form.décriptage_maîtrise,competenceDeClasse);
    limitationOption('déguisement',document.form.déguisement_maîtrise,competenceDeClasse);
    limitationOption('déplacement_silencieux',document.form.déplacement_silencieux_maîtrise,competenceDeClasse);
    limitationOption('désamorçage_sabotage',document.form.désamorçage_sabotage_maîtrise,competenceDeClasse);
    limitationOption('détection',document.form.détection_maîtrise,competenceDeClasse);
    limitationOption('diplomatie',document.form.diplomatie_maîtrise,competenceDeClasse);
    limitationOption('discrétion',document.form.discrétion_maîtrise,competenceDeClasse);
    limitationOption('dressage',document.form.dressage_maîtrise,competenceDeClasse);
    limitationOption('equilibre',document.form.equilibre_maîtrise,competenceDeClasse);
    limitationOption('equitation',document.form.equitation_maîtrise,competenceDeClasse);
    limitationOption('escalade',document.form.escalade_maîtrise,competenceDeClasse);
    limitationOption('escamotage',document.form.escamotage_maîtrise,competenceDeClasse);
    limitationOption('estimation',document.form.estimation_maîtrise,competenceDeClasse);
    limitationOption('évasion',document.form.évasion_maîtrise,competenceDeClasse);
    limitationOption('intimidation',document.form.intimidation_maîtrise,competenceDeClasse);
    limitationOption('langues',document.form.langues_maîtrise,competenceDeClasse);
    limitationOption('maîtrise_des_cordes',document.form.maîtrise_des_cordes_maîtrise,competenceDeClasse);
    limitationOption('natation',document.form.natation_maîtrise,competenceDeClasse);
    limitationOption('perception_auditive',document.form.perception_auditive_maîtrise,competenceDeClasse);
    limitationOption('premier_secours',document.form.premier_secours_maîtrise,competenceDeClasse);
    limitationOption('profession_I',document.form.profession_I_maîtrise,competenceDeClasse);
    limitationOption('profession_II',document.form.profession_II_maîtrise,competenceDeClasse);
    limitationOption('psychologie',document.form.psychologie_maîtrise,competenceDeClasse);
    limitationOption('renseignements',document.form.renseignements_maîtrise,competenceDeClasse);
    limitationOption('représentation_I',document.form.représentation_I_maîtrise,competenceDeClasse);
    limitationOption('représentation_II',document.form.représentation_II_maîtrise,competenceDeClasse);
    limitationOption('représentation_III',document.form.représentation_III_maîtrise,competenceDeClasse);
    limitationOption('saut',document.form.saut_maîtrise,competenceDeClasse);
    limitationOption('survie',document.form.survie_maîtrise,competenceDeClasse);
    limitationOption('utilisation_d_objets_magiques',document.form.utilisation_d_objets_magiques_maîtrise,competenceDeClasse);

    affichagePointsExperience(document.form.niveau.value);
};

function limitationOption(competenceI,competenceII,competenceDeClasse) {
    switch(document.getElementById(competenceI).html()) {
        case '<h2>X</h2>' :
            for (var nombElement = 0; nombElement < (parseInt($('#ide').html()) + 1); nombElement++) {
                competenceII.options[nombElement] = new Option(competenceDeClasse[nombElement],competenceDeClasse[nombElement]);
            };
            break;
        case '<h2>O</h2>' :
            for (var nombElement = 0; nombElement < (parseInt($('#hide').html()) + 1); nombElement++) {
                competenceII.options[nombElement] = new Option(competenceDeClasse[nombElement],competenceDeClasse[nombElement]);
            };
            break;
    };
}

function affichagePointsExperience(valeur) {
    switch(valeur) {
        case '00' :
            $('#prochain_niveau').html('0');
            break;
        case '00' :
            $('#prochain_niveau').html('0');
            break;
        case '01' :
            $('#prochain_niveau').html('1 000');
            break;
        case '02' :
            $('#prochain_niveau').html('3 000');
            break;
        case '03' :
            $('#prochain_niveau').html('6 000');
            break;
        case '04' :
            $('#prochain_niveau').html('10 000');
            break;
        case '05' :
            $('#prochain_niveau').html('15 000');
            break;
        case '06' :
            $('#prochain_niveau').html('21 000');
            break;
        case '07' :
            $('#prochain_niveau').html('28 000');
            break;
        case '08' :
            $('#prochain_niveau').html('36 000');
            break;
        case '09' :
            $('#prochain_niveau').html('45 000');
            break;
        case '10' :
            $('#prochain_niveau').html('55 000');
            break;
        case '11' :
            $('#prochain_niveau').html('66 000');
            break;
        case '12' :
            $('#prochain_niveau').html('78 000');
            break;
        case '13' :
            $('#prochain_niveau').html('91 000');
            break;
        case '14' :
            $('#prochain_niveau').html('105 000');
            break;
        case '15' :
            $('#prochain_niveau').html('120 000');
            break;
        case '16' :
            $('#prochain_niveau').html('136 000');
            break;
        case '17' :
            $('#prochain_niveau').html('153 000');
            break;
        case '18' :
            $('#prochain_niveau').html('171 000');
            break;
        case '19' :
            $('#prochain_niveau').html('190 000');
            break;
    }
};

function influenceRace() {
    $('#vit').html('9m');
    document.form.for_val.value = 0;
    document.form.dex_val.value = 0;
    document.form.con_val.value = 0;
    document.form.int_val.value = 0;
    document.form.sag_val.value = 0;
    document.form.cha_val.value = 0;

	switch(document.form.race.value) {
		case 'Humain' :
            $('#traits_I').html('1 don supplémentaire au niveau 1.');
            $('#traits_II').html('4 points de compétence supplémentaires au niveau 1');
            $('#traits_III').html('_et 1 point de compétence supplémentaire à chaque niveau par la suite.');
            $('#traits_IV').html('Langues : commun et au choix.');
			break;
		case 'Demi-elfe' :
            $('#totalCompetenceDétection').html(1);
            document.form.détection_divers.value = +1;
            $('#totalCompetenceFouille').html(1);
            document.form.fouille_divers.value = +1;
            $('#totalCompetencePerception_auditive').html(1);
            document.form.perception_auditive_divers.value = +1;
            $('#totalCompetenceDiplomatie').html(2);
            document.form.diplomatie_divers.value = +2;
            $('#totalCompetenceRenseignements').html(2);
            document.form.renseignements_divers.value = +2;

            $('#traits_I').html('Immunité contre les sorts et effets magiques de type sommeil,');
            $('#traits_II').html('_bonus de +2 contre les sorts d\'enchantements.');
            $('#traits_III').html('Les demi-elfes voient deux fois plus loin que les humains');
            $('#traits_IV').html('_dans des conditions de faible éclairages.');
            $('#traits_V').html('+1 aux tests de détection, fouille et perception auditive.');
            $('#traits_VI').html('+2 aux tests de diplomatie et de renseignements.');
            $('#traits_VII').html('Ils sont considérés comme des elfes à part entière ');
            $('#traits_VIII').html('_pour tous les effets dépendant de la race.');
            $('#traits_IX').html('Langues d\'offices : commun et elfe.');

			break;
		case 'Demi-orque' :
			document.form.for_val.value = +2;
			document.form.int_val.value = -2;
			document.form.cha_val.value = -2;

            $('#traits_I').html('Orque et demi-orque voient à 18 mètres dans le noir le plus complet.');
            $('#traits_II').html('Ils sont considérés comme des orques à part entière ');
            $('#traits_III').html('_pour tous les effets dépendant de la race.');
            $('#traits_IV').html('Langues d\'offices : commun et orque.');
            $('#traits_V').html('Langues supplémentaires : abyssale, draconien, géant, gnoll, et gobelin.');
            $('#traits_VI').html('Classe de prédilection : barbare.');

			break;
		case 'Elfe' :
            $('#totalCompetenceDétection').html(2);
            document.form.détection_divers.value = +2;
            $('#totalCompetenceFouille').html(2);
            document.form.fouille_divers.value = +2;
            $('#totalCompetencePerception_auditive').html(2);
            document.form.perception_auditive_divers.value = +2;
     		document.form.dex_val.value = +2;
			document.form.con_val.value = -2;

            $('#traits_I').html('Immunité contre les sorts et effets magiques de type sommeil,');
            $('#traits_II').html('_bonus de +2 contre les sorts d\'enchantements.');
            $('#traits_III').html('Les elfes voient deux fois plus loin que les humains');
            $('#traits_IV').html('_dans des conditions de faible éclairages.');
            $('#traits_V').html('Tous les elfes possèdent le don maniement d\'une arme de guerre');
            $('#traits_VI').html('_pour l\'épée longue, la rapière et les arcs.');
            $('#traits_VII').html('+2 aux tests de détection, fouille et perception auditive.');
            $('#traits_VIII').html('Test de fouille lorsqu\'ils passent à moins de 1,5m d\'un passage secret.');
            $('#traits_IX').html('Langues d\'offices : commun et elfe.');
            $('#traits_X').html('Langues supplémentaires : draconien, goll, gnome, gobelin, orque et sylveste.');
            $('#traits_XI').html('Classe de prédilection : magicien.');

			break;
		case 'Gnome' :
            $('#totalCompetencePerception_auditive').html(2);
            document.form.perception_auditive_divers.value = +2;
			$('#vit').html('6m');
			document.form.for_val.value = -2;
			document.form.con_val.value = +2;

            $('#traits_I').html('Les gnomes voient deux fois plus loin que les humains');
            $('#traits_II').html('_dans des conditions de faible éclairages.');
            $('#traits_III').html('Pour les gnomes le marteau-piolet est une arme de guerre.');
            $('#traits_IV').html('+2 aux jets des sauvegarde contre les illusions.');
            $('#traits_V').html('+1 au DD de jet des sauvergade contre tous les sorts de l\'école des illusions.');
            $('#traits_VI').html('+1 aux jets d\'attaque contre les kobolds et les goblinoïdes.');
            $('#traits_VII').html('+4 en esquive contre les créatures appartenant au type géant.');
            $('#traits_VIII').html('+2 aux tests de perception auditive.');
            $('#traits_IX').html('+2 aux tests de d\'alchimie.');
            $('#traits_X').html('Langues d\'offices : commun et gnome.');
            $('#traits_XI').html('Langues supplémentaires : draconien, elfe, géant, gobelin, orque, nain');
            $('#traits_XII').html('_et orque.');
            $('#traits_XIII').html('Communication avec les animaux fouisseurs une fois par jour.');
            $('#traits_XIV').html('Les gnomes ayant au moins 10 en charisme peuvent lancer lumière dansantes,');
            $('#traits_XV').html('_presdigitation et son imaginaire 1 fois par jour.');
            $('#traits_XVI').html('Classe de prédilection : barde.');

			break;
		case 'Halfelin' :
            $('#totalCompetenceDéplacement_silencieux').html(2);
            document.form.déplacement_silencieux_divers.value = +2;
            $('#totalCompetenceEscalade').html(2);
            document.form.escalade_divers.value = +2;
            $('#totalCompetenceSaut').html(2);
            document.form.saut_divers.value = +2;
            $('#totalCompetencePerception_auditive').html(2);
            document.form.perception_auditive_divers.value = +2;
			$('#vit').html('6m');
			document.form.for_val.value = -2;
			document.form.dex_val.value = +2;

            $('#traits_I').html('+2 aux tests de déplacement silencieux, escalade et sauts.');
            $('#traits_II').html('+1 à tous les jets de sauvegarde.');
            $('#traits_III').html('+2 aux jets de sauvegarde contre la terreur.');
            $('#traits_IV').html('+1 aux jets d\'attaque avec les armes de jets et fronde.');
            $('#traits_V').html('+2 aux tests de perception auditive.');
            $('#traits_VI').html('Langues d\'offices : commun et halfelin.');
            $('#traits_VII').html('Langues supplémentaires : elfe, gnome, gobelin, nain  et orque');
            $('#traits_VIII').html('Classe de prédilection : roublard.');

			break;
		case 'Nain' :
			$('#vit').html('6m');
			document.form.con_val.value = +2;
			document.form.cha_val.value = -2;

            $('#traits_I').html('Les nains voient à 18 mètres dans le noir le plus complet.');
            $('#traits_II').html('+2 aux tests de fouille visant à remarquer si la roche a été travaillée.');
            $('#traits_III').html('Test de fouille lorsqu\'ils passent à moins de 3m d\'une roche travaillée.');
            $('#traits_IV').html('Pour les nains la hache de guerre naine et l\'urgrosh sont des armes de guerre.');
            $('#traits_V').html('+4 pour résister aux bousculade et au croc-en-jambe.');
            $('#traits_VI').html('+2 au jet de sauvgarde contre le poison.');
            $('#traits_VII').html('+2 aux jets de sauvegarde contre tous les sorts et effets imitant des sorts');
            $('#traits_VIII').html('+1 aux jets d\'attaque contre les orques et les goblinoïdes.');
            $('#traits_IX').html('+4 en esquive contre les créatures appartenant au type géant.');
            $('#traits_X').html('+2 en estimation sur les objets en métal ou en pierre.');
            $('#traits_XI').html('+2 en artisanat lié au métal et à la pierre.');
            $('#traits_XII').html('Langues d\'offices : commun et nain.');
            $('#traits_XIII').html('Langues supplémentaires : commun des profondeur, géant, gnome, gobelin,');
            $('#traits_XIV').html('_orque et terreux.');
            $('#traits_XV').html('Classe de prédilection : guerrier.');

			break;
	}
};

function calculTaillePoids() {
    var humainTM = new Array();
    var HumainTF = new Array();
    var Demi_elfeTM = new Array();
    var Demi_elfeTF = new Array();
    var Demi_orqueTM = new Array();
    var Demi_orqueTF = new Array();
    var ElfeTM = new Array();
    var ElfeTF = new Array();
    var GnomeTM = new Array();
    var GnomeTF = new Array();
    var HalfelinTM = new Array();
    var HalfelinTF = new Array();
    var NainTM = new Array();
    var NainTF = new Array();

	HumainTM = ['1,50 m','1.55 m','1,60 m','1,65 m','1,70 m','1,75 m','1,80 m','1,85 m','1,90 m','1,95 m','2 m'];
    HumainTF = ['1,35 m','1,40 m','1,45 m','1,50 m','1,50 m','1,50 m','1,55 m','1,60 m','1,65 m','1,70 m','1,75 m'];
    Demi_elfeTM = ['1,40 m','1,44 m','1,52 m','1,56 m','1,60 m','1,64 m','1,68 m','1,72 m','1,76 m','1,80 m','1,84 m'];
    Demi_elfeTF = ['1,35 m','1,39 m','1,43 m','1,47 m','1,51 m','1,55 m','1,59 m','1,63 m','1,67 m','1,71 m','1,75 m'];
    Demi_orqueTM = ['1,50 m','1,56 m','1,62 m','1,68 m','1,74 m','1,80 m','1,86 m','1,92 m','1,98 m','2,04 m','2,10 m'];
    Demi_orqueTF = ['1,35 m','1,41 m','1,47 m','1,53 m','1,59 m','1,65 m','1,71 m','1,77 m','1,83 m','1,89 m','1,95 m'];
    ElfeTM = ['1,35 m','1,38 m','1,41 m','1,44 m','1,47 m','1,50 m','1,53 m','1,56 m','1,59 m','1,62 m','1,65 m'];
    ElfeTF = ['1,35 m','1,38 m','1,41 m','1,44 m','1,47 m','1,50 m','1,53 m','1,56 m','1,59 m','1,62 m','1,65 m'];
    GnomeTM = ['0,90 m','0,92 m','0,94 m','0,96 m','0,98 m','1,00 m','1,02 m','1,04 m','1,06 m','1,08 m','1,10 m'];
    GnomeTF = ['0,85 m','0,92 m','0,94 m','0,96 m','0,98 m','1,00 m','1,02 m','1,04 m','1,06 m','1,08 m','1,10 m'];
    HalfelinTM = ['0,80 m','0,82 m','0,84 m','0,86 m','0,88 m','0,90 m','0,92 m','0,94 m','0,96 m','0,98 m','1,00 m'];
    HalfelinTF = ['0,75 m','0,77 m','0,79 m','0,81 m','0,83 m','0,85 m','0,87 m','0,89 m','0,91 m','0,93 m','0,95 m'];
    NainTM = ['1,15 m','1,17 m','1,19 m','1,21 m','1,23 m','1,25 m','1,27 m','1,29 m','1,31 m','1,33 m','1,35 m'];
    NainTF = ['1,10 m','1,12 m','1,14 m','1,16 m','1,18 m','1,20 m','1,22 m','1,24 m','1,26 m','1,28 m','1,30 m'];
 
 	var HumainPM = new Array();
    var HumainPF = new Array();
    var Demi_elfePM = new Array();
    var Demi_elfePF = new Array();
    var Demi_orquePM = new Array();
    var Demi_orquePF = new Array();
    var ElfePM = new Array();
    var ElfePF = new Array();
    var GnomePM = new Array();
    var GnomePF = new Array();
    var HalfelinPM = new Array();
    var HalfelinPF = new Array();
    var NainPM = new Array();
    var NainPF = new Array();

	HumainPM = ['60 kg','65 kg','70 kg','75 kg','80 kg','85 kg','90 kg','95 kg','100 kg','105 kg','110 kg'];
    HumainPF = ['42 kg','47 kg','52 kg','57 kg','62 kg','67 kg','72 kg','77 kg','82 kg','87 kg','92 kg'];
    Demi_elfePM = ['50 kg','54 kg','58 kg','62 kg','66 kg','70 kg','74 kg','78 kg','82 kg','86 kg','90 kg'];
    Demi_elfePF = ['40 kg','44 kg','48 kg','52 kg','56 kg','60 kg','64 kg','68 kg','72 kg','76 kg','80 kg'];
    Demi_orquePM = ['75 kg','83 kg','91 kg','99 kg','107 kg','115 kg','123 kg','131 kg','139 kg','147 kg','155 kg'];
    Demi_orquePF = ['55 kg','63 kg','71 kg','79 kg','87 kg','95 kg','103 kg','111 kg','119 kg','127 kg','135 kg'];
    ElfePM = ['42 kg','44 kg','46 kg','48 kg','50 kg','52 kg','54 kg','56 kg','58 kg','60 kg','62 kg'];
    ElfePF = ['40 kg','42 kg','44 kg','46 kg','48 kg','50 kg','52 kg','54 kg','56 kg','58 kg','60 kg'];
    GnomePM = ['20 kg','20,5 kg','21 kg','21,5 kg','22 kg','22,5 kg','23 kg','23,5 kg','24 kg','24,5 kg','25 kg'];
    GnomePF = ['17 kg','17,5 kg','18 kg','18,5 kg','19 kg','19,5 kg','20 kg','20,5 kg','21 kg','21,5 kg','22 kg'];
    HalfelinPM = ['15 kg','15,5 kg','16 kg','16,5 kg','17 kg','17,5 kg','18 kg','18,5 kg','19 kg','19,5 kg','20 kg'];
    HalfelinPF = ['12 kg','12,5 kg','13 kg','13,5 kg','14 kg','14,5 kg','15 kg','15,5 kg','16 kg','16,5 kg','17 kg'];
    NainPM = ['65 kg','68 kg','71 kg','74 kg','77 kg','80 kg','83 kg','86 kg','89 kg','92 kg','95 kg'];
    NainPF = ['50 kg','53 kg','56 kg','59 kg','62 kg','65 kg','68 kg','71 kg','74 kg','77 kg','80 kg'];

	switch(document.form.race.value) {
		case 'Humain' :
			if (document.form.sexe.value == 'Masculin') {
				for (var nombElement = 0; nombElement < HumainTM.length; nombElement++) {
					document.form.taille.options[nombElement] = new Option(HumainTM[nombElement],HumainTM[nombElement]);
				};
				for (var nombElement = 0; nombElement < HumainPM.length; nombElement++) {
					document.form.poids.options[nombElement] = new Option(HumainPM[nombElement],HumainPM[nombElement]);
				};
			} else {
				for (var nombElement = 0; nombElement < HumainTF.length; nombElement++) {
					document.form.taille.options[nombElement] = new Option(HumainTF[nombElement],HumainTF[nombElement]);
				};
				for (var nombElement = 0; nombElement < HumainPF.length; nombElement++) {
					document.form.poids.options[nombElement] = new Option(HumainPF[nombElement],HumainPF[nombElement]);
				};
			};
			break;
		case 'Demi-elfe' :
			if (document.form.sexe.value == 'Masculin') {
				for (var nombElement = 0; nombElement < Demi_elfeTM.length; nombElement++) {
					document.form.taille.options[nombElement] = new Option(Demi_elfeTM[nombElement],Demi_elfeTM[nombElement]);
				};
				for (var nombElement = 0; nombElement < Demi_elfePM.length; nombElement++) {
					document.form.poids.options[nombElement] = new Option(Demi_elfePM[nombElement],Demi_elfePM[nombElement]);
				};
			} else {
				for (var nombElement = 0; nombElement < Demi_elfeTF.length; nombElement++) {
					document.form.taille.options[nombElement] = new Option(Demi_elfeTF[nombElement],Demi_elfeTF[nombElement]);
				};
				for (var nombElement = 0; nombElement < Demi_elfePF.length; nombElement++) {
					document.form.poids.options[nombElement] = new Option(Demi_elfePF[nombElement],Demi_elfePF[nombElement]);
				};
			};
			break;
		case 'Demi-orque' :
			if (document.form.sexe.value == 'Masculin') {
				for (var nombElement = 0; nombElement < Demi_orqueTM.length; nombElement++) {
					document.form.taille.options[nombElement] = new Option(Demi_orqueTM[nombElement],Demi_orqueTM[nombElement]);
				};
				for (var nombElement = 0; nombElement < Demi_orquePM.length; nombElement++) {
					document.form.poids.options[nombElement] = new Option(Demi_orquePM[nombElement],Demi_orquePM[nombElement]);
				};
			} else {
				for (var nombElement = 0; nombElement < Demi_orqueTF.length; nombElement++) {
					document.form.taille.options[nombElement] = new Option(Demi_orqueTF[nombElement],Demi_orqueTF[nombElement]);
				};
				for (var nombElement = 0; nombElement < Demi_orquePF.length; nombElement++) {
					document.form.poids.options[nombElement] = new Option(Demi_orquePF[nombElement],Demi_orquePF[nombElement]);
				};
			};
			break;
		case 'Elfe' :
			if (document.form.sexe.value == 'Masculin') {
				for (var nombElement = 0; nombElement < ElfeTM.length; nombElement++) {
					document.form.taille.options[nombElement] = new Option(ElfeTM[nombElement],ElfeTM[nombElement]);
				};
				for (var nombElement = 0; nombElement < ElfePM.length; nombElement++) {
					document.form.poids.options[nombElement] = new Option(ElfePM[nombElement],ElfePM[nombElement]);
				};
			} else {
				for (var nombElement = 0; nombElement < ElfeTF.length; nombElement++) {
					document.form.taille.options[nombElement] = new Option(ElfeTF[nombElement],ElfeTF[nombElement]);
				};
				for (var nombElement = 0; nombElement < ElfePF.length; nombElement++) {
					document.form.poids.options[nombElement] = new Option(ElfePF[nombElement],ElfePF[nombElement]);
				};
			};
			break;
		case 'Gnome' :
			if (document.form.sexe.value == 'Masculin') {
				for (var nombElement = 0; nombElement < GnomeTM.length; nombElement++) {
					document.form.taille.options[nombElement] = new Option(GnomeTM[nombElement],GnomeTM[nombElement]);
				};
				for (var nombElement = 0; nombElement < GnomePM.length; nombElement++) {
					document.form.poids.options[nombElement] = new Option(GnomePM[nombElement],GnomePM[nombElement]);
				};
			} else {
				for (var nombElement = 0; nombElement < GnomeTF.length; nombElement++) {
					document.form.taille.options[nombElement] = new Option(GnomeTF[nombElement],GnomeTF[nombElement]);
				};
				for (var nombElement = 0; nombElement < GnomePF.length; nombElement++) {
					document.form.poids.options[nombElement] = new Option(GnomePF[nombElement],GnomePF[nombElement]);
				};
			};
			break;
		case 'Halfelin' :
			if (document.form.sexe.value == 'Masculin') {
				for (var nombElement = 0; nombElement < HalfelinTM.length; nombElement++) {
					document.form.taille.options[nombElement] = new Option(HalfelinTM[nombElement],HalfelinTM[nombElement]);
				};
				for (var nombElement = 0; nombElement < HalfelinPM.length; nombElement++) {
					document.form.poids.options[nombElement] = new Option(HalfelinPM[nombElement],HalfelinPM[nombElement]);
				};
			} else {
				for (var nombElement = 0; nombElement < HalfelinTF.length; nombElement++) {
					document.form.taille.options[nombElement] = new Option(HalfelinTF[nombElement],HalfelinTF[nombElement]);
				};
				for (var nombElement = 0; nombElement < HalfelinPF.length; nombElement++) {
					document.form.poids.options[nombElement] = new Option(HalfelinPF[nombElement],HalfelinPF[nombElement]);
				};
			};
			break;
		case 'Nain' :
			if (document.form.sexe.value == 'Masculin') {
				for (var nombElement = 0; nombElement < NainTM.length; nombElement++) {
					document.form.taille.options[nombElement] = new Option(NainTM[nombElement],NainTM[nombElement]);
				};
				for (var nombElement = 0; nombElement < NainPM.length; nombElement++) {
					document.form.poids.options[nombElement] = new Option(NainPM[nombElement],NainPM[nombElement]);
				};
			} else {
				for (var nombElement = 0; nombElement < NainTF.length; nombElement++) {
					document.form.taille.options[nombElement] = new Option(NainTF[nombElement],NainTF[nombElement]);
				};
				for (var nombElement = 0; nombElement < NainPF.length; nombElement++) {
					document.form.poids.options[nombElement] = new Option(NainPF[nombElement],NainPF[nombElement]);
				};
			};
			break;
	}
};

function influenceFor() {
	var valeur = parseInt(document.form.for_val.value);
	/* on appel une fois calculeInfluence(valeur) et on stock son résultat dans resultatCalculeInfluence */
	var resultatCalculeInfluence = calculeInfluence(valeur);

	$('#for_mod').html(resultatCalculeInfluence);

	$('#lut_mod_for').html(resultatCalculeInfluence);

	calculeLutte();

    for (var i = 0; i < document.getElementsByClassName('carac_for').length; i++) {
        if (isNaN(parseInt(document.getElementsByClassName('carac_for')[i].html))) {
            var valeurB = 0;
        } else {
            var valeurB = parseInt(document.getElementsByClassName('carac_for')[i].html);
        };

        document.getElementsByClassName('carac_for')[i].html(valeurB
                                                                  + resultatCalculeInfluence);
    };

    calculeCharge(valeur);
};

function calculeCharge(valeur) {
    $('#chargeLegere').html('0');
    $('#chargeIntermediaire').html('0')
    $('#chargeLourde').html('0');
    $('#chargeMax').html('0');
    $('#soulever').html('0');
    $('#tirerOuPousser').html('0');

    switch(valeur) {
        case 1 :
            $('#chargeLegere').html('jusqu’à 1,5kg')
            $('#chargeIntermediaire').html('1,5–3kg')
            $('#chargeLourde').html('3–5kg')
            $('#chargeMax').html('5kg')
            $('#soulever').html('10kg')
            $('#tirerOuPousser').html('25kg')
            break;
        case 2 :
            $('#chargeLegere').html('jusqu’à 3kg')
            $('#chargeIntermediaire').html('3–6,5kg')
            $('#chargeLourde').html('6,5–10kg')
            $('#chargeMax').html('10kg')
            $('#soulever').html('20kg')
            $('#tirerOuPousser').html('50kg')
            break;
        case 3 :
            $('#chargeLegere').html('jusqu’à 5kg')
            $('#chargeIntermediaire').html('5–10kg')
            $('#chargeLourde').html('10–15kg')
            $('#chargeMax').html('15kg')
            $('#soulever').html('30kg')
            $('#tirerOuPousser').html('75kg')
            break;
        case 4 :
            $('#chargeLegere').html('jusqu’à 6,5kg')
            $('#chargeIntermediaire').html('6,5–13kg')
            $('#chargeLourde').html('13–20kg')
            $('#chargeMax').html('20kg')
            $('#soulever').html('40kg')
            $('#tirerOuPousser').html('100kg')
            break;
        case 5 :
            $('#chargeLegere').html('jusqu’à 8kg')
            $('#chargeIntermediaire').html('8–16,5kg')
            $('#chargeLourde').html('16,5–25kg')
            $('#chargeMax').html('25kg')
            $('#soulever').html('50kg')
            $('#tirerOuPousser').html('125kg')
            break;
        case 6 :
            $('#chargeLegere').html('jusqu’à 10kg')
            $('#chargeIntermediaire').html('10–20kg')
            $('#chargeLourde').html('20–30kg')
            $('#chargeMax').html('30kg')
            $('#soulever').html('60kg')
            $('#tirerOuPousser').html('150kg')
            break;
        case 7 :
            $('#chargeLegere').html('jusqu’à 11,5kg')
            $('#chargeIntermediaire').html('11,5–23kg')
            $('#chargeLourde').html('23–35kg')
            $('#chargeMax').html('35kg')
            $('#soulever').html('70kg')
            $('#tirerOuPousser').html('175kg')
            break;
        case 8 :
            $('#chargeLegere').html('jusqu’à 13kg')
            $('#chargeIntermediaire').html('13–26,5kg')
            $('#chargeLourde').html('26,5–40kg')
            $('#chargeMax').html('40kg')
            $('#soulever').html('80kg')
            $('#tirerOuPousser').html('200kg')
            break;
        case 9 :
            $('#chargeLegere').html('jusqu’à 15kg')
            $('#chargeIntermediaire').html('15–30kg')
            $('#chargeLourde').html('30–45kg')
            $('#chargeMax').html('45kg')
            $('#soulever').html('90kg')
            $('#tirerOuPousser').html('225kg')
            break;
        case 10 :
            $('#chargeLegere').html('jusqu’à 17,5kg')
            $('#chargeIntermediaire').html('17,5–33kg')
            $('#chargeLourde').html('33–50kg')
            $('#chargeMax').html('50kg')
            $('#soulever').html('100kg')
            $('#tirerOuPousser').html('250kg')
            break;
        case 11 :
            $('#chargeLegere').html('jusqu’à 19kg')
            $('#chargeIntermediaire').html('19–38kg')
            $('#chargeLourde').html('38–57,5kg')
            $('#chargeMax').html('57,5kg')
            $('#soulever').html('115kg')
            $('#tirerOuPousser').html('287,5kg')
            break;
        case 12 :
            $('#chargeLegere').html('jusqu’à 21,5kg')
            $('#chargeIntermediaire').html('21,5–43kg')
            $('#chargeLourde').html('43–65kg')
            $('#chargeMax').html('65kg')
            $('#soulever').html('120kg')
            $('#tirerOuPousser').html('325kg')
            break;
        case 13 :
            $('#chargeLegere').html('jusqu’à 25kg')
            $('#chargeIntermediaire').html('25–50kg')
            $('#chargeLourde').html('50–75kg')
            $('#chargeMax').html('75kg')
            $('#soulever').html('150kg')
            $('#tirerOuPousser').html('375kg')
            break;
        case 14 :
            $('#chargeLegere').html('jusqu’à 29kg')
            $('#chargeIntermediaire').html('29–58kg')
            $('#chargeLourde').html('58–87,5kg')
            $('#chargeMax').html('87,5kg')
            $('#soulever').html('175kg')
            $('#tirerOuPousser').html('437,5kg')
            break;
        case 15 :
            $('#chargeLegere').html('jusqu’à 33kg')
            $('#chargeIntermediaire').html('33–66,5kg')
            $('#chargeLourde').html('66,5–100kg')
            $('#chargeMax').html('100kg')
            $('#soulever').html('200kg')
            $('#tirerOuPousser').html('500kg')
            break;
        case 16 :
            $('#chargeLegere').html('jusqu’à 38kg')
            $('#chargeIntermediaire').html('38–76,5kg')
            $('#chargeLourde').html('76,5–115kg')
            $('#chargeMax').html('115kg')
            $('#soulever').html('225kg')
            $('#tirerOuPousser').html('575kg')
            break;
        case 17 :
            $('#chargeLegere').html('jusqu’à 43kg')
            $('#chargeIntermediaire').html('43–86,5kg')
            $('#chargeLourde').html('86,5–130kg')
            $('#chargeMax').html('130kg')
            $('#soulever').html('260kg')
            $('#tirerOuPousser').html('650kg')
            break;
        case 18 :
            $('#chargeLegere').html('jusqu’à 50kg')
            $('#chargeIntermediaire').html('50–100kg')
            $('#chargeLourde').html('100–150kg')
            $('#chargeMax').html('150kg')
            $('#soulever').html('300kg')
            $('#tirerOuPousser').html('750kg')
            break;
        case 19 :
            $('#chargeLegere').html('jusqu’à 58kg')
            $('#chargeIntermediaire').html('58–116,5kg')
            $('#chargeLourde').html('116,5–175kg')
            $('#chargeMax').html('175kg')
            $('#soulever').html('350kg')
            $('#tirerOuPousser').html('875kg')
            break;
        case 20 :
            $('#chargeLegere').html('jusqu’à 66,5kg')
            $('#chargeIntermediaire').html('66,5–133kg')
            $('#chargeLourde').html('133–200kg')
            $('#chargeMax').html('200kg')
            $('#soulever').html('400kg')
            $('#tirerOuPousser').html('1000kg')
            break;
        case 21 :
            $('#chargeLegere').html('jusqu’à 76,5kg')
            $('#chargeIntermediaire').html('76,5–153kg')
            $('#chargeLourde').html('153–230kg')
            $('#chargeMax').html('230kg')
            $('#soulever').html('460kg')
            $('#tirerOuPousser').html('1150kg')
            break;
        case 22 :
            $('#chargeLegere').html('jusqu’à 86,5kg')
            $('#chargeIntermediaire').html('86,5–173kg')
            $('#chargeLourde').html('173–260kg')
            $('#chargeMax').html('260kg')
            $('#soulever').html('520kg')
            $('#tirerOuPousser').html('1300kg')
            break;
        case 23 :
            $('#chargeLegere').html('jusqu’à 100 kg')
            $('#chargeIntermediaire').html('100–200kg')
            $('#chargeLourde').html('200–300kg')
            $('#chargeMax').html('300kg')
            $('#soulever').html('600kg')
            $('#tirerOuPousser').html('1500kg')
            break;
        case 24 :
            $('#chargeLegere').html('jusqu’à 116,5kg')
            $('#chargeIntermediaire').html('116,5–233kg')
            $('#chargeLourde').html('233–350kg')
            $('#chargeMax').html('350kg')
            $('#soulever').html('700kg')
            $('#tirerOuPousser').html('1750kg')
            break;
        case 25 :
            $('#chargeLegere').html('jusqu’à 133kg')
            $('#chargeIntermediaire').html('133–266,5kg')
            $('#chargeLourde').html('266,5–400kg')
            $('#chargeMax').html('400kg')
            $('#soulever').html('800kg')
            $('#tirerOuPousser').html('2000kg')
            break;
        case 26 :
            $('#chargeLegere').html('jusqu’à 153kg')
            $('#chargeIntermediaire').html('153–306,5kg')
            $('#chargeLourde').html('306,5–460kg')
            $('#chargeMax').html('460kg')
            $('#soulever').html('920kg')
            $('#tirerOuPousser').html('2300kg')
            break;
        case 27 :
            $('#chargeLegere').html('jusqu’à 173kg')
            $('#chargeIntermediaire').html('173–346,5kg')
            $('#chargeLourde').html('346,5–520kg')
            $('#chargeMax').html('520kg')
            $('#soulever').html('1040kg')
            $('#tirerOuPousser').html('2600kg')
            break;
        case 28 :
            $('#chargeLegere').html('jusqu’à 200kg')
            $('#chargeIntermediaire').html('200–400kg')
            $('#chargeLourde').html('400–600kg')
            $('#chargeMax').html('600kg')
            $('#soulever').html('1200kg')
            $('#tirerOuPousser').html('3000kg')
            break;
        case 29 :
            $('#chargeLegere').html('jusqu’à 233kg')
            $('#chargeIntermediaire').html('233–466,5kg')
            $('#chargeLourde').html('466,5–700kg')
            $('#chargeMax').html('700kg')
            $('#soulever').html('1400kg')
            $('#tirerOuPousser').html('3500kg')
            break;
    }
};

function influenceDex() {
	var valeur = parseInt(document.form.dex_val.value);
	/* on appel une fois calculeInfluence(valeur) et on stock son résultat dans resultatCalculeInfluence */
	var resultatCalculeInfluence = calculeInfluence(valeur);

	$('#dex_mod').html(resultatCalculeInfluence);
	$('#ca_mod_dex').html(resultatCalculeInfluence);

	$('#ca_total').html(calculeCa());
	$('#init_mod_dex').html(resultatCalculeInfluence);

	$('#val_ca_contact').html(calculeCaContact());
	$('#val_pri_depourvu').html(calculeCaPrisDepourvu());

	calculeInit();

	$('#sau_mod_car_ref').html(resultatCalculeInfluence);

	calculeReflexes();

    for (var i = 0; i < document.getElementsByClassName('carac_dex').length; i++) {
        if (isNaN(parseInt(document.getElementsByClassName('carac_dex')[i].html()))) {
            var valeur = 0;
        } else {
            var valeur = parseInt(document.getElementsByClassName('carac_dex')[i].html());
        };

        document.getElementsByClassName('carac_dex')[i].html(valeur
                                                                  + resultatCalculeInfluence);
    };
};

function influenceCon() {
	var valeur = parseInt(document.form.con_val.value);
	var resultatCalculeInfluence = calculeInfluence(valeur);

	$('#con_mod').html(resultatCalculeInfluence);

	$('#pv').html(CalculePv(resultatCalculeInfluence));

	$('#sau_mod_car_vig').html(resultatCalculeInfluence);

	calculeVigeur();

    for (var i = 0; i < document.getElementsByClassName('carac_con').length; i++) {
        if (isNaN(parseInt(document.getElementsByClassName('carac_con')[i].html()))) {
            var valeur = 0;
        } else {
            var valeur = parseInt(document.getElementsByClassName('carac_con')[i].html());
        };

        document.getElementsByClassName('carac_con')[i].html(valeur
                                                                  + resultatCalculeInfluence);
    };
};

function influenceInt() {
	var valeur = parseInt(document.form.int_val.value);
    var resultatCalculeInfluence = calculeInfluence(valeur);

	$('#int_mod').html(resultatCalculeInfluence);

    for (var i = 0; i < document.getElementsByClassName('carac_int').length; i++) {
        if (isNaN(parseInt(document.getElementsByClassName('carac_int')[i].html()))) {
            var valeur = 0;
        } else {
            var valeur = parseInt(document.getElementsByClassName('carac_int')[i].html());
        };

        document.getElementsByClassName('carac_int')[i].html(valeur
                                                                  + resultatCalculeInfluence);
    };

    if (document.form.classe.value == 'Magicien') {
        calculeSorts(resultatCalculeInfluence);
    } else {
        console.log('sorts');
        $('#sorts_connus_0').html('0');
        $('#sorts_connus_I').html('0');
        $('#sorts_connus_II').html('0');
        $('#sorts_connus_III').html('0');
        $('#sorts_connus_IV').html('0');
        $('#sorts_connus_V').html('0');
        $('#sorts_connus_VI').html('0');
        $('#sorts_connus_VII').html('0');
        $('#sorts_connus_VIII').html('0');
        $('#sorts_connus_IX').html('0');
    };
};

function  calculeSorts(valeur) {
    $('#dd_des_sorts').html(10 + 0 + parseInt(valeur));
    $('#dd_des_sorts_0').html(10 + 0 + parseInt(valeur));
    $('#dd_des_sorts_I').html(10 + 1 + parseInt(valeur));
    $('#dd_des_sorts_II').html(10 + 2 + parseInt(valeur));
    $('#dd_des_sorts_III').html(10 + 3 + parseInt(valeur));
    $('#dd_des_sorts_IV').html(10 + 4 + parseInt(valeur));
    $('#dd_des_sorts_V').html(10 + 5 + parseInt(valeur));
    $('#dd_des_sorts_VI').html(10 + 6 + parseInt(valeur));
    $('#dd_des_sorts_VII').html(10 + 7 + parseInt(valeur));
    $('#dd_des_sorts_VIII').html(10 + 8 + parseInt(valeur));
    $('#dd_des_sorts_IX').html(10 + 9 + parseInt(valeur));

    switch(document.form.niveau.value) {
        case '01' :
            $('#sorts_jour_0').html(3);
            $('#sorts_jour_I').html(1);
            $('#sorts_jour_II').html('-');
            $('#sorts_jour_III').html('-');
            $('#sorts_jour_IV').html('-');
            $('#sorts_jour_V').html('-');
            $('#sorts_jour_VI').html('-');
            $('#sorts_jour_VII').html('-');
            $('#sorts_jour_VIII').html('-');
            $('#sorts_jour_IX').html('-');
            break;
        case '02' :
            $('#sorts_jour_0').html(4);
            $('#sorts_jour_I').html(2);
            $('#sorts_jour_II').html('-');
            $('#sorts_jour_III').html('-');
            $('#sorts_jour_IV').html('-');
            $('#sorts_jour_V').html('-');
            $('#sorts_jour_VI').html('-');
            $('#sorts_jour_VII').html('-');
            $('#sorts_jour_VIII').html('-');
            $('#sorts_jour_IX').html('-');
            break;
        case '03' :
            $('#sorts_jour_0').html(4);
            $('#sorts_jour_I').html(2);
            $('#sorts_jour_II').html(1);
            $('#sorts_jour_III').html('-');
            $('#sorts_jour_IV').html('-');
            $('#sorts_jour_V').html('-');
            $('#sorts_jour_VI').html('-');
            $('#sorts_jour_VII').html('-');
            $('#sorts_jour_VIII').html('-');
            $('#sorts_jour_IX').html('-');
            break;
        case '04' :
            $('#sorts_jour_0').html(4);
            $('#sorts_jour_I').html(3);
            $('#sorts_jour_II').html(2);
            $('#sorts_jour_III').html('-');
            $('#sorts_jour_IV').html('-');
            $('#sorts_jour_V').html('-');
            $('#sorts_jour_VI').html('-');
            $('#sorts_jour_VII').html('-');
            $('#sorts_jour_VIII').html('-');
            $('#sorts_jour_IX').html('-');
            break;
        case '05' :
            $('#sorts_jour_0').html(4);
            $('#sorts_jour_I').html(3);
            $('#sorts_jour_II').html(2);
            $('#sorts_jour_III').html(1);
            $('#sorts_jour_IV').html('-');
            $('#sorts_jour_V').html('-');
            $('#sorts_jour_VI').html('-');
            $('#sorts_jour_VII').html('-');
            $('#sorts_jour_VIII').html('-');
            $('#sorts_jour_IX').html('-');
            break;
        case '06' :
            $('#sorts_jour_0').html(4);
            $('#sorts_jour_I').html(3);
            $('#sorts_jour_II').html(3);
            $('#sorts_jour_III').html(2);
            $('#sorts_jour_IV').html('-');
            $('#sorts_jour_V').html('-');
            $('#sorts_jour_VI').html('-');
            $('#sorts_jour_VII').html('-');
            $('#sorts_jour_VIII').html('-');
            $('#sorts_jour_IX').html('-');
            break;
        case '07' :
            $('#sorts_jour_0').html(4);
            $('#sorts_jour_I').html(4);
            $('#sorts_jour_II').html(3);
            $('#sorts_jour_III').html(2);
            $('#sorts_jour_IV').html(1);
            $('#sorts_jour_V').html('-');
            $('#sorts_jour_VI').html('-');
            $('#sorts_jour_VII').html('-');
            $('#sorts_jour_VIII').html('-');
            $('#sorts_jour_IX').html('-');
            break;
        case '08' :
            $('#sorts_jour_0').html(4);
            $('#sorts_jour_I').html(4);
            $('#sorts_jour_II').html(3);
            $('#sorts_jour_III').html(3);
            $('#sorts_jour_IV').html(2);
            $('#sorts_jour_V').html('-');
            $('#sorts_jour_VI').html('-');
            $('#sorts_jour_VII').html('-');
            $('#sorts_jour_VIII').html('-');
            $('#sorts_jour_IX').html('-');
            break;
        case '09' :
            $('#sorts_jour_0').html(4);
            $('#sorts_jour_I').html(4);
            $('#sorts_jour_II').html(4);
            $('#sorts_jour_III').html(3);
            $('#sorts_jour_IV').html(2);
            $('#sorts_jour_V').html(1);
            $('#sorts_jour_VI').html('-');
            $('#sorts_jour_VII').html('-');
            $('#sorts_jour_VIII').html('-');
            $('#sorts_jour_IX').html('-');
            break;
        case '10' :
            $('#sorts_jour_0').html(4);
            $('#sorts_jour_I').html(4);
            $('#sorts_jour_II').html(4);
            $('#sorts_jour_III').html(3);
            $('#sorts_jour_IV').html(3);
            $('#sorts_jour_V').html(2);
            $('#sorts_jour_VI').html('-');
            $('#sorts_jour_VII').html('-');
            $('#sorts_jour_VIII').html('-');
            $('#sorts_jour_IX').html('-');
            break;
        case '11' :
            $('#sorts_jour_0').html(4);
            $('#sorts_jour_I').html(4);
            $('#sorts_jour_II').html(4);
            $('#sorts_jour_III').html(4);
            $('#sorts_jour_IV').html(3);
            $('#sorts_jour_V').html(2);
            $('#sorts_jour_VI').html(1);
            $('#sorts_jour_VII').html('-');
            $('#sorts_jour_VIII').html('-');
            $('#sorts_jour_IX').html('-');
            break;
        case '12' :
            $('#sorts_jour_0').html(4);
            $('#sorts_jour_I').html(4);
            $('#sorts_jour_II').html(4);
            $('#sorts_jour_III').html(4);
            $('#sorts_jour_IV').html(3);
            $('#sorts_jour_V').html(3);
            $('#sorts_jour_VI').html(2);
            $('#sorts_jour_VII').html('-');
            $('#sorts_jour_VIII').html('-');
            $('#sorts_jour_IX').html('-');
            break;
        case '13' :
            $('#sorts_jour_0').html(4);
            $('#sorts_jour_I').html(4);
            $('#sorts_jour_II').html(4);
            $('#sorts_jour_III').html(4);
            $('#sorts_jour_IV').html(4);
            $('#sorts_jour_V').html(3);
            $('#sorts_jour_VI').html(2);
            $('#sorts_jour_VII').html(1);
            $('#sorts_jour_VIII').html('-');
            $('#sorts_jour_IX').html('-');
            break;
        case '14' :
            $('#sorts_jour_0').html(4);
            $('#sorts_jour_I').html(4);
            $('#sorts_jour_II').html(4);
            $('#sorts_jour_III').html(4);
            $('#sorts_jour_IV').html(4);
            $('#sorts_jour_V').html(3);
            $('#sorts_jour_VI').html(3);
            $('#sorts_jour_VII').html(2);
            $('#sorts_jour_VIII').html('-');
            $('#sorts_jour_IX').html('-');
            break;
        case '15' :
            $('#sorts_jour_0').html(4);
            $('#sorts_jour_I').html(4);
            $('#sorts_jour_II').html(4);
            $('#sorts_jour_III').html(4);
            $('#sorts_jour_IV').html(4);
            $('#sorts_jour_V').html(4);
            $('#sorts_jour_VI').html(3);
            $('#sorts_jour_VII').html(2);
            $('#sorts_jour_VIII').html(1);
            $('#sorts_jour_IX').html('-');
            break;
        case '16' :
            $('#sorts_jour_0').html(4);
            $('#sorts_jour_I').html(4);
            $('#sorts_jour_II').html(4);
            $('#sorts_jour_III').html(4);
            $('#sorts_jour_IV').html(4);
            $('#sorts_jour_V').html(4);
            $('#sorts_jour_VI').html(3);
            $('#sorts_jour_VII').html(3);
            $('#sorts_jour_VIII').html(2);
            $('#sorts_jour_IX').html('-');
            break;
        case '17' :
            $('#sorts_jour_0').html(4);
            $('#sorts_jour_I').html(4);
            $('#sorts_jour_II').html(4);
            $('#sorts_jour_III').html(4);
            $('#sorts_jour_IV').html(4);
            $('#sorts_jour_V').html(4);
            $('#sorts_jour_VI').html(4);
            $('#sorts_jour_VII').html(3);
            $('#sorts_jour_VIII').html(2);
            $('#sorts_jour_IX').html(1);
            break;
        case '18' :
            $('#sorts_jour_0').html(4);
            $('#sorts_jour_I').html(4);
            $('#sorts_jour_II').html(4);
            $('#sorts_jour_III').html(4);
            $('#sorts_jour_IV').html(4);
            $('#sorts_jour_V').html(4);
            $('#sorts_jour_VI').html(4);
            $('#sorts_jour_VII').html(3);
            $('#sorts_jour_VIII').html(3);
            $('#sorts_jour_IX').html(2);
            break;
        case '19' :
            $('#sorts_jour_0').html(4);
            $('#sorts_jour_I').html(4);
            $('#sorts_jour_II').html(4);
            $('#sorts_jour_III').html(4);
            $('#sorts_jour_IV').html(4);
            $('#sorts_jour_V').html(4);
            $('#sorts_jour_VI').html(4);
            $('#sorts_jour_VII').html(4);
            $('#sorts_jour_VIII').html(3);
            $('#sorts_jour_IX').html(3);
            break;
        case '20' :
            $('#sorts_jour_0').html(4);
            $('#sorts_jour_I').html(4);
            $('#sorts_jour_II').html(4);
            $('#sorts_jour_III').html(4);
            $('#sorts_jour_IV').html(4);
            $('#sorts_jour_V').html(4);
            $('#sorts_jour_VI').html(4);
            $('#sorts_jour_VII').html(4);
            $('#sorts_jour_VIII').html(4);
            $('#sorts_jour_IX').html(4);
            break;
    };

    $('#sorts_en_bonus_0').html('-');
    $('#sorts_en_bonus_I').html('-');
    $('#sorts_en_bonus_II').html('-');
    $('#sorts_en_bonus_III').html('-');
    $('#sorts_en_bonus_IV').html('-');
    $('#sorts_en_bonus_V').html('-');
    $('#sorts_en_bonus_VI').html('-');
    $('#sorts_en_bonus_VII').html('-');
    $('#sorts_en_bonus_VIII').html('-');
    $('#sorts_en_bonus_IX').html('-');

    switch(valeur) {
        case 1 :
            $('#sorts_en_bonus_I').html(1);
            $('#sorts_en_bonus_II').html('-');
            $('#sorts_en_bonus_III').html('-');
            $('#sorts_en_bonus_IV').html('-');
            $('#sorts_en_bonus_V').html('-');
            $('#sorts_en_bonus_VI').html('-');
            $('#sorts_en_bonus_VII').html('-');
            $('#sorts_en_bonus_VIII').html('-');
            $('#sorts_en_bonus_IX').html('-');
            break;
        case 2 :
            $('#sorts_en_bonus_I').html(1);
            $('#sorts_en_bonus_II').html(1);
            $('#sorts_en_bonus_III').html('-');
            $('#sorts_en_bonus_IV').html('-');
            $('#sorts_en_bonus_V').html('-');
            $('#sorts_en_bonus_VI').html('-');
            $('#sorts_en_bonus_VII').html('-');
            $('#sorts_en_bonus_VIII').html('-');
            $('#sorts_en_bonus_IX').html('-');
            break;
        case 3 :
            $('#sorts_en_bonus_I').html(1);
            $('#sorts_en_bonus_II').html(1);
            $('#sorts_en_bonus_III').html(1);
            $('#sorts_en_bonus_IV').html('-');
            $('#sorts_en_bonus_V').html('-');
            $('#sorts_en_bonus_VI').html('-');
            $('#sorts_en_bonus_VII').html('-');
            $('#sorts_en_bonus_VIII').html('-');
            $('#sorts_en_bonus_IX').html('-');
            break;
        case 4 :
            $('#sorts_en_bonus_I').html(1);
            $('#sorts_en_bonus_II').html(1);
            $('#sorts_en_bonus_III').html(1);
            $('#sorts_en_bonus_IV').html(1);
            $('#sorts_en_bonus_V').html('-');
            $('#sorts_en_bonus_VI').html('-');
            $('#sorts_en_bonus_VII').html('-');
            $('#sorts_en_bonus_VIII').html('-');
            $('#sorts_en_bonus_IX').html('-');
            break;
        case 5 :
            $('#sorts_en_bonus_I').html(2);
            $('#sorts_en_bonus_II').html(1);
            $('#sorts_en_bonus_III').html(1);
            $('#sorts_en_bonus_IV').html(1);
            $('#sorts_en_bonus_V').html(1);
            $('#sorts_en_bonus_VI').html('-');
            $('#sorts_en_bonus_VII').html('-');
            $('#sorts_en_bonus_VIII').html('-');
            $('#sorts_en_bonus_IX').html('-');
            break;
        case 6 :
            $('#sorts_en_bonus_I').html(2);
            $('#sorts_en_bonus_II').html(2);
            $('#sorts_en_bonus_III').html(1);
            $('#sorts_en_bonus_IV').html(1);
            $('#sorts_en_bonus_V').html(1);
            $('#sorts_en_bonus_VI').html(1);
            $('#sorts_en_bonus_VII').html('-');
            $('#sorts_en_bonus_VIII').html('-');
            $('#sorts_en_bonus_IX').html('-');
            break;
        case 7 :
            $('#sorts_en_bonus_I').html(2);
            $('#sorts_en_bonus_II').html(2);
            $('#sorts_en_bonus_III').html(2);
            $('#sorts_en_bonus_IV').html(1);
            $('#sorts_en_bonus_V').html(1);
            $('#sorts_en_bonus_VI').html(1);
            $('#sorts_en_bonus_VII').html(1);
            $('#sorts_en_bonus_VIII').html('-');
            $('#sorts_en_bonus_IX').html('-');
            break;
        case 8 :
            $('#sorts_en_bonus_I').html(2);
            $('#sorts_en_bonus_II').html(2);
            $('#sorts_en_bonus_III').html(2);
            $('#sorts_en_bonus_IV').html(2);
            $('#sorts_en_bonus_V').html(1);
            $('#sorts_en_bonus_VI').html(1);
            $('#sorts_en_bonus_VII').html(1);
            $('#sorts_en_bonus_VIII').html(1);
            $('#sorts_en_bonus_IX').html('-');
            break;
        case 9 :
            $('#sorts_en_bonus_I').html(3);
            $('#sorts_en_bonus_II').html(2);
            $('#sorts_en_bonus_III').html(2);
            $('#sorts_en_bonus_IV').html(2);
            $('#sorts_en_bonus_V').html(2);
            $('#sorts_en_bonus_VI').html(1);
            $('#sorts_en_bonus_VII').html(1);
            $('#sorts_en_bonus_VIII').html(1);
            $('#sorts_en_bonus_IX').html(1);
            break;
        case 10 :
            $('#sorts_en_bonus_I').html(3);
            $('#sorts_en_bonus_II').html(3);
            $('#sorts_en_bonus_III').html(2);
            $('#sorts_en_bonus_IV').html(2);
            $('#sorts_en_bonus_V').html(2);
            $('#sorts_en_bonus_VI').html(2);
            $('#sorts_en_bonus_VII').html(1);
            $('#sorts_en_bonus_VIII').html(1);
            $('#sorts_en_bonus_IX').html(1);
            break;
        case 11 :
            $('#sorts_en_bonus_I').html(3);
            $('#sorts_en_bonus_II').html(3);
            $('#sorts_en_bonus_III').html(3);
            $('#sorts_en_bonus_IV').html(2);
            $('#sorts_en_bonus_V').html(2);
            $('#sorts_en_bonus_VI').html(2);
            $('#sorts_en_bonus_VII').html(2);
            $('#sorts_en_bonus_VIII').html(1);
            $('#sorts_en_bonus_IX').html(1);
            break;
        case 12 :
            $('#sorts_en_bonus_I').html(3);
            $('#sorts_en_bonus_II').html(3);
            $('#sorts_en_bonus_III').html(3);
            $('#sorts_en_bonus_IV').html(3);
            $('#sorts_en_bonus_V').html(2);
            $('#sorts_en_bonus_VI').html(2);
            $('#sorts_en_bonus_VII').html(2);
            $('#sorts_en_bonus_VIII').html(2);
            $('#sorts_en_bonus_IX').html(1);
            break;
        case 13 :
            $('#sorts_en_bonus_I').html(4);
            $('#sorts_en_bonus_II').html(3);
            $('#sorts_en_bonus_III').html(3);
            $('#sorts_en_bonus_IV').html(3);
            $('#sorts_en_bonus_V').html(3);
            $('#sorts_en_bonus_VI').html(2);
            $('#sorts_en_bonus_VII').html(2);
            $('#sorts_en_bonus_VIII').html(2);
            $('#sorts_en_bonus_IX').html(2);
            break;
        case 14 :
            $('#sorts_en_bonus_I').html(4);
            $('#sorts_en_bonus_II').html(4);
            $('#sorts_en_bonus_III').html(3);
            $('#sorts_en_bonus_IV').html(3);
            $('#sorts_en_bonus_V').html(3);
            $('#sorts_en_bonus_VI').html(3);
            $('#sorts_en_bonus_VII').html(2);
            $('#sorts_en_bonus_VIII').html(2);
            $('#sorts_en_bonus_IX').html(2);
            break;
        case 15 :
            $('#sorts_en_bonus_I').html(4);
            $('#sorts_en_bonus_II').html(4);
            $('#sorts_en_bonus_III').html(4);
            $('#sorts_en_bonus_IV').html(3);
            $('#sorts_en_bonus_V').html(3);
            $('#sorts_en_bonus_VI').html(3);
            $('#sorts_en_bonus_VII').html(3);
            $('#sorts_en_bonus_VIII').html(2);
            $('#sorts_en_bonus_IX').html(2);
            break;
        case 16 :
            $('#sorts_en_bonus_I').html(4);
            $('#sorts_en_bonus_II').html(4);
            $('#sorts_en_bonus_III').html(4);
            $('#sorts_en_bonus_IV').html(4);
            $('#sorts_en_bonus_V').html(3);
            $('#sorts_en_bonus_VI').html(3);
            $('#sorts_en_bonus_VII').html(3);
            $('#sorts_en_bonus_VIII').html(3);
            $('#sorts_en_bonus_IX').html(2);
            break;
        case 17 :
            $('#sorts_en_bonus_I').html(5);
            $('#sorts_en_bonus_II').html(4);
            $('#sorts_en_bonus_III').html(4);
            $('#sorts_en_bonus_IV').html(4);
            $('#sorts_en_bonus_V').html(4);
            $('#sorts_en_bonus_VI').html(3);
            $('#sorts_en_bonus_VII').html(3);
            $('#sorts_en_bonus_VIII').html(3);
            $('#sorts_en_bonus_IX').html(3);
            break;
    };
}

function  calculeSortsDD() {
//    $('#dd_des_sorts_0').html(parseInt($('#dd_des_sorts').html)
//                                                           + parseInt(document.form.modificateur_particulier.value);
//    $('#dd_des_sorts_I').html(parseInt($('#dd_des_sorts_I').html)
//                                                           + parseInt(document.form.modificateur_particulier.value);
//    $('#dd_des_sorts_II').html(parseInt($('#dd_des_sorts_II').html)
//                                                           + parseInt(document.form.modificateur_particulier.value);
//    $('#dd_des_sorts_III').html(parseInt($('#dd_des_sorts_III').html)
//                                                           + parseInt(document.form.modificateur_particulier.value);
//    $('#dd_des_sorts_IV').html(parseInt($('#dd_des_sorts_IV').html)
//                                                           + parseInt(document.form.modificateur_particulier.value);
//    $('#dd_des_sorts_V').html(parseInt($('#dd_des_sorts_V').html)
//                                                           + parseInt(document.form.modificateur_particulier.value);
//    $('#dd_des_sorts_VI').html(parseInt($('#dd_des_sorts_VI').html)
//                                                           + parseInt(document.form.modificateur_particulier.value);
//    $('#dd_des_sorts_VII').html(parseInt($('#dd_des_sorts_VII').html)
//                                                           + parseInt(document.form.modificateur_particulier.value);
//    $('#dd_des_sorts_VIII').html(parseInt($('#dd_des_sorts_VIII').html)
//                                                           + parseInt(document.form.modificateur_particulier.value);
//    $('#dd_des_sorts_IX').html(parseInt($('#dd_des_sorts_IX').html)
//                                                           + parseInt(document.form.modificateur_particulier.value);
}


function influenceSag() {
	var valeur = parseInt(document.form.sag_val.value);
	var resultatCalculeInfluence = calculeInfluence(valeur);

	$('#sag_mod').html(resultatCalculeInfluence);

	$('#sau_mod_car_vol').html(resultatCalculeInfluence);

	calculeVolonte();

    for (var i = 0; i < document.getElementsByClassName('carac_sag').length; i++) {
        if (isNaN(parseInt(document.getElementsByClassName('carac_sag')[i].html))) {
            var valeur = 0;
        } else {
            var valeur = parseInt(document.getElementsByClassName('carac_sag')[i].html);
        };

        document.getElementsByClassName('carac_sag')[i].html(valeur
                                                                  + resultatCalculeInfluence);
    };
};

function influenceCha() {
	var valeur = parseInt(document.form.cha_val.value);
    var resultatCalculeInfluence = calculeInfluence(valeur);

	$('#cha_mod').html(resultatCalculeInfluence);

    for (var i = 0; i < document.getElementsByClassName('carac_cha').length; i++) {
        if (isNaN(parseInt(document.getElementsByClassName('carac_cha')[i].html))) {
            var valeur = 0;
        } else {
            var valeur = parseInt(document.getElementsByClassName('carac_cha')[i].html);
        };

        document.getElementsByClassName('carac_cha')[i].html(valeur
                                                                  + resultatCalculeInfluence);
    };
};

function calculeInfluence(valeur) {
		var modificateur = Math.round((valeur - 11)/2);
		return modificateur;
};

function calculeCa() {
	var valeur = parseInt($('#ca_arm_base').html)
		+ parseInt($('#ca_bon_arm').html)
        + parseInt($('#ca_bon_bou').html)
        + parseInt($('#ca_mod_dex').html)
        + parseInt($('#ca_mod_tai').html)
        + parseInt($('#ca_arm_nat').html)
        + parseInt($('#ca_mod_par').html)
        + parseInt($('#ca_mod_div').html);

 	return valeur;
};

function calculeCaContact() {
	var valeur = parseInt($('#ca_arm_base').html)
        + parseInt($('#ca_mod_dex').html)
        + parseInt($('#ca_mod_tai').html)
        + parseInt($('#ca_mod_par').html)
        + parseInt($('#ca_mod_div').html);

 	return valeur;
};

function calculeCaPrisDepourvu() {
	var valeur = parseInt($('#ca_arm_base').html)
		+ parseInt($('#ca_bon_arm').html)
        + parseInt($('#ca_bon_bou').html)
        + parseInt($('#ca_mod_tai').html)
        + parseInt($('#ca_arm_nat').html)
        + parseInt($('#ca_mod_par').html)
        + parseInt($('#ca_mod_div').html);

 	return valeur;
};

function CalculePv(bonusParNiveau) {
	var pvBase = 0;
	var niveau = 0;
	var pvNiv = 0;

	switch(document.form.classe.value) {
		case 'Barbare' :
			/* Calcule premier niveau */
			pvBase = 12 + parseInt(bonusParNiveau);
			/* Calcule niveau suivant */
			niveau = parseInt(document.form.niveau.value) - 1;
			pvNiv = pvBase + Math.round(niveau * (6.5 + parseInt(bonusParNiveau)));
			break;
		case 'Barde' :
			/* Calcule premier niveau */
			pvBase = 6 + parseInt(bonusParNiveau);
			/* Calcule niveau suivant */
			niveau = parseInt(document.form.niveau.value) - 1;
			pvNiv = pvBase + Math.round(niveau * (3.5 + parseInt(bonusParNiveau)));
			break;
		case 'Druide' :
			/* Calcule premier niveau */
			pvBase = 8 + parseInt(bonusParNiveau);
			/* Calcule niveau suivant */
			niveau = parseInt(document.form.niveau.value) - 1;
			pvNiv = pvBase + Math.round(niveau * (4.5 + parseInt(bonusParNiveau)));
			break;
		case 'Ensorceleur' :
			/* Calcule premier niveau */
			pvBase = 4 + parseInt(bonusParNiveau);
			/* Calcule niveau suivant */
			niveau = parseInt(document.form.niveau.value) - 1;
			pvNiv = pvBase + Math.round(niveau * (2.5 + parseInt(bonusParNiveau)));
			break;
		case 'Guerrier' :
			/* Calcule premier niveau */
			pvBase = 10 + parseInt(bonusParNiveau);
			/* Calcule niveau suivant */
			niveau = parseInt(document.form.niveau.value) - 1;
			pvNiv = pvBase + Math.round(niveau * (5.5 + parseInt(bonusParNiveau)));
			break;
		case 'Magicien' :
			/* Calcule premier niveau */
			pvBase = 4 + parseInt(bonusParNiveau);
			/* Calcule niveau suivant */
			niveau = parseInt(document.form.niveau.value) - 1;
			pvNiv = pvBase + Math.round(niveau * (2.5 + parseInt(bonusParNiveau)));
			break;
		case 'Moine' :
			/* Calcule premier niveau */
			pvBase = 8 + parseInt(bonusParNiveau);
			/* Calcule niveau suivant */
			niveau = parseInt(document.form.niveau.value) - 1;
			pvNiv = pvBase + Math.round(niveau * (4.5 + parseInt(bonusParNiveau)));
			break;
		case 'Paladin' :
			/* Calcule premier niveau */
			pvBase = 10 + parseInt(bonusParNiveau);
			/* Calcule niveau suivant */
			niveau = parseInt(document.form.niveau.value) - 1;
			pvNiv = pvBase + Math.round(niveau * (5.5 + parseInt(bonusParNiveau)));
			break;
		case 'Prêtre' :
			/* Calcule premier niveau */
			pvBase = 8 + parseInt(bonusParNiveau);
			/* Calcule niveau suivant */
			niveau = parseInt(document.form.niveau.value) - 1;
			pvNiv = pvBase + Math.round(niveau * (4.5 + parseInt(bonusParNiveau)));
			break;
		case 'Rôdeur' :
			/* Calcule premier niveau */
			pvBase = 8 + parseInt(bonusParNiveau);
			/* Calcule niveau suivant */
			niveau = parseInt(document.form.niveau.value) - 1;
			pvNiv = pvBase + Math.round(niveau * (4.5 + parseInt(bonusParNiveau)));
			break;
		case 'Roublard' :
			/* Calcule premier niveau */
			pvBase = 6 + parseInt(bonusParNiveau);
			/* Calcule niveau suivant */
			niveau = parseInt(document.form.niveau.value) - 1;
			pvNiv = pvBase + Math.round(niveau * (3.5 + parseInt(bonusParNiveau)));
			break;
		}

		return pvNiv;
};

function reductionDegats() {
	switch(document.form.niveau.value) {
		case '00' :
			$('#red_deg').html('0');
			break;
		case '01' :
			$('#red_deg').html('0');
			break;
		case '02' :
			$('#red_deg').html('0');
			break;
		case '03' :
			$('#red_deg').html('0');
			break;
		case '04' :
			$('#red_deg').html('0');
			break;
		case '05' :
			$('#red_deg').html('0');
			break;
		case '06' :
			$('#red_deg').html('0');
			break;
		case '07' :
			$('#red_deg').html('-1');
			break;
		case '08' :
			$('#red_deg').html('-1');
			break;
		case '09' :
			$('#red_deg').html('-1');
			break;
		case '10' :
			$('#red_deg').html('-2');
			break;
		case '11' :
			$('#red_deg').html('-2');
			break;
		case '12' :
			$('#red_deg').html('-2');
			break;
		case '13' :
			$('#red_deg').html('-3');
			break;
		case '14' :
			$('#red_deg').html('-3');
			break;
		case '15' :
			$('#red_deg').html('-3');
			break;
		case '16' :
			$('#red_deg').html('-4');
			break;
		case '17' :
			$('#red_deg').html('-4');
			break;
		case '18' :
			$('#red_deg').html('-4');
			break;
		case '19' :
			$('#red_deg').html('-5');
			break;
		case '20' :
			$('#red_deg').html('-5');
			break;
		};
}

function calculeInit() {
	var valeur = parseInt(document.form.dex_val.value);

	/* on appel une fois calculeInfluence(valeur) 
	et on stock son résultat dans resultatCalculeInfluence */
	var resultatCalculeInfluence = calculeInfluence(valeur);

	/* si document.form.dex_val.value n'est pas renseigné, 
	le resultatCalculeInfluence n'est pas un number
	d'où son forçage à 0*/
	if (isNaN(resultatCalculeInfluence)) {
		resultatCalculeInfluence = 0;
	};

	if (isNaN(parseInt(document.form.init_mod_div_val.value))) {
		document.form.init_mod_div_val.value = 0;
	};

	$('#init_total').html(resultatCalculeInfluence	+ parseInt(document.form.init_mod_div_val.value));
}

function calculeReflexes()  {
	/* si document.form.sau_bon_bas_ref.value n'est pas renseigné, 
	il n'est pas un number
	d'où son forçage à 0*/
	if (isNaN(parseInt($('#sau_bon_bas_ref').html))) {
		$('#sau_bon_bas_ref').html(0);
	};

	if (isNaN(parseInt($('#sau_mod_car_ref').html))) {
		$('#sau_mod_car_ref').html(0);
	};

	if (isNaN(parseInt(document.form.mod_tem_ref.value))) {
		document.form.mod_tem_ref.value = 0;
	};

	if (isNaN(parseInt(document.form.mod_part_ref.value))) {
		document.form.mod_part_ref.value = 0;
	};

//	$('#sau_total_ref').html(parseInt($('#sau_bon_bas_ref').html)
//														+ parseInt($('#sau_mod_car_ref').html())
//														+ parseInt(document.form.mod_tem_ref.value)
//														+ parseInt(document.form.mod_part_ref.value);
}

function calculeVigeur() {
	/* si document.form.sau_bon_bas_vig.value n'est pas renseigné, 
	il n'est pas un number
	d'où son forçage à 0*/
	if (isNaN(parseInt($('#sau_bon_bas_vig').html))) {
		$('#sau_bon_bas_vig').html(0);
	};

	if (isNaN(parseInt($('#sau_mod_car_vig').html))) {
		$('#sau_mod_car_vig').html(0);
	};

	if (isNaN(parseInt(document.form.mod_tem_vig.value))) {
		document.form.mod_tem_vig.value = 0;
	};

	if (isNaN(parseInt(document.form.mod_part_vig.value))) {
		document.form.mod_part_vig.value = 0;
	};

//	$('#sau_total_vig').html(parseInt($('#sau_bon_bas_vig').html)
//														+ parseInt($('#sau_mod_car_vig').html)
//														+ parseInt(document.form.mod_tem_vig.value)
//														+ parseInt(document.form.mod_part_vig.value);
}

function calculeVolonte()  {
	/* si document.form.sau_bon_bas_vol.value n'est pas renseigné, 
	il n'est pas un number
	d'où son forçage à 0*/
	if (isNaN(parseInt($('#sau_bon_bas_vol').html))) {
		$('#sau_bon_bas_vol').html(0);
	};

	if (isNaN(parseInt($('#sau_mod_car_vol').html))) {
		$('#sau_mod_car_vol').html(0);
	};

	if (isNaN(parseInt(document.form.mod_tem_vol.value))) {
		document.form.mod_tem_vol.value = 0;
	};

	if (isNaN(parseInt(document.form.mod_part_vol.value))) {
		document.form.mod_part_vol.value = 0;
	};

//	$('#sau_total_vol').html(parseInt($('#sau_bon_bas_vol').html)
//														+ parseInt($('#sau_mod_car_vol').html)
//														+ parseInt(document.form.mod_tem_vol.value)
//														+ parseInt(document.form.mod_part_vol.value);
}

function calculeLutte() {
	/* si document.form.lut_bon_bas_att.value n'est pas renseigné, 
	il n'est pas un number
	d'où son forçage à 0*/
	if (isNaN(parseInt($('#lut_bon_bas_att').html))) {
		$('#lut_bon_bas_att').html(0);
	};

	if (isNaN(parseInt($('#lut_mod_for').html))) {
		$('#lut_mod_for').html(0);
	};

//	$('#lut_total').html(parseInt($('#lut_bon_bas_att').html)
//													+ parseInt($('#lut_mod_for').html);
}

function calculeCompetence(total,carac,maîtrise,divers) {
//    document.getElementById(total).html
//                                            = parseInt(document.getElementById(carac).html)
//                                            + parseInt(maîtrise.value)
//                                            + parseInt(divers.value);
}

function calculeSommeCompetences() {
    var total = 0;

    total = total + testCalculeSommeCompetencesI('acrobatie',document.form.acrobatie_maîtrise);
    total = total + testCalculeSommeCompetencesI('art_de_la_magie',document.form.art_de_la_magie_maîtrise);
    total = total + testCalculeSommeCompetencesI('artisanat_I',document.form.artisanat_I_maîtrise);
    total = total + testCalculeSommeCompetencesI('artisanat_II',document.form.artisanat_II_maîtrise);
    total = total + testCalculeSommeCompetencesI('artisanat_III',document.form.artisanat_III_maîtrise);
    total = total + testCalculeSommeCompetencesI('bluf',document.form.bluf_maîtrise);
    total = total + testCalculeSommeCompetencesI('concentration',document.form.concentration_maîtrise);
    total = total + testCalculeSommeCompetencesI('connaissances_I',document.form.connaissances_I_maîtrise);
    total = total + testCalculeSommeCompetencesI('connaissances_II',document.form.connaissances_II_maîtrise);
    total = total + testCalculeSommeCompetencesI('connaissances_III',document.form.connaissances_III_maîtrise);
    total = total + testCalculeSommeCompetencesI('connaissances_IV',document.form.connaissances_IV_maîtrise);
    total = total + testCalculeSommeCompetencesI('connaissances_V',document.form.connaissances_V_maîtrise);
    total = total + testCalculeSommeCompetencesI('contrefaçon',document.form.contrefaçon_maîtrise);
    total = total + testCalculeSommeCompetencesI('crochetage',document.form.crochetage_maîtrise);
    total = total + testCalculeSommeCompetencesI('décriptage',document.form.décriptage_maîtrise);
    total = total + testCalculeSommeCompetencesI('déguisement',document.form.déguisement_maîtrise);
    total = total + testCalculeSommeCompetencesI('déplacement_silencieux',document.form.déplacement_silencieux_maîtrise);
    total = total + testCalculeSommeCompetencesI('désamorçage_sabotage',document.form.désamorçage_sabotage_maîtrise);
    total = total + testCalculeSommeCompetencesI('détection',document.form.détection_maîtrise);
    total = total + testCalculeSommeCompetencesI('diplomatie',document.form.diplomatie_maîtrise);
    total = total + testCalculeSommeCompetencesI('discrétion',document.form.discrétion_maîtrise);
    total = total + testCalculeSommeCompetencesI('dressage',document.form.dressage_maîtrise);
    total = total + testCalculeSommeCompetencesI('equilibre',document.form.equilibre_maîtrise);
    total = total + testCalculeSommeCompetencesI('equitation',document.form.equitation_maîtrise);
    total = total + testCalculeSommeCompetencesI('escalade',document.form.escalade_maîtrise);
    total = total + testCalculeSommeCompetencesI('escamotage',document.form.escamotage_maîtrise);
    total = total + testCalculeSommeCompetencesI('estimation',document.form.estimation_maîtrise);
    total = total + testCalculeSommeCompetencesI('évasion',document.form.évasion_maîtrise);
    total = total + testCalculeSommeCompetencesI('intimidation',document.form.intimidation_maîtrise);
    total = total + testCalculeSommeCompetencesI('langues',document.form.langues_maîtrise);
    total = total + testCalculeSommeCompetencesI('maîtrise_des_cordes',document.form.maîtrise_des_cordes_maîtrise);
    total = total + testCalculeSommeCompetencesI('natation',document.form.natation_maîtrise);
    total = total + testCalculeSommeCompetencesI('perception_auditive',document.form.perception_auditive_maîtrise);
    total = total + testCalculeSommeCompetencesI('premier_secours',document.form.premier_secours_maîtrise);
    total = total + testCalculeSommeCompetencesI('profession_I',document.form.profession_I_maîtrise);
    total = total + testCalculeSommeCompetencesI('profession_II',document.form.profession_II_maîtrise);
    total = total + testCalculeSommeCompetencesI('psychologie',document.form.psychologie_maîtrise);
    total = total + testCalculeSommeCompetencesI('renseignements',document.form.renseignements_maîtrise);
    total = total + testCalculeSommeCompetencesI('représentation_I',document.form.représentation_I_maîtrise);
    total = total + testCalculeSommeCompetencesI('représentation_II',document.form.représentation_II_maîtrise);
    total = total + testCalculeSommeCompetencesI('représentation_III',document.form.représentation_III_maîtrise);
    total = total + testCalculeSommeCompetencesI('saut',document.form.saut_maîtrise);
    total = total + testCalculeSommeCompetencesI('survie',document.form.survie_maîtrise);
    total = total + testCalculeSommeCompetencesI('utilisation_d_objets_magiques',document.form.utilisation_d_objets_magiques_maîtrise);

    var nombreAutorisé = 0;
    var valeur = 0;

    switch(document.form.classe.value) {
        case ' ' :
            break;
        case 'Barbare' :
            nombreAutorisé = (4 + parseInt($('#int_mod').html)) * (parseInt(document.form.niveau.value) + 3);
            if (document.form.race.value == 'Humain') {nombreAutorisé = nombreAutorisé + parseInt(document.form.niveau.value) + 3};
            testCalculeSommeCompetencesII(total,nombreAutorisé);
            break;
        case 'Barde' :
            nombreAutorisé = (6 + parseInt($('#int_mod').html)) * (parseInt(document.form.niveau.value) + 3);
            if (document.form.race.value == 'Humain') {nombreAutorisé = nombreAutorisé + parseInt(document.form.niveau.value) + 3};
            testCalculeSommeCompetencesII(total,nombreAutorisé);
            break;
        case 'Druide' :
            nombreAutorisé = (4 + parseInt($('#int_mod').html)) * (parseInt(document.form.niveau.value) + 3);
            if (document.form.race.value == 'Humain') {nombreAutorisé = nombreAutorisé + parseInt(document.form.niveau.value) + 3};
            testCalculeSommeCompetencesII(total,nombreAutorisé);
            break;
        case 'Ensorceleur' :
            nombreAutorisé = (2 + parseInt($('#int_mod').html)) * (parseInt(document.form.niveau.value) + 3);
            if (document.form.race.value == 'Humain') {nombreAutorisé = nombreAutorisé + parseInt(document.form.niveau.value) + 3};
            testCalculeSommeCompetencesII(total,nombreAutorisé);
            break;
        case 'Guerrier' :
            nombreAutorisé = (2 + parseInt($('#int_mod').html)) * (parseInt(document.form.niveau.value) + 3);
            if (document.form.race.value == 'Humain') {nombreAutorisé = nombreAutorisé + parseInt(document.form.niveau.value) + 3};
            testCalculeSommeCompetencesII(total,nombreAutorisé);
            break;
        case 'Magicien' :
            nombreAutorisé = (2 + parseInt($('#int_mod').html)) * (parseInt(document.form.niveau.value) + 3);
            if (document.form.race.value == 'Humain') {nombreAutorisé = nombreAutorisé + parseInt(document.form.niveau.value) + 3};
            testCalculeSommeCompetencesII(total,nombreAutorisé);
            break;
        case 'Moine' :
            nombreAutorisé = (4 + parseInt($('#int_mod').html)) * (parseInt(document.form.niveau.value) + 3);
            if (document.form.race.value == 'Humain') {nombreAutorisé = nombreAutorisé + parseInt(document.form.niveau.value) + 3};
            testCalculeSommeCompetencesII(total,nombreAutorisé);
            break;
        case 'Paladin' :
            nombreAutorisé = (2 + parseInt($('#int_mod').html)) * (parseInt(document.form.niveau.value) + 3);
            if (document.form.race.value == 'Humain') {nombreAutorisé = nombreAutorisé + parseInt(document.form.niveau.value) + 3};            
            testCalculeSommeCompetencesII(total,nombreAutorisé);
            break;
        case 'Prêtre' :
            nombreAutorisé = (2 + parseInt($('#int_mod').html)) * (parseInt(document.form.niveau.value) + 3);
            if (document.form.race.value == 'Humain') {nombreAutorisé = nombreAutorisé + parseInt(document.form.niveau.value) + 3};            
            testCalculeSommeCompetencesII(total,nombreAutorisé);
            break;
        case 'Rôdeur' :
            nombreAutorisé = (6 + parseInt($('#int_mod').html)) * (parseInt(document.form.niveau.value) + 3);
            if (document.form.race.value == 'Humain') {nombreAutorisé = nombreAutorisé + parseInt(document.form.niveau.value) + 3};
            testCalculeSommeCompetencesII(total,nombreAutorisé);
            break;
        case 'Roublard' :
            nombreAutorisé = (8 + parseInt($('#int_mod').html)) * (parseInt(document.form.niveau.value) + 3);
            if (document.form.race.value == 'Humain') {nombreAutorisé = nombreAutorisé + parseInt(document.form.niveau.value) + 3};
            testCalculeSommeCompetencesII(total,nombreAutorisé);
            break;
    }
}

function testCalculeSommeCompetencesI(competencesI,competencesII) {
    var valeur = 0;

    if (document.getElementById(competencesI).html('O')) {
        valeur = parseInt(competencesII.value) * 2;
    } else {
        valeur = parseInt(competencesII.value);
    };

    return valeur;
};

function testCalculeSommeCompetencesII(total,nombreAutorisé) {
    var valeur = 0;

    if (total > nombreAutorisé) {
        valeur = total - nombreAutorisé;
        alert('Le total des points des competences est supérieur de ' + valeur + ', sur le nombre autorisé.');
    } else {
        if (total < nombreAutorisé) {
            valeur = nombreAutorisé - total;
            alert('Il reste ' + valeur + ' de point de compétence à utiliser.');
        } else {
            alert('Répartition des ' + total + ' points de competences parfaite.');
        };
    };
}

function affichageArtisanat(artisanatType) {
    var artisanatTableau = new Array();

    artisanatTableau = [' ','Alchimie','Calligraphie','Cordonnerie','Fabrication d\'arcs','Fabrication d\'armes','Fabrication d\'armures',
                        'Fabrication de navires','Fabrication de pièges','Ferronerie','Maroquinerie','Maçonnerie','Peinture','Poterie',
                        'Reliure','Sculture','Serrurerie','Taille des gemmes','Travail du bois','Travail de la forge','Travaux de charpente',
                        'Tissage','Vanerie'];

    for (var nombElement = 0; nombElement < artisanatTableau.length; nombElement++) {
        artisanatType.options[nombElement] = new Option(artisanatTableau[nombElement],artisanatTableau[nombElement]);
    };
}

function affichageConnaissance(connaissanceType) {
    var connaissanceTableau = new Array();

    connaissanceTableau = [' ','Archi. et ingé.','Explo. sousterraine','Folklore local','Géographie','Histoire','Mystères','Nature',
                            'Noblesse','Plans','Religion'];

    for (var nombElement = 0; nombElement < connaissanceTableau.length; nombElement++) {
        connaissanceType.options[nombElement] = new Option(connaissanceTableau[nombElement],connaissanceTableau[nombElement]);
    };
}

function affichageProfession(professionType) {
    var professionTableau = new Array();

    professionTableau = [' ','Apothicaire','Berger','Brasseur','Bûcheron','Canotier','Chasseur','Conducteur d\'attelage','Cuisinier',
                        'Eleveur','Fermier','Garçon d\'ecurie','Guide','Herboriste','Ingénieur de siège','Libraire','Marin','Meunier',
                        'Mineur ','Pêcheur','Porteur','Scibe','Taneur','Tavernier'];


    for (var nombElement = 0; nombElement < professionTableau.length; nombElement++) {
        professionType.options[nombElement] = new Option(professionTableau[nombElement],professionTableau[nombElement]);
    };
}

function affichageReprésentation(représentationType) {
    var représentationTableau = new Array();

    représentationTableau = [' ','Chant','Danse','Déclamation','Farce','Instrument à clavier','Instrument à cordes','Instrument à vent',
                            'Percussion','Scène'];


    for (var nombElement = 0; nombElement < représentationTableau.length; nombElement++) {
        représentationType.options[nombElement] = new Option(représentationTableau[nombElement],représentationTableau[nombElement]);
    };
}

function affichageObjet(objet) {
    var objetTableau = new Array();

    objetTableau = [' ','Arbalètre de poing','Arbalètre légère à répétition','Arbalètre légère','Arbalètre lourde à répétition',
                    'Arbalètre lourde','Arc court composite','Arc court','Arc long composite','Arc long','Armure à pointes',
                    'Attaque à mains nues','Bâton','Bolas','Chaîne cloutée','Cimeterre à deux mains','Cimeterre','Corsèque',
                    'Coutille','Dague coup-de-poing','Dague','Dart','Double-lame','Ecu à pointes','Ecu','Epée à deux mains',
                    'Epée batarde','Epée courte','Epée longue','Epieu','Faux','Filet','Fléau d\'arme léger','Fléau d\'armes lourd',
                    'Fléau double','Fouet','Fronde','Gantelet clouté','Gantelet','Gourdin','Grande hache','Guisarme','Hache d\'arme',
                    'Hache de guerre naine','Hache de lancer','Hache double orque','Hachette','Kukri','Hallebarde','Javeline','Kama',
                    'Lance d\'arçon','Lance','Marteau de guerre','Marteau léger','Marteau-piolet gnome','Masse d\'armes légère',
                    'Masse d\'armes lourde','Massue','Matraque','Morgenstern','Nunchaku','Pic de guerre léger','Pique','Pic de guerre lourd',
                    'Rapière','Rondache à pointes','Rondache','Sai','Serpe','Shuriken','Siangham','Trident','Urgrosh nain',
                    ' ','Armure matelassée','Armure de cuir','Armure de cuir cloutée','Chemise de mailles','Armure de peau','Armure d\'écailles',
                    'Cotte de mailles','Cuirasse','Clibanion','Crevice','Armure à plaques','Harnois',
                    '','Aiguille à coudre','Acide (flasque)','Allume-feu','Antidote (fiole)','Bâton éclairant','Bâton fumigène','Bélier portable','Bois de chauffage','Bougie','Bouteille de vin en verre','Cadenas trés simple',
                    'Cadenas moyen','Cadenas bon','Cadenas excellent','Chaîne 3m','Chausse-trappes','Chevalière','Chope en terre cuite',
                    'Cire à cacheter','Cloche','Coffre vide','Corde en chanvre, 15m','Corde en soie, 15m','Couverture hiver','Craie, morceau',
                    'Cruche en terre cuite','Eau bénite','Echelle','Encre, la fiole','Etui','Feu grégeois','Filet de pêche, 2,5m²','Fiole','Flasque (vide)','Grappin',
                    'Hameçon','Huile, la flasque','Jarre en terre cuite','Lampe','Lanterne à capote','Lanterne sourde','Longue-vue','Marteau',
                    'Masse','Menottes','Menottes de qualité supérieur','Outre','Paillasse','Palan','Panier (vide)','Papier, la feuille',
                    'Parchemin, la feuille','Pelle','Perche, 3m','Petit miroir en acier','Pied-de-biche','Pierre à tonnerre','Pioche de mineur','Piton',
                    'Plume d\'écriture','Pot en fer','Ration de survie','Sac (vide)','Sac à dos (vide)','Sacoche de ceinture','Sacoche immobilisante','Savon, 1 livre',
                    'Sceau (vide)','Sifflet','Silex en amorce','Tente','Toile','Tonneau','Torche','Torche éternelle'];

    for (var nombElement = 0; nombElement < objetTableau.length; nombElement++) {
        objet.options[nombElement] = new Option(objetTableau[nombElement],objetTableau[nombElement]);
    };
}

function affichageEmplacement(emplacement) {
    var emplacementTableau = new Array();

    emplacementTableau = [' ','Sur la tête','Devant les yeux','Autour du cou','Sur le torse','Sur le corps','Autour de la taille',
                            'Sur les épaules','Sur les bras ou les poignets','Aux mains','Aux doigts (un sur chaque main)','Aux pieds',
                            ,'Dans un foureau','Sac à dos'];

    for (var nombElement = 0; nombElement < emplacementTableau.length; nombElement++) {
        emplacement.options[nombElement] = new Option(emplacementTableau[nombElement],emplacementTableau[nombElement]);
    };
}

function affichagePoids(poids) {
    var poidsTableau = new Array();

    poidsTableau = ['0g','250g','500g','1kg','1,5kg','2kg','2,5kg','3kg','3,5kg','4kg','4,5kg','5kg','5,5kg','6kg','6,5kg','7kg','7,5kg',
                    '8kg','8,5kg','9kg','9,5kg','10kg','10,5kg','11kg','11,5kg','12kg','12,5kg','13kg','13,5kg','14kg','14,5kg','15kg',
                    '15,5kg','16kg','16,5kg','17kg','17,5kg','18kg','18,5kg','19kg','19,5kg','20kg','20,5kg','21kg','21,5kg','22kg','22,5kg'];

    for (var nombElement = 0; nombElement < poidsTableau.length; nombElement++) {
        poids.options[nombElement] = new Option(poidsTableau[nombElement],poidsTableau[nombElement]);
    };
}

function calculeSommepoids() {
    var totalPoids = 0;

    totalPoids = totalPoids + addPoids(document.form.poids_I);
    totalPoids = totalPoids + addPoids(document.form.poids_II);
    totalPoids = totalPoids + addPoids(document.form.poids_III);
    totalPoids = totalPoids + addPoids(document.form.poids_IV);
    totalPoids = totalPoids + addPoids(document.form.poids_V);
    totalPoids = totalPoids + addPoids(document.form.poids_VI);
    totalPoids = totalPoids + addPoids(document.form.poids_VII);
    totalPoids = totalPoids + addPoids(document.form.poids_VIII);
    totalPoids = totalPoids + addPoids(document.form.poids_IX);
    totalPoids = totalPoids + addPoids(document.form.poids_X);
    totalPoids = totalPoids + addPoids(document.form.poids_XI);
    totalPoids = totalPoids + addPoids(document.form.poids_XII);
    totalPoids = totalPoids + addPoids(document.form.poids_XIII);
    totalPoids = totalPoids + addPoids(document.form.poids_XIV);
    totalPoids = totalPoids + addPoids(document.form.poids_XV);
    totalPoids = totalPoids + addPoids(document.form.poids_XVI);
    totalPoids = totalPoids + addPoids(document.form.poids_XVII);
    totalPoids = totalPoids + addPoids(document.form.poids_XVIII);
    totalPoids = totalPoids + addPoids(document.form.poids_XIX);
    totalPoids = totalPoids + addPoids(document.form.poids_XX);
    totalPoids = totalPoids + addPoids(document.form.poids_XXI);
    totalPoids = totalPoids + addPoids(document.form.poids_XXII);
    totalPoids = totalPoids + addPoids(document.form.poids_XXIII);
    totalPoids = totalPoids + addPoids(document.form.poids_XXIV);
    totalPoids = totalPoids + addPoids(document.form.poids_XXV);
    totalPoids = totalPoids + addPoids(document.form.poids_XXVI);
    totalPoids = totalPoids + addPoids(document.form.poids_XXVII);

    $('#poidsTotalPorte'.html(totalPoids + 'kg'));
}

function addPoids(poids) {
    switch (poids.value) {
        case '0g'     : return  0.000; break;
        case '250g'   : return  0.250; break;
        case '500g'   : return  0.500; break;
        case '1kg'    : return  1.000; break;
        case '1,5kg'  : return  1.500; break;
        case '2kg'    : return  2.000; break;
        case '2,5kg'  : return  2.500; break;
        case '3kg'    : return  3.000; break;
        case '3,5kg'  : return  3.500; break;
        case '4kg'    : return  4.000; break;
        case '4,5kg'  : return  4.500; break;
        case '5kg'    : return  5.000; break;
        case '5,5kg'  : return  5.500; break;
        case '6kg'    : return  6.000; break;
        case '6,5kg'  : return  6.500; break;
        case '7kg'    : return  7.000; break;
        case '7,5kg'  : return  7.500; break;
        case '8kg'    : return  8.000; break;
        case '8,5kg'  : return  8.500; break;
        case '9kg'    : return  9.000; break;
        case '9,5kg'  : return  9.500; break;
        case '10kg'   : return 10.000; break;
        case '10,5kg' : return 10.500; break;
        case '11kg'   : return 11.000; break;
        case '11,5kg' : return 11.500; break;
        case '12kg'   : return 12.000; break;
        case '12,5kg' : return 12.500; break;
        case '13kg'   : return 13.000; break;
        case '13,5kg' : return 13.500; break;
        case '14kg'   : return 14.000; break;
        case '14,5kg' : return 14.500; break;
        case '15kg'   : return 15.000; break;
        case '15,5kg' : return 15.500; break;
        case '16kg'   : return 16.000; break;
        case '16,5kg' : return 16.500; break;
        case '17kg'   : return 17.000; break;
        case '17,5kg' : return 17.500; break;
        case '18kg'   : return 18.000; break;
        case '18,5kg' : return 18.500; break;
        case '19kg'   : return 19.000; break;
        case '19,5kg' : return 19.500; break;
        case '20kg'   : return 20.000; break;
        case '20,5kg' : return 20.500; break;
        case '21kg'   : return 21.000; break;
        case '21,5kg' : return 21.500; break;
        case '22kg'   : return 22.000; break;
        case '22,5kg' : return 22.500; break;
    };
}

function affichageLangues(langues) {
    var languesTableau = new Array();

    languesTableau = [') ','Abyssale','Aérienne','Aquatique','Céleste','Commune','Commune des profondeurs','Draconien','Druides','Elfique',
                      'Géants','Gnoll','Gnome','Gobeline','Halfeline','Igneuse','Infernale','Nains','Orque','Sylvestre','Terreuse'];

    for (var nombElement = 0; nombElement < languesTableau.length; nombElement++) {
        langues.options[nombElement] = new Option(languesTableau[nombElement],languesTableau[nombElement]);
    };
}

function affichageDon(don) {
    var donTableau = new Array();

    donTableau = [' ','Affinité magique','Amélioration des créatures convoquées','Arme de prédilection','Arme de prédilection supérieure',
                'Arme en main','Athlétisme','Attaque au galop','Attaque éclair','Attaque en finesse','Attaque en puissance','Attaque en rotation',
                'Attaques réflexes','Autonome','Charge dévastatrice','Combat à deux armes','Combat en aveugle','Combat monté','Coup étourdissant',
                'Course','Défense à deux armes','Discret','Dispense de composants matériels','Doigts de fée','Dur à cuire','Ecole renforcée',
                'Ecole supérieure','Efficacité des sorts accrue','Efficacité des sorts supérieure','Emprise sur les morts vivants','Enchaînement',
                'Endurance','Esquive','Expertise du combat','Feu nourri','Fin limier','Fourberie','Fraternité animale','Funambule','Incantation animale',
                'Interception de projectile','Magie de guerre','Maîtrise des sorts','Maîtrise du combat à deux armes','Maniement d\'une arme de guerre',
                'Maniement d\'une arme exotique','Maniement des armes courantes','Maniement des boucliers','Maniement du pavois','Méticuleux',
                'Négociation','Parade de projectiles','Persuasion','Piétinement','Pistage','Port des armures intermédiaires','Port des armures légères',
                'Port des armures lourdes','Prestige','Rechargement rapide','Réflexes surhumains','Robustesse','Savoir faire mécanique',
                'Science de la destruction','Science de l\'initiative','Science de la bousculade','Science de la feinte','Science de la lutte',
                'Science du combat à deux armes','Science du combat à mains nues','Science du contresort','Science du coup de bouclier',
                'Science du critique','Science du croc en jambe','Science du désarmement','Science du renversement','Science du renvoi',
                'Science du tir de précision','Souplesse du serpent','Spécialisation martiale','Spécialisation martiale supérieure','Succession d\'enchaînements',
                'Talent','Tir à bout portant','Tir de loin','Tir de précision','Tir en mouvement','Tir monté','Tir rapide','Vigilance',
                'Vigueur surhumaine','Volonté de fer','Voltigeur']

    for (var nombElement = 0; nombElement < donTableau.length; nombElement++) {
        don.options[nombElement] = new Option(donTableau[nombElement],donTableau[nombElement]);
    };
}

function affichageEcoles(ecole) {
    var ecoleTableau = new Array();

    ecoleTableau = [') ','Abjuration','Divination','Enchantement','Evocation','Illusion','Invocation','Nécromantie','Transmutation'];

    for (var nombElement = 0; nombElement < ecoleTableau.length; nombElement++) {
        ecole.options[nombElement] = new Option(ecoleTableau[nombElement],ecoleTableau[nombElement]);
    };
}

function controlePointsExperience() {
    switch(document.form.niveau.value) {
        case '00' :
            alert('Erreur sur le niveau, veuillez rentrer un niveau.');
            break;
        case '01' :
            if (!((0 <= document.form.points_experience.value) && (document.form.points_experience.value < 1000))) {
                alert('Erreur sur les points expériences, veuillez rentrer un nombre entre 0 et 999.');
            };
            break;
        case '02' :
            if (!((1000 <= document.form.points_experience.value) && (document.form.points_experience.value < 3000))) {
                alert('Erreur sur les points expériences, veuillez rentrer un nombre entre 1000 et 2999.');
            };
            break;
        case '03' :
            if (!((3000 <= document.form.points_experience.value) && (document.form.points_experience.value < 6000))) {
                alert('Erreur sur les points expériences, veuillez rentrer un nombre entre 3000 et 5999.');
            };
            break;
        case '04' :
            if (!((6000 <= document.form.points_experience.value) && (document.form.points_experience.value < 10000))) {
                alert('Erreur sur les points expériences, veuillez rentrer un nombre entre 6000 et 9999.');
            };
            break;
        case '05' :
            if (!((10000 <= document.form.points_experience.value) && (document.form.points_experience.value < 15000))) {
                alert('Erreur sur les points expériences, veuillez rentrer un nombre entre 10000 et 14999.');
            };
            break;
        case '06' :
            if (!((15000 <= document.form.points_experience.value) && (document.form.points_experience.value < 21000))) {
                alert('Erreur sur les points expériences, veuillez rentrer un nombre entre 15000 et 20999.');
            };
            break;
        case '07' :
            if (!((21000 <= document.form.points_experience.value) && (document.form.points_experience.value < 28000))) {
                alert('Erreur sur les points expériences, veuillez rentrer un nombre entre 21000 et 27999.');
            };
            break;
        case '08' :
            if (!((28000 <= document.form.points_experience.value) && (document.form.points_experience.value < 36000))) {
                alert('Erreur sur les points expériences, veuillez rentrer un nombre entre 28000 et 35999.');
            };
            break;
        case '09' :
            if (!((36000 <= document.form.points_experience.value) && (document.form.points_experience.value < 45000))) {
                alert('Erreur sur les points expériences, veuillez rentrer un nombre entre 36000 et 44999.');
            };
            break;
        case '10' :
            if (!((45000 <= document.form.points_experience.value) && (document.form.points_experience.value < 55000))) {
                alert('Erreur sur les points expériences, veuillez rentrer un nombre entre 45000 et 54999.');
            };
            break;
        case '11' :
            if (!((55000 <= document.form.points_experience.value) && (document.form.points_experience.value < 66000))) {
                alert('Erreur sur les points expériences, veuillez rentrer un nombre entre 55000 et 65999.');
            };
            break;
        case '12' :
            if (!((66000 <= document.form.points_experience.value) && (document.form.points_experience.value < 78000))) {
                alert('Erreur sur les points expériences, veuillez rentrer un nombre entre 66000 et 77999.');
            };
            break;
        case '13' :
            if (!((78000 <= document.form.points_experience.value) && (document.form.points_experience.value < 91000))) {
                alert('Erreur sur les points expériences, veuillez rentrer un nombre entre 78000 et 90999.');
            };
            break;
        case '14' :
            if (!((91000 <= document.form.points_experience.value) && (document.form.points_experience.value < 105000))) {
                alert('Erreur sur les points expériences, veuillez rentrer un nombre entre 91000 et 104999.');
            };
            break;
        case '15' :
            if (!((105000 <= document.form.points_experience.value) && (document.form.points_experience.value < 120000))) {
                alert('Erreur sur les points expériences, veuillez rentrer un nombre entre 105000 et 119999.');
            };
            break;
        case '16' :
            if (!((120000 <= document.form.points_experience.value) && (document.form.points_experience.value < 136000))) {
                alert('Erreur sur les points expériences, veuillez rentrer un nombre entre 120000 et 135999.');
            };
            break;
        case '17' :
            if (!((136000 <= document.form.points_experience.value) && (document.form.points_experience.value < 153000))) {
                alert('Erreur sur les points expériences, veuillez rentrer un nombre entre 136000 et 152999.');
            };
            break;
        case '18' :
            if (!((153000 <= document.form.points_experience.value) && (document.form.points_experience.value < 171000))) {
                alert('Erreur sur les points expériences, veuillez rentrer un nombre entre 153000 et 170999.');
            };
            break;
        case '19' :
            if (!((171000 <= document.form.points_experience.value) && (document.form.points_experience.value < 190000))) {
                alert('Erreur sur les points expériences, veuillez rentrer un nombre entre 171000 et 189999.');
            };
            break;
        case '20' :
            if (!((190000 <= document.form.points_experience.value) && (document.form.points_experience.value < 210000))) {
                alert('Erreur sur les points expériences, veuillez rentrer un nombre entre 190000 et 209999.');
            };
            break;
    }
}

function affichageArmure(armure) {
    var armureTableau = new Array();

    armureTableau = [' ','Armure matelassée','Armure de cuir','Armure de cuir cloutée','Chemise de mailles','Armure de peau','Armure d\'écailles',
                    'Cotte de mailles','Cuirasse','Clibanion','Crevice','Armure à plaques','Harnois'];

    for (var nombElement = 0; nombElement < armureTableau.length; nombElement++) {
        armure.options[nombElement] = new Option(armureTableau[nombElement],armureTableau[nombElement]);
    };
};

function affichageBouclier(bouclier) {
    var bouclierTableau = new Array();

    bouclierTableau = [' ','Targe','Rondache en bois','Rondache en acier','Ecu en bois','Ecu en acier','Pavois'];

    for (var nombElement = 0; nombElement < bouclierTableau.length; nombElement++) {
        bouclier.options[nombElement] = new Option(bouclierTableau[nombElement],bouclierTableau[nombElement]);
    };
};

function affichageProtection(protection) {
    var protectionTableau = new Array();

    protectionTableau = [' ','anneau'];

    for (var nombElement = 0; nombElement < protectionTableau.length; nombElement++) {
        protection.options[nombElement] = new Option(protectionTableau[nombElement],protectionTableau[nombElement]);
    };
};

function choixArmure(armure,valeur) {
    if (isNaN(parseInt(valeur.value))) {
        var bonus_armure = 0;
    } else {
        var bonus_armure = parseInt(valeur.value);
    };

    switch(armure.value) {
        case 'Armure matelassée' :
            $('#bonus_CA_armure').html(1 + bonus_armure);
            $('#dex_max').html(+8);
            $('#malus_aux_test_armure').html(+0);
            $('#echec_sorts_armure').html('5%');
            $('#vitesse_armure').html('9/6m');
            $('#poids_armure').html('5kg');
            break;
        case 'Armure de cuir' :
            $('#bonus_CA_armure').html(2 + bonus_armure);
            $('#dex_max').html(+6);
            $('#malus_aux_test_armure').html(+0);
            $('#echec_sorts_armure').html('10%');
            $('#vitesse_armure').html('9/6m');
            $('#poids_armure').html('7,5kg');
            break;
        case 'Armure de cuir cloutée' :
            $('#bonus_CA_armure').html(3 + bonus_armure);
            $('#dex_max').html(+5);
            $('#malus_aux_test_armure').html(-1);
            if (bonus_armure > 0) {
                $('#malus_aux_test_armure').html(parseInt($('#malus_aux_test_armure').html()) + 1);
            };
            $('#echec_sorts_armure').html('15%');
            $('#vitesse_armure').html('9/6m');
            $('#poids_armure').html('10kg');
            break;
        case 'Chemise de mailles' :
            $('#bonus_CA_armure').html(4 + bonus_armure);
            $('#dex_max').html(+4);
            $('#malus_aux_test_armure').html(-2);
            if (bonus_armure > 0) {
                $('#malus_aux_test_armure').html(parseInt($('#malus_aux_test_armure').html()) + 1);
            };
            $('#echec_sorts_armure').html('20%');
            $('#vitesse_armure').html('9/6m');
            $('#poids_armure').html('12,5kg');
            break;
        case 'Armure de peau' :
            $('#bonus_CA_armure').html(3 + bonus_armure);
            $('#dex_max').html(+4);
            $('#malus_aux_test_armure').html(-3);
            if (bonus_armure > 0) {
                $('#malus_aux_test_armure').html(parseInt($('#malus_aux_test_armure').html()) + 1);
            };
            $('#echec_sorts_armure').html('20%');
            $('#vitesse_armure').html('6/4,5m');
            vitesseArmureLourde();
            $('#poids_armure').html('12,5kg');
            break;
        case 'Armure d\'écailles' :
            $('#bonus_CA_armure').html(4 + bonus_armure);
            $('#dex_max').html(+3);
            $('#malus_aux_test_armure').html(-4);
            if (bonus_armure > 0) {
                $('#malus_aux_test_armure').html(parseInt($('#malus_aux_test_armure').html()) + 1);
            };
            $('#echec_sorts_armure').html('25%');
            $('#vitesse_armure').html('6/4,5m');
            vitesseArmureLourde();
            $('#poids_armure').html('15kg');
            break;
        case 'Cotte de mailles' :
            $('#bonus_CA_armure').html(5 + bonus_armure);
            $('#dex_max').html(+2);
            $('#malus_aux_test_armure').html(-5);
            if (bonus_armure > 0) {
                $('#malus_aux_test_armure').html(parseInt($('#malus_aux_test_armure').html()) + 1);
            };
            $('#echec_sorts_armure').html('30%');
            $('#vitesse_armure').html('6/4,5m');
            vitesseArmureLourde();
            $('#poids_armure').html('20kg');
            break;
        case 'Cuirasse' :
            $('#bonus_CA_armure').html(5 + bonus_armure);
            $('#dex_max').html(+4);
            $('#malus_aux_test_armure').html(-4);
            if (bonus_armure > 0) {
                $('#malus_aux_test_armure').html(parseInt($('#malus_aux_test_armure').html()) + 1);
            };
            $('#echec_sorts_armure').html('25%');
            $('#vitesse_armure').html('6/4,5m');
            vitesseArmureLourde();
            $('#poids_armure').html('15kg');
            break;
        case 'Clibanion' :
            $('#bonus_CA_armure').html(6 + bonus_armure);
            $('#dex_max').html(+0);
            $('#malus_aux_test_armure').html(-7);
            if (bonus_armure > 0) {
                $('#malus_aux_test_armure').html(parseInt($('#malus_aux_test_armure').html()) + 1);
            };
            $('#echec_sorts_armure').html('40%');
            $('#vitesse_armure').html('6/4,5m');
            vitesseArmureLourde();
            $('#poids_armure').html('22,5kg');
            break;
        case 'Crevice' :
            $('#bonus_CA_armure').html(6 + bonus_armure);
            $('#dex_max').html(+1);
            $('#malus_aux_test_armure').html(-6);
            if (bonus_armure > 0) {
                $('#malus_aux_test_armure').html(parseInt($('#malus_aux_test_armure').html()) + 1);
            };
            $('#echec_sorts_armure').html('35%');
            $('#vitesse_armure').html('6/4,5m');
            vitesseArmureLourde();
            $('#poids_armure').html('17,5kg');
            break;
        case 'Armure à plaques' :
            $('#bonus_CA_armure').html(7 + bonus_armure);
            $('#dex_max').html(+0);
            $('#malus_aux_test_armure').html(-7);
            if (bonus_armure > 0) {
                $('#malus_aux_test_armure').html(parseInt($('#malus_aux_test_armure').html()) + 1);
            };
            $('#echec_sorts_armure').html('40%');
            $('#vitesse_armure').html('6/4,5m');
            vitesseArmureLourde();
            $('#poids_armure').html('25kg');
            break;
        case 'Harnois' :
            $('#bonus_CA_armure').html(8 + bonus_armure);
            $('#dex_max').html(+1);
            $('#malus_aux_test_armure').html(-6);
            if (bonus_armure > 0) {
                $('#malus_aux_test_armure').html(parseInt($('#malus_aux_test_armure').html()) + 1);
            };
            $('#echec_sorts_armure').html('35%');
            $('#vitesse_armure').html('6/4,5m');
            vitesseArmureLourde();
            $('#poids_armure').html('25kg');
            break;
    };

    $('#ca_bon_arm').html($('#bonus_CA_armure').html());

    if ($('#dex_max').html< $('#ca_mod_dex').html()) {
        $('#ca_mod_dex').html($('#dex_max').html());
    };

    $('#ca_total').html(calculeCa());
    $('#val_ca_contact').html(calculeCaContact());
    $('#val_pri_depourvu').html(calculeCaPrisDepourvu());
}

function vitesseArmureLourde() {
    $('#vit').html('6m');

    switch(document.form.race.value) {
        case 'Gnome' :
            $('#vit').html('4,5m');
            break;
        case 'Halfelin' :
            $('#vit').html('4,5m');
            break;
    }
}

function choixBouclier(bouclier,valeur) {
    if (isNaN(parseInt(valeur.value))) {
        var bonus_bouclier = 0;
    } else {
        var bonus_bouclier = parseInt(valeur.value);
    };

    switch(bouclier.value) {
        case 'Targe' :
            $('#bonus_CA_bouclier').html(1 + bonus_bouclier);
            $('#poids_bouclier').html('2,5kg');
            $('#malus_aux_tests_bouclier').html(-1);
            if (bonus_bouclier > 0) {
                $('#malus_aux_tests_bouclier').html(parseInt($('#malus_aux_tests_bouclier').html()) + 1);
            };
            $('#echec_sorts_bouclier').html('5%');
            break;
        case 'Rondache en bois' :
            $('#bonus_CA_bouclier').html(1 + bonus_bouclier);
            $('#poids_bouclier').html('2,5kg');
            $('#malus_aux_tests_bouclier').html(-1);
            if (bonus_bouclier > 0) {
                $('#malus_aux_tests_bouclier').html(parseInt($('#malus_aux_tests_bouclier').html()) + 1);
            };
            $('#echec_sorts_bouclier').html('5%');
            break;
        case 'Rondache en acier' :
            $('#bonus_CA_bouclier').html(1 + bonus_bouclier);
            $('#poids_bouclier').html('3kg');
            $('#malus_aux_tests_bouclier').html(-1);
            if (bonus_bouclier > 0) {
                $('#malus_aux_tests_bouclier').html(parseInt($('#malus_aux_tests_bouclier').html()) + 1);
            };
            $('#echec_sorts_bouclier').html('5%');
            break;
        case 'Ecu en bois' :
            $('#bonus_CA_bouclier').html(2 + bonus_bouclier);
            $('#poids_bouclier').html('5kg');
            $('#malus_aux_tests_bouclier').html(-2);
            if (bonus_bouclier > 0) {
                $('#malus_aux_tests_bouclier').html(parseInt($('#malus_aux_tests_bouclier').html()) + 1);
            };
            $('#echec_sorts_bouclier').html('15%');
            break;
        case 'Ecu en acier' :
            $('#bonus_CA_bouclier').html(2 + bonus_bouclier);
            $('#poids_bouclier').html('7,5kg');
            $('#malus_aux_tests_bouclier').html(-2);
            if (bonus_bouclier > 0) {
                $('#malus_aux_tests_bouclier').html(parseInt($('#malus_aux_tests_bouclier').html()) + 1);
            };
            $('#echec_sorts_bouclier').html('15%');
            break;
        case 'Pavois' :
            $('#bonus_CA_bouclier').html(4 + bonus_bouclier);
            $('#poids_bouclier').html('22kg');
            $('#malus_aux_tests_bouclier').html(-10);
            if (bonus_bouclier > 0) {
                $('#malus_aux_tests_bouclier').html(parseInt($('#malus_aux_tests_bouclier').html()) + 1);
            };
            $('#echec_sorts_bouclier').html('50%');
            break;
    };

    $('#ca_bon_bou').html($('#bonus_CA_bouclier').html());
    $('#ca_total').html(calculeCa());
    $('#val_ca_contact').html(calculeCaContact());
    $('#val_pri_depourvu').html(calculeCaPrisDepourvu());
}

function choixProtection(protection,valeur) {
    if (isNaN(parseInt(valeur.value))) {
        var bonus_protection = 0;
    } else {
        var bonus_protection = parseInt(valeur.value);
    };

    switch(protection.value) {
        case 'anneau' :
            $('#bonus_CA_protection_I').html(0 + bonus_protection);
            $('#poids_protection_I').html('10g');
            $('#malus_aux_tests_protection_I').html(-0);
            break;
    };

    $('#ca_mod_div').html($('#bonus_CA_protection_I').html());
    $('#ca_total').html(calculeCa());
    $('#val_ca_contact').html(calculeCaContact());
    $('#val_pri_depourvu').html(calculeCaPrisDepourvu());
}

function competenceClasseBarbare() {
    if (document.form.niveau.value >= 1) {
        $('#aptitudes_I').html('Déplacement accéléré.');
        $('#aptitudes_II').html('Illetrisme.');
        $('#aptitudes_III').html('Rage 1/jour.');
    };

    if (document.form.niveau.value >= 2) {
        $('#aptitudes_IV').html('Esquive instinctive.');
    };

    if (document.form.niveau.value >= 3) {
        $('#aptitudes_V').html('Sens des pièges (+1).');
    };

    if (document.form.niveau.value >= 4) {
        $('#aptitudes_III').html('Rage 2/jour.');
    };

    if (document.form.niveau.value >= 5) {
        $('#aptitudes_IV').html('Esquive instinctive supérieure.');
    };

    if (document.form.niveau.value >= 6) {
        $('#aptitudes_V').html('Sens des pièges (+2).');
    };

    if (document.form.niveau.value >= 8) {
        $('#aptitudes_III').html('Rage 3/jour.');
    };

    if (document.form.niveau.value >= 9) {
        $('#aptitudes_V').html('Sens des pièges (+3).');
    };

    if (document.form.niveau.value >= 11) {
        $('#aptitudes_VI').html('Rage de grand berseker.');
    };

    if (document.form.niveau.value >= 12) {
        $('#aptitudes_III').html('Rage 4/jour.');
        $('#aptitudes_V').html('Sens des pièges (+4).');
    };

    if (document.form.niveau.value >= 14) {
        $('#aptitudes_VII').html('Volonté indomptable.');
    };

    if (document.form.niveau.value >= 15) {
        $('#aptitudes_V').html('Sens des pièges (+5).');
    };

    if (document.form.niveau.value >= 16) {
        $('#aptitudes_III').html('Rage 5/jour.');
    };

    if (document.form.niveau.value >= 17) {
        $('#aptitudes_VI').html('Rage sans fatigue.');
    };

    if (document.form.niveau.value >= 18) {
        $('#aptitudes_V').html('Sens des pièges (+6).');
    };

    if (document.form.niveau.value >= 20) {
        $('#aptitudes_III').html('Rage 5/jour.');
        $('#aptitudes_VI').html('Rage de maître berseker.');
    };
 };

function competenceClasseBarde() {
    if (document.form.niveau.value >= 1) {
        $('#aptitudes_I').html('Contre-chant.');
        $('#aptitudes_II').html('Fascination.');
        $('#aptitudes_III').html('Inspiration vaillante (+1).');
        $('#aptitudes_IV').html('Musique de barde.');
        $('#aptitudes_V').html('Savoir bardique.');
    };

    if (document.form.niveau.value >= 3) {
        $('#aptitudes_VI').html('Inspiration talentueuse.');
    };

    if (document.form.niveau.value >= 6) {
        $('#aptitudes_VII').html('Suggestion.');
    };

    if (document.form.niveau.value >= 8) {
        $('#aptitudes_III').html('Inspiration vaillante (+2).');
    };

    if (document.form.niveau.value >= 9) {
        $('#aptitudes_VIII').html('Inspiration héroique.');
    };

    if (document.form.niveau.value >= 12) {
        $('#aptitudes_IX').html('Chant de liberté.');
    };

    if (document.form.niveau.value >= 14) {
        $('#aptitudes_III').html('Inspiration vaillante (+3).');
    };

    if (document.form.niveau.value >= 15) {
        $('#aptitudes_X').html('Inspiration intrépide.');
    };

    if (document.form.niveau.value >= 18) {
        $('#aptitudes_XI').html('Suggestion de groupe');
    };

    if (document.form.niveau.value >= 20) {
        $('#aptitudes_III').html('Inspiration vaillante (+4).');
    };
 };

function competenceClasseDruide() {
    if (document.form.niveau.value >= 1) {
        $('#aptitudes_I').html('Compagnon animal.');
        $('#aptitudes_II').html('Empathie sauvage.');
        $('#aptitudes_III').html('Instinct naturel.');
    };

    if (document.form.niveau.value >= 2) {
        $('#aptitudes_IV').html('Déplacement facilité.');
    };

    if (document.form.niveau.value >= 3) {
        $('#aptitudes_V').html('Absence de traces.');
    };

    if (document.form.niveau.value >= 4) {
        $('#aptitudes_VI').html('Résistance à l\'appel de la nature.');
    };

    if (document.form.niveau.value >= 5) {
        $('#aptitudes_VII').html('Forme animale (1/jour).');
    };

    if (document.form.niveau.value >= 6) {
        $('#aptitudes_VII').html('Forme animale (2/jour).');
    };

    if (document.form.niveau.value >= 7) {
        $('#aptitudes_VII').html('Forme animale (3/jour).');
    };

    if (document.form.niveau.value >= 8) {
        $('#aptitudes_VIII').html('Forme animale (taille G).');
    };

    if (document.form.niveau.value >= 9) {
        $('#aptitudes_IX').html('Immunité contre le venin.');
    };

    if (document.form.niveau.value >= 10) {
        $('#aptitudes_VII').html('Forme animale (4/jour).');
    };
    
    if (document.form.niveau.value >= 11) {
        $('#aptitudes_VIII').html('Forme animale (taille TP).');
    };

    if (document.form.niveau.value >= 12) {
        $('#aptitudes_VIII').html('Forme animale (plante).');
    };

    if (document.form.niveau.value >= 13) {
        $('#aptitudes_X').html('Mille visage.');
    };

    if (document.form.niveau.value >= 14) {
        $('#aptitudes_VII').html('Forme animale (5/jour).');
    };

    if (document.form.niveau.value >= 15) {
        $('#aptitudes_XI').html('Eternelle jeunesse.');
        $('#aptitudes_VIII').html('Forme animale (taille TG).');
    };

    if (document.form.niveau.value >= 16) {
        $('#aptitudes_XII').html('Forme animale (élémentaire 1/jour).');
    };

    if (document.form.niveau.value >= 18) {
        $('#aptitudes_VII').html('Forme animale (6/jour).');
        $('#aptitudes_XII').html('Forme animale (élémentaire 2/jour).');
    };

    if (document.form.niveau.value >= 20) {
        $('#aptitudes_XII').html('Forme animale (élémentaire 2/jour).');
        $('#aptitudes_XIII').html('Forme animale (élémentaire de taille TG).');
    };
};

function competenceClasseEnsorceleur() {
    if (document.form.niveau.value >= 1) {
        $('#aptitudes_I').html('Appel de familier.');
    };
};

 function competenceClasseGuerrier() {
    if (document.form.niveau.value >= 1) {
        $('#aptitudes_I').html('+1 don supplémentaire.');
    };

    if (document.form.niveau.value >= 2) {
        $('#aptitudes_I').html('+2 dons supplémentaires.');
    };

    if (document.form.niveau.value >= 4) {
        $('#aptitudes_I').html('+3 dons supplémentaires.');
    };

    if (document.form.niveau.value >= 6) {
        $('#aptitudes_I').html('+4 dons supplémentaires.');
    };

    if (document.form.niveau.value >= 8) {
        $('#aptitudes_I').html('+5 dons supplémentaires.');
    };

    if (document.form.niveau.value >= 10) {
        $('#aptitudes_I').html('+6 dons supplémentaires.');
    };
    
    if (document.form.niveau.value >= 12) {
        $('#aptitudes_I').html('+7 dons supplémentaires.');
    };

    if (document.form.niveau.value >= 14) {
        $('#aptitudes_I').html('+8 dons supplémentaires.');
    };

    if (document.form.niveau.value >= 16) {
        $('#aptitudes_I').html('+9 dons supplémentaires.');
    };

    if (document.form.niveau.value >= 18) {
        $('#aptitudes_I').html('+10 dons supplémentaires.');
    };

    if (document.form.niveau.value >= 20) {
        $('#aptitudes_I').html('+11 dons supplémentaires.');
    };
 };

function competenceClasseMagicien() {
    if (document.form.niveau.value >= 1) {
        $('#aptitudes_I').html('Appel de familier.');
        $('#aptitudes_II').html('Ecriture de parchemins.');
    };

    if (document.form.niveau.value >= 5) {
        $('#aptitudes_III').html('+1 don supplémentaire.');
    };

    if (document.form.niveau.value >= 10) {
        $('#aptitudes_III').html('+2 dons supplémentaires.');
    };

    if (document.form.niveau.value >= 15) {
        $('#aptitudes_III').html('+3 dons supplémentaires.');
    };

    if (document.form.niveau.value >= 20) {
        $('#aptitudes_III').html('+4 dons supplémentaires.');
    };
 };

function competenceClasseMoine() {
    if (document.form.niveau.value >= 1) {
        $('#aptitudes_I').html('Combat à mains nues.');
        $('#aptitudes_II').html('Déluge de coup.');
        $('#aptitudes_III').html('+1 don supplémentaire.');
    };

    if (document.form.niveau.value >= 2) {
        $('#aptitudes_III').html('+2 dons supplémentaires.');
        $('#aptitudes_IV').html('Esquive totale.');
    };

    if (document.form.niveau.value >= 3) {
        $('#aptitudes_V').html('Sérénité.');
    };

    if (document.form.niveau.value >= 4) {
        $('#aptitudes_VI').html('Frappe ki (magie).');
        $('#aptitudes_VII').html('Chute ralentie (6m).');
    };

    if (document.form.niveau.value >= 5) {
        $('#aptitudes_VIII').html('Pureté physique.');
    };

    if (document.form.niveau.value >= 6) {
        $('#aptitudes_III').html('+3 dons supplémentaires.');
        $('#aptitudes_VII').html('Chute ralentie (9m).');
    };

    if (document.form.niveau.value >= 7) {
        $('#aptitudes_IX').html('Plénitude physique.');
    };

    if (document.form.niveau.value >= 8) {
        $('#aptitudes_VII').html('Chute ralentie (12m).');
    };

    if (document.form.niveau.value >= 9) {
        $('#aptitudes_X').html('Esquive extraordinaire.');
    };

    if (document.form.niveau.value >= 10) {
        $('#aptitudes_VII').html('Chute ralentie (15m).');
        $('#aptitudes_XI').html('Frappe ki (loi)');
    };

    
    if (document.form.niveau.value >= 11) {
        $('#aptitudes_XII').html('Corps de diamant.');
        $('#aptitudes_XIII').html('Déluge supérieur.');
    };

    if (document.form.niveau.value >= 12) {
        $('#aptitudes_VII').html('Chute ralentie (18m).');
        $('#aptitudes_XIV').html('Pas chassé.');
    };

    if (document.form.niveau.value >= 13) {
        $('#aptitudes_XV').html('Ame de diamant.');
    };

    if (document.form.niveau.value >= 14) {
        $('#aptitudes_VII').html('Chute ralentie (21m).');
    };

    if (document.form.niveau.value >= 15) {
        $('#aptitudes_XVI').html('Paume vibratoire.');
    };

    if (document.form.niveau.value >= 16) {
        $('#aptitudes_VII').html('Chute ralentie (24m).');
        $('#aptitudes_XVII').html('Frappe ki (adamantium).');
    };

    if (document.form.niveau.value >= 17) {
        $('#aptitudes_XVIII').html('Eternelle jeunesse.');
        $('#aptitudes_XIX').html('Langue du soleil et de la lune.');
    };

    if (document.form.niveau.value >= 18) {
        $('#aptitudes_VII').html('Chute ralentie (27m).');
    };

    if (document.form.niveau.value >= 19) {
        $('#aptitudes_XX').html('Désertion de l\'âme.');
    };

    if (document.form.niveau.value >= 20) {
        $('#aptitudes_VII').html('Chute ralentie (illimité).');
        $('#aptitudes_XXI').html('Perfection de l\'être.');
    };
 };

function competenceClassePaladin() {
    if (document.form.niveau.value >= 1) {
        $('#aptitudes_I').html('Aura du Bien.');
        $('#aptitudes_II').html('Châtiment du mal (1/jour).');
        $('#aptitudes_III').html('Détection du mal.');
    };

    if (document.form.niveau.value >= 2) {
        $('#aptitudes_IV').html('Grâce divine.');
        $('#aptitudes_V').html('Imposition des mains.');
    };

    if (document.form.niveau.value >= 3) {
        $('#aptitudes_VI').html('Aura de bravour.');
        $('#aptitudes_VII').html('Santé divine.');
    };

    if (document.form.niveau.value >= 4) {
        $('#aptitudes_IX').html('Renvoie des morts-vivants.');
    };

    if (document.form.niveau.value >= 5) {
        $('#aptitudes_II').html('Châtiment du mal (2/jour).');
        $('#aptitudes_X').html('Destrier du paladin.');
    };

    if (document.form.niveau.value >= 6) {
        $('#aptitudes_XI').html('Guérison des maladies (1/semaine).');
    };

    if (document.form.niveau.value >= 9) {
        $('#aptitudes_XI').html('Guérison des maladies (2/semaine).');
    };

    if (document.form.niveau.value >= 10) {
        $('#aptitudes_II').html('Châtiment du mal (3/jour).');
    };

    if (document.form.niveau.value >= 12) {
        $('#aptitudes_XI').html('Guérison des maladies (3/semaine).');
    };

    if (document.form.niveau.value >= 15) {
        $('#aptitudes_II').html('Châtiment du mal (4/jour).');
        $('#aptitudes_XI').html('Guérison des maladies (4/semaine).');
    };

    if (document.form.niveau.value >= 18) {
        $('#aptitudes_XI').html('Guérison des maladies (5/semaine).');
    };

    if (document.form.niveau.value >= 20) {
        $('#aptitudes_II').html('Châtiment du mal (5/jour).');
    };
 };

function competenceClassePretre() {
    if (document.form.niveau.value >= 1) {
        $('#aptitudes_I').html('Renvoi ou intimidation des morts-vivants.');
    };
 };

function competenceClasseRodeur() {
    if (document.form.niveau.value >= 1) {
        $('#aptitudes_I').html('Empathie sauvage.');
        $('#aptitudes_II').html('1er ennemie juré.');
        $('#aptitudes_III').html('Pistage.');
    };

    if (document.form.niveau.value >= 2) {
        $('#aptitudes_IV').html('Style de combat.');
    };

    if (document.form.niveau.value >= 3) {
        $('#aptitudes_V').html('Endurance.');
    };

    if (document.form.niveau.value >= 4) {
        $('#aptitudes_VI').html('Compagnon animal.');
    };

    if (document.form.niveau.value >= 5) {
        $('#aptitudes_II').html('2ème ennemie juré.');
    };

    if (document.form.niveau.value >= 6) {
        $('#aptitudes_VII').html('Science du style de combat.');
    };

    if (document.form.niveau.value >= 7) {
        $('#aptitudes_VIII').html('Déplacement facilité.');
    };

    if (document.form.niveau.value >= 8) {
        $('#aptitudes_IX').html('Pistage accéléré.');
    };

    if (document.form.niveau.value >= 9) {
        $('#aptitudes_X').html('Esquive totale.');
    };

    if (document.form.niveau.value >= 10) {
        $('#aptitudes_II').html('3ème ennemie juré.');
    };

    
    if (document.form.niveau.value >= 11) {
        $('#aptitudes_XI').html('Maîtrise du style de combat.');
    };

    if (document.form.niveau.value >= 13) {
        $('#aptitudes_XII').html('Camouflage.');
    };

    if (document.form.niveau.value >= 15) {
        $('#aptitudes_II').html('4ème ennemie juré.');
    };

    if (document.form.niveau.value >= 17) {
        $('#aptitudes_XIII').html('Discrétion totale.');
    };

    if (document.form.niveau.value >= 20) {
        $('#aptitudes_II').html('5ème ennemie juré.');
    };
 };

function competenceClasseRoublard() {
    if (document.form.niveau.value >= 1) {
        $('#aptitudes_I').html('Attaque sournoise (+1D6).');
        $('#aptitudes_II').html('Recherche des pièges.');
    };

    if (document.form.niveau.value >= 2) {
        $('#aptitudes_III').html('Esquive totale.');
    };

    if (document.form.niveau.value >= 3) {
        $('#aptitudes_I').html('Attaque sournoise (+2D6).');
        $('#aptitudes_IV').html('Sens des pièges (+1).');
    };

    if (document.form.niveau.value >= 4) {
        $('#aptitudes_V').html('Esquive instinctive.');
    };

    if (document.form.niveau.value >= 5) {
        $('#aptitudes_I').html('Attaque sournoise (+3D6).');
    };

    if (document.form.niveau.value >= 6) {
        $('#aptitudes_IV').html('Sens des pièges (+2).');
    };

    if (document.form.niveau.value >= 7) {
        $('#aptitudes_I').html('Attaque sournoise (+4D6).');
    };

    if (document.form.niveau.value >= 8) {
        $('#aptitudes_VI').html('Esquive instinctive supérieure.');
    };

    if (document.form.niveau.value >= 9) {
        $('#aptitudes_I').html('Attaque sournoise (+5D6).');
        $('#aptitudes_IV').html('Sens des pièges (+3).');
    };

    if (document.form.niveau.value >= 10) {
        $('#aptitudes_VII').html('1 pouvoir spéciale.');
    };

    if (document.form.niveau.value >= 11) {
        $('#aptitudes_I').html('Attaque sournoise (+6D6).');
    };

    if (document.form.niveau.value >= 12) {
        $('#aptitudes_IV').html('Sens des pièges (+4).');
    };

    if (document.form.niveau.value >= 13) {
        $('#aptitudes_I').html('Attaque sournoise (+7D6).');
        $('#aptitudes_VII').html('2 pouvoir spéciale.');
    };

    if (document.form.niveau.value >= 15) {
        $('#aptitudes_I').html('Attaque sournoise (+8D6).');
        $('#aptitudes_IV').html('Sens des pièges (+5).');
    };

    if (document.form.niveau.value >= 16) {
        $('#aptitudes_VII').html('3 pouvoir spéciale.');
    };

    if (document.form.niveau.value >= 17) {
        $('#aptitudes_I').html('Attaque sournoise (+9D6).');
    };

    if (document.form.niveau.value >= 18) {
        $('#aptitudes_IV').html('Sens des pièges (+6).');
    };

    if (document.form.niveau.value >= 19) {
        $('#aptitudes_I').html('Attaque sournoise (+10D6).');
        $('#aptitudes_VII').html('4 pouvoir spéciale.');
    };
 };

function validation() {
  console.log('valider : ',document.form.nom_du_personnage.value);
  if (document.form.nom_du_personnage.value == '') {
    document.form.nom_du_personnage.style.backgroundColor = 'FF0000';
    alert('La saisie du champ nom du personnage est obligatoire');
  } else {
    document.form.nom_du_personnage.style.backgroundColor = 'FFFFFF';
  };

  console.log('valider : ',document.form.campagne.value);
  if (document.form.campagne.value == '') {
    document.form.campagne.style.backgroundColor = 'FF0000';
    alert('La saisie du champ campagne est obligatoire');
  } else {
    document.form.campagne.style.backgroundColor = 'FFFFFF';
  };
  
  console.log('valider : ',document.form.nom_du_joueur.value);
  if (document.form.nom_du_joueur.value == '') {
    document.form.nom_du_joueur.style.backgroundColor = 'FF0000';
    alert('La saisie du champ nom du joueur est obligatoire');
  } else {
    document.form.nom_du_joueur.style.backgroundColor = 'FFFFFF';
  };
  
  console.log('valider : ',document.form.divinite.value);
  if (document.form.divinite.value == '') {
    document.form.divinite.style.backgroundColor = 'FF0000';
    alert('La saisie du champ divinite est obligatoire');
  } else {
    document.form.divinite.style.backgroundColor = 'FFFFFF';
  };
  
  console.log('valider : ',document.form.cat_age.value);
  if (document.form.cat_age.value == '') {
    document.form.cat_age.style.backgroundColor = 'FF0000';
    alert('La saisie du champ age est obligatoire');
  } else {
    document.form.cat_age.style.backgroundColor = 'FFFFFF';
  };
  
};

function reinitialisation() {
    $('#classe_personnage'.html('PERSONNAGE'));
    remiseAZero();
    $('#bba').html('0');
    $('#lut_bon_bas_att').html('');
    $('#sau_bon_bas_ref').html('');
    $('#sau_bon_bas_vig').html('');
    $('#sau_bon_bas_vol').html('');
    $('#bba').html('0');
    $('#lut_bon_bas_att').html('');
    $('#ide').html('');
    $('#hide').html('');
    $('#prochain_niveau').html('');
    $('#vit').html('');

    document.form.for_val.value = 0;
    document.form.dex_val.value = 0;
    document.form.con_val.value = 0;
    document.form.int_val.value = 0;
    document.form.sag_val.value = 0;
    document.form.cha_val.value = 0;

    $('#totalCompetenceDétection').html('');
    $('#totalCompetenceFouille').html('');
    $('#totalCompetencePerception_auditive').html('');
    $('#totalCompetenceDiplomatie').html('');
    $('#totalCompetenceRenseignements').html('');
    $('#totalCompetenceDéplacement_silencieux').html('');
    $('#totalCompetenceEscalade').html('');
    $('#totalCompetenceSaut').html('');

    $('#traits_I').html('_');
    $('#traits_II').html('_');
    $('#traits_III').html('_');
    $('#traits_IV').html('_');
    $('#traits_V').html('_');
    $('#traits_VI').html('_');
    $('#traits_VII').html('_');
    $('#traits_VIII').html('_');
    $('#traits_IX').html('_');
    $('#traits_X').html('_');
    $('#traits_XI').html('_');
    $('#traits_XII').html('_');
    $('#traits_XIII').html('_');
    $('#traits_XIV').html('_');
    $('#traits_XV').html('_');
    $('#traits_XVI').html('_');

    $('#for_mod').html('');
    $('#lut_mod_for').html('');
    for (var i = 0; i < document.getElementsByClassName('carac_for').length; i++) {
        document.getElementsByClassName('carac_for')[i].html('');
    };
    $('#chargeLegere').html('');
    $('#chargeIntermediaire').html('');
    $('#chargeLourde').html('');
    $('#chargeMax').html('');
    $('#soulever').html('');
    $('#tirerOuPousser').html('');

    $('#sau_bon_bas_ref').html('');
    $('#sau_mod_car_ref').html('');
    $('#sau_total_ref').html('');

    $('#dex_mod').html('');
    $('#ca_mod_dex').html('');
    $('#ca_total').html('');
    $('#init_mod_dex').html('');
    $('#val_ca_contact').html('');
    $('#val_pri_depourvu').html('');
    $('#sau_mod_car_ref').html('');
    for (var i = 0; i < document.getElementsByClassName('carac_dex').length; i++) {
        document.getElementsByClassName('carac_dex')[i].html('');
    };

    $('#con_mod').html('');
    $('#pv').html('');
    $('#sau_mod_car_vig').html('');
    $('#sau_bon_bas_vig').html('');
    $('#sau_mod_car_vig').html('');
    $('#sau_total_vig').html('');
    for (var i = 0; i < document.getElementsByClassName('carac_con').length; i++) {
        document.getElementsByClassName('carac_con')[i].html('')
    };

    $('#int_mod').html('');
    for (var i = 0; i < document.getElementsByClassName('carac_int').length; i++) {
        document.getElementsByClassName('carac_int')[i].html('');
    };

    $('#dd_des_sorts').html('');
    $('#dd_des_sorts_0').html('');
    $('#dd_des_sorts_I').html('');
    $('#dd_des_sorts_II').html('');
    $('#dd_des_sorts_III').html('');
    $('#dd_des_sorts_IV').html('');
    $('#dd_des_sorts_V').html('');
    $('#dd_des_sorts_VI').html('');
    $('#dd_des_sorts_VII').html('');
    $('#dd_des_sorts_VIII').html('');
    $('#dd_des_sorts_IX').html('');

    $('#sorts_en_bonus_0').html('-');
    $('#sorts_en_bonus_I').html('-');
    $('#sorts_en_bonus_II').html('-');
    $('#sorts_en_bonus_III').html('-');
    $('#sorts_en_bonus_IV').html('-');
    $('#sorts_en_bonus_V').html('-');
    $('#sorts_en_bonus_VI').html('-');
    $('#sorts_en_bonus_VII').html('-');
    $('#sorts_en_bonus_VIII').html('-');
    $('#sorts_en_bonus_IX').html('-');

    $('#sag_mod').html('');
    $('#sau_mod_car_vol').html('');
    $('#sau_bon_bas_vol').html('');
    $('#sau_mod_car_vol').html('');
    document.form.mod_tem_vol.value = '';
    document.form.mod_part_vol.value = '';
    $('#sau_total_vol').html('');
    for (var i = 0; i < document.getElementsByClassName('carac_sag').length; i++) {
        document.getElementsByClassName('carac_sag')[i].html('');
    };

    $('#cha_mod').html('');
    for (var i = 0; i < document.getElementsByClassName('carac_cha').length; i++) {
        document.getElementsByClassName('carac_cha')[i].html('');
    };

    $('#red_deg').html('0');

    $('#lut_bon_bas_att').html('');
    $('#lut_mod_for').html('');
    $('#lut_total').html('');
    $('#poidsTotalPorte').html('');

    $('#bonus_CA_armure').html('');
    $('#dex_max').html('');
    $('#malus_aux_test_armure').html('');
    $('#echec_sorts_armure').html('');
    $('#vitesse_armure').html('');
    $('#poids_armure').html('');
    $('#ca_bon_arm').html('');
    $('#ca_mod_dex').html('');
    $('#ca_total').html('');
    $('#val_ca_contact').html('');
    $('#val_pri_depourvu').html('');

    $('#bonus_CA_bouclier').html('');
    $('#poids_bouclier').html('');
    $('#malus_aux_tests_bouclier').html('');
    $('#malus_aux_tests_bouclier').html('');
    $('#echec_sorts_bouclier').html('');
    $('#ca_bon_bou').html('');

    $('#bonus_CA_protection_I').html('');
    $('#poids_protection_I').html('');
    $('#malus_aux_tests_protection_I').html('');
    $('#ca_mod_div').html('');

    $('#aptitudes_I').html('_');
    $('#aptitudes_II').html('_');
    $('#aptitudes_III').html('_');
    $('#aptitudes_IV').html('_');
    $('#aptitudes_V').html('_');
    $('#aptitudes_VI').html('_');
    $('#aptitudes_VII').html('_');
    $('#aptitudes_VIII').html('_');
    $('#aptitudes_IX').html('_');
    $('#aptitudes_X').html('_');
    $('#aptitudes_XI').html('_');
    $('#aptitudes_XII').html('_');
    $('#aptitudes_XIII').html('_');
    $('#aptitudes_XIV').html('_');
    $('#aptitudes_XV').html('_');
    $('#aptitudes_XVI').html('_');
    $('#aptitudes_XVII').html('_');
    $('#aptitudes_XVIII').html('_');
    $('#aptitudes_XIX').html('_');
    $('#aptitudes_XX').html('_');
    $('#aptitudes_XXI').html('_');

    $('#maniement_arme_I').length = 0;  
    $('#maniement_arme_II').length = 0;  
    $('#maniement_arme_III').length = 0;  
    $('#maniement_arme_IV').length = 0;  
    $('#maniement_arme_V').length = 0;  
    $('#arme_I').length = 0;  
    $('#arme_II').length = 0;  
    $('#arme_III').length = 0;  
    $('#arme_IV').length = 0;  
    $('#arme_V').length = 0;  
};

function impression() {
    window.print();
};