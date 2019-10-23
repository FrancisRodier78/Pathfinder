function calculeCharge(valeur) {
    $('#chargeLegere').html('0');
    $('#chargeIntermediaire').html('0')
    $('#chargeLourde').html('0');
    $('#chargeDessus').html('0');
    $('#soulever').html('0');
    $('#PousserOuTirer').html('0');

    switch(valeur) {
        case 1 :
            $('#chargeLegere').html('jusqu’à 1,5kg')
            $('#chargeIntermediaire').html('1,5–3kg')
            $('#chargeLourde').html('3–5kg')
            $('#chargeDessus').html('5kg')
            $('#soulever').html('10kg')
            $('#PousserOuTirer').html('25kg')
            break;
        case 2 :
            $('#chargeLegere').html('jusqu’à 3kg')
            $('#chargeIntermediaire').html('3–6,5kg')
            $('#chargeLourde').html('6,5–10kg')
            $('#chargeDessus').html('10kg')
            $('#soulever').html('20kg')
            $('#PousserOuTirer').html('50kg')
            break;
        case 3 :
            $('#chargeLegere').html('jusqu’à 5kg')
            $('#chargeIntermediaire').html('5–10kg')
            $('#chargeLourde').html('10–15kg')
            $('#chargeDessus').html('15kg')
            $('#soulever').html('30kg')
            $('#PousserOuTirer').html('75kg')
            break;
        case 4 :
            $('#chargeLegere').html('jusqu’à 6,5kg')
            $('#chargeIntermediaire').html('6,5–13kg')
            $('#chargeLourde').html('13–20kg')
            $('#chargeDessus').html('20kg')
            $('#soulever').html('40kg')
            $('#PousserOuTirer').html('100kg')
            break;
        case 5 :
            $('#chargeLegere').html('jusqu’à 8kg')
            $('#chargeIntermediaire').html('8–16,5kg')
            $('#chargeLourde').html('16,5–25kg')
            $('#chargeDessus').html('25kg')
            $('#soulever').html('50kg')
            $('#PousserOuTirer').html('125kg')
            break;
        case 6 :
            $('#chargeLegere').html('jusqu’à 10kg')
            $('#chargeIntermediaire').html('10–20kg')
            $('#chargeLourde').html('20–30kg')
            $('#chargeDessus').html('30kg')
            $('#soulever').html('60kg')
            $('#PousserOuTirer').html('150kg')
            break;
        case 7 :
            $('#chargeLegere').html('jusqu’à 11,5kg')
            $('#chargeIntermediaire').html('11,5–23kg')
            $('#chargeLourde').html('23–35kg')
            $('#chargeDessus').html('35kg')
            $('#soulever').html('70kg')
            $('#PousserOuTirer').html('175kg')
            break;
        case 8 :
            $('#chargeLegere').html('jusqu’à 13kg')
            $('#chargeIntermediaire').html('13–26,5kg')
            $('#chargeLourde').html('26,5–40kg')
            $('#chargeDessus').html('40kg')
            $('#soulever').html('80kg')
            $('#PousserOuTirer').html('200kg')
            break;
        case 9 :
            $('#chargeLegere').html('jusqu’à 15kg')
            $('#chargeIntermediaire').html('15–30kg')
            $('#chargeLourde').html('30–45kg')
            $('#chargeDessus').html('45kg')
            $('#soulever').html('90kg')
            $('#PousserOuTirer').html('225kg')
            break;
        case 10 :
            $('#chargeLegere').html('jusqu’à 17,5kg')
            $('#chargeIntermediaire').html('17,5–33kg')
            $('#chargeLourde').html('33–50kg')
            $('#chargeDessus').html('50kg')
            $('#soulever').html('100kg')
            $('#PousserOuTirer').html('250kg')
            break;
        case 11 :
            $('#chargeLegere').html('jusqu’à 19kg')
            $('#chargeIntermediaire').html('19–38kg')
            $('#chargeLourde').html('38–57,5kg')
            $('#chargeDessus').html('57,5kg')
            $('#soulever').html('115kg')
            $('#PousserOuTirer').html('287,5kg')
            break;
        case 12 :
            $('#chargeLegere').html('jusqu’à 21,5kg')
            $('#chargeIntermediaire').html('21,5–43kg')
            $('#chargeLourde').html('43–65kg')
            $('#chargeDessus').html('65kg')
            $('#soulever').html('120kg')
            $('#PousserOuTirer').html('325kg')
            break;
        case 13 :
            $('#chargeLegere').html('jusqu’à 25kg')
            $('#chargeIntermediaire').html('25–50kg')
            $('#chargeLourde').html('50–75kg')
            $('#chargeDessus').html('75kg')
            $('#soulever').html('150kg')
            $('#PousserOuTirer').html('375kg')
            break;
        case 14 :
            $('#chargeLegere').html('jusqu’à 29kg')
            $('#chargeIntermediaire').html('29–58kg')
            $('#chargeLourde').html('58–87,5kg')
            $('#chargeDessus').html('87,5kg')
            $('#soulever').html('175kg')
            $('#PousserOuTirer').html('437,5kg')
            break;
        case 15 :
            $('#chargeLegere').html('jusqu’à 33kg')
            $('#chargeIntermediaire').html('33–66,5kg')
            $('#chargeLourde').html('66,5–100kg')
            $('#chargeDessus').html('100kg')
            $('#soulever').html('200kg')
            $('#PousserOuTirer').html('500kg')
            break;
        case 16 :
            $('#chargeLegere').html('jusqu’à 38kg')
            $('#chargeIntermediaire').html('38–76,5kg')
            $('#chargeLourde').html('76,5–115kg')
            $('#chargeDessus').html('115kg')
            $('#soulever').html('225kg')
            $('#PousserOuTirer').html('575kg')
            break;
        case 17 :
            $('#chargeLegere').html('jusqu’à 43kg')
            $('#chargeIntermediaire').html('43–86,5kg')
            $('#chargeLourde').html('86,5–130kg')
            $('#chargeDessus').html('130kg')
            $('#soulever').html('260kg')
            $('#PousserOuTirer').html('650kg')
            break;
        case 18 :
            $('#chargeLegere').html('jusqu’à 50kg')
            $('#chargeIntermediaire').html('50–100kg')
            $('#chargeLourde').html('100–150kg')
            $('#chargeDessus').html('150kg')
            $('#soulever').html('300kg')
            $('#PousserOuTirer').html('750kg')
            break;
        case 19 :
            $('#chargeLegere').html('jusqu’à 58kg')
            $('#chargeIntermediaire').html('58–116,5kg')
            $('#chargeLourde').html('116,5–175kg')
            $('#chargeDessus').html('175kg')
            $('#soulever').html('350kg')
            $('#PousserOuTirer').html('875kg')
            break;
        case 20 :
            $('#chargeLegere').html('jusqu’à 66,5kg')
            $('#chargeIntermediaire').html('66,5–133kg')
            $('#chargeLourde').html('133–200kg')
            $('#chargeDessus').html('200kg')
            $('#soulever').html('400kg')
            $('#PousserOuTirer').html('1000kg')
            break;
        case 21 :
            $('#chargeLegere').html('jusqu’à 76,5kg')
            $('#chargeIntermediaire').html('76,5–153kg')
            $('#chargeLourde').html('153–230kg')
            $('#chargeDessus').html('230kg')
            $('#soulever').html('460kg')
            $('#PousserOuTirer').html('1150kg')
            break;
        case 22 :
            $('#chargeLegere').html('jusqu’à 86,5kg')
            $('#chargeIntermediaire').html('86,5–173kg')
            $('#chargeLourde').html('173–260kg')
            $('#chargeDessus').html('260kg')
            $('#soulever').html('520kg')
            $('#PousserOuTirer').html('1300kg')
            break;
        case 23 :
            $('#chargeLegere').html('jusqu’à 100 kg')
            $('#chargeIntermediaire').html('100–200kg')
            $('#chargeLourde').html('200–300kg')
            $('#chargeDessus').html('300kg')
            $('#soulever').html('600kg')
            $('#PousserOuTirer').html('1500kg')
            break;
        case 24 :
            $('#chargeLegere').html('jusqu’à 116,5kg')
            $('#chargeIntermediaire').html('116,5–233kg')
            $('#chargeLourde').html('233–350kg')
            $('#chargeDessus').html('350kg')
            $('#soulever').html('700kg')
            $('#PousserOuTirer').html('1750kg')
            break;
        case 25 :
            $('#chargeLegere').html('jusqu’à 133kg')
            $('#chargeIntermediaire').html('133–266,5kg')
            $('#chargeLourde').html('266,5–400kg')
            $('#chargeDessus').html('400kg')
            $('#soulever').html('800kg')
            $('#PousserOuTirer').html('2000kg')
            break;
        case 26 :
            $('#chargeLegere').html('jusqu’à 153kg')
            $('#chargeIntermediaire').html('153–306,5kg')
            $('#chargeLourde').html('306,5–460kg')
            $('#chargeDessus').html('460kg')
            $('#soulever').html('920kg')
            $('#PousserOuTirer').html('2300kg')
            break;
        case 27 :
            $('#chargeLegere').html('jusqu’à 173kg')
            $('#chargeIntermediaire').html('173–346,5kg')
            $('#chargeLourde').html('346,5–520kg')
            $('#chargeDessus').html('520kg')
            $('#soulever').html('1040kg')
            $('#PousserOuTirer').html('2600kg')
            break;
        case 28 :
            $('#chargeLegere').html('jusqu’à 200kg')
            $('#chargeIntermediaire').html('200–400kg')
            $('#chargeLourde').html('400–600kg')
            $('#chargeDessus').html('600kg')
            $('#soulever').html('1200kg')
            $('#PousserOuTirer').html('3000kg')
            break;
        case 29 :
            $('#chargeLegere').html('jusqu’à 233kg')
            $('#chargeIntermediaire').html('233–466,5kg')
            $('#chargeLourde').html('466,5–700kg')
            $('#chargeDessus').html('700kg')
            $('#soulever').html('1400kg')
            $('#PousserOuTirer').html('3500kg')
            break;
        default :
            $('#chargeLegere').html('-')
            $('#chargeIntermediaire').html('-')
            $('#chargeLourde').html('–')
            $('#chargeDessus').html('-')
            $('#soulever').html('-')
            $('#PousserOuTirer').html('-')
            break;
    }
};

