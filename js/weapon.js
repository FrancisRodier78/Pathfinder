function choixFamilleArme(famille_arme) {
    var armes_courantes = new Array();
    var armes_de_guerre = new Array();
    var armes_exotiques = new Array();

    armes_courantes = ["","Combat à mains nues","Armes légères","Armes à une main","Armes à deux mains","Armes à distante"];
    armes_de_guerre = ["","Armes légères","Armes à une main","Armes à deux mains","Armes à distante"];
    armes_exotiques = ["","Armes légères","Armes à une main","Armes à deux mains","Armes à distante"];

    switch(famille_arme) {
        case "armes_courantes" :
            for (var nombElement = 0; nombElement < armes_courantes.length; nombElement++) {
                $('#maniement_arme_I').append('<option value="' + armes_courantes[nombElement] + '">' + armes_courantes[nombElement] + '</option>');
            };
            break;
        case "armes_de_guerre" :
            for (var nombElement = 0; nombElement < armes_de_guerre.length; nombElement++) {
                $('#maniement_arme_I').append('<option value="' + armes_de_guerre[nombElement] + '">' + armes_de_guerre[nombElement] + '</option>');
            };
            break;
        case "armes_exotiques" :
            for (var nombElement = 0; nombElement < armes_exotiques.length; nombElement++) {
                $('#maniement_arme_I').append('<option value="' + armes_exotiques[nombElement] + '">' + armes_exotiques[nombElement] + '</option>');
            };
            break;
    }
}


function choixManiementArme(famille_arme, maniement_arme) {
    switch(famille_arme) {
        case "armes_courantes" :
            choixManiement_armes_courantes(maniement_arme)
            break;
        case "armes_de_guerre" :
            choixManiement_armes_de_guerre(maniement_arme)
            break;
        case "armes_exotiques" :
            choixManiement_armes_exotiques(maniement_arme)
            break;
    }
}

function choixManiement_armes_courantes(maniement_arme) {
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

    choixTypeArme(maniement_arme, combat_à_mains_nues, armes_légères, armes_à_une_main, armes_à_deux_mains, armes_à_distante);
}

function choixManiement_armes_de_guerre(maniement_arme) {
    var combat_à_mains_nues = new Array();
    var armes_légères = new Array();
    var armes_à_une_main = new Array();
    var armes_à_deux_mains = new Array();
    var armes_à_distante = new Array();

    armes_légères = ["","Armure à pointes","Epée courte","Hache de lancer","Hachette","Kukri","Marteau léger","Matraque","Pic de guerre léger","Rondache","Rondache à pointes"];
    armes_à_une_main = ["","Cimeterre","Ecu","Ecu à pointes","Epée longue","Fléau d'arme léger","Hache d'arme","Marteau de guerre","Pis de guerre lourd","Rapière","Trident"];
    armes_à_deux_mains = ["","Cimeterre à deux mains","Corsèque","Coutille","Epée à deux mains","Faux","Fléau d'armes lourd","Grande hache","Guisarme","Hallebarde","Lance d'arçon","Massue"];
    armes_à_distante = ["","Arc court","Arc court composite","Arc long","Arc long composite"];

    choixTypeArme(maniement_arme, combat_à_mains_nues, armes_légères, armes_à_une_main, armes_à_deux_mains, armes_à_distante);
}

function choixManiement_armes_exotiques(maniement_arme) {
    var combat_à_mains_nues = new Array();
    var armes_légères = new Array();
    var armes_à_une_main = new Array();
    var armes_à_deux_mains = new Array();
    var armes_à_distante = new Array();

    armes_légères = ["","Kama","Nunchaku","Sai","Siangham"];
    armes_à_une_main = ["","Epée batarde","Fouet","Hache de guerre naine"];
    armes_à_deux_mains = ["","Chaîne cloutée","Double-lame","Fléau double","Hache double orque","Marteau-piolet gnome","Urgrosh nain"];
    armes_à_distante = ["","Arbalètre de poing","Arbalètre légère à répétition","Arbalètre lourde à répétition","Bolas","Filet","Shuriken"];

    choixTypeArme(maniement_arme, combat_à_mains_nues, armes_légères, armes_à_une_main, armes_à_deux_mains, armes_à_distante);
}

function choixTypeArme(maniement_arme, combat_à_mains_nues, armes_légères, armes_à_une_main, armes_à_deux_mains, armes_à_distante) {
    switch(maniement_arme) {
        case "Combat à mains nues" :
            for (var nombElement = 0; nombElement < combat_à_mains_nues.length; nombElement++) {
                $('#arme_I').append('<option value="combat_à_mains_nues[nombElement]">' + combat_à_mains_nues[nombElement] + '</option>');
            };
            break;
        case "Armes légères" :
            for (var nombElement = 0; nombElement < armes_légères.length; nombElement++) {
                $('#arme_I').append('<option value="armes_légères[nombElement]">' + armes_légères[nombElement] + '</option>');
            };
            break;
        case "Armes à une main" :
            for (var nombElement = 0; nombElement < armes_à_une_main.length; nombElement++) {
                $('#arme_I').append('<option value="armes_à_une_main[nombElement]">' + armes_à_une_main[nombElement] + '</option>');
            };
            break;
        case "Armes à deux mains" :
            for (var nombElement = 0; nombElement < armes_à_deux_mains.length; nombElement++) {
                $('#arme_I').append('<option value="armes_à_deux_mains[nombElement]">' + armes_à_deux_mains[nombElement] + '</option>');
            };
            break;
        case "Armes à distante" :
            for (var nombElement = 0; nombElement < armes_à_distante.length; nombElement++) {
                $('#arme_I').append('<option value="armes_à_distante[nombElement]">' + armes_à_distante[nombElement] + '</option>');
            };
            break;
    }
}

