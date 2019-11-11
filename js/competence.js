function affichageArtisanat(artisanat) {
    var artisanatType = new Array();

    artisanatType = [' ','Alchimie','Calligraphie','Cordonnerie','Fabrication d\'arcs','Fabrication d\'armes','Fabrication d\'armures',
                     'Fabrication de navires','Fabrication de pièges','Ferronerie','Maroquinerie','Maçonnerie','Peinture','Poterie',
                     'Reliure','Sculture','Serrurerie','Taille des gemmes','Travail du bois','Travail de la forge','Travaux de charpente',
                     'Tissage','Vanerie'];

    for (var nombElement = 0; nombElement < artisanatType.length; nombElement++) {
        artisanat.append('<option value="' + artisanatType[nombElement] + '">' + artisanatType[nombElement] + '</option>');
    };

    return artisanatType;
}

function affichageProfession(profession) {
    var professionType = new Array();

    professionType = [' ','Apothicaire','Berger','Brasseur','Bûcheron','Canotier','Chasseur','Conducteur d\'attelage','Cuisinier',
                        'Eleveur','Fermier','Garçon d\'ecurie','Guide','Herboriste','Ingénieur de siège','Libraire','Marin','Meunier',
                        'Mineur ','Pêcheur','Porteur','Scibe','Taneur','Tavernier'];


    for (var nombElement = 0; nombElement < professionType.length; nombElement++) {
        profession.append('<option value="' + professionType[nombElement] + '">' + professionType[nombElement] + '</option>');
    };
}

function affichageReprésentation(representation) {
    var representationType = new Array();

    representationType = [' ','Chant','Danse','Déclamation','Farce','Instrument à clavier','Instrument à cordes','Instrument à vent',
                            'Percussion','Scène'];


    for (var nombElement = 0; nombElement < representationType.length; nombElement++) {
        representation.append('<option value="' + representationType[nombElement] + '">' + representationType[nombElement] + '</option>');
    };
}

function calculeCompetence(carac,rang,divers) {
    var total = 0;
    var totalN = ' ';

    total = parseInt(carac.html())
                 + parseInt(rang.val())
                 + parseInt(divers.val());
    return total;
};

