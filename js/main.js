function influenceClassePersonnage() {
// a voir plus tard
    affichageEmplacement(document.form.emplacement_I);
    affichageArmure(document.form.armure);
    affichageBouclier(document.form.bouclier);
    affichageProtection(document.form.protection_I);
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

function affichageEmplacement(emplacement) {
    var emplacementTableau = new Array();

    emplacementTableau = [' ','Sur la tête','Devant les yeux','Autour du cou','Sur le torse','Sur le corps','Autour de la taille',
                            'Sur les épaules','Sur les bras ou les poignets','Aux mains','Aux doigts (un sur chaque main)','Aux pieds',
                            ,'Dans un foureau','Sac à dos'];

    for (var nombElement = 0; nombElement < emplacementTableau.length; nombElement++) {
        emplacement.options[nombElement] = new Option(emplacementTableau[nombElement],emplacementTableau[nombElement]);
    };
}

function affichageEcoles(ecole) {
    var ecoleTableau = new Array();

    ecoleTableau = [') ','Abjuration','Divination','Enchantement','Evocation','Illusion','Invocation','Nécromantie','Transmutation'];

    for (var nombElement = 0; nombElement < ecoleTableau.length; nombElement++) {
        ecole.options[nombElement] = new Option(ecoleTableau[nombElement],ecoleTableau[nombElement]);
    };
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