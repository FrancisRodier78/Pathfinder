function choixFamilleArme(famille_arme, maniement_arme) {
    var armes_courantes = new Array();
    var armes_de_guerre = new Array();
    var armes_exotiques = new Array();

    armes_courantes = ["","Combat à mains nues","Armes légères","Armes à une main","Armes à deux mains","Armes à distante"];
    armes_de_guerre = ["","Armes légères","Armes à une main","Armes à deux mains","Armes à distante"];
    armes_exotiques = ["","Armes légères","Armes à une main","Armes à deux mains","Armes à distante"];

    switch(famille_arme) {
        case "armes_courantes" :
            for (var nombElement = 0; nombElement < armes_courantes.length; nombElement++) {
                maniement_arme.append('<option value="' + armes_courantes[nombElement] + '">' + armes_courantes[nombElement] + '</option>');
            };
            break;
        case "armes_de_guerre" :
            for (var nombElement = 0; nombElement < armes_de_guerre.length; nombElement++) {
                maniement_arme.append('<option value="' + armes_de_guerre[nombElement] + '">' + armes_de_guerre[nombElement] + '</option>');
            };
            break;
        case "armes_exotiques" :
            for (var nombElement = 0; nombElement < armes_exotiques.length; nombElement++) {
                maniement_arme.append('<option value="' + armes_exotiques[nombElement] + '">' + armes_exotiques[nombElement] + '</option>');
            };
            break;
    }
}


function choixManiementArme(famille_arme, maniement_arme, arme) {
    switch(famille_arme) {
        case "armes_courantes" :
            choixManiement_armes_courantes(maniement_arme, arme);
            break;
        case "armes_de_guerre" :
            choixManiement_armes_de_guerre(maniement_arme, arme);
            break;
        case "armes_exotiques" :
            choixManiement_armes_exotiques(maniement_arme, arme);
            break;
    }
}

function choixManiement_armes_courantes(maniement_arme, arme) {
    var combat_à_mains_nues = new Array();
    var armes_légères = new Array();
    var armes_à_une_main = new Array();
    var armes_à_deux_mains = new Array();
    var armes_à_distante = new Array();

    combat_à_mains_nues = ["","Attaque à mains nues","Gantelet"];
    armes_légères = ["","Dague","Dague coup-de-poing","Gantelet clouté","Masse d'armes légère","Serpe"];
    armes_à_une_main = ["","Epieu","Gourdin","Masse d'armes lourde","Morgenstern"];
    armes_à_deux_mains = ["","Bâton","Lance","Pique"];
    armes_à_distante = ["","Arbalètre légère","Arbalètre lourde","Dart","Fronde","Javeline"];

    choixTypeArme(maniement_arme, arme, combat_à_mains_nues, armes_légères, armes_à_une_main, armes_à_deux_mains, armes_à_distante);
}

function choixManiement_armes_de_guerre(maniement_arme, arme) {
    var combat_à_mains_nues = new Array();
    var armes_légères = new Array();
    var armes_à_une_main = new Array();
    var armes_à_deux_mains = new Array();
    var armes_à_distante = new Array();

    armes_légères = ["","Armure à pointes","Epée courte","Hache de lancer","Hachette","Kukri","Marteau léger","Matraque","Pic de guerre léger","Rondache","Rondache à pointes"];
    armes_à_une_main = ["","Cimeterre","Ecu","Ecu à pointes","Epée longue","Fléau d'arme léger","Hache d'arme","Marteau de guerre","Pis de guerre lourd","Rapière","Trident"];
    armes_à_deux_mains = ["","Cimeterre à deux mains","Corsèque","Coutille","Epée à deux mains","Faux","Fléau d'armes lourd","Grande hache","Guisarme","Hallebarde","Lance d'arçon","Massue"];
    armes_à_distante = ["","Arc court","Arc court composite","Arc long","Arc long composite"];

    choixTypeArme(maniement_arme, arme, combat_à_mains_nues, armes_légères, armes_à_une_main, armes_à_deux_mains, armes_à_distante);
}

function choixManiement_armes_exotiques(maniement_arme, arme) {
    var combat_à_mains_nues = new Array();
    var armes_légères = new Array();
    var armes_à_une_main = new Array();
    var armes_à_deux_mains = new Array();
    var armes_à_distante = new Array();

    armes_légères = ["","Kama","Nunchaku","Sai","Siangham"];
    armes_à_une_main = ["","Epée batarde","Fouet","Hache de guerre naine"];
    armes_à_deux_mains = ["","Chaîne cloutée","Double-lame","Fléau double","Hache double orque","Marteau-piolet gnome","Urgrosh nain"];
    armes_à_distante = ["","Arbalètre de poing","Arbalètre légère à répétition","Arbalètre lourde à répétition","Bolas","Filet","Shuriken"];

    choixTypeArme(maniement_arme, arme, combat_à_mains_nues, armes_légères, armes_à_une_main, armes_à_deux_mains, armes_à_distante);
}

