function affichageObjet(objet, poids) {
    var équipement = new Array();

    équipement = ['--- Armes', '0kg',
    'Gantelet', '0,5kg',
    'Dague', '0,5kg',
    'Dague coup-de-poing', '0,5kg',
    'Gantelet clouté', '0,5kg',
    'Masse d’armes légère', '2kg',
    'Serpe', '1kg',
    'Épieu', '1,5kg',
    'Gourdin', '1,5kg',
    'Masse d’armes lourde', '4kg',
    'Morgenstern', '3kg',
    'Bâton', '2kg',
    'Pique ', '4,5kg',
    'Lance', '3kg',
    'Arbalète légère', '2kg',
    'Carreaux (10)', '0,5kg',
    'Arbalète lourde', '4kg',
    'Carreaux (10)', '0,5kg',
    'Dard', '0,250kg',
    'Fronde', '0kg',
    'Billes (10)', '2,5kg',
    'Javeline', '1kg',
    'Sarbacane', '0,5kg',
    'Dard, sarbacane', '0kg',
    'Épée courte', '1kg',
    'Hache de lancer', '2kg',
    'Hachette', '1,5kg',
    'Kukri', '1kg',
    'Lamétoile', '1,5kg',
    'Matraque', '1kg',
    'Marteau, léger', '2kg',
    'Pic de guerre, léger', '1,5kg',
    'Rondache spécial', '0kg',
    'Rondache à pointes spécial', '0kg',
    'Cimeterre', '2kg',
    'Écu spécial', '0kg',
    'Écu à pointes spécial', '0kg',
    'Épée longue', '2kg',
    'Fléau d’armes léger', '2,5kg',
    'Hache d’armes', '3kg',
    'Marteau de guerre', '2,5kg',
    'Pic de guerre lourd', '3kg',
    'Rapière', '1kg',
    'Trident', '2kg',
    'Cimeterre à deux mains', '4kg',
    'Corsèque', '6kg',
    'Coutille', '5kg',
    'Épée à deux mains', '4kg',
    'Faux', '5kg', 
    'Fléau d’armes lourd', '5kg',
    'Grande hache', '6kg',
    'Guisarme', '6kg',
    'Halllebarde', '6kg',
    'Lance d’arçon', '5kg',
    'Massue', '4kg',
    'Arc court', '1kg',
    'Flèches (20)', '1,5kg',
    'Arc court composite', '1kg',
    'Flèches (20)', '1,5kg',
    'Arc long', '1,5kg',
    'Flèches (20)', '1,5kg',
    'Arc long composite', '1,5kg',
    'Flèches (20)', '1,5kg',
    'Kama', '1kg',
    'Nunchaku', '1kg',
    'Sai', '0,5kg',
    'Siangham', '0,5kg',
    'Épée bâtarde', '3kg',
    'Fouet', '1kg',
    'Hache de guerre naine', '4kg',
    'Chaîne cloutée', '5kg',
    'Double-lame', '5kg',
    'Fléau double', '5kg',
    'Hache double orque', '7,5kg',
    'Lame elfique incurvée', '3,5kg',
    'Marteau-piolet gnome', '3kg',
    'Urgrosh nain', '6kg',
    'Arbalète de poing', '1kg',
    'Carreaux', '0,5kg',
    'Arbalète légère à répétition', '3kg',
    'Arbalète lourde à répétition', '6kg',
    'Bâton de jet halfelin', '1,5kg',
    'Billes de fronde', '2,5kg',
    'Bolas', '1kg',
    'Filet', '3kg',
    'Shuriken', '0,250kg',

    '--- Armure', '0kg',
    'Armure matelassée', '5kg',
    'Armure de cuir', '7,5kg',
    'Armure de cuir cloutée', '10kg',
    'Chemise de mailles', '12,5kg',
    'Armure de peau', '12,5kg',
    'Armure d’écailles', '15kg',
    'Cotte de mailles', '20kg',
    'Cuirasse', '15kg',
    'Clibanion', '22,5kg',
    'Crevice', '17,5kg',
    'Armure de plaques', '25kg',
    'Harnois', '25kg',
    'Targe', '2,5kg',
    'Rondache en bois', '2,5kg',
    'Rondache en acier', '3kg',
    'Écu en bois', '5kg',
    'Écu en acier', '7,5kg',
    'Pavois', '22,5kg',
    'Gantelet d’armes', '2,5kg',
    'Pointes pour armure', '5kg',
    'Pointes pour bouclier', '2,5kg',

    '--- Matériel d’aventurier', '0kg',
    'Aiguille à coudre', '0kg',
    'Bélier portable', '10kg',
    'Bois de chauffage (pour un jour)', '10kg',
    'Bougie', '0kg',
    'Bouteille de vin en verre', '0kg',
    'Cadenas Très simple ', '0,5kg',
    'Cadenas Moyen', '0,5kg',
    'Cadenas Bon', '0,5kg',
    'Cadenas Excellent ', '0,5kg',
    'Chaîne 3 m', '1kg',
    'Chausse-trappes', '1kg',
    'Chevalière', '0kg',
    'Chope en terre cuite', '0,5kg',
    'Cire à cacheter', '0,5kg',
    'Clepysdre', '100kg',
    'Cloche', '0kg',
    'Coffre vide', '12,5kg',
    'Corde en chanvre 15 m', '5kg',
    'Corde en soie, 15 m', '2,5kg',
    'Couverture d’hiver', '1,5kg',
    'Craie, morceau', '0kg',
    'Cruche en terre cuite', '2,5kg',
    'Échelle, 3 m', '10kg',
    'Encre, la fiole', '0kg',
    'Étui à carte ou à parchemin', '0,250kg',
    'Filet de pêche, 2,5 m2', '2,5kg',
    'Fiole pour encre ou potion', '0,050kg',
    'Flasque (vide)', '2,25kg',
    'Grappin', '2kg',
    'Hameçon', '0kg',
    'Huile, la flasque', '0,5kg',
    'Jarre en terre cuite ', '4,5kg',
    'Lampe', '0,5kg',
    'Lanterne à capote', '1kg',
    'Lanterne sourde', '1,5kg',
    'Longue-vue', '0,5kg',
    'Marteau', '1kg',
    'Masse', '5kg',
    'Menottes', '1kg',
    'Menottes de qualité supérieure', '1kg',
    'Outre', '2kg',
    'Paillasse', '2,5kg',
    'Palan', '2,5kg',
    'Panier (vide)', '0,5kg',
    'Papier, la feuille', '0kg',
    'Parchemin, la feuille', '0kg',
    'Pelle', '4kg',
    'Perche,', '4kg',
    'Petit miroir en acier', '0,250kg',
    'Pied-de-biche', '2,5kg',
    'Pierre à aiguiser', '0,5kg',
    'Pioche de mineur', '5kg',
    'Piton', '0,250kg',
    'Plume d’écriture', '0kg',
    'Pot en fer', '2kg',
    'Rations de survie (par jour)', '0,5kg',
    'Sablier', '0,5kg',
    'Sac (vide)', '0,250kg',
    'Sac à dos (vide)', '1kg',
    'Sacoche de ceinture (vide)', '0,5kg',
    'Savon, 1 livre', '0,5kg',
    'Seau (vide)', '1kg',
    'Sifflet', '0kg',
    'Silex et amorce', '0kg',
    'Tente', '10kg',
    'Toile (le m2)', '1kg',
    'Tonneau (vide)', '15kg',
    'Torche', '0,5kg',

    '--- Substances et objets spéciaux', '0kg',
    'Acide (flasque) 10 po', '0,5kg',
    'Allume-feu', '0kg',
    'Antidote (fiole)', '0kg',
    'Bâton éclairant 2 po', '0,5kg',
    'Bâton fumigène 20 po', '0,250kg',
    'Eau bénite (flasque) 25 po', '0,5kg',
    'Feu grégeois (flasque) 20 po', '0,5kg',
    'Pierre à tonnerre 30 po', '0,5kg',
    'Sacoche immobilisante 50 po', '2kg',
    'Torche éternelle 110 po', '0,5kg',

    '--- Matériel de classes et de compétences', '0kg',
    'Balance 2 po', '0,5kg',
    'Houx et gui', '0kg',
    'Instrument de musique courant', '1,5kg',
    'Instrument de musique de maître', '1,5kg',
    'Grimoire (vierge)', '1,5kg',
    'Laboratoire d’alchimie', '20kg',
    'Loupe', '0kg',
    'Matériel d’escalade', '2,5kg',
    'Outils d’artisan', '2,5kg',
    'Outils de maître artisan', '2,5kg',
    'Outils de cambrioleur', '0,5kg',
    'Outils de cambrioleur de qualité supérieure', '1kg',
    'Outil de qualité supérieure', '0,5kg',
    'Sacoche à composantes', '1kg',
    'Symbole sacré en argent ', '0,5kg',
    'Symbole sacré en bois', '0kg',
    'Trousse de déguisement', '4kg',
    'Trousse de premiers secours', '0,5kg',

    '--- Vêtements', '0kg',
    'Costume d’artiste', '2kg',
    'Habit d’érudit', '3kg',
    'Habit de cour', '3kg',
    'Habit de moine', '1kg',
    'Habit de noble', '5kg',
    'Habit de paysan', '1kg',
    'Tenue d’artisan', '2kg',
    'Tenue d’explorateur', '4kg',
    'Tenue de voyage', '2,5kg',
    'Tenue polaire', '3,5kg',
    'Tenue sacerdotale', '3kg',
    'Toilette royale', '7,5kg',

    '--- Nourriture et boisson', '0kg',
    'Bière La chope', '0,5kg',
    'Bière Le litre', '1kg',
    'Fromage, la portion', '0,250kg',
    'Pain, la miche', '0,250kg',
    'Viande, la portion', '0,5kg',
    'Vin de table (le pichet)', '3kg',
    'Vin bon cru (la bouteille)', '0,750kg',

    '--- Montures et harnachement', '0kg',
    'Âne ou mulet', '0kg',
    'Barde Créature de taille M x2² x1²', '0kg',
    'Barde Créature de taille G x4² x2²', '0kg',
    'Cheval léger', '0kg',
    'Cheval léger (entraîné au combat)', '0kg',
    'Cheval lourd', '0kg',
    'Cheval lourd (entraîné au combat)', '0kg',
    'Poney', '0kg',
    'Poney (entraîné au combat)', '0kg',
    'Chien de garde', '0kg',
    'Chien de selle', '0kg',
    'Fontes', '4kg',
    'Mors et bride', '0,5kg',
    'Nourriture pour animaux (par jour)', '5kg',
    'Selle d’équitation', '12,5kg',
    'Selle de bât', '7,5kg',
    'Selle de guerre', '15kg',
    'Selle spéciale d’équitation', '15kg',
    'Selle spéciale de bât', '10kg',
    'Selle spéciale de guerre', '20kg'];

    for (var nombElement = 0; nombElement < équipement.length; nombElement = nombElement + 2) {
        objet.append('<option value="' + équipement[nombElement] + '">' + équipement[nombElement] + '</option>');
    };

    return équipement;
};