$(function() {
    $('#famille_arme_I').change(function() {
        $('#maniement_arme_I').find('option').remove();
        choixFamilleArme($('#famille_arme_I').val());
    })

    $('#maniement_arme_I').change(function() {
        $('#arme_I').find('option').remove();
        choixManiementArme($('#famille_arme_I').val(), $('#maniement_arme_I').val())
    })
});



















function choixArme(famille_arme,formManiement_arme,formArme,degat,force_modificateur,bonus,critique,portee,type,munition) {
    switch(famille_arme.value) {
        case "armes_courantes" :
            switch(formManiement_arme.value) {
                case "Combat à mains nues" :
                    choixArme_armes_courantes_combat_à_mains_nues(formArme,degat,force_modificateur,bonus,critique,portee,type,munition);
                   break;
                case "Armes légères" :
                    choixArme_armes_courantes_armes_légères(formArme,degat,force_modificateur,bonus,critique,portee,type,munition);
                    break;
                case "Armes à une main" :
                    choixArme_armes_courantes_armes_à_une_main(formArme,degat,force_modificateur,bonus,critique,portee,type,munition);
                    break;
                case "Armes à deux mains" :
                    choixArme_armes_courantes_armes_à_deux_mains(formArme,degat,force_modificateur,bonus,critique,portee,type,munition);
                    break;
                case "Armes à distante" :
                    choixArme_armes_courantes_armes_à_distante(formArme,degat,force_modificateur,bonus,critique,portee,type,munition);
                    break;
            }
            break;
        case "armes_de_guerre" :
            switch(formManiement_arme.value) {
                case "Armes légères" :
                    choixArme_armes_de_guerre_armes_légères(formArme,degat,force_modificateur,bonus,critique,portee,type,munition);
                    break;
                case "Armes à une main" :
                    choixArme_armes_de_guerre_armes_à_une_main(formArme,degat,force_modificateur,bonus,critique,portee,type,munition);
                    break;
                case "Armes à deux mains" :
                    choixArme_armes_de_guerre_armes_à_deux_mains(formArme,degat,force_modificateur,bonus,critique,portee,type,munition);
                    break;
                case "Armes à distante" :
                    choixArme_armes_de_guerre_armes_à_distante(formArme,degat,force_modificateur,bonus,critique,portee,type,munition);
                    break;
            }
            break;
        case "armes_exotiques" :
            switch(formManiement_arme.value) {
                case "Armes légères" :
                    choixArme_armes_exotiques_armes_légères(formArme,degat,force_modificateur,bonus,critique,portee,type,munition);
                    break;
                case "Armes à une main" :
                    choixArme_armes_exotiques_armes_à_une_main(formArme,degat,force_modificateur,bonus,critique,portee,type,munition);
                    break;
                case "Armes à deux mains" :
                    choixArme_armes_exotiques_armes_à_deux_mains(formArme,degat,force_modificateur,bonus,critique,portee,type,munition);
                    break;
                case "Armes à distante" :
                    choixArme_armes_exotiques_armes_à_distante(formArme,degat,force_modificateur,bonus,critique,portee,type,munition);
                    break;
            }
            break;
    }
}

function choixArme_armes_courantes_combat_à_mains_nues(formArme,degat,force_modificateur,bonus,critique,portee,type,munition) {
    var valeur = parseInt(document.getElementById(force_modificateur).innerHTML)
            + parseInt(bonus.value);
    
    switch(formArme.value) {
        case "Attaque à mains nues" :
            document.getElementById(degat).innerHTML = "1D3" + '+' + valeur;
            document.getElementById(critique).innerHTML = "*2";
            document.getElementById(portee).innerHTML = "Contact";
            document.getElementById(type).innerHTML = "Contondant";
            document.getElementById(munition).innerHTML = "_";
            break;
        case "Gantelet" :
            document.getElementById(degat).innerHTML = "1D3" + '+' + valeur;
            document.getElementById(critique).innerHTML = "*2";
            document.getElementById(portee).innerHTML = "Contact";
            document.getElementById(type).innerHTML = "Contondant";
            document.getElementById(munition).innerHTML = "_";
            break;
    };
}