function  calculeSorts(valeur) {
    //  Le jet de sauvegarde contre un sort s’accompagne d’un DD égal à 10 + niveau du sort + bonus du personnage dans la caractéristique concernée.
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

    $('#sorts_en_bonus_0').html(' ');
    $('#sorts_en_bonus_I').html(' ');
    $('#sorts_en_bonus_II').html(' ');
    $('#sorts_en_bonus_III').html(' ');
    $('#sorts_en_bonus_IV').html(' ');
    $('#sorts_en_bonus_V').html(' ');
    $('#sorts_en_bonus_VI').html(' ');
    $('#sorts_en_bonus_VII').html(' ');
    $('#sorts_en_bonus_VIII').html(' ');
    $('#sorts_en_bonus_IX').html(' ');

    if (valeur > 1) {
        $('#sorts_en_bonus_I').html(1);
    }

    if (valeur > 2) {
        $('#sorts_en_bonus_II').html(1);
    }

    if (valeur > 3) {
        $('#sorts_en_bonus_III').html(1);
    }

    if (valeur > 4) {
        $('#sorts_en_bonus_IV').html(1);
    }

    if (valeur > 5) {
        $('#sorts_en_bonus_I').html(2);
        $('#sorts_en_bonus_V').html(1);
    }

    if (valeur > 6) {
        $('#sorts_en_bonus_II').html(2);
        $('#sorts_en_bonus_VI').html(1);
    }

    if (valeur > 7) {
        $('#sorts_en_bonus_III').html(2);
        $('#sorts_en_bonus_VII').html(1);
    }

    if (valeur > 8) {
        $('#sorts_en_bonus_IV').html(2);
        $('#sorts_en_bonus_VIII').html(1);
    }

    if (valeur > 9) {
        $('#sorts_en_bonus_I').html(3);
        $('#sorts_en_bonus_V').html(2);
        $('#sorts_en_bonus_IX').html(1);
    }

    if (valeur > 10) {
        $('#sorts_en_bonus_II').html(3);
        $('#sorts_en_bonus_VI').html(2);
    }

    if (valeur > 11) {
        $('#sorts_en_bonus_III').html(3);
        $('#sorts_en_bonus_VII').html(2);
    }

    if (valeur > 12) {
        $('#sorts_en_bonus_IV').html(3);
        $('#sorts_en_bonus_VIII').html(2);
    }

    if (valeur > 13) {
        $('#sorts_en_bonus_I').html(4);
        $('#sorts_en_bonus_V').html(3);
    }

    if (valeur > 14) {
        $('#sorts_en_bonus_II').html(4);
        $('#sorts_en_bonus_VI').html(3);
        $('#sorts_en_bonus_IX').html(2);
    }

    if (valeur > 15) {
        $('#sorts_en_bonus_III').html(4);
        $('#sorts_en_bonus_VII').html(3);
    }

    if (valeur > 16) {
        $('#sorts_en_bonus_IV').html(4);
        $('#sorts_en_bonus_VIII').html(3);
    }

    if (valeur > 17) {
        $('#sorts_en_bonus_I').html(5);
        $('#sorts_en_bonus_V').html(4);
        $('#sorts_en_bonus_IX').html(3);
    }

    if (valeur > 18) {
        $('#sorts_en_bonus_0').html('?');
        $('#sorts_en_bonus_I').html('?');
        $('#sorts_en_bonus_II').html('?');
        $('#sorts_en_bonus_III').html('?');
        $('#sorts_en_bonus_IV').html('?');
        $('#sorts_en_bonus_V').html('?');
        $('#sorts_en_bonus_VI').html('?');
        $('#sorts_en_bonus_VII').html('?');
        $('#sorts_en_bonus_VIII').html('?');
        $('#sorts_en_bonus_IX').html('?');
    }

    if (($('#classe').val() == 'Rôdeur')
    ||  ($('#classe').val() == 'Paladin')) {
        $('#dd_des_sorts_0').html(' ');
        $('#dd_des_sorts_V').html(' ');
        $('#dd_des_sorts_VI').html(' ');
        $('#dd_des_sorts_VII').html(' ');
        $('#dd_des_sorts_VIII').html(' ');
        $('#dd_des_sorts_IX').html(' ');

        $('#sorts_en_bonus_0').html(' ');
        $('#sorts_en_bonus_V').html(' ');
        $('#sorts_en_bonus_VI').html(' ');
        $('#sorts_en_bonus_VII').html(' ');
        $('#sorts_en_bonus_VIII').html(' ');
        $('#sorts_en_bonus_IX').html(' ');
    };

    if ($('#classe').val() == 'Barde') {
        $('#dd_des_sorts_VII').html(' ');
        $('#dd_des_sorts_VIII').html(' ');
        $('#dd_des_sorts_IX').html(' ');

        $('#sorts_en_bonus_VII').html(' ');
        $('#sorts_en_bonus_VIII').html(' ');
        $('#sorts_en_bonus_IX').html(' ');
    };
}