function DeduitPoids(équipement, objet, poids) {
    for (var nombElement = 0; nombElement < équipement.length; nombElement = nombElement + 2) {
        if (objet.val() == équipement[nombElement]) {
            poids.html(équipement[nombElement + 1]);            };
    };
};

function addPoids(poids) {
    switch (poids.html()) {
        case '0kg'    : return  0.000; break;
        case '0,250kg' : return  0.250; break;
        case '0,5kg'  : return  0.500; break;
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
        case '23kg'   : return 23.000; break;
        case '23,5kg' : return 23.500; break;
        case '24kg'   : return 24.000; break;
        case '24,5kg' : return 24.500; break;
        case '25kg'   : return 25.000; break;
        case '25,5kg' : return 25.500; break;
        default       : return  0.000; break;
    };
}

function calculePoidsTotal() {
    var Poidstotal = 0;

    Poidstotal = Poidstotal + parseFloat(addPoids($('#poids_I')));
    Poidstotal = Poidstotal + parseFloat(addPoids($('#poids_II')));
    Poidstotal = Poidstotal + parseFloat(addPoids($('#poids_III')));
    Poidstotal = Poidstotal + parseFloat(addPoids($('#poids_IV')));
    Poidstotal = Poidstotal + parseFloat(addPoids($('#poids_V')));
    Poidstotal = Poidstotal + parseFloat(addPoids($('#poids_VI')));
    Poidstotal = Poidstotal + parseFloat(addPoids($('#poids_VII')));
    Poidstotal = Poidstotal + parseFloat(addPoids($('#poids_VIII')));
    Poidstotal = Poidstotal + parseFloat(addPoids($('#poids_IX')));
    Poidstotal = Poidstotal + parseFloat(addPoids($('#poids_X')));
    Poidstotal = Poidstotal + parseFloat(addPoids($('#poids_XI')));
    Poidstotal = Poidstotal + parseFloat(addPoids($('#poids_XII')));
    Poidstotal = Poidstotal + parseFloat(addPoids($('#poids_XIII')));
    Poidstotal = Poidstotal + parseFloat(addPoids($('#poids_XIV')));
    Poidstotal = Poidstotal + parseFloat(addPoids($('#poids_XV')));
    Poidstotal = Poidstotal + parseFloat(addPoids($('#poids_XVI')));
    Poidstotal = Poidstotal + parseFloat(addPoids($('#poids_XVII')));
    Poidstotal = Poidstotal + parseFloat(addPoids($('#poids_XVIII')));
    Poidstotal = Poidstotal + parseFloat(addPoids($('#poids_XIX')));
    Poidstotal = Poidstotal + parseFloat(addPoids($('#poids_XX')));
    Poidstotal = Poidstotal + parseFloat(addPoids($('#poids_XXI')));
    Poidstotal = Poidstotal + parseFloat(addPoids($('#poids_XXII')));
    Poidstotal = Poidstotal + parseFloat(addPoids($('#poids_XXIII')));

    $('#poids_total').html(Poidstotal + 'kg');
}; 