function choixArme_armes_courantes_armes_légères(formArme,degat,force_modificateur,bonus,critique,portee,type,munition) {
    var valeur = parseInt(document.getElementById(force_modificateur).innerHTML)
            + parseInt(bonus.value);
    
    switch(formArme.value) {
        case "Dague" :
            document.getElementById(degat).innerHTML = "1D4" + '+' + valeur;
            document.getElementById(critique).innerHTML = "19-20/*2";
            document.getElementById(portee).innerHTML = "3 m";
            document.getElementById(type).innerHTML = "Perforant ou tranchant";
            document.getElementById(munition).innerHTML = "_";
            break;
        case "Dague coup-de-poing" :
            document.getElementById(degat).innerHTML = "1D4" + '+' + valeur;
            document.getElementById(critique).innerHTML = "*3";
            document.getElementById(portee).innerHTML = "Contact";
            document.getElementById(type).innerHTML = "Perforant";
            document.getElementById(munition).innerHTML = "_";
            break;
        case "Gantelet clouté" :
            document.getElementById(degat).innerHTML = "1D4" + '+' + valeur;
            document.getElementById(critique).innerHTML = "*2";
            document.getElementById(portee).innerHTML = "Contact";
            document.getElementById(type).innerHTML = "Perforant";
            document.getElementById(munition).innerHTML = "_";
            break;
        case "Masse d'armes légère" :
            document.getElementById(degat).innerHTML = "1D6" + '+' + valeur;
            document.getElementById(critique).innerHTML = "*2";
            document.getElementById(portee).innerHTML = "Contact";
            document.getElementById(type).innerHTML = "Contondant";
            document.getElementById(munition).innerHTML = "_";
            break;
        case "Serpe" :
            document.getElementById(degat).innerHTML = "1D6" + '+' + valeur;
            document.getElementById(critique).innerHTML = "*2";
            document.getElementById(portee).innerHTML = "Contact";
            document.getElementById(type).innerHTML = "Tranchant";
            document.getElementById(munition).innerHTML = "_";
            break;
    };
}

function choixArme_armes_courantes_armes_à_une_main(formArme,degat,force_modificateur,bonus,critique,portee,type,munition) {
    var valeur = parseInt(document.getElementById(force_modificateur).innerHTML)
            + parseInt(bonus.value);
    
    switch(formArme.value) {
        case "Epieu" :
            document.getElementById(degat).innerHTML = "1D6" + '+' + valeur;
            document.getElementById(critique).innerHTML = "*2";
            document.getElementById(portee).innerHTML = "6 m";
            document.getElementById(type).innerHTML = "Perforant";
            document.getElementById(munition).innerHTML = "_";
            break;
        case "Gourdin" :
            document.getElementById(degat).innerHTML = "1D6" + '+' + valeur;
            document.getElementById(critique).innerHTML = "*2";
            document.getElementById(portee).innerHTML = "3 m";
            document.getElementById(type).innerHTML = "Contondant";
            document.getElementById(munition).innerHTML = "_";
            break;
        case "Masse d'armes lourde" :
            document.getElementById(degat).innerHTML = "1D8" + '+' + valeur;
            document.getElementById(critique).innerHTML = "*2";
            document.getElementById(portee).innerHTML = "Contact";
            document.getElementById(type).innerHTML = "Contondant";
            document.getElementById(munition).innerHTML = "_";
            break;
        case "Morgenstern" :
            document.getElementById(degat).innerHTML = "1D8" + '+' + valeur;
            document.getElementById(critique).innerHTML = "*2";
            document.getElementById(portee).innerHTML = "Contact";
            document.getElementById(type).innerHTML = "Contondant et perforant";
            document.getElementById(munition).innerHTML = "_";
            break;
    };
}

function choixArme_armes_courantes_armes_à_deux_mains(formArme,degat,force_modificateur,bonus,critique,portee,type,munition) {
    var valeur = parseInt(document.getElementById(force_modificateur).innerHTML)
            + parseInt(bonus.value);
    
    switch(formArme.value) {
        case "Bâton" :
            document.getElementById(degat).innerHTML = "1D6/1D6" + '+' + valeur;
            document.getElementById(critique).innerHTML = "*2";
            document.getElementById(portee).innerHTML = "Contact";
            document.getElementById(type).innerHTML = "Contondant";
            document.getElementById(munition).innerHTML = "_";
            break;
        case "Lance" :
            document.getElementById(degat).innerHTML = "1D8" + '+' + valeur;
            document.getElementById(critique).innerHTML = "*3";
            document.getElementById(portee).innerHTML = "6 m";
            document.getElementById(type).innerHTML = "Perforant";
            document.getElementById(munition).innerHTML = "_";
            break;
        case "Pique" :
            document.getElementById(degat).innerHTML = "1D8" + '+' + valeur;
            document.getElementById(critique).innerHTML = "*3";
            document.getElementById(portee).innerHTML = "Allonge";
            document.getElementById(type).innerHTML = "Perforant";
            document.getElementById(munition).innerHTML = "_";
            break;
    };
}