$(function() {
    $('#for_saisie').change(function() {
        var valeur = parseInt($('#for_saisie').val());
        var modificateur = Math.floor((valeur - 10)/2);

        $('#caracescalade').html(modificateur);
        $('#caracnatation').html(modificateur);
        $('#bmo_mod_for').html(modificateur);
        $('#dmd_mod_for').html(modificateur);

        calculeCharge(valeur);
    })

    $('#dex_saisie').change(function() {
        var valeur = parseInt($('#dex_saisie').val());
        var modificateur = Math.floor((valeur - 10)/2);

        $('#caracAcrobatie').html(modificateur);
        $('#caracdiscretion').html(modificateur);
        $('#caracequitation').html(modificateur);
        $('#caracescamotage').html(modificateur);
        $('#caracevasion').html(modificateur);
        $('#caracsabotage').html(modificateur);
        $('#caracvol').html(modificateur);

        // calcule de l'initiative 
        $('#init_mod_dex').html(modificateur);

        /* si le #dex_val.value n'est pas renseigné, 
        le modificateur n'est pas un number
        d'où son forçage à 0*/
        if (isNaN(parseInt($('#init_mod_div_val').val()))) {
            $('#init_mod_div_val').val(0);
        };

        $('#init_total').html(modificateur + parseInt($('#init_mod_div_val').val()));

        $('#sau_mod_car_ref').html(modificateur);
        $('#ca_mod_dex').html(modificateur);
        $('#dmd_mod_dex').html(modificateur); 
    })

    $('#init_mod_div').change(function() {
        /* si le #dex_val.value n'est pas renseigné, 
        le modificateur n'est pas un number
        d'où son forçage à 0*/
        if (isNaN(parseInt($('#init_mod_dex').html()))) {
            $('#init_mod_dex').val(0);
        };

        $('#init_total').html(parseInt($('#init_mod_dex').html()) + parseInt($('#init_mod_div_val').val()));
    })

    $('#con_saisie').change(function() {
        var valeur = parseInt($('#con_saisie').val());
        var modificateur = Math.floor((valeur - 10)/2);

        $('#sau_mod_car_vig').html(modificateur);
    })

    $('#int_saisie').change(function() {
        var valeur = parseInt($('#int_saisie').val());
        var modificateur = Math.floor((valeur - 10)/2);

        $('#caracartisanat_I').html(modificateur);
        $('#caracartisanat_II').html(modificateur);
        $('#caracartisanat_III').html(modificateur);
        $('#caracartdelamagie').html(modificateur);
        $('#caracConnaissances_exploration').html(modificateur);
        $('#caracConnaissances_Folklore_Locale').html(modificateur);
        $('#caracConnaissances_Geographie').html(modificateur);
        $('#caracConnaissances_Histoire').html(modificateur);
        $('#caracConnaissances_Ingénieurie').html(modificateur);
        $('#caracConnaissances_Mystères').html(modificateur);
        $('#caracConnaissances_Nature').html(modificateur);
        $('#caracConnaissances_Noblesse').html(modificateur);
        $('#caracConnaissances_Plan').html(modificateur);
        $('#caracConnaissances_Religion').html(modificateur);
        $('#caracestimation').html(modificateur);
        $('#caraclinguistique').html(modificateur);

        if ($('#classe').val() == 'Magicien') {
            calculeSorts(modificateur);
        };
    })

    $('#sag_saisie').change(function() {
        var valeur = parseInt($('#sag_saisie').val());
        var modificateur = Math.floor((valeur - 10)/2);

        $('#caracperception').html(modificateur);
        $('#caracpremiersecours').html(modificateur);
        $('#caracprofession_I').html(modificateur);
        $('#caracprofession_II').html(modificateur);
        $('#caracpsychologie').html(modificateur);
        $('#caracsurvie').html(modificateur);

        $('#sau_mod_car_vol').html(modificateur);

        if (($('#classe').val() == 'Druide') 
        ||  ($('#classe').val() == 'Prêtre')
        ||  ($('#classe').val() == 'Rôdeur')) {
            calculeSorts(modificateur);
        };
    })

    $('#cha_saisie').change(function() {
        var valeur = parseInt($('#cha_saisie').val());
        var modificateur = Math.floor((valeur - 10)/2);

        $('#caracbluff').html(modificateur);
        $('#caracdeguisement').html(modificateur);
        $('#caracdiplomatie').html(modificateur);
        $('#caracdressage').html(modificateur);
        $('#caracintimidation').html(modificateur);
        $('#caracrepresentation_I').html(modificateur);
        $('#caracrepresentation_II').html(modificateur);
        $('#caracutilisationobjet').html(modificateur);

        if (($('#classe').val() == 'Barde') 
        ||  ($('#classe').val() == 'Paladin')
        ||  ($('#classe').val() == 'Ensorceleur')) {
            calculeSorts(modificateur);
        };
    })
});