function choixTypeArme(maniement_arme, arme, combat_à_mains_nues, armes_légères, armes_à_une_main, armes_à_deux_mains, armes_à_distante) {
    switch(maniement_arme) {
        case "Combat à mains nues" :
            for (var nombElement = 0; nombElement < combat_à_mains_nues.length; nombElement++) {
                arme.append('<option value="' + combat_à_mains_nues[nombElement] + '">' + combat_à_mains_nues[nombElement] + '</option>');
            };
            break;
        case "Armes légères" :
            for (var nombElement = 0; nombElement < armes_légères.length; nombElement++) {
                arme.append('<option value="' + armes_légères[nombElement] + '">' + armes_légères[nombElement] + '</option>');
            };
            break;
        case "Armes à une main" :
            for (var nombElement = 0; nombElement < armes_à_une_main.length; nombElement++) {
                arme.append('<option value="' + armes_à_une_main[nombElement] +'">' + armes_à_une_main[nombElement] + '</option>');
            };
            break;
        case "Armes à deux mains" :
            for (var nombElement = 0; nombElement < armes_à_deux_mains.length; nombElement++) {
                arme.append('<option value="' + armes_à_deux_mains[nombElement] +'">' + armes_à_deux_mains[nombElement] + '</option>');
            };
            break;
        case "Armes à distante" :
            for (var nombElement = 0; nombElement < armes_à_distante.length; nombElement++) {
                arme.append('<option value="' + armes_à_distante[nombElement] +'">' + armes_à_distante[nombElement] + '</option>');
            };
            break;
    }
}

function choixArme(famille_arme,maniement_arme, arme, bonus, degats, critique, portee, type, munitions) {
    switch(famille_arme) {
        case "armes_courantes" :
            switch(maniement_arme) {
                case "Combat à mains nues" :
                    choixArme_armes_courantes_combat_à_mains_nues(arme, bonus, degats, critique, portee, type, munitions);
                   break;
                case "Armes légères" :
                    choixArme_armes_courantes_armes_légères(arme, bonus, degats, critique, portee, type, munitions);
                    break;
                case "Armes à une main" :
                    choixArme_armes_courantes_armes_à_une_main(arme, bonus, degats, critique, portee, type, munitions);
                    break;
                case "Armes à deux mains" :
                    choixArme_armes_courantes_armes_à_deux_mains(arme, bonus, degats, critique, portee, type, munitions);
                    break;
                case "Armes à distante" :
                    choixArme_armes_courantes_armes_à_distante(arme, bonus, degats, critique, portee, type, munitions);
                    break;
            }
            break;
        case "armes_de_guerre" :
            switch(maniement_arme) {
                case "Armes légères" :
                    choixArme_armes_de_guerre_armes_légères(arme, bonus, degats, critique, portee, type, munitions);
                    break;
                case "Armes à une main" :
                    choixArme_armes_de_guerre_armes_à_une_main(arme, bonus, degats, critique, portee, type, munitions);
                    break;
                case "Armes à deux mains" :
                    choixArme_armes_de_guerre_armes_à_deux_mains(arme, bonus, degats, critique, portee, type, munitions);
                    break;
                case "Armes à distante" :
                    choixArme_armes_de_guerre_armes_à_distante(arme, bonus, degats, critique, portee, type, munitions);
                    break;
            }
            break;
        case "armes_exotiques" :
            switch(maniement_arme) {
                case "Armes légères" :
                    choixArme_armes_exotiques_armes_légères(arme, bonus, degats, critique, portee, type, munitions);
                    break;
                case "Armes à une main" :
                    choixArme_armes_exotiques_armes_à_une_main(arme, bonus, degats, critique, portee, type, munitions);
                    break;
                case "Armes à deux mains" :
                    choixArme_armes_exotiques_armes_à_deux_mains(arme, bonus, degats, critique, portee, type, munitions);
                    break;
                case "Armes à distante" :
                    choixArme_armes_exotiques_armes_à_distante(arme, bonus, degats, critique, portee, type, munitions);
                    break;
            }
            break;
    }
}

function choixArme_armes_courantes_combat_à_mains_nues(arme, bonus, degats, critique, portee, type, munitions) {
    var valeur = parseInt($('#for_saisie').val());
    var modificateur = Math.floor((valeur - 10)/2);
    var valeur = modificateur + parseInt(bonus.val());

    switch(arme) {
        case "Attaque à mains nues" :
            degats.html('1D3 + ' + parseInt(valeur));
            critique.html('*2');
            portee.html('Contact');
            type.html('Contondant');
            munitions.html('_');
            break;
        case "Gantelet" :
            degats.html('1D3 + ' + parseInt(valeur));
            critique.html('*2');
            portee.html('Contact');
            type.html('Contondant');
            munitions.html('_');
            break;
    };
}