function choixArme_armes_courantes_armes_à_distante(formArme,degat,force_modificateur,bonus,critique,portee,type,munition) {
    var valeur = parseInt(document.getElementById(force_modificateur).innerHTML)
            + parseInt(bonus.value);
    
    switch(formArme.value) {
        case "Arbalètre légère" :
            document.getElementById(degat).innerHTML = "1D8" + '+' + valeur;
            document.getElementById(critique).innerHTML = "19-20/*2";
            document.getElementById(portee).innerHTML = "24 m";
            document.getElementById(type).innerHTML = "Perforant";
            document.getElementById(munition).innerHTML = "Carraux (10)";
            break;
        case "Arbalètre lourde" :
            document.getElementById(degat).innerHTML = "1D10" + '+' + valeur;
            document.getElementById(critique).innerHTML = "19-20/*2";
            document.getElementById(portee).innerHTML = "36 m";
            document.getElementById(type).innerHTML = "Perforant";
            document.getElementById(munition).innerHTML = "Carraux (10)";
            break;
        case "Dart" :
            document.getElementById(degat).innerHTML = "1D4" + '+' + valeur;
            document.getElementById(critique).innerHTML = "*2";
            document.getElementById(portee).innerHTML = "6 m";
            document.getElementById(type).innerHTML = "Perforant";
            document.getElementById(munition).innerHTML = "_";
            break;
        case "Fronde" :
            document.getElementById(degat).innerHTML = "1D4" + '+' + valeur;
            document.getElementById(critique).innerHTML = "*2";
            document.getElementById(portee).innerHTML = "15 m";
            document.getElementById(type).innerHTML = "Contondant";
            document.getElementById(munition).innerHTML = "Billes (10)";
            break;
        case "Javeline" :
            document.getElementById(degat).innerHTML = "1D6" + '+' + valeur;
            document.getElementById(critique).innerHTML = "*2";
            document.getElementById(portee).innerHTML = "9 m";
            document.getElementById(type).innerHTML = "Perforant";
            document.getElementById(munition).innerHTML = "_";
            break;
    };
}

function choixArme_armes_de_guerre_armes_légères(formArme,degat,force_modificateur,bonus,critique,portee,type,munition) {
    var valeur = parseInt(document.getElementById(force_modificateur).innerHTML)
            + parseInt(bonus.value);
    
    switch(formArme.value) {
        case "Armure à pointes" :
            document.getElementById(degat).innerHTML = "1D6" + '+' + valeur;
            document.getElementById(critique).innerHTML = "*2";
            document.getElementById(portee).innerHTML = "Contact";
            document.getElementById(type).innerHTML = "Perforant";
            document.getElementById(munition).innerHTML = "_";
            break;
        case "Epée courte" :
            document.getElementById(degat).innerHTML = "1D6" + '+' + valeur;
            document.getElementById(critique).innerHTML = "19-20/*2";
            document.getElementById(portee).innerHTML = "Contact";
            document.getElementById(type).innerHTML = "Perforant";
            document.getElementById(munition).innerHTML = "_";
            break;
        case "Hache de lancer" :
            document.getElementById(degat).innerHTML = "1D6" + '+' + valeur;
            document.getElementById(critique).innerHTML = "*2";
            document.getElementById(portee).innerHTML = "3 m";
            document.getElementById(type).innerHTML = "Tranchant";
            document.getElementById(munition).innerHTML = "_";
            break;
        case "Hachette" :
            document.getElementById(degat).innerHTML = "1D6" + '+' + valeur;
            document.getElementById(critique).innerHTML = "*3";
            document.getElementById(portee).innerHTML = "Contact";
            document.getElementById(type).innerHTML = "Tranchant";
            document.getElementById(munition).innerHTML = "_";
            break;
        case "Kukri" :
            document.getElementById(degat).innerHTML = "1D4" + '+' + valeur;
            document.getElementById(critique).innerHTML = "18-20/*2";
            document.getElementById(portee).innerHTML = "Contact";
            document.getElementById(type).innerHTML = "Tranchant";
            document.getElementById(munition).innerHTML = "_";
            break;
        case "Marteau léger" :
            document.getElementById(degat).innerHTML = "1D4" + '+' + valeur;
            document.getElementById(critique).innerHTML = "*2";
            document.getElementById(portee).innerHTML = "6 m";
            document.getElementById(type).innerHTML = "Contondant";
            document.getElementById(munition).innerHTML = "_";
            break;
        case "Matraque" :
            document.getElementById(degat).innerHTML = "1D6" + '+' + valeur;
            document.getElementById(critique).innerHTML = "*2";
            document.getElementById(portee).innerHTML = "Contact";
            document.getElementById(type).innerHTML = "Contondant";
            document.getElementById(munition).innerHTML = "_";
            break;
        case "Pic de guerre léger" :
            document.getElementById(degat).innerHTML = "1D4" + '+' + valeur;
            document.getElementById(critique).innerHTML = "*4";
            document.getElementById(portee).innerHTML = "Contact";
            document.getElementById(type).innerHTML = "Perforant";
            document.getElementById(munition).innerHTML = "_";
            break;
        case "Rondache" :
            document.getElementById(degat).innerHTML = "1D3" + '+' + valeur;
            document.getElementById(critique).innerHTML = "*2";
            document.getElementById(portee).innerHTML = "Contact";
            document.getElementById(type).innerHTML = "Contondant";
            document.getElementById(munition).innerHTML = "_";
            break;
        case "Rondache à pointes" :
            document.getElementById(degat).innerHTML = "1D4" + '+' + valeur;
            document.getElementById(critique).innerHTML = "*2";
            document.getElementById(portee).innerHTML = "Contact";
            document.getElementById(type).innerHTML = "Perforant";
            document.getElementById(munition).innerHTML = "_";
            break;
    };
};

