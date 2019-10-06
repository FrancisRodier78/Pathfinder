$(function() {
    $('#classe').change(function() {
        switch($('#classe').val()) {
            case " " :
                $('#titre_feuille').text('PATHFINDER');
                break;
            case "Barbare" :
                $('#titre_feuille').text('BARBARE');
                break;
            case "Barde" :
                $('#titre_feuille').text('BARDE');
                break;
            case "Druide" :
                $('#titre_feuille').text('DRUIDE');
                break;
            case "Ensorceleur" :
                $('#titre_feuille').text('ENSORCELEUR');
                break;
            case "Guerrier" :
                $('#titre_feuille').text('GUERRIER');
                break;
            case "Magicien" :
                $('#titre_feuille').text('MAGICIEN');
                break;
            case "Moine" :
                $('#titre_feuille').text('MOINE');
                break;
            case "Paladin" :
                $('#titre_feuille').text('PALADIN');
                break;
            case "Prêtre" :
                $('#titre_feuille').text('PRETRE');
                break;
            case "Rôdeur" :
                $('#titre_feuille').text('RODEUR');
                break;
            case "Roublard" :
                $('#titre_feuille').text('ROUBLARD');
                break;
            default:
                $('#classe').text('La classe est invalide.');
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
    		case " " :
    			remiseAZero();
    			break;
    		case "Barbare" :
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
    		case "Barde" :
    			remiseAZero();
    			document.getElementById('acrobatie').innerHTML="<h2>X</h2>";
    			document.getElementById('art_de_la_magie').innerHTML="<h2>X</h2>";
    			document.getElementById('artisanat_I').innerHTML="<h2>X</h2>";
        		document.getElementById('artisanat_II').innerHTML="<h2>X</h2>";
        		document.getElementById('artisanat_III').innerHTML="<h2>X</h2>";
        		document.getElementById('bluf').innerHTML="<h2>X</h2>";
        		document.getElementById('concentration').innerHTML="<h2>X</h2>";
        		document.getElementById('connaissances_I').innerHTML="<h2>X</h2>";
        		document.getElementById('connaissances_II').innerHTML="<h2>X</h2>";
        		document.getElementById('connaissances_III').innerHTML="<h2>X</h2>";
        		document.getElementById('connaissances_IV').innerHTML="<h2>X</h2>";
        		document.getElementById('connaissances_V').innerHTML="<h2>X</h2>";
        		document.getElementById('décriptage').innerHTML="<h2>X</h2>";
        		document.getElementById('déguisement').innerHTML="<h2>X</h2>";
        		document.getElementById('déplacement_silencieux').innerHTML="<h2>X</h2>";
        		document.getElementById('diplomatie').innerHTML="<h2>X</h2>";
        		document.getElementById('discrétion').innerHTML="<h2>X</h2>";
        		document.getElementById('equilibre').innerHTML="<h2>X</h2>";
        		document.getElementById('escalade').innerHTML="<h2>X</h2>";
        		document.getElementById('escamotage').innerHTML="<h2>X</h2>";
        		document.getElementById('estimation').innerHTML="<h2>X</h2>";
        		document.getElementById('évasion').innerHTML="<h2>X</h2>";
        		document.getElementById('langues').innerHTML="<h2>X</h2>";
        		document.getElementById('natation').innerHTML="<h2>X</h2>";
        		document.getElementById('perception_auditive').innerHTML="<h2>X</h2>";
        		document.getElementById('profession_I').innerHTML="<h2>X</h2>";
        		document.getElementById('profession_II').innerHTML="<h2>X</h2>";
        		document.getElementById('psychologie').innerHTML="<h2>X</h2>";
        		document.getElementById('renseignements').innerHTML="<h2>X</h2>";
        		document.getElementById('représentation_I').innerHTML="<h2>X</h2>";
        		document.getElementById('représentation_II').innerHTML="<h2>X</h2>";
        		document.getElementById('représentation_III').innerHTML="<h2>X</h2>";
        		document.getElementById('saut').innerHTML="<h2>X</h2>";
        		document.getElementById('utilisation_d_objets_magiques').innerHTML="<h2>X</h2>";
    			break;
    		case "Druide" :
    			remiseAZero();
    			document.getElementById('art_de_la_magie').innerHTML="<h2>X</h2>";
    			document.getElementById('artisanat_I').innerHTML="<h2>X</h2>";
        		document.getElementById('artisanat_II').innerHTML="<h2>X</h2>";
        		document.getElementById('artisanat_III').innerHTML="<h2>X</h2>";
        		document.getElementById('concentration').innerHTML="<h2>X</h2>";
        		document.getElementById('connaissances_I').innerHTML="<h2>X</h2>";
        		document.getElementById('détection').innerHTML="<h2>X</h2>";
        		document.getElementById('diplomatie').innerHTML="<h2>X</h2>";
        		document.getElementById('dressage').innerHTML="<h2>X</h2>";
        		document.getElementById('equitation').innerHTML="<h2>X</h2>";
        		document.getElementById('natation').innerHTML="<h2>X</h2>";
        		document.getElementById('perception_auditive').innerHTML="<h2>X</h2>";
        		document.getElementById('premier_secours').innerHTML="<h2>X</h2>";
        		document.getElementById('profession_I').innerHTML="<h2>X</h2>";
        		document.getElementById('profession_II').innerHTML="<h2>X</h2>";
        		document.getElementById('saut').innerHTML="<h2>X</h2>";
        		document.getElementById('survie').innerHTML="<h2>X</h2>";
    			break;
    		case "Ensorceleur" :
    			remiseAZero();
    			document.getElementById('art_de_la_magie').innerHTML="<h2>X</h2>";
    			document.getElementById('artisanat_I').innerHTML="<h2>X</h2>";
        		document.getElementById('artisanat_II').innerHTML="<h2>X</h2>";
        		document.getElementById('artisanat_III').innerHTML="<h2>X</h2>";
        		document.getElementById('bluf').innerHTML="<h2>X</h2>";
        		document.getElementById('concentration').innerHTML="<h2>X</h2>";
        		document.getElementById('connaissances_I').innerHTML="<h2>X</h2>";
        		document.getElementById('profession_I').innerHTML="<h2>X</h2>";
        		document.getElementById('profession_II').innerHTML="<h2>X</h2>";
    			break;
    		case "Guerrier" :
    			remiseAZero();
    			document.getElementById('artisanat_I').innerHTML="<h2>X</h2>";
        		document.getElementById('artisanat_II').innerHTML="<h2>X</h2>";
        		document.getElementById('artisanat_III').innerHTML="<h2>X</h2>";
        		document.getElementById('dressage').innerHTML="<h2>X</h2>";
        		document.getElementById('equitation').innerHTML="<h2>X</h2>";
        		document.getElementById('escalade').innerHTML="<h2>X</h2>";
        		document.getElementById('intimidation').innerHTML="<h2>X</h2>";
        		document.getElementById('natation').innerHTML="<h2>X</h2>";
        		document.getElementById('saut').innerHTML="<h2>X</h2>";
    			break;
    		case "Magicien" :
    			remiseAZero();
    			document.getElementById('art_de_la_magie').innerHTML="<h2>X</h2>";
    			document.getElementById('artisanat_I').innerHTML="<h2>X</h2>";
        		document.getElementById('artisanat_II').innerHTML="<h2>X</h2>";
        		document.getElementById('artisanat_III').innerHTML="<h2>X</h2>";
        		document.getElementById('concentration').innerHTML="<h2>X</h2>";
        		document.getElementById('connaissances_I').innerHTML="<h2>X</h2>";
        		document.getElementById('connaissances_II').innerHTML="<h2>X</h2>";
        		document.getElementById('connaissances_III').innerHTML="<h2>X</h2>";
        		document.getElementById('connaissances_IV').innerHTML="<h2>X</h2>";
        		document.getElementById('connaissances_V').innerHTML="<h2>X</h2>";
        		document.getElementById('décriptage').innerHTML="<h2>X</h2>";
        		document.getElementById('profession_I').innerHTML="<h2>X</h2>";
        		document.getElementById('profession_II').innerHTML="<h2>X</h2>";
    			break;
    		case "Moine" :
    			remiseAZero();
    			document.getElementById('acrobatie').innerHTML="<h2>X</h2>";
    			document.getElementById('artisanat_I').innerHTML="<h2>X</h2>";
        		document.getElementById('artisanat_II').innerHTML="<h2>X</h2>";
        		document.getElementById('artisanat_III').innerHTML="<h2>X</h2>";
        		document.getElementById('concentration').innerHTML="<h2>X</h2>";
        		document.getElementById('connaissances_I').innerHTML="<h2>X</h2>";
        		document.getElementById('connaissances_II').innerHTML="<h2>X</h2>";
        		document.getElementById('déplacement_silencieux').innerHTML="<h2>X</h2>";
        		document.getElementById('détection').innerHTML="<h2>X</h2>";
        		document.getElementById('diplomatie').innerHTML="<h2>X</h2>";
        		document.getElementById('discrétion').innerHTML="<h2>X</h2>";
        		document.getElementById('equilibre').innerHTML="<h2>X</h2>";
        		document.getElementById('escalade').innerHTML="<h2>X</h2>";
        		document.getElementById('évasion').innerHTML="<h2>X</h2>";
        		document.getElementById('natation').innerHTML="<h2>X</h2>";
        		document.getElementById('perception_auditive').innerHTML="<h2>X</h2>";
        		document.getElementById('profession_I').innerHTML="<h2>X</h2>";
        		document.getElementById('profession_II').innerHTML="<h2>X</h2>";
        		document.getElementById('psychologie').innerHTML="<h2>X</h2>";
        		document.getElementById('représentation_I').innerHTML="<h2>X</h2>";
        		document.getElementById('représentation_II').innerHTML="<h2>X</h2>";
        		document.getElementById('représentation_III').innerHTML="<h2>X</h2>";
        		document.getElementById('saut').innerHTML="<h2>X</h2>";
    			break;
    		case "Paladin" :
    			remiseAZero();
    			document.getElementById('artisanat_I').innerHTML="<h2>X</h2>";
        		document.getElementById('artisanat_II').innerHTML="<h2>X</h2>";
        		document.getElementById('artisanat_III').innerHTML="<h2>X</h2>";
        		document.getElementById('concentration').innerHTML="<h2>X</h2>";
        		document.getElementById('connaissances_I').innerHTML="<h2>X</h2>";
        		document.getElementById('connaissances_II').innerHTML="<h2>X</h2>";
        		document.getElementById('diplomatie').innerHTML="<h2>X</h2>";
        		document.getElementById('dressage').innerHTML="<h2>X</h2>";
        		document.getElementById('equitation').innerHTML="<h2>X</h2>";
        		document.getElementById('premier_secours').innerHTML="<h2>X</h2>";
        		document.getElementById('profession_I').innerHTML="<h2>X</h2>";
        		document.getElementById('profession_II').innerHTML="<h2>X</h2>";
        		document.getElementById('psychologie').innerHTML="<h2>X</h2>";
    			break;
    		case "Prêtre" :
    			remiseAZero();
    			document.getElementById('art_de_la_magie').innerHTML="<h2>X</h2>";
    			document.getElementById('artisanat_I').innerHTML="<h2>X</h2>";
        		document.getElementById('artisanat_II').innerHTML="<h2>X</h2>";
        		document.getElementById('artisanat_III').innerHTML="<h2>X</h2>";
        		document.getElementById('concentration').innerHTML="<h2>X</h2>";
        		document.getElementById('connaissances_I').innerHTML="<h2>X</h2>";
        		document.getElementById('connaissances_II').innerHTML="<h2>X</h2>";
        		document.getElementById('connaissances_III').innerHTML="<h2>X</h2>";
        		document.getElementById('connaissances_IV').innerHTML="<h2>X</h2>";
        		document.getElementById('diplomatie').innerHTML="<h2>X</h2>";
        		document.getElementById('premier_secours').innerHTML="<h2>X</h2>";
        		document.getElementById('profession_I').innerHTML="<h2>X</h2>";
        		document.getElementById('profession_II').innerHTML="<h2>X</h2>";
    			break;
    		case "Rôdeur" :
    			remiseAZero();
    			document.getElementById('artisanat_I').innerHTML="<h2>X</h2>";
        		document.getElementById('artisanat_II').innerHTML="<h2>X</h2>";
        		document.getElementById('artisanat_III').innerHTML="<h2>X</h2>";
        		document.getElementById('concentration').innerHTML="<h2>X</h2>";
        		document.getElementById('connaissances_I').innerHTML="<h2>X</h2>";
        		document.getElementById('connaissances_II').innerHTML="<h2>X</h2>";
        		document.getElementById('connaissances_III').innerHTML="<h2>X</h2>";
        		document.getElementById('déplacement_silencieux').innerHTML="<h2>X</h2>";
        		document.getElementById('détection').innerHTML="<h2>X</h2>";
        		document.getElementById('discrétion').innerHTML="<h2>X</h2>";
        		document.getElementById('dressage').innerHTML="<h2>X</h2>";
        		document.getElementById('equitation').innerHTML="<h2>X</h2>";
        		document.getElementById('escalade').innerHTML="<h2>X</h2>";
        		document.getElementById('fouille').innerHTML="<h2>X</h2>";
        		document.getElementById('maîtrise_des_cordes').innerHTML="<h2>X</h2>";
        		document.getElementById('natation').innerHTML="<h2>X</h2>";
        		document.getElementById('perception_auditive').innerHTML="<h2>X</h2>";
        		document.getElementById('premier_secours').innerHTML="<h2>X</h2>";
        		document.getElementById('profession_I').innerHTML="<h2>X</h2>";
        		document.getElementById('profession_II').innerHTML="<h2>X</h2>";
        		document.getElementById('saut').innerHTML="<h2>X</h2>";
        		document.getElementById('survie').innerHTML="<h2>X</h2>";
    			break;
    		case "Roublard" :
    			remiseAZero();
    			document.getElementById('acrobatie').innerHTML="<h2>X</h2>";
    			document.getElementById('artisanat_I').innerHTML="<h2>X</h2>";
        		document.getElementById('artisanat_II').innerHTML="<h2>X</h2>";
        		document.getElementById('artisanat_III').innerHTML="<h2>X</h2>";
        		document.getElementById('bluf').innerHTML="<h2>X</h2>";
        		document.getElementById('connaissances_I').innerHTML="<h2>X</h2>";
        		document.getElementById('contrefaçon').innerHTML="<h2>X</h2>";
        		document.getElementById('crochetage').innerHTML="<h2>X</h2>";
        		document.getElementById('décriptage').innerHTML="<h2>X</h2>";
        		document.getElementById('déguisement').innerHTML="<h2>X</h2>";
        		document.getElementById('déplacement_silencieux').innerHTML="<h2>X</h2>";
        		document.getElementById('désamorçage_sabotage').innerHTML="<h2>X</h2>";
        		document.getElementById('détection').innerHTML="<h2>X</h2>";
        		document.getElementById('diplomatie').innerHTML="<h2>X</h2>";
        		document.getElementById('discrétion').innerHTML="<h2>X</h2>";
        		document.getElementById('equilibre').innerHTML="<h2>X</h2>";
        		document.getElementById('escalade').innerHTML="<h2>X</h2>";
        		document.getElementById('escamotage').innerHTML="<h2>X</h2>";
        		document.getElementById('estimation').innerHTML="<h2>X</h2>";
        		document.getElementById('évasion').innerHTML="<h2>X</h2>";
        		document.getElementById('fouille').innerHTML="<h2>X</h2>";
        		document.getElementById('intimidation').innerHTML="<h2>X</h2>";
        		document.getElementById('maîtrise_des_cordes').innerHTML="<h2>X</h2>";
        		document.getElementById('natation').innerHTML="<h2>X</h2>";
        		document.getElementById('perception_auditive').innerHTML="<h2>X</h2>";
        		document.getElementById('profession_I').innerHTML="<h2>X</h2>";
        		document.getElementById('profession_II').innerHTML="<h2>X</h2>";
        		document.getElementById('psychologie').innerHTML="<h2>X</h2>";
        		document.getElementById('renseignements').innerHTML="<h2>X</h2>";
        		document.getElementById('représentation_I').innerHTML="<h2>X</h2>";
        		document.getElementById('représentation_II').innerHTML="<h2>X</h2>";
        		document.getElementById('représentation_III').innerHTML="<h2>X</h2>";
        		document.getElementById('saut').innerHTML="<h2>X</h2>";
        		document.getElementById('utilisation_d_objets_magiques').innerHTML="<h2>X</h2>";
        		document.getElementById('non_défini').innerHTML="<h2>X</h2>";
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
		case "00" :
			document.getElementById('bba').innerHTML=" ";
			document.getElementById('lut_bon_bas_att').innerHTML=" ";
			break;
		case "01" :
			document.getElementById('bba').innerHTML="1";
			document.getElementById('lut_bon_bas_att').innerHTML="1";
			break;
		case "02" :
			document.getElementById('bba').innerHTML="2";
			document.getElementById('lut_bon_bas_att').innerHTML="2";
			break;
		case "03" :
			document.getElementById('bba').innerHTML="3";
			document.getElementById('lut_bon_bas_att').innerHTML="3";
			break;
		case "04" :
			document.getElementById('bba').innerHTML="4";
			document.getElementById('lut_bon_bas_att').innerHTML="4";
			break;
		case "05" :
			document.getElementById('bba').innerHTML="5";
			document.getElementById('lut_bon_bas_att').innerHTML="5";
			break;
		case "06" :
			document.getElementById('bba').innerHTML="6";
			document.getElementById('lut_bon_bas_att').innerHTML="6";
			break;
		case "07" :
			document.getElementById('bba').innerHTML="7";
			document.getElementById('lut_bon_bas_att').innerHTML="7";
			break;
		case "08" :
			document.getElementById('bba').innerHTML="8";
			document.getElementById('lut_bon_bas_att').innerHTML="8";
			break;
		case "09" :
			document.getElementById('bba').innerHTML="9";
			document.getElementById('lut_bon_bas_att').innerHTML="9";
			break;
		case "10" :
			document.getElementById('bba').innerHTML="10";
			document.getElementById('lut_bon_bas_att').innerHTML="10";
			break;
		case "11" :
			document.getElementById('bba').innerHTML="11";
			document.getElementById('lut_bon_bas_att').innerHTML="11";
			break;
		case "12" :
			document.getElementById('bba').innerHTML="12";
			document.getElementById('lut_bon_bas_att').innerHTML="12";
			break;
		case "13" :
			document.getElementById('bba').innerHTML="13";
			document.getElementById('lut_bon_bas_att').innerHTML="13";
			break;
		case "14" :
			document.getElementById('bba').innerHTML="14";
			document.getElementById('lut_bon_bas_att').innerHTML="14";
			break;
		case "15" :
			document.getElementById('bba').innerHTML="15";
			document.getElementById('lut_bon_bas_att').innerHTML="15";
			break;
		case "16" :
			document.getElementById('bba').innerHTML="16";
			document.getElementById('lut_bon_bas_att').innerHTML="16";
			break;
		case "17" :
			document.getElementById('bba').innerHTML="17";
			document.getElementById('lut_bon_bas_att').innerHTML="17";
			break;
		case "18" :
			document.getElementById('bba').innerHTML="18";
			document.getElementById('lut_bon_bas_att').innerHTML="18";
			break;
		case "19" :
			document.getElementById('bba').innerHTML="19";
			document.getElementById('lut_bon_bas_att').innerHTML="19";
			break;
		case "20" :
			document.getElementById('bba').innerHTML="20";
			document.getElementById('lut_bon_bas_att').innerHTML="20";
			break;
	}
};

function toucherCommePretre() {
	switch(document.form.niveau.value) {
		case "00" :
			document.getElementById('bba').innerHTML=" ";
			document.getElementById('lut_bon_bas_att').innerHTML=" ";
			break;
		case "01" :
			document.getElementById('bba').innerHTML="0";
			document.getElementById('lut_bon_bas_att').innerHTML="0";
			break;
		case "02" :
			document.getElementById('bba').innerHTML="1";
			document.getElementById('lut_bon_bas_att').innerHTML="1";
			break;
		case "03" :
			document.getElementById('bba').innerHTML="2";
			document.getElementById('lut_bon_bas_att').innerHTML="2";
			break;
		case "04" :
			document.getElementById('bba').innerHTML="3";
			document.getElementById('lut_bon_bas_att').innerHTML="3";
			break;
		case "05" :
			document.getElementById('bba').innerHTML="3";
			document.getElementById('lut_bon_bas_att').innerHTML="3";
			break;
		case "06" :
			document.getElementById('bba').innerHTML="4";
			document.getElementById('lut_bon_bas_att').innerHTML="4";
			break;
		case "07" :
			document.getElementById('bba').innerHTML="5";
			document.getElementById('lut_bon_bas_att').innerHTML="5";
			break;
		case "08" :
			document.getElementById('bba').innerHTML="6";
			document.getElementById('lut_bon_bas_att').innerHTML="6";
			break;
		case "09" :
			document.getElementById('bba').innerHTML="6";
			document.getElementById('lut_bon_bas_att').innerHTML="6";
			break;
		case "10" :
			document.getElementById('bba').innerHTML="7";
			document.getElementById('lut_bon_bas_att').innerHTML="7";
			break;
		case "11" :
			document.getElementById('bba').innerHTML="8";
			document.getElementById('lut_bon_bas_att').innerHTML="8";
			break;
		case "12" :
			document.getElementById('bba').innerHTML="9";
			document.getElementById('lut_bon_bas_att').innerHTML="9";
			break;
		case "13" :
			document.getElementById('bba').innerHTML="9";
			document.getElementById('lut_bon_bas_att').innerHTML="9";
			break;
		case "14" :
			document.getElementById('bba').innerHTML="10";
			document.getElementById('lut_bon_bas_att').innerHTML="10";
			break;
		case "15" :
			document.getElementById('bba').innerHTML="11";
			document.getElementById('lut_bon_bas_att').innerHTML="11";
			break;
		case "16" :
			document.getElementById('bba').innerHTML="12";
			document.getElementById('lut_bon_bas_att').innerHTML="12";
			break;
		case "17" :
			document.getElementById('bba').innerHTML="12";
			document.getElementById('lut_bon_bas_att').innerHTML="12";
			break;
		case "18" :
			document.getElementById('bba').innerHTML="13";
			document.getElementById('lut_bon_bas_att').innerHTML="13";
			break;
		case "19" :
			document.getElementById('bba').innerHTML="14";
			document.getElementById('lut_bon_bas_att').innerHTML="14";
			break;
		case "20" :
			document.getElementById('bba').innerHTML="15";
			document.getElementById('lut_bon_bas_att').innerHTML="15";
			break;
	}
};

function toucherCommeMagicien() {
	switch(document.form.niveau.value) {
		case "00" :
			document.getElementById('bba').innerHTML=" ";
			document.getElementById('lut_bon_bas_att').innerHTML=" ";
			break;
		case "01" :
			document.getElementById('bba').innerHTML="0";
			document.getElementById('lut_bon_bas_att').innerHTML="0";
			break;
		case "02" :
			document.getElementById('bba').innerHTML="1";
			document.getElementById('lut_bon_bas_att').innerHTML="1";
			break;
		case "03" :
			document.getElementById('bba').innerHTML="1";
			document.getElementById('lut_bon_bas_att').innerHTML="1";
			break;
		case "04" :
			document.getElementById('bba').innerHTML="2";
			document.getElementById('lut_bon_bas_att').innerHTML="2";
			break;
		case "05" :
			document.getElementById('bba').innerHTML="2";
			document.getElementById('lut_bon_bas_att').innerHTML="2";
			break;
		case "06" :
			document.getElementById('bba').innerHTML="3";
			document.getElementById('lut_bon_bas_att').innerHTML="3";
			break;
		case "07" :
			document.getElementById('bba').innerHTML="3";
			document.getElementById('lut_bon_bas_att').innerHTML="3";
			break;
		case "08" :
			document.getElementById('bba').innerHTML="4";
			document.getElementById('lut_bon_bas_att').innerHTML="4";
			break;
		case "09" :
			document.getElementById('bba').innerHTML="4";
			document.getElementById('lut_bon_bas_att').innerHTML="4";
			break;
		case "10" :
			document.getElementById('bba').innerHTML="5";
			document.getElementById('lut_bon_bas_att').innerHTML="5";
			break;
		case "11" :
			document.getElementById('bba').innerHTML="5";
			document.getElementById('lut_bon_bas_att').innerHTML="5";
			break;
		case "12" :
			document.getElementById('bba').innerHTML="6";
			document.getElementById('lut_bon_bas_att').innerHTML="6";
			break;
		case "13" :
			document.getElementById('bba').innerHTML="6";
			document.getElementById('lut_bon_bas_att').innerHTML="6";
			break;
		case "14" :
			document.getElementById('bba').innerHTML="7";
			document.getElementById('lut_bon_bas_att').innerHTML="7";
			break;
		case "15" :
			document.getElementById('bba').innerHTML="7";
			document.getElementById('lut_bon_bas_att').innerHTML="7";
			break;
		case "16" :
			document.getElementById('bba').innerHTML="8";
			document.getElementById('lut_bon_bas_att').innerHTML="8";
			break;
		case "17" :
			document.getElementById('bba').innerHTML="8";
			document.getElementById('lut_bon_bas_att').innerHTML="8";
			break;
		case "18" :
			document.getElementById('bba').innerHTML="9";
			document.getElementById('lut_bon_bas_att').innerHTML="9";
			break;
		case "19" :
			document.getElementById('bba').innerHTML="9";
			document.getElementById('lut_bon_bas_att').innerHTML="9";
			break;
		case "20" :
			document.getElementById('bba').innerHTML="10";
			document.getElementById('lut_bon_bas_att').innerHTML="10";
			break;
	}
};

function sauverCommeGuerrier() {
	switch(document.form.niveau.value) {
		case "00" :
			document.getElementById('sau_bon_bas_ref').innerHTML=" ";
			document.getElementById('sau_bon_bas_vig').innerHTML=" ";
			document.getElementById('sau_bon_bas_vol').innerHTML=" ";
			break;
		case "01" :
			document.getElementById('sau_bon_bas_ref').innerHTML="0";
			document.getElementById('sau_bon_bas_vig').innerHTML="2";
			document.getElementById('sau_bon_bas_vol').innerHTML="0";
			break;
		case "02" :
			document.getElementById('sau_bon_bas_ref').innerHTML="0";
			document.getElementById('sau_bon_bas_vig').innerHTML="3";
			document.getElementById('sau_bon_bas_vol').innerHTML="0";
			break;
		case "03" :
			document.getElementById('sau_bon_bas_ref').innerHTML="1";
			document.getElementById('sau_bon_bas_vig').innerHTML="3";
			document.getElementById('sau_bon_bas_vol').innerHTML="1";
			break;
		case "04" :
			document.getElementById('sau_bon_bas_ref').innerHTML="1";
			document.getElementById('sau_bon_bas_vig').innerHTML="4";
			document.getElementById('sau_bon_bas_vol').innerHTML="1";
			break;
		case "05" :
			document.getElementById('sau_bon_bas_ref').innerHTML="1";
			document.getElementById('sau_bon_bas_vig').innerHTML="4";
			document.getElementById('sau_bon_bas_vol').innerHTML="1";
			break;
		case "06" :
			document.getElementById('sau_bon_bas_ref').innerHTML="2";
			document.getElementById('sau_bon_bas_vig').innerHTML="5";
			document.getElementById('sau_bon_bas_vol').innerHTML="2";
			break;
		case "07" :
			document.getElementById('sau_bon_bas_ref').innerHTML="2";
			document.getElementById('sau_bon_bas_vig').innerHTML="5";
			document.getElementById('sau_bon_bas_vol').innerHTML="2";
			break;
		case "08" :
			document.getElementById('sau_bon_bas_ref').innerHTML="2";
			document.getElementById('sau_bon_bas_vig').innerHTML="6";
			document.getElementById('sau_bon_bas_vol').innerHTML="2";
			break;
		case "09" :
			document.getElementById('sau_bon_bas_ref').innerHTML="3";
			document.getElementById('sau_bon_bas_vig').innerHTML="6";
			document.getElementById('sau_bon_bas_vol').innerHTML="3";
			break;
		case "10" :
			document.getElementById('sau_bon_bas_ref').innerHTML="3";
			document.getElementById('sau_bon_bas_vig').innerHTML="7";
			document.getElementById('sau_bon_bas_vol').innerHTML="3";
			break;
		case "11" :
			document.getElementById('sau_bon_bas_ref').innerHTML="3";
			document.getElementById('sau_bon_bas_vig').innerHTML="7";
			document.getElementById('sau_bon_bas_vol').innerHTML="3";
			break;
		case "12" :
			document.getElementById('sau_bon_bas_ref').innerHTML="4";
			document.getElementById('sau_bon_bas_vig').innerHTML="8";
			document.getElementById('sau_bon_bas_vol').innerHTML="4";
			break;
		case "13" :
			document.getElementById('sau_bon_bas_ref').innerHTML="4";
			document.getElementById('sau_bon_bas_vig').innerHTML="8";
			document.getElementById('sau_bon_bas_vol').innerHTML="4";
			break;
		case "14" :
			document.getElementById('sau_bon_bas_ref').innerHTML="4";
			document.getElementById('sau_bon_bas_vig').innerHTML="9";
			document.getElementById('sau_bon_bas_vol').innerHTML="4";
			break;
		case "15" :
			document.getElementById('sau_bon_bas_ref').innerHTML="5";
			document.getElementById('sau_bon_bas_vig').innerHTML="9";
			document.getElementById('sau_bon_bas_vol').innerHTML="5";
			break;
		case "16" :
			document.getElementById('sau_bon_bas_ref').innerHTML="5";
			document.getElementById('sau_bon_bas_vig').innerHTML="10";
			document.getElementById('sau_bon_bas_vol').innerHTML="5";
			break;
		case "17" :
			document.getElementById('sau_bon_bas_ref').innerHTML="5";
			document.getElementById('sau_bon_bas_vig').innerHTML="10";
			document.getElementById('sau_bon_bas_vol').innerHTML="5";
			break;
		case "18" :
			document.getElementById('sau_bon_bas_ref').innerHTML="6";
			document.getElementById('sau_bon_bas_vig').innerHTML="11";
			document.getElementById('sau_bon_bas_vol').innerHTML="6";
			break;
		case "19" :
			document.getElementById('sau_bon_bas_ref').innerHTML="6";
			document.getElementById('sau_bon_bas_vig').innerHTML="11";
			document.getElementById('sau_bon_bas_vol').innerHTML="6";
			break;
		case "20" :
			document.getElementById('sau_bon_bas_ref').innerHTML="6";
			document.getElementById('sau_bon_bas_vig').innerHTML="12";
			document.getElementById('sau_bon_bas_vol').innerHTML="6";
			break;
	}
};

function sauverCommeRoublard() {
	switch(document.form.niveau.value) {
		case "00" :
			document.getElementById('sau_bon_bas_ref').innerHTML=" ";
			document.getElementById('sau_bon_bas_vig').innerHTML=" ";
			document.getElementById('sau_bon_bas_vol').innerHTML=" ";
			break;
		case "01" :
			document.getElementById('sau_bon_bas_ref').innerHTML="2";
			document.getElementById('sau_bon_bas_vig').innerHTML="0";
			document.getElementById('sau_bon_bas_vol').innerHTML="2";
			break;
		case "02" :
			document.getElementById('sau_bon_bas_ref').innerHTML="3";
			document.getElementById('sau_bon_bas_vig').innerHTML="0";
			document.getElementById('sau_bon_bas_vol').innerHTML="3";
			break;
		case "03" :
			document.getElementById('sau_bon_bas_ref').innerHTML="3";
			document.getElementById('sau_bon_bas_vig').innerHTML="1";
			document.getElementById('sau_bon_bas_vol').innerHTML="3";
			break;
		case "04" :
			document.getElementById('sau_bon_bas_ref').innerHTML="4";
			document.getElementById('sau_bon_bas_vig').innerHTML="1";
			document.getElementById('sau_bon_bas_vol').innerHTML="4";
			break;
		case "05" :
			document.getElementById('sau_bon_bas_ref').innerHTML="4";
			document.getElementById('sau_bon_bas_vig').innerHTML="1";
			document.getElementById('sau_bon_bas_vol').innerHTML="4";
			break;
		case "06" :
			document.getElementById('sau_bon_bas_ref').innerHTML="5";
			document.getElementById('sau_bon_bas_vig').innerHTML="2";
			document.getElementById('sau_bon_bas_vol').innerHTML="5";
			break;
		case "07" :
			document.getElementById('sau_bon_bas_ref').innerHTML="5";
			document.getElementById('sau_bon_bas_vig').innerHTML="2";
			document.getElementById('sau_bon_bas_vol').innerHTML="5";
			break;
		case "08" :
			document.getElementById('sau_bon_bas_ref').innerHTML="6";
			document.getElementById('sau_bon_bas_vig').innerHTML="2";
			document.getElementById('sau_bon_bas_vol').innerHTML="6";
			break;
		case "09" :
			document.getElementById('sau_bon_bas_ref').innerHTML="6";
			document.getElementById('sau_bon_bas_vig').innerHTML="3";
			document.getElementById('sau_bon_bas_vol').innerHTML="6";
			break;
		case "10" :
			document.getElementById('sau_bon_bas_ref').innerHTML="7";
			document.getElementById('sau_bon_bas_vig').innerHTML="3";
			document.getElementById('sau_bon_bas_vol').innerHTML="7";
			break;
		case "11" :
			document.getElementById('sau_bon_bas_ref').innerHTML="7";
			document.getElementById('sau_bon_bas_vig').innerHTML="3";
			document.getElementById('sau_bon_bas_vol').innerHTML="7";
			break;
		case "12" :
			document.getElementById('sau_bon_bas_ref').innerHTML="8";
			document.getElementById('sau_bon_bas_vig').innerHTML="4";
			document.getElementById('sau_bon_bas_vol').innerHTML="8";
			break;
		case "13" :
			document.getElementById('sau_bon_bas_ref').innerHTML="8";
			document.getElementById('sau_bon_bas_vig').innerHTML="4";
			document.getElementById('sau_bon_bas_vol').innerHTML="8";
			break;
		case "14" :
			document.getElementById('sau_bon_bas_ref').innerHTML="9";
			document.getElementById('sau_bon_bas_vig').innerHTML="4";
			document.getElementById('sau_bon_bas_vol').innerHTML="9";
			break;
		case "15" :
			document.getElementById('sau_bon_bas_ref').innerHTML="9";
			document.getElementById('sau_bon_bas_vig').innerHTML="5";
			document.getElementById('sau_bon_bas_vol').innerHTML="9";
			break;
		case "16" :
			document.getElementById('sau_bon_bas_ref').innerHTML="10";
			document.getElementById('sau_bon_bas_vig').innerHTML="5";
			document.getElementById('sau_bon_bas_vol').innerHTML="10";
			break;
		case "17" :
			document.getElementById('sau_bon_bas_ref').innerHTML="10";
			document.getElementById('sau_bon_bas_vig').innerHTML="5";
			document.getElementById('sau_bon_bas_vol').innerHTML="10";
			break;
		case "18" :
			document.getElementById('sau_bon_bas_ref').innerHTML="11";
			document.getElementById('sau_bon_bas_vig').innerHTML="6";
			document.getElementById('sau_bon_bas_vol').innerHTML="11";
			break;
		case "19" :
			document.getElementById('sau_bon_bas_ref').innerHTML="11";
			document.getElementById('sau_bon_bas_vig').innerHTML="6";
			document.getElementById('sau_bon_bas_vol').innerHTML="11";
			break;
		case "20" :
			document.getElementById('sau_bon_bas_ref').innerHTML="12";
			document.getElementById('sau_bon_bas_vig').innerHTML="6";
			document.getElementById('sau_bon_bas_vol').innerHTML="12";
			break;
	}
};

function sauverCommePretre() {
	switch(document.form.niveau.value) {
		case "00" :
			document.getElementById('sau_bon_bas_ref').innerHTML=" ";
			document.getElementById('sau_bon_bas_vig').innerHTML=" ";
			document.getElementById('sau_bon_bas_vol').innerHTML=" ";
			break;
		case "01" :
			document.getElementById('sau_bon_bas_ref').innerHTML="0";
			document.getElementById('sau_bon_bas_vig').innerHTML="2";
			document.getElementById('sau_bon_bas_vol').innerHTML="2";
			break;
		case "02" :
			document.getElementById('sau_bon_bas_ref').innerHTML="0";
			document.getElementById('sau_bon_bas_vig').innerHTML="3";
			document.getElementById('sau_bon_bas_vol').innerHTML="3";
			break;
		case "03" :
			document.getElementById('sau_bon_bas_ref').innerHTML="1";
			document.getElementById('sau_bon_bas_vig').innerHTML="3";
			document.getElementById('sau_bon_bas_vol').innerHTML="3";
			break;
		case "04" :
			document.getElementById('sau_bon_bas_ref').innerHTML="1";
			document.getElementById('sau_bon_bas_vig').innerHTML="4";
			document.getElementById('sau_bon_bas_vol').innerHTML="4";
			break;
		case "05" :
			document.getElementById('sau_bon_bas_ref').innerHTML="1";
			document.getElementById('sau_bon_bas_vig').innerHTML="4";
			document.getElementById('sau_bon_bas_vol').innerHTML="4";
			break;
		case "06" :
			document.getElementById('sau_bon_bas_ref').innerHTML="2";
			document.getElementById('sau_bon_bas_vig').innerHTML="5";
			document.getElementById('sau_bon_bas_vol').innerHTML="5";
			break;
		case "07" :
			document.getElementById('sau_bon_bas_ref').innerHTML="2";
			document.getElementById('sau_bon_bas_vig').innerHTML="5";
			document.getElementById('sau_bon_bas_vol').innerHTML="5";
			break;
		case "08" :
			document.getElementById('sau_bon_bas_ref').innerHTML="2";
			document.getElementById('sau_bon_bas_vig').innerHTML="6";
			document.getElementById('sau_bon_bas_vol').innerHTML="6";
			break;
		case "09" :
			document.getElementById('sau_bon_bas_ref').innerHTML="3";
			document.getElementById('sau_bon_bas_vig').innerHTML="6";
			document.getElementById('sau_bon_bas_vol').innerHTML="6";
			break;
		case "10" :
			document.getElementById('sau_bon_bas_ref').innerHTML="3";
			document.getElementById('sau_bon_bas_vig').innerHTML="7";
			document.getElementById('sau_bon_bas_vol').innerHTML="7";
			break;
		case "11" :
			document.getElementById('sau_bon_bas_ref').innerHTML="3";
			document.getElementById('sau_bon_bas_vig').innerHTML="7";
			document.getElementById('sau_bon_bas_vol').innerHTML="7";
			break;
		case "12" :
			document.getElementById('sau_bon_bas_ref').innerHTML="4";
			document.getElementById('sau_bon_bas_vig').innerHTML="8";
			document.getElementById('sau_bon_bas_vol').innerHTML="8";
			break;
		case "13" :
			document.getElementById('sau_bon_bas_ref').innerHTML="4";
			document.getElementById('sau_bon_bas_vig').innerHTML="8";
			document.getElementById('sau_bon_bas_vol').innerHTML="8";
			break;
		case "14" :
			document.getElementById('sau_bon_bas_ref').innerHTML="4";
			document.getElementById('sau_bon_bas_vig').innerHTML="9";
			document.getElementById('sau_bon_bas_vol').innerHTML="9";
			break;
		case "15" :
			document.getElementById('sau_bon_bas_ref').innerHTML="5";
			document.getElementById('sau_bon_bas_vig').innerHTML="9";
			document.getElementById('sau_bon_bas_vol').innerHTML="9";
			break;
		case "16" :
			document.getElementById('sau_bon_bas_ref').innerHTML="5";
			document.getElementById('sau_bon_bas_vig').innerHTML="10";
			document.getElementById('sau_bon_bas_vol').innerHTML="10";
			break;
		case "17" :
			document.getElementById('sau_bon_bas_ref').innerHTML="5";
			document.getElementById('sau_bon_bas_vig').innerHTML="10";
			document.getElementById('sau_bon_bas_vol').innerHTML="10";
			break;
		case "18" :
			document.getElementById('sau_bon_bas_ref').innerHTML="6";
			document.getElementById('sau_bon_bas_vig').innerHTML="11";
			document.getElementById('sau_bon_bas_vol').innerHTML="11";
			break;
		case "19" :
			document.getElementById('sau_bon_bas_ref').innerHTML="6";
			document.getElementById('sau_bon_bas_vig').innerHTML="11";
			document.getElementById('sau_bon_bas_vol').innerHTML="11";
			break;
		case "20" :
			document.getElementById('sau_bon_bas_ref').innerHTML="6";
			document.getElementById('sau_bon_bas_vig').innerHTML="12";
			document.getElementById('sau_bon_bas_vol').innerHTML="12";
			break;
	}
};

function sauverCommeMagicien() {
	switch(document.form.niveau.value) {
		case "00" :
			document.getElementById('sau_bon_bas_ref').innerHTML=" ";
			document.getElementById('sau_bon_bas_vig').innerHTML=" ";
			document.getElementById('sau_bon_bas_vol').innerHTML=" ";
			break;
		case "01" :
			document.getElementById('sau_bon_bas_ref').innerHTML="0";
			document.getElementById('sau_bon_bas_vig').innerHTML="0";
			document.getElementById('sau_bon_bas_vol').innerHTML="2";
			break;
		case "02" :
			document.getElementById('sau_bon_bas_ref').innerHTML="0";
			document.getElementById('sau_bon_bas_vig').innerHTML="0";
			document.getElementById('sau_bon_bas_vol').innerHTML="3";
			break;
		case "03" :
			document.getElementById('sau_bon_bas_ref').innerHTML="1";
			document.getElementById('sau_bon_bas_vig').innerHTML="1";
			document.getElementById('sau_bon_bas_vol').innerHTML="3";
			break;
		case "04" :
			document.getElementById('sau_bon_bas_ref').innerHTML="1";
			document.getElementById('sau_bon_bas_vig').innerHTML="1";
			document.getElementById('sau_bon_bas_vol').innerHTML="4";
			break;
		case "05" :
			document.getElementById('sau_bon_bas_ref').innerHTML="1";
			document.getElementById('sau_bon_bas_vig').innerHTML="1";
			document.getElementById('sau_bon_bas_vol').innerHTML="4";
			break;
		case "06" :
			document.getElementById('sau_bon_bas_ref').innerHTML="2";
			document.getElementById('sau_bon_bas_vig').innerHTML="2";
			document.getElementById('sau_bon_bas_vol').innerHTML="5";
			break;
		case "07" :
			document.getElementById('sau_bon_bas_ref').innerHTML="2";
			document.getElementById('sau_bon_bas_vig').innerHTML="2";
			document.getElementById('sau_bon_bas_vol').innerHTML="5";
			break;
		case "08" :
			document.getElementById('sau_bon_bas_ref').innerHTML="2";
			document.getElementById('sau_bon_bas_vig').innerHTML="2";
			document.getElementById('sau_bon_bas_vol').innerHTML="6";
			break;
		case "09" :
			document.getElementById('sau_bon_bas_ref').innerHTML="3";
			document.getElementById('sau_bon_bas_vig').innerHTML="3";
			document.getElementById('sau_bon_bas_vol').innerHTML="6";
			break;
		case "10" :
			document.getElementById('sau_bon_bas_ref').innerHTML="3";
			document.getElementById('sau_bon_bas_vig').innerHTML="3";
			document.getElementById('sau_bon_bas_vol').innerHTML="7";
			break;
		case "11" :
			document.getElementById('sau_bon_bas_ref').innerHTML="3";
			document.getElementById('sau_bon_bas_vig').innerHTML="3";
			document.getElementById('sau_bon_bas_vol').innerHTML="7";
			break;
		case "12" :
			document.getElementById('sau_bon_bas_ref').innerHTML="4";
			document.getElementById('sau_bon_bas_vig').innerHTML="4";
			document.getElementById('sau_bon_bas_vol').innerHTML="8";
			break;
		case "13" :
			document.getElementById('sau_bon_bas_ref').innerHTML="4";
			document.getElementById('sau_bon_bas_vig').innerHTML="4";
			document.getElementById('sau_bon_bas_vol').innerHTML="8";
			break;
		case "14" :
			document.getElementById('sau_bon_bas_ref').innerHTML="4";
			document.getElementById('sau_bon_bas_vig').innerHTML="4";
			document.getElementById('sau_bon_bas_vol').innerHTML="9";
			break;
		case "15" :
			document.getElementById('sau_bon_bas_ref').innerHTML="5";
			document.getElementById('sau_bon_bas_vig').innerHTML="5";
			document.getElementById('sau_bon_bas_vol').innerHTML="9";
			break;
		case "16" :
			document.getElementById('sau_bon_bas_ref').innerHTML="5";
			document.getElementById('sau_bon_bas_vig').innerHTML="5";
			document.getElementById('sau_bon_bas_vol').innerHTML="10";
			break;
		case "17" :
			document.getElementById('sau_bon_bas_ref').innerHTML="5";
			document.getElementById('sau_bon_bas_vig').innerHTML="5";
			document.getElementById('sau_bon_bas_vol').innerHTML="10";
			break;
		case "18" :
			document.getElementById('sau_bon_bas_ref').innerHTML="6";
			document.getElementById('sau_bon_bas_vig').innerHTML="6";
			document.getElementById('sau_bon_bas_vol').innerHTML="11";
			break;
		case "19" :
			document.getElementById('sau_bon_bas_ref').innerHTML="6";
			document.getElementById('sau_bon_bas_vig').innerHTML="6";
			document.getElementById('sau_bon_bas_vol').innerHTML="11";
			break;
		case "20" :
			document.getElementById('sau_bon_bas_ref').innerHTML="6";
			document.getElementById('sau_bon_bas_vig').innerHTML="6";
			document.getElementById('sau_bon_bas_vol').innerHTML="12";
			break;
	}
};

function sauverCommeMoine() {
	switch(document.form.niveau.value) {
		case "00" :
			document.getElementById('sau_bon_bas_ref').innerHTML=" ";
			document.getElementById('sau_bon_bas_vig').innerHTML=" ";
			document.getElementById('sau_bon_bas_vol').innerHTML=" ";
			break;
		case "01" :
			document.getElementById('sau_bon_bas_ref').innerHTML="2";
			document.getElementById('sau_bon_bas_vig').innerHTML="2";
			document.getElementById('sau_bon_bas_vol').innerHTML="2";
			break;
		case "02" :
			document.getElementById('sau_bon_bas_ref').innerHTML="3";
			document.getElementById('sau_bon_bas_vig').innerHTML="3";
			document.getElementById('sau_bon_bas_vol').innerHTML="3";
			break;
		case "03" :
			document.getElementById('sau_bon_bas_ref').innerHTML="3";
			document.getElementById('sau_bon_bas_vig').innerHTML="3";
			document.getElementById('sau_bon_bas_vol').innerHTML="3";
			break;
		case "04" :
			document.getElementById('sau_bon_bas_ref').innerHTML="4";
			document.getElementById('sau_bon_bas_vig').innerHTML="4";
			document.getElementById('sau_bon_bas_vol').innerHTML="4";
			break;
		case "05" :
			document.getElementById('sau_bon_bas_ref').innerHTML="4";
			document.getElementById('sau_bon_bas_vig').innerHTML="4";
			document.getElementById('sau_bon_bas_vol').innerHTML="4";
			break;
		case "06" :
			document.getElementById('sau_bon_bas_ref').innerHTML="5";
			document.getElementById('sau_bon_bas_vig').innerHTML="5";
			document.getElementById('sau_bon_bas_vol').innerHTML="5";
			break;
		case "07" :
			document.getElementById('sau_bon_bas_ref').innerHTML="5";
			document.getElementById('sau_bon_bas_vig').innerHTML="5";
			document.getElementById('sau_bon_bas_vol').innerHTML="5";
			break;
		case "08" :
			document.getElementById('sau_bon_bas_ref').innerHTML="6";
			document.getElementById('sau_bon_bas_vig').innerHTML="6";
			document.getElementById('sau_bon_bas_vol').innerHTML="6";
			break;
		case "09" :
			document.getElementById('sau_bon_bas_ref').innerHTML="6";
			document.getElementById('sau_bon_bas_vig').innerHTML="6";
			document.getElementById('sau_bon_bas_vol').innerHTML="6";
			break;
		case "10" :
			document.getElementById('sau_bon_bas_ref').innerHTML="7";
			document.getElementById('sau_bon_bas_vig').innerHTML="7";
			document.getElementById('sau_bon_bas_vol').innerHTML="7";
			break;
		case "11" :
			document.getElementById('sau_bon_bas_ref').innerHTML="7";
			document.getElementById('sau_bon_bas_vig').innerHTML="7";
			document.getElementById('sau_bon_bas_vol').innerHTML="7";
			break;
		case "12" :
			document.getElementById('sau_bon_bas_ref').innerHTML="8";
			document.getElementById('sau_bon_bas_vig').innerHTML="8";
			document.getElementById('sau_bon_bas_vol').innerHTML="8";
			break;
		case "13" :
			document.getElementById('sau_bon_bas_ref').innerHTML="8";
			document.getElementById('sau_bon_bas_vig').innerHTML="8";
			document.getElementById('sau_bon_bas_vol').innerHTML="8";
			break;
		case "14" :
			document.getElementById('sau_bon_bas_ref').innerHTML="9";
			document.getElementById('sau_bon_bas_vig').innerHTML="9";
			document.getElementById('sau_bon_bas_vol').innerHTML="9";
			break;
		case "15" :
			document.getElementById('sau_bon_bas_ref').innerHTML="9";
			document.getElementById('sau_bon_bas_vig').innerHTML="9";
			document.getElementById('sau_bon_bas_vol').innerHTML="9";
			break;
		case "16" :
			document.getElementById('sau_bon_bas_ref').innerHTML="10";
			document.getElementById('sau_bon_bas_vig').innerHTML="10";
			document.getElementById('sau_bon_bas_vol').innerHTML="10";
			break;
		case "17" :
			document.getElementById('sau_bon_bas_ref').innerHTML="10";
			document.getElementById('sau_bon_bas_vig').innerHTML="10";
			document.getElementById('sau_bon_bas_vol').innerHTML="10";
			break;
		case "18" :
			document.getElementById('sau_bon_bas_ref').innerHTML="11";
			document.getElementById('sau_bon_bas_vig').innerHTML="11";
			document.getElementById('sau_bon_bas_vol').innerHTML="11";
			break;
		case "19" :
			document.getElementById('sau_bon_bas_ref').innerHTML="11";
			document.getElementById('sau_bon_bas_vig').innerHTML="11";
			document.getElementById('sau_bon_bas_vol').innerHTML="11";
			break;
		case "20" :
			document.getElementById('sau_bon_bas_ref').innerHTML="12";
			document.getElementById('sau_bon_bas_vig').innerHTML="12";
			document.getElementById('sau_bon_bas_vol').innerHTML="12";
			break;
	}
};

function sauverCommeRodeur() {
	switch(document.form.niveau.value) {
		case "00" :
			document.getElementById('sau_bon_bas_ref').innerHTML=" ";
			document.getElementById('sau_bon_bas_vig').innerHTML=" ";
			document.getElementById('sau_bon_bas_vol').innerHTML=" ";
			break;
		case "01" :
			document.getElementById('sau_bon_bas_ref').innerHTML="2";
			document.getElementById('sau_bon_bas_vig').innerHTML="2";
			document.getElementById('sau_bon_bas_vol').innerHTML="0";
			break;
		case "02" :
			document.getElementById('sau_bon_bas_ref').innerHTML="3";
			document.getElementById('sau_bon_bas_vig').innerHTML="3";
			document.getElementById('sau_bon_bas_vol').innerHTML="0";
			break;
		case "03" :
			document.getElementById('sau_bon_bas_ref').innerHTML="3";
			document.getElementById('sau_bon_bas_vig').innerHTML="3";
			document.getElementById('sau_bon_bas_vol').innerHTML="1";
			break;
		case "04" :
			document.getElementById('sau_bon_bas_ref').innerHTML="4";
			document.getElementById('sau_bon_bas_vig').innerHTML="4";
			document.getElementById('sau_bon_bas_vol').innerHTML="1";
			break;
		case "05" :
			document.getElementById('sau_bon_bas_ref').innerHTML="4";
			document.getElementById('sau_bon_bas_vig').innerHTML="4";
			document.getElementById('sau_bon_bas_vol').innerHTML="1";
			break;
		case "06" :
			document.getElementById('sau_bon_bas_ref').innerHTML="5";
			document.getElementById('sau_bon_bas_vig').innerHTML="5";
			document.getElementById('sau_bon_bas_vol').innerHTML="2";
			break;
		case "07" :
			document.getElementById('sau_bon_bas_ref').innerHTML="5";
			document.getElementById('sau_bon_bas_vig').innerHTML="5";
			document.getElementById('sau_bon_bas_vol').innerHTML="2";
			break;
		case "08" :
			document.getElementById('sau_bon_bas_ref').innerHTML="6";
			document.getElementById('sau_bon_bas_vig').innerHTML="6";
			document.getElementById('sau_bon_bas_vol').innerHTML="2";
			break;
		case "09" :
			document.getElementById('sau_bon_bas_ref').innerHTML="6";
			document.getElementById('sau_bon_bas_vig').innerHTML="6";
			document.getElementById('sau_bon_bas_vol').innerHTML="3";
			break;
		case "10" :
			document.getElementById('sau_bon_bas_ref').innerHTML="7";
			document.getElementById('sau_bon_bas_vig').innerHTML="7";
			document.getElementById('sau_bon_bas_vol').innerHTML="3";
			break;
		case "11" :
			document.getElementById('sau_bon_bas_ref').innerHTML="7";
			document.getElementById('sau_bon_bas_vig').innerHTML="7";
			document.getElementById('sau_bon_bas_vol').innerHTML="3";
			break;
		case "12" :
			document.getElementById('sau_bon_bas_ref').innerHTML="8";
			document.getElementById('sau_bon_bas_vig').innerHTML="8";
			document.getElementById('sau_bon_bas_vol').innerHTML="4";
			break;
		case "13" :
			document.getElementById('sau_bon_bas_ref').innerHTML="8";
			document.getElementById('sau_bon_bas_vig').innerHTML="8";
			document.getElementById('sau_bon_bas_vol').innerHTML="4";
			break;
		case "14" :
			document.getElementById('sau_bon_bas_ref').innerHTML="9";
			document.getElementById('sau_bon_bas_vig').innerHTML="9";
			document.getElementById('sau_bon_bas_vol').innerHTML="4";
			break;
		case "15" :
			document.getElementById('sau_bon_bas_ref').innerHTML="9";
			document.getElementById('sau_bon_bas_vig').innerHTML="9";
			document.getElementById('sau_bon_bas_vol').innerHTML="5";
			break;
		case "16" :
			document.getElementById('sau_bon_bas_ref').innerHTML="10";
			document.getElementById('sau_bon_bas_vig').innerHTML="10";
			document.getElementById('sau_bon_bas_vol').innerHTML="5";
			break;
		case "17" :
			document.getElementById('sau_bon_bas_ref').innerHTML="10";
			document.getElementById('sau_bon_bas_vig').innerHTML="10";
			document.getElementById('sau_bon_bas_vol').innerHTML="5";
			break;
		case "18" :
			document.getElementById('sau_bon_bas_ref').innerHTML="11";
			document.getElementById('sau_bon_bas_vig').innerHTML="11";
			document.getElementById('sau_bon_bas_vol').innerHTML="6";
			break;
		case "19" :
			document.getElementById('sau_bon_bas_ref').innerHTML="11";
			document.getElementById('sau_bon_bas_vig').innerHTML="11";
			document.getElementById('sau_bon_bas_vol').innerHTML="6";
			break;
		case "20" :
			document.getElementById('sau_bon_bas_ref').innerHTML="12";
			document.getElementById('sau_bon_bas_vig').innerHTML="12";
			document.getElementById('sau_bon_bas_vol').innerHTML="6";
			break;
	}
};

function influenceNiveau() {
    document.getElementById('ide').innerHTML = parseInt(document.form.niveau.value) + 3;
    document.getElementById('hide').innerHTML = (parseInt(document.form.niveau.value) + 3) / 2;

	switch(document.form.classe.value) {
		case " " :
			document.getElementById('sau_bon_bas_ref').innerHTML="0";
			document.getElementById('sau_bon_bas_vig').innerHTML="0";
			document.getElementById('sau_bon_bas_vol').innerHTML="0";
			document.getElementById('bba').innerHTML="0";
			document.getElementById('lut_bon_bas_att').innerHTML="0";
			break;
		case "Barbare" :
			toucherCommeGuerrier();
			sauverCommeGuerrier();
			reductionDegats();
			calculeReflexes();
			calculeVigeur();
			calculeVolonte();
			calculeLutte();
            competenceClasseBarbare();
			break;
		case "Barde" :
			toucherCommePretre();
			sauverCommeRoublard();
			calculeReflexes();
			calculeVigeur();
			calculeVolonte();
			calculeLutte();
            competenceClasseBarde()
			break;
		case "Druide" :
			toucherCommePretre();
			sauverCommePretre();
			calculeReflexes();
			calculeVigeur();
			calculeVolonte();
			calculeLutte();
            competenceClasseDruide()
			break;
		case "Ensorceleur" :
			toucherCommeMagicien();
			sauverCommeMagicien();
			calculeReflexes();
			calculeVigeur();
			calculeVolonte();
			calculeLutte();
            competenceClasseEnsorceleur()
			break;
		case "Guerrier" :
			toucherCommeGuerrier();
			sauverCommeGuerrier();
			calculeReflexes();
			calculeVigeur();
			calculeVolonte();
			calculeLutte();
            competenceClasseGuerrier()
			break;
		case "Magicien" :
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
		case "Moine" :
			toucherCommePretre();
			sauverCommeMoine();
			calculeReflexes();
			calculeVigeur();
			calculeVolonte();
			calculeLutte();
            competenceClasseMoine()
			break;
		case "Paladin" :
			toucherCommeGuerrier();
			sauverCommeGuerrier();
			calculeReflexes();
			calculeVigeur();
			calculeVolonte();
			calculeLutte();
            competenceClassePaladin()
			break;
		case "Prêtre" :
			toucherCommePretre();
			sauverCommePretre();
			calculeReflexes();
			calculeVigeur();
			calculeVolonte();
			calculeLutte();
            competenceClassePrêtre()
			break;
		case "Rôdeur" :
			toucherCommeGuerrier();
			sauverCommeRodeur();
			calculeReflexes();
			calculeVigeur();
			calculeVolonte();
			calculeLutte();
            competenceClasseRodeur()
			break;
		case "Roublard" :
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

    competenceDeClasse = ["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23"];
 
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
    switch(document.getElementById(competenceI).innerHTML) {
        case "<h2>X</h2>" :
            for (var nombElement = 0; nombElement < (parseInt(document.getElementById('ide').innerHTML) + 1); nombElement++) {
                competenceII.options[nombElement] = new Option(competenceDeClasse[nombElement],competenceDeClasse[nombElement]);
            };
            break;
        case "<h2>O</h2>" :
            for (var nombElement = 0; nombElement < (parseInt(document.getElementById('hide').innerHTML) + 1); nombElement++) {
                competenceII.options[nombElement] = new Option(competenceDeClasse[nombElement],competenceDeClasse[nombElement]);
            };
            break;
    };
}

function affichagePointsExperience(valeur) {
    switch(valeur) {
        case "00" :
            document.getElementById('prochain_niveau').innerHTML = "0";
            break;
        case "00" :
            document.getElementById('prochain_niveau').innerHTML = "0";
            break;
        case "01" :
            document.getElementById('prochain_niveau').innerHTML = "1 000";
            break;
        case "02" :
            document.getElementById('prochain_niveau').innerHTML = "3 000";
            break;
        case "03" :
            document.getElementById('prochain_niveau').innerHTML = "6 000";
            break;
        case "04" :
            document.getElementById('prochain_niveau').innerHTML = "10 000";
            break;
        case "05" :
            document.getElementById('prochain_niveau').innerHTML = "15 000";
            break;
        case "06" :
            document.getElementById('prochain_niveau').innerHTML = "21 000";
            break;
        case "07" :
            document.getElementById('prochain_niveau').innerHTML = "28 000";
            break;
        case "08" :
            document.getElementById('prochain_niveau').innerHTML = "36 000";
            break;
        case "09" :
            document.getElementById('prochain_niveau').innerHTML = "45 000";
            break;
        case "10" :
            document.getElementById('prochain_niveau').innerHTML = "55 000";
            break;
        case "11" :
            document.getElementById('prochain_niveau').innerHTML = "66 000";
            break;
        case "12" :
            document.getElementById('prochain_niveau').innerHTML = "78 000";
            break;
        case "13" :
            document.getElementById('prochain_niveau').innerHTML = "91 000";
            break;
        case "14" :
            document.getElementById('prochain_niveau').innerHTML = "105 000";
            break;
        case "15" :
            document.getElementById('prochain_niveau').innerHTML = "120 000";
            break;
        case "16" :
            document.getElementById('prochain_niveau').innerHTML = "136 000";
            break;
        case "17" :
            document.getElementById('prochain_niveau').innerHTML = "153 000";
            break;
        case "18" :
            document.getElementById('prochain_niveau').innerHTML = "171 000";
            break;
        case "19" :
            document.getElementById('prochain_niveau').innerHTML = "190 000";
            break;
    }
};

function influenceRace() {
    document.getElementById('vit').innerHTML = "9m";
    document.form.for_val.value = 0;
    document.form.dex_val.value = 0;
    document.form.con_val.value = 0;
    document.form.int_val.value = 0;
    document.form.sag_val.value = 0;
    document.form.cha_val.value = 0;

	switch(document.form.race.value) {
		case "Humain" :
            document.getElementById('traits_I').innerHTML = "1 don supplémentaire au niveau 1.";
            document.getElementById('traits_II').innerHTML = "4 points de compétence supplémentaires au niveau 1";
            document.getElementById('traits_III').innerHTML = "_et 1 point de compétence supplémentaire à chaque niveau par la suite.";
            document.getElementById('traits_IV').innerHTML = "Langues : commun et au choix.";
			break;
		case "Demi-elfe" :
            document.getElementById('totalCompetenceDétection').innerHTML = 1;
            document.form.détection_divers.value = +1;
            document.getElementById('totalCompetenceFouille').innerHTML = 1;
            document.form.fouille_divers.value = +1;
            document.getElementById('totalCompetencePerception_auditive').innerHTML = 1;
            document.form.perception_auditive_divers.value = +1;
            document.getElementById('totalCompetenceDiplomatie').innerHTML = 2;
            document.form.diplomatie_divers.value = +2;
            document.getElementById('totalCompetenceRenseignements').innerHTML = 2;
            document.form.renseignements_divers.value = +2;

            document.getElementById('traits_I').innerHTML = "Immunité contre les sorts et effets magiques de type sommeil,";
            document.getElementById('traits_II').innerHTML = "_bonus de +2 contre les sorts d'enchantements.";
            document.getElementById('traits_III').innerHTML = "Les demi-elfes voient deux fois plus loin que les humains";
            document.getElementById('traits_IV').innerHTML = "_dans des conditions de faible éclairages.";
            document.getElementById('traits_V').innerHTML = "+1 aux tests de détection, fouille et perception auditive.";
            document.getElementById('traits_VI').innerHTML = "+2 aux tests de diplomatie et de renseignements.";
            document.getElementById('traits_VII').innerHTML = "Ils sont considérés comme des elfes à part entière ";
            document.getElementById('traits_VIII').innerHTML = "_pour tous les effets dépendant de la race.";
            document.getElementById('traits_IX').innerHTML = "Langues d'offices : commun et elfe.";

			break;
		case "Demi-orque" :
			document.form.for_val.value = +2;
			document.form.int_val.value = -2;
			document.form.cha_val.value = -2;

            document.getElementById('traits_I').innerHTML = "Orque et demi-orque voient à 18 mètres dans le noir le plus complet.";
            document.getElementById('traits_II').innerHTML = "Ils sont considérés comme des orques à part entière ";
            document.getElementById('traits_III').innerHTML = "_pour tous les effets dépendant de la race.";
            document.getElementById('traits_IV').innerHTML = "Langues d'offices : commun et orque.";
            document.getElementById('traits_V').innerHTML = "Langues supplémentaires : abyssale, draconien, géant, gnoll, et gobelin.";
            document.getElementById('traits_VI').innerHTML = "Classe de prédilection : barbare.";

			break;
		case "Elfe" :
            document.getElementById('totalCompetenceDétection').innerHTML = 2;
            document.form.détection_divers.value = +2;
            document.getElementById('totalCompetenceFouille').innerHTML = 2;
            document.form.fouille_divers.value = +2;
            document.getElementById('totalCompetencePerception_auditive').innerHTML = 2;
            document.form.perception_auditive_divers.value = +2;
     		document.form.dex_val.value = +2;
			document.form.con_val.value = -2;

            document.getElementById('traits_I').innerHTML = "Immunité contre les sorts et effets magiques de type sommeil,";
            document.getElementById('traits_II').innerHTML = "_bonus de +2 contre les sorts d'enchantements.";
            document.getElementById('traits_III').innerHTML = "Les elfes voient deux fois plus loin que les humains";
            document.getElementById('traits_IV').innerHTML = "_dans des conditions de faible éclairages.";
            document.getElementById('traits_V').innerHTML = "Tous les elfes possèdent le don maniement d'une arme de guerre";
            document.getElementById('traits_VI').innerHTML = "_pour l'épée longue, la rapière et les arcs.";
            document.getElementById('traits_VII').innerHTML = "+2 aux tests de détection, fouille et perception auditive.";
            document.getElementById('traits_VIII').innerHTML = "Test de fouille lorsqu'ils passent à moins de 1,5m d'un passage secret.";
            document.getElementById('traits_IX').innerHTML = "Langues d'offices : commun et elfe.";
            document.getElementById('traits_X').innerHTML = "Langues supplémentaires : draconien, goll, gnome, gobelin, orque et sylveste.";
            document.getElementById('traits_XI').innerHTML = "Classe de prédilection : magicien.";

			break;
		case "Gnome" :
            document.getElementById('totalCompetencePerception_auditive').innerHTML = 2;
            document.form.perception_auditive_divers.value = +2;
			document.getElementById('vit').innerHTML = "6m";
			document.form.for_val.value = -2;
			document.form.con_val.value = +2;

            document.getElementById('traits_I').innerHTML = "Les gnomes voient deux fois plus loin que les humains";
            document.getElementById('traits_II').innerHTML = "_dans des conditions de faible éclairages.";
            document.getElementById('traits_III').innerHTML = "Pour les gnomes le marteau-piolet est une arme de guerre.";
            document.getElementById('traits_IV').innerHTML = "+2 aux jets des sauvegarde contre les illusions.";
            document.getElementById('traits_V').innerHTML = "+1 au DD de jet des sauvergade contre tous les sorts de l'école des illusions.";
            document.getElementById('traits_VI').innerHTML = "+1 aux jets d'attaque contre les kobolds et les goblinoïdes.";
            document.getElementById('traits_VII').innerHTML = "+4 en esquive contre les créatures appartenant au type géant.";
            document.getElementById('traits_VIII').innerHTML = "+2 aux tests de perception auditive.";
            document.getElementById('traits_IX').innerHTML = "+2 aux tests de d'alchimie.";
            document.getElementById('traits_X').innerHTML = "Langues d'offices : commun et gnome.";
            document.getElementById('traits_XI').innerHTML = "Langues supplémentaires : draconien, elfe, géant, gobelin, orque, nain";
            document.getElementById('traits_XII').innerHTML = "_et orque.";
            document.getElementById('traits_XIII').innerHTML = "Communication avec les animaux fouisseurs une fois par jour.";
            document.getElementById('traits_XIV').innerHTML = "Les gnomes ayant au moins 10 en charisme peuvent lancer lumière dansantes,";
            document.getElementById('traits_XV').innerHTML = "_presdigitation et son imaginaire 1 fois par jour.";
            document.getElementById('traits_XVI').innerHTML = "Classe de prédilection : barde.";

			break;
		case "Halfelin" :
            document.getElementById('totalCompetenceDéplacement_silencieux').innerHTML = 2;
            document.form.déplacement_silencieux_divers.value = +2;
            document.getElementById('totalCompetenceEscalade').innerHTML = 2;
            document.form.escalade_divers.value = +2;
            document.getElementById('totalCompetenceSaut').innerHTML = 2;
            document.form.saut_divers.value = +2;
            document.getElementById('totalCompetencePerception_auditive').innerHTML = 2;
            document.form.perception_auditive_divers.value = +2;
			document.getElementById('vit').innerHTML = "6m";
			document.form.for_val.value = -2;
			document.form.dex_val.value = +2;

            document.getElementById('traits_I').innerHTML = "+2 aux tests de déplacement silencieux, escalade et sauts.";
            document.getElementById('traits_II').innerHTML = "+1 à tous les jets de sauvegarde.";
            document.getElementById('traits_III').innerHTML = "+2 aux jets de sauvegarde contre la terreur.";
            document.getElementById('traits_IV').innerHTML = "+1 aux jets d'attaque avec les armes de jets et fronde.";
            document.getElementById('traits_V').innerHTML = "+2 aux tests de perception auditive.";
            document.getElementById('traits_VI').innerHTML = "Langues d'offices : commun et halfelin.";
            document.getElementById('traits_VII').innerHTML = "Langues supplémentaires : elfe, gnome, gobelin, nain  et orque";
            document.getElementById('traits_VIII').innerHTML = "Classe de prédilection : roublard.";

			break;
		case "Nain" :
			document.getElementById('vit').innerHTML = "6m";
			document.form.con_val.value = +2;
			document.form.cha_val.value = -2;

            document.getElementById('traits_I').innerHTML = "Les nains voient à 18 mètres dans le noir le plus complet.";
            document.getElementById('traits_II').innerHTML = "+2 aux tests de fouille visant à remarquer si la roche a été travaillée.";
            document.getElementById('traits_III').innerHTML = "Test de fouille lorsqu'ils passent à moins de 3m d'une roche travaillée.";
            document.getElementById('traits_IV').innerHTML = "Pour les nains la hache de guerre naine et l'urgrosh sont des armes de guerre.";
            document.getElementById('traits_V').innerHTML = "+4 pour résister aux bousculade et au croc-en-jambe.";
            document.getElementById('traits_VI').innerHTML = "+2 au jet de sauvgarde contre le poison.";
            document.getElementById('traits_VII').innerHTML = "+2 aux jets de sauvegarde contre tous les sorts et effets imitant des sorts";
            document.getElementById('traits_VIII').innerHTML = "+1 aux jets d'attaque contre les orques et les goblinoïdes.";
            document.getElementById('traits_IX').innerHTML = "+4 en esquive contre les créatures appartenant au type géant.";
            document.getElementById('traits_X').innerHTML = "+2 en estimation sur les objets en métal ou en pierre.";
            document.getElementById('traits_XI').innerHTML = "+2 en artisanat lié au métal et à la pierre.";
            document.getElementById('traits_XII').innerHTML = "Langues d'offices : commun et nain.";
            document.getElementById('traits_XIII').innerHTML = "Langues supplémentaires : commun des profondeur, géant, gnome, gobelin,";
            document.getElementById('traits_XIV').innerHTML = "_orque et terreux.";
            document.getElementById('traits_XV').innerHTML = "Classe de prédilection : guerrier.";

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

	HumainTM = ["1,50 m","1.55 m","1,60 m","1,65 m","1,70 m","1,75 m","1,80 m","1,85 m","1,90 m","1,95 m","2 m"];
    HumainTF = ["1,35 m","1,40 m","1,45 m","1,50 m","1,50 m","1,50 m","1,55 m","1,60 m","1,65 m","1,70 m","1,75 m"];
    Demi_elfeTM = ["1,40 m","1,44 m","1,52 m","1,56 m","1,60 m","1,64 m","1,68 m","1,72 m","1,76 m","1,80 m","1,84 m"];
    Demi_elfeTF = ["1,35 m","1,39 m","1,43 m","1,47 m","1,51 m","1,55 m","1,59 m","1,63 m","1,67 m","1,71 m","1,75 m"];
    Demi_orqueTM = ["1,50 m","1,56 m","1,62 m","1,68 m","1,74 m","1,80 m","1,86 m","1,92 m","1,98 m","2,04 m","2,10 m"];
    Demi_orqueTF = ["1,35 m","1,41 m","1,47 m","1,53 m","1,59 m","1,65 m","1,71 m","1,77 m","1,83 m","1,89 m","1,95 m"];
    ElfeTM = ["1,35 m","1,38 m","1,41 m","1,44 m","1,47 m","1,50 m","1,53 m","1,56 m","1,59 m","1,62 m","1,65 m"];
    ElfeTF = ["1,35 m","1,38 m","1,41 m","1,44 m","1,47 m","1,50 m","1,53 m","1,56 m","1,59 m","1,62 m","1,65 m"];
    GnomeTM = ["0,90 m","0,92 m","0,94 m","0,96 m","0,98 m","1,00 m","1,02 m","1,04 m","1,06 m","1,08 m","1,10 m"];
    GnomeTF = ["0,85 m","0,92 m","0,94 m","0,96 m","0,98 m","1,00 m","1,02 m","1,04 m","1,06 m","1,08 m","1,10 m"];
    HalfelinTM = ["0,80 m","0,82 m","0,84 m","0,86 m","0,88 m","0,90 m","0,92 m","0,94 m","0,96 m","0,98 m","1,00 m"];
    HalfelinTF = ["0,75 m","0,77 m","0,79 m","0,81 m","0,83 m","0,85 m","0,87 m","0,89 m","0,91 m","0,93 m","0,95 m"];
    NainTM = ["1,15 m","1,17 m","1,19 m","1,21 m","1,23 m","1,25 m","1,27 m","1,29 m","1,31 m","1,33 m","1,35 m"];
    NainTF = ["1,10 m","1,12 m","1,14 m","1,16 m","1,18 m","1,20 m","1,22 m","1,24 m","1,26 m","1,28 m","1,30 m"];
 
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

	HumainPM = ["60 kg","65 kg","70 kg","75 kg","80 kg","85 kg","90 kg","95 kg","100 kg","105 kg","110 kg"];
    HumainPF = ["42 kg","47 kg","52 kg","57 kg","62 kg","67 kg","72 kg","77 kg","82 kg","87 kg","92 kg"];
    Demi_elfePM = ["50 kg","54 kg","58 kg","62 kg","66 kg","70 kg","74 kg","78 kg","82 kg","86 kg","90 kg"];
    Demi_elfePF = ["40 kg","44 kg","48 kg","52 kg","56 kg","60 kg","64 kg","68 kg","72 kg","76 kg","80 kg"];
    Demi_orquePM = ["75 kg","83 kg","91 kg","99 kg","107 kg","115 kg","123 kg","131 kg","139 kg","147 kg","155 kg"];
    Demi_orquePF = ["55 kg","63 kg","71 kg","79 kg","87 kg","95 kg","103 kg","111 kg","119 kg","127 kg","135 kg"];
    ElfePM = ["42 kg","44 kg","46 kg","48 kg","50 kg","52 kg","54 kg","56 kg","58 kg","60 kg","62 kg"];
    ElfePF = ["40 kg","42 kg","44 kg","46 kg","48 kg","50 kg","52 kg","54 kg","56 kg","58 kg","60 kg"];
    GnomePM = ["20 kg","20,5 kg","21 kg","21,5 kg","22 kg","22,5 kg","23 kg","23,5 kg","24 kg","24,5 kg","25 kg"];
    GnomePF = ["17 kg","17,5 kg","18 kg","18,5 kg","19 kg","19,5 kg","20 kg","20,5 kg","21 kg","21,5 kg","22 kg"];
    HalfelinPM = ["15 kg","15,5 kg","16 kg","16,5 kg","17 kg","17,5 kg","18 kg","18,5 kg","19 kg","19,5 kg","20 kg"];
    HalfelinPF = ["12 kg","12,5 kg","13 kg","13,5 kg","14 kg","14,5 kg","15 kg","15,5 kg","16 kg","16,5 kg","17 kg"];
    NainPM = ["65 kg","68 kg","71 kg","74 kg","77 kg","80 kg","83 kg","86 kg","89 kg","92 kg","95 kg"];
    NainPF = ["50 kg","53 kg","56 kg","59 kg","62 kg","65 kg","68 kg","71 kg","74 kg","77 kg","80 kg"];

	switch(document.form.race.value) {
		case "Humain" :
			if (document.form.sexe.value == "Masculin") {
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
		case "Demi-elfe" :
			if (document.form.sexe.value == "Masculin") {
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
		case "Demi-orque" :
			if (document.form.sexe.value == "Masculin") {
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
		case "Elfe" :
			if (document.form.sexe.value == "Masculin") {
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
		case "Gnome" :
			if (document.form.sexe.value == "Masculin") {
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
		case "Halfelin" :
			if (document.form.sexe.value == "Masculin") {
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
		case "Nain" :
			if (document.form.sexe.value == "Masculin") {
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

	document.getElementById('for_mod').innerHTML=resultatCalculeInfluence;

	document.getElementById('lut_mod_for').innerHTML=resultatCalculeInfluence;

	calculeLutte();

    for (var i = 0; i < document.getElementsByClassName("carac_for").length; i++) {
        if (isNaN(parseInt(document.getElementsByClassName("carac_for")[i].innerHTML))) {
            var valeurB = 0;
        } else {
            var valeurB = parseInt(document.getElementsByClassName("carac_for")[i].innerHTML);
        };

        document.getElementsByClassName("carac_for")[i].innerHTML = valeurB
                                                                  + resultatCalculeInfluence;
    };

    calculeCharge(valeur);
};

function calculeCharge(valeur) {
    document.getElementById('chargeLegere').innerHTML = "0";
    document.getElementById('chargeIntermediaire').innerHTML = "0"
    document.getElementById('chargeLourde').innerHTML = "0";
    document.getElementById('chargeMax').innerHTML = "0";
    document.getElementById('soulever').innerHTML = "0";
    document.getElementById('tirerOuPousser').innerHTML = "0";

    switch(valeur) {
        case 1 :
            document.getElementById('chargeLegere').innerHTML = "jusqu’à 1,5kg"
            document.getElementById('chargeIntermediaire').innerHTML = "1,5–3kg"
            document.getElementById('chargeLourde').innerHTML = "3–5kg"
            document.getElementById('chargeMax').innerHTML = "5kg"
            document.getElementById('soulever').innerHTML = "10kg"
            document.getElementById('tirerOuPousser').innerHTML = "25kg"
            break;
        case 2 :
            document.getElementById('chargeLegere').innerHTML = "jusqu’à 3kg"
            document.getElementById('chargeIntermediaire').innerHTML = "3–6,5kg"
            document.getElementById('chargeLourde').innerHTML = "6,5–10kg"
            document.getElementById('chargeMax').innerHTML = "10kg"
            document.getElementById('soulever').innerHTML = "20kg"
            document.getElementById('tirerOuPousser').innerHTML = "50kg"
            break;
        case 3 :
            document.getElementById('chargeLegere').innerHTML = "jusqu’à 5kg"
            document.getElementById('chargeIntermediaire').innerHTML = "5–10kg"
            document.getElementById('chargeLourde').innerHTML = "10–15kg"
            document.getElementById('chargeMax').innerHTML = "15kg"
            document.getElementById('soulever').innerHTML = "30kg"
            document.getElementById('tirerOuPousser').innerHTML = "75kg"
            break;
        case 4 :
            document.getElementById('chargeLegere').innerHTML = "jusqu’à 6,5kg"
            document.getElementById('chargeIntermediaire').innerHTML = "6,5–13kg"
            document.getElementById('chargeLourde').innerHTML = "13–20kg"
            document.getElementById('chargeMax').innerHTML = "20kg"
            document.getElementById('soulever').innerHTML = "40kg"
            document.getElementById('tirerOuPousser').innerHTML = "100kg"
            break;
        case 5 :
            document.getElementById('chargeLegere').innerHTML = "jusqu’à 8kg"
            document.getElementById('chargeIntermediaire').innerHTML = "8–16,5kg"
            document.getElementById('chargeLourde').innerHTML = "16,5–25kg"
            document.getElementById('chargeMax').innerHTML = "25kg"
            document.getElementById('soulever').innerHTML = "50kg"
            document.getElementById('tirerOuPousser').innerHTML = "125kg"
            break;
        case 6 :
            document.getElementById('chargeLegere').innerHTML = "jusqu’à 10kg"
            document.getElementById('chargeIntermediaire').innerHTML = "10–20kg"
            document.getElementById('chargeLourde').innerHTML = "20–30kg"
            document.getElementById('chargeMax').innerHTML = "30kg"
            document.getElementById('soulever').innerHTML = "60kg"
            document.getElementById('tirerOuPousser').innerHTML = "150kg"
            break;
        case 7 :
            document.getElementById('chargeLegere').innerHTML = "jusqu’à 11,5kg"
            document.getElementById('chargeIntermediaire').innerHTML = "11,5–23kg"
            document.getElementById('chargeLourde').innerHTML = "23–35kg"
            document.getElementById('chargeMax').innerHTML = "35kg"
            document.getElementById('soulever').innerHTML = "70kg"
            document.getElementById('tirerOuPousser').innerHTML = "175kg"
            break;
        case 8 :
            document.getElementById('chargeLegere').innerHTML = "jusqu’à 13kg"
            document.getElementById('chargeIntermediaire').innerHTML = "13–26,5kg"
            document.getElementById('chargeLourde').innerHTML = "26,5–40kg"
            document.getElementById('chargeMax').innerHTML = "40kg"
            document.getElementById('soulever').innerHTML = "80kg"
            document.getElementById('tirerOuPousser').innerHTML = "200kg"
            break;
        case 9 :
            document.getElementById('chargeLegere').innerHTML = "jusqu’à 15kg"
            document.getElementById('chargeIntermediaire').innerHTML = "15–30kg"
            document.getElementById('chargeLourde').innerHTML = "30–45kg"
            document.getElementById('chargeMax').innerHTML = "45kg"
            document.getElementById('soulever').innerHTML = "90kg"
            document.getElementById('tirerOuPousser').innerHTML = "225kg"
            break;
        case 10 :
            document.getElementById('chargeLegere').innerHTML = "jusqu’à 17,5kg"
            document.getElementById('chargeIntermediaire').innerHTML = "17,5–33kg"
            document.getElementById('chargeLourde').innerHTML = "33–50kg"
            document.getElementById('chargeMax').innerHTML = "50kg"
            document.getElementById('soulever').innerHTML = "100kg"
            document.getElementById('tirerOuPousser').innerHTML = "250kg"
            break;
        case 11 :
            document.getElementById('chargeLegere').innerHTML = "jusqu’à 19kg"
            document.getElementById('chargeIntermediaire').innerHTML = "19–38kg"
            document.getElementById('chargeLourde').innerHTML = "38–57,5kg"
            document.getElementById('chargeMax').innerHTML = "57,5kg"
            document.getElementById('soulever').innerHTML = "115kg"
            document.getElementById('tirerOuPousser').innerHTML = "287,5kg"
            break;
        case 12 :
            document.getElementById('chargeLegere').innerHTML = "jusqu’à 21,5kg"
            document.getElementById('chargeIntermediaire').innerHTML = "21,5–43kg"
            document.getElementById('chargeLourde').innerHTML = "43–65kg"
            document.getElementById('chargeMax').innerHTML = "65kg"
            document.getElementById('soulever').innerHTML = "120kg"
            document.getElementById('tirerOuPousser').innerHTML = "325kg"
            break;
        case 13 :
            document.getElementById('chargeLegere').innerHTML = "jusqu’à 25kg"
            document.getElementById('chargeIntermediaire').innerHTML = "25–50kg"
            document.getElementById('chargeLourde').innerHTML = "50–75kg"
            document.getElementById('chargeMax').innerHTML = "75kg"
            document.getElementById('soulever').innerHTML = "150kg"
            document.getElementById('tirerOuPousser').innerHTML = "375kg"
            break;
        case 14 :
            document.getElementById('chargeLegere').innerHTML = "jusqu’à 29kg"
            document.getElementById('chargeIntermediaire').innerHTML = "29–58kg"
            document.getElementById('chargeLourde').innerHTML = "58–87,5kg"
            document.getElementById('chargeMax').innerHTML = "87,5kg"
            document.getElementById('soulever').innerHTML = "175kg"
            document.getElementById('tirerOuPousser').innerHTML = "437,5kg"
            break;
        case 15 :
            document.getElementById('chargeLegere').innerHTML = "jusqu’à 33kg"
            document.getElementById('chargeIntermediaire').innerHTML = "33–66,5kg"
            document.getElementById('chargeLourde').innerHTML = "66,5–100kg"
            document.getElementById('chargeMax').innerHTML = "100kg"
            document.getElementById('soulever').innerHTML = "200kg"
            document.getElementById('tirerOuPousser').innerHTML = "500kg"
            break;
        case 16 :
            document.getElementById('chargeLegere').innerHTML = "jusqu’à 38kg"
            document.getElementById('chargeIntermediaire').innerHTML = "38–76,5kg"
            document.getElementById('chargeLourde').innerHTML = "76,5–115kg"
            document.getElementById('chargeMax').innerHTML = "115kg"
            document.getElementById('soulever').innerHTML = "225kg"
            document.getElementById('tirerOuPousser').innerHTML = "575kg"
            break;
        case 17 :
            document.getElementById('chargeLegere').innerHTML = "jusqu’à 43kg"
            document.getElementById('chargeIntermediaire').innerHTML = "43–86,5kg"
            document.getElementById('chargeLourde').innerHTML = "86,5–130kg"
            document.getElementById('chargeMax').innerHTML = "130kg"
            document.getElementById('soulever').innerHTML = "260kg"
            document.getElementById('tirerOuPousser').innerHTML = "650kg"
            break;
        case 18 :
            document.getElementById('chargeLegere').innerHTML = "jusqu’à 50kg"
            document.getElementById('chargeIntermediaire').innerHTML = "50–100kg"
            document.getElementById('chargeLourde').innerHTML = "100–150kg"
            document.getElementById('chargeMax').innerHTML = "150kg"
            document.getElementById('soulever').innerHTML = "300kg"
            document.getElementById('tirerOuPousser').innerHTML = "750kg"
            break;
        case 19 :
            document.getElementById('chargeLegere').innerHTML = "jusqu’à 58kg"
            document.getElementById('chargeIntermediaire').innerHTML = "58–116,5kg"
            document.getElementById('chargeLourde').innerHTML = "116,5–175kg"
            document.getElementById('chargeMax').innerHTML = "175kg"
            document.getElementById('soulever').innerHTML = "350kg"
            document.getElementById('tirerOuPousser').innerHTML = "875kg"
            break;
        case 20 :
            document.getElementById('chargeLegere').innerHTML = "jusqu’à 66,5kg"
            document.getElementById('chargeIntermediaire').innerHTML = "66,5–133kg"
            document.getElementById('chargeLourde').innerHTML = "133–200kg"
            document.getElementById('chargeMax').innerHTML = "200kg"
            document.getElementById('soulever').innerHTML = "400kg"
            document.getElementById('tirerOuPousser').innerHTML = "1000kg"
            break;
        case 21 :
            document.getElementById('chargeLegere').innerHTML = "jusqu’à 76,5kg"
            document.getElementById('chargeIntermediaire').innerHTML = "76,5–153kg"
            document.getElementById('chargeLourde').innerHTML = "153–230kg"
            document.getElementById('chargeMax').innerHTML = "230kg"
            document.getElementById('soulever').innerHTML = "460kg"
            document.getElementById('tirerOuPousser').innerHTML = "1150kg"
            break;
        case 22 :
            document.getElementById('chargeLegere').innerHTML = "jusqu’à 86,5kg"
            document.getElementById('chargeIntermediaire').innerHTML = "86,5–173kg"
            document.getElementById('chargeLourde').innerHTML = "173–260kg"
            document.getElementById('chargeMax').innerHTML = "260kg"
            document.getElementById('soulever').innerHTML = "520kg"
            document.getElementById('tirerOuPousser').innerHTML = "1300kg"
            break;
        case 23 :
            document.getElementById('chargeLegere').innerHTML = "jusqu’à 100 kg"
            document.getElementById('chargeIntermediaire').innerHTML = "100–200kg"
            document.getElementById('chargeLourde').innerHTML = "200–300kg"
            document.getElementById('chargeMax').innerHTML = "300kg"
            document.getElementById('soulever').innerHTML = "600kg"
            document.getElementById('tirerOuPousser').innerHTML = "1500kg"
            break;
        case 24 :
            document.getElementById('chargeLegere').innerHTML = "jusqu’à 116,5kg"
            document.getElementById('chargeIntermediaire').innerHTML = "116,5–233kg"
            document.getElementById('chargeLourde').innerHTML = "233–350kg"
            document.getElementById('chargeMax').innerHTML = "350kg"
            document.getElementById('soulever').innerHTML = "700kg"
            document.getElementById('tirerOuPousser').innerHTML = "1750kg"
            break;
        case 25 :
            document.getElementById('chargeLegere').innerHTML = "jusqu’à 133kg"
            document.getElementById('chargeIntermediaire').innerHTML = "133–266,5kg"
            document.getElementById('chargeLourde').innerHTML = "266,5–400kg"
            document.getElementById('chargeMax').innerHTML = "400kg"
            document.getElementById('soulever').innerHTML = "800kg"
            document.getElementById('tirerOuPousser').innerHTML = "2000kg"
            break;
        case 26 :
            document.getElementById('chargeLegere').innerHTML = "jusqu’à 153kg"
            document.getElementById('chargeIntermediaire').innerHTML = "153–306,5kg"
            document.getElementById('chargeLourde').innerHTML = "306,5–460kg"
            document.getElementById('chargeMax').innerHTML = "460kg"
            document.getElementById('soulever').innerHTML = "920kg"
            document.getElementById('tirerOuPousser').innerHTML = "2300kg"
            break;
        case 27 :
            document.getElementById('chargeLegere').innerHTML = "jusqu’à 173kg"
            document.getElementById('chargeIntermediaire').innerHTML = "173–346,5kg"
            document.getElementById('chargeLourde').innerHTML = "346,5–520kg"
            document.getElementById('chargeMax').innerHTML = "520kg"
            document.getElementById('soulever').innerHTML = "1040kg"
            document.getElementById('tirerOuPousser').innerHTML = "2600kg"
            break;
        case 28 :
            document.getElementById('chargeLegere').innerHTML = "jusqu’à 200kg"
            document.getElementById('chargeIntermediaire').innerHTML = "200–400kg"
            document.getElementById('chargeLourde').innerHTML = "400–600kg"
            document.getElementById('chargeMax').innerHTML = "600kg"
            document.getElementById('soulever').innerHTML = "1200kg"
            document.getElementById('tirerOuPousser').innerHTML = "3000kg"
            break;
        case 29 :
            document.getElementById('chargeLegere').innerHTML = "jusqu’à 233kg"
            document.getElementById('chargeIntermediaire').innerHTML = "233–466,5kg"
            document.getElementById('chargeLourde').innerHTML = "466,5–700kg"
            document.getElementById('chargeMax').innerHTML = "700kg"
            document.getElementById('soulever').innerHTML = "1400kg"
            document.getElementById('tirerOuPousser').innerHTML = "3500kg"
            break;
    }
};

function influenceDex() {
	var valeur = parseInt(document.form.dex_val.value);
	/* on appel une fois calculeInfluence(valeur) et on stock son résultat dans resultatCalculeInfluence */
	var resultatCalculeInfluence = calculeInfluence(valeur);

	document.getElementById('dex_mod').innerHTML=resultatCalculeInfluence;
	document.getElementById('ca_mod_dex').innerHTML=resultatCalculeInfluence;

	document.getElementById('ca_total').innerHTML=calculeCa();
	document.getElementById('init_mod_dex').innerHTML=resultatCalculeInfluence;

	document.getElementById('val_ca_contact').innerHTML=calculeCaContact();
	document.getElementById('val_pri_depourvu').innerHTML=calculeCaPrisDepourvu();

	calculeInit();

	document.getElementById('sau_mod_car_ref').innerHTML=resultatCalculeInfluence;

	calculeReflexes();

    for (var i = 0; i < document.getElementsByClassName("carac_dex").length; i++) {
        if (isNaN(parseInt(document.getElementsByClassName("carac_dex")[i].innerHTML))) {
            var valeur = 0;
        } else {
            var valeur = parseInt(document.getElementsByClassName("carac_dex")[i].innerHTML);
        };

        document.getElementsByClassName("carac_dex")[i].innerHTML = valeur
                                                                  + resultatCalculeInfluence;
    };
};

function influenceCon() {
	var valeur = parseInt(document.form.con_val.value);
	var resultatCalculeInfluence = calculeInfluence(valeur);

	document.getElementById('con_mod').innerHTML=resultatCalculeInfluence;

	document.getElementById('pv').innerHTML=CalculePv(resultatCalculeInfluence);

	document.getElementById('sau_mod_car_vig').innerHTML=resultatCalculeInfluence;

	calculeVigeur();

    for (var i = 0; i < document.getElementsByClassName("carac_con").length; i++) {
        if (isNaN(parseInt(document.getElementsByClassName("carac_con")[i].innerHTML))) {
            var valeur = 0;
        } else {
            var valeur = parseInt(document.getElementsByClassName("carac_con")[i].innerHTML);
        };

        document.getElementsByClassName("carac_con")[i].innerHTML = valeur
                                                                  + resultatCalculeInfluence;
    };
};

function influenceInt() {
	var valeur = parseInt(document.form.int_val.value);
    var resultatCalculeInfluence = calculeInfluence(valeur);

	document.getElementById('int_mod').innerHTML=resultatCalculeInfluence;

    for (var i = 0; i < document.getElementsByClassName("carac_int").length; i++) {
        if (isNaN(parseInt(document.getElementsByClassName("carac_int")[i].innerHTML))) {
            var valeur = 0;
        } else {
            var valeur = parseInt(document.getElementsByClassName("carac_int")[i].innerHTML);
        };

        document.getElementsByClassName("carac_int")[i].innerHTML = valeur
                                                                  + resultatCalculeInfluence;
    };

    if (document.form.classe.value == "Magicien") {
        calculeSorts(resultatCalculeInfluence);
    } else {
        console.log("sorts");
        document.getElementById('sorts_connus_0').innerHTML    = 0;
        document.getElementById('sorts_connus_I').innerHTML    = "0";
        document.getElementById('sorts_connus_II').innerHTML   = "0";
        document.getElementById('sorts_connus_III').innerHTML  = "0";
        document.getElementById('sorts_connus_IV').innerHTML   = "0";
        document.getElementById('sorts_connus_V').innerHTML    = "0";
        document.getElementById('sorts_connus_VI').innerHTML   = "0";
        document.getElementById('sorts_connus_VII').innerHTML  = "0";
        document.getElementById('sorts_connus_VIII').innerHTML = "0";
        document.getElementById('sorts_connus_IX').innerHTML   = "0";
    };
};

function  calculeSorts(valeur) {
    document.getElementById('dd_des_sorts').innerHTML      = 10 + 0 + parseInt(valeur);
    document.getElementById('dd_des_sorts_0').innerHTML    = 10 + 0 + parseInt(valeur);
    document.getElementById('dd_des_sorts_I').innerHTML    = 10 + 1 + parseInt(valeur);
    document.getElementById('dd_des_sorts_II').innerHTML   = 10 + 2 + parseInt(valeur);
    document.getElementById('dd_des_sorts_III').innerHTML  = 10 + 3 + parseInt(valeur);
    document.getElementById('dd_des_sorts_IV').innerHTML   = 10 + 4 + parseInt(valeur);
    document.getElementById('dd_des_sorts_V').innerHTML    = 10 + 5 + parseInt(valeur);
    document.getElementById('dd_des_sorts_VI').innerHTML   = 10 + 6 + parseInt(valeur);
    document.getElementById('dd_des_sorts_VII').innerHTML  = 10 + 7 + parseInt(valeur);
    document.getElementById('dd_des_sorts_VIII').innerHTML = 10 + 8 + parseInt(valeur);
    document.getElementById('dd_des_sorts_IX').innerHTML   = 10 + 9 + parseInt(valeur);

    switch(document.form.niveau.value) {
        case "01" :
            document.getElementById('sorts_jour_0').innerHTML = 3;
            document.getElementById('sorts_jour_I').innerHTML = 1;
            document.getElementById('sorts_jour_II').innerHTML = "-";
            document.getElementById('sorts_jour_III').innerHTML = "-";
            document.getElementById('sorts_jour_IV').innerHTML = "-";
            document.getElementById('sorts_jour_V').innerHTML = "-";
            document.getElementById('sorts_jour_VI').innerHTML = "-";
            document.getElementById('sorts_jour_VII').innerHTML = "-";
            document.getElementById('sorts_jour_VIII').innerHTML = "-";
            document.getElementById('sorts_jour_IX').innerHTML = "-";
            break;
        case "02" :
            document.getElementById('sorts_jour_0').innerHTML = 4;
            document.getElementById('sorts_jour_I').innerHTML = 2;
            document.getElementById('sorts_jour_II').innerHTML = "-";
            document.getElementById('sorts_jour_III').innerHTML = "-";
            document.getElementById('sorts_jour_IV').innerHTML = "-";
            document.getElementById('sorts_jour_V').innerHTML = "-";
            document.getElementById('sorts_jour_VI').innerHTML = "-";
            document.getElementById('sorts_jour_VII').innerHTML = "-";
            document.getElementById('sorts_jour_VIII').innerHTML = "-";
            document.getElementById('sorts_jour_IX').innerHTML = "-";
            break;
        case "03" :
            document.getElementById('sorts_jour_0').innerHTML = 4;
            document.getElementById('sorts_jour_I').innerHTML = 2;
            document.getElementById('sorts_jour_II').innerHTML = 1;
            document.getElementById('sorts_jour_III').innerHTML = "-";
            document.getElementById('sorts_jour_IV').innerHTML = "-";
            document.getElementById('sorts_jour_V').innerHTML = "-";
            document.getElementById('sorts_jour_VI').innerHTML = "-";
            document.getElementById('sorts_jour_VII').innerHTML = "-";
            document.getElementById('sorts_jour_VIII').innerHTML = "-";
            document.getElementById('sorts_jour_IX').innerHTML = "-";
            break;
        case "04" :
            document.getElementById('sorts_jour_0').innerHTML = 4;
            document.getElementById('sorts_jour_I').innerHTML = 3;
            document.getElementById('sorts_jour_II').innerHTML = 2;
            document.getElementById('sorts_jour_III').innerHTML = "-";
            document.getElementById('sorts_jour_IV').innerHTML = "-";
            document.getElementById('sorts_jour_V').innerHTML = "-";
            document.getElementById('sorts_jour_VI').innerHTML = "-";
            document.getElementById('sorts_jour_VII').innerHTML = "-";
            document.getElementById('sorts_jour_VIII').innerHTML = "-";
            document.getElementById('sorts_jour_IX').innerHTML = "-";
            break;
        case "05" :
            document.getElementById('sorts_jour_0').innerHTML = 4;
            document.getElementById('sorts_jour_I').innerHTML = 3;
            document.getElementById('sorts_jour_II').innerHTML = 2;
            document.getElementById('sorts_jour_III').innerHTML = 1;
            document.getElementById('sorts_jour_IV').innerHTML = "-";
            document.getElementById('sorts_jour_V').innerHTML = "-";
            document.getElementById('sorts_jour_VI').innerHTML = "-";
            document.getElementById('sorts_jour_VII').innerHTML = "-";
            document.getElementById('sorts_jour_VIII').innerHTML = "-";
            document.getElementById('sorts_jour_IX').innerHTML = "-";
            break;
        case "06" :
            document.getElementById('sorts_jour_0').innerHTML = 4;
            document.getElementById('sorts_jour_I').innerHTML = 3;
            document.getElementById('sorts_jour_II').innerHTML = 3;
            document.getElementById('sorts_jour_III').innerHTML = 2;
            document.getElementById('sorts_jour_IV').innerHTML = "-";
            document.getElementById('sorts_jour_V').innerHTML = "-";
            document.getElementById('sorts_jour_VI').innerHTML = "-";
            document.getElementById('sorts_jour_VII').innerHTML = "-";
            document.getElementById('sorts_jour_VIII').innerHTML = "-";
            document.getElementById('sorts_jour_IX').innerHTML = "-";
            break;
        case "07" :
            document.getElementById('sorts_jour_0').innerHTML = 4;
            document.getElementById('sorts_jour_I').innerHTML = 4;
            document.getElementById('sorts_jour_II').innerHTML = 3;
            document.getElementById('sorts_jour_III').innerHTML = 2;
            document.getElementById('sorts_jour_IV').innerHTML = 1;
            document.getElementById('sorts_jour_V').innerHTML = "-";
            document.getElementById('sorts_jour_VI').innerHTML = "-";
            document.getElementById('sorts_jour_VII').innerHTML = "-";
            document.getElementById('sorts_jour_VIII').innerHTML = "-";
            document.getElementById('sorts_jour_IX').innerHTML = "-";
            break;
        case "08" :
            document.getElementById('sorts_jour_0').innerHTML = 4;
            document.getElementById('sorts_jour_I').innerHTML = 4;
            document.getElementById('sorts_jour_II').innerHTML = 3;
            document.getElementById('sorts_jour_III').innerHTML = 3;
            document.getElementById('sorts_jour_IV').innerHTML = 2;
            document.getElementById('sorts_jour_V').innerHTML = "-";
            document.getElementById('sorts_jour_VI').innerHTML = "-";
            document.getElementById('sorts_jour_VII').innerHTML = "-";
            document.getElementById('sorts_jour_VIII').innerHTML = "-";
            document.getElementById('sorts_jour_IX').innerHTML = "-";
            break;
        case "09" :
            document.getElementById('sorts_jour_0').innerHTML = 4;
            document.getElementById('sorts_jour_I').innerHTML = 4;
            document.getElementById('sorts_jour_II').innerHTML = 4;
            document.getElementById('sorts_jour_III').innerHTML = 3;
            document.getElementById('sorts_jour_IV').innerHTML = 2;
            document.getElementById('sorts_jour_V').innerHTML = 1;
            document.getElementById('sorts_jour_VI').innerHTML = "-";
            document.getElementById('sorts_jour_VII').innerHTML = "-";
            document.getElementById('sorts_jour_VIII').innerHTML = "-";
            document.getElementById('sorts_jour_IX').innerHTML = "-";
            break;
        case "10" :
            document.getElementById('sorts_jour_0').innerHTML = 4;
            document.getElementById('sorts_jour_I').innerHTML = 4;
            document.getElementById('sorts_jour_II').innerHTML = 4;
            document.getElementById('sorts_jour_III').innerHTML = 3;
            document.getElementById('sorts_jour_IV').innerHTML = 3;
            document.getElementById('sorts_jour_V').innerHTML = 2;
            document.getElementById('sorts_jour_VI').innerHTML = "-";
            document.getElementById('sorts_jour_VII').innerHTML = "-";
            document.getElementById('sorts_jour_VIII').innerHTML = "-";
            document.getElementById('sorts_jour_IX').innerHTML = "-";
            break;
        case "11" :
            document.getElementById('sorts_jour_0').innerHTML = 4;
            document.getElementById('sorts_jour_I').innerHTML = 4;
            document.getElementById('sorts_jour_II').innerHTML = 4;
            document.getElementById('sorts_jour_III').innerHTML = 4;
            document.getElementById('sorts_jour_IV').innerHTML = 3;
            document.getElementById('sorts_jour_V').innerHTML = 2;
            document.getElementById('sorts_jour_VI').innerHTML = 1;
            document.getElementById('sorts_jour_VII').innerHTML = "-";
            document.getElementById('sorts_jour_VIII').innerHTML = "-";
            document.getElementById('sorts_jour_IX').innerHTML = "-";
            break;
        case "12" :
            document.getElementById('sorts_jour_0').innerHTML = 4;
            document.getElementById('sorts_jour_I').innerHTML = 4;
            document.getElementById('sorts_jour_II').innerHTML = 4;
            document.getElementById('sorts_jour_III').innerHTML = 4;
            document.getElementById('sorts_jour_IV').innerHTML = 3;
            document.getElementById('sorts_jour_V').innerHTML = 3;
            document.getElementById('sorts_jour_VI').innerHTML = 2;
            document.getElementById('sorts_jour_VII').innerHTML = "-";
            document.getElementById('sorts_jour_VIII').innerHTML = "-";
            document.getElementById('sorts_jour_IX').innerHTML = "-";
            break;
        case "13" :
            document.getElementById('sorts_jour_0').innerHTML = 4;
            document.getElementById('sorts_jour_I').innerHTML = 4;
            document.getElementById('sorts_jour_II').innerHTML = 4;
            document.getElementById('sorts_jour_III').innerHTML = 4;
            document.getElementById('sorts_jour_IV').innerHTML = 4;
            document.getElementById('sorts_jour_V').innerHTML = 3;
            document.getElementById('sorts_jour_VI').innerHTML = 2;
            document.getElementById('sorts_jour_VII').innerHTML = 1;
            document.getElementById('sorts_jour_VIII').innerHTML = "-";
            document.getElementById('sorts_jour_IX').innerHTML = "-";
            break;
        case "14" :
            document.getElementById('sorts_jour_0').innerHTML = 4;
            document.getElementById('sorts_jour_I').innerHTML = 4;
            document.getElementById('sorts_jour_II').innerHTML = 4;
            document.getElementById('sorts_jour_III').innerHTML = 4;
            document.getElementById('sorts_jour_IV').innerHTML = 4;
            document.getElementById('sorts_jour_V').innerHTML = 3;
            document.getElementById('sorts_jour_VI').innerHTML = 3;
            document.getElementById('sorts_jour_VII').innerHTML = 2;
            document.getElementById('sorts_jour_VIII').innerHTML = "-";
            document.getElementById('sorts_jour_IX').innerHTML = "-";
            break;
        case "15" :
            document.getElementById('sorts_jour_0').innerHTML = 4;
            document.getElementById('sorts_jour_I').innerHTML = 4;
            document.getElementById('sorts_jour_II').innerHTML = 4;
            document.getElementById('sorts_jour_III').innerHTML = 4;
            document.getElementById('sorts_jour_IV').innerHTML = 4;
            document.getElementById('sorts_jour_V').innerHTML = 4;
            document.getElementById('sorts_jour_VI').innerHTML = 3;
            document.getElementById('sorts_jour_VII').innerHTML = 2;
            document.getElementById('sorts_jour_VIII').innerHTML = 1;
            document.getElementById('sorts_jour_IX').innerHTML = "-";
            break;
        case "16" :
            document.getElementById('sorts_jour_0').innerHTML = 4;
            document.getElementById('sorts_jour_I').innerHTML = 4;
            document.getElementById('sorts_jour_II').innerHTML = 4;
            document.getElementById('sorts_jour_III').innerHTML = 4;
            document.getElementById('sorts_jour_IV').innerHTML = 4;
            document.getElementById('sorts_jour_V').innerHTML = 4;
            document.getElementById('sorts_jour_VI').innerHTML = 3;
            document.getElementById('sorts_jour_VII').innerHTML = 3;
            document.getElementById('sorts_jour_VIII').innerHTML = 2;
            document.getElementById('sorts_jour_IX').innerHTML = "-";
            break;
        case "17" :
            document.getElementById('sorts_jour_0').innerHTML = 4;
            document.getElementById('sorts_jour_I').innerHTML = 4;
            document.getElementById('sorts_jour_II').innerHTML = 4;
            document.getElementById('sorts_jour_III').innerHTML = 4;
            document.getElementById('sorts_jour_IV').innerHTML = 4;
            document.getElementById('sorts_jour_V').innerHTML = 4;
            document.getElementById('sorts_jour_VI').innerHTML = 4;
            document.getElementById('sorts_jour_VII').innerHTML = 3;
            document.getElementById('sorts_jour_VIII').innerHTML = 2;
            document.getElementById('sorts_jour_IX').innerHTML = 1;
            break;
        case "18" :
            document.getElementById('sorts_jour_0').innerHTML = 4;
            document.getElementById('sorts_jour_I').innerHTML = 4;
            document.getElementById('sorts_jour_II').innerHTML = 4;
            document.getElementById('sorts_jour_III').innerHTML = 4;
            document.getElementById('sorts_jour_IV').innerHTML = 4;
            document.getElementById('sorts_jour_V').innerHTML = 4;
            document.getElementById('sorts_jour_VI').innerHTML = 4;
            document.getElementById('sorts_jour_VII').innerHTML = 3;
            document.getElementById('sorts_jour_VIII').innerHTML = 3;
            document.getElementById('sorts_jour_IX').innerHTML = 2;
            break;
        case "19" :
            document.getElementById('sorts_jour_0').innerHTML = 4;
            document.getElementById('sorts_jour_I').innerHTML = 4;
            document.getElementById('sorts_jour_II').innerHTML = 4;
            document.getElementById('sorts_jour_III').innerHTML = 4;
            document.getElementById('sorts_jour_IV').innerHTML = 4;
            document.getElementById('sorts_jour_V').innerHTML = 4;
            document.getElementById('sorts_jour_VI').innerHTML = 4;
            document.getElementById('sorts_jour_VII').innerHTML = 4;
            document.getElementById('sorts_jour_VIII').innerHTML = 3;
            document.getElementById('sorts_jour_IX').innerHTML = 3;
            break;
        case "20" :
            document.getElementById('sorts_jour_0').innerHTML = 4;
            document.getElementById('sorts_jour_I').innerHTML = 4;
            document.getElementById('sorts_jour_II').innerHTML = 4;
            document.getElementById('sorts_jour_III').innerHTML = 4;
            document.getElementById('sorts_jour_IV').innerHTML = 4;
            document.getElementById('sorts_jour_V').innerHTML = 4;
            document.getElementById('sorts_jour_VI').innerHTML = 4;
            document.getElementById('sorts_jour_VII').innerHTML = 4;
            document.getElementById('sorts_jour_VIII').innerHTML = 4;
            document.getElementById('sorts_jour_IX').innerHTML = 4;
            break;
    };

    document.getElementById('sorts_en_bonus_0').innerHTML = "-";
    document.getElementById('sorts_en_bonus_I').innerHTML = "-";
    document.getElementById('sorts_en_bonus_II').innerHTML = "-";
    document.getElementById('sorts_en_bonus_III').innerHTML = "-";
    document.getElementById('sorts_en_bonus_IV').innerHTML = "-";
    document.getElementById('sorts_en_bonus_V').innerHTML = "-";
    document.getElementById('sorts_en_bonus_VI').innerHTML = "-";
    document.getElementById('sorts_en_bonus_VII').innerHTML = "-";
    document.getElementById('sorts_en_bonus_VIII').innerHTML = "-";
    document.getElementById('sorts_en_bonus_IX').innerHTML = "-";

    switch(valeur) {
        case 1 :
            document.getElementById('sorts_en_bonus_I').innerHTML = 1;
            document.getElementById('sorts_en_bonus_II').innerHTML = "-";
            document.getElementById('sorts_en_bonus_III').innerHTML = "-";
            document.getElementById('sorts_en_bonus_IV').innerHTML = "-";
            document.getElementById('sorts_en_bonus_V').innerHTML = "-";
            document.getElementById('sorts_en_bonus_VI').innerHTML = "-";
            document.getElementById('sorts_en_bonus_VII').innerHTML = "-";
            document.getElementById('sorts_en_bonus_VIII').innerHTML = "-";
            document.getElementById('sorts_en_bonus_IX').innerHTML = "-";
            break;
        case 2 :
            document.getElementById('sorts_en_bonus_I').innerHTML = 1;
            document.getElementById('sorts_en_bonus_II').innerHTML = 1;
            document.getElementById('sorts_en_bonus_III').innerHTML = "-";
            document.getElementById('sorts_en_bonus_IV').innerHTML = "-";
            document.getElementById('sorts_en_bonus_V').innerHTML = "-";
            document.getElementById('sorts_en_bonus_VI').innerHTML = "-";
            document.getElementById('sorts_en_bonus_VII').innerHTML = "-";
            document.getElementById('sorts_en_bonus_VIII').innerHTML = "-";
            document.getElementById('sorts_en_bonus_IX').innerHTML = "-";
            break;
        case 3 :
            document.getElementById('sorts_en_bonus_I').innerHTML = 1;
            document.getElementById('sorts_en_bonus_II').innerHTML = 1;
            document.getElementById('sorts_en_bonus_III').innerHTML = 1;
            document.getElementById('sorts_en_bonus_IV').innerHTML = "-";
            document.getElementById('sorts_en_bonus_V').innerHTML = "-";
            document.getElementById('sorts_en_bonus_VI').innerHTML = "-";
            document.getElementById('sorts_en_bonus_VII').innerHTML = "-";
            document.getElementById('sorts_en_bonus_VIII').innerHTML = "-";
            document.getElementById('sorts_en_bonus_IX').innerHTML = "-";
            break;
        case 4 :
            document.getElementById('sorts_en_bonus_I').innerHTML = 1;
            document.getElementById('sorts_en_bonus_II').innerHTML = 1;
            document.getElementById('sorts_en_bonus_III').innerHTML = 1;
            document.getElementById('sorts_en_bonus_IV').innerHTML = 1;
            document.getElementById('sorts_en_bonus_V').innerHTML = "-";
            document.getElementById('sorts_en_bonus_VI').innerHTML = "-";
            document.getElementById('sorts_en_bonus_VII').innerHTML = "-";
            document.getElementById('sorts_en_bonus_VIII').innerHTML = "-";
            document.getElementById('sorts_en_bonus_IX').innerHTML = "-";
            break;
        case 5 :
            document.getElementById('sorts_en_bonus_I').innerHTML = 2;
            document.getElementById('sorts_en_bonus_II').innerHTML = 1;
            document.getElementById('sorts_en_bonus_III').innerHTML = 1;
            document.getElementById('sorts_en_bonus_IV').innerHTML = 1;
            document.getElementById('sorts_en_bonus_V').innerHTML = 1;
            document.getElementById('sorts_en_bonus_VI').innerHTML = "-";
            document.getElementById('sorts_en_bonus_VII').innerHTML = "-";
            document.getElementById('sorts_en_bonus_VIII').innerHTML = "-";
            document.getElementById('sorts_en_bonus_IX').innerHTML = "-";
            break;
        case 6 :
            document.getElementById('sorts_en_bonus_I').innerHTML = 2;
            document.getElementById('sorts_en_bonus_II').innerHTML = 2;
            document.getElementById('sorts_en_bonus_III').innerHTML = 1;
            document.getElementById('sorts_en_bonus_IV').innerHTML = 1;
            document.getElementById('sorts_en_bonus_V').innerHTML = 1;
            document.getElementById('sorts_en_bonus_VI').innerHTML = 1;
            document.getElementById('sorts_en_bonus_VII').innerHTML = "-";
            document.getElementById('sorts_en_bonus_VIII').innerHTML = "-";
            document.getElementById('sorts_en_bonus_IX').innerHTML = "-";
            break;
        case 7 :
            document.getElementById('sorts_en_bonus_I').innerHTML = 2;
            document.getElementById('sorts_en_bonus_II').innerHTML = 2;
            document.getElementById('sorts_en_bonus_III').innerHTML = 2;
            document.getElementById('sorts_en_bonus_IV').innerHTML = 1;
            document.getElementById('sorts_en_bonus_V').innerHTML = 1;
            document.getElementById('sorts_en_bonus_VI').innerHTML = 1;
            document.getElementById('sorts_en_bonus_VII').innerHTML = 1;
            document.getElementById('sorts_en_bonus_VIII').innerHTML = "-";
            document.getElementById('sorts_en_bonus_IX').innerHTML = "-";
            break;
        case 8 :
            document.getElementById('sorts_en_bonus_I').innerHTML = 2;
            document.getElementById('sorts_en_bonus_II').innerHTML = 2;
            document.getElementById('sorts_en_bonus_III').innerHTML = 2;
            document.getElementById('sorts_en_bonus_IV').innerHTML = 2;
            document.getElementById('sorts_en_bonus_V').innerHTML = 1;
            document.getElementById('sorts_en_bonus_VI').innerHTML = 1;
            document.getElementById('sorts_en_bonus_VII').innerHTML = 1;
            document.getElementById('sorts_en_bonus_VIII').innerHTML = 1;
            document.getElementById('sorts_en_bonus_IX').innerHTML = "-";
            break;
        case 9 :
            document.getElementById('sorts_en_bonus_I').innerHTML = 3;
            document.getElementById('sorts_en_bonus_II').innerHTML = 2;
            document.getElementById('sorts_en_bonus_III').innerHTML = 2;
            document.getElementById('sorts_en_bonus_IV').innerHTML = 2;
            document.getElementById('sorts_en_bonus_V').innerHTML = 2;
            document.getElementById('sorts_en_bonus_VI').innerHTML = 1;
            document.getElementById('sorts_en_bonus_VII').innerHTML = 1;
            document.getElementById('sorts_en_bonus_VIII').innerHTML = 1;
            document.getElementById('sorts_en_bonus_IX').innerHTML = 1;
            break;
        case 10 :
            document.getElementById('sorts_en_bonus_I').innerHTML = 3;
            document.getElementById('sorts_en_bonus_II').innerHTML = 3;
            document.getElementById('sorts_en_bonus_III').innerHTML = 2;
            document.getElementById('sorts_en_bonus_IV').innerHTML = 2;
            document.getElementById('sorts_en_bonus_V').innerHTML = 2;
            document.getElementById('sorts_en_bonus_VI').innerHTML = 2;
            document.getElementById('sorts_en_bonus_VII').innerHTML = 1;
            document.getElementById('sorts_en_bonus_VIII').innerHTML = 1;
            document.getElementById('sorts_en_bonus_IX').innerHTML = 1;
            break;
        case 11 :
            document.getElementById('sorts_en_bonus_I').innerHTML = 3;
            document.getElementById('sorts_en_bonus_II').innerHTML = 3;
            document.getElementById('sorts_en_bonus_III').innerHTML = 3;
            document.getElementById('sorts_en_bonus_IV').innerHTML = 2;
            document.getElementById('sorts_en_bonus_V').innerHTML = 2;
            document.getElementById('sorts_en_bonus_VI').innerHTML = 2;
            document.getElementById('sorts_en_bonus_VII').innerHTML = 2;
            document.getElementById('sorts_en_bonus_VIII').innerHTML = 1;
            document.getElementById('sorts_en_bonus_IX').innerHTML = 1;
            break;
        case 12 :
            document.getElementById('sorts_en_bonus_I').innerHTML = 3;
            document.getElementById('sorts_en_bonus_II').innerHTML = 3;
            document.getElementById('sorts_en_bonus_III').innerHTML = 3;
            document.getElementById('sorts_en_bonus_IV').innerHTML = 3;
            document.getElementById('sorts_en_bonus_V').innerHTML = 2;
            document.getElementById('sorts_en_bonus_VI').innerHTML = 2;
            document.getElementById('sorts_en_bonus_VII').innerHTML = 2;
            document.getElementById('sorts_en_bonus_VIII').innerHTML = 2;
            document.getElementById('sorts_en_bonus_IX').innerHTML = 1;
            break;
        case 13 :
            document.getElementById('sorts_en_bonus_I').innerHTML = 4;
            document.getElementById('sorts_en_bonus_II').innerHTML = 3;
            document.getElementById('sorts_en_bonus_III').innerHTML = 3;
            document.getElementById('sorts_en_bonus_IV').innerHTML = 3;
            document.getElementById('sorts_en_bonus_V').innerHTML = 3;
            document.getElementById('sorts_en_bonus_VI').innerHTML = 2;
            document.getElementById('sorts_en_bonus_VII').innerHTML = 2;
            document.getElementById('sorts_en_bonus_VIII').innerHTML = 2;
            document.getElementById('sorts_en_bonus_IX').innerHTML = 2;
            break;
        case 14 :
            document.getElementById('sorts_en_bonus_I').innerHTML = 4;
            document.getElementById('sorts_en_bonus_II').innerHTML = 4;
            document.getElementById('sorts_en_bonus_III').innerHTML = 3;
            document.getElementById('sorts_en_bonus_IV').innerHTML = 3;
            document.getElementById('sorts_en_bonus_V').innerHTML = 3;
            document.getElementById('sorts_en_bonus_VI').innerHTML = 3;
            document.getElementById('sorts_en_bonus_VII').innerHTML = 2;
            document.getElementById('sorts_en_bonus_VIII').innerHTML = 2;
            document.getElementById('sorts_en_bonus_IX').innerHTML = 2;
            break;
        case 15 :
            document.getElementById('sorts_en_bonus_I').innerHTML = 4;
            document.getElementById('sorts_en_bonus_II').innerHTML = 4;
            document.getElementById('sorts_en_bonus_III').innerHTML = 4;
            document.getElementById('sorts_en_bonus_IV').innerHTML = 3;
            document.getElementById('sorts_en_bonus_V').innerHTML = 3;
            document.getElementById('sorts_en_bonus_VI').innerHTML = 3;
            document.getElementById('sorts_en_bonus_VII').innerHTML = 3;
            document.getElementById('sorts_en_bonus_VIII').innerHTML = 2;
            document.getElementById('sorts_en_bonus_IX').innerHTML = 2;
            break;
        case 16 :
            document.getElementById('sorts_en_bonus_I').innerHTML = 4;
            document.getElementById('sorts_en_bonus_II').innerHTML = 4;
            document.getElementById('sorts_en_bonus_III').innerHTML = 4;
            document.getElementById('sorts_en_bonus_IV').innerHTML = 4;
            document.getElementById('sorts_en_bonus_V').innerHTML = 3;
            document.getElementById('sorts_en_bonus_VI').innerHTML = 3;
            document.getElementById('sorts_en_bonus_VII').innerHTML = 3;
            document.getElementById('sorts_en_bonus_VIII').innerHTML = 3;
            document.getElementById('sorts_en_bonus_IX').innerHTML = 2;
            break;
        case 17 :
            document.getElementById('sorts_en_bonus_I').innerHTML = 5;
            document.getElementById('sorts_en_bonus_II').innerHTML = 4;
            document.getElementById('sorts_en_bonus_III').innerHTML = 4;
            document.getElementById('sorts_en_bonus_IV').innerHTML = 4;
            document.getElementById('sorts_en_bonus_V').innerHTML = 4;
            document.getElementById('sorts_en_bonus_VI').innerHTML = 3;
            document.getElementById('sorts_en_bonus_VII').innerHTML = 3;
            document.getElementById('sorts_en_bonus_VIII').innerHTML = 3;
            document.getElementById('sorts_en_bonus_IX').innerHTML = 3;
            break;
    };
}

function  calculeSortsDD() {
    document.getElementById('dd_des_sorts_0').innerHTML    = parseInt(document.getElementById('dd_des_sorts').innerHTML) 
                                                           + parseInt(document.form.modificateur_particulier.value);
    document.getElementById('dd_des_sorts_I').innerHTML    = parseInt(document.getElementById('dd_des_sorts_I').innerHTML)
                                                           + parseInt(document.form.modificateur_particulier.value);
    document.getElementById('dd_des_sorts_II').innerHTML   = parseInt(document.getElementById('dd_des_sorts_II').innerHTML)
                                                           + parseInt(document.form.modificateur_particulier.value);
    document.getElementById('dd_des_sorts_III').innerHTML  = parseInt(document.getElementById('dd_des_sorts_III').innerHTML)
                                                           + parseInt(document.form.modificateur_particulier.value);
    document.getElementById('dd_des_sorts_IV').innerHTML   = parseInt(document.getElementById('dd_des_sorts_IV').innerHTML)
                                                           + parseInt(document.form.modificateur_particulier.value);
    document.getElementById('dd_des_sorts_V').innerHTML    = parseInt(document.getElementById('dd_des_sorts_V').innerHTML)
                                                           + parseInt(document.form.modificateur_particulier.value);
    document.getElementById('dd_des_sorts_VI').innerHTML   = parseInt(document.getElementById('dd_des_sorts_VI').innerHTML)
                                                           + parseInt(document.form.modificateur_particulier.value);
    document.getElementById('dd_des_sorts_VII').innerHTML  = parseInt(document.getElementById('dd_des_sorts_VII').innerHTML)
                                                           + parseInt(document.form.modificateur_particulier.value);
    document.getElementById('dd_des_sorts_VIII').innerHTML = parseInt(document.getElementById('dd_des_sorts_VIII').innerHTML)
                                                           + parseInt(document.form.modificateur_particulier.value);
    document.getElementById('dd_des_sorts_IX').innerHTML   = parseInt(document.getElementById('dd_des_sorts_IX').innerHTML)
                                                           + parseInt(document.form.modificateur_particulier.value);
}


function influenceSag() {
	var valeur = parseInt(document.form.sag_val.value);
	var resultatCalculeInfluence = calculeInfluence(valeur);

	document.getElementById('sag_mod').innerHTML=resultatCalculeInfluence;

	document.getElementById('sau_mod_car_vol').innerHTML=resultatCalculeInfluence;

	calculeVolonte();

    for (var i = 0; i < document.getElementsByClassName("carac_sag").length; i++) {
        if (isNaN(parseInt(document.getElementsByClassName("carac_sag")[i].innerHTML))) {
            var valeur = 0;
        } else {
            var valeur = parseInt(document.getElementsByClassName("carac_sag")[i].innerHTML);
        };

        document.getElementsByClassName("carac_sag")[i].innerHTML = valeur
                                                                  + resultatCalculeInfluence;
    };
};

function influenceCha() {
	var valeur = parseInt(document.form.cha_val.value);
    var resultatCalculeInfluence = calculeInfluence(valeur);

	document.getElementById('cha_mod').innerHTML=resultatCalculeInfluence;

    for (var i = 0; i < document.getElementsByClassName("carac_cha").length; i++) {
        if (isNaN(parseInt(document.getElementsByClassName("carac_cha")[i].innerHTML))) {
            var valeur = 0;
        } else {
            var valeur = parseInt(document.getElementsByClassName("carac_cha")[i].innerHTML);
        };

        document.getElementsByClassName("carac_cha")[i].innerHTML = valeur
                                                                  + resultatCalculeInfluence;
    };
};

function calculeInfluence(valeur) {
		var modificateur = Math.round((valeur - 11)/2);
		return modificateur;
};

function calculeCa() {
	var valeur = parseInt(document.getElementById('ca_arm_base').innerHTML)
		+ parseInt(document.getElementById('ca_bon_arm').innerHTML)
        + parseInt(document.getElementById('ca_bon_bou').innerHTML)
        + parseInt(document.getElementById('ca_mod_dex').innerHTML)
        + parseInt(document.getElementById('ca_mod_tai').innerHTML)
        + parseInt(document.getElementById('ca_arm_nat').innerHTML)
        + parseInt(document.getElementById('ca_mod_par').innerHTML)
        + parseInt(document.getElementById('ca_mod_div').innerHTML);

 	return valeur;
};

function calculeCaContact() {
	var valeur = parseInt(document.getElementById('ca_arm_base').innerHTML)
        + parseInt(document.getElementById('ca_mod_dex').innerHTML)
        + parseInt(document.getElementById('ca_mod_tai').innerHTML)
        + parseInt(document.getElementById('ca_mod_par').innerHTML)
        + parseInt(document.getElementById('ca_mod_div').innerHTML);

 	return valeur;
};

function calculeCaPrisDepourvu() {
	var valeur = parseInt(document.getElementById('ca_arm_base').innerHTML)
		+ parseInt(document.getElementById('ca_bon_arm').innerHTML)
        + parseInt(document.getElementById('ca_bon_bou').innerHTML)
        + parseInt(document.getElementById('ca_mod_tai').innerHTML)
        + parseInt(document.getElementById('ca_arm_nat').innerHTML)
        + parseInt(document.getElementById('ca_mod_par').innerHTML)
        + parseInt(document.getElementById('ca_mod_div').innerHTML);

 	return valeur;
};

function CalculePv(bonusParNiveau) {
	var pvBase = 0;
	var niveau = 0;
	var pvNiv = 0;

	switch(document.form.classe.value) {
		case "Barbare" :
			/* Calcule premier niveau */
			pvBase = 12 + parseInt(bonusParNiveau);
			/* Calcule niveau suivant */
			niveau = parseInt(document.form.niveau.value) - 1;
			pvNiv = pvBase + Math.round(niveau * (6.5 + parseInt(bonusParNiveau)));
			break;
		case "Barde" :
			/* Calcule premier niveau */
			pvBase = 6 + parseInt(bonusParNiveau);
			/* Calcule niveau suivant */
			niveau = parseInt(document.form.niveau.value) - 1;
			pvNiv = pvBase + Math.round(niveau * (3.5 + parseInt(bonusParNiveau)));
			break;
		case "Druide" :
			/* Calcule premier niveau */
			pvBase = 8 + parseInt(bonusParNiveau);
			/* Calcule niveau suivant */
			niveau = parseInt(document.form.niveau.value) - 1;
			pvNiv = pvBase + Math.round(niveau * (4.5 + parseInt(bonusParNiveau)));
			break;
		case "Ensorceleur" :
			/* Calcule premier niveau */
			pvBase = 4 + parseInt(bonusParNiveau);
			/* Calcule niveau suivant */
			niveau = parseInt(document.form.niveau.value) - 1;
			pvNiv = pvBase + Math.round(niveau * (2.5 + parseInt(bonusParNiveau)));
			break;
		case "Guerrier" :
			/* Calcule premier niveau */
			pvBase = 10 + parseInt(bonusParNiveau);
			/* Calcule niveau suivant */
			niveau = parseInt(document.form.niveau.value) - 1;
			pvNiv = pvBase + Math.round(niveau * (5.5 + parseInt(bonusParNiveau)));
			break;
		case "Magicien" :
			/* Calcule premier niveau */
			pvBase = 4 + parseInt(bonusParNiveau);
			/* Calcule niveau suivant */
			niveau = parseInt(document.form.niveau.value) - 1;
			pvNiv = pvBase + Math.round(niveau * (2.5 + parseInt(bonusParNiveau)));
			break;
		case "Moine" :
			/* Calcule premier niveau */
			pvBase = 8 + parseInt(bonusParNiveau);
			/* Calcule niveau suivant */
			niveau = parseInt(document.form.niveau.value) - 1;
			pvNiv = pvBase + Math.round(niveau * (4.5 + parseInt(bonusParNiveau)));
			break;
		case "Paladin" :
			/* Calcule premier niveau */
			pvBase = 10 + parseInt(bonusParNiveau);
			/* Calcule niveau suivant */
			niveau = parseInt(document.form.niveau.value) - 1;
			pvNiv = pvBase + Math.round(niveau * (5.5 + parseInt(bonusParNiveau)));
			break;
		case "Prêtre" :
			/* Calcule premier niveau */
			pvBase = 8 + parseInt(bonusParNiveau);
			/* Calcule niveau suivant */
			niveau = parseInt(document.form.niveau.value) - 1;
			pvNiv = pvBase + Math.round(niveau * (4.5 + parseInt(bonusParNiveau)));
			break;
		case "Rôdeur" :
			/* Calcule premier niveau */
			pvBase = 8 + parseInt(bonusParNiveau);
			/* Calcule niveau suivant */
			niveau = parseInt(document.form.niveau.value) - 1;
			pvNiv = pvBase + Math.round(niveau * (4.5 + parseInt(bonusParNiveau)));
			break;
		case "Roublard" :
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
		case "00" :
			document.getElementById('red_deg').innerHTML = "0";
			break;
		case "01" :
			document.getElementById('red_deg').innerHTML = "0";
			break;
		case "02" :
			document.getElementById('red_deg').innerHTML = "0";
			break;
		case "03" :
			document.getElementById('red_deg').innerHTML = "0";
			break;
		case "04" :
			document.getElementById('red_deg').innerHTML = "0";
			break;
		case "05" :
			document.getElementById('red_deg').innerHTML = "0";
			break;
		case "06" :
			document.getElementById('red_deg').innerHTML = "0";
			break;
		case "07" :
			document.getElementById('red_deg').innerHTML = "-1";
			break;
		case "08" :
			document.getElementById('red_deg').innerHTML = "-1";
			break;
		case "09" :
			document.getElementById('red_deg').innerHTML = "-1";
			break;
		case "10" :
			document.getElementById('red_deg').innerHTML = "-2";
			break;
		case "11" :
			document.getElementById('red_deg').innerHTML = "-2";
			break;
		case "12" :
			document.getElementById('red_deg').innerHTML = "-2";
			break;
		case "13" :
			document.getElementById('red_deg').innerHTML = "-3";
			break;
		case "14" :
			document.getElementById('red_deg').innerHTML = "-3";
			break;
		case "15" :
			document.getElementById('red_deg').innerHTML = "-3";
			break;
		case "16" :
			document.getElementById('red_deg').innerHTML = "-4";
			break;
		case "17" :
			document.getElementById('red_deg').innerHTML = "-4";
			break;
		case "18" :
			document.getElementById('red_deg').innerHTML = "-4";
			break;
		case "19" :
			document.getElementById('red_deg').innerHTML = "-5";
			break;
		case "20" :
			document.getElementById('red_deg').innerHTML = "-5";
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

	document.getElementById('init_total').innerHTML = resultatCalculeInfluence
													+ parseInt(document.form.init_mod_div_val.value);
}

function calculeReflexes()  {
	/* si document.form.sau_bon_bas_ref.value n'est pas renseigné, 
	il n'est pas un number
	d'où son forçage à 0*/
	if (isNaN(parseInt(document.getElementById('sau_bon_bas_ref').innerHTML))) {
		document.getElementById('sau_bon_bas_ref').innerHTML = 0;
	};

	if (isNaN(parseInt(document.getElementById('sau_mod_car_ref').innerHTML))) {
		document.getElementById('sau_mod_car_ref').innerHTML = 0;
	};

	if (isNaN(parseInt(document.form.mod_tem_ref.value))) {
		document.form.mod_tem_ref.value = 0;
	};

	if (isNaN(parseInt(document.form.mod_part_ref.value))) {
		document.form.mod_part_ref.value = 0;
	};

	document.getElementById('sau_total_ref').innerHTML = parseInt(document.getElementById('sau_bon_bas_ref').innerHTML)
														+ parseInt(document.getElementById('sau_mod_car_ref').innerHTML)
														+ parseInt(document.form.mod_tem_ref.value)
														+ parseInt(document.form.mod_part_ref.value);
}

function calculeVigeur() {
	/* si document.form.sau_bon_bas_vig.value n'est pas renseigné, 
	il n'est pas un number
	d'où son forçage à 0*/
	if (isNaN(parseInt(document.getElementById('sau_bon_bas_vig').innerHTML))) {
		document.getElementById('sau_bon_bas_vig').innerHTML = 0;
	};

	if (isNaN(parseInt(document.getElementById('sau_mod_car_vig').innerHTML))) {
		document.getElementById('sau_mod_car_vig').innerHTML = 0;
	};

	if (isNaN(parseInt(document.form.mod_tem_vig.value))) {
		document.form.mod_tem_vig.value = 0;
	};

	if (isNaN(parseInt(document.form.mod_part_vig.value))) {
		document.form.mod_part_vig.value = 0;
	};

	document.getElementById('sau_total_vig').innerHTML = parseInt(document.getElementById('sau_bon_bas_vig').innerHTML)
														+ parseInt(document.getElementById('sau_mod_car_vig').innerHTML)
														+ parseInt(document.form.mod_tem_vig.value)
														+ parseInt(document.form.mod_part_vig.value);
}

function calculeVolonte()  {
	/* si document.form.sau_bon_bas_vol.value n'est pas renseigné, 
	il n'est pas un number
	d'où son forçage à 0*/
	if (isNaN(parseInt(document.getElementById('sau_bon_bas_vol').innerHTML))) {
		document.getElementById('sau_bon_bas_vol').innerHTML = 0;
	};

	if (isNaN(parseInt(document.getElementById('sau_mod_car_vol').innerHTML))) {
		document.getElementById('sau_mod_car_vol').innerHTML = 0;
	};

	if (isNaN(parseInt(document.form.mod_tem_vol.value))) {
		document.form.mod_tem_vol.value = 0;
	};

	if (isNaN(parseInt(document.form.mod_part_vol.value))) {
		document.form.mod_part_vol.value = 0;
	};

	document.getElementById('sau_total_vol').innerHTML = parseInt(document.getElementById('sau_bon_bas_vol').innerHTML)
														+ parseInt(document.getElementById('sau_mod_car_vol').innerHTML)
														+ parseInt(document.form.mod_tem_vol.value)
														+ parseInt(document.form.mod_part_vol.value);
}

function calculeLutte() {
	/* si document.form.lut_bon_bas_att.value n'est pas renseigné, 
	il n'est pas un number
	d'où son forçage à 0*/
	if (isNaN(parseInt(document.getElementById('lut_bon_bas_att').innerHTML))) {
		document.getElementById('lut_bon_bas_att').innerHTML = 0;
	};

	if (isNaN(parseInt(document.getElementById('lut_mod_for').innerHTML))) {
		document.getElementById('lut_mod_for').innerHTML = 0;
	};

	document.getElementById('lut_total').innerHTML = parseInt(document.getElementById('lut_bon_bas_att').innerHTML)
													+ parseInt(document.getElementById('lut_mod_for').innerHTML);
}

function calculeCompetence(total,carac,maîtrise,divers) {
    document.getElementById(total).innerHTML 
                                            = parseInt(document.getElementById(carac).innerHTML)
                                            + parseInt(maîtrise.value)
                                            + parseInt(divers.value);
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
        case " " :
            break;
        case "Barbare" :
            nombreAutorisé = (4 + parseInt(document.getElementById('int_mod').innerHTML)) * (parseInt(document.form.niveau.value) + 3);
            if (document.form.race.value == "Humain") {nombreAutorisé = nombreAutorisé + parseInt(document.form.niveau.value) + 3};
            testCalculeSommeCompetencesII(total,nombreAutorisé);
            break;
        case "Barde" :
            nombreAutorisé = (6 + parseInt(document.getElementById('int_mod').innerHTML)) * (parseInt(document.form.niveau.value) + 3);
            if (document.form.race.value == "Humain") {nombreAutorisé = nombreAutorisé + parseInt(document.form.niveau.value) + 3};
            testCalculeSommeCompetencesII(total,nombreAutorisé);
            break;
        case "Druide" :
            nombreAutorisé = (4 + parseInt(document.getElementById('int_mod').innerHTML)) * (parseInt(document.form.niveau.value) + 3);
            if (document.form.race.value == "Humain") {nombreAutorisé = nombreAutorisé + parseInt(document.form.niveau.value) + 3};
            testCalculeSommeCompetencesII(total,nombreAutorisé);
            break;
        case "Ensorceleur" :
            nombreAutorisé = (2 + parseInt(document.getElementById('int_mod').innerHTML)) * (parseInt(document.form.niveau.value) + 3);
            if (document.form.race.value == "Humain") {nombreAutorisé = nombreAutorisé + parseInt(document.form.niveau.value) + 3};
            testCalculeSommeCompetencesII(total,nombreAutorisé);
            break;
        case "Guerrier" :
            nombreAutorisé = (2 + parseInt(document.getElementById('int_mod').innerHTML)) * (parseInt(document.form.niveau.value) + 3);
            if (document.form.race.value == "Humain") {nombreAutorisé = nombreAutorisé + parseInt(document.form.niveau.value) + 3};
            testCalculeSommeCompetencesII(total,nombreAutorisé);
            break;
        case "Magicien" :
            nombreAutorisé = (2 + parseInt(document.getElementById('int_mod').innerHTML)) * (parseInt(document.form.niveau.value) + 3);
            if (document.form.race.value == "Humain") {nombreAutorisé = nombreAutorisé + parseInt(document.form.niveau.value) + 3};
            testCalculeSommeCompetencesII(total,nombreAutorisé);
            break;
        case "Moine" :
            nombreAutorisé = (4 + parseInt(document.getElementById('int_mod').innerHTML)) * (parseInt(document.form.niveau.value) + 3);
            if (document.form.race.value == "Humain") {nombreAutorisé = nombreAutorisé + parseInt(document.form.niveau.value) + 3};
            testCalculeSommeCompetencesII(total,nombreAutorisé);
            break;
        case "Paladin" :
            nombreAutorisé = (2 + parseInt(document.getElementById('int_mod').innerHTML)) * (parseInt(document.form.niveau.value) + 3);
            if (document.form.race.value == "Humain") {nombreAutorisé = nombreAutorisé + parseInt(document.form.niveau.value) + 3};            
            testCalculeSommeCompetencesII(total,nombreAutorisé);
            break;
        case "Prêtre" :
            nombreAutorisé = (2 + parseInt(document.getElementById('int_mod').innerHTML)) * (parseInt(document.form.niveau.value) + 3);
            if (document.form.race.value == "Humain") {nombreAutorisé = nombreAutorisé + parseInt(document.form.niveau.value) + 3};            
            testCalculeSommeCompetencesII(total,nombreAutorisé);
            break;
        case "Rôdeur" :
            nombreAutorisé = (6 + parseInt(document.getElementById('int_mod').innerHTML)) * (parseInt(document.form.niveau.value) + 3);
            if (document.form.race.value == "Humain") {nombreAutorisé = nombreAutorisé + parseInt(document.form.niveau.value) + 3};
            testCalculeSommeCompetencesII(total,nombreAutorisé);
            break;
        case "Roublard" :
            nombreAutorisé = (8 + parseInt(document.getElementById('int_mod').innerHTML)) * (parseInt(document.form.niveau.value) + 3);
            if (document.form.race.value == "Humain") {nombreAutorisé = nombreAutorisé + parseInt(document.form.niveau.value) + 3};
            testCalculeSommeCompetencesII(total,nombreAutorisé);
            break;
    }
}

function testCalculeSommeCompetencesI(competencesI,competencesII) {
    var valeur = 0;

    if (document.getElementById(competencesI).innerHTML == "O") {
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
        alert("Le total des points des competences est supérieur de " + valeur + ", sur le nombre autorisé.");
    } else {
        if (total < nombreAutorisé) {
            valeur = nombreAutorisé - total;
            alert("Il reste " + valeur + " de point de compétence à utiliser.");
        } else {
            alert("Répartition des " + total + " points de competences parfaite.");
        };
    };
}

function affichageArtisanat(artisanatType) {
    var artisanatTableau = new Array();

    artisanatTableau = [" ","Alchimie","Calligraphie","Cordonnerie","Fabrication d'arcs","Fabrication d'armes","Fabrication d'armures",
                        "Fabrication de navires","Fabrication de pièges","Ferronerie","Maroquinerie","Maçonnerie","Peinture","Poterie",
                        "Reliure","Sculture","Serrurerie","Taille des gemmes","Travail du bois","Travail de la forge","Travaux de charpente",
                        "Tissage","Vanerie"];

    for (var nombElement = 0; nombElement < artisanatTableau.length; nombElement++) {
        artisanatType.options[nombElement] = new Option(artisanatTableau[nombElement],artisanatTableau[nombElement]);
    };
}

function affichageConnaissance(connaissanceType) {
    var connaissanceTableau = new Array();

    connaissanceTableau = [" ","Archi. et ingé.","Explo. sousterraine","Folklore local","Géographie","Histoire","Mystères","Nature",
                            "Noblesse","Plans","Religion"];

    for (var nombElement = 0; nombElement < connaissanceTableau.length; nombElement++) {
        connaissanceType.options[nombElement] = new Option(connaissanceTableau[nombElement],connaissanceTableau[nombElement]);
    };
}

function affichageProfession(professionType) {
    var professionTableau = new Array();

    professionTableau = [" ","Apothicaire","Berger","Brasseur","Bûcheron","Canotier","Chasseur","Conducteur d'attelage","Cuisinier",
                        "Eleveur","Fermier","Garçon d'ecutie","Guide","Herboriste","Ingénieur de siège","Libraire","Marin","Meunier",
                        "Mineur ","Pêcheur","Porteur","Scibe","Taneur","Tavernier"];


    for (var nombElement = 0; nombElement < professionTableau.length; nombElement++) {
        professionType.options[nombElement] = new Option(professionTableau[nombElement],professionTableau[nombElement]);
    };
}

function affichageReprésentation(représentationType) {
    var représentationTableau = new Array();

    représentationTableau = [" ","Chant","Danse","Déclamation","Farce","Instrument à clavier","Instrument à cordes","Instrument à vent",
                            "Percussion","Scène"];


    for (var nombElement = 0; nombElement < représentationTableau.length; nombElement++) {
        représentationType.options[nombElement] = new Option(représentationTableau[nombElement],représentationTableau[nombElement]);
    };
}

function affichageObjet(objet) {
    var objetTableau = new Array();

    objetTableau = [" ","Arbalètre de poing","Arbalètre légère à répétition","Arbalètre légère","Arbalètre lourde à répétition",
                    "Arbalètre lourde","Arc court composite","Arc court","Arc long composite","Arc long","Armure à pointes",
                    "Attaque à mains nues","Bâton","Bolas","Chaîne cloutée","Cimeterre à deux mains","Cimeterre","Corsèque",
                    "Coutille","Dague coup-de-poing","Dague","Dart","Double-lame","Ecu à pointes","Ecu","Epée à deux mains",
                    "Epée batarde","Epée courte","Epée longue","Epieu","Faux","Filet","Fléau d'arme léger","Fléau d'armes lourd",
                    "Fléau double","Fouet","Fronde","Gantelet clouté","Gantelet","Gourdin","Grande hache","Guisarme","Hache d'arme",
                    "Hache de guerre naine","Hache de lancer","Hache double orque","Hachette","Kukri","Hallebarde","Javeline","Kama",
                    "Lance d'arçon","Lance","Marteau de guerre","Marteau léger","Marteau-piolet gnome","Masse d'armes légère",
                    "Masse d'armes lourde","Massue","Matraque","Morgenstern","Nunchaku","Pic de guerre léger","Pique","Pis de guerre lourd",
                    "Rapière","Rondache à pointes","Rondache","Sai","Serpe","Shuriken","Siangham","Trident","Urgrosh nain",
                    " ","Armure matelassée","Armure de cuir","Armure de cuir cloutée","Chemise de mailles","Armure de peau","Armure d'écailles",
                    "Cotte de mailles","Cuirasse","Clibanion","Crevice","Armure à plaques","Harnois",
                    "","Aiguille à coudre","Acide (flasque)","Allume-feu","Antidote (fiole)","Bâton éclairant","Bâton fumigène","Bélier portable","Bois de chauffage","Bougie","Bouteille de vin en verre","Cadenas trés simple",
                    "Cadenas moyen","Cadenas bon","Cadenas excellent","Chaîne 3m","Chausse-trappes","Chevalière","Chope en terre cuite",
                    "Cire à cacheter","Cloche","Coffre vide","Corde en chanvre, 15m","Corde en soie, 15m","Couverture hiver","Craie, morceau",
                    "Cruche en terre cuite","Eau bénite","Echelle","Encre, la fiole","Etui","Feu grégeois","Filet de pêche, 2,5m²","Fiole","Flasque (vide)","Grappin",
                    "Hameçon","Huile, la flasque","Jarre en terre cuite","Lampe","Lanterne à capote","Lanterne sourde","Longue-vue","Marteau",
                    "Masse","Menottes","Menottes de qualité supérieur","Outre","Paillasse","Palan","Panier (vide)","Papier, la feuille",
                    "Parchemin, la feuille","Pelle","Perche, 3m","Petit miroir en acier","Pied-de-biche","Pierre à tonnerre","Pioche de mineur","Piton",
                    "Plume d'écriture","Pot en fer","Ration de survie","Sac (vide)","Sac à dos (vide)","Sacoche de ceinture","Sacoche immobilisante","Savon, 1 livre",
                    "Sceau (vide)","Sifflet","Silex en amorce","Tente","Toile","Tonneau","Torche","Torche éternelle"];

    for (var nombElement = 0; nombElement < objetTableau.length; nombElement++) {
        objet.options[nombElement] = new Option(objetTableau[nombElement],objetTableau[nombElement]);
    };
}

function affichageEmplacement(emplacement) {
    var emplacementTableau = new Array();

    emplacementTableau = [" ","Sur la tête","Devant les yeux","Autour du cou","Sur le torse","Sur le corps","Autour de la taille",
                            "Sur les épaules","Sur les bras ou les poignets","Aux mains","Aux doigts (un sur chaque main)","Aux pieds",
                            ,"Dans un foureau","Sac à dos"];

    for (var nombElement = 0; nombElement < emplacementTableau.length; nombElement++) {
        emplacement.options[nombElement] = new Option(emplacementTableau[nombElement],emplacementTableau[nombElement]);
    };
}

function affichagePoids(poids) {
    var poidsTableau = new Array();

    poidsTableau = ["0g","250g","500g","1kg","1,5kg","2kg","2,5kg","3kg","3,5kg","4kg","4,5kg","5kg","5,5kg","6kg","6,5kg","7kg","7,5kg",
                    "8kg","8,5kg","9kg","9,5kg","10kg","10,5kg","11kg","11,5kg","12kg","12,5kg","13kg","13,5kg","14kg","14,5kg","15kg",
                    "15,5kg","16kg","16,5kg","17kg","17,5kg","18kg","18,5kg","19kg","19,5kg","20kg","20,5kg","21kg","21,5kg","22kg","22,5kg"];

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

    document.getElementById('poidsTotalPorte').innerHTML = totalPoids + "kg";
}

function addPoids(poids) {
    switch (poids.value) {
        case "0g"     : return  0.000; break;
        case "250g"   : return  0.250; break;
        case "500g"   : return  0.500; break;
        case "1kg"    : return  1.000; break;
        case "1,5kg"  : return  1.500; break;
        case "2kg"    : return  2.000; break;
        case "2,5kg"  : return  2.500; break;
        case "3kg"    : return  3.000; break;
        case "3,5kg"  : return  3.500; break;
        case "4kg"    : return  4.000; break;
        case "4,5kg"  : return  4.500; break;
        case "5kg"    : return  5.000; break;
        case "5,5kg"  : return  5.500; break;
        case "6kg"    : return  6.000; break;
        case "6,5kg"  : return  6.500; break;
        case "7kg"    : return  7.000; break;
        case "7,5kg"  : return  7.500; break;
        case "8kg"    : return  8.000; break;
        case "8,5kg"  : return  8.500; break;
        case "9kg"    : return  9.000; break;
        case "9,5kg"  : return  9.500; break;
        case "10kg"   : return 10.000; break;
        case "10,5kg" : return 10.500; break;
        case "11kg"   : return 11.000; break;
        case "11,5kg" : return 11.500; break;
        case "12kg"   : return 12.000; break;
        case "12,5kg" : return 12.500; break;
        case "13kg"   : return 13.000; break;
        case "13,5kg" : return 13.500; break;
        case "14kg"   : return 14.000; break;
        case "14,5kg" : return 14.500; break;
        case "15kg"   : return 15.000; break;
        case "15,5kg" : return 15.500; break;
        case "16kg"   : return 16.000; break;
        case "16,5kg" : return 16.500; break;
        case "17kg"   : return 17.000; break;
        case "17,5kg" : return 17.500; break;
        case "18kg"   : return 18.000; break;
        case "18,5kg" : return 18.500; break;
        case "19kg"   : return 19.000; break;
        case "19,5kg" : return 19.500; break;
        case "20kg"   : return 20.000; break;
        case "20,5kg" : return 20.500; break;
        case "21kg"   : return 21.000; break;
        case "21,5kg" : return 21.500; break;
        case "22kg"   : return 22.000; break;
        case "22,5kg" : return 22.500; break;
    };
}

function affichageLangues(langues) {
    var languesTableau = new Array();

    languesTableau = [" ","Abyssale","Aérienne","Aquatique","Céleste","Commune","Commune des profondeurs","Draconien","Druides","Elfique",
                      "Géants","Gnoll","Gnome","Gobeline","Halfeline","Igneuse","Infernale","Nains","Orque","Sylvestre","Terreuse"];

    for (var nombElement = 0; nombElement < languesTableau.length; nombElement++) {
        langues.options[nombElement] = new Option(languesTableau[nombElement],languesTableau[nombElement]);
    };
}

function affichageDon(don) {
    var donTableau = new Array();

    donTableau = [" ","Affinité magique","Amélioration des créatures convoquées","Arme de prédilection","Arme de prédilection supérieure",
                "Arme en main","Athlétisme","Attaque au galop","Attaque éclair","Attaque en finesse","Attaque en puissance","Attaque en rotation",
                "Attaques réflexes","Autonome","Charge dévastatrice","Combat à deux armes","Combat en aveugle","Combat monté","Coup étourdissant",
                "Course","Défense à deux armes","Discret","Dispense de composants matériels","Doigts de fée","Dur à cuire","Ecole renforcée",
                "Ecole supérieure","Efficacité des sorts accrue","Efficacité des sorts supérieure","Emprise sur les morts vivants","Enchaînement",
                "Endurance","Esquive","Expertise du combat","Feu nourri","Fin limier","Fourberie","Fraternité animale","Funambule","Incantation animale",
                "Interception de projectile","Magie de guerre","Maîtrise des sorts","Maîtrise du combat à deux armes","Maniement d'une arme de guerre",
                "Maniement d'une arme exotique","Maniement des armes courantes","Maniement des boucliers","Maniement du pavois","Méticuleux",
                "Négociation","Parade de projectiles","Persuasion","Piétinement","Pistage","Port des armures intermédiaires","Port des armures légères",
                "Port des armures lourdes","Prestige","Rechargement rapide","Réflexes surhumains","Robustesse","Savoir faire mécanique",
                "Science de la destruction","Science de l'initiative","Science de la bousculade","Science de la feinte","Science de la lutte",
                "Science du combat à deux armes","Science du combat à mains nues","Science du contresort","Science du coup de bouclier",
                "Science du critique","Science du croc en jambe","Science du désarmement","Science du renversement","Science du renvoi",
                "Science du tir de précision","Souplesse du serpent","Spécialisation martiale","Spécialisation martiale supérieure","Succession d'enchaînements",
                "Talent","Tir à bout portant","Tir de loin","Tir de précision","Tir en mouvement","Tir monté","Tir rapide","Vigilance",
                "Vigueur surhumaine","Volonté de fer","Voltigeur"]

    for (var nombElement = 0; nombElement < donTableau.length; nombElement++) {
        don.options[nombElement] = new Option(donTableau[nombElement],donTableau[nombElement]);
    };
}

function affichageEcoles(ecole) {
    var ecoleTableau = new Array();

    ecoleTableau = [" ","Abjuration","Divination","Enchantement","Evocation","Illusion","Invocation","Nécromantie","Transmutation"];

    for (var nombElement = 0; nombElement < ecoleTableau.length; nombElement++) {
        ecole.options[nombElement] = new Option(ecoleTableau[nombElement],ecoleTableau[nombElement]);
    };
}

function controlePointsExperience() {
    switch(document.form.niveau.value) {
        case "00" :
            alert("Erreur sur le niveau, veuillez rentrer un niveau.");
            break;
        case "01" :
            if (!((0 <= document.form.points_experience.value) && (document.form.points_experience.value < 1000))) {
                alert("Erreur sur les points expériences, veuillez rentrer un nombre entre 0 et 999.");
            };
            break;
        case "02" :
            if (!((1000 <= document.form.points_experience.value) && (document.form.points_experience.value < 3000))) {
                alert("Erreur sur les points expériences, veuillez rentrer un nombre entre 1000 et 2999.");
            };
            break;
        case "03" :
            if (!((3000 <= document.form.points_experience.value) && (document.form.points_experience.value < 6000))) {
                alert("Erreur sur les points expériences, veuillez rentrer un nombre entre 3000 et 5999.");
            };
            break;
        case "04" :
            if (!((6000 <= document.form.points_experience.value) && (document.form.points_experience.value < 10000))) {
                alert("Erreur sur les points expériences, veuillez rentrer un nombre entre 6000 et 9999.");
            };
            break;
        case "05" :
            if (!((10000 <= document.form.points_experience.value) && (document.form.points_experience.value < 15000))) {
                alert("Erreur sur les points expériences, veuillez rentrer un nombre entre 10000 et 14999.");
            };
            break;
        case "06" :
            if (!((15000 <= document.form.points_experience.value) && (document.form.points_experience.value < 21000))) {
                alert("Erreur sur les points expériences, veuillez rentrer un nombre entre 15000 et 20999.");
            };
            break;
        case "07" :
            if (!((21000 <= document.form.points_experience.value) && (document.form.points_experience.value < 28000))) {
                alert("Erreur sur les points expériences, veuillez rentrer un nombre entre 21000 et 27999.");
            };
            break;
        case "08" :
            if (!((28000 <= document.form.points_experience.value) && (document.form.points_experience.value < 36000))) {
                alert("Erreur sur les points expériences, veuillez rentrer un nombre entre 28000 et 35999.");
            };
            break;
        case "09" :
            if (!((36000 <= document.form.points_experience.value) && (document.form.points_experience.value < 45000))) {
                alert("Erreur sur les points expériences, veuillez rentrer un nombre entre 36000 et 44999.");
            };
            break;
        case "10" :
            if (!((45000 <= document.form.points_experience.value) && (document.form.points_experience.value < 55000))) {
                alert("Erreur sur les points expériences, veuillez rentrer un nombre entre 45000 et 54999.");
            };
            break;
        case "11" :
            if (!((55000 <= document.form.points_experience.value) && (document.form.points_experience.value < 66000))) {
                alert("Erreur sur les points expériences, veuillez rentrer un nombre entre 55000 et 65999.");
            };
            break;
        case "12" :
            if (!((66000 <= document.form.points_experience.value) && (document.form.points_experience.value < 78000))) {
                alert("Erreur sur les points expériences, veuillez rentrer un nombre entre 66000 et 77999.");
            };
            break;
        case "13" :
            if (!((78000 <= document.form.points_experience.value) && (document.form.points_experience.value < 91000))) {
                alert("Erreur sur les points expériences, veuillez rentrer un nombre entre 78000 et 90999.");
            };
            break;
        case "14" :
            if (!((91000 <= document.form.points_experience.value) && (document.form.points_experience.value < 105000))) {
                alert("Erreur sur les points expériences, veuillez rentrer un nombre entre 91000 et 104999.");
            };
            break;
        case "15" :
            if (!((105000 <= document.form.points_experience.value) && (document.form.points_experience.value < 120000))) {
                alert("Erreur sur les points expériences, veuillez rentrer un nombre entre 105000 et 119999.");
            };
            break;
        case "16" :
            if (!((120000 <= document.form.points_experience.value) && (document.form.points_experience.value < 136000))) {
                alert("Erreur sur les points expériences, veuillez rentrer un nombre entre 120000 et 135999.");
            };
            break;
        case "17" :
            if (!((136000 <= document.form.points_experience.value) && (document.form.points_experience.value < 153000))) {
                alert("Erreur sur les points expériences, veuillez rentrer un nombre entre 136000 et 152999.");
            };
            break;
        case "18" :
            if (!((153000 <= document.form.points_experience.value) && (document.form.points_experience.value < 171000))) {
                alert("Erreur sur les points expériences, veuillez rentrer un nombre entre 153000 et 170999.");
            };
            break;
        case "19" :
            if (!((171000 <= document.form.points_experience.value) && (document.form.points_experience.value < 190000))) {
                alert("Erreur sur les points expériences, veuillez rentrer un nombre entre 171000 et 189999.");
            };
            break;
        case "20" :
            if (!((190000 <= document.form.points_experience.value) && (document.form.points_experience.value < 210000))) {
                alert("Erreur sur les points expériences, veuillez rentrer un nombre entre 190000 et 209999.");
            };
            break;
    }
}

function affichageArmure(armure) {
    var armureTableau = new Array();

    armureTableau = [" ","Armure matelassée","Armure de cuir","Armure de cuir cloutée","Chemise de mailles","Armure de peau","Armure d'écailles",
                    "Cotte de mailles","Cuirasse","Clibanion","Crevice","Armure à plaques","Harnois"];

    for (var nombElement = 0; nombElement < armureTableau.length; nombElement++) {
        armure.options[nombElement] = new Option(armureTableau[nombElement],armureTableau[nombElement]);
    };
};

function affichageBouclier(bouclier) {
    var bouclierTableau = new Array();

    bouclierTableau = [" ","Targe","Rondache en bois","Rondache en acier","Ecu en bois","Ecu en acier","Pavois"];

    for (var nombElement = 0; nombElement < bouclierTableau.length; nombElement++) {
        bouclier.options[nombElement] = new Option(bouclierTableau[nombElement],bouclierTableau[nombElement]);
    };
};

function affichageProtection(protection) {
    var protectionTableau = new Array();

    protectionTableau = [" ","anneau"];

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
        case "Armure matelassée" :
            document.getElementById('bonus_CA_armure').innerHTML = 1 + bonus_armure;
            document.getElementById('dex_max').innerHTML = +8;
            document.getElementById('malus_aux_test_armure').innerHTML = +0;
            document.getElementById('echec_sorts_armure').innerHTML = "5%";
            document.getElementById('vitesse_armure').innerHTML = "9/6m";
            document.getElementById('poids_armure').innerHTML = "5kg";
            break;
        case "Armure de cuir" :
            document.getElementById('bonus_CA_armure').innerHTML = 2 + bonus_armure;
            document.getElementById('dex_max').innerHTML = +6;
            document.getElementById('malus_aux_test_armure').innerHTML = +0;
            document.getElementById('echec_sorts_armure').innerHTML = "10%";
            document.getElementById('vitesse_armure').innerHTML = "9/6m";
            document.getElementById('poids_armure').innerHTML = "7,5kg";
            break;
        case "Armure de cuir cloutée" :
            document.getElementById('bonus_CA_armure').innerHTML = 3 + bonus_armure;
            document.getElementById('dex_max').innerHTML = +5;
            document.getElementById('malus_aux_test_armure').innerHTML = -1;
            if (bonus_armure > 0) {
                document.getElementById('malus_aux_test_armure').innerHTML = parseInt(document.getElementById('malus_aux_test_armure').innerHTML) + 1;
            };
            document.getElementById('echec_sorts_armure').innerHTML = "15%";
            document.getElementById('vitesse_armure').innerHTML = "9/6m";
            document.getElementById('poids_armure').innerHTML = "10kg";
            break;
        case "Chemise de mailles" :
            document.getElementById('bonus_CA_armure').innerHTML = 4 + bonus_armure;
            document.getElementById('dex_max').innerHTML = +4;
            document.getElementById('malus_aux_test_armure').innerHTML = -2;
            if (bonus_armure > 0) {
                document.getElementById('malus_aux_test_armure').innerHTML = parseInt(document.getElementById('malus_aux_test_armure').innerHTML) + 1;
            };
            document.getElementById('echec_sorts_armure').innerHTML = "20%";
            document.getElementById('vitesse_armure').innerHTML = "9/6m";
            document.getElementById('poids_armure').innerHTML = "12,5kg";
            break;
        case "Armure de peau" :
            document.getElementById('bonus_CA_armure').innerHTML = 3 + bonus_armure;
            document.getElementById('dex_max').innerHTML = +4;
            document.getElementById('malus_aux_test_armure').innerHTML = -3;
            if (bonus_armure > 0) {
                document.getElementById('malus_aux_test_armure').innerHTML = parseInt(document.getElementById('malus_aux_test_armure').innerHTML) + 1;
            };
            document.getElementById('echec_sorts_armure').innerHTML = "20%";
            document.getElementById('vitesse_armure').innerHTML = "6/4,5m";
            vitesseArmureLourde();
            document.getElementById('poids_armure').innerHTML = "12,5kg";
            break;
        case "Armure d'écailles" :
            document.getElementById('bonus_CA_armure').innerHTML = 4 + bonus_armure;
            document.getElementById('dex_max').innerHTML = +3;
            document.getElementById('malus_aux_test_armure').innerHTML = -4;
            if (bonus_armure > 0) {
                document.getElementById('malus_aux_test_armure').innerHTML = parseInt(document.getElementById('malus_aux_test_armure').innerHTML) + 1;
            };
            document.getElementById('echec_sorts_armure').innerHTML = "25%";
            document.getElementById('vitesse_armure').innerHTML = "6/4,5m";
            vitesseArmureLourde();
            document.getElementById('poids_armure').innerHTML = "15kg";
            break;
        case "Cotte de mailles" :
            document.getElementById('bonus_CA_armure').innerHTML = 5 + bonus_armure;
            document.getElementById('dex_max').innerHTML = +2;
            document.getElementById('malus_aux_test_armure').innerHTML = -5;
            if (bonus_armure > 0) {
                document.getElementById('malus_aux_test_armure').innerHTML = parseInt(document.getElementById('malus_aux_test_armure').innerHTML) + 1;
            };
            document.getElementById('echec_sorts_armure').innerHTML = "30%";
            document.getElementById('vitesse_armure').innerHTML = "6/4,5m";
            vitesseArmureLourde();
            document.getElementById('poids_armure').innerHTML = "20kg";
            break;
        case "Cuirasse" :
            document.getElementById('bonus_CA_armure').innerHTML = 5 + bonus_armure;
            document.getElementById('dex_max').innerHTML = +4;
            document.getElementById('malus_aux_test_armure').innerHTML = -4;
            if (bonus_armure > 0) {
                document.getElementById('malus_aux_test_armure').innerHTML = parseInt(document.getElementById('malus_aux_test_armure').innerHTML) + 1;
            };
            document.getElementById('echec_sorts_armure').innerHTML = "25%";
            document.getElementById('vitesse_armure').innerHTML = "6/4,5m";
            vitesseArmureLourde();
            document.getElementById('poids_armure').innerHTML = "15kg";
            break;
        case "Clibanion" :
            document.getElementById('bonus_CA_armure').innerHTML = 6 + bonus_armure;
            document.getElementById('dex_max').innerHTML = +0;
            document.getElementById('malus_aux_test_armure').innerHTML = -7;
            if (bonus_armure > 0) {
                document.getElementById('malus_aux_test_armure').innerHTML = parseInt(document.getElementById('malus_aux_test_armure').innerHTML) + 1;
            };
            document.getElementById('echec_sorts_armure').innerHTML = "40%";
            document.getElementById('vitesse_armure').innerHTML = "6/4,5m";
            vitesseArmureLourde();
            document.getElementById('poids_armure').innerHTML = "22,5kg";
            break;
        case "Crevice" :
            document.getElementById('bonus_CA_armure').innerHTML = 6 + bonus_armure;
            document.getElementById('dex_max').innerHTML = +1;
            document.getElementById('malus_aux_test_armure').innerHTML = -6;
            if (bonus_armure > 0) {
                document.getElementById('malus_aux_test_armure').innerHTML = parseInt(document.getElementById('malus_aux_test_armure').innerHTML) + 1;
            };
            document.getElementById('echec_sorts_armure').innerHTML = "35%";
            document.getElementById('vitesse_armure').innerHTML = "6/4,5m";
            vitesseArmureLourde();
            document.getElementById('poids_armure').innerHTML = "17,5kg";
            break;
        case "Armure à plaques" :
            document.getElementById('bonus_CA_armure').innerHTML = 7 + bonus_armure;
            document.getElementById('dex_max').innerHTML = +0;
            document.getElementById('malus_aux_test_armure').innerHTML = -7;
            if (bonus_armure > 0) {
                document.getElementById('malus_aux_test_armure').innerHTML = parseInt(document.getElementById('malus_aux_test_armure').innerHTML) + 1;
            };
            document.getElementById('echec_sorts_armure').innerHTML = "40%";
            document.getElementById('vitesse_armure').innerHTML = "6/4,5m";
            vitesseArmureLourde();
            document.getElementById('poids_armure').innerHTML = "25kg";
            break;
        case "Harnois" :
            document.getElementById('bonus_CA_armure').innerHTML = 8 + bonus_armure;
            document.getElementById('dex_max').innerHTML = +1;
            document.getElementById('malus_aux_test_armure').innerHTML = -6;
            if (bonus_armure > 0) {
                document.getElementById('malus_aux_test_armure').innerHTML = parseInt(document.getElementById('malus_aux_test_armure').innerHTML) + 1;
            };
            document.getElementById('echec_sorts_armure').innerHTML = "35%";
            document.getElementById('vitesse_armure').innerHTML = "6/4,5m";
            vitesseArmureLourde();
            document.getElementById('poids_armure').innerHTML = "25kg";
            break;
    };

    document.getElementById('ca_bon_arm').innerHTML = document.getElementById('bonus_CA_armure').innerHTML;

    if (document.getElementById('dex_max').innerHTML < document.getElementById('ca_mod_dex').innerHTML) {
        document.getElementById('ca_mod_dex').innerHTML = document.getElementById('dex_max').innerHTML;
    };

    document.getElementById('ca_total').innerHTML=calculeCa();
    document.getElementById('val_ca_contact').innerHTML=calculeCaContact();
    document.getElementById('val_pri_depourvu').innerHTML=calculeCaPrisDepourvu();
}

function vitesseArmureLourde() {
    document.getElementById('vit').innerHTML = "6m";

    switch(document.form.race.value) {
        case "Gnome" :
            document.getElementById('vit').innerHTML = "4,5m";
            break;
        case "Halfelin" :
            document.getElementById('vit').innerHTML = "4,5m";
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
        case "Targe" :
            document.getElementById('bonus_CA_bouclier').innerHTML = 1 + bonus_bouclier;
            document.getElementById('poids_bouclier').innerHTML = "2,5kg";
            document.getElementById('malus_aux_tests_bouclier').innerHTML = -1;
            if (bonus_bouclier > 0) {
                document.getElementById('malus_aux_tests_bouclier').innerHTML = parseInt(document.getElementById('malus_aux_tests_bouclier').innerHTML) + 1;
            };
            document.getElementById('echec_sorts_bouclier').innerHTML = "5%";
            break;
        case "Rondache en bois" :
            document.getElementById('bonus_CA_bouclier').innerHTML = 1 + bonus_bouclier;
            document.getElementById('poids_bouclier').innerHTML = "2,5kg";
            document.getElementById('malus_aux_tests_bouclier').innerHTML = -1;
            if (bonus_bouclier > 0) {
                document.getElementById('malus_aux_tests_bouclier').innerHTML = parseInt(document.getElementById('malus_aux_tests_bouclier').innerHTML) + 1;
            };
            document.getElementById('echec_sorts_bouclier').innerHTML = "5%";
            break;
        case "Rondache en acier" :
            document.getElementById('bonus_CA_bouclier').innerHTML = 1 + bonus_bouclier;
            document.getElementById('poids_bouclier').innerHTML = "3kg";
            document.getElementById('malus_aux_tests_bouclier').innerHTML = -1;
            if (bonus_bouclier > 0) {
                document.getElementById('malus_aux_tests_bouclier').innerHTML = parseInt(document.getElementById('malus_aux_tests_bouclier').innerHTML) + 1;
            };
            document.getElementById('echec_sorts_bouclier').innerHTML = "5%";
            break;
        case "Ecu en bois" :
            document.getElementById('bonus_CA_bouclier').innerHTML = 2 + bonus_bouclier;
            document.getElementById('poids_bouclier').innerHTML = "5kg";
            document.getElementById('malus_aux_tests_bouclier').innerHTML = -2;
            if (bonus_bouclier > 0) {
                document.getElementById('malus_aux_tests_bouclier').innerHTML = parseInt(document.getElementById('malus_aux_tests_bouclier').innerHTML) + 1;
            };
            document.getElementById('echec_sorts_bouclier').innerHTML = "15%";
            break;
        case "Ecu en acier" :
            document.getElementById('bonus_CA_bouclier').innerHTML = 2 + bonus_bouclier;
            document.getElementById('poids_bouclier').innerHTML = "7,5kg";
            document.getElementById('malus_aux_tests_bouclier').innerHTML = -2;
            if (bonus_bouclier > 0) {
                document.getElementById('malus_aux_tests_bouclier').innerHTML = parseInt(document.getElementById('malus_aux_tests_bouclier').innerHTML) + 1;
            };
            document.getElementById('echec_sorts_bouclier').innerHTML = "15%";
            break;
        case "Pavois" :
            document.getElementById('bonus_CA_bouclier').innerHTML = 4 + bonus_bouclier;
            document.getElementById('poids_bouclier').innerHTML = "22kg";
            document.getElementById('malus_aux_tests_bouclier').innerHTML = -10;
            if (bonus_bouclier > 0) {
                document.getElementById('malus_aux_tests_bouclier').innerHTML = parseInt(document.getElementById('malus_aux_tests_bouclier').innerHTML) + 1;
            };
            document.getElementById('echec_sorts_bouclier').innerHTML = "50%";
            break;
    };

    document.getElementById('ca_bon_bou').innerHTML = document.getElementById('bonus_CA_bouclier').innerHTML;
    document.getElementById('ca_total').innerHTML=calculeCa();
    document.getElementById('val_ca_contact').innerHTML=calculeCaContact();
    document.getElementById('val_pri_depourvu').innerHTML=calculeCaPrisDepourvu();
}

function choixProtection(protection,valeur) {
    if (isNaN(parseInt(valeur.value))) {
        var bonus_protection = 0;
    } else {
        var bonus_protection = parseInt(valeur.value);
    };

    switch(protection.value) {
        case "anneau" :
            document.getElementById('bonus_CA_protection_I').innerHTML = 0 + bonus_protection;
            document.getElementById('poids_protection_I').innerHTML = "10g";
            document.getElementById('malus_aux_tests_protection_I').innerHTML = -0;
            break;
    };

    document.getElementById('ca_mod_div').innerHTML = document.getElementById('bonus_CA_protection_I').innerHTML;
    document.getElementById('ca_total').innerHTML=calculeCa();
    document.getElementById('val_ca_contact').innerHTML=calculeCaContact();
    document.getElementById('val_pri_depourvu').innerHTML=calculeCaPrisDepourvu();
}

function competenceClasseBarbare() {
    if (document.form.niveau.value >= 1) {
        document.getElementById('aptitudes_I').innerHTML = "Déplacement accéléré.";
        document.getElementById('aptitudes_II').innerHTML = "Illetrisme.";
        document.getElementById('aptitudes_III').innerHTML = "Rage 1/jour.";
    };

    if (document.form.niveau.value >= 2) {
        document.getElementById('aptitudes_IV').innerHTML = "Esquive instinctive.";
    };

    if (document.form.niveau.value >= 3) {
        document.getElementById('aptitudes_V').innerHTML = "Sens des pièges (+1).";
    };

    if (document.form.niveau.value >= 4) {
        document.getElementById('aptitudes_III').innerHTML = "Rage 2/jour.";
    };

    if (document.form.niveau.value >= 5) {
        document.getElementById('aptitudes_IV').innerHTML = "Esquive instinctive supérieure.";
    };

    if (document.form.niveau.value >= 6) {
        document.getElementById('aptitudes_V').innerHTML = "Sens des pièges (+2).";
    };

    if (document.form.niveau.value >= 8) {
        document.getElementById('aptitudes_III').innerHTML = "Rage 3/jour.";
    };

    if (document.form.niveau.value >= 9) {
        document.getElementById('aptitudes_V').innerHTML = "Sens des pièges (+3).";
    };

    if (document.form.niveau.value >= 11) {
        document.getElementById('aptitudes_VI').innerHTML = "Rage de grand berseker.";
    };

    if (document.form.niveau.value >= 12) {
        document.getElementById('aptitudes_III').innerHTML = "Rage 4/jour.";
        document.getElementById('aptitudes_V').innerHTML = "Sens des pièges (+4).";
    };

    if (document.form.niveau.value >= 14) {
        document.getElementById('aptitudes_VII').innerHTML = "Volonté indomptable.";
    };

    if (document.form.niveau.value >= 15) {
        document.getElementById('aptitudes_V').innerHTML = "Sens des pièges (+5).";
    };

    if (document.form.niveau.value >= 16) {
        document.getElementById('aptitudes_III').innerHTML = "Rage 5/jour.";
    };

    if (document.form.niveau.value >= 17) {
        document.getElementById('aptitudes_VI').innerHTML = "Rage sans fatigue.";
    };

    if (document.form.niveau.value >= 18) {
        document.getElementById('aptitudes_V').innerHTML = "Sens des pièges (+6).";
    };

    if (document.form.niveau.value >= 20) {
        document.getElementById('aptitudes_III').innerHTML = "Rage 5/jour.";
        document.getElementById('aptitudes_VI').innerHTML = "Rage de maître berseker.";
    };
 };

function competenceClasseBarde() {
    if (document.form.niveau.value >= 1) {
        document.getElementById('aptitudes_I').innerHTML = "Contre-chant.";
        document.getElementById('aptitudes_II').innerHTML = "Fascination.";
        document.getElementById('aptitudes_III').innerHTML = "Inspiration vaillante (+1).";
        document.getElementById('aptitudes_IV').innerHTML = "Musique de barde.";
        document.getElementById('aptitudes_V').innerHTML = "Savoir bardique.";
    };

    if (document.form.niveau.value >= 3) {
        document.getElementById('aptitudes_VI').innerHTML = "Inspiration talentueuse.";
    };

    if (document.form.niveau.value >= 6) {
        document.getElementById('aptitudes_VII').innerHTML = "Suggestion.";
    };

    if (document.form.niveau.value >= 8) {
        document.getElementById('aptitudes_III').innerHTML = "Inspiration vaillante (+2).";
    };

    if (document.form.niveau.value >= 9) {
        document.getElementById('aptitudes_VIII').innerHTML = "Inspiration héroique.";
    };

    if (document.form.niveau.value >= 12) {
        document.getElementById('aptitudes_IX').innerHTML = "Chant de liberté.";
    };

    if (document.form.niveau.value >= 14) {
        document.getElementById('aptitudes_III').innerHTML = "Inspiration vaillante (+3).";
    };

    if (document.form.niveau.value >= 15) {
        document.getElementById('aptitudes_X').innerHTML = "Inspiration intrépide.";
    };

    if (document.form.niveau.value >= 18) {
        document.getElementById('aptitudes_XI').innerHTML = "Suggestion de groupe";
    };

    if (document.form.niveau.value >= 20) {
        document.getElementById('aptitudes_III').innerHTML = "Inspiration vaillante (+4).";
    };
 };

function competenceClasseDruide() {
    if (document.form.niveau.value >= 1) {
        document.getElementById('aptitudes_I').innerHTML = "Compagnon animal.";
        document.getElementById('aptitudes_II').innerHTML = "Empathie sauvage.";
        document.getElementById('aptitudes_III').innerHTML = "Instinct naturel.";
    };

    if (document.form.niveau.value >= 2) {
        document.getElementById('aptitudes_IV').innerHTML = "Déplacement facilité.";
    };

    if (document.form.niveau.value >= 3) {
        document.getElementById('aptitudes_V').innerHTML = "Absence de traces.";
    };

    if (document.form.niveau.value >= 4) {
        document.getElementById('aptitudes_VI').innerHTML = "Résistance à l'appel de la nature.";
    };

    if (document.form.niveau.value >= 5) {
        document.getElementById('aptitudes_VII').innerHTML = "Forme animale (1/jour).";
    };

    if (document.form.niveau.value >= 6) {
        document.getElementById('aptitudes_VII').innerHTML = "Forme animale (2/jour).";
    };

    if (document.form.niveau.value >= 7) {
        document.getElementById('aptitudes_VII').innerHTML = "Forme animale (3/jour).";
    };

    if (document.form.niveau.value >= 8) {
        document.getElementById('aptitudes_VIII').innerHTML = "Forme animale (taille G).";
    };

    if (document.form.niveau.value >= 9) {
        document.getElementById('aptitudes_IX').innerHTML = "Immunité contre le venin.";
    };

    if (document.form.niveau.value >= 10) {
        document.getElementById('aptitudes_VII').innerHTML = "Forme animale (4/jour).";
    };
    
    if (document.form.niveau.value >= 11) {
        document.getElementById('aptitudes_VIII').innerHTML = "Forme animale (taille TP).";
    };

    if (document.form.niveau.value >= 12) {
        document.getElementById('aptitudes_VIII').innerHTML = "Forme animale (plante).";
    };

    if (document.form.niveau.value >= 13) {
        document.getElementById('aptitudes_X').innerHTML = "Mille visage.";
    };

    if (document.form.niveau.value >= 14) {
        document.getElementById('aptitudes_VII').innerHTML = "Forme animale (5/jour).";
    };

    if (document.form.niveau.value >= 15) {
        document.getElementById('aptitudes_XI').innerHTML = "Eternelle jeunesse.";
        document.getElementById('aptitudes_VIII').innerHTML = "Forme animale (taille TG).";
    };

    if (document.form.niveau.value >= 16) {
        document.getElementById('aptitudes_XII').innerHTML = "Forme animale (élémentaire 1/jour).";
    };

    if (document.form.niveau.value >= 18) {
        document.getElementById('aptitudes_VII').innerHTML = "Forme animale (6/jour).";
        document.getElementById('aptitudes_XII').innerHTML = "Forme animale (élémentaire 2/jour).";
    };

    if (document.form.niveau.value >= 20) {
        document.getElementById('aptitudes_XII').innerHTML = "Forme animale (élémentaire 2/jour).";
        document.getElementById('aptitudes_XIII').innerHTML = "Forme animale (élémentaire de taille TG).";
    };
};

function competenceClasseEnsorceleur() {
    if (document.form.niveau.value >= 1) {
        document.getElementById('aptitudes_I').innerHTML = "Appel de familier.";
    };
};

 function competenceClasseGuerrier() {
    if (document.form.niveau.value >= 1) {
        document.getElementById('aptitudes_I').innerHTML = "+1 don supplémentaire.";
    };

    if (document.form.niveau.value >= 2) {
        document.getElementById('aptitudes_I').innerHTML = "+2 dons supplémentaires.";
    };

    if (document.form.niveau.value >= 4) {
        document.getElementById('aptitudes_I').innerHTML = "+3 dons supplémentaires.";
    };

    if (document.form.niveau.value >= 6) {
        document.getElementById('aptitudes_I').innerHTML = "+4 dons supplémentaires.";
    };

    if (document.form.niveau.value >= 8) {
        document.getElementById('aptitudes_I').innerHTML = "+5 dons supplémentaires.";
    };

    if (document.form.niveau.value >= 10) {
        document.getElementById('aptitudes_I').innerHTML = "+6 dons supplémentaires.";
    };
    
    if (document.form.niveau.value >= 12) {
        document.getElementById('aptitudes_I').innerHTML = "+7 dons supplémentaires.";
    };

    if (document.form.niveau.value >= 14) {
        document.getElementById('aptitudes_I').innerHTML = "+8 dons supplémentaires.";
    };

    if (document.form.niveau.value >= 16) {
        document.getElementById('aptitudes_I').innerHTML = "+9 dons supplémentaires.";
    };

    if (document.form.niveau.value >= 18) {
        document.getElementById('aptitudes_I').innerHTML = "+10 dons supplémentaires.";
    };

    if (document.form.niveau.value >= 20) {
        document.getElementById('aptitudes_I').innerHTML = "+11 dons supplémentaires.";
    };
 };

function competenceClasseMagicien() {
    if (document.form.niveau.value >= 1) {
        document.getElementById('aptitudes_I').innerHTML = "Appel de familier.";
        document.getElementById('aptitudes_II').innerHTML = "Ecriture de parchemins.";
    };

    if (document.form.niveau.value >= 5) {
        document.getElementById('aptitudes_III').innerHTML = "+1 don supplémentaire.";
    };

    if (document.form.niveau.value >= 10) {
        document.getElementById('aptitudes_III').innerHTML = "+2 dons supplémentaires.";
    };

    if (document.form.niveau.value >= 15) {
        document.getElementById('aptitudes_III').innerHTML = "+3 dons supplémentaires.";
    };

    if (document.form.niveau.value >= 20) {
        document.getElementById('aptitudes_III').innerHTML = "+4 dons supplémentaires.";
    };
 };

function competenceClasseMoine() {
    if (document.form.niveau.value >= 1) {
        document.getElementById('aptitudes_I').innerHTML = "Combat à mains nues.";
        document.getElementById('aptitudes_II').innerHTML = "Déluge de coup.";
        document.getElementById('aptitudes_III').innerHTML = "+1 don supplémentaire.";
    };

    if (document.form.niveau.value >= 2) {
        document.getElementById('aptitudes_III').innerHTML = "+2 dons supplémentaires.";
        document.getElementById('aptitudes_IV').innerHTML = "Esquive totale.";
    };

    if (document.form.niveau.value >= 3) {
        document.getElementById('aptitudes_V').innerHTML = "Sérénité.";
    };

    if (document.form.niveau.value >= 4) {
        document.getElementById('aptitudes_VI').innerHTML = "Frappe ki (magie).";
        document.getElementById('aptitudes_VII').innerHTML = "Chute ralentie (6m).";
    };

    if (document.form.niveau.value >= 5) {
        document.getElementById('aptitudes_VIII').innerHTML = "Pureté physique.";
    };

    if (document.form.niveau.value >= 6) {
        document.getElementById('aptitudes_III').innerHTML = "+3 dons supplémentaires.";
        document.getElementById('aptitudes_VII').innerHTML = "Chute ralentie (9m).";
    };

    if (document.form.niveau.value >= 7) {
        document.getElementById('aptitudes_IX').innerHTML = "Plénitude physique.";
    };

    if (document.form.niveau.value >= 8) {
        document.getElementById('aptitudes_VII').innerHTML = "Chute ralentie (12m).";
    };

    if (document.form.niveau.value >= 9) {
        document.getElementById('aptitudes_X').innerHTML = "Esquive extraordinaire.";
    };

    if (document.form.niveau.value >= 10) {
        document.getElementById('aptitudes_VII').innerHTML = "Chute ralentie (15m).";
        document.getElementById('aptitudes_XI').innerHTML = "Frappe ki (loi)";
    };

    
    if (document.form.niveau.value >= 11) {
        document.getElementById('aptitudes_XII').innerHTML = "Corps de diamant.";
        document.getElementById('aptitudes_XIII').innerHTML = "Déluge supérieur.";
    };

    if (document.form.niveau.value >= 12) {
        document.getElementById('aptitudes_VII').innerHTML = "Chute ralentie (18m).";
        document.getElementById('aptitudes_XIV').innerHTML = "Pas chassé.";
    };

    if (document.form.niveau.value >= 13) {
        document.getElementById('aptitudes_XV').innerHTML = "Ame de diamant.";
    };

    if (document.form.niveau.value >= 14) {
        document.getElementById('aptitudes_VII').innerHTML = "Chute ralentie (21m).";
    };

    if (document.form.niveau.value >= 15) {
        document.getElementById('aptitudes_XVI').innerHTML = "Paume vibratoire.";
    };

    if (document.form.niveau.value >= 16) {
        document.getElementById('aptitudes_VII').innerHTML = "Chute ralentie (24m).";
        document.getElementById('aptitudes_XVII').innerHTML = "Frappe ki (adamantium).";
    };

    if (document.form.niveau.value >= 17) {
        document.getElementById('aptitudes_XVIII').innerHTML = "Eternelle jeunesse.";
        document.getElementById('aptitudes_XIX').innerHTML = "Langue du soleil et de la lune.";
    };

    if (document.form.niveau.value >= 18) {
        document.getElementById('aptitudes_VII').innerHTML = "Chute ralentie (27m).";
    };

    if (document.form.niveau.value >= 19) {
        document.getElementById('aptitudes_XX').innerHTML = "Désertion de l'âme.";
    };

    if (document.form.niveau.value >= 20) {
        document.getElementById('aptitudes_VII').innerHTML = "Chute ralentie (illimité).";
        document.getElementById('aptitudes_XXI').innerHTML = "Perfection de l'être.";
    };
 };

function competenceClassePaladin() {
    if (document.form.niveau.value >= 1) {
        document.getElementById('aptitudes_I').innerHTML = "Aura du Bien.";
        document.getElementById('aptitudes_II').innerHTML = "Châtiment du mal (1/jour).";
        document.getElementById('aptitudes_III').innerHTML = "Détection du mal.";
    };

    if (document.form.niveau.value >= 2) {
        document.getElementById('aptitudes_IV').innerHTML = "Grâce divine.";
        document.getElementById('aptitudes_V').innerHTML = "Imposition des mains.";
    };

    if (document.form.niveau.value >= 3) {
        document.getElementById('aptitudes_VI').innerHTML = "Aura de bravour.";
        document.getElementById('aptitudes_VII').innerHTML = "Santé divine.";
    };

    if (document.form.niveau.value >= 4) {
        document.getElementById('aptitudes_IX').innerHTML = "Renvoie des morts-vivants.";
    };

    if (document.form.niveau.value >= 5) {
        document.getElementById('aptitudes_II').innerHTML = "Châtiment du mal (2/jour).";
        document.getElementById('aptitudes_X').innerHTML = "Destrier du paladin.";
    };

    if (document.form.niveau.value >= 6) {
        document.getElementById('aptitudes_XI').innerHTML = "Guérison des maladies (1/semaine).";
    };

    if (document.form.niveau.value >= 9) {
        document.getElementById('aptitudes_XI').innerHTML = "Guérison des maladies (2/semaine).";
    };

    if (document.form.niveau.value >= 10) {
        document.getElementById('aptitudes_II').innerHTML = "Châtiment du mal (3/jour).";
    };

    if (document.form.niveau.value >= 12) {
        document.getElementById('aptitudes_XI').innerHTML = "Guérison des maladies (3/semaine).";
    };

    if (document.form.niveau.value >= 15) {
        document.getElementById('aptitudes_II').innerHTML = "Châtiment du mal (4/jour).";
        document.getElementById('aptitudes_XI').innerHTML = "Guérison des maladies (4/semaine).";
    };

    if (document.form.niveau.value >= 18) {
        document.getElementById('aptitudes_XI').innerHTML = "Guérison des maladies (5/semaine).";
    };

    if (document.form.niveau.value >= 20) {
        document.getElementById('aptitudes_II').innerHTML = "Châtiment du mal (5/jour).";
    };
 };

function competenceClassePretre() {
    if (document.form.niveau.value >= 1) {
        document.getElementById('aptitudes_I').innerHTML = "Renvoi ou intimidation des morts-vivants.";
    };
 };

function competenceClasseRodeur() {
    if (document.form.niveau.value >= 1) {
        document.getElementById('aptitudes_I').innerHTML = "Empathie sauvage.";
        document.getElementById('aptitudes_II').innerHTML = "1er ennemie juré.";
        document.getElementById('aptitudes_III').innerHTML = "Pistage.";
    };

    if (document.form.niveau.value >= 2) {
        document.getElementById('aptitudes_IV').innerHTML = "Style de combat.";
    };

    if (document.form.niveau.value >= 3) {
        document.getElementById('aptitudes_V').innerHTML = "Endurance.";
    };

    if (document.form.niveau.value >= 4) {
        document.getElementById('aptitudes_VI').innerHTML = "Compagnon animal.";
    };

    if (document.form.niveau.value >= 5) {
        document.getElementById('aptitudes_II').innerHTML = "2ème ennemie juré.";
    };

    if (document.form.niveau.value >= 6) {
        document.getElementById('aptitudes_VII').innerHTML = "Science du style de combat.";
    };

    if (document.form.niveau.value >= 7) {
        document.getElementById('aptitudes_VIII').innerHTML = "Déplacement facilité.";
    };

    if (document.form.niveau.value >= 8) {
        document.getElementById('aptitudes_IX').innerHTML = "Pistage accéléré.";
    };

    if (document.form.niveau.value >= 9) {
        document.getElementById('aptitudes_X').innerHTML = "Esquive totale.";
    };

    if (document.form.niveau.value >= 10) {
        document.getElementById('aptitudes_II').innerHTML = "3ème ennemie juré.";
    };

    
    if (document.form.niveau.value >= 11) {
        document.getElementById('aptitudes_XI').innerHTML = "Maîtrise du style de combat.";
    };

    if (document.form.niveau.value >= 13) {
        document.getElementById('aptitudes_XII').innerHTML = "Camouflage.";
    };

    if (document.form.niveau.value >= 15) {
        document.getElementById('aptitudes_II').innerHTML = "4ème ennemie juré.";
    };

    if (document.form.niveau.value >= 17) {
        document.getElementById('aptitudes_XIII').innerHTML = "Discrétion totale.";
    };

    if (document.form.niveau.value >= 20) {
        document.getElementById('aptitudes_II').innerHTML = "5ème ennemie juré.";
    };
 };

function competenceClasseRoublard() {
    if (document.form.niveau.value >= 1) {
        document.getElementById('aptitudes_I').innerHTML = "Attaque sournoise (+1D6).";
        document.getElementById('aptitudes_II').innerHTML = "Recherche des pièges.";
    };

    if (document.form.niveau.value >= 2) {
        document.getElementById('aptitudes_III').innerHTML = "Esquive totale.";
    };

    if (document.form.niveau.value >= 3) {
        document.getElementById('aptitudes_I').innerHTML = "Attaque sournoise (+2D6).";
        document.getElementById('aptitudes_IV').innerHTML = "Sens des pièges (+1).";
    };

    if (document.form.niveau.value >= 4) {
        document.getElementById('aptitudes_V').innerHTML = "Esquive instinctive.";
    };

    if (document.form.niveau.value >= 5) {
        document.getElementById('aptitudes_I').innerHTML = "Attaque sournoise (+3D6).";
    };

    if (document.form.niveau.value >= 6) {
        document.getElementById('aptitudes_IV').innerHTML = "Sens des pièges (+2).";
    };

    if (document.form.niveau.value >= 7) {
        document.getElementById('aptitudes_I').innerHTML = "Attaque sournoise (+4D6).";
    };

    if (document.form.niveau.value >= 8) {
        document.getElementById('aptitudes_VI').innerHTML = "Esquive instinctive supérieure.";
    };

    if (document.form.niveau.value >= 9) {
        document.getElementById('aptitudes_I').innerHTML = "Attaque sournoise (+5D6).";
        document.getElementById('aptitudes_IV').innerHTML = "Sens des pièges (+3).";
    };

    if (document.form.niveau.value >= 10) {
        document.getElementById('aptitudes_VII').innerHTML = "1 pouvoir spéciale.";
    };

    if (document.form.niveau.value >= 11) {
        document.getElementById('aptitudes_I').innerHTML = "Attaque sournoise (+6D6).";
    };

    if (document.form.niveau.value >= 12) {
        document.getElementById('aptitudes_IV').innerHTML = "Sens des pièges (+4).";
    };

    if (document.form.niveau.value >= 13) {
        document.getElementById('aptitudes_I').innerHTML = "Attaque sournoise (+7D6).";
        document.getElementById('aptitudes_VII').innerHTML = "2 pouvoir spéciale.";
    };

    if (document.form.niveau.value >= 15) {
        document.getElementById('aptitudes_I').innerHTML = "Attaque sournoise (+8D6).";
        document.getElementById('aptitudes_IV').innerHTML = "Sens des pièges (+5).";
    };

    if (document.form.niveau.value >= 16) {
        document.getElementById('aptitudes_VII').innerHTML = "3 pouvoir spéciale.";
    };

    if (document.form.niveau.value >= 17) {
        document.getElementById('aptitudes_I').innerHTML = "Attaque sournoise (+9D6).";
    };

    if (document.form.niveau.value >= 18) {
        document.getElementById('aptitudes_IV').innerHTML = "Sens des pièges (+6).";
    };

    if (document.form.niveau.value >= 19) {
        document.getElementById('aptitudes_I').innerHTML = "Attaque sournoise (+10D6).";
        document.getElementById('aptitudes_VII').innerHTML = "4 pouvoir spéciale.";
    };
 };

function validation() {
  console.log("valider : ",document.form.nom_du_personnage.value);
  if (document.form.nom_du_personnage.value == "") {
    document.form.nom_du_personnage.style.backgroundColor = "FF0000";
    alert("La saisie du champ nom du personnage est obligatoire");
  } else {
    document.form.nom_du_personnage.style.backgroundColor = "FFFFFF";
  };

  console.log("valider : ",document.form.campagne.value);
  if (document.form.campagne.value == "") {
    document.form.campagne.style.backgroundColor = "FF0000";
    alert("La saisie du champ campagne est obligatoire");
  } else {
    document.form.campagne.style.backgroundColor = "FFFFFF";
  };
  
  console.log("valider : ",document.form.nom_du_joueur.value);
  if (document.form.nom_du_joueur.value == "") {
    document.form.nom_du_joueur.style.backgroundColor = "FF0000";
    alert("La saisie du champ nom du joueur est obligatoire");
  } else {
    document.form.nom_du_joueur.style.backgroundColor = "FFFFFF";
  };
  
  console.log("valider : ",document.form.divinite.value);
  if (document.form.divinite.value == "") {
    document.form.divinite.style.backgroundColor = "FF0000";
    alert("La saisie du champ divinite est obligatoire");
  } else {
    document.form.divinite.style.backgroundColor = "FFFFFF";
  };
  
  console.log("valider : ",document.form.cat_age.value);
  if (document.form.cat_age.value == "") {
    document.form.cat_age.style.backgroundColor = "FF0000";
    alert("La saisie du champ age est obligatoire");
  } else {
    document.form.cat_age.style.backgroundColor = "FFFFFF";
  };
  
};

function reinitialisation() {
    document.getElementById('classe_personnage').innerHTML = "PERSONNAGE";
    remiseAZero();
    document.getElementById('bba').innerHTML = "0";
    document.getElementById('lut_bon_bas_att').innerHTML = "";
    document.getElementById('sau_bon_bas_ref').innerHTML = "";
    document.getElementById('sau_bon_bas_vig').innerHTML = "";
    document.getElementById('sau_bon_bas_vol').innerHTML = "";
    document.getElementById('bba').innerHTML = "0";
    document.getElementById('lut_bon_bas_att').innerHTML = "";
    document.getElementById('ide').innerHTML = "";
    document.getElementById('hide').innerHTML = "";
    document.getElementById('prochain_niveau').innerHTML = "";
    document.getElementById('vit').innerHTML = "";

    document.form.for_val.value = 0;
    document.form.dex_val.value = 0;
    document.form.con_val.value = 0;
    document.form.int_val.value = 0;
    document.form.sag_val.value = 0;
    document.form.cha_val.value = 0;

    document.getElementById('totalCompetenceDétection').innerHTML = "";
    document.getElementById('totalCompetenceFouille').innerHTML = "";
    document.getElementById('totalCompetencePerception_auditive').innerHTML = "";
    document.getElementById('totalCompetenceDiplomatie').innerHTML = "";
    document.getElementById('totalCompetenceRenseignements').innerHTML = "";
    document.getElementById('totalCompetenceDéplacement_silencieux').innerHTML = "";
    document.getElementById('totalCompetenceEscalade').innerHTML = "";
    document.getElementById('totalCompetenceSaut').innerHTML = "";

    document.getElementById('traits_I').innerHTML = "_";
    document.getElementById('traits_II').innerHTML = "_";
    document.getElementById('traits_III').innerHTML = "_";
    document.getElementById('traits_IV').innerHTML = "_";
    document.getElementById('traits_V').innerHTML = "_";
    document.getElementById('traits_VI').innerHTML = "_";
    document.getElementById('traits_VII').innerHTML = "_";
    document.getElementById('traits_VIII').innerHTML = "_";
    document.getElementById('traits_IX').innerHTML = "_";
    document.getElementById('traits_X').innerHTML = "_";
    document.getElementById('traits_XI').innerHTML = "_";
    document.getElementById('traits_XII').innerHTML = "_";
    document.getElementById('traits_XIII').innerHTML = "_";
    document.getElementById('traits_XIV').innerHTML = "_";
    document.getElementById('traits_XV').innerHTML = "_";
    document.getElementById('traits_XVI').innerHTML = "_";

    document.getElementById('for_mod').innerHTML = "";
    document.getElementById('lut_mod_for').innerHTML = "";
    for (var i = 0; i < document.getElementsByClassName("carac_for").length; i++) {
        document.getElementsByClassName("carac_for")[i].innerHTML = "";
    };
    document.getElementById('chargeLegere').innerHTML = "";
    document.getElementById('chargeIntermediaire').innerHTML = "";
    document.getElementById('chargeLourde').innerHTML = "";
    document.getElementById('chargeMax').innerHTML = "";
    document.getElementById('soulever').innerHTML = "";
    document.getElementById('tirerOuPousser').innerHTML = "";

    document.getElementById('sau_bon_bas_ref').innerHTML = "";
    document.getElementById('sau_mod_car_ref').innerHTML = "";
    document.getElementById('sau_total_ref').innerHTML = "";

    document.getElementById('dex_mod').innerHTML = "";
    document.getElementById('ca_mod_dex').innerHTML = "";
    document.getElementById('ca_total').innerHTML = "";
    document.getElementById('init_mod_dex').innerHTML = "";
    document.getElementById('val_ca_contact').innerHTML = "";
    document.getElementById('val_pri_depourvu').innerHTML = "";
    document.getElementById('sau_mod_car_ref').innerHTML = "";
    for (var i = 0; i < document.getElementsByClassName("carac_dex").length; i++) {
        document.getElementsByClassName("carac_dex")[i].innerHTML = "";
    };

    document.getElementById('con_mod').innerHTML="";
    document.getElementById('pv').innerHTML="";
    document.getElementById('sau_mod_car_vig').innerHTML="";
    document.getElementById('sau_bon_bas_vig').innerHTML = "";
    document.getElementById('sau_mod_car_vig').innerHTML = "";
    document.getElementById('sau_total_vig').innerHTML = "";
    for (var i = 0; i < document.getElementsByClassName("carac_con").length; i++) {
        document.getElementsByClassName("carac_con")[i].innerHTML = ""
    };

    document.getElementById('int_mod').innerHTML="";
    for (var i = 0; i < document.getElementsByClassName("carac_int").length; i++) {
        document.getElementsByClassName("carac_int")[i].innerHTML = "";
    };

    document.getElementById('dd_des_sorts').innerHTML      = "";
    document.getElementById('dd_des_sorts_0').innerHTML    = "";
    document.getElementById('dd_des_sorts_I').innerHTML    = "";
    document.getElementById('dd_des_sorts_II').innerHTML   = "";
    document.getElementById('dd_des_sorts_III').innerHTML  = "";
    document.getElementById('dd_des_sorts_IV').innerHTML   = "";
    document.getElementById('dd_des_sorts_V').innerHTML    = "";
    document.getElementById('dd_des_sorts_VI').innerHTML   = "";
    document.getElementById('dd_des_sorts_VII').innerHTML  = "";
    document.getElementById('dd_des_sorts_VIII').innerHTML = "";
    document.getElementById('dd_des_sorts_IX').innerHTML   = "";

    document.getElementById('sorts_en_bonus_0').innerHTML = "-";
    document.getElementById('sorts_en_bonus_I').innerHTML = "-";
    document.getElementById('sorts_en_bonus_II').innerHTML = "-";
    document.getElementById('sorts_en_bonus_III').innerHTML = "-";
    document.getElementById('sorts_en_bonus_IV').innerHTML = "-";
    document.getElementById('sorts_en_bonus_V').innerHTML = "-";
    document.getElementById('sorts_en_bonus_VI').innerHTML = "-";
    document.getElementById('sorts_en_bonus_VII').innerHTML = "-";
    document.getElementById('sorts_en_bonus_VIII').innerHTML = "-";
    document.getElementById('sorts_en_bonus_IX').innerHTML = "-";

    document.getElementById('sag_mod').innerHTML = "";
    document.getElementById('sau_mod_car_vol').innerHTML="";
    document.getElementById('sau_bon_bas_vol').innerHTML = "";
    document.getElementById('sau_mod_car_vol').innerHTML = "";
    document.form.mod_tem_vol.value = "";
    document.form.mod_part_vol.value = "";
    document.getElementById('sau_total_vol').innerHTML = "";
    for (var i = 0; i < document.getElementsByClassName("carac_sag").length; i++) {
        document.getElementsByClassName("carac_sag")[i].innerHTML = "";
    };

    document.getElementById('cha_mod').innerHTML="";
    for (var i = 0; i < document.getElementsByClassName("carac_cha").length; i++) {
        document.getElementsByClassName("carac_cha")[i].innerHTML = "";
    };

    document.getElementById('red_deg').innerHTML = "0";

    document.getElementById('lut_bon_bas_att').innerHTML = "";
    document.getElementById('lut_mod_for').innerHTML = "";
    document.getElementById('lut_total').innerHTML = "";
    document.getElementById('poidsTotalPorte').innerHTML = "";

    document.getElementById('bonus_CA_armure').innerHTML = "";
    document.getElementById('dex_max').innerHTML = "";
    document.getElementById('malus_aux_test_armure').innerHTML = "";
    document.getElementById('echec_sorts_armure').innerHTML = "";
    document.getElementById('vitesse_armure').innerHTML = "";
    document.getElementById('poids_armure').innerHTML = "";
    document.getElementById('ca_bon_arm').innerHTML = "";
    document.getElementById('ca_mod_dex').innerHTML = "";
    document.getElementById('ca_total').innerHTML = "";
    document.getElementById('val_ca_contact').innerHTML = "";
    document.getElementById('val_pri_depourvu').innerHTML = "";

    document.getElementById('bonus_CA_bouclier').innerHTML = "";
    document.getElementById('poids_bouclier').innerHTML = "";
    document.getElementById('malus_aux_tests_bouclier').innerHTML = "";
    document.getElementById('malus_aux_tests_bouclier').innerHTML = "";
    document.getElementById('echec_sorts_bouclier').innerHTML = "";
    document.getElementById('ca_bon_bou').innerHTML = "";

    document.getElementById('bonus_CA_protection_I').innerHTML = "";
    document.getElementById('poids_protection_I').innerHTML = "";
    document.getElementById('malus_aux_tests_protection_I').innerHTML = "";
    document.getElementById('ca_mod_div').innerHTML = "";

    document.getElementById('aptitudes_I').innerHTML = "_";
    document.getElementById('aptitudes_II').innerHTML = "_";
    document.getElementById('aptitudes_III').innerHTML = "_";
    document.getElementById('aptitudes_IV').innerHTML = "_";
    document.getElementById('aptitudes_V').innerHTML = "_";
    document.getElementById('aptitudes_VI').innerHTML = "_";
    document.getElementById('aptitudes_VII').innerHTML = "_";
    document.getElementById('aptitudes_VIII').innerHTML = "_";
    document.getElementById('aptitudes_IX').innerHTML = "_";
    document.getElementById('aptitudes_X').innerHTML = "_";
    document.getElementById('aptitudes_XI').innerHTML = "_";
    document.getElementById('aptitudes_XII').innerHTML = "_";
    document.getElementById('aptitudes_XIII').innerHTML = "_";
    document.getElementById('aptitudes_XIV').innerHTML = "_";
    document.getElementById('aptitudes_XV').innerHTML = "_";
    document.getElementById('aptitudes_XVI').innerHTML = "_";
    document.getElementById('aptitudes_XVII').innerHTML = "_";
    document.getElementById('aptitudes_XVIII').innerHTML = "_";
    document.getElementById('aptitudes_XIX').innerHTML = "_";
    document.getElementById('aptitudes_XX').innerHTML = "_";
    document.getElementById('aptitudes_XXI').innerHTML = "_";

    document.getElementById('maniement_arme_I').length = 0;  
    document.getElementById('maniement_arme_II').length = 0;  
    document.getElementById('maniement_arme_III').length = 0;  
    document.getElementById('maniement_arme_IV').length = 0;  
    document.getElementById('maniement_arme_V').length = 0;  
    document.getElementById('arme_I').length = 0;  
    document.getElementById('arme_II').length = 0;  
    document.getElementById('arme_III').length = 0;  
    document.getElementById('arme_IV').length = 0;  
    document.getElementById('arme_V').length = 0;  
};

function impression() {
    window.print();
};