function choixArme_armes_courantes_armes_légères(arme, bonus, degats, critique, portee, type, munitions) {
    var valeur = parseInt($('#for_saisie').val());
    var modificateur = Math.floor((valeur - 10)/2);
    var valeur = modificateur + parseInt(bonus.val());
    
    switch(arme) {
        case "Dague" :
            degats.html('1D4 + ' + parseInt(valeur));
            critique.html('19-20/*2');
            portee.html('3 m');
            type.html('Perforant ou tranchant');
            munitions.html('_');
            break;
        case "Dague coup-de-poing" :
            degats.html('1D4 + ' + parseInt(valeur));
            critique.html('*3');
            portee.html('Contact');
            type.html('Perforant');
            munitions.html('_');
            break;
        case "Gantelet clouté" :
            degats.html('1D4 + ' + parseInt(valeur));
            critique.html('*2');
            portee.html('Contact');
            type.html('Perforant');
            munitions.html('_');
            break;
        case "Masse d'armes légère" :
            degats.html('1D6 + ' + parseInt(valeur));
            critique.html('*2');
            portee.html('Contact');
            type.html('Contondant');
            munitions.html('_');
            break;
        case "Serpe" :
            degats.html('1D6 + ' + parseInt(valeur));
            critique.html('*2');
            portee.html('Contact');
            type.html('Tranchant');
            munitions.html('_');
            break;
    };
}

function choixArme_armes_courantes_armes_à_une_main(arme, bonus, degats, critique, portee, type, munitions) {
    var valeur = parseInt($('#for_saisie').val());
    var modificateur = Math.floor((valeur - 10)/2);
    var valeur = modificateur + parseInt(bonus.val());
    
    switch(arme) {
        case "Epieu" :
            degats.html('1D6 + ' + parseInt(valeur));
            critique.html('*2');
            portee.html('6 m');
            type.html('Perforant');
            munitions.html('_');
            break;
        case "Gourdin" :
            degats.html('1D6 + ' + parseInt(valeur));
            critique.html('*2');
            portee.html('3 m');
            type.html('Contondant');
            munitions.html('_');
            break;
        case "Masse d'armes lourde" :
            degats.html('1D8 + ' + parseInt(valeur));
            critique.html('*2');
            portee.html('Contact');
            type.html('Contondant');
            munitions.html('_');
            break;
        case "Morgenstern" :
            degats.html('1D8 + ' + parseInt(valeur));
            critique.html('*2');
            portee.html('Contact');
            type.html('Contondant et perforant');
            munitions.html('_');
            break;
    };
}

function choixArme_armes_courantes_armes_à_deux_mains(arme, bonus, degats, critique, portee, type, munitions) {
    var valeur = parseInt($('#for_saisie').val());
    var modificateur = Math.floor((valeur - 10)/2);
    var valeur = modificateur + parseInt(bonus.val());
    
    switch(arme) {
        case "Bâton" :
            degats.html('1D6/1D6 + ' + parseInt(valeur));
            critique.html('*2');
            portee.html('Contact');
            type.html('Contondant');
            munitions.html('_');
            break;
        case "Lance" :
            degats.html('1D8 + ' + parseInt(valeur));
            critique.html('*3');
            portee.html('6 m');
            type.html('Perforant');
            munitions.html('_');
            break;
        case "Pique" :
            degats.html('1D8 + ' + parseInt(valeur));
            critique.html('*3');
            portee.html('Allonge');
            type.html('Perforant');
            munitions.html('_');
            break;
    };
}

function choixArme_armes_courantes_armes_à_distante(arme, bonus, degats, critique, portee, type, munitions) {
    var valeur = parseInt($('#dex_saisie').val());
    var modificateur = Math.floor((valeur - 10)/2);
    var valeur = modificateur + parseInt(bonus.val());
    
    switch(arme) {
        case "Arbalètre légère" :
            degats.html('1D8 + ' + parseInt(valeur));
            critique.html('19-20/*2');
            portee.html('24 m');
            type.html('Perforant');
            munitions.html('Carraux (10)');
            break;
        case "Arbalètre lourde" :
            degats.html('1D10 + ' + parseInt(valeur));
            critique.html('19-20/*2');
            portee.html('36 m');
            type.html('Perforant');
            munitions.html('Carraux (10)');
            break;
        case "Dart" :
            degats.html('1D4 + ' + parseInt(valeur));
            critique.html('*2');
            portee.html('6 m');
            type.html('Perforant');
            munitions.html('_');
            break;
        case "Fronde" :
            degats.html('1D4 + ' + parseInt(valeur));
            critique.html('*2');
            portee.html('15 m');
            type.html('Contondant');
            munitions.html('Billes (10)');
            break;
        case "Javeline" :
            degats.html('1D6 + ' + parseInt(valeur));
            critique.html('*2');
            portee.html('9 m');
            type.html('Perforant');
            munitions.html('_');
            break;
    };
}

