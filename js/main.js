// $('#user').focus();
function affichageObjet(objet, poids) {
    var équipement = new Array();

    équipement = ['Armes', '0 kg',
    'Gantelet', '0,5 kg',
    'Dague', '0,5 kg',
    'Dague coup-de-poing', '0,5 kg',
    'Gantelet clouté', '0,5 kg',
    'Masse d’armes légère', '2 kg',
    'Serpe', '1 kg',
    'Épieu', '1,5 kg',
    'Gourdin', '1,5 kg',
    'Masse d’armes lourde', '4 kg',
    'Morgenstern', '3 kg',
    'Bâton', '2 kg',
    'Pique ', '4,5 kg',
    'Lance', '3 kg',
    'Arbalète légère', '2 kg',
    'Carreaux (10)', '0,5 kg',
    'Arbalète lourde', '4 kg',
    'Carreaux (10)', '0,5 kg',
    'Dard', '0,250 kg',
    'Fronde', '0 kg',
    'Billes (10)', '2,5 kg',
    'Javeline', '1 kg',
    'Sarbacane', '0,5 kg',
    'Dard, sarbacane', '0 kg',
    'Épée courte', '1 kg',
    'Hache de lancer', '2 kg',
    'Hachette', '1,5 kg',
    'Kukri', '1 kg',
    'Lamétoile', '1,5 kg',
    'Matraque', '1 kg',
    'Marteau, léger', '2 kg',
    'Pic de guerre, léger', '1,5 kg',
    'Rondache spécial', '0 kg',
    'Rondache à pointes spécial', '0 kg',
    'Cimeterre', '2 kg',
    'Écu spécial', '0 kg',
    'Écu à pointes spécial', '0 kg',
    'Épée longue', '2 kg',
    'Fléau d’armes léger', '2,5 kg',
    'Hache d’armes', '3 kg',
    'Marteau de guerre', '2,5 kg',
    'Pic de guerre lourd', '3 kg',
    'Rapière', '1 kg',
    'Trident', '2 kg',
    'Cimeterre à deux mains', '4 kg',
    'Corsèque', '6 kg',
    'Coutille', '5 kg',
    'Épée à deux mains', '4 kg',
    'Faux', '5 kg', 
    'Fléau d’armes lourd', '5 kg',
    'Grande hache', '6 kg',
    'Guisarme', '6 kg',
    'Halllebarde', '6 kg',
    'Lance d’arçon', '5 kg',
    'Massue', '4 kg',
    'Arc court', '1 kg',
    'Flèches (20)', '1,5 kg',
    'Arc court composite', '1 kg',
    'Flèches (20)', '1,5 kg',
    'Arc long', '1,5 kg',
    'Flèches (20)', '1,5 kg',
    'Arc long composite', '1,5 kg',
    'Flèches (20)', '1,5 kg',
    'Kama', '1 kg',
    'Nunchaku', '1 kg',
    'Sai', '0,5 kg',
    'Siangham', '0,5 kg',
    'Épée bâtarde', '3 kg',
    'Fouet', '1 kg',
    'Hache de guerre naine', '4 kg',
    'Chaîne cloutée', '5 kg',
    'Double-lame', '5 kg',
    'Fléau double', '5 kg',
    'Hache double orque', '7,5 kg',
    'Lame elfique incurvée', '3,5 kg',
    'Marteau-piolet gnome', '3 kg',
    'Urgrosh nain', '6 kg',
    'Arbalète de poing', '1 kg',
    'Carreaux', '0,5 kg',
    'Arbalète légère à répétition', '3 kg',
    'Arbalète lourde à répétition', '6 kg',
    'Bâton de jet halfelin', '1,5 kg',
    'Billes de fronde', '2,5 kg',
    'Bolas', '1 kg',
    'Filet', '3 kg',
    'Shuriken', '0,250 kg',

    'Armure', '0 kg',
    'Armure matelassée', '5 kg',
    'Armure de cuir', '7,5 kg',
    'Armure de cuir cloutée', '10 kg',
    'Chemise de mailles', '12,5 kg',
    'Armure de peau', '12,5 kg',
    'Armure d’écailles', '15 kg',
    'Cotte de mailles', '20 kg',
    'Cuirasse', '15 kg',
    'Clibanion', '22,5 kg',
    'Crevice', '17,5 kg',
    'Armure de plaques', '25 kg',
    'Harnois', '25 kg',
    'Targe', '2,5 kg',
    'Rondache en bois', '2,5 kg',
    'Rondache en acier', '3 kg',
    'Écu en bois', '5 kg',
    'Écu en acier', '7,5 kg',
    'Pavois', '22,5 kg',
    'Gantelet d’armes', '2,5 kg',
    'Pointes pour armure', '5 kg',
    'Pointes pour bouclier', '2,5 kg',

    'Matériel d’aventurier', '0 kg',
    'Aiguille à coudre', '0 kg',
    'Bélier portable', '10 kg',
    'Bois de chauffage (pour un jour)', '10 kg',
    'Bougie', '0 kg',
    'Bouteille de vin en verre', '0 kg',
    'Cadenas Très simple ', '0,5 kg',
    'Cadenas Moyen', '0,5 kg',
    'Cadenas Bon', '0,5 kg',
    'Cadenas Excellent ', '0,5 kg',
    'Chaîne 3 m', '1 kg',
    'Chausse-trappes', '1 kg',
    'Chevalière', '0 kg',
    'Chope en terre cuite', '0,5 kg',
    'Cire à cacheter', '0,5 kg',
    'Clepysdre', '100 kg',
    'Cloche', '0 kg',
    'Coffre vide', '12,5 kg',
    'Corde en chanvre 15 m', '5 kg',
    'Corde en soie, 15 m', '2,5 kg',
    'Couverture d’hiver', '1,5 kg',
    'Craie, morceau', '0 kg',
    'Cruche en terre cuite', '2,5 kg',
    'Échelle, 3 m', '10 kg',
    'Encre, la fiole', '0 kg',
    'Étui à carte ou à parchemin', '0,250 kg',
    'Filet de pêche, 2,5 m2', '2,5 kg',
    'Fiole pour encre ou potion', '0,050 kg',
    'Flasque (vide)', '2,25 kg',
    'Grappin', '2 kg',
    'Hameçon', '0 kg',
    'Huile, la flasque', '0,5 kg',
    'Jarre en terre cuite ', '4,5 kg',
    'Lampe', '0,5 kg',
    'Lanterne à capote', '1 kg',
    'Lanterne sourde', '1,5 kg',
    'Longue-vue', '0,5 kg',
    'Marteau', '1 kg',
    'Masse', '5 kg',
    'Menottes', '1 kg',
    'Menottes de qualité supérieure', '1 kg',
    'Outre', '2 kg',
    'Paillasse', '2,5 kg',
    'Palan', '2,5 kg',
    'Panier (vide)', '0,5 kg',
    'Papier, la feuille', '0 kg',
    'Parchemin, la feuille', '0 kg',
    'Pelle', '4 kg',
    'Perche,', '4 kg',
    'Petit miroir en acier', '0,250 kg',
    'Pied-de-biche', '2,5 kg',
    'Pierre à aiguiser', '0,5 kg',
    'Pioche de mineur', '5 kg',
    'Piton', '0,250 kg',
    'Plume d’écriture', '0 kg',
    'Pot en fer', '2 kg',
    'Rations de survie (par jour)', '0,5 kg',
    'Sablier', '0,5 kg',
    'Sac (vide)', '0,250 kg',
    'Sac à dos (vide)', '1 kg',
    'Sacoche de ceinture (vide)', '0,5 kg',
    'Savon, 1 livre', '0,5 kg',
    'Seau (vide)', '1 kg',
    'Sifflet', '0 kg',
    'Silex et amorce', '0 kg',
    'Tente', '10 kg',
    'Toile (le m2)', '1 kg',
    'Tonneau (vide)', '15 kg',
    'Torche', '0,5 kg',

    'Substances et objets spéciaux', '0 kg',
    'Acide (flasque) 10 po', '0,5 kg',
    'Allume-feu', '0 kg',
    'Antidote (fiole)', '0 kg',
    'Bâton éclairant 2 po', '0,5 kg',
    'Bâton fumigène 20 po', '0,250 kg',
    'Eau bénite (flasque) 25 po', '0,5 kg',
    'Feu grégeois (flasque) 20 po', '0,5 kg',
    'Pierre à tonnerre 30 po', '0,5 kg',
    'Sacoche immobilisante 50 po', '2 kg',
    'Torche éternelle 110 po', '0,5 kg',

    'Matériel de classes et de compétences', '0 kg',
    'Balance 2 po', '0,5 kg',
    'Houx et gui', '0 kg',
    'Instrument de musique courant', '1,5 kg',
    'Instrument de musique de maître', '1,5 kg',
    'Grimoire (vierge)', '1,5 kg',
    'Laboratoire d’alchimie', '20 kg',
    'Loupe', '0 kg',
    'Matériel d’escalade', '2,5 kg',
    'Outils d’artisan', '2,5 kg',
    'Outils de maître artisan', '2,5 kg',
    'Outils de cambrioleur', '0,5 kg',
    'Outils de cambrioleur de qualité supérieure', '1 kg',
    'Outil de qualité supérieure', '0,5 kg',
    'Sacoche à composantes', '1 kg',
    'Symbole sacré en argent ', '0,5 kg',
    'Symbole sacré en bois', '0 kg',
    'Trousse de déguisement', '4 kg',
    'Trousse de premiers secours', '0,5 kg',

    'Vêtements', '0 kg',
    'Costume d’artiste', '2 kg',
    'Habit d’érudit', '3 kg',
    'Habit de cour', '3 kg',
    'Habit de moine', '1 kg',
    'Habit de noble', '5 kg',
    'Habit de paysan', '1 kg',
    'Tenue d’artisan', '2 kg',
    'Tenue d’explorateur', '4 kg',
    'Tenue de voyage', '2,5 kg',
    'Tenue polaire', '3,5 kg',
    'Tenue sacerdotale', '3 kg',
    'Toilette royale', '7,5 kg',

    'Nourriture et boisson', '0 kg',
    'Bière La chope', '0,5 kg',
    'Bière Le litre', '1 kg',
    'Fromage, la portion', '0,250 kg',
    'Pain, la miche', '0,250 kg',
    'Viande, la portion', '0,5 kg',
    'Vin de table (le pichet)', '3 kg',
    'Vin bon cru (la bouteille)', '0,750 kg',

    'Montures et harnachement', '0 kg',
    'Âne ou mulet', '0 kg',
    'Barde Créature de taille M x2² x1²', '0 kg',
    'Barde Créature de taille G x4² x2²', '0 kg',
    'Cheval léger', '0 kg',
    'Cheval léger (entraîné au combat)', '0 kg',
    'Cheval lourd', '0 kg',
    'Cheval lourd (entraîné au combat)', '0 kg',
    'Poney', '0 kg',
    'Poney (entraîné au combat)', '0 kg',
    'Chien de garde', '0 kg',
    'Chien de selle', '0 kg',
    'Fontes', '4 kg',
    'Mors et bride', '0,5 kg',
    'Nourriture pour animaux (par jour)', '5 kg',
    'Selle d’équitation', '12,5 kg',
    'Selle de bât', '7,5 kg',
    'Selle de guerre', '15 kg',
    'Selle spéciale d’équitation', '15 kg',
    'Selle spéciale de bât', '10 kg',
    'Selle spéciale de guerre', '20 kg'];

    for (var nombElement = 0; nombElement < équipement.length; nombElement+2) {
        objet.append('<option value="' + équipement[nombElement] + '">' + équipement[nombElement] + '</option>');
    };
}

