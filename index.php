<!DOCTYPE html>
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
    <link rel="stylesheet" href="css/base.css" />
    <!-- script type="text/javascript" src="js/weapon.js"></script -->
</head>

<body>
<div id="block_page">
    <form action="" name="form" method="post">
        <div class="row">
            <div class="col-lg-4">
                <h1 id="titre_feuille">PATHFINDER</h1>
            </div>

            <div class="col-lg-8">
                <div class="row presentation_simple">
                    <div class="col-lg-5">
                        <label id="label_nom_du_personnage" for="nom_du_personnage">NOM DU PERSONNAGE</label>
                        <input id="nom_du_personnage" type="text" name="non_du_personnage" size="60" maxlength="60" required>
                    </div>

                    <div class="col-lg-2">
                        <label  id="label_alignement" for="alignement" >ALIGNEMENT</label> 
                        <select id="alignement" name="alignement">
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
                        <span class="tooltip">L'alignement est invalide</span>
                    </div>
        
                    <div class="col-lg-5">
                        <label id="label_nom_du_joueur" for="nom_du_joueur">NOM DU JOUEUR</label> 
                        <input id="nom_du_joueur" type="text" name="nom_du_joueur" size="60" maxlength="60" required>
                    </div>
                </div>

                <div class="row presentation_simple">
                    <div class="col-lg-3">
                        <label id="label_classe" for="classe">CLASSE</label>  
                        <select id="classe" name="classe">
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
                        <span class="tooltip">La classe est invalide</span>
                    </div>

                    <div class="col-lg-2">
                        <label id="label_niveau" for="niveau">NIVEAU</label> 
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
                        <span class="tooltip">Le niveau n'est pas pris en compte</span>
                    </div>
        
                    <div class="col-lg-4">
                        <label id="label_origine" for="origine">DIVINITE ORIGINE</label> 
                        <select id="origine" name="origine" onChange="influenceorigine()">
                            <option selected></option>
                            <option>Golarion</option>
                            <option>Royaumes oubliés</option>
                        </select>
                        <span class="tooltip">L'origine de la divinité est inconnue</span>
                    </div>
        
                    <div class="col-lg-3">
                        <label id="label_divinite" for="divinite">DIVINITE NOM</label> 
                        <select id="divinite" name="divinite" onChange="influencedivinite()">
                        </select>
                        <span class="tooltip">La divinité est inconnue</span>
                    </div>
                </div>
        
                <div class="row presentation_simple">
                    <div class="col-lg-2">
                        <label id="label_race" for="race">RACE</label> 
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
                        <span class="tooltip">La race n'est pas prise en compte</span>
                    </div>

                    <div class="col-lg-3">
                        <label id="label_cat_taille" for="cat_taille">CAT. DE TAILLE</label> 
                        <select id="cat_taille" name="cat_taille">
                            <option value="I">Infime (I)</option>
                            <option value="Min">Minuscule (Min)</option>
                            <option value="TP">Très petite (TP)</option>
                            <option value="P">Petite (P)</option>
                            <option value="M" selected>Moyenne (M)</option>
                            <option value="Gh">Grande (G) (haute)</option>
                            <option value="Gl">Grande (G) (longue)</option>
                            <option value="TGh">Très grande (TG) (haute)</option>
                            <option value="TGl">Très grande (TG) (longue)</option>
                            <option value="Gigh">Gigantesque (Gig) (haute)</option>
                            <option value="Gigl">Gigantesque (Gig) (longue)</option>
                            <option value="Ch">Colossale (C) (haute)</option>
                            <option value="Cl">Colossale (C) (longue)</option>
                        </select>
                        <span class="tooltip">La taille est inconnue</span>
                    </div>
        
                    <div class="col-lg-1">
                        <label id="label_sexe" for="sexe">SEXE</label>
                        <select id="sexe" name="sexe" onChange="calculTaillePoids()">
                            <option></option>
                            <option>Masculin</option>
                            <option>Féminin</option>
                        </select>
                        <span class="tooltip">Le sex est inconnu</span>
                    </div>
        
                    <div class="col-lg-1">
                        <label id="label_age" for="age">AGE</label> 
                        <input id="saisie_age" type="text" name="age" size="3" maxlength="3" required pattern="[0-9]{1,3}" onChange="influenceAge()">
                        <span class="tooltip">L'age doit être compris entre 12 ans et 1.000 ans</span>
                    </div>
        
                    <div class="col-lg-1">
                        <label id="label_taille" for="taille">TAILLE</label> 
                        <input id="saisie_taille" type="text" name="taille" size="4" maxlength="4" required pattern="[0-9,]{1,4}" onChange="influenceTaille()">
                        <span class="tooltip">La taille doit êtres inférieure à 2,5 mètres</span>
                    </div>
                
                    <div class="col-lg-1">
                        <label id="label_poids" for="poids">POIDS</label> 
                        <input id="saisie_poids" type="text" name="poids" size="3" maxlength="3" required pattern="[0-9]{1,3}" onChange="influencePoids()">
                    </div>
        
                    <div class="col-lg-1">
                        <label id="label_cheveux" for="cheveux">CHEVEUX</label> 
                        <select id="cheveux" name="cheveux">
                            <option>Noir</option>
                            <option>Brun</option>
                            <option>Chatain</option>
                            <option>Blond</option>
                        </select>
                        <span class="tooltip">Le couleur est inconnue</span>
                    </div>
        
                    <div class="col-lg-2">
                        <label id="label_yeux" for="yeux">YEUX</label> 
                        <select id="yeux" name="yeux">
                            <option>Noirs</option>
                            <option>Marons</option>
                            <option>Verts</option>
                            <option>Bleux</option>
                            <option>Vairons</option>
                        </select>
                        <span class="tooltip">Le couleur est inconnue</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-8">
                <div class="row">
                    <div class="col-lg-6">
                        <table id="tab_carac">
                            <tr id="caption_carac"> 
                                <th class="caption">CHARACTE-RISTIQUE</th>
                                <th class="caption">VALEUR</th>
                                <th class="caption">SAISIE</th>
                                <th class="caption">VAL. RACIAL</th>
                                <th class="caption">MODIF.</th>
                                <th class="caption">VALEUR TEMPORAIRE</th> 
                                <th class="caption">MODIF. TEMPORAIRE</th>
                            </tr>

                            <tr>
                                <td><label id="force" for="for_sai" class="font_white">FOR</label></td>
                                <td id="for_val"></td>
                                <td><input id="for_saisie" type="text" name="for_sai" size="2" maxlength="2" required pattern="[0-9]{1,2}"></td>
                                <td id="for_race">
                                    <select id="for_val_race" name="race" onChange="influenceRace()">
                                        <option></option>
                                        <option>-2</option>
                                        <option>+2</option>
                                    </select>
                                </td>
                                <td id="for_mod" name="for_mod"></td>
                                <td id="for_val_temp"></td>
                                <td id="for_mod_temp"></td>
                            </tr>
                
                            <tr>
                                <td><label id="dextérité" for="dex_sai" class="font_white">DEX</label></td>
                                <td id="dex_val"></td>
                                <td><input id="dex_saisie" type="text" name="dex_sai" size="2" maxlength="2" required pattern="[0-9]{1,2}"></td>
                                <td id="dex_race">
                                    <select id="dex_val_race" name="race" onChange="influenceRace()">
                                        <option></option>
                                        <option>-2</option>
                                        <option>+2</option>
                                    </select>
                                </td>
                                <td id="dex_mod" name="dex_mod"></td>
                                <td id="dex_val_temp"></td>
                                <td id="dex_mod_temp"></td>
                            </tr>
                
                            <tr>
                                <td><label id="constitution" for="con_sai" class="font_white">CON</label></td>
                                <td id="con_val"></td>
                                <td><input id="con_saisie" type="text" name="con_sai" size="2" maxlength="2" required pattern="[0-9]{1,2}"></td>
                                <td id="con_race">
                                    <select id="con_val_race" name="race" onChange="influenceRace()">
                                        <option></option>
                                        <option>-2</option>
                                        <option>+2</option>
                                    </select>
                                </td>
                                <td id="con_mod" name="con_mod"></td>
                                <td id="con_val_temp"></td>
                                <td id="con_mod_temp"></td>
                            </tr>
                
                            <tr>
                                <td><label id="intelligence" for="int_sai" class="font_white">INT</label></td>
                                <td id="int_val"></td>
                                <td><input id="int_saisie" type="text" name="int_sai" size="2" maxlength="2" required pattern="[0-9]{1,2}"></td>
                                <td id="int_race">
                                    <select id="int_val_race" name="race" onChange="influenceRace()">
                                        <option></option>
                                        <option>-2</option>
                                        <option>+2</option>
                                    </select>
                                </td>
                                <td id="int_mod" name="int_mod"></td>
                                <td id="int_val_temp"></td>
                                <td id="int_mod_temp"></td>
                            </tr>
                    
                            <tr>
                                <td><label id="sagesse" for="sag_sai" class="font_white">SAG</label></td>
                                <td id="sag_val"></td>
                                <td><input id="sag_saisie" type="text" name="sag_sai" size="2" maxlength="2" required pattern="[0-9]{1,2}"></td>
                                <td id="sag_race">
                                    <select id="sag_val_race" name="race" onChange="influenceRace()">
                                        <option></option>
                                        <option>-2</option>
                                        <option>+2</option>
                                    </select>
                                </td>
                                <td id="sag_mod" name="sag_mod"></td>
                                <td id="sag_val_temp"></td>
                                <td id="sag_mod_temp"></td>
                            </tr>
                
                            <tr>
                                <td><label id="charisme" for="cha_sai" class="font_white">CHA</label></td>
                                <td id="cha_val"></td>
                                <td><input id="cha_saisie" type="text" name="cha_sai" size="2" maxlength="2" required pattern="[0-9]{1,2}"></td>
                                <td id="cha_rac">
                                    <select id="cha_val_race" name="race" onChange="influenceRace()">
                                        <option></option>
                                        <option>-2</option>
                                        <option>+2</option>
                                    </select>
                                </td>
                                <td id="cha_mod" name="cha_mod"></td>
                                <td id="cha_val_temp"></td>
                                <td id="cha_mod_temp"></td>
                            </tr>
                        </table>
                    </div>

                    <div class="col-lg-6">
                        <div class="row">
                            <div class="col-lg-4">
                                <label id="label_point_de_vie" class="caption font_white">PV</label>
                            </div>

                            <div class="col-lg-4">
                                <label id="label_point_de_vie_total" for="point_de_vie_total">Total</label> 
                                <input id="point_de_vie_total" type="text" name="point_de_vie_total" size="3" maxlength="3" required pattern="[0-9]{1,3}" onChange="influencePv()">
                            </div>
            
                            <div class="col-lg-4">
                                <label id="label_rd" for="red_deg">RD</label> 
                                <div id="red_deg" name="red_deg">
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <label id="label_blessure" for="point_de_vie_actuel">BLESSURES</label> 
                            <textarea id="point_de_vie_actuel" name="point_de_vie_actuel" rows="2" cols="85"></textarea>
                        </div>
            
                        <div class="row">
                            <label id="label_non_letaux" for="non_letaux">DEGATS NON LETAUX</label> 
                            <textarea id="non_letaux" name="non_letaux" rows="2" cols="85"></textarea>
                        </div>

                        <div class="row">
                            <table id="tab_init">
                                <tr id="caption_init" class="caption"> 
                                    <th></th>
                                    <th class="caption">TOTAL</th>
                                    <th></th>
                                    <th class="caption">MOD. DE DEXTERITE</th>
                                    <th></th>
                                    <th class="caption">MOD. DIVERS</th>
                                </tr>

                                <tr>
                                    <td><label id="lab_init" class="font_white">Mod. à l'INITIATIVE</label></td>
                                    <td id="init_total"></td>
                                    <td class="background_grey">=</td>
                                    <td id="init_mod_dex"></td>
                                    <td class="background_grey">+</td>
                                    <td id="init_mod_div">
                                        <input id="init_mod_div_val" type="number" name="init_mod_div_val" min="0" max="20">
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-12">
                        <table id="tab_ca">
                            <tr id="caption_ca" class="caption"> 
                                <th></th>
                                <th class="caption">TOTAL</th>
                                <th></th>
                                <th class="caption">ARMURE NATURELLE</th>
                                <th></th>
                                <th class="caption">BONUS D'ARMURE</th>
                                <th></th>
                                <th class="caption">BONUS DE BOUCLIER</th>
                                <th></th>
                                <th class="caption">MOD. DE DEXTERITE</th>
                                <th></th>
                                <th class="caption">MOD. DE TAILLE</th>
                                <th></th>
                                <th class="caption">ARMURE NATURELLE</th>
                                <th></th>
                                <th class="caption">MOD DE PARADE</th>
                                <th></th>
                                <th class="caption">MOD DIVERS</th>
                            </tr>
                            
                            <tr>
                                <td><label id="ca" class="font_white">CA</label></td>
                                <td id="ca_total" name="ca_total"></td>
                                <td class="background_grey">=</td>
                                <td id="ca_arm_base" name="ca_arm_base">10</td>
                                <td class="background_grey">+</td>
                                <td>
                                    <select id="ca_bon_arm" name="ca_bon_arm" onChange="influenceBonusArm()">
                                        <option selected>0</option>
                                        <option>+1</option>
                                        <option>+2</option>
                                        <option>+3</option>
                                        <option>+4</option>
                                        <option>+5</option>
                                    </select>
                                    <span class="tooltip">Le bonus est invalide</span>
                                </td>
                                <td class="background_grey">+</td>
                                <td>
                                    <select id="ca_bon_bou" name="ca_bon_bou" onChange="influenceBonusBou()">
                                        <option selected>0</option>
                                        <option>+1</option>
                                        <option>+2</option>
                                        <option>+3</option>
                                        <option>+4</option>
                                        <option>+5</option>
                                    </select>
                                    <span class="tooltip">Le bonus est invalide</span>
                                </td>
                                <td class="background_grey">+</td>
                                <td name="ca_mod_dex" id="ca_mod_dex"></td>
                                <td class="background_grey">+</td>
                                <td name="ca_mod_tai" id="ca_mod_tai">0</td>
                                <td class="background_grey">+</td>
                                <td name="ca_arm_nat" id="ca_arm_nat">0</td>
                                <td class="background_grey">+</td>
                                <td name="ca_mod_par" id="ca_mod_par">0</td>
                                <td class="background_grey">+</td>
                                <td>
                                    <select id="ca_bon_div" name="ca_bon_div" onChange="influenceBonusDiv()">
                                        <option selected>0</option>
                                        <option>+1</option>
                                        <option>+2</option>
                                        <option>+3</option>
                                        <option>+4</option>
                                        <option>+5</option>
                                    </select>
                                    <span class="tooltip">Le bonus est invalide</span>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-2">
                        <label id="lab_ca_contact" class="font_white">CA de contact</label>
                    </div>

                    <div class="col-lg-2">
                        <p id="val_ca_contact">0</p>
                    </div>

                    <div class="col-lg-2">
                        <label id="lab_pri_depourvu" class="font_white">CA pris au dépourvu</label>
                    </div>

                    <div class="col-lg-1">
                        <p id="val_pri_depourvu">0</p>
                    </div>

                    <div class="col-lg-3">
                        <label id="label_mod_part_ca" class="font_white">Modificateur particulier à la CA</label> 
                    </div>

                    <div class="col-lg-2">
                        <input id="mod_part_ca" type="text" name="mod_part_ca" size="20" maxlength="20">
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-12">
                        <table id="tab_sau">
                            <tr id="caption_sau" class="caption"> 
                                <th class="caption">SAUVEGARDES</th>
                                <th class="caption">TOTAL</th>
                                <th></th>
                                <th class="caption">BONUS DE BASE</th>
                                <th></th>
                                <th class="caption">MOD. DE CARAC.</th>
                                <th></th>
                                <th class="caption">MOD. MAGIQUE</th>
                                <th></th>
                                <th class="caption">MOD. DIVERS</th>
                                <th></th>
                                <th class="caption">MOD.TEMPORAIRE</th>
                                <th></th>
                                <th class="caption">MODIFICATEURS PARTICULIERS</th>
                            </tr>

                            <tr>
                                <td><label id="lab_ref" class="font_white">REFLEXES</label></td>
                                <td id="sau_total_ref"></td>
                                <td class="background_grey">=</td>
                                <td id="sau_bon_bas_ref"></td>
                                <td class="background_grey">+</td>
                                <td id="sau_mod_car_ref"></td>
                                <td class="background_grey">+</td>
                                <td id="sau_mod_mag_ref">
                                    <select id="sau_mod_mag_ref_bon" name="sau_mod_mag_ref_bon" onChange="influenceBonusRefMag()">
                                        <option selected>0</option>
                                        <option>+1</option>
                                        <option>+2</option>
                                        <option>+3</option>
                                        <option>+4</option>
                                        <option>+5</option>
                                    </select>
                                    <span class="tooltip">Le bonus est invalide</span>
                                </td>
                                <td class="background_grey">+</td>
                                <td id="sau_mod_div_ref">
                                    <select id="sau_mod_div_ref_bon" name="sau_mod_div_ref_bon" onChange="influenceBonusRefDiv()">
                                        <option selected>0</option>
                                        <option>+1</option>
                                        <option>+2</option>
                                        <option>+3</option>
                                        <option>+4</option>
                                        <option>+5</option>
                                    </select>
                                    <span class="tooltip">Le bonus est invalide</span>
                                </td>
                                <td class="background_grey">+</td>
                                <td id="sau_mod_tem_ref">
                                    <input id="mod_tem_ref" type="text" name="mod_tem_ref" size="2" maxlength="2" pattern="[0-9]{1,2}" onChange="calculeReflexes()">
                                </td>
                                <td class="background_grey">+</td>
                                <td id="sau_mod_part_ref">
                                    <input id="mod_part_ref" type="text" name="mod_part_ref" size="2" maxlength="2" pattern="[0-9]{1,2}" onChange="calculeReflexes()">
                                </td>
                            </tr>
                        
                            <tr>
                                <td><label id="lab_vig" class="font_white">VIGEUR</label></td>
                                <td id="sau_total_vig"></td>
                                <td class="background_grey">=</td>
                                <td id="sau_bon_bas_vig"></td>
                                <td class="background_grey">+</td>
                                <td id="sau_mod_car_vig"></td>
                                <td class="background_grey">+</td>
                                <td id="sau_mod_mag_vig">
                                    <select id="sau_mod_mag_vig_bon" name="sau_mod_mag_vig_bon" onChange="influenceBonusVigMag()">
                                        <option selected>0</option>
                                        <option>+1</option>
                                        <option>+2</option>
                                        <option>+3</option>
                                        <option>+4</option>
                                        <option>+5</option>
                                    </select>
                                    <span class="tooltip">Le bonus est invalide</span>
                                </td>
                                <td class="background_grey">+</td>
                                <td id="sau_mod_div_vig">
                                    <select id="sau_mod_div_vig_bon" name="sau_mod_div_vig_bon" onChange="influenceBonusVigDiv()">
                                        <option selected>0</option>
                                        <option>+1</option>
                                        <option>+2</option>
                                        <option>+3</option>
                                        <option>+4</option>
                                        <option>+5</option>
                                    </select>
                                    <span class="tooltip">Le bonus est invalide</span>
                                </td>
                                <td class="background_grey">+</td>
                                <td id="sau_mod_tem_vig">
                                    <input id="mod_tem_vig" type="text" name="mod_tem_vig" size="2" maxlength="2" pattern="[0-9]{1,2}" onChange="calculeVigeur()">
                                </td>
                                <td class="background_grey">+</td>
                                <td id="sau_mod_part_vig">
                                    <input id="mod_part_vig" type="text" name="mod_part_vig" size="2" maxlength="2" pattern="[0-9]{1,2}" onChange="calculeVigeur()">
                                </td>
                            </tr>
                        
                            <tr>
                                <td><label id="lab_vol" class="font_white">VOLONTE</label></td>
                                <td id="sau_total_vol"></td>
                                <td class="background_grey">=</td>
                                <td id="sau_bon_bas_vol"></td>
                                <td class="background_grey">+</td>
                                <td id="sau_mod_car_vol"></td>
                                <td class="background_grey">+</td>
                                <td id="sau_mod_mag_vol">
                                    <select id="sau_mod_mag_vol_bon" name="sau_mod_mag_vol_bon" onChange="influenceBonusVolMag()">
                                        <option selected>0</option>
                                        <option>+1</option>
                                        <option>+2</option>
                                        <option>+3</option>
                                        <option>+4</option>
                                        <option>+5</option>
                                    </select>
                                    <span class="tooltip">Le bonus est invalide</span>
                                </td>
                                <td class="background_grey">+</td>
                                <td id="sau_mod_div_vol">
                                    <select id="sau_mod_div_vol_bon" name="sau_mod_div_vol_bon" onChange="influenceBonusVolDiv()">
                                        <option selected>0</option>
                                        <option>+1</option>
                                        <option>+2</option>
                                        <option>+3</option>
                                        <option>+4</option>
                                        <option>+5</option>
                                    </select>
                                    <span class="tooltip">Le bonus est invalide</span>
                                </td>
                                <td class="background_grey">+</td>
                                <td id="sau_mod_tem_vol">
                                    <input id="mod_tem_vol" type="text" name="mdvo" size="2" maxlength="2" pattern="[0-9]{1,2}" onChange="calculeVolonte()">
                                </td>
                                <td class="background_grey">+</td>
                                <td id="sau_mod_part_vol">
                                    <input id="mod_part_vol" type="text" name="mod_part_vol" size="2" maxlength="2" pattern="[0-9]{1,2}" onChange="calculeVolonte()">
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-3">
                        <label id="label_bba" class="font_white">BONUS DE BASE A L'ATTAQUE</label>
                    </div>

                    <div class="col-lg-3">
                        <p id="bba"></p>
                    </div>
                    
                    <div class="col-lg-3">
                        <label id="label_rm" class="font_white" for="rm">RESISTANCE A LA MAGIE</label> 
                    </div>

                    <div class="col-lg-3">
                        <input id="rm" type="text" name="rm" size="3" maxlength="3">
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-12">
                        <table id="tab_bmo">
                            <tr id="caption_bmo" class="caption"> 
                                <th></th>
                                <th class="caption">TOTAL</th>
                                <th></th>
                                <th class="caption">B B à L'ATTAQUE</th>
                                <th></th>
                                <th class="caption">MOD. DE FORCE</th>
                                <th></th>
                                <th class="caption">MOD. DE TAILLE</th>
                                <th></th>
                                <th class="caption">MOD. DIVERS</th>
                            </tr>
                            <tr>
                                <td><label id="lab_bmo" class="font_white">BMO</label></td>
                                <td id="bmo_total" class="center"></td>
                                <td class="background_grey">=</td>
                                <td id="bmo_bon_bas_att" class="center"></td>
                                <td class="background_grey">+</td>
                                <td id="bmo_mod_for" class="center"></td>
                                <td class="background_grey">+</td>
                                <td id="bmo_mod_tai" class="center"></td>
                                <td class="background_grey">+</td>
                                <td id="bmo_mod_div" class="center"></td>
                            </tr>
                        </table>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-12">
                        <table id="tab_dmd">
                            <tr id="caption_bmo" class="caption"> 
                                <th></th>
                                <th class="caption">TOTAL</th>
                                <th></th>
                                <th class="caption">B B à L'ATTAQUE</th>
                                <th></th>
                                <th class="caption">MOD. DE FORCE</th>
                                <th></th>
                                <th class="caption">MOD. DE DEXTERITE</th>
                                <th></th>
                                <th class="caption">MOD. DE TAILLE</th>
                                <th></th>
                                <th></th>
                            </tr>
                            <tr>
                                <td><label id="lab_dmd" class="font_white">DMD</label></td>
                                <td id="dmd_total" class="center"></td>
                                <td class="background_grey">=</td>
                                <td id="dmd_bon_bas_att" class="center"></td>
                                <td class="background_grey">+</td>
                                <td id="dmd_mod_for" class="center"></td>
                                <td class="background_grey">+</td>
                                <td id="dmd_mod_dex" class="center"></td>
                                <td class="background_grey">+</td>
                                <td id="dmd_mod_tai" class="center"></td>
                                <td class="background_grey">+</td>
                                <td id="dmd_mod_div" class="center">10</td>
                            </tr>
                        </table>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-6">
                        <label id="label_famille_arme_I" for="famille_arme_I">FAMILLE D'ARME</label> 
                        <select id="famille_arme_I" name="famille_arme_I">
                            <option></option>
                            <option value="armes_courantes">Armes courantes</option>
                            <option value="armes_de_guerre">Arme de guerre</option>
                            <option value="armes_exotiques">Arme exotiques</option>
                        </select>
                        <span class="tooltip">Famille d'arme inconnue</span>
                    </div>

                    <div class="col-lg-6">
                        <label id="label_maniement_arme_I" for="maniement_arme_I">MANIEMENT</label> 
                        <select id="maniement_arme_I" name="maniement_arme_I">
                        </select>
                        <span class="tooltip">Maniement d'arme inconnu</span>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-12">
                        <table id="tab_arme_a_I">
                            <tr>
                                <td colspan="3"><label class="font_white">ARME</label></td>
                                <td><label class="font_white">BONUS A L'ATTAQUE</label></td>
                                <td><label class="font_white">CRITIQUE</label></td>
                            </tr>

                            <tr>
                                <td colspan="2">
                                    <select id="arme_I" name="arme_I">
                                    </select>
                                </td>

                                <td id="frappe_I" class="center"></td>

                                <td class="center">
                                    <select id="bonus_I" name="bonus">
                                        <option value=0></option>
                                        <option value=0>0</option>
                                        <option value=1>1</option>
                                        <option value=2>2</option>
                                        <option value=3>3</option>
                                        <option value=4>4</option>
                                        <option value=5>5</option>
                                    </select>
                                    <span class="tooltip">Bonus non pris en compte</span>
                                </td>
                                <td class="center" id="critique_I"></td>
                            </tr>

                            <tr>
                                <td><label class="font_white">TYPE</label></td>
                                <td><label class="font_white">PORTEE</label></td>
                                <td><label class="font_white">MUNITIONS</label></td>
                                <td colspan="2"><label class="font_white">DEGATS</label></td>
                            </tr>

                            <tr>
                                <td id="type_I">_</td>
                                <td id="portee_I">_</td>
                                <td id="munitions_I">_</td>
                                <td colspan="2" id="degats_I">_</td>
                            </tr>
                        </table>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-6">
                        <label id="label_famille_arme_II" for="famille_arme_II">FAMILLE D'ARME</label> 
                        <select id="famille_arme_II" name="famille_arme_II">
                            <option></option>
                            <option value="armes_courantes">Armes courantes</option>
                            <option value="armes_de_guerre">Arme de guerre</option>
                            <option value="armes_exotiques">Arme exotiques</option>
                        </select>
                        <span class="tooltip">Famille d'arme inconnue</span>
                    </div>

                    <div class="col-lg-6">
                        <label id="label_maniement_arme_II" for="maniement_arme_II">MANIEMENT</label> 
                        <select id="maniement_arme_II" name="maniement_arme_II">
                        </select>
                        <span class="tooltip">Maniement d'arme inconnue</span>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-12">
                        <table id="tab_arme_a_II">
                            <tr>
                                <td colspan="3"><label class="font_white">ARME</label></td>
                                <td><label class="font_white">BONUS A L'ATTAQUE</label></td>
                                <td><label class="font_white">CRITIQUE</label></td>
                            </tr>

                            <tr>
                                <td colspan="2">
                                    <select id="arme_II" name="arme_II">
                                    </select>
                                </td>

                                <td id="frappe_II" class="center"></td>

                                <td class="center">
                                    <select id="bonus_II" name="bonus">
                                        <option value=0></option>
                                        <option value=0>0</option>
                                        <option value=1>1</option>
                                        <option value=2>2</option>
                                        <option value=3>3</option>
                                        <option value=4>4</option>
                                        <option value=5>5</option>
                                    </select>
                                    <span class="tooltip">Bonus non pris en compte</span>
                                </td>
                                <td id="critique_II" class="center"></td>
                            </tr>

                            <tr>
                                <td><label class="font_white">TYPE</label></td>
                                <td><label class="font_white">PORTEE</label></td>
                                <td><label class="font_white">MUNITIONS</label></td>
                                <td colspan="2"><label class="font_white">DEGATS</label></td>
                            </tr>

                            <tr>
                                <td id="type_II">_</td>
                                <td id="portee_II">_</td>
                                <td id="munitions_II">_</td>
                                <td colspan="2" id="degats_II">_</td>
                            </tr>
                        </table>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-6">
                        <label id="label_famille_arme_III" for="famille_arme_III">FAMILLE D'ARME</label> 
                        <select id="famille_arme_III" name="famille_arme_III">
                            <option></option>
                            <option value="armes_courantes">Armes courantes</option>
                            <option value="armes_de_guerre">Arme de guerre</option>
                            <option value="armes_exotiques">Arme exotiques</option>
                        </select>
                        <span class="tooltip">Famille d'arme inconnue</span>
                    </div>

                    <div class="col-lg-6">
                        <label id="label_maniement_arme_III" for="maniement_arme_III">MANIEMENT</label> 
                        <select id="maniement_arme_III" name="maniement_arme_III">
                        </select>
                        <span class="tooltip">Maniement d'arme inconnue</span>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-12">
                        <table id="tab_arme_a_III">
                            <tr>
                                <td colspan="3"><label class="font_white">ARME</label></td>
                                <td><label class="font_white">BONUS A L'ATTAQUE</label></td>
                                <td><label class="font_white">CRITIQUE</label></td>
                            </tr>

                            <tr>
                                <td colspan="2">
                                    <select id="arme_III" name="arme_III">
                                    </select>
                                </td>

                                <td id="frappe_III" class="center"></td>

                                <td class="center">
                                    <select id="bonus_III" name="bonus">
                                        <option value=0></option>
                                        <option value=0>0</option>
                                        <option value=1>1</option>
                                        <option value=2>2</option>
                                        <option value=3>3</option>
                                        <option value=4>4</option>
                                        <option value=5>5</option>
                                    </select>
                                    <span class="tooltip">Bonus non pris en compte</span>
                                </td>
                                <td id="critique_III" class="center"></td>
                            </tr>

                            <tr>
                                <td><label class="font_white">TYPE</label></td>
                                <td><label class="font_white">PORTEE</label></td>
                                <td><label class="font_white">MUNITIONS</label></td>
                                <td colspan="2"><label class="font_white">DEGATS</label></td>
                            </tr>

                            <tr>
                                <td id="type_III">_</td>
                                <td id="portee_III">_</td>
                                <td id="munitions_III">_</td>
                                <td colspan="2" id="degats_III">_</td>
                            </tr>
                        </table>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-6">
                        <label id="label_famille_arme_IV" for="famille_arme_IV">FAMILLE D'ARME</label> 
                        <select id="famille_arme_IV" name="famille_arme_IV">
                            <option></option>
                            <option value="armes_courantes">Armes courantes</option>
                            <option value="armes_de_guerre">Arme de guerre</option>
                            <option value="armes_exotiques">Arme exotiques</option>
                        </select>
                        <span class="tooltip">Famille d'arme inconnue</span>
                    </div>

                    <div class="col-lg-6">
                        <label id="label_maniement_arme_IV" for="maniement_arme_IV">MANIEMENT</label> 
                        <select id="maniement_arme_IV" name="maniement_arme_IV">
                        </select>
                        <span class="tooltip">Maniement d'arme inconnue</span>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-12">
                        <table id="tab_arme_a_IV">
                            <tr>
                                <td colspan="3"><label class="font_white">ARME</label></td>
                                <td><label class="font_white">BONUS A L'ATTAQUE</label></td>
                                <td><label class="font_white">CRITIQUE</label></td>
                            </tr>

                            <tr>
                                <td colspan="2">
                                    <select id="arme_IV" name="arme_IV">
                                    </select>
                                </td>

                                <td id="frappe_IV" class="center"></td>

                                <td class="center">
                                    <select id="bonus_IV" name="bonus">
                                        <option value=0></option>
                                        <option value=0>0</option>
                                        <option value=1>1</option>
                                        <option value=2>2</option>
                                        <option value=3>3</option>
                                        <option value=4>4</option>
                                        <option value=5>5</option>
                                    </select>
                                    <span class="tooltip">Bonus non pris en compte</span>
                                </td>
                                <td id="critique_IV" class="center"></td>
                            </tr>

                            <tr>
                                <td><label class="font_white">TYPE</label></td>
                                <td><label class="font_white">PORTEE</label></td>
                                <td><label class="font_white">MUNITIONS</label></td>
                                <td colspan="2"><label class="font_white">DEGATS</label></td>
                            </tr>

                            <tr>
                                <td id="type_IV">_</td>
                                <td id="portee_IV">_</td>
                                <td id="munitions_IV">_</td>
                                <td colspan="2" id="degats_IV">_</td>
                            </tr>
                        </table>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-6">
                        <label id="label_famille_arme_V" for="famille_arme_V">FAMILLE D'ARME</label> 
                        <select id="famille_arme_V" name="famille_arme_V">
                            <option></option>
                            <option value="armes_courantes">Armes courantes</option>
                            <option value="armes_de_guerre">Arme de guerre</option>
                            <option value="armes_exotiques">Arme exotiques</option>
                        </select>
                        <span class="tooltip">Famille d'arme inconnue</span>
                    </div>

                    <div class="col-lg-6">
                        <label id="label_maniement_arme_V" for="maniement_arme_V">MANIEMENT</label> 
                        <select id="maniement_arme_V" name="maniement_arme_V">
                        </select>
                        <span class="tooltip">Maniement d'arme inconnue</span>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-12">
                        <table id="tab_arme_a_V">
                            <tr>
                                <td colspan="3"><label class="font_white">ARME</label></td>
                                <td><label class="font_white">BONUS A L'ATTAQUE</label></td>
                                <td><label class="font_white">CRITIQUE</label></td>
                            </tr>

                            <tr>
                                <td colspan="2">
                                    <select id="arme_V" name="arme_V">
                                    </select>
                                </td>

                                <td id="frappe_V" class="center"></td>

                                <td class="center">
                                    <select id="bonus_V" name="bonus">
                                        <option value=0></option>
                                        <option value=0>0</option>
                                        <option value=1>1</option>
                                        <option value=2>2</option>
                                        <option value=3>3</option>
                                        <option value=4>4</option>
                                        <option value=5>5</option>
                                    </select>
                                    <span class="tooltip">Bonus non pris en compte</span>
                                </td>
                                <td id="critique_V" class="center"></td>
                            </tr>

                            <tr>
                                <td><label class="font_white">TYPE</label></td>
                                <td><label class="font_white">PORTEE</label></td>
                                <td><label class="font_white">MUNITIONS</label></td>
                                <td colspan="2"><label class="font_white">DEGATS</label></td>
                            </tr>

                            <tr>
                                <td id="type_V">_</td>
                                <td id="portee_V">_</td>
                                <td id="munitions_V">_</td>
                                <td colspan="2" id="degats_V">_</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>

            <div class="col-lg-4">
                <div class="row">
                    <div class="col-lg-12">
                        <table id="tab_vd_a">
                            <tr id="caption_vd_a" class="caption"> 
                                <th></th>
                                <th class="caption">SA Mètres</th>
                                <th class="caption">SA Cases</th>
                                <th class="caption">AA Mètres</th>
                                <th class="caption">AA Case</th>
                                <th class="caption">Modif. Temporaire</th>
                            </tr>

                            <tr>
                                <td class="font_white">VD</td>
                                <td id="vd_sans_armure_metre"></td>
                                <td id="vd_sans_armure_case"></td>
                                <td id="vd_avec_armure_metre"></td>
                                <td id="vd_avec_armure_case"></td>
                                <td id="vd_mod_divers"></td>
                            </tr>
                        </table>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-12">
                        <table id="tab_vd_b">
                            <tr id="caption_vd_b"> 
                                <th class="caption">VOL</th>
                                <th class="caption">MANOEUVRABILITE</th>
                                <th class="caption">NATATION</th>
                                <th class="caption">ESCALADE</th>
                                <th class="caption">CREUSEMENT</th>
                            </tr>

                            <tr>
                                <td id="vd_vol">0</td>
                                <td id="vd_manoeu">0</td>
                                <td id="vd_nata">0</td>
                                <td id="vd_escal">0</td>
                                <td id="vd_creuse">0</td>
                            </tr>
                        </table>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-12">
                        <table id="competences">
                            <tr>
                                <th class="font_white caption" colspan="11">COMPETENCES</th>
                            </tr>

                            <tr>
                                <td class="background_grey"></td>
                                <td colspan="2" class="background_grey"><h2>NOM DE LA COMPETENCE</h2></td>
                                <td colspan="2" class="background_grey"><h3>Bonus Total</h3></td>
                                <td colspan="2" class="background_grey"><h3>MOD. DE CARACTERISTIQUE</h3></td>
                                <td colspan="2" class="background_grey"><h3>RANG</h3></td>
                                <td colspan="2" class="background_grey"><h3>MOD. DIVERS</h3></td>
                            </tr>

                            <tr>
                                <td class="center background_grey" id="acrobatie"><h2>O</h2></td>
                                <td colspan="2">Acrobatie</td>
                                <td class="acrobatie center" id="totalAcrobatie">0</td>
                                <td class="background_grey">=</td>
                                <td class="center">DEX</td>
                                <td class="center" id="caracAcrobatie">+0</td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <select id="rang_Acrobatie" name="rang_acrobatie">
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
                                </td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <input id="diversAcrobatie" type="text" name="divers_acrobatie" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0>
                                </td>
                            </tr>

                            <tr>
                                <td class="center background_grey" id="artisanat_I"><h2>O</h2></td>
                                <td>Artisanat</td>
                                <td>
                                    <select id="artisanatType_I" name="artisanatType_I">
                                    </select>
                                </td>
                                <td class="artisanat_I center" id="totalartisanat_I">0</td>
                                <td class="background_grey">=</td>
                                <td class="center">INT</td>
                                <td class="center" id="caracartisanat_I">+0</td>
                                <td class="background_grey">+</td>
                                <td>
                                    <select id="rang_artisanat_I" name="rang_artisanat_I">
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
                                </td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <input id="diversartisanat_I" type="text" name="divers_artisanat_I" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0>
                                </td>
                            </tr>

                            <tr>
                                <td class="center background_grey" id="artisanat_II"><h2>O</h2></td>
                                <td>Artisanat</td>
                                <td>
                                    <select id="artisanatType_II" name="artisanatType_II">
                                    </select>
                                </td>
                                <td class="artisanat_II center" id="totalartisanat_II">0</td>
                                <td class="background_grey">=</td>
                                <td class="center">INT</td>
                                <td class="center" id="caracartisanat_II">+0</td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <select id="rang_artisanat_II" name="rang_artisanat_II">
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
                                </td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <input id="diversartisanat_II" type="text" name="divers_artisanat_II" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0>
                                </td>
                            </tr>

                            <tr>
                                <td class="center background_grey" id="artisanat_III"><h2>O</h2></td>
                                <td>Artisanat</td>
                                <td>
                                    <select id="artisanatType_III" name="artisanatType_III">
                                    </select>
                                </td>
                                <td class="artisanat_III center" id="totalartisanat_III">0</td>
                                <td class="background_grey">=</td>
                                <td class="center">INT</td>
                                <td class="center" id="caracartisanat_III">+0</td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <select id="rang_artisanat_III" name="rang_artisanat_III">
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
                                </td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <input id="diversartisanat_III" type="text" name="divers_artisanat_III" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0>
                                </td>
                            </tr>

                            <tr>
                                <td class="center background_grey" id="art_de_la_magie"><h2>O</h2></td>
                                <td colspan="2">Art de la magie*</td>
                                <td class="artdelamagie center" id="totalartdelamagie">0</td>
                                <td class="background_grey">=</td>
                                <td class="center">INT</td>
                                <td class="center" id="caracartdelamagie">+0</td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <select id="rang_artdelamagie" name="rang_artdelamagie">
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
                                </td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <input id="diversartdelamagie" type="text" name="divers_artdelamagie" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0>
                                </td>
                            </tr>

                            <tr>
                                <td class="center background_grey" id="bluf"><h2>O</h2></td>
                                <td colspan="2">Bluf</td>
                                <td class="bluff center" id="totalbluff">0</td>
                                <td class="background_grey">=</td>
                                <td class="center">CHA</td>
                                <td class="center" id="caracbluff">+0</td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <select id="rang_bluff" name="rang_bluff">
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
                                </td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <input id="diversbluff" type="text" name="divers_bluff" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0>
                                </td>
                            </tr>

                            <tr>
                                <td class="center background_grey" id="Connaissances_exploration"><h2>O</h2></td>
                                <td colspan="2">Connaissances Exploration*</td>
                                <td class="Connaissances_exploration center" id="totalConnaissances_exploration">0</td>
                                <td class="background_grey">=</td>
                                <td class="center">INT</td>
                                <td class="center" id="caracConnaissances_exploration">+0</td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <select id="rang_Connaissances_exploration" name="rang_Connaissances_exploration">
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
                                </td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <input id="diversConnaissances_exploration" type="text" name="divers_Connaissances_exploration" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0>
                                </td>
                            </tr>

                            <tr>
                                <td class="center background_grey" id="Connaissances_Folklore_Locale"><h2>O</h2></td>
                                <td colspan="2">Connaissances Folklore Locale*</td>
                                <td class="Connaissances_Folklore_Locale center" id="totalConnaissances_Folklore_Locale">0</td>
                                <td class="background_grey">=</td>
                                <td class="center">INT</td>
                                <td class="center" id="caracConnaissances_Folklore_Locale">+0</td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <select id="rang_Connaissances_Folklore_Locale" name="rang_Connaissances_Folklore_Locale">
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
                                </td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <input id="diversConnaissances_Folklore_Locale" type="text" name="divers_Connaissances_Folklore_Locale" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0>
                                </td>
                            </tr>

                            <tr>
                                <td class="center background_grey" id="Connaissances_Geographie"><h2>O</h2></td>
                                <td colspan="2">Connaissances Géographie*</td>
                                <td class="Connaissances_Geographie center" id="totalConnaissances_Geographie">0</td>
                                <td class="background_grey">=</td>
                                <td class="center">INT</td>
                                <td class="center" id="caracConnaissances_Geographie">+0</td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <select id="rang_Connaissances_Geographie" name="rang_Connaissances_Geographie">
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
                                </td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <input id="diversConnaissances_Geographie" type="text" name="divers_Connaissances_Geographie" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0>
                                </td>
                            </tr>

                            <tr>
                                <td class="center background_grey" id="Connaissances_Histoire"><h2>O</h2></td>
                                <td colspan="2">Connaissances Histoire*</td>
                                <td class="Connaissances_Histoire center" id="totalConnaissances_Histoire">0</td>
                                <td class="background_grey">=</td>
                                <td class="center">INT</td>
                                <td class="center" id="caracConnaissances_Histoire">+0</td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <select id="rang_Connaissances_Histoire" name="rang_Connaissances_Histoire">
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
                                </td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <input id="diversConnaissances_Histoire" type="text" name="divers_Connaissances_Histoire" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0>
                                </td>
                            </tr>

                            <tr>
                                <td class="center background_grey" id="Connaissances_Ingénieurie"><h2>O</h2></td>
                                <td colspan="2">Connaissances_Ingénieurie*</td>
                                <td class="Connaissances_Ingénieurie center" id="totalConnaissances_Ingénieurie">0</td>
                                <td class="background_grey">=</td>
                                <td class="center">INT</td>
                                <td class="center" id="caracConnaissances_Ingénieurie">+0</td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <select id="rang_Connaissances_Ingénieurie" name="rang_Connaissances_Ingénieurie">
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
                                </td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <input id="diversConnaissances_Ingénieurie" type="text" name="divers_Connaissances_Ingénieurie" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0>
                                </td>
                            </tr>

                            <tr>
                                <td class="center background_grey" id="Connaissances_Mystères"><h2>O</h2></td>
                                <td colspan="2">Connaissances Mystères*</td>
                                <td class="Connaissances_Mystères center" id="totalConnaissances_Mystères">0</td>
                                <td class="background_grey">=</td>
                                <td class="center">INT</td>
                                <td class="center" id="caracConnaissances_Mystères">+0</td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <select id="rang_Connaissances_Mystères" name="rang_Connaissances_Mystères">
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
                                </td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <input id="diversConnaissances_Mystères" type="text" name="divers_Connaissances_Mystères" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0>
                                </td>
                            </tr>

                            <tr>
                                <td class="center background_grey" id="Connaissances_Nature"><h2>O</h2></td>
                                <td colspan="2">Connaissances Nature*</td>
                                <td class="Connaissances_Nature center" id="totalConnaissances_Nature">0</td>
                                <td class="background_grey">=</td>
                                <td class="center">INT</td>
                                <td class="center" id="caracConnaissances_Nature">+0</td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <select id="rang_Connaissances_Nature" name="rang_Connaissances_Nature">
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
                                </td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <input id="diversConnaissances_Nature" type="text" name="divers_Connaissances_Nature" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0>
                                </td>
                            </tr>

                            <tr>
                                <td class="center background_grey" id="Connaissances_Noblesse"><h2>O</h2></td>
                                <td colspan="2">Connaissances Noblesse*</td>
                                <td class="Connaissances_Noblesse center" id="totalConnaissances_Noblesse">0</td>
                                <td class="background_grey">=</td>
                                <td class="center">INT</td>
                                <td class="center" id="caracConnaissances_Noblesse">+0</td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <select id="rang_Connaissances_Noblesse" name="rang_Connaissances_Noblesse">
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
                                </td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <input id="diversConnaissances_Noblesse" type="text" name="divers_Connaissances_Noblesse" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0>
                                </td>
                            </tr>

                            <tr>
                                <td class="center background_grey" id="Connaissances_Plan"><h2>O</h2></td>
                                <td colspan="2">Connaissances Plan*</td>
                                <td class="Connaissances_Plan center" id="totalConnaissances_Plan">0</td>
                                <td class="background_grey">=</td>
                                <td class="center">INT</td>
                                <td class="center" id="caracConnaissances_Plan">+0</td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <select id="rang_Connaissances_Plan" name="rang_Connaissances_Plan">
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
                                </td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <input id="diversConnaissances_Plan" type="text" name="divers_Connaissances_Plan" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0>
                                </td>
                            </tr>

                            <tr>
                                <td class="center background_grey" id="Connaissances_Religion"><h2>O</h2></td>
                                <td colspan="2">Connaissances Religion*</td>
                                <td class="Connaissances_Religion center" id="totalConnaissances_Religion">0</td>
                                <td class="background_grey">=</td>
                                <td class="center">INT</td>
                                <td class="center" id="caracConnaissances_Religion">+0</td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <select id="rang_Connaissances_Religion" name="rang_Connaissances_Religion">
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
                                </td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <input id="diversConnaissances_Religion" type="text" name="divers_Connaissances_Religion" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0>
                                </td>
                            </tr>

                            <tr>
                                <td class="center background_grey" id="déguisement"><h2>O</h2></td>
                                <td colspan="2">Déguisement</td>
                                <td class="deguisement center" id="totaldeguisement">0</td>
                                <td class="background_grey">=</td>
                                <td class="center">CHA</td>
                                <td class="center" id="caracdeguisement">+0</td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <select id="rang_deguisement" name="rang_deguisement">
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
                                </td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <input id="diversdeguisement" type="text" name="divers_deguisement" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0>
                                </td>
                            </tr>

                            <tr>
                                <td class="center background_grey" id="diplomatie"><h2>O</h2></td>
                                <td colspan="2">Diplomatie</td>
                                <td class="diplomatie center" id="totaldiplomatie">0</td>
                                <td class="background_grey">=</td>
                                <td class="center">CHA</td>
                                <td class="center" id="caracdiplomatie">+0</td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <select id="rang_diplomatie" name="rang_diplomatie">
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
                                </td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <input id="diversdiplomatie" type="text" name="divers_diplomatie" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0>
                                </td>
                            </tr>

                            <tr>
                                <td class="center background_grey" id="discrétion"><h2>O</h2></td>
                                <td colspan="2">Discrétion</td>
                                <td class="discretion center" id="totaldiscretion">0</td>
                                <td class="background_grey">=</td>
                                <td class="center">DEX</td>
                                <td class="center" id="caracdiscretion">+0</td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <select id="rang_discretion" name="rang_discretion">
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
                                </td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <input id="diversdiscretion" type="text" name="divers_discretion" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0>
                                </td>
                            </tr>

                            <tr>
                                <td class="center background_grey" id="dressage"><h2>O</h2></td>
                                <td colspan="2">Dressage*</td>
                                <td class="dressage center" id="totaldressage">0</td>
                                <td class="background_grey">=</td>
                                <td class="center">CHA</td>
                                <td class="center" id="caracdressage">+0</td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <select id="rang_dressage" name="rang_dressage">
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
                                </td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <input id="diversdressage" type="text" name="divers_dressage" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0>
                                </td>
                            </tr>

                            <tr>
                                <td class="center background_grey" id="equitation"><h2>O</h2></td>
                                <td colspan="2">Equitation</td>
                                <td class="equitation center" id="totalequitation">0</td>
                                <td class="background_grey">=</td>
                                <td class="center">DEX</td>
                                <td class="center" id="caracequitation">+0</td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <select id="rang_equitation" name="rang_equitation">
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
                                </td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <input id="diversequitation" type="text" name="divers_equitation" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0>
                                </td>
                            </tr>

                            <tr>
                                <td class="center background_grey" id="escalade"><h2>O</h2></td>
                                <td colspan="2">Escalade</td>
                                <td class="escalade center" id="totalescalade">0</td>
                                <td class="background_grey">=</td>
                                <td class="center">FOR</td>
                                <td class="center" id="caracescalade">+0</td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <select id="rang_escalade" name="rang_escalade">
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
                                </td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <input id="diversescalade" type="text" name="divers_escalade" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0>
                                </td>
                            </tr>

                            <tr>
                                <td class="center background_grey" id="escamotage"><h2>O</h2></td>
                                <td colspan="2">Escamotage*</td>
                                <td class="escamotage center" id="totalescamotage">0</td>
                                <td class="background_grey">=</td>
                                <td class="center">DEX</td>
                                <td class="center" id="caracescamotage">+0</td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <select id="rang_escamotage" name="rang_escamotage">
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
                                </td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <input id="diversescamotage" type="text" name="divers_escamotage" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0>
                                </td>
                            </tr>

                            <tr>
                                <td class="center background_grey" id="estimation"><h2>O</h2></td>
                                <td colspan="2">Estimation</td>
                                <td class="estimation center" id="totalestimation">0</td>
                                <td class="background_grey">=</td>
                                <td class="center">INT</td>
                                <td class="center" id="caracestimation">+0</td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <select id="rang_estimation" name="rang_estimation">
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
                                </td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <input id="diversestimation" type="text" name="divers_estimation" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0>
                                </td>
                            </tr>

                            <tr>
                                <td class="center background_grey" id="évasion"><h2>O</h2></td>
                                <td colspan="2">Evasion</td>
                                <td class="evasion center" id="totalevasion">0</td>
                                <td class="background_grey">=</td>
                                <td class="center">DEX</td>
                                <td class="center" id="caracevasion">+0</td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <select id="rang_evasion" name="rang_evasion">
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
                                </td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <input id="diversevasion" type="text" name="divers_evasion" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0>
                                </td>
                            </tr>

                            <tr>
                                <td class="center background_grey" id="intimidation"><h2>O</h2></td>
                                <td colspan="2">Intimidation</td>
                                <td class="intimidation center" id="totalintimidation">0</td>
                                <td class="background_grey">=</td>
                                <td class="center">CHA</td>
                                <td class="center" id="caracintimidation">+0</td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <select id="rang_intimidation" name="rang_intimidation">
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
                                </td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <input id="diversintimidation" type="text" name="divers_intimidation" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0>
                                </td>
                            </tr>

                            <tr>
                                <td class="center background_grey" id="Linguistique"><h2>O</h2></td>
                                <td colspan="2">Linguistique*</td>
                                <td class="linguistique center" id="totallinguistique">0</td>
                                <td class="background_grey">=</td>
                                <td class="center">INT</td>
                                <td class="center" id="caraclinguistique">+0</td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <select id="rang_linguistique" name="rang_linguistique">
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
                                </td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <input id="diverslinguistique" type="text" name="divers_linguistique" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0>
                                </td>
                            </tr>

                            <tr>
                                <td class="center background_grey" id="natation"><h2>O</h2></td>
                                <td colspan="2">Natation</td>
                                <td class="natation center" id="totalnatation">0</td>
                                <td class="background_grey">=</td>
                                <td class="center">FOR</td>
                                <td class="center" id="caracnatation">+0</td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <select id="rang_natation" name="rang_natation">
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
                                </td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <input id="diversnatation" type="text" name="divers_natation" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0>
                                </td>
                            </tr>

                            <tr>
                                <td class="center background_grey" id="perception"><h2>O</h2></td>
                                <td colspan="2">Perception</td>
                                <td class="perception center" id="totalperception">0</td>
                                <td class="background_grey">=</td>
                                <td class="center">SAG</td>
                                <td class="center" id="caracperception">+0</td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <select id="rang_perception" name="rang_perception">
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
                                </td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <input id="diversperception" type="text" name="divers_perception" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0>
                                </td>
                            </tr>

                            <tr>
                                <td class="center background_grey" id="premier_secours"><h2>O</h2></td>
                                <td colspan="2">Premier secours</td>
                                <td class="premiersecours center" id="totalpremiersecours">0</td>
                                <td class="background_grey">=</td>
                                <td class="center">SAG</td>
                                <td class="center" id="caracpremiersecours">+0</td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <select id="rang_premiersecours" name="rang_premiersecours">
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
                                </td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <input id="diverspremiersecours" type="text" name="divers_premiersecours" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0>
                                </td>
                            </tr>

                            <tr>
                                <td class="center background_grey" id="profession_I"><h2>O</h2></td>
                                <td>Profession*</td>
                                <td>
                                    <select id="professionType_I" name="professionType_I">
                                    </select>
                                </td>
                                <td class="profession_I center" id="totalprofession_I">0</td>
                                <td class="background_grey">=</td>
                                <td class="center">SAG</td>
                                <td class="center" id="caracprofession_I">+0</td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <select id="rang_profession_I" name="rang_profession_I">
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
                                </td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <input id="diversprofession_I" type="text" name="divers_profession_I" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0>
                                </td>
                            </tr>

                            <tr>
                                <td class="center background_grey" id="profession_II"><h2>O</h2></td>
                                <td>Profession*</td>
                                <td>
                                    <select id="professionType_II" name="professionType_II">
                                    </select>
                                </td>
                                <td class="profession_II center" id="totalprofession_II">0</td>
                                <td class="background_grey">=</td>
                                <td class="center">SAG</td>
                                <td class="center" id="caracprofession_II">+0</td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <select id="rang_profession_II" name="rang_profession_II">
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
                                </td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <input id="diversprofession_II" type="text" name="divers_profession_II" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0>
                                </td>
                            </tr>

                            <tr>
                                <td class="center background_grey" id="psychologie"><h2>O</h2></td>
                                <td colspan="2">Psychologie</td>
                                <td class="psychologie center" id="totalpsychologie">0</td>
                                <td class="background_grey">=</td>
                                <td class="center">SAG</td>
                                <td class="center" id="caracpsychologie">+0</td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <select id="rang_psychologie" name="rang_psychologie">
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
                                </td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <input id="diverspsychologie" type="text" name="divers_psychologie" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0>
                                </td>
                            </tr>

                            <tr>
                                <td class="center background_grey" id="représentation_I"><h2>O</h2></td>
                                <td>Représentation*</td>
                                <td>
                                    <select id="representationType_I" name="professionType_I">
                                    </select>
                                </td>
                                <td class="representation_I center" id="totalrepresentation_I">0</td>
                                <td class="background_grey">=</td>
                                <td class="center">CHA</td>
                                <td class="center" id="caracrepresentation_I">+0</td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <select id="rang_representation_I" name="rang_representation_I">
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
                                </td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <input id="diversrepresentation_I" type="text" name="divers_representation_I" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0>
                                </td>
                            </tr>

                            <tr>
                                <td class="center background_grey" id="représentation_II"><h2>O</h2></td>
                                <td>Représentation*</td>
                                <td>
                                    <select id="representationType_II" name="professionType_II">
                                    </select>
                                </td>
                                <td class="representation_II center" id="totalrepresentation_II">0</td>
                                <td class="background_grey">=</td>
                                <td class="center">CHA</td>
                                <td class="center" id="caracrepresentation_II">+0</td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <select id="rang_representation_II" name="rang_representation_II">
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
                                </td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <input id="diversrepresentation_II" type="text" name="divers_representation_II" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0>
                                </td>
                            </tr>

                            <tr>
                                <td class="center background_grey" id="sabotage"><h2>O</h2></td>
                                <td colspan="2">Sabotage*</td>
                                <td class="sabotage center" id="totalsabotage">0</td>
                                <td class="background_grey">=</td>
                                <td class="center">DEX</td>
                                <td class="center" id="caracsabotage">+0</td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <select id="rang_sabotage" name="rang_sabotage">
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
                                </td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <input id="diverssabotage" type="text" name="divers_sabotage" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0>
                                </td>
                            </tr>

                            <tr>
                                <td class="center background_grey" id="survie"><h2>O</h2></td>
                                <td colspan="2">Survie</td>
                                <td class="survie center" id="totalsurvie">0</td>
                                <td class="background_grey">=</td>
                                <td class="center">SAG</td>
                                <td class="center" id="caracsurvie">+0</td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <select id="rang_survie" name="rang_survie">
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
                                </td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <input id="diverssurvie" type="text" name="divers_survie" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0>
                                </td>
                            </tr>

                            <tr>
                                <td class="center background_grey" id="utilisation_d_objets_magiques"><h2>O</h2></td>
                                <td colspan="2">Utilisation d'objets magiques*</td>
                                <td class="utilisationobjet center" id="totalutilisationobjet">0</td>
                                <td class="background_grey">=</td>
                                <td class="center">CHA</td>
                                <td class="center" id="caracutilisationobjet">+0</td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <select id="rang_utilisationobjet" name="rang_utilisationobjet">
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
                                </td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <input id="diversutilisationobjet" type="text" name="divers_utilisationobjet" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0>
                                </td>
                            </tr>

                            <tr>
                                <td class="center background_grey" id="vol"><h2>O</h2></td>
                                <td colspan="2">Vol</td>
                                <td class="vol center" id="totalvol">0</td>
                                <td class="background_grey">=</td>
                                <td class="center">DEX</td>
                                <td class="center" id="caracvol">+0</td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <select id="rang_vol" name="rang_vol">
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
                                </td>
                                <td class="background_grey">+</td>
                                <td class="center">
                                    <input id="diversvol" type="text" name="divers_vol" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0>
                                </td>
                            </tr>

                            <tr>
                                <td colspan="06"><h2>X Compétence de classe</h2></td>
                                <td colspan="05"><h2>* Formation nécessaire</h2></td>
                            </tr>
                        </table>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-12">
                            <table id="total_competences">
                                <tr>
                                    <td id="somme_competences">Points restants : </td>
                                    <td id="points_restants" name="points_restants" class="center"></td>
                                </tr>
                            </table>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-12">
                        <label id="label_modif_part" for="modif_part">MODIFICATEUR PARTICULIERS</label>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-12">
                        <textarea id="modif_part" name="modif_part" rows="4" cols="90"></textarea>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-12">
                        <label id="label_langues" for="langues">LANGUES</label>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-6">
                        <select id="langueI" name="langueI">
                            <option selected></option>
                            <option>Abyssal</option>
                            <option>Aklo</option>
                            <option>Aquatique</option>
                            <option>Aérien</option>
                            <option>Céleste</option>
                            <option>Commun</option>
                            <option>Commun des profondeurs</option>
                            <option>Draconien</option>
                            <option>Druidique</option>
                            <option>Elfe</option>
                            <option>Géant</option>
                            <option>Gnoll</option>
                            <option>Gnome</option>
                            <option>Gobelin</option>
                            <option>Halfelin</option>
                            <option>Igneux</option>
                            <option>Infernal</option>
                            <option>Nain</option>
                            <option>Orque</option>
                            <option>Sylvestre/Lashunta</option>
                            <option>Terreux</option>
                        </select>
                    </div>

                    <div class="col-lg-6">
                        <select id="langueV" name="langueV">
                            <option selected></option>
                            <option>Abyssal</option>
                            <option>Aklo</option>
                            <option>Aquatique</option>
                            <option>Aérien</option>
                            <option>Céleste</option>
                            <option>Commun</option>
                            <option>Commun des profondeurs</option>
                            <option>Draconien</option>
                            <option>Druidique</option>
                            <option>Elfe</option>
                            <option>Géant</option>
                            <option>Gnoll</option>
                            <option>Gnome</option>
                            <option>Gobelin</option>
                            <option>Halfelin</option>
                            <option>Igneux</option>
                            <option>Infernal</option>
                            <option>Nain</option>
                            <option>Orque</option>
                            <option>Sylvestre/Lashunta</option>
                            <option>Terreux</option>
                        </select>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-6">
                        <select id="langueII" name="langueII">
                            <option selected></option>
                            <option>Abyssal</option>
                            <option>Aklo</option>
                            <option>Aquatique</option>
                            <option>Aérien</option>
                            <option>Céleste</option>
                            <option>Commun</option>
                            <option>Commun des profondeurs</option>
                            <option>Draconien</option>
                            <option>Druidique</option>
                            <option>Elfe</option>
                            <option>Géant</option>
                            <option>Gnoll</option>
                            <option>Gnome</option>
                            <option>Gobelin</option>
                            <option>Halfelin</option>
                            <option>Igneux</option>
                            <option>Infernal</option>
                            <option>Nain</option>
                            <option>Orque</option>
                            <option>Sylvestre/Lashunta</option>
                            <option>Terreux</option>
                        </select>
                    </div>

                    <div class="col-lg-6">
                        <select id="langueVI" name="langueVI">
                            <option selected></option>
                            <option>Abyssal</option>
                            <option>Aklo</option>
                            <option>Aquatique</option>
                            <option>Aérien</option>
                            <option>Céleste</option>
                            <option>Commun</option>
                            <option>Commun des profondeurs</option>
                            <option>Draconien</option>
                            <option>Druidique</option>
                            <option>Elfe</option>
                            <option>Géant</option>
                            <option>Gnoll</option>
                            <option>Gnome</option>
                            <option>Gobelin</option>
                            <option>Halfelin</option>
                            <option>Igneux</option>
                            <option>Infernal</option>
                            <option>Nain</option>
                            <option>Orque</option>
                            <option>Sylvestre/Lashunta</option>
                            <option>Terreux</option>
                        </select>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-6">
                        <select id="langueIII" name="langueIII">
                            <option selected></option>
                            <option>Abyssal</option>
                            <option>Aklo</option>
                            <option>Aquatique</option>
                            <option>Aérien</option>
                            <option>Céleste</option>
                            <option>Commun</option>
                            <option>Commun des profondeurs</option>
                            <option>Draconien</option>
                            <option>Druidique</option>
                            <option>Elfe</option>
                            <option>Géant</option>
                            <option>Gnoll</option>
                            <option>Gnome</option>
                            <option>Gobelin</option>
                            <option>Halfelin</option>
                            <option>Igneux</option>
                            <option>Infernal</option>
                            <option>Nain</option>
                            <option>Orque</option>
                            <option>Sylvestre/Lashunta</option>
                            <option>Terreux</option>
                        </select>
                    </div>

                    <div class="col-lg-6">
                        <select id="langueVII" name="langueVII">
                            <option selected></option>
                            <option>Abyssal</option>
                            <option>Aklo</option>
                            <option>Aquatique</option>
                            <option>Aérien</option>
                            <option>Céleste</option>
                            <option>Commun</option>
                            <option>Commun des profondeurs</option>
                            <option>Draconien</option>
                            <option>Druidique</option>
                            <option>Elfe</option>
                            <option>Géant</option>
                            <option>Gnoll</option>
                            <option>Gnome</option>
                            <option>Gobelin</option>
                            <option>Halfelin</option>
                            <option>Igneux</option>
                            <option>Infernal</option>
                            <option>Nain</option>
                            <option>Orque</option>
                            <option>Sylvestre/Lashunta</option>
                            <option>Terreux</option>
                        </select>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-6">
                        <select id="langueIV" name="langueIV">
                            <option selected></option>
                            <option>Abyssal</option>
                            <option>Aklo</option>
                            <option>Aquatique</option>
                            <option>Aérien</option>
                            <option>Céleste</option>
                            <option>Commun</option>
                            <option>Commun des profondeurs</option>
                            <option>Draconien</option>
                            <option>Druidique</option>
                            <option>Elfe</option>
                            <option>Géant</option>
                            <option>Gnoll</option>
                            <option>Gnome</option>
                            <option>Gobelin</option>
                            <option>Halfelin</option>
                            <option>Igneux</option>
                            <option>Infernal</option>
                            <option>Nain</option>
                            <option>Orque</option>
                            <option>Sylvestre/Lashunta</option>
                            <option>Terreux</option>
                        </select>
                    </div>

                    <div class="col-lg-6">
                        <select id="langueVIII" name="langueVIII">
                            <option selected></option>
                            <option>Abyssal</option>
                            <option>Aklo</option>
                            <option>Aquatique</option>
                            <option>Aérien</option>
                            <option>Céleste</option>
                            <option>Commun</option>
                            <option>Commun des profondeurs</option>
                            <option>Draconien</option>
                            <option>Druidique</option>
                            <option>Elfe</option>
                            <option>Géant</option>
                            <option>Gnoll</option>
                            <option>Gnome</option>
                            <option>Gobelin</option>
                            <option>Halfelin</option>
                            <option>Igneux</option>
                            <option>Infernal</option>
                            <option>Nain</option>
                            <option>Orque</option>
                            <option>Sylvestre/Lashunta</option>
                            <option>Terreux</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
                    
        <div class="row">
            <div class="col-lg-8">
                <div class="row">
                    <div class="col-lg-12">
                        <table id="protection">
                            <tr>
                                <th class="font_white center">PROTECTION</th>
                                <th class="font_white center">BONUS</th>
                                <th class="font_white center">TYPE</th>
                                <th class="font_white center">PENALITE</th>
                                <th class="font_white center">ECHEC DE SORT</th>
                                <th class="font_white center">POIDS</th>
                                <th class="font_white center">PROPRIETE</th>
                            </tr>

                            <tr>
                                <td id="protection_I">
                                    <select id="choix_protection_I" name="choix_protection_I" onChange="calculeProtection()">
                                        <option selected>00</option>
                                        <option>01</option>
                                        <option>02</option>
                                    </select>
                                    <span class="tooltip">Bonus non pris en compte</span>
                                </td>
                                <td id="protection_bonus_I"></td>
                                <td id="protection_type_I"></td>
                                <td id="protection_penalite_I"></td>
                                <td id="protection_echec_I"></td>
                                <td id="protection_poids_I"></td>
                                <td id="protection_propriete_I"></td>
                            </tr>


                            <tr>
                                <td id="protection_II">
                                    <select id="choix_protection_II" name="choix_protection_II" onChange="calculeProtection()">
                                        <option selected>00</option>
                                        <option>01</option>
                                        <option>02</option>
                                    </select>
                                    <span class="tooltip">Bonus non pris en compte</span>
                                </td>
                                <td id="protection_bonus_II"></td>
                                <td id="protection_type_II"></td>
                                <td id="protection_penalite_II"></td>
                                <td id="protection_echec_II"></td>
                                <td id="protection_poids_II"></td>
                                <td id="protection_propriete_II"></td>
                            </tr>

                            <tr>
                                <td id="protection_III">
                                    <select id="choix_protection_III" name="choix_protection_III" onChange="calculeProtection()">
                                        <option selected>00</option>
                                        <option>01</option>
                                        <option>02</option>
                                    </select>
                                    <span class="tooltip">Bonus non pris en compte</span>
                                </td>
                                <td id="protection_bonus_III"></td>
                                <td id="protection_type_III"></td>
                                <td id="protection_penalite_III"></td>
                                <td id="protection_echec_III"></td>
                                <td id="protection_poids_III"></td>
                                <td id="protection_propriete_III"></td>
                            </tr>

                            <tr>
                                <td id="protection_IV">
                                    <select id="choix_protection_IV" name="choix_protection_IV" onChange="calculeProtection()">
                                        <option selected>00</option>
                                        <option>01</option>
                                        <option>02</option>
                                    </select>
                                    <span class="tooltip">Bonus non pris en compte</span>
                                </td>
                                <td id="protection_bonus_IV"></td>
                                <td id="protection_type_IV"></td>
                                <td id="protection_penalite_IV"></td>
                                <td id="protection_echec_IV"></td>
                                <td id="protection_poids_IV"></td>
                                <td id="protection_propriete_IV"></td>
                            </tr>

                            <tr>
                                <td id="protection_V">
                                    <select id="choix_protection_V" name="choix_protection_V" onChange="calculeProtection()">
                                        <option selected>00</option>
                                        <option>01</option>
                                        <option>02</option>
                                    </select>
                                    <span class="tooltip">Bonus non pris en compte</span>
                                </td>
                                <td id="protection_bonus_V"></td>
                                <td id="protection_type_V"></td>
                                <td id="protection_penalite_V"></td>
                                <td id="protection_echec_V"></td>
                                <td id="protection_poids_V"></td>
                                <td id="protection_propriete_V"></td>
                            </tr>
                            <tr>
                                <td class="font_white center">TOTAUX</td>
                                <td id="totaux_protection_bonus"></td>
                                <td id="totaux_protection_type"></td>
                                <td id="totaux_protection_penalite"></td>
                                <td id="totaux_protection_echec"></td>
                                <td id="totaux_protection_poids"></td>
                                <td id="totaux_protection_propriete"></td>
                            </tr>
                        </table>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-4">
                        <div class="row">
                            <div class="col-lg-12">
                                <table id="equipement">
                                    <tr>
                                        <td colspan="2"><label id="label_equip" class="font_white">EQUIPEMENT</label></td>
                                    </tr>

                                    <tr>
                                        <td class="background_grey">OBJET</td>
                                        <td class="background_grey">POIDS</td>
                                    </tr>

                                    <tr>
                                        <td> 
                                            <select name="objet_I" id="objet_I">
                                            </select>
                                        </td>
                                        <td id="poids_I" class="center"></td>
                                    </tr>

                                    <tr>
                                        <td> 
                                            <select name="objet_II" id="objet_II">
                                            </select>
                                        </td>
                                        <td id="poids_II" class="center"></td>
                                    </tr>

                                    <tr>
                                        <td> 
                                            <select name="objet_III" id="objet_III">
                                            </select>
                                        </td>
                                        <td id="poids_III" class="center"></td>
                                    </tr>

                                    <tr>
                                        <td> 
                                            <select name="objet_IV" id="objet_IV">
                                            </select>
                                        </td>
                                        <td id="poids_IV" class="center"></td>
                                    </tr>

                                    <tr>
                                        <td> 
                                            <select name="objet_V" id="objet_V">
                                            </select>
                                        </td>
                                        <td id="poids_V" class="center"></td>
                                    </tr>

                                    <tr>
                                        <td> 
                                            <select name="objet_VI" id="objet_VI">
                                            </select>
                                        </td>
                                        <td id="poids_VI" class="center"></td>
                                    </tr>

                                    <tr>
                                        <td> 
                                            <select name="objet_VII" id="objet_VII">
                                            </select>
                                        </td>
                                        <td id="poids_VII" class="center"></td>
                                    </tr>

                                    <tr>
                                        <td> 
                                            <select name="objet_VIII" id="objet_VIII">
                                            </select>
                                        </td>
                                        <td id="poids_VIII" class="center"></td>
                                    </tr>

                                    <tr>
                                        <td> 
                                            <select name="objet_IX" id="objet_IX">
                                            </select>
                                        </td>
                                        <td id="poids_IX" class="center"></td>
                                    </tr>
                                    <tr>
                                        <td> 
                                            <select name="objet_X" id="objet_X">
                                            </select>
                                        </td>
                                        <td id="poids_X" class="center"></td>
                                    </tr>

                                    <tr>
                                        <td> 
                                            <select name="objet_XI" id="objet_XI">
                                            </select>
                                        </td>
                                        <td id="poids_XI" class="center"></td>
                                    </tr>

                                    <tr>
                                        <td> 
                                            <select name="objet_XII" id="objet_XII">
                                            </select>
                                        </td>
                                        <td id="poids_XII" class="center"></td>
                                    </tr>

                                    <tr>
                                        <td> 
                                            <select name="objet_XIII" id="objet_XIII">
                                            </select>
                                        </td>
                                        <td id="poids_XIII" class="center"></td>
                                    </tr>

                                    <tr>
                                        <td> 
                                            <select name="objet_XIV" id="objet_XIV">
                                            </select>
                                        </td>
                                        <td id="poids_XIV" class="center"></td>
                                    </tr>

                                    <tr>
                                        <td> 
                                            <select name="objet_XV" id="objet_XV">
                                            </select>
                                        </td>
                                        <td id="poids_XV" class="center"></td>
                                    </tr>

                                    <tr>
                                        <td> 
                                            <select name="objet_XVI" id="objet_XVI">
                                            </select>
                                        </td>
                                        <td id="poids_XVI" class="center"></td>
                                    </tr>

                                    <tr>
                                        <td> 
                                            <select name="objet_XVII" id="objet_XVII">
                                            </select>
                                        </td>
                                        <td id="poids_XVII" class="center"></td>
                                    </tr>

                                    <tr>
                                        <td> 
                                            <select name="objet_XVIII" id="objet_XVIII">
                                            </select>
                                        </td>
                                        <td id="poids_XVIII" class="center"></td>
                                    </tr>

                                    <tr>
                                        <td> 
                                            <select name="objet_XIX" id="objet_XIX">
                                            </select>
                                        </td>
                                        <td id="poids_XIX" class="center"></td>
                                    </tr>

                                    <tr>
                                        <td> 
                                            <select name="objet_XX" id="objet_XX">
                                            </select>
                                        </td>
                                        <td id="poids_XX" class="center"></td>
                                    </tr>

                                    <tr>
                                        <td> 
                                            <select name="objet_XXI" id="objet_XXI">
                                            </select>
                                        </td>
                                        <td id="poids_XXI" class="center"></td>
                                    </tr>

                                    <tr>
                                        <td> 
                                            <select name="objet_XXII" id="objet_XXII">
                                            </select>
                                        </td>
                                        <td id="poids_XXII" class="center"></td>
                                    </tr>

                                    <tr>
                                        <td> 
                                            <select name="objet_XXIII" id="objet_XXIII">
                                            </select>
                                        </td>
                                        <td id="poids_XXIII" class="center"></td>
                                    </tr>

                                    <tr>
                                        <td id="label_poids_total" class="font_white">POIDS TOTAL</td>
                                        <td id="poids_total" class="center"></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        
                        <div class="row">
                            <div class="col-lg-12">
                                <table id="capaciteDeCharge">
                                    <tr>
                                        <td class="background_grey">CHARGE LEGERE</td>
                                        <td class="center" id="chargeLegere">0</td>
                                        <td class="background_grey">SOULEVER AU DESSUS DE LA TETE</td>
                                        <td class="center" id="chargeDessus">0</td>
                                    </tr>

                                    <tr>
                                        <td class="background_grey">CHARGE INTERMEDIAIRE</td>
                                        <td class="center" id="chargeIntermediaire">0</td>
                                        <td class="background_grey">DECOLLER DU SOL</td>
                                        <td class="center" id="soulever">0</td>
                                    </tr>

                                    <tr>
                                        <td class="background_grey">CHARGE LOURDE</td>
                                        <td class="center" id="chargeLourde">0</td>
                                        <td class="background_grey">POUSSER OU TIRER</td>
                                        <td class="center" id="PousserOuTirer">0</td>
                                    </tr>
                                </table>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-12">
                                <table id="richesses">
                                    <tr>
                                        <td colspan="4" id="label_richesses" class="font_white">RICHESSES</td>
                                    </tr>

                                    <tr>
                                        <td class="background_grey">PIECES</td>
                                        <td class="background_grey">GEMMES</td>
                                        <td class="background_grey">OBJETS D'ART</td>
                                        <td class="background_grey">AUTRE</td>
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
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-8">
                        <div class="row">
                            <div class="col-lg-12">
                                <table id="table_don">
                                    <tr><th id="label_don" class="font_white">DONS</th></tr>
                                    <tr><td>
                                        <input id="search_I" type="text" />
                                        <div id="results_I"></div>
                                    </td></tr>
                                    <tr><td>
                                        <input id="search_II" type="text" />
                                        <div id="results_II"></div>
                                    </td></tr>
                                    <tr><td>
                                        <input id="search_III" type="text" />
                                        <div id="results_III"></div>
                                    </td></tr>
                                    <tr><td>
                                        <input id="search_IV" type="text" />
                                        <div id="results_IV"></div>
                                    </td></tr>
                                    <tr><td>
                                        <input id="search_V" type="text" />
                                        <div id="results_V"></div>
                                    </td></tr>
                                    <tr><td>
                                        <input id="search_VI" type="text" />
                                        <div id="results_VI"></div>
                                    </td></tr>
                                    <tr><td>
                                        <input id="search_VII" type="text" />
                                        <div id="results_VII"></div>
                                    </td></tr>
                                    <tr><td>
                                        <input id="search_VIII" type="text" />
                                        <div id="results_VIII"></div>
                                    </td></tr>
                                    <tr><td>
                                        <input id="search_IX" type="text" />
                                        <div id="results_IX"></div>
                                    </td></tr>
                                    <tr><td>
                                        <input id="search_X" type="text" />
                                        <div id="results_X"></div>
                                    </td></tr>
                                    <tr><td>
                                        <input id="search_XI" type="text" />
                                        <div id="results_XI"></div>
                                    </td></tr>
                                    <tr><td>
                                        <input id="search_XII" type="text" />
                                        <div id="results_XII"></div>
                                    </td></tr>
                                    <tr><td>
                                        <input id="search_XIII" type="text" />
                                        <div id="results_XIII"></div>
                                    </td></tr>
                                    <tr><td>
                                        <input id="search_XIV" type="text" />
                                        <div id="results_XIV"></div>
                                    </td></tr>
                                    <tr><td>
                                        <input id="search_XV" type="text" />
                                        <div id="results_XV"></div>
                                    </td></tr>
                                    <tr><td>
                                        <input id="search_XVI" type="text" />
                                        <div id="results_XVI"></div>
                                    </td></tr>
                                    <tr><td>
                                        <input id="search_XVII" type="text" />
                                        <div id="results_XVII"></div>
                                    </td></tr>
                                    <tr><td>
                                        <input id="search_XVIII" type="text" />
                                        <div id="results_XVIII"></div>
                                    </td></tr>
                                    <tr><td>
                                        <input id="search_XIX" type="text" />
                                        <div id="results_XIX"></div>
                                    </td></tr>
                                    <tr><td>
                                        <input id="search_XX" type="text" />
                                        <div id="results_XX"></div>
                                    </td></tr>
                                    <tr><td>
                                        <input id="search_XXI" type="text" />
                                        <div id="results_XXI"></div>
                                    </td></tr>
                                </table>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-12">
                                <table id="table_capacites_speciales">
                                    <tr><th id="label_capacites_speciales" class="font_white">CAPACITES SPECIALES</th></tr>
                                    <tr><td id="capacites_speciales_I" name="capacites_speciales_I"></td></tr>
                                    <tr><td id="capacites_speciales_II" name="capacites_speciales_II"></td></tr>
                                    <tr><td id="capacites_speciales_III" name="capacites_speciales_III"></td></tr>
                                    <tr><td id="capacites_speciales_IV" name="capacites_speciales_IV"></td></tr>
                                    <tr><td id="capacites_speciales_V" name="capacites_speciales_V"></td></tr>
                                    <tr><td id="capacites_speciales_VI" name="capacites_speciales_VI"></td></tr>
                                    <tr><td id="capacites_speciales_VII" name="capacites_speciales_VII"></td></tr>
                                    <tr><td id="capacites_speciales_VIII" name="capacites_speciales_VIII"></td></tr>
                                    <tr><td id="capacites_speciales_IX" name="capacites_speciales_IX"></td></tr>
                                    <tr><td id="capacites_speciales_X" name="capacites_speciales_X"></td></tr>
                                    <tr><td id="capacites_speciales_XI" name="capacites_speciales_XI"></td></tr>
                                    <tr><td id="capacites_speciales_XII" name="capacites_speciales_XII"></td></tr>
                                    <tr><td id="capacites_speciales_XIII" name="capacites_speciales_XIII"></td></tr>
                                    <tr><td id="capacites_speciales_XIV" name="capacites_speciales_XIV"></td></tr>
                                    <tr><td id="capacites_speciales_XV" name="capacites_speciales_XV"></td></tr>
                                    <tr><td id="capacites_speciales_XVI" name="capacites_speciales_XVI"></td></tr>
                                    <tr><td id="capacites_speciales_XVII" name="capacites_speciales_XVII"></td></tr>
                                    <tr><td id="capacites_speciales_XVIII" name="capacites_speciales_XVIII"></td></tr>
                                    <tr><td id="capacites_speciales_XIX" name="capacites_speciales_XIX"></td></tr>
                                    <tr><td id="capacites_speciales_XX" name="capacites_speciales_XX"></td></tr>
                                    <tr><td id="capacites_speciales_XXI" name="capacites_speciales_XI"></td></tr>
                                    <tr><td id="capacites_speciales_XXII" name="capacites_speciales_XII"></td></tr>
                                    <tr><td id="capacites_speciales_XXIII" name="capacites_speciales_XIII"></td></tr>
                                    <tr><td id="capacites_speciales_XXIV" name="capacites_speciales_XIV"></td></tr>
                                    <tr><td id="capacites_speciales_XXV" name="capacites_speciales_XV"></td></tr>
                                    <tr><td id="capacites_speciales_XXVI" name="capacites_speciales_XVI"></td></tr>
                                </table>
                            </div>
                        </div>


                        <div class="row">
                            <div class="col-lg-12">
                                <table id="table_traits_raciaux">
                                    <tr><th id="label_traits_raciaux" class="font_white">TRAITS RACIAUX</th></tr>
                                    <tr><td id="traits_raciaux_I" name="traits_raciaux_I"></td></tr>
                                    <tr><td id="traits_raciaux_II" name="traits_raciaux_II"></td></tr>
                                    <tr><td id="traits_raciaux_III" name="traits_raciaux_III"></td></tr>
                                    <tr><td id="traits_raciaux_IV" name="traits_raciaux_IV"></td></tr>
                                    <tr><td id="traits_raciaux_V" name="traits_raciaux_V"></td></tr>
                                    <tr><td id="traits_raciaux_VI" name="traits_raciaux_VI"></td></tr>
                                    <tr><td id="traits_raciaux_VII" name="traits_raciaux_VII"></td></tr>
                                </table>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12">
                                <table id="table_experience">
                                    <tr>
                                        <th id="label_points_experience" class="font_white">POINTS D'EXPERIENCE</th>
                                        <th id="label_niveau" class="font_white">NIVEAU</th>
                                    </tr>

                                    <tr>
                                        <td>
                                            <input id="points_experience" type="text" name="points_experience" size="7" maxlength="7" pattern="[0-9]{1,7}" value=0>
                                        </td>
                                        <td id="niveau_exp" class="center"></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-4">
                <div class="row">
                    <div class="col-lg-12">
                        <table id="table_sorts">
                            <tr>
                                <td colspan="6" id="label_sorts" class="font_white">SORTS</td>
                            </tr>

                            <tr>
                                <td class="background_grey">SORTS CONNUS</td>
                                <td class="background_grey">DD DES SORTS</td>
                                <td class="background_grey" colspan="2">NIVEAU</td>
                                <td class="background_grey">SORTS/JOUR</td>
                                <td class="background_grey">SORTS EN BONUS</td>
                            </tr>

                            <tr>
                                <td id="sorts_connus_0" class="center"></td>
                                <td id="dd_des_sorts_0" class="center"></td>
                                <td class="background_grey" colspan="2">0</td>
                                <td id="sorts_jour_0" class="center"></td>
                                <td id="sorts_en_bonus_0" class="center"></td>
                            </tr>

                            <tr>
                                <td id="sorts_connus_I" class="center"></td>
                                <td id="dd_des_sorts_I" class="center"></td>
                                <td class="background_grey" colspan="2">1er</td>
                                <td id="sorts_jour_I" class="center"></td>
                                <td id="sorts_en_bonus_I" class="center"></td>
                            </tr>

                            <tr>
                                <td id="sorts_connus_II" class="center"></td>
                                <td id="dd_des_sorts_II" class="center"></td>
                                <td class="background_grey" colspan="2">2e</td>
                                <td id="sorts_jour_II" class="center"></td>
                                <td id="sorts_en_bonus_II" class="center"></td>
                            </tr>

                            <tr>
                                <td id="sorts_connus_III" class="center"></td>
                                <td id="dd_des_sorts_III" class="center"></td>
                                <td class="background_grey" colspan="2">3e</td>
                                <td id="sorts_jour_III" class="center"></td>
                                <td id="sorts_en_bonus_III" class="center"></td>
                            </tr>

                            <tr>
                                <td id="sorts_connus_IV" class="center"></td>
                                <td id="dd_des_sorts_IV" class="center"></td>
                                <td class="background_grey" colspan="2">4e</td>
                                <td id="sorts_jour_IV" class="center"></td>
                                <td id="sorts_en_bonus_IV" class="center"></td>
                            </tr>

                            <tr>
                                <td id="sorts_connus_V" class="center"></td>
                                <td id="dd_des_sorts_V" class="center"></td>
                                <td class="background_grey" colspan="2">5e</td>
                                <td id="sorts_jour_V" class="center"></td>
                                <td id="sorts_en_bonus_V" class="center"></td>
                            </tr>

                            <tr>
                                <td id="sorts_connus_VI" class="center"></td>
                                <td id="dd_des_sorts_VI" class="center"></td>
                                <td class="background_grey" colspan="2">6e</td>
                                <td id="sorts_jour_VI" class="center"></td>
                                <td id="sorts_en_bonus_VI" class="center"></td>
                            </tr>

                            <tr>
                                <td id="sorts_connus_VII" class="center"></td>
                                <td id="dd_des_sorts_VII" class="center"></td>
                                <td class="background_grey" colspan="2">7e</td>
                                <td id="sorts_jour_VII" class="center"></td>
                                <td id="sorts_en_bonus_VII" class="center"></td>
                            </tr>

                            <tr>
                                <td id="sorts_connus_VIII" class="center"></td>
                                <td id="dd_des_sorts_VIII" class="center"></td>
                                <td class="background_grey" colspan="2">8e</td>
                                <td id="sorts_jour_VIII" class="center"></td>
                                <td id="sorts_en_bonus_VIII" class="center"></td>
                            </tr>

                            <tr>
                                <td id="sorts_connus_IX" class="center"></td>
                                <td id="dd_des_sorts_IX" class="center"></td>
                                <td class="background_grey" colspan="2">9e</td>
                                <td id="sorts_jour_IX" class="center"></td>
                                <td id="sorts_en_bonus_IX" class="center"></td>
                            </tr>
                        </table>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-12">
                        <div class="row">
                            <div class="col-lg-12">
                                <label id="label_modif_part_sort">MODIFICATEURS PARTICULIERS</label>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-12">
                                <textarea id="modif_part_sort" name="modif_part_sort" rows="4" cols="87"></textarea>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-12">
                        <table id="table_dom_spe">
                            <tr>
                                <td colspan="10" id="label_DOM_SPE">DOMAINES/SPECIALISATION</td>
                            </tr>
                            <tr>
                                <td colspan="10"><select id="dom_spe" name="dom_spe">
                                    <option selected></option>
                                    <option>Spé</option>
                                    <option>Spé</option>
                                </select></td>
                            </tr>

                            <tr>
                                <td>0</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td>
                            </tr>
                            <tr><td colspan="10"><select id="dom_spe_01" name="dom_spe_01">
                                <option selected></option>
                                <option>Spé I</option>
                                <option>Spé II</option>
                            </select></td></tr>
                            <tr><td colspan="10"><select id="dom_spe_02" name="dom_spe_02">
                                <option selected></option>
                                <option>Spé I</option>
                                <option>Spé II</option>
                            </select></td></tr>
                            <tr><td colspan="10"><select id="dom_spe_03" name="dom_spe_03">
                                <option selected></option>
                                <option>Spé I</option>
                                <option>Spé II</option>
                            </select></td></tr>
                            <tr><td colspan="10"><select id="dom_spe_04" name="dom_spe_04">
                                <option selected></option>
                                <option>Spé I</option>
                                <option>Spé II</option>
                            </select></td></tr>
                            <tr><td colspan="10"><select id="dom_spe_05" name="dom_spe_05">
                                <option selected></option>
                                <option>Spé I</option>
                                <option>Spé II</option>
                            </select></td></tr>
                            <tr><td colspan="10"><select id="dom_spe_06" name="dom_spe_06">
                                <option selected></option>
                                <option>Spé I</option>
                                <option>Spé II</option>
                            </select></td></tr>
                            <tr><td colspan="10"><select id="dom_spe_07" name="dom_spe_07">
                                <option selected></option>
                                <option>Spé I</option>
                                <option>Spé II</option>
                            </select></td></tr>

                            <tr>
                                <td>1</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td>
                            </tr>
                            <tr><td colspan="10"><select id="dom_spe_11" name="dom_spe_11"></select></td></tr>
                            <tr><td colspan="10"><select id="dom_spe_12" name="dom_spe_12"></select></td></tr>
                            <tr><td colspan="10"><select id="dom_spe_13" name="dom_spe_13"></select></td></tr>
                            <tr><td colspan="10"><select id="dom_spe_14" name="dom_spe_14"></select></td></tr>
                            <tr><td colspan="10"><select id="dom_spe_15" name="dom_spe_15"></select></td></tr>
                            <tr><td colspan="10"><select id="dom_spe_16" name="dom_spe_16"></select></td></tr>
                            <tr><td colspan="10"><select id="dom_spe_17" name="dom_spe_17"></select></td></tr>

                            <tr>
                                <td>2</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td>
                            </tr>
                            <tr><td colspan="10"><select id="dom_spe_21" name="dom_spe_21"></select></td></tr>
                            <tr><td colspan="10"><select id="dom_spe_22" name="dom_spe_22"></select></td></tr>
                            <tr><td colspan="10"><select id="dom_spe_23" name="dom_spe_23"></select></td></tr>
                            <tr><td colspan="10"><select id="dom_spe_24" name="dom_spe_24"></select></td></tr>
                            <tr><td colspan="10"><select id="dom_spe_25" name="dom_spe_25"></select></td></tr>
                            <tr><td colspan="10"><select id="dom_spe_26" name="dom_spe_26"></select></td></tr>

                            <tr>
                                <td>3</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td>
                            </tr>
                            <tr><td colspan="10"><select id="dom_spe_31" name="dom_spe_31"></select></td></tr>
                            <tr><td colspan="10"><select id="dom_spe_32" name="dom_spe_32"></select></td></tr>
                            <tr><td colspan="10"><select id="dom_spe_33" name="dom_spe_33"></select></td></tr>
                            <tr><td colspan="10"><select id="dom_spe_34" name="dom_spe_34"></select></td></tr>
                            <tr><td colspan="10"><select id="dom_spe_35" name="dom_spe_35"></select></td></tr>

                            <tr>
                                <td>4</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td>
                            </tr>
                            <tr><td colspan="10"><select id="dom_spe_41" name="dom_spe_41"></select></td></tr>
                            <tr><td colspan="10"><select id="dom_spe_42" name="dom_spe_42"></select></td></tr>
                            <tr><td colspan="10"><select id="dom_spe_43" name="dom_spe_43"></select></td></tr>
                            <tr><td colspan="10"><select id="dom_spe_44" name="dom_spe_44"></select></td></tr>

                            <tr>
                                <td>5</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td>
                            </tr>
                            <tr><td colspan="10"><select id="dom_spe_51" name="dom_spe_51"></select></td></tr>
                            <tr><td colspan="10"><select id="dom_spe_52" name="dom_spe_52"></select></td></tr>
                            <tr><td colspan="10"><select id="dom_spe_53" name="dom_spe_53"></select></td></tr>

                            <tr>
                                <td>6</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td>
                            </tr>
                            <tr><td colspan="10"><select id="dom_spe_61" name="dom_spe_61"></select></td></tr>
                            <tr><td colspan="10"><select id="dom_spe_62" name="dom_spe_62"></select></td></tr>
                            <tr><td colspan="10"><select id="dom_spe_63" name="dom_spe_63"></select></td></tr>

                            <tr>
                                <td>7</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td>
                            </tr>
                            <tr><td colspan="10"><select id="dom_spe_71" name="dom_spe_71"></select></td></tr>
                            <tr><td colspan="10"><select id="dom_spe_72" name="dom_spe_72"></select></td></tr>
                            <tr><td colspan="10"><select id="dom_spe_73" name="dom_spe_73"></select></td></tr>

                            <tr>
                                <td>8</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td>
                            </tr>
                            <tr><td colspan="10"><select id="dom_spe_81" name="dom_spe_81"></select></td></tr>
                            <tr><td colspan="10"><select id="dom_spe_82" name="dom_spe_82"></select></td></tr>

                            <tr>
                                <td>9</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td>
                            </tr>
                            <tr><td colspan="10"><select id="dom_spe_91" name="dom_spe_91"></select></td></tr>
                            <tr><td colspan="10"><select id="dom_spe_92" name="dom_spe_92"></select></td></tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </form>
</div>

    <script src="https://code.jquery.com/jquery-3.4.1.js" integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=" crossorigin="anonymous"></script>
    <script type="text/javascript" src="js/color.js"></script>
    <script type="text/javascript" src="js/classe.js"></script>
    <script type="text/javascript" src="js/niveau.js"></script>
    <script type="text/javascript" src="js/race.js"></script>
    <script type="text/javascript" src="js/caracteristique.js"></script>
    <script type="text/javascript" src="js/weapon.js"></script>
    <script type="text/javascript" src="js/competence.js"></script>
    <script type="text/javascript" src="js/equipement.js"></script>
    <script type="text/javascript" src="js/don.js"></script>
    <script type="text/javascript" src="js/main.js"></script>
</body>
</html>