function choixArme_armes_de_guerre_armes_légères(arme, bonus, degats, critique, portee, type, munitions) {
    var valeur = parseInt($('#for_saisie').val());
    var modificateur = Math.floor((valeur - 10)/2);
    var valeur = modificateur + parseInt(bonus.val());
    
    switch(arme) {
        case "Armure à pointes" :
            degats.html('1D6 + ' + parseInt(valeur));
            critique.html('*2');
            portee.html('Contact');
            type.html('Perforant');
            munitions.html('_');
            break;
        case "Epée courte" :
            degats.html('1D6 + ' + parseInt(valeur));
            critique.html('19-20/*2');
            portee.html('Contact');
            type.html('Perforant');
            munitions.html('_');
            break;
        case "Hache de lancer" :
            degats.html('1D6 + ' + parseInt(valeur));
            critique.html('*2');
            portee.html('3 m');
            type.html('Tranchant');
            munitions.html('_');
            break;
        case "Hachette" :
            degats.html('1D6 + ' + parseInt(valeur));
            critique.html('*3');
            portee.html('Contact');
            type.html('Tranchant');
            munitions.html('_');
            break;
        case "Kukri" :
            degats.html('1D4 + ' + parseInt(valeur));
            critique.html('18-20/*2');
            portee.html('Contact');
            type.html('Tranchant');
            munitions.html('_');
            break;
        case "Marteau léger" :
            degats.html('1D4 + ' + parseInt(valeur));
            critique.html('*2');
            portee.html('6 m');
            type.html('Contondant');
            munitions.html('_');
            break;
        case "Matraque" :
            degats.html('1D6 + ' + parseInt(valeur));
            critique.html('*2');
            portee.html('Contact');
            type.html('Contondant');
            munitions.html('_');
            break;
        case "Pic de guerre léger" :
            degats.html('1D4 + ' + parseInt(valeur));
            critique.html('*4');
            portee.html('Contact');
            type.html('Perforant');
            munitions.html('_');
            break;
        case "Rondache" :
            degats.html('1D3 + ' + parseInt(valeur));
            critique.html('*2');
            portee.html('Contact');
            type.html('Contondant');
            munitions.html('_');
            break;
        case "Rondache à pointes" :
            degats.html('1D4 + ' + parseInt(valeur));
            critique.html('*2');
            portee.html('Contact');
            type.html('Perforant');
            munitions.html('_');
            break;
    };
};

function choixArme_armes_de_guerre_armes_à_une_main(arme, bonus, degats, critique, portee, type, munitions) {
    var valeur = parseInt($('#for_saisie').val());
    var modificateur = Math.floor((valeur - 10)/2);
    var valeur = modificateur + parseInt(bonus.val());
    
    switch(arme) {
        case "Cimeterre" :
            degats.html('1D6 + ' + parseInt(valeur));
            critique.html('18-20/*2');
            portee.html('Contact');
            type.html('Tranchant');
            munitions.html('_');
            break;
        case "Ecu" :
            degats.html('1D4 + ' + parseInt(valeur));
            critique.html('*2');
            portee.html('Contact');
            type.html('Contondant');
            munitions.html('_');
            break;
        case "Ecu à pointes" :
            degats.html('1D6 + ' + parseInt(valeur));
            critique.html('*2');
            portee.html('Contact');
            type.html('Perforant');
            munitions.html('_');
            break;
        case "Epée longue" :
            degats.html('1D8 + ' + parseInt(valeur));
            critique.html('19-20/*2');
            portee.html('Contact');
            type.html('Tranchant');
            munitions.html('_');
            break;
        case "Fléau d'arme léger" :
            degats.html('1D8 + ' + parseInt(valeur));
            critique.html('*2');
            portee.html('Contact');
            type.html('Contondant');
            munitions.html('_');
            break;
        case "Hache d'arme" :
            degats.html('1D8 + ' + parseInt(valeur));
            critique.html('*3');
            portee.html('Contact');
            type.html('Tranchant');
            munitions.html('_');
            break;
        case "Marteau de guerre" :
            degats.html('1D8 + ' + parseInt(valeur));
            critique.html('*3');
            portee.html('Contact');
            type.html('Contondant');
            munitions.html('_');
            break;
        case "Pis de guerre lourd" :
            degats.html('1D6 + ' + parseInt(valeur));
            critique.html('*4');
            portee.html('Contact');
            type.html('Perforant');
            munitions.html('_');
            break;
        case "Rapière" :
            degats.html('1D6 + ' + parseInt(valeur));
            critique.html('18-20/*2');
            portee.html('Contact');
            type.html('Perforant');
            munitions.html('_');
            break;
        case "Trident" :
            degats.html('1D8 + ' + parseInt(valeur));
            critique.html('*2');
            portee.html('3 m');
            type.html('Perforant');
            munitions.html('_');
            break;
    };
};