$(function() {

});


function influenceClassePersonnage() {
    affichageArtisanat(document.form.artisanat_I_type);
    affichageArtisanat(document.form.artisanat_II_type);
    affichageArtisanat(document.form.artisanat_III_type);

    affichageProfession(document.form.profession_I_type);
    affichageProfession(document.form.profession_II_type);

    affichageReprésentation(document.form.représentation_I_type);
    affichageReprésentation(document.form.représentation_II_type);

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

    affichagelinguistique(document.form.linguistique_I);
    affichagelinguistique(document.form.linguistique_II);
    affichagelinguistique(document.form.linguistique_III);
    affichagelinguistique(document.form.linguistique_IV);
    affichagelinguistique(document.form.linguistique_V);
    affichagelinguistique(document.form.linguistique_VI);
    affichagelinguistique(document.form.linguistique_VII);
    affichagelinguistique(document.form.linguistique_VIII);
    affichagelinguistique(document.form.linguistique_IX);
    affichagelinguistique(document.form.linguistique_X);

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

    affichageArmure(document.form.armure);

    affichageBouclier(document.form.bouclier);

    affichageProtection(document.form.protection_I);
    affichageProtection(document.form.protection_II);
    affichageProtection(document.form.protection_III);
};

function influenceNiveau() {
    var competenceDeClasse = new Array();

    competenceDeClasse = ['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23'];
 
    //limitationOption('acrobatie',document.form.acrobatie_maîtrise,competenceDeClasse);
    limitationOption('art_de_la_magie',document.form.art_de_la_magie_maîtrise,competenceDeClasse);
    limitationOption('artisanat_I',document.form.artisanat_I_maîtrise,competenceDeClasse);
    limitationOption('artisanat_II',document.form.artisanat_II_maîtrise,competenceDeClasse);
    limitationOption('artisanat_III',document.form.artisanat_III_maîtrise,competenceDeClasse);
    limitationOption('bluf',document.form.bluf_maîtrise,competenceDeClasse);
    limitationOption('connaissances_I',document.form.connaissances_I_maîtrise,competenceDeClasse);
    limitationOption('connaissances_II',document.form.connaissances_II_maîtrise,competenceDeClasse);
    limitationOption('connaissances_III',document.form.connaissances_III_maîtrise,competenceDeClasse);
    limitationOption('connaissances_IV',document.form.connaissances_IV_maîtrise,competenceDeClasse);
    limitationOption('connaissances_V',document.form.connaissances_V_maîtrise,competenceDeClasse);
    limitationOption('déguisement',document.form.déguisement_maîtrise,competenceDeClasse);
    limitationOption('diplomatie',document.form.diplomatie_maîtrise,competenceDeClasse);
    limitationOption('discrétion',document.form.discrétion_maîtrise,competenceDeClasse);
    limitationOption('dressage',document.form.dressage_maîtrise,competenceDeClasse);
    limitationOption('equitation',document.form.equitation_maîtrise,competenceDeClasse);
    limitationOption('escalade',document.form.escalade_maîtrise,competenceDeClasse);
    limitationOption('escamotage',document.form.escamotage_maîtrise,competenceDeClasse);
    limitationOption('estimation',document.form.estimation_maîtrise,competenceDeClasse);
    limitationOption('évasion',document.form.évasion_maîtrise,competenceDeClasse);
    limitationOption('intimidation',document.form.intimidation_maîtrise,competenceDeClasse);
    limitationOption('linguistique',document.form.linguistique_maîtrise,competenceDeClasse);
    limitationOption('natation',document.form.natation_maîtrise,competenceDeClasse);
    limitationOption('perception',document.form.perception_maîtrise,competenceDeClasse);
    limitationOption('premier_secours',document.form.premier_secours_maîtrise,competenceDeClasse);
    limitationOption('profession_I',document.form.profession_I_maîtrise,competenceDeClasse);
    limitationOption('profession_II',document.form.profession_II_maîtrise,competenceDeClasse);
    limitationOption('psychologie',document.form.psychologie_maîtrise,competenceDeClasse);
    limitationOption('représentation_I',document.form.représentation_I_maîtrise,competenceDeClasse);
    limitationOption('représentation_II',document.form.représentation_II_maîtrise,competenceDeClasse);
    limitationOption('survie',document.form.survie_maîtrise,competenceDeClasse);
    limitationOption('utilisation_d_objets_magiques',document.form.utilisation_d_objets_magiques_maîtrise,competenceDeClasse);

    affichagePointsExperience($('#niveau').val());
};