function choixArme_armes_de_guerre_armes_à_une_main(formArme,degat,force_modificateur,bonus,critique,portee,type,munition) {
    var valeur = parseInt(document.getElementById(force_modificateur).innerHTML)
            + parseInt(bonus.value);
    
    switch(formArme.value) {
        case "Cimeterre" :
            document.getElementById(degat).innerHTML = "1D6" + '+' + valeur;
            document.getElementById(critique).innerHTML = "18-20/*2";
            document.getElementById(portee).innerHTML = "Contact";
            document.getElementById(type).innerHTML = "Tranchant";
            document.getElementById(munition).innerHTML = "_";
            break;
        case "Ecu" :
            document.getElementById(degat).innerHTML = "1D4" + '+' + valeur;
            document.getElementById(critique).innerHTML = "*2";
            document.getElementById(portee).innerHTML = "Contact";
            document.getElementById(type).innerHTML = "Contondant";
            document.getElementById(munition).innerHTML = "_";
            break;
        case "Ecu à pointes" :
            document.getElementById(degat).innerHTML = "1D6" + '+' + valeur;
            document.getElementById(critique).innerHTML = "*2";
            document.getElementById(portee).innerHTML = "Contact";
            document.getElementById(type).innerHTML = "Perforant";
            document.getElementById(munition).innerHTML = "_";
            break;
        case "Epée longue" :
            document.getElementById(degat).innerHTML = "1D8" + '+' + valeur;
            document.getElementById(critique).innerHTML = "19-20/*2";
            document.getElementById(portee).innerHTML = "Contact";
            document.getElementById(type).innerHTML = "Tranchant";
            document.getElementById(munition).innerHTML = "_";
            break;
        case "Fléau d'arme léger" :
            document.getElementById(degat).innerHTML = "1D8" + '+' + valeur;
            document.getElementById(critique).innerHTML = "*2";
            document.getElementById(portee).innerHTML = "Contact";
            document.getElementById(type).innerHTML = "Contondant";
            document.getElementById(munition).innerHTML = "_";
            break;
        case "Hache d'arme" :
            document.getElementById(degat).innerHTML = "1D8" + '+' + valeur;
            document.getElementById(critique).innerHTML = "*3";
            document.getElementById(portee).innerHTML = "Contact";
            document.getElementById(type).innerHTML = "Tranchant";
            document.getElementById(munition).innerHTML = "_";
            break;
        case "Marteau de guerre" :
            document.getElementById(degat).innerHTML = "1D8" + '+' + valeur;
            document.getElementById(critique).innerHTML = "*3";
            document.getElementById(portee).innerHTML = "Contact";
            document.getElementById(type).innerHTML = "Contondant";
            document.getElementById(munition).innerHTML = "_";
            break;
        case "Pis de guerre lourd" :
            document.getElementById(degat).innerHTML = "1D6" + '+' + valeur;
            document.getElementById(critique).innerHTML = "*4";
            document.getElementById(portee).innerHTML = "Contact";
            document.getElementById(type).innerHTML = "Perforant";
            document.getElementById(munition).innerHTML = "_";
            break;
        case "Rapière" :
            document.getElementById(degat).innerHTML = "1D6" + '+' + valeur;
            document.getElementById(critique).innerHTML = "18-20/*2";
            document.getElementById(portee).innerHTML = "Contact";
            document.getElementById(type).innerHTML = "Perforant";
            document.getElementById(munition).innerHTML = "_";
            break;
        case "Trident" :
            document.getElementById(degat).innerHTML = "1D8" + '+' + valeur;
            document.getElementById(critique).innerHTML = "*2";
            document.getElementById(portee).innerHTML = "3 m";
            document.getElementById(type).innerHTML = "Perforant";
            document.getElementById(munition).innerHTML = "_";
            break;
    };
};

