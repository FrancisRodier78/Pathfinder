
<!DOCTYPE html 
<html>
<head>
    <title>Feuille de personnage</title>
    <meta charset="UTF-8" />
    <meta name ="viewport" content="width = device-width "/>
    <meta name="description" content="Feuille de personnage pour les règles Pathfinder 1.">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">

    <!-- Le HTML5 ainsi que les media queries ne sont pas reconnus sur le navigateur IE8, il faut donc penser à ajouter 2 scripts JS pour les rendre compatibles.. -->
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
       <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
       <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

    <link rel="stylesheet" href="css/reset.css" />
    <!-- link rel="stylesheet" href="css/base.css" / -->
    <!-- script type="text/javascript" src="js/main.js"></script -->
    <!-- script type="text/javascript" src="js/weapon.js"></script -->
</head>

<body>
    <form action="" name="form" method="post">
        <div class="row">
            <div class="col-lg-4">
                <h1 id="titre_feuille">PATHFINDER</h1>
            </div>

            <div class="col-lg-8">
                <div class="row">
                    <div class="col-lg-5">
                        <h2 id="label_nom_du_personnage">NOM DU PERSONNAGE</h2>
                        <input type="text" name="non_du_personnage" size="60" maxlength="60" required id="nom_du_personnage">
                    </div>

                    <div class="col-lg-2">
                        <h2 id="label_alignement">ALIGNEMENT</h2> 
                        <select id="alignement">
                            <option></option>
                            <option>Loyal-Bon</option>
                            <option>Loyal-Neutre</option>
                            <option>Loyal-Mauvais</option>
                            <option>Neutre-Bon</option>
                            <option>Neutre-Neutre</option>
                            <option>Neutre-Mauvais</option>
                            <option>Chaotique-Bon</option>
                            <option>Chaotique-Neutre</option>
                            <option>Chaotique-Mauvais</option>
                        </select>
                    </div>
        
                    <div class="col-lg-5">
                        <h2 id="label_nom_du_joueur">NOM DU JOUEUR</h2> 
                        <input type="text" name="nom_du_joueur" size="30" maxlength="30" required id="nom_du_joueur">
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-4">
                        <h2 id="label_classe">CLASSE</h2>  
                        <select id="classe" name="classe" onChange="influenceClassePersonnage()">
                            <option value=" " selected></option>
                            <option value="Barbare">Barbare</option>
                            <option value="Barde">Barde</option>
                            <option value="Druide">Druide</option>
                            <option value="Ensorceleur">Ensorceleur</option>
                            <option value="Guerrier">Guerrier</option>
                            <option value="Magicien">Magicien</option>
                            <option value="Moine">Moine</option>
                            <option value="Paladin">Paladin</option>
                            <option value="Prêtre">Prêtre</option>
                            <option value="Rôdeur">Rôdeur</option>
                            <option value="Roublard">Roublard</option>
                        </select>
                    </div>

                    <div class="col-lg-2">
                        <h2 id="label_niveau">NIVEAU</h2> 
                        <select id="niveau" name="niveau" onChange="influenceNiveau()">
                            <option selected>00</option>
                            <option>01</option>
                            <option>02</option>
                            <option>03</option>
                            <option>04</option>
                            <option>05</option>
                            <option>06</option>
                            <option>07</option>
                            <option>08</option>
                            <option>09</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                            <option>13</option>
                            <option>14</option>
                            <option>15</option>
                            <option>16</option>
                            <option>17</option>
                            <option>18</option>
                            <option>19</option>
                            <option>20</option>
                        </select>
                    </div>
        
                    <div class="col-lg-4">
                        <h2 id="label_divinite">DIVINITE</h2> 
                        <input type="text" name="divinite" size="15" maxlength="15" id="divinite">
                    </div>
        
                    <div class="col-lg-2">
                        <h2 id="label_origine">ORIGINE</h2> 
                        <input type="text" name="origine" size="15" maxlength="15" id="origine">
                    </div>
                </div>
        
                <div class="row">
                    <div class="col-lg-3">
                        <h2 id="label_race">RACE</h2> 
                        <select id="race" name="race" onChange="influenceRace()">
                            <option></option>
                            <option>Humain</option>
                            <option>Demi-elfe</option>
                            <option>Demi-orque</option>
                            <option>Elfe</option>
                            <option>Gnome</option>
                            <option>Halfelin</option>
                            <option>Nain</option>
                        </select>
                    </div>

                    <div class="col-lg-3">
                        <h2 id="label_cat_taille">CATEGORIE DE TAILLE</h2> 
                        <select id="cat_taille">
<!--                        <option value="I">Infime (I)</option>
                            <option value="Min">Minuscule (Min)</option>
                            <option value="TP">Très petite (TP)</option>
                            <option value="P">Petite (P)</option> -->
                            <option value="M">Moyenne (M)</option>