//function limitationOption(competenceI,competenceII,competenceDeClasse) {
//    switch(document.getElementById(competenceI).html()) {
//        case '<h2>X</h2>' :
//            for (var nombElement = 0; nombElement < (parseInt($('#ide').html()) + 1); nombElement++) {
//                competenceII.options[nombElement] = new Option(competenceDeClasse[nombElement],competenceDeClasse[nombElement]);
//            };
//            break;
//        case '<h2>O</h2>' :
//            for (var nombElement = 0; nombElement < (parseInt($('#hide').html()) + 1); nombElement++) {
//                competenceII.options[nombElement] = new Option(competenceDeClasse[nombElement],competenceDeClasse[nombElement]);
//            };
//            break;
//    };
//}

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
    GnomePM = ['20 kg','20,5 kg','21 kg','21,5 kg','22 kg','22,5 kg','23 kg','23,5 kg','24 kg','2', '4,5 kg','25 kg'];
    GnomePF = ['17 kg','17,5 kg','18 kg','18,5 kg','19 kg','19,5 kg','20 kg','20,5 kg','21 kg','21,5 kg','22 kg'];
    HalfelinPM = ['15 kg','15,5 kg','16 kg','16,5 kg','17 kg','17,5 kg','18 kg','18,5 kg','19 kg','19,5 kg','20 kg'];
    HalfelinPF = ['12 kg','12,5 kg','13 kg','13,5 kg','14 kg','1', '4,5 kg','15 kg','15,5 kg','16 kg','16,5 kg','17 kg'];
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