function choixArme_armes_de_guerre_armes_à_deux_mains(arme, bonus, degats, critique, portee, type, munitions) {
    var valeur = parseInt($('#for_saisie').val());
    var modificateur = Math.floor((valeur - 10)/2);
    var valeur = modificateur + parseInt(bonus.val());
    
    switch(arme) {
        case "Cimeterre à deux mains" :
            degats.html('2D4 + ' + parseInt(valeur));
            critique.html('18-20/*2');
            portee.html('Contact');
            type.html('Tranchant');
            munitions.html('_');
            break;
        case "Corsèque" :
            degats.html('2D4 + ' + parseInt(valeur));
            critique.html('*3');
            portee.html('Allonge');
            type.html('Perforant');
            munitions.html('_');
            break;
        case "Coutille" :
            degats.html('1D10 + ' + parseInt(valeur));
            critique.html('*3');
            portee.html('Allonge');
            type.html('Tranchant');
            munitions.html('_');
            break;
        case "Epée à deux mains" :
            degats.html('2D6 + ' + parseInt(valeur));
            critique.html('19-20/*2');
            portee.html('Contact');
            type.html('Tranchant');
            munitions.html('_');
            break;
        case "Faux" :
            degats.html('2D4 + ' + parseInt(valeur));
            critique.html('*4');
            portee.html('Contact');
            type.html('Perforant ou tranchant');
            munitions.html('_');
            break;
        case "Fléau d'armes lourd" :
            degats.html('1D10 + ' + parseInt(valeur));
            critique.html('19-20/*2');
            portee.html('Contact');
            type.html('Contondant');
            munitions.html('_');
            break;
        case "Grande hache" :
            degats.html('1D12 + ' + parseInt(valeur));
            critique.html('*3');
            portee.html('Contact');
            type.html('Tranchant');
            munitions.html('_');
            break;
        case "Guisarme" :
            degats.html('2D4 + ' + parseInt(valeur));
            critique.html('*3');
            portee.html('Allonge');
            type.html('Tranchant');
            munitions.html('_');
            break;
        case "Hallebarde" :
            degats.html('1D10 + ' + parseInt(valeur));
            critique.html('*3');
            portee.html('Contact');
            type.html('Perforant ou tranchant');
            munitions.html('_');
            break;
        case "Lance d'arçon" :
            degats.html('1D8 + ' + parseInt(valeur));
            critique.html('*3');
            portee.html('Allonge');
            type.html('Perforant');
            munitions.html('_');
            break;
        case "Massue" :
            degats.html('1D10 + ' + parseInt(valeur));
            critique.html('*2');
            portee.html('Contact');
            type.html('Contondant');
            munitions.html('_');
            break;
    };
};

function choixArme_armes_de_guerre_armes_à_distante(arme, bonus, degats, critique, portee, type, munitions) {
    var valeur = parseInt($('#dex_saisie').val());
    var modificateur = Math.floor((valeur - 10)/2);
    var valeur = modificateur + parseInt(bonus.val());
    
    switch(arme) {
        case "Arc court" :
            degats.html('1D6 + ' + parseInt(valeur));
            critique.html('*3');
            portee.html('18 m');
            type.html('Perforant');
            munitions.html('Flèches (20)');
            break;
        case "Arc court composite" :
            degats.html('1D6 + ' + parseInt(valeur));
            critique.html('*3');
            portee.html('21 m');
            type.html('Perforant');
            munitions.html('Flèches (20)');
            break;
        case "Arc long" :
            degats.html('1D8 + ' + parseInt(valeur));
            critique.html('*3');
            portee.html('30 m');
            type.html('Perforant');
            munitions.html('Flèches (20)');
            break;
        case "Arc long composite" :
            degats.html('1D8 + ' + parseInt(valeur));
            critique.html('*3');
            portee.html('33 m');
            type.html('Perforant');
            munitions.html('Flèches (20)');
            break;
    };
};

function choixArme_armes_exotiques_armes_légères(arme, bonus, degats, critique, portee, type, munitions) {
    var valeur = parseInt($('#for_saisie').val());
    var modificateur = Math.floor((valeur - 10)/2);
    var valeur = modificateur + parseInt(bonus.val());
    
    switch(arme) {
        case "Kama" :
            degats.html('1D6 + ' + parseInt(valeur));
            critique.html('*2');
            portee.html('Contact');
            type.html('Tranchant');
            munitions.html('_');
            break;
        case "Nunchaku" :
            degats.html('1D6 + ' + parseInt(valeur));
            critique.html('*2');
            portee.html('Contact');
            type.html('Contondant');
            munitions.html('_');
            break;
        case "Sai" :
            degats.html('1D4 + ' + parseInt(valeur));
            critique.html('*2');
            portee.html('Contact');
            type.html('Contondant');
            munitions.html('_');
            break;
        case "Siangham" :
            degats.html('1D6 + ' + parseInt(valeur));
            critique.html('*2');
            portee.html('Contact');
            type.html('Perforant');
            munitions.html('_');
            break;
    };
};

function choixArme_armes_exotiques_armes_à_une_main(arme, bonus, degats, critique, portee, type, munitions) {
    var valeur = parseInt($('#for_saisie').val());
    var modificateur = Math.floor((valeur - 10)/2);
    var valeur = modificateur + parseInt(bonus.val());
    
    switch(arme) {
        case "Epée batarde" :
            degats.html('1D10 + ' + parseInt(valeur));
            critique.html('19-20/*2');
            portee.html('Contact');
            type.html('Tranchant');
            munitions.html('_');
            break;
        case "Fouet" :
            degats.html('1D3 + ' + parseInt(valeur));
            critique.html('*2');
            portee.html('Allonge');
            type.html('Tranchant');
            munitions.html('_');
            break;
        case "Hache de guerre naine" :
            degats.html('1D10 + ' + parseInt(valeur));
            critique.html('*3');
            portee.html('Contact');
            type.html('Tranchant');
            munitions.html('_');
            break;
    };
};