<!--                        <option value="Gh">Grande (G) (haute)</option>
                            <option value="Gl">Grande (G) (longue)</option>
                            <option value="TGh">Très grande (TG) (haute)</option>
                            <option value="TGl">Très grande (TG) (longue)</option>
                            <option value="Gigh">Gigantesque (Gig) (haute)</option>
                            <option value="Gigl">Gigantesque (Gig) (longue)</option>
                            <option value="Ch">Colossale (C) (haute)</option>
                            <option value="Cl">Colossale (C) (longue)</option> -->
                        </select>
                    </div>
        
                    <div class="col-lg-1">
                        <h2 id="label_sexe">SEXE</h2>
                        <select id="sexe" name="sexe" onChange="calculTaillePoids()">
                            <option></option>
                            <option>Masculin</option>
                            <option>Féminin</option>
                        </select>
                    </div>
        
                    <div class="col-lg-1">
                        <h2 id="label_age">AGE</h2> 
                        <input type="text" name="age" size="3" maxlength="3" required pattern="[0-9]{1,3}" onChange="influenceAge()" id="age_sai">
                    </div>
        
                    <div class="col-lg-1">
                        <h2 id="label_taille">TAILLE</h2> 
                        <input type="text" name="taille" size="4" maxlength="4" required pattern="[0-9,]{1,4}" onChange="influenceTaille()" id="taille_sai">
                    </div>
                
                    <div class="col-lg-1">
                        <h2 id="label_poids">POIDS</h2> 
                        <input type="text" name="poids" size="3" maxlength="3" required pattern="[0-9]{1,3}" onChange="influencePoids()" id="poids_sai">
                    </div>
        
                    <div class="col-lg-1">
                        <h2 id="label_cheveux">CHEVEUX</h2> 
                        <select id="cheveux" name="cheveux">
                            <option>Noir</option>
                            <option>Brun</option>
                            <option>Chatain</option>
                            <option>Blond</option>
                        </select>
                    </div>
        
                    <div class="col-lg-1">
                        <h2 id="label_yeux">YEUX</h2> 
                        <select id="yeux" name="yeux">
                            <option>Noirs</option>
                            <option>Marons</option>
                            <option>Verts</option>
                            <option>Bleux</option>
                            <option>Vairons</option>
                        </select>
                    </div>
                </div>
            </div>
        



        <table id="tab_carac">
            <tr id="caption_carac" class="caption"> 
                <th>CHARACTE-RISTIQUE</th>
                <th>VALEUR</th>
                <th>SAISIE</th>
                <th>MODIF.</th>
                <th>VALEUR TEMPORAIRE</th> 
                <th>MODIF. TEMPORAIRE</th>
            </tr>

            <tr>
                <td><h2 id="force" class="font_white">FOR</h2></td>
                <td id="for_val"></td>
                <td><input type="text" name="for_sai" size="2" maxlength="2" required pattern="[0-9]{1,2}" onChange="influenceFor()" id="for_sai"></td>
                <td name="for_mod_race" id="for_mod"></td>
                <td id="for_val_temp"></td>
                <td id="for_mod_temp"></td>
            </tr>
        
            <tr>
                <td><h2 id="dextérité" class="font_white">DEX</h2></td>
                <td id="dex_val"></td>
                <td><input type="text" name="dex_sai" size="2" maxlength="2" required pattern="[0-9]{1,2}" onChange="influenceDex()" id="dex_sai"></td>
                <td name="dex_mod_race" id="dex_mod"></td>
                <td id="dex_val_temp"></td>
                <td id="dex_mod_temp"></td>
            </tr>
        
            <tr>
                <td><h2 id="constitution" class="font_white">CON</h2></td>
                <td id="con_val"></td>
                <td><input type="text" name="con_sai" size="2" maxlength="2" required pattern="[0-9]{1,2}" onChange="influenceCon()" id="con_sai"></td>
                <td name="con_mod_race" id="con_mod"></td>
                <td id="con_val_temp"></td>
                <td id="con_mod_temp"></td>
            </tr>
        
            <tr>
                <td><h2 id="intelligence" class="font_white">INT</h2></td>
                <td id="int_val"></td>
                <td><input type="text" name="int_sai" size="2" maxlength="2" required pattern="[0-9]{1,2}" onChange="influenceInt()" id="int_sai"></td>
                <td name="int_mod_race" id="int_mod"></td>
                <td id="int_val_temp"></td>
                <td id="int_mod_temp"></td>
            </tr>
        
            <tr>
                <td><h2 id="sagesse" class="font_white">SAG</h2></td>
                <td id="sag_val"></td>
                <td><input type="text" name="sag_sai" size="2" maxlength="2" required pattern="[0-9]{1,2}" onChange="influenceSag()" id="sag_sai"></td>
                <td name="sag_mod_race" id="sag_mod"></td>
                <td id="sag_val_temp"></td>
                <td id="sag_mod_temp"></td>
            </tr>
        
            <tr>
                <td><h2 id="charisme" class="font_white">CHA</h2></td>
                <td id="cha_val"></td>
                <td><input type="text" name="cha_sai" size="2" maxlength="2" required pattern="[0-9]{1,2}" onChange="influenceCha()" id="cha_sai"></td>
                <td name="cha_mod_race" id="cha_mod"></td>
                <td id="cha_val_temp"></td>
                <td id="cha_mod_temp"></td>
            </tr>
        </table>

        <h2 id="label_point_de_vie">PV</h2> 

        <h2 id="label_point_de_vie_total">PV</h2> 
        <select id="point_de_vie_total" name="point_de_vie_total">
        </select>
        
        <h2 id="label_rd">RD</h2> 
        <select id="rd" name="rd">
        </select>

        <h2 id="label_blessure">BLESSURES</h2> 
        <select id="blessure" name="blessure">
        </select>
        
        <h2 id="label_non_letaux">DEGATS NON LETAUX</h2> 
        <select id="non_letaux" name="non_letaux">
        </select>

        <table id="tab_init">
            <tr id="caption_init" class="caption"> 
                <th></th>
                <th>TOTAL</th>
                <th></th>
                <th>MOD. DE DEXTERITE</th>
                <th></th>
                <th>MOD. DIVERS</th>
            </tr>

            <tr>
                <td><h2 id="lab_init" class="font_white">Mod. à l'INITIATIVE</h2></td>
                <td id="init_total">0</td>
                <td class="background_grey">=</td>
                <td id="init_mod_dex"></td>
                <td class="background_grey">+</td>
                <td id="init_mod_div">
                    <input type="text" name="init_mod_div_val" size="2" maxlength="2" required pattern="[0-9]{1,2}" onChange="calculeInit()" id="init_mod_div_val">
                </td>
            </tr>
        </table>
        
        <table id="tab_ca">
            <tr id="caption_ca" class="caption"> 
                <th></th>
                <th>TOTAL</th>
                <th></th>
                <th>ARMURE DE BASE</th>
                <th></th>
                <th>BONUS D'ARMURE</th>
                <th></th>
                <th>BONUS DE BOUCLIER</th>
                <th></th>
                <th>MOD. DE DEXTERITE</th>
                <th></th>
                <th>MOD. DE TAILLE</th>
                <th></th>
                <th>ARMURE NATURELLE</th>
                <th></th>
                <th>MOD DE PARADE</th>
                <th></th>
                <th>MOD DIVERS</th>
            </tr>
            
            <tr>
                <td><h2 id="ca" class="font_white">CA</h2></td>
                <td name="ca_total" id="ca_total">0</td>
                <td class="background_grey">=</td>
                <td name="ca_arm_base" id="ca_arm_base">10</td>
                <td class="background_grey">+</td>
                <td name="ca_bon_arm" id="ca_bon_arm">0</td>
                <td class="background_grey">+</td>
                <td name="ca_bon_bou" id="ca_bon_bou">0</td>
                <td class="background_grey">+</td>
                <td name="ca_mod_dex" id="ca_mod_dex">0</td>
                <td class="background_grey">+</td>
                <td name="ca_mod_tai" id="ca_mod_tai">00</td>
                <td class="background_grey">+</td>
                <td name="ca_arm_nat" id="ca_arm_nat">00</td>
                <td class="background_grey">+</td>
                <td name="ca_mod_par" id="ca_mod_par">00</td>
                <td class="background_grey">+</td>
                <td name="ca_mod_div" id="ca_mod_div">0</td>
            </tr>
        </table>

        <h2 id="lab_ca_contact" class="font_white">CA de contact</h2>
        <p  id="val_ca_contact">0</p>

        <h2 id="lab_pri_depourvu" class="font_white">CA pris au depourvu</h2>
        <p  id="val_pri_depourvu">0</p>

        <h2 id="label_mod_part_ca" class="font_white">Modificateur particulier a la CA</h2> 
        <input type="text" name="mod part ca" size="20" maxlength="20" id="mod_part_ca">
        
        <table id="tab_sau">
            <tr id="caption_sau" class="caption"> 
                <th>SAUVEGARDES</th>
                <th>TOTAL</th>
                <th></th>
                <th>BONUS DE BASE</th>
                <th></th>
                <th>MOD. DE CARAC.</th>
                <th></th>
                <th>MOD. MAGIQUE</th>
                <th></th>
                <th>MOD. DIVERS</th>
                <th></th>
                <th>MOD.TEMPORAIRE</th>
                <th></th>
                <th>MODIFICATEURS PARTICULIERS</th>
            </th>

            <tr>
                <td><h2 id="lab_ref" class="font_white">REFLEXES</h2></td>
                <td id="sau_total_ref"></td>
                <td class="font_white">=</td>
                <td id="sau_bon_bas_ref"></td>
                <td class="font_white">+</td>
                <td id="sau_mod_car_ref"></td>
                <td class="font_white">+</td>
                <td id="sau_mod_mag_ref">00</td>
                <td class="font_white">+</td>
                <td id="sau_mod_div_ref">00</td>
                <td class="font_white">+</td>
                <td id="sau_mod_tem_ref">
                    <input type="text" name="mdré" size="2" maxlength="2" pattern="[0-9]{1,2}" onChange="calculeReflexes()" id="mod_tem_ref">
                </td>
                <td class="font_white">+</td>
                <td id="sau_mod_part_ref">
                    <input type="text" name="mod_part_ref" size="2" maxlength="2" pattern="[0-9]{1,2}" onChange="calculeReflexes()" id="mod_part_ref">
                </td>
             </tr>
        
            <tr>
                <td><h2 id="lab_vig" class="font_white">VIGEUR</h2></td>
                <td id="sau_total_vig"></td>
                <td class="font_white">=</td>
                <td id="sau_bon_bas_vig"></td>
                <td class="font_white">+</td>
                <td id="sau_mod_car_vig"></td>
                <td class="font_white">+</td>
                <td id="sau_mod_mag_vig">00</td>
                <td class="font_white">+</td>
                <td id="sau_mod_div_vig">00</td>
                <td class="font_white">+</td>
                <td id="sau_mod_tem_vig">
                    <input type="text" name="mod_tem_vig" size="2" maxlength="2" pattern="[0-9]{1,2}" onChange="calculeVigeur()" id="mod_tem_vig">
                </td>
                <td class="font_white">+</td>
                <td id="sau_mod_part_vig">
                    <input type="text" name="mod_part_vig" size="2" maxlength="2" pattern="[0-9]{1,2}" onChange="calculeVigeur()" id="mod_part_vig">
                </td>
            </tr>
        
            <tr>
                <td><h2 id="lab_vol" class="font_white">VOLONTE</h2></td>
                <td id="sau_total_vol"></td>
                <td class="font_white">=</td>
                <td id="sau_bon_bas_vol"></td>
                <td class="font_white">+</td>
                <td id="sau_mod_car_vol"></td>
                <td class="font_white">+</td>
                <td id="sau_mod_mag_vol">00</td>
                <td class="font_white">+</td>
                <td id="sau_mod_div_vol">00</td>
                <td class="font_white">+</td>
                <td id="sau_mod_tem_vol">
                    <input type="text" name="mdvo" size="2" maxlength="2" pattern="[0-9]{1,2}" onChange="calculeVolonte()" id="mod_tem_vol">
                </td>
                <td class="font_white">+</td>
                <td id="sau_mod_part_vol">
                    <input type="text" name="mod_part_vol" size="2" maxlength="2" pattern="[0-9]{1,2}" onChange="calculeVolonte()" id="mod_part_vol">
                </td>
            </tr>
        </table>

        <h2 id="label_bba">BONUS DE BASE A L'ATTAQUE</h2></td>
        <p id="bba">0</p>
        
        <h2 id="label_rm">RESISTANCE A LA MAGIE</h2> 
        <input type="text" name="rm" size="3" maxlength="3" id="rm">
        
        <table id="tab_bmo">
            <tr>
                <td><h2 id="lab_bmo" class="font_white">bonus de base à l'attaque</h2></td>
                <td id="bmo_total"></td>
                <td class="background_grey">=</td>
                <td id="bmo_bon_bas_att"></td>
                <td class="background_grey">+</td>
                <td id="bmo_mod_for"></td>
                <td class="background_grey">+</td>
                <td id="bmo_mod_tai">00</td>
                <td class="background_grey">+</td>
                <td id="bmo_mod_div">00</td>
            </tr>

            <tr id="caption_bmo" class="caption"> 
                <th></th>
                <th>TOTAL</th>
                <th></th>
                <th>B B à L'ATTAQUE</th>
                <th></th>
                <th>MOD. DE FORCE</th>
                <th></th>
                <th>MOD. DE TAILLE</th>
                <th></th>
                <th>MOD. DIVERS</th>
        </table>

        <table id="tab_dmd">
            <tr>
                <td><h2 id="lab_dmd" class="font_white">bonus de base à l'attaque</h2></td>
                <td id="dmd_total"></td>
                <td class="background_grey">=</td>
                <td id="dmd_bon_bas_att"></td>
                <td class="background_grey">+</td>
                <td id="dmd_mod_for"></td>
                <td class="background_grey">+</td>
                <td id="dmd_mod_dex"></td>
                <td class="background_grey">+</td>
                <td id="dmd_mod_tai">00</td>
                <td class="background_grey">+</td>
                <td id="dmd_mod_div">10</td>
            </tr>

            <tr id="caption_bmo" class="caption"> 
                <th></th>
                <th>TOTAL</th>
                <th></th>
                <th>B B à L'ATTAQUE</th>
                <th></th>
                <th>MOD. DE FORCE</th>
                <th></th>
                <th>MOD. DE DEXTERITE</th>
                <th></th>
                <th>MOD. DE TAILLE</th>
                <th></th>
                <th></th>
        </table>

        <h2 id="label_famille_arme_I">FAMILLE</h2> 
        <h2 id="label_famille_arme_b_I">D'ARME</h2> 
        <select id="famille_arme_I" name="famille_arme" onChange="choixFamilleArme('maniement_arme_I',document.form.famille_arme_I,document.form.maniement_arme_I)">
            <option></option>
            <option value="armes_courantes">Armes courantes</option>
            <option value="armes_de_guerre">Arme de guerre</option>
            <option value="armes_exotiques">Arme exotiques</option>
        </select>

        <h2 id="label_maniement_arme_I">MANIEMENT</h2> 
        <select id="maniement_arme_I" name="maniement_arme" onChange="choixManiementArme(document.form.famille_arme_I,'arme_I',document.form.maniement_arme_I,document.form.arme_I)">
        </select>

        <table id="tab_arme_I">
            <tr>
                <td colspan="3"><h2 class="font_white">ATTAQUE</h2></td>
                <td><h3 class="font_white">BONUS A L'ATTAQUE</h3></td>
                <td><h3 class="font_white">CRITIQUE</h3></td>
            </tr>

            <tr>
                <td colspan="3">
                    <select id="arme_I" name="arme" onChange="choixArme(document.form.famille_arme_I,document.form.maniement_arme_I,document.form.arme_I,'degat_I','for_mod',document.form.bonus_I,'critique_I','portee_I','type_I','mun_I')">
                    </select>
                </td>
                <td class="text_center">
                    <select id="bonus_I" name="bonus" onChange="calculeFrapper(document.form.famille_arme_I,document.form.arme_I,'degat_I','critique_I','portee_I','type_I','mun_I',document.form.maniement_arme_I,'bba','dex_mod','for_mod',document.form.bonus_I,'frapper_I')">
                        <option value=0></option>
                        <option value=0>0</option>
                        <option value=1>1</option>
                        <option value=2>2</option>
                        <option value=3>3</option>
                        <option value=4>4</option>
                        <option value=5>5</option>
                    </select>
                </td>
                <td class="text_center" id="critique_I"></td>
            </tr>

            <tr>
                <td><h3 class="label_description">TYPE</h3></td>
                <td><h3 class="label_description">PORTEE</h3></td>
                <td><h3 class="label_description">MUNITIONS</h3></td>
                <td colspan="2"><h3 class="label_description">DEGATS</h3></td>
              </tr>

            <tr>
                <td id="type_I">_</td id="frapper_I">
                <td id="portee_I">_</td>
                <td id="munitions_I">_</td>
                <td colspan="2" id="degats_I">_</td>
            </tr>
        </table>

        <table id="competences">
            <tr>
                <td colspan="10"><h5 id="label_comp">COMPETENCES</h5></td>
            </tr>

            <tr>
                <td></td>
                <td colspan="3" class="background_grey"><h2>NOM DE LA COMPETENCE</h2></td>
                <td class="background_grey"><h3>Bonus Total</h3></td>
                <td colspan="2" class="background_grey"><h3>MOD. DE CARACTERISTIQUE</h3></td>
                <td colspan="2" class="background_grey"><h3>RANG</h3></td>
                <td colspan="2" class="background_grey"><h3>MOD. DIVERS</h3></td>
            </tr>

            <tr>
                <td class="de_classe" id="acrobatie"><h2>O</h2></td>
                <td colspan="2" >Acrobatie</td>
                <td class="acrobatie" id="totalAcrobatie"></td>
                <td>=</td>
                <td class="carac">DEX</td>
                <td class="carac_dex" id="caracAcrobatie"></td>
                <td>+</td>
                <td>
                    <select id="rangAcrobatie" name="rang_acrobatie" 
                    onChange="calculeCompetence('totalAcrobatie','caracAcrobatie','rangAcrobatie','diversAcrobatie')">
                    </select>
                </td>
                <td>+</td>
                <td>
                    <input type="text" name="divers_acrobatie" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0 id="diversAcrobatie" 
                    onChange="calculeCompetence('totalAcrobatie','caracAcrobatie','rangAcrobatie','diversAcrobatie')">
                </td>
            </tr>

            <tr>
                <td class="de_classe" id="artisanat_I"><h2>O</h2></td>
                <td>Artisanat</td>
            </tr>

            <tr>
                <td class="de_classe" id="artisanat_II"><h2>O</h2></td>
                <td>Artisanat</td>
            </tr>

            <tr>
                <td class="de_classe" id="artisanat_III"><h2>O</h2></td>
                <td>Artisanat</td>
            </tr>

            <tr>
                <td class="de_classe" id="art_de_la_magie"><h2>O</h2></td>
                <td>Art de la magie</td>
            </tr>

            <tr>
                <td class="de_classe" id="bluf"><h2>O</h2></td>
                <td>Bluf</td>
            </tr>

            <tr>
                <td class="de_classe" id="connaissances_I"><h2>O</h2></td>
                <td>Connaissances</td>
            </tr>

            <tr>
                <td class="de_classe" id="connaissances_II"><h2>O</h2></td>
                <td>Connaissances</td>
            </tr>

            <tr>
                <td class="de_classe" id="connaissances_III"><h2>O</h2></td>
                <td>Connaissances</td>
            </tr>

            <tr>
                <td class="de_classe" id="connaissances_IV"><h2>O</h2></td>
                <td>Connaissances</td>
            </tr>

            <tr>
                <td class="de_classe" id="connaissances_V"><h2>O</h2></td>
                <td>Connaissances</td>
            </tr>

            <tr>
                <td class="de_classe" id="connaissances_VI"><h2>O</h2></td>
                <td>Connaissances</td>
            </tr>

            <tr>
                <td class="de_classe" id="connaissances_VII"><h2>O</h2></td>
                <td>Connaissances</td>
            </tr>

            <tr>
                <td class="de_classe" id="connaissances_VIII"><h2>O</h2></td>
                <td>Connaissances</td>
            </tr>

            <tr>
                <td class="de_classe" id="connaissances_IX"><h2>O</h2></td>
                <td>Connaissances</td>
            </tr>

            <tr>
                <td class="de_classe" id="connaissances_X"><h2>O</h2></td>
                <td>Connaissances</td>
            </tr>

            <tr>
                <td class="de_classe" id="déguisement"><h2>O</h2></td>
                <td>Déguisement</td>
            </tr>

            <tr>
                <td class="de_classe" id="diplomatie"><h2>O</h2></td>
                <td>Diplomatie</td>
            </tr>

            <tr>
                <td class="de_classe" id="discrétion"><h2>O</h2></td>
                <td>Discrétion</td>
            </tr>

            <tr>
                <td class="de_classe" id="dressage"><h2>O</h2></td>
                <td>Dressage</td>
            </tr>

            <tr>
                <td class="de_classe" id="equitation"><h2>O</h2></td>
                <td>Equitation</td>
            </tr>

            <tr>
                <td class="de_classe" id="escalade"><h2>O</h2></td>
                <td>Escalade</td>
            </tr>

            <tr>
                <td class="de_classe" id="escamotage"><h2>O</h2></td>
                <td>Escamotage</td>
            </tr>

            <tr>
                <td class="de_classe" id="estimation"><h2>O</h2></td>
                <td>Estimation</td>
            </tr>

            <tr>
                <td class="de_classe" id="évasion"><h2>O</h2></td>
                <td>Evasion</td>
            </tr>

            <tr>
                <td class="de_classe" id="intimidation"><h2>O</h2></td>
                <td>Intimidation</td>
            </tr>

            <tr>
                <td class="de_classe" id="langues"><h2>O</h2></td>
                <td>Langues</td>
            </tr>

            <tr>
                <td class="de_classe" id="natation"><h2>O</h2></td>
                <td>Natation</td>
            </tr>

            <tr>
                <td class="de_classe" id="perception"><h2>O</h2></td>
                <td>Perception</td>
            </tr>

            <tr>
                <td class="de_classe" id="premier_secours"><h2>O</h2></td>
                <td>Premier secours</td>
            </tr>

            <tr>
                <td class="de_classe" id="profession_I"><h2>O</h2></td>
                <td>Profession</td>
            </tr>

            <tr>
                <td class="de_classe" id="profession_II"><h2>O</h2></td>
                <td>Profession</td>
            </tr>

            <tr>
                <td class="de_classe" id="psychologie"><h2>O</h2></td>
                <td>Psychologie</td>
            </tr>

            <tr>
                <td class="de_classe" id="représentation_I"><h2>O</h2></td>
                <td>Représentation</td>
            </tr>

            <tr>
                <td class="de_classe" id="représentation_II"><h2>O</h2></td>
                <td>Représentation</td>
            </tr>

            <tr>
                <td class="de_classe" id="sabotage"><h2>O</h2></td>
                <td>Sabotage</td>
            </tr>

            <tr>
                <td class="de_classe" id="survie"><h2>O</h2></td>
                <td>Survie</td>
            </tr>

            <tr>
                <td class="de_classe" id="utilisation_d_objets_magiques"><h2>O</h2></td>
                <td>Utilisation d'objets magiques</td>
            </tr>

            <tr>
                <td class="de_classe" id="vol"><h2>O</h2></td>
                <td>Vol</td>
            </tr>

            <tr>
                <td colspan="06"><h2>@ Compétence de classe</h2></td>
                <td colspan="05"><h2>* Formation nécessaire</h2></td>
            </tr>
        </table>

        <input type="button" name="Somme compétences" value="Somme compétences" id="Somme_compétences" onClick="calculeSommeCompetences()">

        <h2 id="label_modif_part">MODIFICATEUR PARTICULIERS</h2>
        <input type="text" name="modif_part" size="60" maxlength="60" required id="modif_part">

        <h2 id="label_langues">LANGUES</h2>
        <input type="text" name="langues" size="60" maxlength="60" required id="langues">











        <table id="equipement">
            <tr>
                <td colspan="9"><h5 id="label_equip">EQUIPEMENT</h5></td>
            </tr>

            <tr>
                <td class="background_grey"><h3>OBJET</h3></td>
                <td class="background_grey"><h3>EMPLACEMENT</h3></td>
                <td class="background_grey"><h3>POIDS</h3></td>
                <td></td>
                <td class="background_grey"><h3>OBJET</h3></td>
                <td class="background_grey"><h3>EMPLACEMENT</h3></td>
                <td class="background_grey"><h3>POIDS</h3></td>
            </tr>

            <tr>
                <td> 
                    <select name="objet_I" id="objet_I"></select>
                </td>
                <td> 
                    <select name="emplacement_I" id="emplacement_I"></select>
                </td>
                <td> 
                    <select name="poids_I" id="poids_I"></select>
                </td>
                <td></td>
                <td> 
                    <select name="objet_XV" id="objet_XV"></select>
                </td>
                <td> 
                    <select name="emplacement_XV" id="emplacement_XV"></select>
                </td>
                <td> 
                    <select name="poids_XV" id="poids_XV"></select>
                </td>
            </tr>

            <tr>
                <td> 
                    <select name="objet_II" id="objet_II"></select>
                </td>
                <td> 
                    <select name="emplacement_II" id="emplacement_II"></select>
                </td>
                <td> 
                    <select name="poids_II" id="poids_II"></select>
                </td>
                <td></td>
                <td> 
                    <select name="objet_XVI" id="objet_XVI"></select>
                </td>
                <td> 
                    <select name="emplacement_XVI" id="emplacement_XVI"></select>
                </td>
                <td> 
                    <select name="poids_XVI" id="poids_XVI"></select>
                </td>
            </tr>

            <tr>
                <td> 
                    <select name="objet_III" id="objet_III"></select>
                </td>
                <td> 
                    <select name="emplacement_III" id="emplacement_III"></select>
                </td>
                <td> 
                    <select name="poids_III" id="poids_III"></select>
                </td>
                <td></td>
                <td> 
                    <select name="objet_XVII" id="objet_XVII"></select>
                </td>
                <td> 
                    <select name="emplacement_XVII" id="emplacement_XVII"></select>
                </td>
                <td> 
                    <select name="poids_XVII" id="poids_XVII"></select>
                </td>
            </tr>

            <tr>
                <td> 
                    <select name="objet_IV" id="objet_IV"></select>
                </td>
                <td> 
                    <select name="emplacement_IV" id="emplacement_IV"></select>
                </td>
                <td> 
                    <select name="poids_IV" id="poids_IV"></select>
                </td>
                <td></td>
                <td> 
                    <select name="objet_XVIII" id="objet_XVIII"></select>
                </td>
                <td> 
                    <select name="emplacement_XVIII" id="emplacement_XVIII"></select>
                </td>
                <td> 
                    <select name="poids_XVIII" id="poids_XVIII"></select>
                </td>
            </tr>

            <tr>
                <td> 
                    <select name="objet_V" id="objet_V"></select>
                </td>
                <td> 
                    <select name="emplacement_V" id="emplacement_V"></select>
                </td>
                <td> 
                    <select name="poids_V" id="poids_V"></select>
                </td>
                <td></td>
                <td> 
                    <select name="objet_XIX" id="objet_XIX"></select>
                </td>
                <td> 
                    <select name="emplacement_XIX" id="emplacement_XIX"></select>
                </td>
                <td> 
                    <select name="poids_XIX" id="poids_XIX"></select>
                </td>
            </tr>

            <tr>
                <td> 
                    <select name="objet_VI" id="objet_VI"></select>
                </td>
                <td> 
                    <select name="emplacement_VI" id="emplacement_VI"></select>
                </td>
                <td> 
                    <select name="poids_VI" id="poids_VI"></select>
                </td>
                <td></td>
                <td> 
                    <select name="objet_XX" id="objet_XX"></select>
                </td>
                <td> 
                    <select name="emplacement_XX" id="emplacement_XX"></select>
                </td>
                <td> 
                    <select name="poids_XX" id="poids_XX"></select>
                </td>
            </tr>

            <tr>
                <td> 
                    <select name="objet_VII" id="objet_VII"></select>
                </td>
                <td> 
                    <select name="emplacement_VII" id="emplacement_VII"></select>
                </td>
                <td> 
                    <select name="poids_VII" id="poids_VII"></select>
                </td>
                <td></td>
                <td> 
                    <select name="objet_XXI" id="objet_XXI"></select>
                </td>
                <td> 
                    <select name="emplacement_XXI" id="emplacement_XXI"></select>
                </td>
                <td> 
                    <select name="poids_XXI" id="poids_XXI"></select>
                </td>
            </tr>

            <tr>
                <td> 
                    <select name="objet_VIII" id="objet_VIII"></select>
                </td>
                <td> 
                    <select name="emplacement_VIII" id="emplacement_VIII"></select>
                </td>
                <td> 
                    <select name="poids_VIII" id="poids_VIII"></select>
                </td>
                <td></td>
                <td> 
                    <select name="objet_XXII" id="objet_XXII"></select>
                </td>
                <td> 
                    <select name="emplacement_XXII" id="emplacement_XXII"></select>
                </td>
                <td> 
                    <select name="poids_XXII" id="poids_XXII"></select>
                </td>
            </tr>

            <tr>
                <td> 
                    <select name="objet_IX" id="objet_IX"></select>
                </td>
                <td> 
                    <select name="emplacement_IX" id="emplacement_IX"></select>
                </td>
                <td> 
                    <select name="poids_IX" id="poids_IX"></select>
                </td>
                <td></td>
                <td> 
                    <select name="objet_XXIII" id="objet_XXIII"></select>
                </td>
                <td> 
                    <select name="emplacement_XXIII" id="emplacement_XXIII"></select>
                </td>
                <td> 
                    <select name="poids_XXIII" id="poids_XXIII"></select>
                </td>
            </tr>

            <tr>
                <td> 
                    <select name="objet_X" id="objet_X"></select>
                </td>
                <td> 
                    <select name="emplacement_X" id="emplacement_X"></select>
                </td>
                <td> 
                    <select name="poids_X" id="poids_X"></select>
                </td>
                <td></td>
                <td> 
                    <select name="objet_XXIV" id="objet_XXIV"></select>
                </td>
                <td> 
                    <select name="emplacement_XXIV" id="emplacement_XXIV"></select>
                </td>
                <td> 
                    <select name="poids_XXIV" id="poids_XXIV"></select>
                </td>
            </tr>

            <tr>
                <td> 
                    <select name="objet_XI" id="objet_XI"></select>
                </td>
                <td> 
                    <select name="emplacement_XI" id="emplacement_XI"></select>
                </td>
                <td> 
                    <select name="poids_XI" id="poids_XI"></select>
                </td>
                <td></td>
                <td> 
                    <select name="objet_XXV" id="objet_XXV"></select>
                </td>
                <td> 
                    <select name="emplacement_XXV" id="emplacement_XXV"></select>
                </td>
                <td> 
                    <select name="poids_XXV" id="poids_XXV"></select>
                </td>
            </tr>

            <tr>
                <td> 
                    <select name="objet_XII" id="objet_XII"></select>
                </td>
                <td> 
                    <select name="emplacement_XII" id="emplacement_XII"></select>
                </td>
                <td> 
                    <select name="poids_XII" id="poids_XII"></select>
                </td>
                <td></td>
                <td> 
                    <select name="objet_XXVI" id="objet_XXVI"></select>
                </td>
                <td> 
                    <select name="emplacement_XXVI" id="emplacement_XXVI"></select>
                </td>
                <td> 
                    <select name="poids_XXVI" id="poids_XXVI"></select>
                </td>
            </tr>

            <tr>
                <td> 
                    <select name="objet_XIII" id="objet_XIII"></select>
                </td>
                <td> 
                    <select name="emplacement_XIII" id="emplacement_XIII"></select>
                </td>
                <td> 
                    <select name="poids_XIII" id="poids_XIII"></select>
                </td>
                <td></td>
                <td> 
                    <select name="objet_XXVII" id="objet_XXVII"></select>
                </td>
                <td> 
                    <select name="emplacement_XXVII" id="emplacement_XXVII"></select>
                </td>
                <td> 
                    <select name="poids_XXVII" id="poids_XXVII"></select>
                </td>
            </tr>

            <tr>
                <td> 
                    <select name="objet_XIV" id="objet_XIV"></select>
                </td>
                <td> 
                    <select name="emplacement_XIV" id="emplacement_XIV"></select>
                </td>
                <td> 
                    <select name="poids_XIV" id="poids_XIV"></select>
                </td>
                <td></td>
                <td>
                    <input type="button" name="Somme poids" value="Somme poids" id="Somme_poids" onClick="calculeSommepoids()">
                </td>
                <td>POIDS TOTAL PORTE</td>
                <td id="poidsTotalPorte">0</td>
            </tr>
        </table>

        <table id="capaciteDeCharge">
            <tr>
                <td colspan="6" id="label_capaciteDeCharge"><h5>CAPACITE DE CHARGE</h5></td>
            </tr>

            <tr>
                <td class="background_grey"><h3>CHARGE LEGERE</h3></td>
                <td class="background_grey"><h3>CHARGE INTERMEDIAIRE</h3></td>
                <td class="background_grey"><h3>CHARGE LOURDE</h3></td>
                <td class="background_grey"><h3>CHARGE MAX</h3></td>
                <td class="background_grey"><h3>SOULEVER</h3></td>
                <td class="background_grey"><h3>TIRER OU POUSSER</h3></td>
            </tr>

            <tr>
                <td id="chargeLegere"></td>
                <td id="chargeIntermediaire"></td>
                <td id="chargeLourde"></td>
                <td id="chargeMax"></td>
                <td id="soulever"></td>
                <td id="tirerOuPousser"></td>
            </tr>
        </table>

        <table id="language">
            <tr>
                <td id="label_langues"><h5>LANGUES</h5></td>
            </tr>

            <tr>
                <td class="background_grey"><h3>Langues de départ et additionnelle</h3></td>
            </tr>

            <tr><td><select name="langues_I" id="langues_I"></select> </td></tr>
            <tr><td><select name="langues_II" id="langues_II"></select> </td></tr>
            <tr><td><select name="langues_III" id="langues_III"></select> </td></tr>
            <tr><td><select name="langues_IV" id="langues_IV"></select> </td></tr>
            <tr><td><select name="langues_V" id="langues_V"></select> </td></tr>
            <tr><td><select name="langues_VI" id="langues_VI"></select> </td></tr>
            <tr><td><select name="langues_VII" id="langues_VII"></select> </td></tr>
            <tr><td><select name="langues_VIII" id="langues_VIII"></select> </td></tr>
            <tr><td><select name="langues_IX" id="langues_IX"></select> </td></tr>
            <tr><td><select name="langues_X" id="langues_X"></select> </td></tr>
        </table>

        <table id="recipients">
            <tr>
                <td colspan="3" id="label_recipients"><h5>RECIPIENTS</h5></td>
            </tr>

            <tr>
                <td class="background_grey"><h3>RECIPIENT</h3></td>
                <td class="background_grey"><h3>CONTENANCE</h3></td>
                <td class="background_grey"><h3>POIDS</h3></td>
            </tr>

            <tr>
                <td id="recip_recip"></td>
                <td id="recip_contenance"></td>
                <td id="recip_poids"></td>
            </tr>

            <tr>
                <td id="recip_recip"></td>
                <td id="recip_contenance"></td>
                <td id="recip_poids"></td>
            </tr>

            <tr>
                <td id="recip_recip"></td>
                <td id="recip_contenance"></td>
                <td id="recip_poids"></td>
            </tr>

            <tr>
                <td id="recip_recip"></td>
                <td id="recip_contenance"></td>
                <td id="recip_poids"></td>
            </tr>

            <tr>
                <td id="recip_recip"></td>
                <td id="recip_contenance"></td>
                <td id="recip_poids"></td>
            </tr>

            <tr>
                <td id="recip_recip"></td>
                <td id="recip_contenance"></td>
                <td id="recip_poids"></td>
            </tr>

            <tr>
                <td id="recip_recip"></td>
                <td id="recip_contenance"></td>
                <td id="recip_poids"></td>
            </tr>

            <tr>
                <td id="recip_recip"></td>
                <td id="recip_contenance"></td>
                <td id="recip_poids"></td>
            </tr>
        </table>

        <table id="richesses">
            <tr>
                <td colspan="4" id="label_richesses"><h5>RICHESSES</h5></td>
            </tr>

            <tr>
                <td class="background_grey"><h3>PIECES</h3></td>
                <td class="background_grey"><h3>GEMMES</h3></td>
                <td class="background_grey"><h3>OBJETS D'ART</h3></td>
                <td class="background_grey"><h3>AUTRE</h3></td>
            </tr>

            <tr>
                <td id="pc">PC</td>
                <td rowspan="4"></td>
                <td rowspan="4"></td>
                <td rowspan="4"></td>
            </tr>

            <tr>
                <td id="pa">PA</td>
            </tr>

            <tr>
                <td id="po">PO</td>
            </tr>

            <tr>
                <td id="pp">PP</td>
            </tr>
        </table>

        <table id="table_don_I">
            <tr><td class="label_don"><h2>DON</h2></td></tr>
            <tr><td><select name="don_I" id="don_I"></select></td></tr>
            <tr><td class="don"></td></tr>
        </table>

        <table id="table_don_II">
            <tr><td class="label_don"><h2>DON</h2></td></tr>
            <tr><td><select name="don_II" id="don_II"></select></td></tr>
            <tr><td class="don"></td></tr>
        </table>

        <table id="table_don_III">
            <tr><td class="label_don"><h2>DON</h2></td></tr>
            <tr><td><select name="don_III" id="don_III"></select></td></tr>
            <tr><td class="don"></td></tr>
        </table>

        <table id="table_don_IV">
            <tr><td class="label_don"><h2>DON</h2></td></tr>
            <tr><td><select name="don_IV" id="don_IV"></select></td></tr>
            <tr><td class="don"></td></tr>
        </table>

        <table id="table_don_V">
            <tr><td class="label_don"><h2>DON</h2></td></tr>
            <tr><td><select name="don_V" id="don_V"></select></td></tr>
            <tr><td class="don"></td></tr>
        </table>

        <table id="table_don_VI">
            <tr><td class="label_don"><h2>DON</h2></td></tr>
            <tr><td><select name="don_VI" id="don_VI"></select></td></tr>
            <tr><td class="don"></td></tr>
        </table>

        <table id="table_don_VII">
            <tr><td class="label_don"><h2>DON</h2></td></tr>
            <tr><td><select name="don_VII" id="don_VII"></select></td></tr>
            <tr><td class="don"></td></tr>
        </table>

        <table id="table_don_VIII">
            <tr><td class="label_don"><h2>DON</h2></td></tr>
            <tr><td><select name="don_VIII" id="don_VIII"></select></td></tr>
            <tr><td class="don"></td></tr>
        </table>

        <table id="table_don_IX">
            <tr><td class="label_don"><h2>DON</h2></td></tr>
            <tr><td><select name="don_IX" id="don_IX"></select></td></tr>
            <tr><td class="don"></td></tr>
        </table>

        <table id="table_don_X">
            <tr><td class="label_don"><h2>DON</h2></td></tr>
            <tr><td><select name="don_X" id="don_X"></select></td></tr>
            <tr><td class="don"></td></tr>
        </table>

        <table id="table_don_XI">
            <tr><td class="label_don"><h2>DON</h2></td></tr>
            <tr><td><select name="don_XI" id="don_XI"></select></td></tr>
            <tr><td class="don"></td></tr>
        </table>

        <table id="table_don_XII">
            <tr><td class="label_don"><h2>DON</h2></td></tr>
            <tr><td><select name="don_XII" id="don_XII"></select></td></tr>
            <tr><td class="don"></td></tr>
        </table>

        <table id="table_notes">
            <tr><td id="label_notes">NOTES</td></tr>
            <tr><td><textarea rows="27" cols="63"></textarea></td></tr>
        </table>

        <table id="table_sorts">
            <tr>
                <td colspan="6" id="label_sorts"><h5>SORTS</h5></td>
            </tr>

            <tr>
                <td class="background_grey"><h3>DD DES SORTS</h3></td>
                <td id="dd_des_sorts"></td>
                <td class="background_grey"><h3>MOD DD</h3></td>
                <td class="background_grey"><h3>RISQUE D'ECHEC DES SORTS PROFANES</h3></td>
                <td id="pourcentage_d_echec">00</td>
                <td class="background_grey">%</td>
            </tr>

            <tr>
                <td class="background_grey">MODIFICATEUR PARTICULIERS</td>
                <td colspan="5"><input type="text" size="2" maxlength="2" required pattern="[0-9]{1,2}" id="modificateur_particulier" value=0 onChange="calculeSortsDD()"></td>
            </tr>

            <tr>
                <td class="background_grey">SORTS CONNUS</td>
                <td class="background_grey">DD DES SORTS</td>
                <td class="background_grey" colspan="2">NIVEAU</td>
                <td class="background_grey">SORTS/JOUR</td>
                <td class="background_grey">SORTS EN BONUS</td>
            </tr>

            <tr>
                <td id="sorts_connus_0"><input type="text" size="2" maxlength="2" required pattern="[0-9]{1,2}"></td>
                <td id="dd_des_sorts_0"></td>
                <td class="background_grey" colspan="2">0</td>
                <td id="sorts_jour_0"></td>
                <td id="sorts_en_bonus_0"></td>
            </tr>

            <tr>
                <td id="sorts_connus_I"><input type="text" size="2" maxlength="2" required pattern="[0-9]{1,2}"></td>
                <td id="dd_des_sorts_I"></td>
                <td class="background_grey" colspan="2">1er</td>
                <td id="sorts_jour_I"></td>
                <td id="sorts_en_bonus_I"></td>
            </tr>

            <tr>
                <td id="sorts_connus_II"><input type="text" size="2" maxlength="2" required pattern="[0-9]{1,2}"></td>
                <td id="dd_des_sorts_II"></td>
                <td class="background_grey" colspan="2">2e</td>
                <td id="sorts_jour_II"></td>
                <td id="sorts_en_bonus_II"></td>
            </tr>

            <tr>
                <td id="sorts_connus_III"><input type="text" size="2" maxlength="2" required pattern="[0-9]{1,2}"></td>
                <td id="dd_des_sorts_III"></td>
                <td class="background_grey" colspan="2">3e</td>
                <td id="sorts_jour_III"></td>
                <td id="sorts_en_bonus_III"></td>
            </tr>

            <tr>
                <td id="sorts_connus_IV"><input type="text" size="2" maxlength="2" required pattern="[0-9]{1,2}"></td>
                <td id="dd_des_sorts_IV"></td>
                <td class="background_grey" colspan="2">4e</td>
                <td id="sorts_jour_IV"></td>
                <td id="sorts_en_bonus_IV"></td>
            </tr>

            <tr>
                <td id="sorts_connus_V"><input type="text" size="2" maxlength="2" required pattern="[0-9]{1,2}"></td>
                <td id="dd_des_sorts_V"></td>
                <td class="background_grey" colspan="2">5e</td>
                <td id="sorts_jour_V"></td>
                <td id="sorts_en_bonus_V"></td>
            </tr>

            <tr>
                <td id="sorts_connus_VI"><input type="text" size="2" maxlength="2" required pattern="[0-9]{1,2}"></td>
                <td id="dd_des_sorts_VI"></td>
                <td class="background_grey" colspan="2">6e</td>
                <td id="sorts_jour_VI"></td>
                <td id="sorts_en_bonus_VI"></td>
            </tr>

            <tr>
                <td id="sorts_connus_VII"><input type="text" size="2" maxlength="2" required pattern="[0-9]{1,2}"></td>
                <td id="dd_des_sorts_VII"></td>
                <td class="background_grey" colspan="2">7e</td>
                <td id="sorts_jour_VII"></td>
                <td id="sorts_en_bonus_VII"></td>
            </tr>

            <tr>
                <td id="sorts_connus_VIII"><input type="text" size="2" maxlength="2" required pattern="[0-9]{1,2}"></td>
                <td id="dd_des_sorts_VIII"></td>
                <td class="background_grey" colspan="2">8e</td>
                <td id="sorts_jour_VIII"></td>
                <td id="sorts_en_bonus_VIII"></td>
            </tr>

            <tr>
                <td id="sorts_connus_IX"><input type="text" size="2" maxlength="2" required pattern="[0-9]{1,2}"></td>
                <td id="dd_des_sorts_IX"></td>
                <td class="background_grey" colspan="2">9e</td>
                <td id="sorts_jour_IX"></td>
                <td id="sorts_en_bonus_IX"></td>
            </tr>

            <tr>
                <td colspan="6" id="label_ecole_predilection"><h2>ECOLE DE PREDILECTION</h2></td>
            </tr>

            <tr>
                <td colspan="6"><select name="ecole_I" id="ecole_I"></select></td>
            </tr>

            <tr>
                <td colspan="6" id="label_ecoles_interdites"><h2>ECOLES INTERDITES</h2></td>
            </tr>

            <tr>
                <td colspan="6"><select name="ecole_II" id="ecole_II"></td>
            </tr>

            <tr>
                <td colspan="6"><select name="ecole_III" id="ecole_III"></td>
            </tr>
        </table>

        <table id="table_experience">
            <tr>
                <td colspan="2" id="label_experience"><h5>EXPERIENCE</h5></td>
            </tr>

            <tr>
                <td class="background_grey"><h3>POINTS D'EXPERIENCE</h3></td>
                <td><input type="text" size="6" maxlength="6" required pattern="[0-9]{1,6}" id="points_experience" value=0 onChange="controlePointsExperience()"></td>
            </tr>

            <tr>
                <td class="background_grey"><h3>PROCHAIN NIVEAU</h3></td>
                <td id="prochain_niveau"></td>
            </tr>
        </table>

        <table id="tab_armure">
            <tr>
                <td colspan="5" id="label_armure"><h6>ARMURE, BOUCLIER ET PROTECTIONS</h6></td>
            </tr>

            <tr>
                <td colspan="2"><h3 class="font_white">ARMURE</h3></td>
                <td><h3 class="font_white">TYPE</h3></td>
                <td><h3 class="font_white">BONUS A LA CA</h3></td>
                <td><h3 class="font_white">DEX. MAX.</h3></td>
            </tr>

            <tr>
                <td>
                    <select id="armure" name="armure" onChange="choixArmure(document.form.armure,document.form.bonus_armure)">
                    </select>
                </td>
                <td class="text_center">
                    <select id="bonus_armure" name="bonus_armure" onChange="choixArmure(document.form.armure,document.form.bonus_armure)">
                        <option value=0>0</option>
                        <option value=1>1</option>
                        <option value=2>2</option>
                        <option value=3>3</option>
                        <option value=4>4</option>
                        <option value=5>5</option>
                    </select>
                </td>
                <td class="text_center" id="type"></td>
                <td class="text_center" id="bonus_CA_armure"></td>
                <td class="text_center" id="dex_max"></td>
            </tr>

            <tr>
                <td><h3 class="label_description">MALUS AU TEST</h3></td>
                <td><h3 class="label_description">ECHEC DES SORTS</h3></td>
                <td><h3 class="label_description">VITESSE MAX</h3></td>
                <td><h3 class="label_description">POIDS</h3></td>
                <td><h3 class="label_description">PROPRIETES SPECIALES</h3></td>
              </tr>

            <tr>
                <td class="text_center" id="malus_aux_test_armure">_</td>
                <td class="text_center" id="echec_sorts_armure">_</td>
                <td class="text_center" id="vitesse_armure">_</td>
                <td class="text_center" id="poids_armure">_</td>
                <td class="text_center" id="propri_spec_armure">_</td>
            </tr>

            <tr>
                <td colspan="2"><h3 class="font_white">BOUCLIER</h3></td>
                <td><h3 class="font_white">BONUS A LA CA</h3></td>
                <td><h3 class="font_white">POIDS</h3></td>
                <td><h3 class="font_white">MALUS AUX TESTS</h3></td>
            </tr>

            <tr>
                <td>
                    <select id="bouclier" name="bouclier" onChange="choixBouclier(document.form.bouclier,document.form.bonus_bouclier)">
                    </select>
                </td>
                <td class="text_center">
                    <select id="bonus_bouclier" name="bonus_bouclier" onChange="choixBouclier(document.form.bouclier,document.form.bonus_bouclier)">
                        <option value=0>0</option>
                        <option value=1>1</option>
                        <option value=2>2</option>
                        <option value=3>3</option>
                        <option value=4>4</option>
                        <option value=5>5</option>
                    </select>
                </td>
                <td class="text_center" id="bonus_CA_bouclier"></td>
                <td class="text_center" id="poids_bouclier"></td>
                <td class="text_center" id="malus_aux_tests_bouclier"></td>
            </tr>

            <tr>
                <td><h3 class="label_description">ECHEC DES SORTS</h3></td>
                <td colspan="4"><h3 class="label_description">PROPRIETES SPECIALES</h3></td>
              </tr>

            <tr>
                <td id="echec_sorts_bouclier">_</td>
                <td colspan="4" id="propri_spec_bouclier">_</td>
            </tr>

            <tr>
                <td colspan="2"><h3 class="font_white">AUTRE PROTECTION</h3></td>
                <td><h3 class="font_white">BONUS A LA CA</h3></td>
                <td><h3 class="font_white">POIDS</h3></td>
                <td><h3 class="font_white">MALUS AUX TESTS</h3></td>
            </tr>

            <tr>
                <td>
                    <select id="protection_I" name="protection_I" onChange="choixProtection(document.form.protection_I,document.form.bonus_protection_I)">
                    </select>
                </td>
                <td class="text_center">
                    <select id="bonus_protection_I" name="bonus_protection_I" onChange="choixProtection(document.form.protection_I,document.form.bonus_protection_I)">
                        <option value=0>0</option>
                        <option value=1>1</option>
                        <option value=2>2</option>
                        <option value=3>3</option>
                        <option value=4>4</option>
                        <option value=5>5</option>
                    </select>
                </td>
                <td class="text_center" id="bonus_CA_protection_I"></td>
                <td class="text_center" id="poids_protection_I"></td>
                <td class="text_center" id="malus_aux_tests_protection_I"></td>
            </tr>