function influenceSag() {
	var valeur = parseInt(document.form.sag_val.value);
	var resultatTable_1_3_modificateur = Table_1_3_modificateur(valeur);

	$('#sag_mod').html(resultatTable_1_3_modificateur);

	$('#sau_mod_car_vol').html(resultatTable_1_3_modificateur);

	calculeVolonte();

    for (var i = 0; i < document.getElementsByClassName('carac_sag').length; i++) {
        if (isNaN(parseInt(document.getElementsByClassName('carac_sag')[i].html))) {
            var valeur = 0;
        } else {
            var valeur = parseInt(document.getElementsByClassName('carac_sag')[i].html);
        };

        document.getElementsByClassName('carac_sag')[i].html(valeur
                                                                  + resultatTable_1_3_modificateur);
    };
};

function influenceCha() {
	var valeur = parseInt(document.form.cha_val.value);
    var resultatTable_1_3_modificateur = Table_1_3_modificateur(valeur);

	$('#cha_mod').html(resultatTable_1_3_modificateur);

    for (var i = 0; i < document.getElementsByClassName('carac_cha').length; i++) {
        if (isNaN(parseInt(document.getElementsByClassName('carac_cha')[i].html))) {
            var valeur = 0;
        } else {
            var valeur = parseInt(document.getElementsByClassName('carac_cha')[i].html);
        };

        document.getElementsByClassName('carac_cha')[i].html(valeur
                                                                  + resultatTable_1_3_modificateur);
    };
};