function choixArme_armes_exotiques_armes_à_deux_mains(arme, bonus, degats, critique, portee, type, munitions) {
    var valeur = parseInt($('#for_saisie').val());
    var modificateur = Math.floor((valeur - 10)/2);
    var valeur = modificateur + parseInt(bonus.val());
    
    switch(arme) {
        case "Chaîne cloutée" :
            degats.html('2D4 + ' + parseInt(valeur));
            critique.html('*2');
            portee.html('Allonge');
            type.html('Perforant');
            munitions.html('_');
            break;
        case "Double-lame" :
            degats.html('1D8/1D8 + ' + parseInt(valeur));
            critique.html('19-20/*2');
            portee.html('Contact');
            type.html('Tranchant');
            munitions.html('_');
            break;
        case "Fléau double" :
            degats.html('1D8/1D8 + ' + parseInt(valeur));
            critique.html('*2');
            portee.html('Contact');
            type.html('Contondant');
            munitions.html('_');
            break;
        case "Hache double orque" :
            degats.html('1D8/1D8 + ' + parseInt(valeur));
            critique.html('*3');
            portee.html('Contact');
            type.html('Tranchant');
            munitions.html('_');
            break;
        case "Marteau-piolet gnome" :
            degats.html('1D8/1D6 + ' + parseInt(valeur));
            critique.html('*3/*4');
            portee.html('Contact');
            type.html('Contondant et perforant');
            munitions.html('_');
            break;
        case "Urgrosh nain" :
            degats.html('1D8/1D6 + ' + parseInt(valeur));
            critique.html('*3');
            portee.html('Contact');
            type.html('Perforant ou tranchant');
            munitions.html('_');
            break;
    };
};

function choixArme_armes_exotiques_armes_à_distante(arme, bonus, degats, critique, portee, type, munitions) {
    var valeur = parseInt($('#dex_saisie').val());
    var modificateur = Math.floor((valeur - 10)/2);
    var valeur = modificateur + parseInt(bonus.val());
    
    switch(arme) {
        case "Arbalètre de poing" :
            degats.html('1D4 + ' + parseInt(valeur));
            critique.html('19-20/*2');
            portee.html('9 m');
            type.html('Perforant');
            munitions.html('Carreaux (10)');
            break;
        case "Arbalètre légère à répétition" :
            degats.html('1D8 + ' + parseInt(valeur));
            critique.html('19-20/*2');
            portee.html('24 m');
            type.html('Perforant');
            munitions.html('Carreaux (5)');
            break;
        case "Arbalètre lourde à répétition" :
            degats.html('1D10 + ' + parseInt(valeur));
            critique.html('19-20/*2');
            portee.html('36 m');
            type.html('Perforant');
            munitions.html('Carreaux (5)');
            break;
        case "Bolas" :
            degats.html('1D4 + ' + parseInt(valeur));
            critique.html('*2');
            portee.html('3 m');
            type.html('Perforant');
            munitions.html('_');
            break;
        case "Filet" :
            degats.html('- + ' + parseInt(valeur));
            critique.html('-');
            portee.html('3 m');
            type.html('Perforant');
            munitions.html('_');
            break;
        case "Shuriken" :
            degats.html('1D2 + ' + parseInt(valeur));
            critique.html('*2');
            portee.html('3 m');
            type.html('Perforant');
            munitions.html('(5)');
            break;
    };
};