function calculeSommeCompetences() {
    var total = 0;

    total = total + parseInt($('#rang_Acrobatie').val());
    total = total + parseInt($('#rang_artisanat_I').val());
    total = total + parseInt($('#rang_artisanat_II').val());
    total = total + parseInt($('#rang_artisanat_III').val());
    total = total + parseInt($('#rang_artdelamagie').val());
    total = total + parseInt($('#rang_bluff').val());
    total = total + parseInt($('#rang_Connaissances_exploration').val());
    total = total + parseInt($('#rang_Connaissances_Folklore_Locale').val()); 
    total = total + parseInt($('#rang_Connaissances_Geographie').val());
    total = total + parseInt($('#rang_Connaissances_Histoire').val());
    total = total + parseInt($('#rang_Connaissances_Ingénieurie').val());
    total = total + parseInt($('#rang_Connaissances_Mystères').val());
    total = total + parseInt($('#rang_Connaissances_Nature').val());
    total = total + parseInt($('#rang_Connaissances_Noblesse').val());
    total = total + parseInt($('#rang_Connaissances_Plan').val());
    total = total + parseInt($('#rang_Connaissances_Religion').val());
    total = total + parseInt($('#rang_deguisement').val());
    total = total + parseInt($('#rang_diplomatie').val());
    total = total + parseInt($('#rang_discretion').val());
    total = total + parseInt($('#rang_dressage').val());
    total = total + parseInt($('#rang_equitation').val());
    total = total + parseInt($('#rang_escalade').val());
    total = total + parseInt($('#rang_escamotage').val());
    total = total + parseInt($('#rang_estimation').val());
    total = total + parseInt($('#rang_evasion').val());
    total = total + parseInt($('#rang_intimidation').val());
    total = total + parseInt($('#rang_linguistique').val());
    total = total + parseInt($('#rang_natation').val());
    total = total + parseInt($('#rang_perception').val());
    total = total + parseInt($('#rang_premiersecours').val());
    total = total + parseInt($('#rang_profession_I').val());
    total = total + parseInt($('#rang_profession_II').val());
    total = total + parseInt($('#rang_psychologie').val());
    total = total + parseInt($('#rang_representation_I').val());
    total = total + parseInt($('#rang_representation_II').val());
    total = total + parseInt($('#rang_sabotage').val());
    total = total + parseInt($('#rang_survie').val());
    total = total + parseInt($('#rang_utilisationobjet').val());
    total = total + parseInt($('#rang_vol').val());

    var nombreAutorisé = 0;
    var valeur = parseInt($('#int_saisie').val());
    var modificateur = Math.floor((valeur - 10)/2);

    switch($('#classe').val()) {
        case ' ' :
            break;
        case 'Barbare' :
            nombreAutorisé = (4 + modificateur) * (parseInt($('#niveau').val()));
            if ($('#race').val() == 'Humain') {nombreAutorisé = nombreAutorisé + parseInt($('#niveau').val())};
            break;
        case 'Barde' :
            nombreAutorisé = (6 + modificateur) * (parseInt($('#niveau').val()));
            if ($('#race').val() == 'Humain') {nombreAutorisé = nombreAutorisé + parseInt($('#niveau').val())};
            break;
        case 'Druide' :
            nombreAutorisé = (4 + modificateur) * (parseInt($('#niveau').val()));
            if ($('#race').val() == 'Humain') {nombreAutorisé = nombreAutorisé + parseInt($('#niveau').val())};
            break;
        case 'Ensorceleur' :
            nombreAutorisé = (2 + modificateur) * (parseInt($('#niveau').val()));
            if ($('#race').val() == 'Humain') {nombreAutorisé = nombreAutorisé + parseInt($('#niveau').val())};
            break;
        case 'Guerrier' :
            nombreAutorisé = (2 + modificateur) * (parseInt($('#niveau').val()));
            if ($('#race').val() == 'Humain') {nombreAutorisé = nombreAutorisé + parseInt($('#niveau').val())};
            break;
        case 'Magicien' :
            nombreAutorisé = (2 + modificateur) * (parseInt($('#niveau').val()));
            if ($('#race').val() == 'Humain') {nombreAutorisé = nombreAutorisé + parseInt($('#niveau').val())};
            break;
        case 'Moine' :
            nombreAutorisé = (4 + modificateur) * (parseInt($('#niveau').val()));
            if ($('#race').val() == 'Humain') {nombreAutorisé = nombreAutorisé + parseInt($('#niveau').val())};
            break;
        case 'Paladin' :
            nombreAutorisé = (2 + modificateur) * (parseInt($('#niveau').val()));
            if ($('#race').val() == 'Humain') {nombreAutorisé = nombreAutorisé + parseInt($('#niveau').val())};
            break;
        case 'Prêtre' :
            nombreAutorisé = (2 + modificateur) * (parseInt($('#niveau').val()));
            if ($('#race').val() == 'Humain') {nombreAutorisé = nombreAutorisé + parseInt($('#niveau').val())};
            break;
        case 'Rôdeur' :
            nombreAutorisé = (6 + modificateur) * (parseInt($('#niveau').val()));
            if ($('#race').val() == 'Humain') {nombreAutorisé = nombreAutorisé + parseInt($('#niveau').val())};
            break;
        case 'Roublard' :
            nombreAutorisé = (8 + modificateur) * (parseInt($('#niveau').val()));
            if ($('#race').val() == 'Humain') {nombreAutorisé = nombreAutorisé + parseInt($('#niveau').val())};
            break;
    }

    total = nombreAutorisé - total ;
    $('#points_restants').html(total);
}