function choixArme_armes_de_guerre_armes_à_deux_mains(formArme,degat,force_modificateur,bonus,critique,portee,type,munition) {
    var valeur = parseInt(document.getElementById(force_modificateur).innerHTML)
            + parseInt(bonus.value);
    
    switch(formArme.value) {
        case "Cimeterre à deux mains" :
            document.getElementById(degat).innerHTML = "2D4" + '+' + valeur;
            document.getElementById(critique).innerHTML = "18-20/*2";
            document.getElementById(portee).innerHTML = "Contact";
            document.getElementById(type).innerHTML = "Tranchant";
            document.getElementById(munition).innerHTML = "_";
            break;
        case "Corsèque" :
            document.getElementById(degat).innerHTML = "2D4" + '+' + valeur;
            document.getElementById(critique).innerHTML = "*3";
            document.getElementById(portee).innerHTML = "Allonge";
            document.getElementById(type).innerHTML = "Perforant";
            document.getElementById(munition).innerHTML = "_";
            break;
        case "Coutille" :
            document.getElementById(degat).innerHTML = "1D10" + '+' + valeur;
            document.getElementById(critique).innerHTML = "*3";
            document.getElementById(portee).innerHTML = "Allonge";
            document.getElementById(type).innerHTML = "Tranchant";
            document.getElementById(munition).innerHTML = "_";
            break;
        case "Epée à deux mains" :
            document.getElementById(degat).innerHTML = "2D6" + '+' + valeur;
            document.getElementById(critique).innerHTML = "19-20/*2";
            document.getElementById(portee).innerHTML = "Contact";
            document.getElementById(type).innerHTML = "Tranchant";
            document.getElementById(munition).innerHTML = "_";
            break;
        case "Faux" :
            document.getElementById(degat).innerHTML = "2D4" + '+' + valeur;
            document.getElementById(critique).innerHTML = "*4";
            document.getElementById(portee).innerHTML = "Contact";
            document.getElementById(type).innerHTML = "Perforant ou tranchant";
            document.getElementById(munition).innerHTML = "_";
            break;
        case "Fléau d'armes lourd" :
            document.getElementById(degat).innerHTML = "1D10" + '+' + valeur;
            document.getElementById(critique).innerHTML = "19-20/*2";
            document.getElementById(portee).innerHTML = "Contact";
            document.getElementById(type).innerHTML = "Contondant";
            document.getElementById(munition).innerHTML = "_";
            break;
        case "Grande hache" :
            document.getElementById(degat).innerHTML = "1D12" + '+' + valeur;
            document.getElementById(critique).innerHTML = "*3";
            document.getElementById(portee).innerHTML = "Contact";
            document.getElementById(type).innerHTML = "Tranchant";
            document.getElementById(munition).innerHTML = "_";
            break;
        case "Guisarme" :
            document.getElementById(degat).innerHTML = "2D4" + '+' + valeur;
            document.getElementById(critique).innerHTML = "*3";
            document.getElementById(portee).innerHTML = "Allonge";
            document.getElementById(type).innerHTML = "Tranchant";
            document.getElementById(munition).innerHTML = "_";
            break;
        case "Hallebarde" :
            document.getElementById(degat).innerHTML = "1D10" + '+' + valeur;
            document.getElementById(critique).innerHTML = "*3";
            document.getElementById(portee).innerHTML = "Contact";
            document.getElementById(type).innerHTML = "Perforant ou tranchant";
            document.getElementById(munition).innerHTML = "_";
            break;
        case "Lance d'arçon" :
            document.getElementById(degat).innerHTML = "1D8" + '+' + valeur;
            document.getElementById(critique).innerHTML = "*3";
            document.getElementById(portee).innerHTML = "Allonge";
            document.getElementById(type).innerHTML = "Perforant";
            document.getElementById(munition).innerHTML = "_";
            break;
        case "Massue" :
            document.getElementById(degat).innerHTML = "1D10" + '+' + valeur;
            document.getElementById(critique).innerHTML = "*2";
            document.getElementById(portee).innerHTML = "Contact";
            document.getElementById(type).innerHTML = "Contondant";
            document.getElementById(munition).innerHTML = "_";
            break;
    };
};

function choixArme_armes_de_guerre_armes_à_distante(formArme,degat,force_modificateur,bonus,critique,portee,type,munition) {
    var valeur = parseInt(document.getElementById(force_modificateur).innerHTML)
            + parseInt(bonus.value);
    
    switch(formArme.value) {
        case "Arc court" :
            document.getElementById(degat).innerHTML = "1D6" + '+' + valeur;
            document.getElementById(critique).innerHTML = "*3";
            document.getElementById(portee).innerHTML = "18 m";
            document.getElementById(type).innerHTML = "Perforant";
            document.getElementById(munition).innerHTML = "Flèches (20)";
            break;
        case "Arc court composite" :
            document.getElementById(degat).innerHTML = "1D6" + '+' + valeur;
            document.getElementById(critique).innerHTML = "*3";
            document.getElementById(portee).innerHTML = "21 m";
            document.getElementById(type).innerHTML = "Perforant";
            document.getElementById(munition).innerHTML = "Flèches (20)";
            break;
        case "Arc long" :
            document.getElementById(degat).innerHTML = "1D8" + '+' + valeur;
            document.getElementById(critique).innerHTML = "*3";
            document.getElementById(portee).innerHTML = "30 m";
            document.getElementById(type).innerHTML = "Perforant";
            document.getElementById(munition).innerHTML = "Flèches (20)";
            break;
        case "Arc long composite" :
            document.getElementById(degat).innerHTML = "1D8" + '+' + valeur;
            document.getElementById(critique).innerHTML = "*3";
            document.getElementById(portee).innerHTML = "33 m";
            document.getElementById(type).innerHTML = "Perforant";
            document.getElementById(munition).innerHTML = "Flèches (20)";
            break;
    };
};