$(function() {
    $('#famille_arme_I').change(function() {
        $('#maniement_arme_I').find('option').remove();
        $('#arme_I').find('option').remove();
        $('#degats_I').html(' ');
        $('#critique_I').html(' ');
        $('#portee_I').html(' ');
        $('#type_I').html(' ');
        $('#munitions_I').html(' ');
        $('#bonus_I').val(0);

        choixFamilleArme($('#famille_arme_I').val(), $('#maniement_arme_I'));
    })

    $('#maniement_arme_I').change(function() {
        $('#arme_I').find('option').remove();
        $('#degats_I').html(' ');
        $('#critique_I').html(' ');
        $('#portee_I').html(' ');
        $('#type_I').html(' ');
        $('#munitions_I').html(' ');
        $('#bonus_I').val(0);

        choixManiementArme($('#famille_arme_I').val(), $('#maniement_arme_I').val(), $('#arme_I'));
    })

    $('#arme_I').change(function() {
        $('#degats_I').html(' ');
        $('#critique_I').html(' ');
        $('#portee_I').html(' ');
        $('#type_I').html(' ');
        $('#munitions_I').html(' ');
        $('#bonus_I').val(0);

        calculeFrapper($('#maniement_arme_I').val(), $('#bonus_I').val(), $('#frappe_I'));
        choixArme($('#famille_arme_I').val(), $('#maniement_arme_I').val(), $('#arme_I').val(), $('#bonus_I'), $('#degats_I'), $('#critique_I'), $('#portee_I'), $('#type_I'), $('#munitions_I'));
    })

    $('#bonus_I').change(function() {
        calculeFrapper($('#maniement_arme_I').val(), $('#bonus_I').val(), $('#frappe_I'));
        choixArme($('#famille_arme_I').val(), $('#maniement_arme_I').val(), $('#arme_I').val(), $('#bonus_I'), $('#degats_I'), $('#critique_I'), $('#portee_I'), $('#type_I'), $('#munitions_I'));
    })


    $('#famille_arme_II').change(function() {
        $('#maniement_arme_II').find('option').remove();
        $('#arme_II').find('option').remove();
        $('#degats_II').html(' ');
        $('#critique_II').html(' ');
        $('#portee_II').html(' ');
        $('#type_II').html(' ');
        $('#munitions_II').html(' ');
        $('#bonus_II').val(0);

        choixFamilleArme($('#famille_arme_II').val(), $('#maniement_arme_II'));
    })

    $('#maniement_arme_II').change(function() {
        $('#arme_II').find('option').remove();
        $('#degats_II').html(' ');
        $('#critique_II').html(' ');
        $('#portee_II').html(' ');
        $('#type_II').html(' ');
        $('#munitions_II').html(' ');
        $('#bonus_II').val(0);

        choixManiementArme($('#famille_arme_II').val(), $('#maniement_arme_II').val(), $('#arme_II'));
    })

    $('#arme_II').change(function() {
        $('#degats_II').html(' ');
        $('#critique_II').html(' ');
        $('#portee_II').html(' ');
        $('#type_II').html(' ');
        $('#munitions_II').html(' ');
        $('#bonus_II').val(0);

        calculeFrapper($('#maniement_arme_II').val(), $('#bonus_II').val(), $('#frappe_II'));
        choixArme($('#famille_arme_II').val(), $('#maniement_arme_II').val(), $('#arme_II').val(), $('#bonus_II'), $('#degats_II'), $('#critique_II'), $('#portee_II'), $('#type_II'), $('#munitions_II'));
    })

    $('#bonus_II').change(function() {
        calculeFrapper($('#maniement_arme_II').val(), $('#bonus_II').val(), $('#frappe_II'));
        choixArme($('#famille_arme_II').val(), $('#maniement_arme_II').val(), $('#arme_II').val(), $('#bonus_II'), $('#degats_II'), $('#critique_II'), $('#portee_II'), $('#type_II'), $('#munitions_II'));
    })


    $('#famille_arme_III').change(function() {
        $('#maniement_arme_III').find('option').remove();
        $('#arme_III').find('option').remove();
        $('#degats_III').html(' ');
        $('#critique_III').html(' ');
        $('#portee_III').html(' ');
        $('#type_III').html(' ');
        $('#munitions_III').html(' ');
        $('#bonus_III').val(0);

        choixFamilleArme($('#famille_arme_III').val(), $('#maniement_arme_III'));
    })

    $('#maniement_arme_III').change(function() {
        $('#arme_III').find('option').remove();
        $('#degats_III').html(' ');
        $('#critique_III').html(' ');
        $('#portee_III').html(' ');
        $('#type_III').html(' ');
        $('#munitions_III').html(' ');
        $('#bonus_III').val(0);

        choixManiementArme($('#famille_arme_III').val(), $('#maniement_arme_III').val(), $('#arme_III'));
    })

    $('#arme_III').change(function() {
        $('#degats_III').html(' ');
        $('#critique_III').html(' ');
        $('#portee_III').html(' ');
        $('#type_III').html(' ');
        $('#munitions_III').html(' ');
        $('#bonus_III').val(0);

        calculeFrapper($('#maniement_arme_III').val(), $('#bonus_III').val(), $('#frappe_III'));
        choixArme($('#famille_arme_III').val(), $('#maniement_arme_III').val(), $('#arme_III').val(), $('#bonus_III'), $('#degats_III'), $('#critique_III'), $('#portee_III'), $('#type_III'), $('#munitions_III'));
    })

    $('#bonus_III').change(function() {
        calculeFrapper($('#maniement_arme_III').val(), $('#bonus_III').val(), $('#frappe_III'));
        choixArme($('#famille_arme_III').val(), $('#maniement_arme_III').val(), $('#arme_III').val(), $('#bonus_III'), $('#degats_III'), $('#critique_III'), $('#portee_III'), $('#type_III'), $('#munitions_III'));
    })


    $('#famille_arme_IV').change(function() {
        $('#maniement_arme_IV').find('option').remove();
        $('#arme_IV').find('option').remove();
        $('#degats_IV').html(' ');
        $('#critique_IV').html(' ');
        $('#portee_IV').html(' ');
        $('#type_IV').html(' ');
        $('#munitions_IV').html(' ');
        $('#bonus_IV').val(0);

        choixFamilleArme($('#famille_arme_IV').val(), $('#maniement_arme_IV'));
    })

    $('#maniement_arme_IV').change(function() {
        $('#arme_IV').find('option').remove();
        $('#degats_IV').html(' ');
        $('#critique_IV').html(' ');
        $('#portee_IV').html(' ');
        $('#type_IV').html(' ');
        $('#munitions_IV').html(' ');
        $('#bonus_IV').val(0);

        choixManiementArme($('#famille_arme_IV').val(), $('#maniement_arme_IV').val(), $('#arme_IV'));
    })

    $('#arme_IV').change(function() {
        $('#degats_IV').html(' ');
        $('#critique_IV').html(' ');
        $('#portee_IV').html(' ');
        $('#type_IV').html(' ');
        $('#munitions_IV').html(' ');
        $('#bonus_IV').val(0);

        calculeFrapper($('#maniement_arme_IV').val(), $('#bonus_IV').val(), $('#frappe_IV'));
        choixArme($('#famille_arme_IV').val(), $('#maniement_arme_IV').val(), $('#arme_IV').val(), $('#bonus_IV'), $('#degats_IV'), $('#critique_IV'), $('#portee_IV'), $('#type_IV'), $('#munitions_IV'));
    })

    $('#bonus_IV').change(function() {
        calculeFrapper($('#maniement_arme_IV').val(), $('#bonus_IV').val(), $('#frappe_IV'));
        choixArme($('#famille_arme_IV').val(), $('#maniement_arme_IV').val(), $('#arme_IV').val(), $('#bonus_IV'), $('#degats_IV'), $('#critique_IV'), $('#portee_IV'), $('#type_IV'), $('#munitions_IV'));
    })


    $('#famille_arme_V').change(function() {
        $('#maniement_arme_V').find('option').remove();
        $('#arme_V').find('option').remove();
        $('#degats_V').html(' ');
        $('#critique_V').html(' ');
        $('#portee_V').html(' ');
        $('#type_V').html(' ');
        $('#munitions_V').html(' ');
        $('#bonus_V').val(0);

        choixFamilleArme($('#famille_arme_V').val(), $('#maniement_arme_V'));
    })

    $('#maniement_arme_V').change(function() {
        $('#arme_V').find('option').remove();
        $('#degats_V').html(' ');
        $('#critique_V').html(' ');
        $('#portee_V').html(' ');
        $('#type_V').html(' ');
        $('#munitions_V').html(' ');
        $('#bonus_V').val(0);

        choixManiementArme($('#famille_arme_V').val(), $('#maniement_arme_V').val(), $('#arme_V'));
    })

    $('#arme_V').change(function() {
        $('#degats_V').html(' ');
        $('#critique_V').html(' ');
        $('#portee_V').html(' ');
        $('#type_V').html(' ');
        $('#munitions_V').html(' ');
        $('#bonus_V').val(0);

        calculeFrapper($('#maniement_arme_V').val(), $('#bonus_V').val(), $('#frappe_V'));
        choixArme($('#famille_arme_V').val(), $('#maniement_arme_V').val(), $('#arme_V').val(), $('#bonus_V'), $('#degats_V'), $('#critique_V'), $('#portee_V'), $('#type_V'), $('#munitions_V'));
    })

    $('#bonus_V').change(function() {
        calculeFrapper($('#maniement_arme_V').val(), $('#bonus_V').val(), $('#frappe_V'));
        choixArme($('#famille_arme_V').val(), $('#maniement_arme_V').val(), $('#arme_V').val(), $('#bonus_V'), $('#degats_V'), $('#critique_V'), $('#portee_V'), $('#type_V'), $('#munitions_V'));
    })
});