<!--            <tr>
                <td colspan="2"><h3 class="font_white">AUTRE PROTECTION</h3></td>
                <td><h3 class="font_white">BONUS A LA CA</h3></td>
                <td><h3 class="font_white">POIDS</h3></td>
                <td><h3 class="font_white">MALUS AUX TESTS</h3></td>
            </tr>

            <tr>
                <td>
                    <select id="protection_II" name="protection_II" onChange="choixProtection(document.form.protection_II,document.form.bonus_protection_II)">
                    </select>
                </td>
                <td class="text_center">
                    <select id="bonus_protection_II" name="bonus_protection_II" onChange="choixProtection(document.form.protection_II,document.form.bonus_protection_II)">
                        <option value=0></option>
                        <option value=0>0</option>
                        <option value=1>1</option>
                        <option value=2>2</option>
                        <option value=3>3</option>
                        <option value=4>4</option>
                        <option value=5>5</option>
                    </select>
                </td>
                <td class="text_center" id="bonus_CA_protection_II"></td>
                <td class="text_center" id="poids_protection_II"></td>
                <td class="text_center" id="malus_aux_tests_protection_II"></td>
            </tr>

            <tr>
                <td colspan="2"><h3 class="font_white">AUTRE PROTECTION</h3></td>
                <td><h3 class="font_white">BONUS A LA CA</h3></td>
                <td><h3 class="font_white">POIDS</h3></td>
                <td><h3 class="font_white">MALUS AUX TESTS</h3></td>
            </tr>

            <tr>
                <td>
                    <select id="protection_III" name="protection_III" onChange="choixProtection(document.form.protection_III,document.form.bonus_protection_III)">
                    </select>
                </td>
                <td class="text_center">
                    <select id="bonus_protection_III" name="bonus_protection_III" onChange="choixProtection(document.form.protection_III,document.form.bonus_protection_III)">
                        <option value=0></option>
                        <option value=0>0</option>
                        <option value=1>1</option>
                        <option value=2>2</option>
                        <option value=3>3</option>
                        <option value=4>4</option>
                        <option value=5>5</option>
                    </select>
                </td>
                <td class="text_center" id="bonus_CA_protection_III"></td>
                <td class="text_center" id="poids_protection_III"></td>
                <td class="text_center" id="malus_aux_tests_protection_III"></td>
            </tr>
        </table>