function choixArme_armes_exotiques_armes_légères(formArme,degat,force_modificateur,bonus,critique,portee,type,munition) {
    var valeur = parseInt(document.getElementById(force_modificateur).innerHTML)
            + parseInt(bonus.value);
    
    switch(formArme.value) {
        case "Kama" :
            document.getElementById(degat).innerHTML = "1D6" + '+' + valeur;
            document.getElementById(critique).innerHTML = "*2";
            document.getElementById(portee).innerHTML = "Contact";
            document.getElementById(type).innerHTML = "Tranchant";
            document.getElementById(munition).innerHTML = "_";
            break;
        case "Nunchaku" :
            document.getElementById(degat).innerHTML = "1D6" + '+' + valeur;
            document.getElementById(critique).innerHTML = "*2";
            document.getElementById(portee).innerHTML = "Contact";
            document.getElementById(type).innerHTML = "Contondant";
            document.getElementById(munition).innerHTML = "_";
            break;
        case "Sai" :
            document.getElementById(degat).innerHTML = "1D4" + '+' + valeur;
            document.getElementById(critique).innerHTML = "*2";
            document.getElementById(portee).innerHTML = "Contact";
            document.getElementById(type).innerHTML = "Contondant";
            document.getElementById(munition).innerHTML = "_";
            break;
        case "Siangham" :
            document.getElementById(degat).innerHTML = "1D6" + '+' + valeur;
            document.getElementById(critique).innerHTML = "*2";
            document.getElementById(portee).innerHTML = "Contact";
            document.getElementById(type).innerHTML = "Perforant";
            document.getElementById(munition).innerHTML = "_";
            break;
    };
};

function choixArme_armes_exotiques_armes_à_une_main(formArme,degat,force_modificateur,bonus,critique,portee,type,munition) {
    var valeur = parseInt(document.getElementById(force_modificateur).innerHTML)
            + parseInt(bonus.value);
    
    switch(formArme.value) {
        case "Epée batarde" :
            document.getElementById(degat).innerHTML = "1D10" + '+' + valeur;
            document.getElementById(critique).innerHTML = "19-20/*2";
            document.getElementById(portee).innerHTML = "Contact";
            document.getElementById(type).innerHTML = "Tranchant";
            document.getElementById(munition).innerHTML = "_";
            break;
        case "Fouet" :
            document.getElementById(degat).innerHTML = "1D3" + '+' + valeur;
            document.getElementById(critique).innerHTML = "*2";
            document.getElementById(portee).innerHTML = "Allonge";
            document.getElementById(type).innerHTML = "Tranchant";
            document.getElementById(munition).innerHTML = "_";
            break;
        case "Hache de guerre naine" :
            document.getElementById(degat).innerHTML = "1D10" + '+' + valeur;
            document.getElementById(critique).innerHTML = "*3";
            document.getElementById(portee).innerHTML = "Contact";
            document.getElementById(type).innerHTML = "Tranchant";
            document.getElementById(munition).innerHTML = "_";
            break;
    };
};

function choixArme_armes_exotiques_armes_à_deux_mains(formArme,degat,force_modificateur,bonus,critique,portee,type,munition) {
    var valeur = parseInt(document.getElementById(force_modificateur).innerHTML)
            + parseInt(bonus.value);
    
    switch(formArme.value) {
        case "Chaîne cloutée" :
            document.getElementById(degat).innerHTML = "2D4" + '+' + valeur;
            document.getElementById(critique).innerHTML = "*2";
            document.getElementById(portee).innerHTML = "Allonge";
            document.getElementById(type).innerHTML = "Perforant";
            document.getElementById(munition).innerHTML = "_";
            break;
        case "Double-lame" :
            document.getElementById(degat).innerHTML = "1D8/1D8" + '+' + valeur;
            document.getElementById(critique).innerHTML = "19-20/*2";
            document.getElementById(portee).innerHTML = "Contact";
            document.getElementById(type).innerHTML = "Tranchant";
            document.getElementById(munition).innerHTML = "_";
            break;
        case "Fléau double" :
            document.getElementById(degat).innerHTML = "1D8/1D8" + '+' + valeur;
            document.getElementById(critique).innerHTML = "*2";
            document.getElementById(portee).innerHTML = "Contact";
            document.getElementById(type).innerHTML = "Contondant";
            document.getElementById(munition).innerHTML = "_";
            break;
        case "Hache double orque" :
            document.getElementById(degat).innerHTML = "1D8/1D8" + '+' + valeur;
            document.getElementById(critique).innerHTML = "*3";
            document.getElementById(portee).innerHTML = "Contact";
            document.getElementById(type).innerHTML = "Tranchant";
            document.getElementById(munition).innerHTML = "_";
            break;
        case "Marteau-piolet gnome" :
            document.getElementById(degat).innerHTML = "1D8/1D6" + '+' + valeur;
            document.getElementById(critique).innerHTML = "*3/*4";
            document.getElementById(portee).innerHTML = "Contact";
            document.getElementById(type).innerHTML = "Contondant et perforant";
            document.getElementById(munition).innerHTML = "_";
            break;
        case "Urgrosh nain" :
            document.getElementById(degat).innerHTML = "1D8/1D6" + '+' + valeur;
            document.getElementById(critique).innerHTML = "*3";
            document.getElementById(portee).innerHTML = "Contact";
            document.getElementById(type).innerHTML = "Perforant ou tranchant";
            document.getElementById(munition).innerHTML = "_";
            break;
    };
};

