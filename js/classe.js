$(function() {
    $('#classe').change(function() {
        switch($('#classe').val()) {
            case ' ' :
//                location.reload();
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
                location.reload();
            }
    });

    function remiseAZeroClasse() {
    	$('#acrobatie').html('<h2>O</h2>');
    	$('#artisanat_I').html('<h2>O</h2>');
        $('#artisanat_II').html('<h2>O</h2>');
        $('#artisanat_III').html('<h2>O</h2>');
        $('#art_de_la_magie').html('<h2>O</h2>');
        $('#bluf').html('<h2>O</h2>');
        $('#Connaissances_exploration').html('<h2>O</h2>');
        $('#Connaissances_Folklore_Locale').html('<h2>O</h2>');
        $('#Connaissances_Geographie').html('<h2>O</h2>');
        $('#Connaissances_Histoire').html('<h2>O</h2>');
        $('#Connaissances_Ingénieurie').html('<h2>O</h2>');
        $('#Connaissances_Mystères').html('<h2>O</h2>');
        $('#Connaissances_Nature').html('<h2>O</h2>');
        $('#Connaissances_Noblesse').html('<h2>O</h2>');
        $('#Connaissances_Plan').html('<h2>O</h2>');
        $('#Connaissances_Religion').html('<h2>O</h2>');
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
    			remiseAZeroClasse();
    			break;
    		case 'Barbare' :
    			remiseAZeroClasse();
                $('#acrobatie').html('<h2>X</h2>');
                $('#diversAcrobatie').val(3);
    			$('#artisanat_I').html('<h2>X</h2>');
        		$('#artisanat_II').html('<h2>X</h2>');
                $('#artisanat_III').html('<h2>X</h2>');
                $('#Connaissances_Nature').html('<h2>X</h2>');
        		$('#dressage').html('<h2>X</h2>');
        		$('#equitation').html('<h2>X</h2>');
        		$('#escalade').html('<h2>X</h2>');
        		$('#intimidation').html('<h2>X</h2>');
        		$('#natation').html('<h2>X</h2>');
        		$('#perception').html('<h2>X</h2>');
        		$('#survie').html('<h2>X</h2>');
    			break;
    		case 'Barde' :
    			remiseAZeroClasse();
    			$('#acrobatie').html('<h2>X</h2>');
    			$('#artisanat_I').html('<h2>X</h2>');
        		$('#artisanat_II').html('<h2>X</h2>');
                $('#artisanat_III').html('<h2>X</h2>');
                $('#art_de_la_magie').html('<h2>X</h2>');
        		$('#bluf').html('<h2>X</h2>');
         		$('#Connaissances_exploration').html('<h2>X</h2>');
        		$('#Connaissances_Folklore_Locale').html('<h2>X</h2>');
        		$('#Connaissances_Geographie').html('<h2>X</h2>');
        		$('#Connaissances_Histoire').html('<h2>X</h2>');
        		$('#Connaissances_Ingénieurie').html('<h2>X</h2>');
                $('#Connaissances_Mystères').html('<h2>X</h2>');
                $('#Connaissances_Nature').html('<h2>X</h2>');
                $('#Connaissances_Noblesse').html('<h2>X</h2>');
                $('#Connaissances_Plan').html('<h2>X</h2>');
                $('#Connaissances_Religion').html('<h2>X</h2>');
        		$('#déguisement').html('<h2>X</h2>');
        		$('#diplomatie').html('<h2>X</h2>');
        		$('#discrétion').html('<h2>X</h2>');
        		$('#escalade').html('<h2>X</h2>');
        		$('#escamotage').html('<h2>X</h2>');
        		$('#estimation').html('<h2>X</h2>');
        		$('#évasion').html('<h2>X</h2>');
        		$('#linguistique').html('<h2>X</h2>');
        		$('#perception').html('<h2>X</h2>');
        		$('#profession_I').html('<h2>X</h2>');
        		$('#profession_II').html('<h2>X</h2>');
        		$('#psychologie').html('<h2>X</h2>');
        		$('#représentation_I').html('<h2>X</h2>');
        		$('#représentation_II').html('<h2>X</h2>');
        		$('#utilisation_d_objets_magiques').html('<h2>X</h2>');
    			break;
    		case 'Druide' :
    			remiseAZeroClasse();
    			$('#artisanat_I').html('<h2>X</h2>');
        		$('#artisanat_II').html('<h2>X</h2>');
        		$('#artisanat_III').html('<h2>X</h2>');
                $('#art_de_la_magie').html('<h2>X</h2>');
                $('#Connaissances_Geographie').html('<h2>X</h2>');
                $('#Connaissances_Nature').html('<h2>X</h2>');
        		$('#dressage').html('<h2>X</h2>');
        		$('#equitation').html('<h2>X</h2>');
                $('#escalade').html('<h2>X</h2>');
        		$('#natation').html('<h2>X</h2>');
        		$('#perception').html('<h2>X</h2>');
        		$('#premier_secours').html('<h2>X</h2>');
        		$('#profession_I').html('<h2>X</h2>');
        		$('#profession_II').html('<h2>X</h2>');
        		$('#survie').html('<h2>X</h2>');
                $('#vol').html('<h2>X</h2>');
    			break;
    		case 'Ensorceleur' :
    			remiseAZeroClasse();
    			$('#artisanat_I').html('<h2>X</h2>');
        		$('#artisanat_II').html('<h2>X</h2>');
        		$('#artisanat_III').html('<h2>X</h2>');
                $('#art_de_la_magie').html('<h2>X</h2>');
        		$('#bluf').html('<h2>X</h2>');
                $('#Connaissances_Mystères').html('<h2>X</h2>');
                $('#estimation').html('<h2>X</h2>');
                $('#intimidation').html('<h2>X</h2>');
        		$('#profession_I').html('<h2>X</h2>');
        		$('#profession_II').html('<h2>X</h2>');
                $('#utilisation_d_objets_magiques').html('<h2>X</h2>');
                $('#vol').html('<h2>X</h2>');
    			break;
    		case 'Guerrier' :
    			remiseAZeroClasse();
    			$('#artisanat_I').html('<h2>X</h2>');
        		$('#artisanat_II').html('<h2>X</h2>');
        		$('#artisanat_III').html('<h2>X</h2>');
                $('#Connaissances_exploration').html('<h2>X</h2>');
                $('#Connaissances_Ingénieurie').html('<h2>X</h2>');
        		$('#dressage').html('<h2>X</h2>');
        		$('#equitation').html('<h2>X</h2>');
           		$('#escalade').html('<h2>X</h2>');
        		$('#intimidation').html('<h2>X</h2>');
                $('#natation').html('<h2>X</h2>');
                $('#profession_I').html('<h2>X</h2>');
                $('#profession_II').html('<h2>X</h2>');
                $('#survie').html('<h2>X</h2>');
    			break;
    		case 'Magicien' :
    			remiseAZeroClasse();
    			$('#artisanat_I').html('<h2>X</h2>');
        		$('#artisanat_II').html('<h2>X</h2>');
        		$('#artisanat_III').html('<h2>X</h2>');
                $('#art_de_la_magie').html('<h2>X</h2>');
                $('#Connaissances_exploration').html('<h2>X</h2>');
                $('#Connaissances_Folklore_Locale').html('<h2>X</h2>');
                $('#Connaissances_Geographie').html('<h2>X</h2>');
                $('#Connaissances_Histoire').html('<h2>X</h2>');
                $('#Connaissances_Ingénieurie').html('<h2>X</h2>');
                $('#Connaissances_Mystères').html('<h2>X</h2>');
                $('#Connaissances_Nature').html('<h2>X</h2>');
                $('#Connaissances_Noblesse').html('<h2>X</h2>');
                $('#Connaissances_Plan').html('<h2>X</h2>');
                $('#Connaissances_Religion').html('<h2>X</h2>');
                $('#estimation').html('<h2>X</h2>');
                $('#linguistique').html('<h2>X</h2>');
        		$('#profession_I').html('<h2>X</h2>');
        		$('#profession_II').html('<h2>X</h2>');
                $('#vol').html('<h2>X</h2>');
    			break;
    		case 'Moine' :
    			remiseAZeroClasse();
    			$('#acrobatie').html('<h2>X</h2>');
    			$('#artisanat_I').html('<h2>X</h2>');
        		$('#artisanat_II').html('<h2>X</h2>');
        		$('#artisanat_III').html('<h2>X</h2>');
                $('#Connaissances_Histoire').html('<h2>X</h2>');
                $('#Connaissances_Religion').html('<h2>X</h2>');
        		$('#discrétion').html('<h2>X</h2>');
                $('#equitation').html('<h2>X</h2>');
                $('#escalade').html('<h2>X</h2>');
                $('#évasion').html('<h2>X</h2>');
                $('#intimidation').html('<h2>X</h2>');
        		$('#natation').html('<h2>X</h2>');
        		$('#perception').html('<h2>X</h2>');
        		$('#profession_I').html('<h2>X</h2>');
        		$('#profession_II').html('<h2>X</h2>');
        		$('#psychologie').html('<h2>X</h2>');
        		$('#représentation_I').html('<h2>X</h2>');
        		$('#représentation_II').html('<h2>X</h2>');
    			break;
    		case 'Paladin' :
    			remiseAZeroClasse();
    			$('#artisanat_I').html('<h2>X</h2>');
        		$('#artisanat_II').html('<h2>X</h2>');
        		$('#artisanat_III').html('<h2>X</h2>');
                $('#art_de_la_magie').html('<h2>X</h2>');
                $('#Connaissances_Noblesse').html('<h2>X</h2>');
                $('#Connaissances_Religion').html('<h2>X</h2>');
        		$('#diplomatie').html('<h2>X</h2>');
        		$('#dressage').html('<h2>X</h2>');
        		$('#equitation').html('<h2>X</h2>');
        		$('#premier_secours').html('<h2>X</h2>');
        		$('#profession_I').html('<h2>X</h2>');
        		$('#profession_II').html('<h2>X</h2>');
        		$('#psychologie').html('<h2>X</h2>');
    			break;
    		case 'Prêtre' :
    			remiseAZeroClasse();
    			$('#artisanat_I').html('<h2>X</h2>');
        		$('#artisanat_II').html('<h2>X</h2>');
        		$('#artisanat_III').html('<h2>X</h2>');
                $('#art_de_la_magie').html('<h2>X</h2>');
                $('#Connaissances_Histoire').html('<h2>X</h2>');
                $('#Connaissances_Mystères').html('<h2>X</h2>');
                $('#Connaissances_Noblesse').html('<h2>X</h2>');
                $('#Connaissances_Plan').html('<h2>X</h2>');
                $('#Connaissances_Religion').html('<h2>X</h2>');
                $('#estimation').html('<h2>X</h2>');
                $('#linguistique').html('<h2>X</h2>');
        		$('#premier_secours').html('<h2>X</h2>');
        		$('#profession_I').html('<h2>X</h2>');
        		$('#profession_II').html('<h2>X</h2>');
                $('#psychologie').html('<h2>X</h2>');
    			break;
    		case 'Rôdeur' :
    			remiseAZeroClasse();
    			$('#artisanat_I').html('<h2>X</h2>');
        		$('#artisanat_II').html('<h2>X</h2>');
        		$('#artisanat_III').html('<h2>X</h2>');
                $('#art_de_la_magie').html('<h2>X</h2>');
                $('#Connaissances_exploration').html('<h2>X</h2>');
                $('#Connaissances_Geographie').html('<h2>X</h2>');
                $('#Connaissances_Nature').html('<h2>X</h2>');
           		$('#discrétion').html('<h2>X</h2>');
        		$('#dressage').html('<h2>X</h2>');
        		$('#equitation').html('<h2>X</h2>');
        		$('#escalade').html('<h2>X</h2>');
                $('#intimidation').html('<h2>X</h2>');
        		$('#natation').html('<h2>X</h2>');
        		$('#perception').html('<h2>X</h2>');
        		$('#premier_secours').html('<h2>X</h2>');
        		$('#profession_I').html('<h2>X</h2>');
        		$('#profession_II').html('<h2>X</h2>');
        		$('#survie').html('<h2>X</h2>');
    			break;
    		case 'Roublard' :
    			remiseAZeroClasse();
    			$('#acrobatie').html('<h2>X</h2>');
    			$('#artisanat_I').html('<h2>X</h2>');
        		$('#artisanat_II').html('<h2>X</h2>');
        		$('#artisanat_III').html('<h2>X</h2>');
        		$('#bluf').html('<h2>X</h2>');
                $('#Connaissances_exploration').html('<h2>X</h2>');
                $('#Connaissances_Folklore_Locale').html('<h2>X</h2>');
        		$('#déguisement').html('<h2>X</h2>');
        		$('#diplomatie').html('<h2>X</h2>');
        		$('#discrétion').html('<h2>X</h2>');
        		$('#escalade').html('<h2>X</h2>');
        		$('#escamotage').html('<h2>X</h2>');
        		$('#estimation').html('<h2>X</h2>');
        		$('#évasion').html('<h2>X</h2>');
        		$('#intimidation').html('<h2>X</h2>');
                $('#linguistique').html('<h2>X</h2>');
        		$('#natation').html('<h2>X</h2>');
        		$('#perception').html('<h2>X</h2>');
        		$('#profession_I').html('<h2>X</h2>');
        		$('#profession_II').html('<h2>X</h2>');
        		$('#psychologie').html('<h2>X</h2>');
        		$('#représentation_I').html('<h2>X</h2>');
        		$('#représentation_II').html('<h2>X</h2>');
                $('#sabotage').html('<h2>X</h2>');
        		$('#utilisation_d_objets_magiques').html('<h2>X</h2>');
    			break;
    	}
    });
});