-->
        <table id="traits_raciaux">
            <tr>
                <td id="label_traits"><h5>TRAITS RACIAUX</h5</td>
            </tr>

            <tr><td id="traits_I">_</td></tr>
            <tr><td id="traits_II">_</td></tr>
            <tr><td id="traits_III">_</td></tr>
            <tr><td id="traits_IV">_</td></tr>
            <tr><td id="traits_V">_</td></tr>
            <tr><td id="traits_VI">_</td></tr>
            <tr><td id="traits_VII">_</td></tr>
            <tr><td id="traits_VIII">_</td></tr>
            <tr><td id="traits_IX">_</td></tr>
            <tr><td id="traits_X">_</td></tr>
            <tr><td id="traits_XI">_</td></tr>
            <tr><td id="traits_XII">_</td></tr>
            <tr><td id="traits_XIII">_</td></tr>
            <tr><td id="traits_XIV">_</td></tr>
            <tr><td id="traits_XV">_</td></tr>
            <tr><td id="traits_XVI">_</td></tr>
        </table>


        <table id="aptitudes_classe">
            <tr>
                <td id="label_aptitudes"><h5>APTITUDES DE CLASSE</h5</td>
            </tr>

            <tr><td id="aptitudes_I">_</td></tr>
            <tr><td id="aptitudes_II">_</td></tr>
            <tr><td id="aptitudes_III">_</td></tr>
            <tr><td id="aptitudes_IV">_</td></tr>
            <tr><td id="aptitudes_V">_</td></tr>
            <tr><td id="aptitudes_VI">_</td></tr>
            <tr><td id="aptitudes_VII">_</td></tr>
            <tr><td id="aptitudes_VIII">_</td></tr>
            <tr><td id="aptitudes_IX">_</td></tr>
            <tr><td id="aptitudes_X">_</td></tr>
            <tr><td id="aptitudes_XI">_</td></tr>
            <tr><td id="aptitudes_XII">_</td></tr>
            <tr><td id="aptitudes_XIII">_</td></tr>
            <tr><td id="aptitudes_XIV">_</td></tr>
            <tr><td id="aptitudes_XV">_</td></tr>
            <tr><td id="aptitudes_XVI">_</td></tr>
            <tr><td id="aptitudes_XVII">_</td></tr>
            <tr><td id="aptitudes_XVIII">_</td></tr>
            <tr><td id="aptitudes_XIX">_</td></tr>
            <tr><td id="aptitudes_XX">_</td></tr>
            <tr><td id="aptitudes_XXI">_</td></tr>
        </table>

        <input name="bouton_valider" type="button" id="bouton_valider" value="Valider" onClick="validation()">
        <input name="bouton_transmettre" type="submit" id="bouton_transmettre" value="Transmettre">
        <input name="bouton_reinitialisation" type="reset" id="bouton_reinitialisation" value="Réinitialisation" onClick="reinitialisation()">
        <input name="bouton_imprimer" type="button" id="bouton_imprimer" value="Imprimer" onClick="impression()">
    </form>
</body>
</html>