function choixArme_armes_exotiques_armes_à_distante(formArme,degat,force_modificateur,bonus,critique,portee,type,munition) {
    var valeur = parseInt(document.getElementById(force_modificateur).innerHTML)
            + parseInt(bonus.value);
    
    switch(formArme.value) {
        case "Arbalètre de poing" :
            document.getElementById(degat).innerHTML = "1D4" + '+' + valeur;
            document.getElementById(critique).innerHTML = "19-20/*2";
            document.getElementById(portee).innerHTML = "9 m";
            document.getElementById(type).innerHTML = "Perforant";
            document.getElementById(munition).innerHTML = "Carreaux (10)";
            break;
        case "Arbalètre légère à répétition" :
            document.getElementById(degat).innerHTML = "1D8" + '+' + valeur;
            document.getElementById(critique).innerHTML = "19-20/*2";
            document.getElementById(portee).innerHTML = "24 m";
            document.getElementById(type).innerHTML = "Perforant";
            document.getElementById(munition).innerHTML = "Carreaux (5)";
            break;
        case "Arbalètre lourde à répétition" :
            document.getElementById(degat).innerHTML = "1D10" + '+' + valeur;
            document.getElementById(critique).innerHTML = "19-20/*2";
            document.getElementById(portee).innerHTML = "36 m";
            document.getElementById(type).innerHTML = "Perforant";
            document.getElementById(munition).innerHTML = "Carreaux (5)";
            break;
        case "Bolas" :
            document.getElementById(degat).innerHTML = "1D4" + '+' + valeur;
            document.getElementById(critique).innerHTML = "*2";
            document.getElementById(portee).innerHTML = "3 m";
            document.getElementById(type).innerHTML = "Perforant";
            document.getElementById(munition).innerHTML = "_";
            break;
        case "Filet" :
            document.getElementById(degat).innerHTML = "-" + '+' + valeur;
            document.getElementById(critique).innerHTML = "-";
            document.getElementById(portee).innerHTML = "3 m";
            document.getElementById(type).innerHTML = "Perforant";
            document.getElementById(munition).innerHTML = "_";
            break;
        case "Shuriken" :
            document.getElementById(degat).innerHTML = "1D2" + '+' + valeur;
            document.getElementById(critique).innerHTML = "*2";
            document.getElementById(portee).innerHTML = "3 m";
            document.getElementById(type).innerHTML = "Perforant";
            document.getElementById(munition).innerHTML = "(5)";
            break;
    };
};

function calculeFrapper(famille_arme,formArme,degat,critique,portee,type,munition,maniement_arme,bonusBaseArme,dexteriteModificateur,forceModificateur,bonus,frapper) {
    choixArme(famille_arme,maniement_arme,formArme,degat,forceModificateur,bonus,critique,portee,type,munition);

    if (maniement_arme.value == "Armes à distante") {
        var val01 = parseInt(document.getElementById(bonusBaseArme).innerHTML)
                  + parseInt(document.getElementById(dexteriteModificateur).innerHTML)
                  + parseInt(bonus.value);
    } else {
        var val01 = parseInt(document.getElementById(bonusBaseArme).innerHTML)
                  + parseInt(document.getElementById(forceModificateur).innerHTML)
                  + parseInt(bonus.value);
    };

    var val02 = parseInt(val01) - 5;
    var val03 = parseInt(val02) - 5;
    var val04 = parseInt(val03) - 5;

    switch(document.getElementById(bonusBaseArme).innerHTML) {
        case "1" :
            document.getElementById(frapper).innerHTML = val01;
            break;
        case "2" :
            document.getElementById(frapper).innerHTML = val01;
            break;
        case "3" :
            document.getElementById(frapper).innerHTML = val01;
            break;
        case "4" :
            document.getElementById(frapper).innerHTML = val01;
            break;
        case "5" :
            document.getElementById(frapper).innerHTML = val01;
            break;
        case "6" :
            document.getElementById(frapper).innerHTML = val01 + "/" + val02;
            break;
        case "7" :
            document.getElementById(frapper).innerHTML = val01 + "/" + val02;
            break;
        case "8" :
            document.getElementById(frapper).innerHTML = val01 + "/" + val02;
            break;
        case "9" :
            document.getElementById(frapper).innerHTML = val01 + "/" + val02;
            break;
        case "10" :
            document.getElementById(frapper).innerHTML = val01 + "/" + val02;
            break;
        case "11" :
            document.getElementById(frapper).innerHTML = val01 + "/" + val02 + "/" + val03;
            break;
        case "12" :
            document.getElementById(frapper).innerHTML = val01 + "/" + val02 + "/" + val03;
            break;
        case "13" :
            document.getElementById(frapper).innerHTML = val01 + "/" + val02 + "/" + val03;
            break;
        case "14" :
            document.getElementById(frapper).innerHTML = val01 + "/" + val02 + "/" + val03;
            break;
        case "15" :
            document.getElementById(frapper).innerHTML = val01 + "/" + val02 + "/" + val03;
            break;
        case "16" :
            document.getElementById(frapper).innerHTML = val01 + "/" + val02 + "/" + val03 + "/" + val04;
            break;
        case "17" :
            document.getElementById(frapper).innerHTML = val01 + "/" + val02 + "/" + val03 + "/" + val04;
            break;
        case "18" :
            document.getElementById(frapper).innerHTML = val01 + "/" + val02 + "/" + val03 + "/" + val04;
            break;
        case "19" :
            document.getElementById(frapper).innerHTML = val01 + "/" + val02 + "/" + val03 + "/" + val04;
            break;
        case "20" :
            document.getElementById(frapper).innerHTML = val01 + "/" + val02 + "/" + val03 + "/" + val04;
            break;
    };
}