function calculeFrapper(maniement_arme, bonus, frappe) {
    if (maniement_arme == "Armes à distante") {
        var valeur = parseInt($('#dex_saisie').val());
        var modificateur = Math.floor((valeur - 10)/2);
        var val01 = parseInt($('#bba').html())
                  + parseInt(modificateur)
                  + parseInt(bonus);
    } else {
        var valeur = parseInt($('#for_saisie').val());
        var modificateur = Math.floor((valeur - 10)/2);
        var val01 = parseInt($('#bba').html())
                  + parseInt(modificateur)
                  + parseInt(bonus);
    };

    var val02 = parseInt(val01) - 5;
    var val03 = parseInt(val02) - 5;
    var val04 = parseInt(val03) - 5;

    console.log($('#bba').html());
    switch($('#bba').html()) {
        case '1' :
            frappe.html(val01);
            break;
        case '2' :
            frappe.html(val01);
            break;
        case '3' :
            frappe.html(val01);
            break;
        case '4' :
            frappe.html(val01);
            break;
        case '5' :
            frappe.html(val01);
            break;
        case '6' :
            frappe.html(val01 + '/' + val02);
            break;
        case '7' :
            frappe.html(val01 + '/' + val02);
            break;
        case '8' :
            frappe.html(val01 + '/' + val02);
            break;
        case '9' :
            frappe.html(val01 + '/' + val02);
            break;
        case '10' :
            frappe.html(val01 + '/' + val02);
            break;
        case '11' :
            frappe.html(val01 + '/' + val02 + '/' + val03);
            break;
        case '12' :
            frappe.html(val01 + '/' + val02 + '/' + val03);
            break;
        case '13' :
            frappe.html(val01 + '/' + val02 + '/' + val03);
            break;
        case '14' :
            frappe.html(val01 + '/' + val02 + '/' + val03);
            break;
        case '15' :
            frappe.html(val01 + '/' + val02 + '/' + val03);
            break;
        case '16' :
            frappe.html(val01 + '/' + val02 + '/' + val03 + '/' + val04);
            break;
        case '17' :
            frappe.html(val01 + '/' + val02 + '/' + val03 + '/' + val04);
            break;
        case '18' :
            frappe.html(val01 + '/' + val02 + '/' + val03 + '/' + val04);
            break;
        case '19' :
            frappe.html(val01 + '/' + val02 + '/' + val03 + '/' + val04);
            break;
        case '20' :
            frappe.html(val01 + '/' + val02 + '/' + val03 + '/' + val04);
            break;
    };
}