function Table_1_3_modificateur(valeur) {
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
			niveau = parseInt($('#niveau').val()) - 1;
			pvNiv = pvBase + Math.round(niveau * (6.5 + parseInt(bonusParNiveau)));
			break;
		case 'Barde' :
			/* Calcule premier niveau */
			pvBase = 6 + parseInt(bonusParNiveau);
			/* Calcule niveau suivant */
			niveau = parseInt($('#niveau').val()) - 1;
			pvNiv = pvBase + Math.round(niveau * (3.5 + parseInt(bonusParNiveau)));
			break;
		case 'Druide' :
			/* Calcule premier niveau */
			pvBase = 8 + parseInt(bonusParNiveau);
			/* Calcule niveau suivant */
			niveau = parseInt($('#niveau').val()) - 1;
			pvNiv = pvBase + Math.round(niveau * (4.5 + parseInt(bonusParNiveau)));
			break;
		case 'Ensorceleur' :
			/* Calcule premier niveau */
			pvBase = 4 + parseInt(bonusParNiveau);
			/* Calcule niveau suivant */
			niveau = parseInt($('#niveau').val()) - 1;
			pvNiv = pvBase + Math.round(niveau * (2.5 + parseInt(bonusParNiveau)));
			break;
		case 'Guerrier' :
			/* Calcule premier niveau */
			pvBase = 10 + parseInt(bonusParNiveau);
			/* Calcule niveau suivant */
			niveau = parseInt($('#niveau').val()) - 1;
			pvNiv = pvBase + Math.round(niveau * (5.5 + parseInt(bonusParNiveau)));
			break;
		case 'Magicien' :
			/* Calcule premier niveau */
			pvBase = 4 + parseInt(bonusParNiveau);
			/* Calcule niveau suivant */
			niveau = parseInt($('#niveau').val()) - 1;
			pvNiv = pvBase + Math.round(niveau * (2.5 + parseInt(bonusParNiveau)));
			break;
		case 'Moine' :
			/* Calcule premier niveau */
			pvBase = 8 + parseInt(bonusParNiveau);
			/* Calcule niveau suivant */
			niveau = parseInt($('#niveau').val()) - 1;
			pvNiv = pvBase + Math.round(niveau * (4.5 + parseInt(bonusParNiveau)));
			break;
		case 'Paladin' :
			/* Calcule premier niveau */
			pvBase = 10 + parseInt(bonusParNiveau);
			/* Calcule niveau suivant */
			niveau = parseInt($('#niveau').val()) - 1;
			pvNiv = pvBase + Math.round(niveau * (5.5 + parseInt(bonusParNiveau)));
			break;
		case 'Prêtre' :
			/* Calcule premier niveau */
			pvBase = 8 + parseInt(bonusParNiveau);
			/* Calcule niveau suivant */
			niveau = parseInt($('#niveau').val()) - 1;
			pvNiv = pvBase + Math.round(niveau * (4.5 + parseInt(bonusParNiveau)));
			break;
		case 'Rôdeur' :
			/* Calcule premier niveau */
			pvBase = 8 + parseInt(bonusParNiveau);
			/* Calcule niveau suivant */
			niveau = parseInt($('#niveau').val()) - 1;
			pvNiv = pvBase + Math.round(niveau * (4.5 + parseInt(bonusParNiveau)));
			break;
		case 'Roublard' :
			/* Calcule premier niveau */
			pvBase = 6 + parseInt(bonusParNiveau);
			/* Calcule niveau suivant */
			niveau = parseInt($('#niveau').val()) - 1;
			pvNiv = pvBase + Math.round(niveau * (3.5 + parseInt(bonusParNiveau)));
			break;
		}

		return pvNiv;
};


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
    total = total + testCalculeSommeCompetencesI('connaissances_I',document.form.connaissances_I_maîtrise);
    total = total + testCalculeSommeCompetencesI('connaissances_II',document.form.connaissances_II_maîtrise);
    total = total + testCalculeSommeCompetencesI('connaissances_III',document.form.connaissances_III_maîtrise);
    total = total + testCalculeSommeCompetencesI('connaissances_IV',document.form.connaissances_IV_maîtrise);
    total = total + testCalculeSommeCompetencesI('connaissances_V',document.form.connaissances_V_maîtrise);
    total = total + testCalculeSommeCompetencesI('déguisement',document.form.déguisement_maîtrise);
    total = total + testCalculeSommeCompetencesI('diplomatie',document.form.diplomatie_maîtrise);
    total = total + testCalculeSommeCompetencesI('discrétion',document.form.discrétion_maîtrise);
    total = total + testCalculeSommeCompetencesI('dressage',document.form.dressage_maîtrise);
    total = total + testCalculeSommeCompetencesI('equitation',document.form.equitation_maîtrise);
    total = total + testCalculeSommeCompetencesI('escalade',document.form.escalade_maîtrise);
    total = total + testCalculeSommeCompetencesI('escamotage',document.form.escamotage_maîtrise);
    total = total + testCalculeSommeCompetencesI('estimation',document.form.estimation_maîtrise);
    total = total + testCalculeSommeCompetencesI('évasion',document.form.évasion_maîtrise);
    total = total + testCalculeSommeCompetencesI('intimidation',document.form.intimidation_maîtrise);
    total = total + testCalculeSommeCompetencesI('linguistique',document.form.linguistique_maîtrise);
    total = total + testCalculeSommeCompetencesI('natation',document.form.natation_maîtrise);
    total = total + testCalculeSommeCompetencesI('perception',document.form.perception_maîtrise);
    total = total + testCalculeSommeCompetencesI('premier_secours',document.form.premier_secours_maîtrise);
    total = total + testCalculeSommeCompetencesI('profession_I',document.form.profession_I_maîtrise);
    total = total + testCalculeSommeCompetencesI('profession_II',document.form.profession_II_maîtrise);
    total = total + testCalculeSommeCompetencesI('psychologie',document.form.psychologie_maîtrise);
    total = total + testCalculeSommeCompetencesI('représentation_I',document.form.représentation_I_maîtrise);
    total = total + testCalculeSommeCompetencesI('représentation_II',document.form.représentation_II_maîtrise);
    total = total + testCalculeSommeCompetencesI('survie',document.form.survie_maîtrise);
    total = total + testCalculeSommeCompetencesI('utilisation_d_objets_magiques',document.form.utilisation_d_objets_magiques_maîtrise);

    var nombreAutorisé = 0;
    var valeur = 0;

    switch(document.form.classe.value) {
        case ' ' :
            break;
        case 'Barbare' :
            nombreAutorisé = (4 + parseInt($('#int_mod').html)) * (parseInt($('#niveau').val()) + 3);
            if (document.form.race.value == 'Humain') {nombreAutorisé = nombreAutorisé + parseInt($('#niveau').val()) + 3};
            testCalculeSommeCompetencesII(total,nombreAutorisé);
            break;
        case 'Barde' :
            nombreAutorisé = (6 + parseInt($('#int_mod').html)) * (parseInt($('#niveau').val()) + 3);
            if (document.form.race.value == 'Humain') {nombreAutorisé = nombreAutorisé + parseInt($('#niveau').val()) + 3};
            testCalculeSommeCompetencesII(total,nombreAutorisé);
            break;
        case 'Druide' :
            nombreAutorisé = (4 + parseInt($('#int_mod').html)) * (parseInt($('#niveau').val()) + 3);
            if (document.form.race.value == 'Humain') {nombreAutorisé = nombreAutorisé + parseInt($('#niveau').val()) + 3};
            testCalculeSommeCompetencesII(total,nombreAutorisé);
            break;
        case 'Ensorceleur' :
            nombreAutorisé = (2 + parseInt($('#int_mod').html)) * (parseInt($('#niveau').val()) + 3);
            if (document.form.race.value == 'Humain') {nombreAutorisé = nombreAutorisé + parseInt($('#niveau').val()) + 3};
            testCalculeSommeCompetencesII(total,nombreAutorisé);
            break;
        case 'Guerrier' :
            nombreAutorisé = (2 + parseInt($('#int_mod').html)) * (parseInt($('#niveau').val()) + 3);
            if (document.form.race.value == 'Humain') {nombreAutorisé = nombreAutorisé + parseInt($('#niveau').val()) + 3};
            testCalculeSommeCompetencesII(total,nombreAutorisé);
            break;
        case 'Magicien' :
            nombreAutorisé = (2 + parseInt($('#int_mod').html)) * (parseInt($('#niveau').val()) + 3);
            if (document.form.race.value == 'Humain') {nombreAutorisé = nombreAutorisé + parseInt($('#niveau').val()) + 3};
            testCalculeSommeCompetencesII(total,nombreAutorisé);
            break;
        case 'Moine' :
            nombreAutorisé = (4 + parseInt($('#int_mod').html)) * (parseInt($('#niveau').val()) + 3);
            if (document.form.race.value == 'Humain') {nombreAutorisé = nombreAutorisé + parseInt($('#niveau').val()) + 3};
            testCalculeSommeCompetencesII(total,nombreAutorisé);
            break;
        case 'Paladin' :
            nombreAutorisé = (2 + parseInt($('#int_mod').html)) * (parseInt($('#niveau').val()) + 3);
            if (document.form.race.value == 'Humain') {nombreAutorisé = nombreAutorisé + parseInt($('#niveau').val()) + 3};            
            testCalculeSommeCompetencesII(total,nombreAutorisé);
            break;
        case 'Prêtre' :
            nombreAutorisé = (2 + parseInt($('#int_mod').html)) * (parseInt($('#niveau').val()) + 3);
            if (document.form.race.value == 'Humain') {nombreAutorisé = nombreAutorisé + parseInt($('#niveau').val()) + 3};            
            testCalculeSommeCompetencesII(total,nombreAutorisé);
            break;
        case 'Rôdeur' :
            nombreAutorisé = (6 + parseInt($('#int_mod').html)) * (parseInt($('#niveau').val()) + 3);
            if (document.form.race.value == 'Humain') {nombreAutorisé = nombreAutorisé + parseInt($('#niveau').val()) + 3};
            testCalculeSommeCompetencesII(total,nombreAutorisé);
            break;
        case 'Roublard' :
            nombreAutorisé = (8 + parseInt($('#int_mod').html)) * (parseInt($('#niveau').val()) + 3);
            if (document.form.race.value == 'Humain') {nombreAutorisé = nombreAutorisé + parseInt($('#niveau').val()) + 3};
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

function affichagelinguistique(linguistique) {
    var linguistiqueTableau = new Array();

    linguistiqueTableau = [') ','Abyssale','Aérienne','Aquatique','Céleste','Commune','Commune des profondeurs','Draconien','Druides','Elfique',
                      'Géants','Gnoll','Gnome','Gobeline','Halfeline','Igneuse','Infernale','Nains','Orque','Sylvestre','Terreuse'];

    for (var nombElement = 0; nombElement < linguistiqueTableau.length; nombElement++) {
        linguistique.options[nombElement] = new Option(linguistiqueTableau[nombElement],linguistiqueTableau[nombElement]);
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
    switch($('#niveau').val()) {
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

    $('#totalCompetencePerception').html('');
    $('#totalCompetenceDiplomatie').html('');
    $('#totalCompetenceEscalade').html('');

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
    $('#chargeDessus').html('');
    $('#soulever').html('');
    $('#PousserOuTirer').html('');

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

    $('#capacites_speciales_I').html('_');
    $('#capacites_speciales_II').html('_');
    $('#capacites_speciales_III').html('_');
    $('#capacites_speciales_IV').html('_');
    $('#capacites_speciales_V').html('_');
    $('#capacites_speciales_VI').html('_');
    $('#capacites_speciales_VII').html('_');
    $('#capacites_speciales_VIII').html('_');
    $('#capacites_speciales_IX').html('_');
    $('#capacites_speciales_X').html('_');
    $('#capacites_speciales_XI').html('_');
    $('#capacites_speciales_XII').html('_');
    $('#capacites_speciales_XIII').html('_');
    $('#capacites_speciales_XIV').html('_');
    $('#capacites_speciales_XV').html('_');
    $('#capacites_speciales_XVI').html('_');
    $('#capacites_speciales_XVII').html('_');
    $('#capacites_speciales_XVIII').html('_');
    $('#capacites_speciales_XIX').html('_');
    $('#capacites_speciales_XX').html('_');

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