$(function() {
    $('#rang_Acrobatie').change(function() {
        $('#totalAcrobatie').html(calculeCompetence($('#caracAcrobatie'), $('#rang_Acrobatie'), $('#diversAcrobatie')));
        calculeSommeCompetences();
    });

    $('#diversAcrobatie').change(function() {
        $('#totalAcrobatie').html(calculeCompetence($('#caracAcrobatie'), $('#rang_Acrobatie'), $('#diversAcrobatie')));
        calculeSommeCompetences();
    });

    $('#rang_artisanat_I').change(function() {
        $('#totalartisanat_I').html(calculeCompetence($('#caracartisanat_I'), $('#rang_artisanat_I'), $('#diversartisanat_I')));
        calculeSommeCompetences();
    });

    $('#diversartisanat_I').change(function() {
        $('#totalartisanat_I').html(calculeCompetence($('#caracartisanat_I'), $('#rang_artisanat_I'), $('#diversartisanat_I')));
        calculeSommeCompetences();
    });

    $('#rang_rtisanat_II').change(function() {
        $('#totalartisanat_II').html(calculeCompetence($('#caracartisanat_II'), $('#rang_artisanat_II'), $('#diversartisanat_II')));
        calculeSommeCompetences();
    });

    $('#diversartisanat_II').change(function() {
        $('#totalartisanat_II').html(calculeCompetence($('#caracartisanat_II'), $('#rang_artisanat_II'), $('#diversartisanat_II')));
        calculeSommeCompetences();
    });
                                
    $('#rang_artisanat_III').change(function() {
        $('#totalartisanat_III').html(calculeCompetence($('#caracartisanat_III'), $('#rang_artisanat_III'), $('#diversartisanat_III')));
        calculeSommeCompetences();
    });

    $('#diversartisanat_III').change(function() {
        $('#totalartisanat_III').html(calculeCompetence($('#caracartisanat_III'), $('#rang_artisanat_III'), $('#diversartisanat_III')));
        calculeSommeCompetences();
    });

    $('#rang_artdelamagie').change(function() {
        $('#totalartdelamagie').html(calculeCompetence($('#caracartdelamagie'), $('#rang_artdelamagie'), $('#diversartdelamagie')));
        calculeSommeCompetences();
    });

    $('#diversartdelamagie').change(function() {
        $('#totalartdelamagie').html(calculeCompetence($('#caracartdelamagie'), $('#rang_artdelamagie'), $('#diversartdelamagie')));
        calculeSommeCompetences();
    });

    $('#rang_bluff').change(function() {
        $('#totalbluff').html(calculeCompetence($('#caracbluff'), $('#rang_bluff'), $('#diversbluff')));
        calculeSommeCompetences();
    });

    $('#diversbluff').change(function() {
        $('#totalbluff').html(calculeCompetence($('#caracbluff'), $('#rang_bluff'), $('#diversbluff')));
        calculeSommeCompetences();
    });

    $('#rang_Connaissances_exploration').change(function() {
        $('#totalConnaissances_exploration').html(calculeCompetence($('#caracConnaissances_exploration'), $('#rang_Connaissances_exploration'), $('#diversConnaissances_exploration')));
        calculeSommeCompetences();
    });

    $('#diversConnaissances_exploration').change(function() {
        $('#totalConnaissances_exploration').html(calculeCompetence($('#caracConnaissances_exploration'), $('#rang_Connaissances_exploration'), $('#diversConnaissances_exploration')));
        calculeSommeCompetences();
    });

    $('#rang_Connaissances_Folklore_Locale').change(function() {
        $('#totalConnaissances_Folklore_Locale').html(calculeCompetence($('#caracConnaissances_Folklore_Locale'), $('#rang_Connaissances_Folklore_Locale'), $('#diversConnaissances_Folklore_Locale')));
        calculeSommeCompetences();
    });

    $('#diversConnaissances_Folklore_Locale').change(function() {
        $('#totalConnaissances_Folklore_Locale').html(calculeCompetence($('#caracConnaissances_Folklore_Locale'), $('#rang_Connaissances_Folklore_Locale'), $('#diversConnaissances_Folklore_Locale')));
        calculeSommeCompetences();
    });

    $('#rang_Connaissances_Geographie').change(function() {
        $('#totalConnaissances_Geographie').html(calculeCompetence($('#caracConnaissances_Geographie'), $('#rang_Connaissances_Geographie'), $('#diversConnaissances_Geographie')));
        calculeSommeCompetences();
    });

    $('#diversConnaissances_Geographie').change(function() {
        $('#totalConnaissances_Geographie').html(calculeCompetence($('#caracConnaissances_Geographie'), $('#rang_Connaissances_Geographie'), $('#diversConnaissances_Geographie')));
        calculeSommeCompetences();
    });

    $('#rang_Connaissances_Histoire').change(function() {
        $('#totalConnaissances_Histoire').html(calculeCompetence($('#caracConnaissances_Histoire'), $('#rang_Connaissances_Histoire'), $('#diversConnaissances_Histoire')));
        calculeSommeCompetences();
    });

    $('#diversConnaissances_Histoire').change(function() {
        $('#totalConnaissances_Histoire').html(calculeCompetence($('#caracConnaissances_Histoire'), $('#rang_Connaissances_Histoire'), $('#diversConnaissances_Histoire')));
        calculeSommeCompetences();
    });

    $('#rang_Connaissances_Ingénieurie').change(function() {
        $('#totalConnaissances_Ingénieurie').html(calculeCompetence($('#caracConnaissances_Ingénieurie'), $('#rang_Connaissances_Ingénieurie'), $('#diversConnaissances_Ingénieurie')));
        calculeSommeCompetences();
    });

    $('#diversConnaissances_Ingénieurie').change(function() {
        $('#totalConnaissances_Ingénieurie').html(calculeCompetence($('#caracConnaissances_Ingénieurie'), $('#rang_Connaissances_Ingénieurie'), $('#diversConnaissances_Ingénieurie')));
        calculeSommeCompetences();
    });

    $('#rang_Connaissances_Mystères').change(function() {
        $('#totalConnaissances_Mystères').html(calculeCompetence($('#caracConnaissances_Mystères'), $('#rang_Connaissances_Mystères'), $('#diversConnaissances_Mystères')));
        calculeSommeCompetences();
    });

    $('#diversConnaissances_Mystères').change(function() {
        $('#totalConnaissances_Mystères').html(calculeCompetence($('#caracConnaissances_Mystères'), $('#rang_Connaissances_Mystères'), $('#diversConnaissances_Mystères')));
        calculeSommeCompetences();
    });

    $('#rang_Connaissances_Nature').change(function() {
        $('#totalConnaissances_Nature').html(calculeCompetence($('#caracConnaissances_Nature'), $('#rang_Connaissances_Nature'), $('#diversConnaissances_Nature')));
        calculeSommeCompetences();
    });

    $('#diversConnaissances_Nature').change(function() {
        $('#totalConnaissances_Nature').html(calculeCompetence($('#caracConnaissances_Nature'), $('#rang_Connaissances_Nature'), $('#diversConnaissances_Nature')));
        calculeSommeCompetences();
    });

    $('#rang_Connaissances_Noblesse').change(function() {
        $('#totalConnaissances_Noblesse').html(calculeCompetence($('#caracConnaissances_Noblesse'), $('#rang_Connaissances_Noblesse'), $('#diversConnaissances_Noblesse')));
        calculeSommeCompetences();
    });

    $('#diversConnaissances_Noblesse').change(function() {
        $('#totalConnaissances_Noblesse').html(calculeCompetence($('#caracConnaissances_Noblesse'), $('#rang_Connaissances_Noblesse'), $('#diversConnaissances_Noblesse')));
        calculeSommeCompetences();
    });

    $('#rang_Connaissances_Plan').change(function() {
        $('#totalConnaissances_Plan').html(calculeCompetence($('#caracConnaissances_Plan'), $('#rang_Connaissances_Plan'), $('#diversConnaissances_Plan')));
        calculeSommeCompetences();
    });

    $('#diversConnaissances_Plan').change(function() {
        $('#totalConnaissances_Plan').html(calculeCompetence($('#caracConnaissances_Plan'), $('#rang_Connaissances_Plan'), $('#diversConnaissances_Plan')));
        calculeSommeCompetences();
    });

    $('#rang_Connaissances_Religion').change(function() {
        $('#totalConnaissances_Religion').html(calculeCompetence($('#caracConnaissances_Religion'), $('#rang_Connaissances_Religion'), $('#diversConnaissances_Religion')));
        calculeSommeCompetences();
    });

    $('#diversConnaissances_Religion').change(function() {
        $('#totalConnaissances_Religion').html(calculeCompetence($('#caracConnaissances_Religion'), $('#rang_Connaissances_Religion'), $('#diversConnaissances_Religion')));
        calculeSommeCompetences();
    });

    $('#rang_deguisement').change(function() {
        $('#totaldeguisement').html(calculeCompetence($('#caracdeguisement'), $('#rang_deguisement'), $('#diversdeguisement')));
        calculeSommeCompetences();
    });

    $('#diversdeguisement').change(function() {
        $('#totaldeguisement').html(calculeCompetence($('#caracdeguisement'), $('#rang_deguisement'), $('#diversdeguisement')));
        calculeSommeCompetences();
    });

    $('#rang_diplomatie').change(function() {
        $('#totaldiplomatie').html(calculeCompetence($('#caracdiplomatie'), $('#rang_diplomatie'), $('#diversdiplomatie')));
        calculeSommeCompetences();
    });

    $('#diversdiplomatie').change(function() {
        $('#totaldiplomatie').html(calculeCompetence($('#caracdiplomatie'), $('#rang_diplomatie'), $('#diversdiplomatie')));
        calculeSommeCompetences();
    });

    $('#rang_discretion').change(function() {
        $('#totaldiscretion').html(calculeCompetence($('#caracdiscretion'), $('#rang_discretion'), $('#diversdiscretion')));
        calculeSommeCompetences();
    });

    $('#diversdiscretion').change(function() {
        $('#totaldiscretion').html(calculeCompetence($('#caracdiscretion'), $('#rang_discretion'), $('#diversdiscretion')));
        calculeSommeCompetences();
    });

    $('#rang_dressage').change(function() {
        $('#totaldressage').html(calculeCompetence($('#caracdressage'), $('#rang_dressage'), $('#diversdressage')));
        calculeSommeCompetences();
    });

    $('#diversdressage').change(function() {
        $('#totaldressage').html(calculeCompetence($('#caracdressage'), $('#rang_dressage'), $('#diversdressage')));
        calculeSommeCompetences();
    });

    $('#rang_equitation').change(function() {
        $('#totalequitation').html(calculeCompetence($('#caracequitation'), $('#rang_equitation'), $('#diversequitation')));
        calculeSommeCompetences();
    });

    $('#diversequitation').change(function() {
        $('#totalequitation').html(calculeCompetence($('#caracequitation'), $('#rang_equitation'), $('#diversequitation')));
        calculeSommeCompetences();
    });

    $('#rang_escalade').change(function() {
        $('#totalescalade').html(calculeCompetence($('#caracescalade'), $('#rang_escalade'), $('#diversescalade')));
        calculeSommeCompetences();
    });

    $('#diversescalade').change(function() {
        $('#totalescalade').html(calculeCompetence($('#caracescalade'), $('#rang_escalade'), $('#diversescalade')));
        calculeSommeCompetences();
    });

    $('#rang_escamotage').change(function() {
        $('#totalescamotage').html(calculeCompetence($('#caracescamotage'), $('#rang_escamotage'), $('#diversescamotage')));
        calculeSommeCompetences();
    });

    $('#diversescamotage').change(function() {
        $('#totalescamotage').html(calculeCompetence($('#caracescamotage'), $('#rang_escamotage'), $('#diversescamotage')));
        calculeSommeCompetences();
    });

    $('#rang_estimation').change(function() {
        $('#totalestimation').html(calculeCompetence($('#caracestimation'), $('#rang_estimation'), $('#diversestimation')));
        calculeSommeCompetences();
    });

    $('#diversestimation').change(function() {
        $('#totalestimation').html(calculeCompetence($('#caracestimation'), $('#rang_estimation'), $('#diversestimation')));
        calculeSommeCompetences();
    });

    $('#rang_evasion').change(function() {
        $('#totalevasion').html(calculeCompetence($('#caracevasion'), $('#rang_evasion'), $('#diversevasion')));
        calculeSommeCompetences();
    });

    $('#diversevasion').change(function() {
        $('#totalevasion').html(calculeCompetence($('#caracevasion'), $('#rang_evasion'), $('#diversevasion')));
        calculeSommeCompetences();
    });

    $('#rang_intimidation').change(function() {
        $('#totalintimidation').html(calculeCompetence($('#caracintimidation'), $('#rang_intimidation'), $('#diversintimidation')));
        calculeSommeCompetences();
    });

    $('#diversintimidation').change(function() {
        $('#totalintimidation').html(calculeCompetence($('#caracintimidation'), $('#rang_intimidation'), $('#diversintimidation')));
        calculeSommeCompetences();
    });

    $('#rang_linguistique').change(function() {
        $('#totallinguistique').html(calculeCompetence($('#caraclinguistique'), $('#rang_linguistique'), $('#diverslinguistique')));
        calculeSommeCompetences();
    });

    $('#diverslinguistique').change(function() {
        $('#totallinguistique').html(calculeCompetence($('#caraclinguistique'), $('#rang_linguistique'), $('#diverslinguistique')));
        calculeSommeCompetences();
    });

    $('#rang_natation').change(function() {
        $('#totalnatation').html(calculeCompetence($('#caracnatation'), $('#rang_natation'), $('#diversnatation')));
        calculeSommeCompetences();
    });

    $('#diversnatation').change(function() {
        $('#totalnatation').html(calculeCompetence($('#caracnatation'), $('#rang_natation'), $('#diversnatation')));
        calculeSommeCompetences();
    });

    $('#rang_perception').change(function() {
        $('#totalperception').html(calculeCompetence($('#caracperception'), $('#rang_perception'), $('#diversperception')));
        calculeSommeCompetences();
    });

    $('#diversperception').change(function() {
        $('#totalperception').html(calculeCompetence($('#caracperception'), $('#rang_perception'), $('#diversperception')));
        calculeSommeCompetences();
    });

    $('#rang_premiersecours').change(function() {
        $('#totalpremiersecours').html(calculeCompetence($('#caracpremiersecours'), $('#rang_premiersecours'), $('#diverspremiersecours')));
        calculeSommeCompetences();
    });

    $('#diverspremiersecours').change(function() {
        $('#totalpremiersecours').html(calculeCompetence($('#caracpremiersecours'), $('#rang_premiersecours'), $('#diverspremiersecours')));
        calculeSommeCompetences();
    });

    $('#rang_profession_I').change(function() {
        $('#totalprofession_I').html(calculeCompetence($('#caracprofession_I'), $('#rang_profession_I'), $('#diversprofession_I')));
        calculeSommeCompetences();
    });

    $('#diversprofession_I').change(function() {
        $('#totalprofession_I').html(calculeCompetence($('#caracprofession_I'), $('#rang_profession_I'), $('#diversprofession_I')));
        calculeSommeCompetences();
    });

    $('#rang_profession_II').change(function() {
        $('#totalprofession_II').html(calculeCompetence($('#caracprofession_II'), $('#rang_profession_II'), $('#diversprofession_II')));
        calculeSommeCompetences();
    });

    $('#diversprofession_II').change(function() {
        $('#totalprofession_II').html(calculeCompetence($('#caracprofession_II'), $('#rang_profession_II'), $('#diversprofession_II')));
        calculeSommeCompetences();
    });

    $('#rang_psychologie').change(function() {
        $('#totalpsychologie').html(calculeCompetence($('#caracpsychologie'), $('#rang_psychologie'), $('#diverspsychologie')));
        calculeSommeCompetences();
    });

    $('#diverspsychologie').change(function() {
        $('#totalpsychologie').html(calculeCompetence($('#caracpsychologie'), $('#rang_psychologie'), $('#diverspsychologie')));
        calculeSommeCompetences();
    });

    $('#rang_representation_I').change(function() {
        $('#totalrepresentation_I').html(calculeCompetence($('#caracrepresentation_I'), $('#rang_representation_I'), $('#diversrepresentation_I')));
        calculeSommeCompetences();
    });

    $('#diversrepresentation_I').change(function() {
        $('#totalrepresentation_I').html(calculeCompetence($('#caracrepresentation_I'), $('#rang_representation_I'), $('#diversrepresentation_I')));
        calculeSommeCompetences();
    });

    $('#rang_representation_II').change(function() {
        $('#totalrepresentation_II').html(calculeCompetence($('#caracrepresentation_II'), $('#rang_representation_II'), $('#diversrepresentation_II')));
        calculeSommeCompetences();
    });

    $('#diversrepresentation_II').change(function() {
        $('#totalrepresentation_II').html(calculeCompetence($('#caracrepresentation_II'), $('#rang_representation_II'), $('#diversrepresentation_II')));
        calculeSommeCompetences();
    });

    $('#rang_sabotage').change(function() {
        $('#totalsabotage').html(calculeCompetence($('#caracsabotage'), $('#rang_sabotage'), $('#diverssabotage')));
        calculeSommeCompetences();
    });

    $('#diverssabotage').change(function() {
        $('#totalsabotage').html(calculeCompetence($('#caracsabotage'), $('#rang_sabotage'), $('#diverssabotage')));
        calculeSommeCompetences();
    });

    $('#rang_survie').change(function() {
        $('#totalsurvie').html(calculeCompetence($('#caracsurvie'), $('#rang_survie'), $('#diverssurvie')));
        calculeSommeCompetences();
    });

    $('#diverssurvie').change(function() {
        $('#totalsurvie').html(calculeCompetence($('#caracsurvie'), $('#rang_survie'), $('#diverssurvie')));
        calculeSommeCompetences();
    });

    $('#rang_utilisationobjet').change(function() {
        $('#totalutilisationobjet').html(calculeCompetence($('#caracutilisationobjet'), $('#rang_utilisationobjet'), $('#diversutilisationobjet')));
        calculeSommeCompetences();
    });

    $('#diversutilisationobjet').change(function() {
        $('#totalutilisationobjet').html(calculeCompetence($('#caracutilisationobjet'), $('#rang_utilisationobjet'), $('#diversutilisationobjet')));
        calculeSommeCompetences();
    });

    $('#rang_vol').change(function() {
        $('#totalvol').html(calculeCompetence($('#caracvol'), $('#rang_vol'), $('#diversvol')));
        calculeSommeCompetences();
    });

    $('#diversvol').change(function() {
        $('#totalvol').html(calculeCompetence($('#caracvol'), $('#rang_vol'), $('#diversvol')));
        calculeSommeCompetences();
    });
});