$(function() {
    $('#classe').change(function() {
        équipement = affichageObjet($('#objet_I'), $('#poids_I'));
    });

    $('#objet_I').change(function() {
        DeduitPoids(équipement, $('#objet_I'), $('#poids_I'))
        calculePoidsTotal();
        équipement = affichageObjet($('#objet_II'), $('#poids_II'));
    });

    $('#objet_II').change(function() {
        DeduitPoids(équipement, $('#objet_II'), $('#poids_II'))
        calculePoidsTotal();
        équipement = affichageObjet($('#objet_III'), $('#poids_III'));
    });

    $('#objet_III').change(function() {
        DeduitPoids(équipement, $('#objet_III'), $('#poids_III'))
        calculePoidsTotal();
        équipement = affichageObjet($('#objet_IV'), $('#poids_IV'));
    });

    $('#objet_IV').change(function() {
        DeduitPoids(équipement, $('#objet_IV'), $('#poids_IV'))
        calculePoidsTotal();
        équipement = affichageObjet($('#objet_V'), $('#poids_V'));
    });

    $('#objet_V').change(function() {
        DeduitPoids(équipement, $('#objet_V'), $('#poids_V'))
        calculePoidsTotal();
        équipement = affichageObjet($('#objet_VI'), $('#poids_VI'));
    });

    $('#objet_VI').change(function() {
        DeduitPoids(équipement, $('#objet_VI'), $('#poids_VI'))
        calculePoidsTotal();
        équipement = affichageObjet($('#objet_VII'), $('#poids_VII'));
    });

    $('#objet_VII').change(function() {
        DeduitPoids(équipement, $('#objet_VII'), $('#poids_VII'))
        calculePoidsTotal();
        équipement = affichageObjet($('#objet_VIII'), $('#poids_VIII'));
    });

    $('#objet_VIII').change(function() {
        DeduitPoids(équipement, $('#objet_VIII'), $('#poids_VIII'))
        calculePoidsTotal();
        équipement = affichageObjet($('#objet_IX'), $('#poids_IX'));
    });

    $('#objet_IX').change(function() {
        DeduitPoids(équipement, $('#objet_IX'), $('#poids_IX'))
        calculePoidsTotal();
        équipement = affichageObjet($('#objet_X'), $('#poids_X'));
    });

    $('#objet_X').change(function() {
        DeduitPoids(équipement, $('#objet_X'), $('#poids_X'))
        calculePoidsTotal();
        équipement = affichageObjet($('#objet_XI'), $('#poids_XI'));
    });

    $('#objet_XI').change(function() {
        DeduitPoids(équipement, $('#objet_XI'), $('#poids_XI'))
        calculePoidsTotal();
        équipement = affichageObjet($('#objet_XII'), $('#poids_XII'));
    });

    $('#objet_XII').change(function() {
        DeduitPoids(équipement, $('#objet_XII'), $('#poids_XII'))
        calculePoidsTotal();
        équipement = affichageObjet($('#objet_XIII'), $('#poids_XIII'));
    });

    $('#objet_XIII').change(function() {
        DeduitPoids(équipement, $('#objet_XIII'), $('#poids_XIII'))
        calculePoidsTotal();
        équipement = affichageObjet($('#objet_XIV'), $('#poids_XIV'));
    });

    $('#objet_XIV').change(function() {
        DeduitPoids(équipement, $('#objet_XIV'), $('#poids_XIV'))
        calculePoidsTotal();
        équipement = affichageObjet($('#objet_XV'), $('#poids_XV'));
    });

    $('#objet_XV').change(function() {
        DeduitPoids(équipement, $('#objet_XV'), $('#poids_XV'))
        calculePoidsTotal();
        équipement = affichageObjet($('#objet_XVI'), $('#poids_XVI'));
    });

    $('#objet_XVI').change(function() {
        DeduitPoids(équipement, $('#objet_XVI'), $('#poids_XVI'))
        calculePoidsTotal();
        équipement = affichageObjet($('#objet_XVII'), $('#poids_XVII'));
    });

    $('#objet_XVII').change(function() {
        DeduitPoids(équipement, $('#objet_XVII'), $('#poids_XVII'))
        calculePoidsTotal();
        équipement = affichageObjet($('#objet_XVIII'), $('#poids_XVIII'));
    });

    $('#objet_XVIII').change(function() {
        DeduitPoids(équipement, $('#objet_XVIII'), $('#poids_XVIII'))
        calculePoidsTotal();
        équipement = affichageObjet($('#objet_XIX'), $('#poids_XIX'));
    });

    $('#objet_XIX').change(function() {
        DeduitPoids(équipement, $('#objet_XIX'), $('#poids_XIX'))
        calculePoidsTotal();
        équipement = affichageObjet($('#objet_XX'), $('#poids_XX'));
    });

    $('#objet_XX').change(function() {
        DeduitPoids(équipement, $('#objet_XX'), $('#poids_XX'))
        calculePoidsTotal();
        équipement = affichageObjet($('#objet_XXI'), $('#poids_XXI'));
    });

    $('#objet_XXI').change(function() {
        DeduitPoids(équipement, $('#objet_XXI'), $('#poids_XXI'))
        calculePoidsTotal();
        équipement = affichageObjet($('#objet_XXII'), $('#poids_XXII'));
    });

    $('#objet_XXII').change(function() {
        DeduitPoids(équipement, $('#objet_XXII'), $('#poids_XXII'))
        calculePoidsTotal();
        équipement = affichageObjet($('#objet_XXIII'), $('#poids_XXIII'));
    });

    $('#objet_XXIII').change(function() {
        DeduitPoids(équipement, $('#objet_XXIII'), $('#poids_XXIII'))
        calculePoidsTotal();
    });
});
