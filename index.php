
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
    <link rel="stylesheet" href="css/base.css" />
    <!-- script type="text/javascript" src="js/main.js"></script -->
    <!-- script type="text/javascript" src="js/weapon.js"></script -->
    <!-- script src="https://code.jquery.com/jquery-3.4.1.js" integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=" crossorigin="anonymous"></script -->
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
                            <option selected>???</option>
                            <option>Golarion</option>
                            <option>Royaumes oubliés</option>
                        </select>
                        <span class="tooltip">L'origine de la divinité est inconnue</span>
                    </div>
        
                    <div class="col-lg-3">
                        <label id="label_divinite" for="divinite">DIVINITE NOM</label> 
                        <select id="divinite" name="divinite" onChange="influencedivinite()">
                            <option selected>???</option>
                            <option>Abadar</option>
                            <option>Iori</option>
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
                                <th class="caption">MODIF.</th>
                                <th class="caption">VALEUR TEMPORAIRE</th> 
                                <th class="caption">MODIF. TEMPORAIRE</th>
                            </tr>

                            <tr>
                                <td><label id="force" for="for_sai" class="font_white">FOR</label></td>
                                <td id="for_val"></td>
                                <td><input id="for_saisie" type="text" name="for_sai" size="2" maxlength="2" required pattern="[0-9]{1,2}" onChange="influenceFor()"></td>
                                <td id="for_mod" name="for_mod_race"></td>
                                <td id="for_val_temp"></td>
                                <td id="for_mod_temp"></td>
                            </tr>
                
                            <tr>
                                <td><label id="dextérité" for="dex_sai" class="font_white">DEX</label></td>
                                <td id="dex_val"></td>
                                <td><input id="dex_saisie" type="text" name="dex_sai" size="2" maxlength="2" required pattern="[0-9]{1,2}" onChange="influenceDex()"></td>
                                <td id="dex_mod" name="dex_mod_race"></td>
                                <td id="dex_val_temp"></td>
                                <td id="dex_mod_temp"></td>
                            </tr>
                
                            <tr>
                                <td><label id="constitution" for="con_sai" class="font_white">CON</label></td>
                                <td id="con_val"></td>
                                <td><input id="con_saisie" type="text" name="con_sai" size="2" maxlength="2" required pattern="[0-9]{1,2}" onChange="influenceCon()"></td>
                                <td id="con_mod" name="con_mod_race"></td>
                                <td id="con_val_temp"></td>
                                <td id="con_mod_temp"></td>
                            </tr>
                
                            <tr>
                                <td><label id="intelligence" for="int_sai" class="font_white">INT</label></td>
                                <td id="int_val"></td>
                                <td><input id="int_saisie" type="text" name="int_sai" size="2" maxlength="2" required pattern="[0-9]{1,2}" onChange="influenceInt()"></td>
                                <td id="int_mod" name="int_mod_race"></td>
                                <td id="int_val_temp"></td>
                                <td id="int_mod_temp"></td>
                            </tr>
                    
                            <tr>
                                <td><label id="sagesse" for="sag_sai" class="font_white">SAG</label></td>
                                <td id="sag_val"></td>
                                <td><input id="sag_saisie" type="text" name="sag_sai" size="2" maxlength="2" required pattern="[0-9]{1,2}" onChange="influenceSag()"></td>
                                <td id="sag_mod" name="sag_mod_race"></td>
                                <td id="sag_val_temp"></td>
                                <td id="sag_mod_temp"></td>
                            </tr>
                
                            <tr>
                                <td><label id="charisme" for="cha_sai" class="font_white">CHA</label></td>
                                <td id="cha_val"></td>
                                <td><input id="cha_saisie" type="text" name="cha_sai" size="2" maxlength="2" required pattern="[0-9]{1,2}" onChange="influenceCha()"></td>
                                <td id="cha_mod" name="cha_mod_race"></td>
                                <td id="cha_val_temp"></td>
                                <td id="cha_mod_temp"></td>
                            </tr>
                        </table>
                    </div>

                    <div class="col-lg-6">
                        <div class="row">
                            <div class="col-lg-4">
                                <h2 id="label_point_de_vie" class="caption font_white">PV</h2> 
                            </div>

                            <div class="col-lg-4">
                                <label id="label_point_de_vie_total" for="point_de_vie_total">Total</label> 
                                <input id="point_de_vie_total" type="text" name="point_de_vie_total" size="3" maxlength="3" required pattern="[0-9]{1,3}" onChange="influencePv()">
                            </div>
            
                            <div class="col-lg-4">
                                <label id="label_rd" for="rd">RD</label> 
                                <select id="rd" name="rd">
                                    <option>0</option>
                                    <option>1/-</option>
                                    <option>2/-</option>
                                    <option>3/-</option>
                                    <option>4/-</option>
                                    <option>5/-</option>
                                </select>
                                <span class="tooltip">La RD est inconnu</span>
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
                                    <td id="init_total">0</td>
                                    <td class="background_grey">=</td>
                                    <td id="init_mod_dex"></td>
                                    <td class="background_grey">+</td>
                                    <td id="init_mod_div">
                                        <input id="init_mod_div_val" type="text" name="init_mod_div_val" size="2" maxlength="2" required pattern="[0-9]{1,2}" onChange="calculeInit()">
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
                                <td><h2 id="ca" class="font_white">CA</h2></td>
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
                                <td name="ca_mod_dex" id="ca_mod_dex">0</td>
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
                        <label id="lab_pri_depourvu" class="font_white">CA pris au depourvu</label>
                    </div>

                    <div class="col-lg-1">
                        <p id="val_pri_depourvu">0</p>
                    </div>

                    <div class="col-lg-3">
                        <label id="label_mod_part_ca" class="font_white">Modificateur particulier a la CA</label> 
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
                                <td><h2 id="lab_ref" class="font_white">REFLEXES</h2></td>
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
                                <td><h2 id="lab_vig" class="font_white">VIGEUR</h2></td>
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
                                <td><h2 id="lab_vol" class="font_white">VOLONTE</h2></td>
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
                        <label id="label_bba">BONUS DE BASE A L'ATTAQUE</label></td>
                    </div>

                    <div class="col-lg-3">
                        <p id="bba">0</p>
                    </div>
                    
                    <div class="col-lg-3">
                        <label id="label_rm" for="rm">RESISTANCE A LA MAGIE</label> 
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
                                <td><h2 id="lab_bmo" class="font_white">BMO</h2></td>
                                <td id="bmo_total"></td>
                                <td class="background_grey">=</td>
                                <td id="bmo_bon_bas_att"></td>
                                <td class="background_grey">+</td>
                                <td id="bmo_mod_for"></td>
                                <td class="background_grey">+</td>
                                <td id="bmo_mod_tai"></td>
                                <td class="background_grey">+</td>
                                <td id="bmo_mod_div"></td>
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
                                <td><h2 id="lab_dmd" class="font_white">DMD</h2></td>
                                <td id="dmd_total"></td>
                                <td class="background_grey">=</td>
                                <td id="dmd_bon_bas_att"></td>
                                <td class="background_grey">+</td>
                                <td id="dmd_mod_for"></td>
                                <td class="background_grey">+</td>
                                <td id="dmd_mod_dex"></td>
                                <td class="background_grey">+</td>
                                <td id="dmd_mod_tai"></td>
                                <td class="background_grey">+</td>
                                <td id="dmd_mod_div">10</td>
                            </tr>
                        </table>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-6">
                        <label id="label_famille_arme_I" for="famille_arme_I">FAMILLE D'ARME</label> 
                        <select id="famille_arme_I" name="famille_arme_I" onChange="choixFamilleArme('maniement_arme_I',document.form.famille_arme_I,document.form.maniement_arme_I)">
                            <option></option>
                            <option value="armes_courantes">Armes courantes</option>
                            <option value="armes_de_guerre">Arme de guerre</option>
                            <option value="armes_exotiques">Arme exotiques</option>
                        </select>
                        <span class="tooltip">Famille d'arme inconnue</span>
                    </div>

                    <div class="col-lg-6">
                        <label id="label_maniement_arme_I" for="maniement_arme_I">MANIEMENT</label> 
                        <select id="maniement_arme_I" name="maniement_arme_I" onChange="choixManiementArme(document.form.famille_arme_I,'arme_I',document.form.maniement_arme_I,document.form.arme_I)">
                        </select>
                        <span class="tooltip">Maniement d'arme inconnu</span>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-12">
                        <table id="tab_arme_a_I">
                            <tr>
                                <td colspan="3"><label class="font_white">ATTAQUE</label></td>
                                <td><label class="font_white">BONUS A L'ATTAQUE</label></td>
                                <td><label class="font_white">CRITIQUE</label></td>
                            </tr>

                            <tr>
                                <td colspan="3">
                                    <select id="arme_I" name="arme_I" onChange="choixArme(document.form.famille_arme_I,document.form.maniement_arme_I,document.form.arme_I,'degat_I','for_mod',document.form.bonus_I,'critique_I','portee_I','type_I','mun_I')">
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
                                    <span class="tooltip">Bonus non pris en compte</span>
                                </td>
                                <td class="text_center" id="critique_I"></td>
                            </tr>

                            <tr>
                                <td><label class="label_description">TYPE</label></td>
                                <td><label class="label_description">PORTEE</label></td>
                                <td><label class="label_description">MUNITIONS</label></td>
                                <td colspan="2"><label class="label_description">DEGATS</label></td>
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
                        <select id="famille_arme_II" name="famille_arme_II" onChange="choixFamilleArme('maniement_arme_II',document.form.famille_arme_II,document.form.maniement_arme_II)">
                            <option></option>
                            <option value="armes_courantes">Armes courantes</option>
                            <option value="armes_de_guerre">Arme de guerre</option>
                            <option value="armes_exotiques">Arme exotiques</option>
                        </select>
                        <span class="tooltip">Famille d'arme inconnue</span>
                    </div>

                    <div class="col-lg-6">
                        <label id="label_maniement_arme_II" for="maniement_arme_II">MANIEMENT</label> 
                        <select id="maniement_arme_II" name="maniement_arme" onChange="choixManiementArme(document.form.famille_arme_II,'arme_II',document.form.maniement_arme_II,document.form.arme_II)">
                        </select>
                        <span class="tooltip">Maniement d'arme inconnue</span>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-12">
                        <table id="tab_arme_a_II">
                            <tr>
                                <td colspan="3"><label class="font_white">ATTAQUE</label></td>
                                <td><label class="font_white">BONUS A L'ATTAQUE</label></td>
                                <td><label class="font_white">CRITIQUE</label></td>
                            </tr>

                            <tr>
                                <td colspan="3">
                                    <select id="arme_II" name="arme_II" onChange="choixArme(document.form.famille_arme_II,document.form.maniement_arme_II,document.form.arme_II,'degat_II','for_mod',document.form.bonus_II,'critique_II','portee_II','type_II','mun_II')">
                                    </select>
                                </td>

                                <td class="text_center">
                                    <select id="bonus_II" name="bonus" onChange="calculeFrapper(document.form.famille_arme_II,document.form.arme_II,'degat_II','critique_II','portee_II','type_II','mun_II',document.form.maniement_arme_II,'bba','dex_mod','for_mod',document.form.bonus_II,'frapper_II')">
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
                                <td id="critique_II" class="text_center"></td>
                            </tr>

                            <tr>
                                <td><label class="label_description">TYPE</label></td>
                                <td><label class="label_description">PORTEE</label></td>
                                <td><label class="label_description">MUNITIONS</label></td>
                                <td colspan="2"><label class="label_description">DEGATS</label></td>
                            </tr>

                            <tr>
                                <td id="type_II">_</td">
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
                        <select id="famille_arme_III" name="famille_arme_III" onChange="choixFamilleArme('maniement_arme_III',document.form.famille_arme_III,document.form.maniement_arme_III)">
                            <option></option>
                            <option value="armes_courantes">Armes courantes</option>
                            <option value="armes_de_guerre">Arme de guerre</option>
                            <option value="armes_exotiques">Arme exotiques</option>
                        </select>
                        <span class="tooltip">Famille d'arme inconnue</span>
                    </div>

                    <div class="col-lg-6">
                        <label id="label_maniement_arme_III" for="maniement_arme_III">MANIEMENT</label> 
                        <select id="maniement_arme_III" name="maniement_arme" onChange="choixManiementArme(document.form.famille_arme_III,'arme_III',document.form.maniement_arme_III,document.form.arme_III)">
                        </select>
                        <span class="tooltip">Maniement d'arme inconnue</span>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-12">
                        <table id="tab_arme_a_III">
                            <tr>
                                <td colspan="3"><label class="font_white">ATTAQUE</label></td>
                                <td><label class="font_white">BONUS A L'ATTAQUE</label></td>
                                <td><label class="font_white">CRITIQUE</label></td>
                            </tr>

                            <tr>
                                <td colspan="3">
                                    <select id="arme_III" name="arme_III" onChange="choixArme(document.form.famille_arme_III,document.form.maniement_arme_III,document.form.arme_III,'degat_III','for_mod',document.form.bonus_III,'critique_III','portee_III','type_III','mun_III')">
                                    </select>
                                </td>

                                <td class="text_center">
                                    <select id="bonus_III" name="bonus" onChange="calculeFrapper(document.form.famille_arme_III,document.form.arme_III,'degat_III','critique_III','portee_III','type_III','mun_III',document.form.maniement_arme_III,'bba','dex_mod','for_mod',document.form.bonus_III,'frapper_III')">
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
                                <td id="critique_III" class="text_center"></td>
                            </tr>

                            <tr>
                                <td><label class="label_description">TYPE</label></td>
                                <td><label class="label_description">PORTEE</label></td>
                                <td><label class="label_description">MUNITIONS</label></td>
                                <td colspan="2"><label class="label_description">DEGATS</label></td>
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
                        <select id="famille_arme_IV" name="famille_arme_IV" onChange="choixFamilleArme('maniement_arme_IV',document.form.famille_arme_IV,document.form.maniement_arme_IV)">
                            <option></option>
                            <option value="armes_courantes">Armes courantes</option>
                            <option value="armes_de_guerre">Arme de guerre</option>
                            <option value="armes_exotiques">Arme exotiques</option>
                        </select>
                        <span class="tooltip">Famille d'arme inconnue</span>
                    </div>

                    <div class="col-lg-6">
                        <label id="label_maniement_arme_IV" for="maniement_arme_IV">MANIEMENT</label> 
                        <select id="maniement_arme_IV" name="maniement_arme" onChange="choixManiementArme(document.form.famille_arme_IV,'arme_IV',document.form.maniement_arme_IV,document.form.arme_IV)">
                        </select>
                        <span class="tooltip">Maniement d'arme inconnue</span>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-12">
                        <table id="tab_arme_a_IV">
                            <tr>
                                <td colspan="3"><label class="font_white">ATTAQUE</label></td>
                                <td><label class="font_white">BONUS A L'ATTAQUE</label></td>
                                <td><label class="font_white">CRITIQUE</label></td>
                            </tr>

                            <tr>
                                <td colspan="3">
                                    <select id="arme_IV" name="arme_IV" onChange="choixArme(document.form.famille_arme_IV,document.form.maniement_arme_IV,document.form.arme_IV,'degat_IV','for_mod',document.form.bonus_IV,'critique_IV','portee_IV','type_IV','mun_IV')">
                                    </select>
                                </td>

                                <td class="text_center">
                                    <select id="bonus_IV" name="bonus" onChange="calculeFrapper(document.form.famille_arme_IV,document.form.arme_IV,'degat_IV','critique_IV','portee_IV','type_IV','mun_IV',document.form.maniement_arme_IV,'bba','dex_mod','for_mod',document.form.bonus_IV,'frapper_IV')">
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
                                <td id="critique_IV" class="text_center"></td>
                            </tr>

                            <tr>
                                <td><label class="label_description">TYPE</label></td>
                                <td><label class="label_description">PORTEE</label></td>
                                <td><label class="label_description">MUNITIONS</label></td>
                                <td colspan="2"><label class="label_description">DEGATS</label></td>
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
                        <select id="famille_arme_V" name="famille_arme_V" onChange="choixFamilleArme('maniement_arme_V',document.form.famille_arme_V,document.form.maniement_arme_V)">
                            <option></option>
                            <option value="armes_courantes">Armes courantes</option>
                            <option value="armes_de_guerre">Arme de guerre</option>
                            <option value="armes_exotiques">Arme exotiques</option>
                        </select>
                        <span class="tooltip">Famille d'arme inconnue</span>
                    </div>

                    <div class="col-lg-6">
                        <label id="label_maniement_arme_V" for="maniement_arme_V">MANIEMENT</label> 
                        <select id="maniement_arme_V" name="maniement_arme" onChange="choixManiementArme(document.form.famille_arme_V,'arme_V',document.form.maniement_arme_V,document.form.arme_V)">
                        </select>
                        <span class="tooltip">Maniement d'arme inconnue</span>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-12">
                        <table id="tab_arme_a_V">
                            <tr>
                                <td colspan="3"><label class="font_white">ATTAQUE</label></td>
                                <td><label class="font_white">BONUS A L'ATTAQUE</label></td>
                                <td><label class="font_white">CRITIQUE</label></td>
                            </tr>

                            <tr>
                                <td colspan="3">
                                    <select id="arme_V" name="arme_V" onChange="choixArme(document.form.famille_arme_V,document.form.maniement_arme_V,document.form.arme_V,'degat_V','for_mod',document.form.bonus_V,'critique_V','portee_V','type_V','mun_V')">
                                    </select>
                                </td>

                                <td class="text_center">
                                    <select id="bonus_V" name="bonus" onChange="calculeFrapper(document.form.famille_arme_V,document.form.arme_V,'degat_V','critique_V','portee_V','type_V','mun_V',document.form.maniement_arme_V,'bba','dex_mod','for_mod',document.form.bonus_V,'frapper_V')">
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
                                <td id="critique_V" class="text_center"></td>
                            </tr>

                            <tr>
                                <td><label class="label_description">TYPE</label></td>
                                <td><label class="label_description">PORTEE</label></td>
                                <td><label class="label_description">MUNITIONS</label></td>
                                <td colspan="2"><label class="label_description">DEGATS</label></td>
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
                                <td id="vd_sans_armure_metre">0</td>
                                <td id="vd_sans_armure_case">0</td>
                                <td id="vd_avec_armure_metre">0</td>
                                <td id="vd_avec_armure_case">0</td>
                                <td id="vd_mod_divers">0</td>
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
                                <td></td>
                                <td colspan="2" class="background_grey"><h2>NOM DE LA COMPETENCE</h2></td>
                                <td colspan="2"  class="background_grey"><h3>Bonus Total</h3></td>
                                <td colspan="2" class="background_grey"><h3>MOD. DE CARACTERISTIQUE</h3></td>
                                <td colspan="2" class="background_grey"><h3>RANG</h3></td>
                                <td colspan="2" class="background_grey"><h3>MOD. DIVERS</h3></td>
                            </tr>

                            <tr>
                                <td class="de_classe" id="acrobatie"><h2>O</h2></td>
                                <td colspan="2">Acrobatie</td>
                                <td class="acrobatie center" id="totalAcrobatie">10</td>
                                <td class="center">=</td>
                                <td class="carac center">DEX</td>
                                <td class="carac_dex center" id="caracAcrobatie">+2</td>
                                <td class="center">+</td>
                                <td class="center">
                                    <select id="rangAcrobatie" name="rang_acrobatie" 
                                    onChange="calculeCompetence('totalAcrobatie','caracAcrobatie','rangAcrobatie','diversAcrobatie')">
                                    </select>
                                </td>
                                <td class="center">+</td>
                                <td class="center">
                                    <input id="diversAcrobatie" type="text" name="divers_acrobatie" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0 
                                    onChange="calculeCompetence('totalAcrobatie','caracAcrobatie','rangAcrobatie','diversAcrobatie')">
                                </td>
                            </tr>

                            <tr>
                                <td class="de_classe" id="artisanat_I"><h2>O</h2></td>
                                <td colspan="2">Artisanat</td>
                                <td class="artisanat_I center" id="totalartisanat_I">10</td>
                                <td class="center">=</td>
                                <td class="carac center">DEX</td>
                                <td class="carac_dex center" id="caracartisanat_I">+2</td>
                                <td class="center">+</td>
                                <td class="center">
                                    <select id="rangartisanat_I" name="rang_artisanat_I" 
                                    onChange="calculeCompetence('totalartisanat_I','caracartisanat_I','rangartisanat_I','diversartisanat_I')">
                                    </select>
                                </td>
                                <td class="center">+</td>
                                <td class="center">
                                    <input id="diversartisanat_I" type="text" name="divers_artisanat_I" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0 
                                    onChange="calculeCompetence('totalartisanat_I','caracartisanat_I','rangartisanat_I','diversartisanat_I')">
                                </td>
                            </tr>

                            <tr>
                                <td class="de_classe" id="artisanat_II"><h2>O</h2></td>
                                <td colspan="2">Artisanat</td>
                                <td class="artisanat_II center" id="totalartisanat_II">10</td>
                                <td class="center">=</td>
                                <td class="carac center">DEX</td>
                                <td class="carac_dex center" id="caracartisanat_II">+2</td>
                                <td class="center">+</td>
                                <td class="center">
                                    <select id="rangartisanat_II" name="rang_artisanat_II" 
                                    onChange="calculeCompetence('totalartisanat_II','caracartisanat_II','rangartisanat_II','diversartisanat_II')">
                                    </select>
                                </td>
                                <td class="center">+</td>
                                <td class="center">
                                    <input id="diversartisanat_II" type="text" name="divers_artisanat_II" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0 
                                    onChange="calculeCompetence('totalartisanat_II','caracartisanat_II','rangartisanat_II','diversartisanat_II')">
                                </td>
                            </tr>

                            <tr>
                                <td class="de_classe" id="artisanat_III"><h2>O</h2></td>
                                <td colspan="2">Artisanat</td>
                                <td class="artisanat_III center" id="totalartisanat_III">10</td>
                                <td class="center">=</td>
                                <td class="carac center">DEX</td>
                                <td class="carac_dex center" id="caracartisanat_III">+2</td>
                                <td class="center">+</td>
                                <td class="center">
                                    <select id="rangartisanat_III" name="rang_artisanat_III" 
                                    onChange="calculeCompetence('totalartisanat_III','caracartisanat_III','rangartisanat_III','diversartisanat_III')">
                                    </select>
                                </td>
                                <td class="center">+</td>
                                <td class="center">
                                    <input id="diversartisanat_III" type="text" name="divers_artisanat_III" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0 
                                    onChange="calculeCompetence('totalartisanat_III','caracartisanat_III','rangartisanat_III','diversartisanat_III')">
                                </td>
                            </tr>

                            <tr>
                                <td class="de_classe" id="art_de_la_magie"><h2>O</h2></td>
                                <td colspan="2">Art de la magie*</td>
                                <td class="artdelamagie center" id="totalartdelamagie">10</td>
                                <td class="center">=</td>
                                <td class="carac center">DEX</td>
                                <td class="carac_dex center" id="caracartdelamagie">+2</td>
                                <td class="center">+</td>
                                <td class="center">
                                    <select id="rangartdelamagie" name="rang_artdelamagie" 
                                    onChange="calculeCompetence('totalartdelamagie','caracartdelamagie','rangartdelamagie','diversartdelamagie')">
                                    </select>
                                </td>
                                <td class="center">+</td>
                                <td class="center">
                                    <input id="diversartdelamagie" type="text" name="divers_artdelamagie" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0 
                                    onChange="calculeCompetence('totalartdelamagie','caracartdelamagie','rangartdelamagie','diversartdelamagie')">
                                </td>
                            </tr>

                            <tr>
                                <td class="de_classe" id="bluf"><h2>O</h2></td>
                                <td colspan="2">Bluf</td>
                                <td class="bluff center" id="totalbluff">10</td>
                                <td class="center">=</td>
                                <td class="carac center">DEX</td>
                                <td class="carac_dex center" id="caracbluff">+2</td>
                                <td class="center">+</td>
                                <td class="center">
                                    <select id="rangbluff" name="rang_bluff" 
                                    onChange="calculeCompetence('totalbluff','caracbluff','rangbluff','diversbluff')">
                                    </select>
                                </td>
                                <td class="center">+</td>
                                <td class="center">
                                    <input id="diversbluff" type="text" name="divers_bluff" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0 
                                    onChange="calculeCompetence('totalbluff','caracbluff','rangbluff','diversbluff')">
                                </td>
                            </tr>

                            <tr>
                                <td class="de_classe" id="connaissances_I"><h2>O</h2></td>
                                <td colspan="2">Connaissances Exploration*</td>
                                <td class="connaissances_I center" id="totalconnaissances_I">10</td>
                                <td class="center">=</td>
                                <td class="carac center">DEX</td>
                                <td class="carac_dex center" id="caracconnaissances_I">+2</td>
                                <td class="center">+</td>
                                <td class="center">
                                    <select id="rangconnaissances_I" name="rang_connaissances_I" 
                                    onChange="calculeCompetence('totalconnaissances_I','caracconnaissances_I','rangconnaissances_I','diversconnaissances_I')">
                                    </select>
                                </td>
                                <td class="center">+</td>
                                <td class="center">
                                    <input id="diversconnaissances_I" type="text" name="divers_connaissances_I" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0 
                                    onChange="calculeCompetence('totalconnaissances_I','caracconnaissances_I','rangconnaissances_I','diversconnaissances_I')">
                                </td>
                            </tr>

                            <tr>
                                <td class="de_classe" id="connaissances_II"><h2>O</h2></td>
                                <td colspan="2">Connaissances Folklore Locale*</td>
                                <td class="connaissances_II center" id="totalconnaissances_II">10</td>
                                <td class="center">=</td>
                                <td class="carac center">DEX</td>
                                <td class="carac_dex center" id="caracconnaissances_II">+2</td>
                                <td class="center">+</td>
                                <td class="center">
                                    <select id="rangconnaissances_II" name="rang_connaissances_II" 
                                    onChange="calculeCompetence('totalconnaissances_II','caracconnaissances_II','rangconnaissances_II','diversconnaissances_II')">
                                    </select>
                                </td>
                                <td class="center">+</td>
                                <td class="center">
                                    <input id="diversconnaissances_II" type="text" name="divers_connaissances_II" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0 
                                    onChange="calculeCompetence('totalconnaissances_II','caracconnaissances_II','rangconnaissances_II','diversconnaissances_II')">
                                </td>
                            </tr>

                            <tr>
                                <td class="de_classe" id="connaissances_III"><h2>O</h2></td>
                                <td colspan="2">Connaissances Géographie*</td>
                                <td class="connaissances_III center" id="totalconnaissances_III">10</td>
                                <td class="center">=</td>
                                <td class="carac center">DEX</td>
                                <td class="carac_dex center" id="caracconnaissances_III">+2</td>
                                <td class="center">+</td>
                                <td class="center">
                                    <select id="rangconnaissances_III" name="rang_connaissances_III" 
                                    onChange="calculeCompetence('totalconnaissances_III','caracconnaissances_III','rangconnaissances_III','diversconnaissances_III')">
                                    </select>
                                </td>
                                <td class="center">+</td>
                                <td class="center">
                                    <input id="diversconnaissances_III" type="text" name="divers_connaissances_III" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0 
                                    onChange="calculeCompetence('totalconnaissances_III','caracconnaissances_III','rangconnaissances_III','diversconnaissances_III')">
                                </td>
                            </tr>

                            <tr>
                                <td class="de_classe" id="connaissances_IV"><h2>O</h2></td>
                                <td colspan="2">Connaissances Histoire*</td>
                                <td class="connaissances_IV center" id="totalconnaissances_IV">10</td>
                                <td class="center">=</td>
                                <td class="carac center">DEX</td>
                                <td class="carac_dex center" id="caracconnaissances_IV">+2</td>
                                <td class="center">+</td>
                                <td class="center">
                                    <select id="rangconnaissances_IV" name="rang_connaissances_IV" 
                                    onChange="calculeCompetence('totalconnaissances_IV','caracconnaissances_IV','rangconnaissances_IV','diversconnaissances_IV')">
                                    </select>
                                </td>
                                <td class="center">+</td>
                                <td class="center">
                                    <input id="diversconnaissances_IV" type="text" name="divers_connaissances_IV" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0 
                                    onChange="calculeCompetence('totalconnaissances_IV','caracconnaissances_IV','rangconnaissances_IV','diversconnaissances_IV')">
                                </td>
                            </tr>

                            <tr>
                                <td class="de_classe" id="connaissances_V"><h2>O</h2></td>
                                <td colspan="2">Connaissances Ingénieurie*</td>
                                <td class="connaissances_V center" id="totalconnaissances_V">10</td>
                                <td class="center">=</td>
                                <td class="carac center">DEX</td>
                                <td class="carac_dex center" id="caracconnaissances_V">+2</td>
                                <td class="center">+</td>
                                <td class="center">
                                    <select id="rangconnaissances_V" name="rang_connaissances_V" 
                                    onChange="calculeCompetence('totalconnaissances_V','caracconnaissances_V','rangconnaissances_V','diversconnaissances_V')">
                                    </select>
                                </td>
                                <td class="center">+</td>
                                <td class="center">
                                    <input id="diversconnaissances_V" type="text" name="divers_connaissances_V" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0 
                                    onChange="calculeCompetence('totalconnaissances_V','caracconnaissances_V','rangconnaissances_V','diversconnaissances_V')">
                                </td>
                            </tr>

                            <tr>
                                <td class="de_classe" id="connaissances_VI"><h2>O</h2></td>
                                <td colspan="2">Connaissances Mystères*</td>
                                <td class="connaissances_VI center" id="totalconnaissances_VI">10</td>
                                <td class="center">=</td>
                                <td class="carac center">DEX</td>
                                <td class="carac_dex center" id="caracconnaissances_VI">+2</td>
                                <td class="center">+</td>
                                <td class="center">
                                    <select id="rangconnaissances_VI" name="rang_connaissances_VI" 
                                    onChange="calculeCompetence('totalconnaissances_VI','caracconnaissances_VI','rangconnaissances_VI','diversconnaissances_VI')">
                                    </select>
                                </td>
                                <td class="center">+</td>
                                <td class="center">
                                    <input id="diversconnaissances_VI" type="text" name="divers_connaissances_VI" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0 
                                    onChange="calculeCompetence('totalconnaissances_VI','caracconnaissances_VI','rangconnaissances_VI','diversconnaissances_VI')">
                                </td>
                            </tr>

                            <tr>
                                <td class="de_classe" id="connaissances_VII"><h2>O</h2></td>
                                <td colspan="2">Connaissances Nature*</td>
                                <td class="connaissances_VII center" id="totalconnaissances_VII">10</td>
                                <td class="center">=</td>
                                <td class="carac center">DEX</td>
                                <td class="carac_dex center" id="caracconnaissances_VII">+2</td>
                                <td class="center">+</td>
                                <td class="center">
                                    <select id="rangconnaissances_VII" name="rang_connaissances_VII" 
                                    onChange="calculeCompetence('totalconnaissances_VII','caracconnaissances_VII','rangconnaissances_VII','diversconnaissances_VII')">
                                    </select>
                                </td>
                                <td class="center">+</td>
                                <td class="center">
                                    <input id="diversconnaissances_VII" type="text" name="divers_connaissances_VII" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0 
                                    onChange="calculeCompetence('totalconnaissances_VII','caracconnaissances_VII','rangconnaissances_VII','diversconnaissances_VII')">
                                </td>
                            </tr>

                            <tr>
                                <td class="de_classe" id="connaissances_VIII"><h2>O</h2></td>
                                <td colspan="2">Connaissances Noblesse*</td>
                                <td class="connaissances_VIII center" id="totalconnaissances_VIII">10</td>
                                <td class="center">=</td>
                                <td class="carac center">DEX</td>
                                <td class="carac_dex center" id="caracconnaissances_VIII">+2</td>
                                <td class="center">+</td>
                                <td class="center">
                                    <select id="rangconnaissances_VIII" name="rang_connaissances_VIII" 
                                    onChange="calculeCompetence('totalconnaissances_VIII','caracconnaissances_VIII','rangconnaissances_VIII','diversconnaissances_VIII')">
                                    </select>
                                </td>
                                <td class="center">+</td>
                                <td class="center">
                                    <input id="diversconnaissances_VIII" type="text" name="divers_connaissances_VIII" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0 
                                    onChange="calculeCompetence('totalconnaissances_VIII','caracconnaissances_VIII','rangconnaissances_VIII','diversconnaissances_VIII')">
                                </td>
                            </tr>

                            <tr>
                                <td class="de_classe" id="connaissances_IX"><h2>O</h2></td>
                                <td colspan="2">Connaissances Plan*</td>
                                <td class="connaissances_IX center" id="totalconnaissances_IX">10</td>
                                <td class="center">=</td>
                                <td class="carac center">DEX</td>
                                <td class="carac_dex center" id="caracconnaissances_IX">+2</td>
                                <td class="center">+</td>
                                <td class="center">
                                    <select id="rangconnaissances_IX" name="rang_connaissances_IX" 
                                    onChange="calculeCompetence('totalconnaissances_IX','caracconnaissances_IX','rangconnaissances_IX','diversconnaissances_IX')">
                                    </select>
                                </td>
                                <td class="center">+</td>
                                <td class="center">
                                    <input id="diversconnaissances_IX" type="text" name="divers_connaissances_IX" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0 
                                    onChange="calculeCompetence('totalconnaissances_IX','caracconnaissances_IX','rangconnaissances_IX','diversconnaissances_IX')">
                                </td>
                            </tr>

                            <tr>
                                <td class="de_classe" id="connaissances_X"><h2>O</h2></td>
                                <td colspan="2">Connaissances Religion*</td>
                                <td class="connaissances_X center" id="totalconnaissances_X">10</td>
                                <td class="center">=</td>
                                <td class="carac center">DEX</td>
                                <td class="carac_dex center" id="caracconnaissances_X">+2</td>
                                <td class="center">+</td>
                                <td class="center">
                                    <select id="rangconnaissances_X" name="rang_connaissances_X" 
                                    onChange="calculeCompetence('totalconnaissances_X','caracconnaissances_X','rangconnaissances_X','diversconnaissances_X')">
                                    </select>
                                </td>
                                <td class="center">+</td>
                                <td class="center">
                                    <input id="diversconnaissances_X" type="text" name="divers_connaissances_X" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0 
                                    onChange="calculeCompetence('totalconnaissances_X','caracconnaissances_X','rangconnaissances_X','diversconnaissances_X')">
                                </td>
                            </tr>

                            <tr>
                                <td class="de_classe" id="déguisement"><h2>O</h2></td>
                                <td colspan="2">Déguisement</td>
                                <td class="deguisement center" id="totaldeguisement">10</td>
                                <td class="center">=</td>
                                <td class="carac center">DEX</td>
                                <td class="carac_dex center" id="caracdeguisement">+2</td>
                                <td class="center">+</td>
                                <td class="center">
                                    <select id="rangdeguisement" name="rang_deguisement" 
                                    onChange="calculeCompetence('totaldeguisement','caracdeguisement','rangdeguisement','diversdeguisement')">
                                    </select>
                                </td>
                                <td class="center">+</td>
                                <td class="center">
                                    <input id="diversdeguisement" type="text" name="divers_deguisement" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0 
                                    onChange="calculeCompetence('totaldeguisement','caracdeguisement','rangdeguisement','diversdeguisement')">
                                </td>
                            </tr>

                            <tr>
                                <td class="de_classe" id="diplomatie"><h2>O</h2></td>
                                <td colspan="2">Diplomatie</td>
                                <td class="diplomatie center" id="totaldiplomatie">10</td>
                                <td class="center">=</td>
                                <td class="carac center">DEX</td>
                                <td class="carac_dex center" id="caracdiplomatie">+2</td>
                                <td class="center">+</td>
                                <td class="center">
                                    <select id="rangdiplomatie" name="rang_diplomatie" 
                                    onChange="calculeCompetence('totaldiplomatie','caracdiplomatie','rangdiplomatie','diversdiplomatie')">
                                    </select>
                                </td>
                                <td class="center">+</td>
                                <td class="center">
                                    <input id="diversdiplomatie" type="text" name="divers_diplomatie" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0 
                                    onChange="calculeCompetence('totaldiplomatie','caracdiplomatie','rangdiplomatie','diversdiplomatie')">
                                </td>
                            </tr>

                            <tr>
                                <td class="de_classe" id="discrétion"><h2>O</h2></td>
                                <td colspan="2">Discrétion</td>
                                <td class="discretion center" id="totaldiscretion">10</td>
                                <td class="center">=</td>
                                <td class="carac center">DEX</td>
                                <td class="carac_dex center" id="caracdiscretion">+2</td>
                                <td class="center">+</td>
                                <td class="center">
                                    <select id="rangdiscretion" name="rang_discretion" 
                                    onChange="calculeCompetence('totaldiscretion','caracdiscretion','rangdiscretion','diversdiscretion')">
                                    </select>
                                </td>
                                <td class="center">+</td>
                                <td class="center">
                                    <input id="diversdiscretion" type="text" name="divers_discretion" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0 
                                    onChange="calculeCompetence('totaldiscretion','caracdiscretion','rangdiscretion','diversdiscretion')">
                                </td>
                            </tr>

                            <tr>
                                <td class="de_classe" id="dressage"><h2>O</h2></td>
                                <td colspan="2">Dressage*</td>
                                <td class="dressage center" id="totaldressage">10</td>
                                <td class="center">=</td>
                                <td class="carac center">DEX</td>
                                <td class="carac_dex center" id="caracdressage">+2</td>
                                <td class="center">+</td>
                                <td class="center">
                                    <select id="rangdressage" name="rang_dressage" 
                                    onChange="calculeCompetence('totaldressage','caracdressage','rangdressage','diversdressage')">
                                    </select>
                                </td>
                                <td class="center">+</td>
                                <td class="center">
                                    <input id="diversdressage" type="text" name="divers_dressage" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0 
                                    onChange="calculeCompetence('totaldressage','caracdressage','rangdressage','diversdressage')">
                                </td>
                            </tr>

                            <tr>
                                <td class="de_classe" id="equitation"><h2>O</h2></td>
                                <td colspan="2">Equitation</td>
                                <td class="equitation center" id="totalequitation">10</td>
                                <td class="center">=</td>
                                <td class="carac center">DEX</td>
                                <td class="carac_dex center" id="caracequitation">+2</td>
                                <td class="center">+</td>
                                <td class="center">
                                    <select id="rangequitation" name="rang_equitation" 
                                    onChange="calculeCompetence('totalequitation','caracequitation','rangequitation','diversequitation')">
                                    </select>
                                </td>
                                <td class="center">+</td>
                                <td class="center">
                                    <input id="diversequitation" type="text" name="divers_equitation" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0 
                                    onChange="calculeCompetence('totalequitation','caracequitation','rangequitation','diversequitation')">
                                </td>
                            </tr>

                            <tr>
                                <td class="de_classe" id="escalade"><h2>O</h2></td>
                                <td colspan="2">Escalade</td>
                                <td class="escalade center" id="totalescalade">10</td>
                                <td class="center">=</td>
                                <td class="carac center">DEX</td>
                                <td class="carac_dex center" id="caracescalade">+2</td>
                                <td class="center">+</td>
                                <td class="center">
                                    <select id="rangescalade" name="rang_escalade" 
                                    onChange="calculeCompetence('totalescalade','caracescalade','rangescalade','diversescalade')">
                                    </select>
                                </td>
                                <td class="center">+</td>
                                <td class="center">
                                    <input id="diversescalade" type="text" name="divers_escalade" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0 
                                    onChange="calculeCompetence('totalescalade','caracescalade','rangescalade','diversescalade')">
                                </td>
                            </tr>

                            <tr>
                                <td class="de_classe" id="escamotage"><h2>O</h2></td>
                                <td colspan="2">Escamotage*</td>
                                <td class="escamotage center" id="totalescamotage">10</td>
                                <td class="center">=</td>
                                <td class="carac center">DEX</td>
                                <td class="carac_dex center" id="caracescamotage">+2</td>
                                <td class="center">+</td>
                                <td class="center">
                                    <select id="rangescamotage" name="rang_escamotage" 
                                    onChange="calculeCompetence('totalescamotage','caracescamotage','rangescamotage','diversescamotage')">
                                    </select>
                                </td>
                                <td class="center">+</td>
                                <td class="center">
                                    <input id="diversescamotage" type="text" name="divers_escamotage" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0 
                                    onChange="calculeCompetence('totalescamotage','caracescamotage','rangescamotage','diversescamotage')">
                                </td>
                            </tr>

                            <tr>
                                <td class="de_classe" id="estimation"><h2>O</h2></td>
                                <td colspan="2">Estimation</td>
                                <td class="estimation center" id="totalestimation">10</td>
                                <td class="center">=</td>
                                <td class="carac center">DEX</td>
                                <td class="carac_dex center" id="caracestimation">+2</td>
                                <td class="center">+</td>
                                <td class="center">
                                    <select id="rangestimation" name="rang_estimation" 
                                    onChange="calculeCompetence('totalestimation','caracestimation','rangestimation','diversestimation')">
                                    </select>
                                </td>
                                <td class="center">+</td>
                                <td class="center">
                                    <input id="diversestimation" type="text" name="divers_estimation" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0 
                                    onChange="calculeCompetence('totalestimation','caracestimation','rangestimation','diversestimation')">
                                </td>
                            </tr>

                            <tr>
                                <td class="de_classe" id="évasion"><h2>O</h2></td>
                                <td colspan="2">Evasion</td>
                                <td class="evasion center" id="totalevasion">10</td>
                                <td class="center">=</td>
                                <td class="carac center">DEX</td>
                                <td class="carac_dex center" id="caracevasion">+2</td>
                                <td class="center">+</td>
                                <td class="center">
                                    <select id="rangevasion" name="rang_evasion" 
                                    onChange="calculeCompetence('totalevasion','caracevasion','rangevasion','diversevasion')">
                                    </select>
                                </td>
                                <td class="center">+</td>
                                <td class="center">
                                    <input id="diversevasion" type="text" name="divers_evasion" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0 
                                    onChange="calculeCompetence('totalevasion','caracevasion','rangevasion','diversevasion')">
                                </td>
                            </tr>

                            <tr>
                                <td class="de_classe" id="intimidation"><h2>O</h2></td>
                                <td colspan="2">Intimidation</td>
                                <td class="intimidation center" id="totalintimidation">10</td>
                                <td class="center">=</td>
                                <td class="carac center">DEX</td>
                                <td class="carac_dex center" id="caracintimidation">+2</td>
                                <td class="center">+</td>
                                <td class="center">
                                    <select id="rangintimidation" name="rang_intimidation" 
                                    onChange="calculeCompetence('totalintimidation','caracintimidation','rangintimidation','diversintimidation')">
                                    </select>
                                </td>
                                <td class="center">+</td>
                                <td class="center">
                                    <input id="diversintimidation" type="text" name="divers_intimidation" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0 
                                    onChange="calculeCompetence('totalintimidation','caracintimidation','rangintimidation','diversintimidation')">
                                </td>
                            </tr>

                            <tr>
                                <td class="de_classe" id="langues"><h2>O</h2></td>
                                <td colspan="2">Linguistique*</td>
                                <td class="linguistique center" id="totallinguistique">10</td>
                                <td class="center">=</td>
                                <td class="carac center">DEX</td>
                                <td class="carac_dex center" id="caraclinguistique">+2</td>
                                <td class="center">+</td>
                                <td class="center">
                                    <select id="ranglinguistique" name="rang_linguistique" 
                                    onChange="calculeCompetence('totallinguistique','caraclinguistique','ranglinguistique','diverslinguistique')">
                                    </select>
                                </td>
                                <td class="center">+</td>
                                <td class="center">
                                    <input id="diverslinguistique" type="text" name="divers_linguistique" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0 
                                    onChange="calculeCompetence('totallinguistique','caraclinguistique','ranglinguistique','diverslinguistique')">
                                </td>
                            </tr>

                            <tr>
                                <td class="de_classe" id="natation"><h2>O</h2></td>
                                <td colspan="2">Natation</td>
                                <td class="natation center" id="totalnatation">10</td>
                                <td class="center">=</td>
                                <td class="carac center">DEX</td>
                                <td class="carac_dex center" id="caracnatation">+2</td>
                                <td class="center">+</td>
                                <td class="center">
                                    <select id="rangnatation" name="rang_natation" 
                                    onChange="calculeCompetence('totalnatation','caracnatation','rangnatation','diversnatation')">
                                    </select>
                                </td>
                                <td class="center">+</td>
                                <td class="center">
                                    <input id="diversnatation" type="text" name="divers_natation" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0 
                                    onChange="calculeCompetence('totalnatation','caracnatation','rangnatation','diversnatation')">
                                </td>
                            </tr>

                            <tr>
                                <td class="de_classe" id="perception"><h2>O</h2></td>
                                <td colspan="2">Perception</td>
                                <td class="perception center" id="totalperception">10</td>
                                <td class="center">=</td>
                                <td class="carac center">DEX</td>
                                <td class="carac_dex center" id="caracperception">+2</td>
                                <td class="center">+</td>
                                <td class="center">
                                    <select id="rangperception" name="rang_perception" 
                                    onChange="calculeCompetence('totalperception','caracperception','rangperception','diversperception')">
                                    </select>
                                </td>
                                <td class="center">+</td>
                                <td class="center">
                                    <input id="diversperception" type="text" name="divers_perception" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0 
                                    onChange="calculeCompetence('totalperception','caracperception','rangperception','diversperception')">
                                </td>
                            </tr>

                            <tr>
                                <td class="de_classe" id="premier_secours"><h2>O</h2></td>
                                <td colspan="2">Premier secours</td>
                                <td class="premiersecours center" id="totalpremiersecours">10</td>
                                <td class="center">=</td>
                                <td class="carac center">DEX</td>
                                <td class="carac_dex center" id="caracpremiersecours">+2</td>
                                <td class="center">+</td>
                                <td class="center">
                                    <select id="rangpremiersecours" name="rang_premiersecours" 
                                    onChange="calculeCompetence('totalpremiersecours','caracpremiersecours','rangpremiersecours','diverspremiersecours')">
                                    </select>
                                </td>
                                <td class="center">+</td>
                                <td class="center">
                                    <input id="diverspremiersecours" type="text" name="divers_premiersecours" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0 
                                    onChange="calculeCompetence('totalpremiersecours','caracpremiersecours','rangpremiersecours','diverspremiersecours')">
                                </td>
                            </tr>

                            <tr>
                                <td class="de_classe" id="profession_I"><h2>O</h2></td>
                                <td colspan="2">Profession*</td>
                                <td class="profession_I center" id="totalprofession_I">10</td>
                                <td class="center">=</td>
                                <td class="carac center">DEX</td>
                                <td class="carac_dex center" id="caracprofession_I">+2</td>
                                <td class="center">+</td>
                                <td class="center">
                                    <select id="rangprofession_I" name="rang_profession_I" 
                                    onChange="calculeCompetence('totalprofession_I','caracprofession_I','rangprofession_I','diversprofession_I')">
                                    </select>
                                </td>
                                <td class="center">+</td>
                                <td class="center">
                                    <input id="diversprofession_I" type="text" name="divers_profession_I" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0 
                                    onChange="calculeCompetence('totalprofession_I','caracprofession_I','rangprofession_I','diversprofession_I')">
                                </td>
                            </tr>

                            <tr>
                                <td class="de_classe" id="profession_II"><h2>O</h2></td>
                                <td colspan="2">Profession*</td>
                                <td class="profession_II center" id="totalprofession_II">10</td>
                                <td class="center">=</td>
                                <td class="carac center">DEX</td>
                                <td class="carac_dex center" id="caracprofession_II">+2</td>
                                <td class="center">+</td>
                                <td class="center">
                                    <select id="rangprofession_II" name="rang_profession_II" 
                                    onChange="calculeCompetence('totalprofession_II','caracprofession_II','rangprofession_II','diversprofession_II')">
                                    </select>
                                </td>
                                <td class="center">+</td>
                                <td class="center">
                                    <input id="diversprofession_II" type="text" name="divers_profession_II" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0 
                                    onChange="calculeCompetence('totalprofession_II','caracprofession_II','rangprofession_II','diversprofession_II')">
                                </td>
                            </tr>

                            <tr>
                                <td class="de_classe" id="psychologie"><h2>O</h2></td>
                                <td colspan="2">Psychologie</td>
                                <td class="psychologie center" id="totalpsychologie">10</td>
                                <td class="center">=</td>
                                <td class="carac center">DEX</td>
                                <td class="carac_dex center" id="caracpsychologie">+2</td>
                                <td class="center">+</td>
                                <td class="center">
                                    <select id="rangpsychologie" name="rang_psychologie" 
                                    onChange="calculeCompetence('totalpsychologie','caracpsychologie','rangpsychologie','diverspsychologie')">
                                    </select>
                                </td>
                                <td class="center">+</td>
                                <td class="center">
                                    <input id="diverspsychologie" type="text" name="divers_psychologie" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0 
                                    onChange="calculeCompetence('totalpsychologie','caracpsychologie','rangpsychologie','diverspsychologie')">
                                </td>
                            </tr>

                            <tr>
                                <td class="de_classe" id="représentation_I"><h2>O</h2></td>
                                <td colspan="2">Représentation</td>
                                <td class="representation_I center" id="totalrepresentation_I">10</td>
                                <td class="center">=</td>
                                <td class="carac center">DEX</td>
                                <td class="carac_dex center" id="caracrepresentation_I">+2</td>
                                <td class="center">+</td>
                                <td class="center">
                                    <select id="rangrepresentation_I" name="rang_representation_I" 
                                    onChange="calculeCompetence('totalrepresentation_I','caracrepresentation_I','rangrepresentation_I','diversrepresentation_I')">
                                    </select>
                                </td>
                                <td class="center">+</td>
                                <td class="center">
                                    <input id="diversrepresentation_I" type="text" name="divers_representation_I" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0 
                                    onChange="calculeCompetence('totalrepresentation_I','caracrepresentation_I','rangrepresentation_I','diversrepresentation_I')">
                                </td>
                            </tr>

                            <tr>
                                <td class="de_classe" id="représentation_II"><h2>O</h2></td>
                                <td colspan="2">Représentation</td>
                                <td class="representation_II center" id="totalrepresentation_II">10</td>
                                <td class="center">=</td>
                                <td class="carac center">DEX</td>
                                <td class="carac_dex center" id="caracrepresentation_II">+2</td>
                                <td class="center">+</td>
                                <td class="center">
                                    <select id="rangrepresentation_II" name="rang_representation_II" 
                                    onChange="calculeCompetence('totalrepresentation_II','caracrepresentation_II','rangrepresentation_II','diversrepresentation_II')">
                                    </select>
                                </td>
                                <td class="center">+</td>
                                <td class="center">
                                    <input id="diversrepresentation_II" type="text" name="divers_representation_II" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0 
                                    onChange="calculeCompetence('totalrepresentation_II','caracrepresentation_II','rangrepresentation_II','diversrepresentation_II')">
                                </td>
                            </tr>

                            <tr>
                                <td class="de_classe" id="sabotage"><h2>O</h2></td>
                                <td colspan="2">Sabotage*</td>
                                <td class="sabotage center" id="totalsabotage">10</td>
                                <td class="center">=</td>
                                <td class="carac center">DEX</td>
                                <td class="carac_dex center" id="caracsabotage">+2</td>
                                <td class="center">+</td>
                                <td class="center">
                                    <select id="rangsabotage" name="rang_sabotage" 
                                    onChange="calculeCompetence('totalsabotage','caracsabotage','rangsabotage','diverssabotage')">
                                    </select>
                                </td>
                                <td class="center">+</td>
                                <td class="center">
                                    <input id="diverssabotage" type="text" name="divers_sabotage" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0 
                                    onChange="calculeCompetence('totalsabotage','caracsabotage','rangsabotage','diverssabotage')">
                                </td>
                            </tr>

                            <tr>
                                <td class="de_classe" id="survie"><h2>O</h2></td>
                                <td colspan="2">Survie</td>
                                <td class="survie center" id="totalsurvie">10</td>
                                <td class="center">=</td>
                                <td class="carac center">DEX</td>
                                <td class="carac_dex center" id="caracsurvie">+2</td>
                                <td class="center">+</td>
                                <td class="center">
                                    <select id="rangsurvie" name="rang_survie" 
                                    onChange="calculeCompetence('totalsurvie','caracsurvie','rangsurvie','diverssurvie')">
                                    </select>
                                </td>
                                <td class="center">+</td>
                                <td class="center">
                                    <input id="diverssurvie" type="text" name="divers_survie" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0 
                                    onChange="calculeCompetence('totalsurvie','caracsurvie','rangsurvie','diverssurvie')">
                                </td>
                            </tr>

                            <tr>
                                <td class="de_classe" id="utilisation_d_objets_magiques"><h2>O</h2></td>
                                <td colspan="2">Utilisation d'objets magiques*</td>
                                <td class="utilisationobjet center" id="totalutilisationobjet">10</td>
                                <td class="center">=</td>
                                <td class="carac center">DEX</td>
                                <td class="carac_dex center" id="caracutilisationobjet">+2</td>
                                <td class="center">+</td>
                                <td class="center">
                                    <select id="rangutilisationobjet" name="rang_utilisationobjet" 
                                    onChange="calculeCompetence('totalutilisationobjet','caracutilisationobjet','rangutilisationobjet','diversutilisationobjet')">
                                    </select>
                                </td>
                                <td class="center">+</td>
                                <td class="center">
                                    <input id="diversutilisationobjet" type="text" name="divers_utilisationobjet" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0 
                                    onChange="calculeCompetence('totalutilisationobjet','caracutilisationobjet','rangutilisationobjet','diversutilisationobjet')">
                                </td>
                            </tr>

                            <tr>
                                <td class="de_classe" id="vol"><h2>O</h2></td>
                                <td colspan="2">Vol</td>
                                <td class="vol center" id="totalvol">10</td>
                                <td class="center">=</td>
                                <td class="carac center">DEX</td>
                                <td class="carac_dex center" id="caracvol">+2</td>
                                <td class="center">+</td>
                                <td class="center">
                                    <select id="rangvol" name="rang_vol" 
                                    onChange="calculeCompetence('totalvol','caracvol','rangvol','diversvol')">
                                    </select>
                                </td>
                                <td class="center">+</td>
                                <td class="center">
                                    <input id="diversvol" type="text" name="divers_vol" size="2" maxlength="2" pattern="[0-9]{1,2}" value=0 
                                    onChange="calculeCompetence('totalvol','caracvol','rangvol','diversvol')">
                                </td>
                            </tr>

                            <tr>
                                <td colspan="06"><h2>@ Compétence de classe</h2></td>
                                <td colspan="05"><h2>* Formation nécessaire</h2></td>
                            </tr>
                        </table>
                    </div>

                    <div class="row">
                        <div class="col-lg-12">
                            <input id="somme_compétences" type="button" name="Somme compétences" value="Somme compétences" id="Somme_compétences" onClick="calculeSommeCompetences()">
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
                        <div class="col-lg-12">
                            <textarea id="langues" name="langues" rows="4" cols="90"></textarea>
                        </div>
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
                                <th>PROTECTION</th>
                                <th>BONUS</th>
                                <th>TYPE</th>
                                <th>PENALITE</th>
                                <th>ECHEC DE SORT</th>
                                <th>POIDS</th>
                                <th>PROPRIETE</th>
                            </tr>

                            <tr>
                                <td id="protection_I">
                                    <select id="choix_protection_I" name="choix_protection_I" onChange="calculeProtection()">
                                    </select>
                                    <span class="tooltip">Bonus non pris en compte</span>
                                </td>
                                <td id="protection_bonus_I">a</td>
                                <td id="protection_type_I">a</td>
                                <td id="protection_penalite_I">a</td>
                                <td id="protection_echec_I">a</td>
                                <td id="protection_poids_I">a</td>
                                <td id="protection_propriete_I">a</td>
                            </tr>

                            <tr>
                                <td>TOTAUX</td>
                                <td id="totaux_protection_bonus">0</td>
                                <td id="totaux_protection_type">0</td>
                                <td id="totaux_protection_penalite">0</td>
                                <td id="totaux_protection_echec">0</td>
                                <td id="totaux_protection_poids">0</td>
                                <td id="totaux_protection_propriete">0</td>
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
                                        <td colspan="9"><h5 id="label_equip">EQUIPEMENT</h5></td>
                                    </tr>

                                    <tr>
                                        <td class="background_grey"><h3>OBJET</h3></td>
                                        <td class="background_grey"><h3>POIDS</h3></td>
                                    </tr>

                                    <tr>
                                        <td> 
                                            <select name="objet_I" id="objet_I"></select>
                                        </td>
                                        <td> 
                                            <select name="poids_I" id="poids_I"></select>
                                        </td>
                                        <td></td>
                                    </tr>

                                    <tr>
                                        <td id="label_poids_total">POIDS TOTAL</td>
                                        <td> 
                                            <input id="poids_total" type="text" name="poids_total" size="2" maxlength="2" required pattern="[0-9]{1,2}">
                                        </td>
                                        <td></td>
                                    </tr>
                                </table>
                            </div>

                            <div class="row">
                                <div class="col-lg-12">
                                    <input type="button" name="Somme poids" value="Somme poids" id="Somme_poids" onClick="calculeSommePoids()">
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-12">
                                <table id="capaciteDeCharge">
                                    <tr>
                                        <td class="background_grey"><h3>CHARGE LEGERE</h3></td>
                                        <td id="chargeLegere">0</td>
                                        <td class="background_grey"><h3>CHARGE INTERMEDIAIRE</h3></td>
                                        <td id="chargeIntermediaire">0</td>
                                    </tr>

                                    <tr>
                                        <td class="background_grey"><h3>CHARGE LOURDE</h3></td>
                                        <td id="chargeLourde">0</td>
                                        <td class="background_grey"><h3>CHARGE MAX</h3></td>
                                        <td id="chargeMax">0</td>
                                    </tr>

                                    <tr>
                                        <td class="background_grey"><h3>SOULEVER</h3></td>
                                        <td id="soulever">0</td>
                                        <td id="tirerOuPousser">0</td>
                                        <td class="background_grey"><h3>TIRER OU POUSSER</h3></td>
                                    </tr>
                                </table>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-12">
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
                                    </tr>

                                    <tr>
                                        <td id="pa">PA</td>
                                        <td rowspan="4"></td>
                                    </tr>

                                    <tr>
                                        <td id="po">PO</td>
                                        <td rowspan="4"></td>
                                    </tr>

                                    <tr>
                                        <td id="pp">PP</td>
                                        <td rowspan="4"></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-8">
                        <div class="row">
                            <div class="col-lg-12">
                                <table id="table_don_I">
                                    <th><td class="label_don"><h2>DONS</h2></td></th>

                                    <tr><td><select name="don_I" id="don_I"></select></td></tr>
                                    <tr><td><select name="don_II" id="don_II"></select></td></tr>
                                    <tr><td><select name="don_III" id="don_III"></select></td></tr>
                                    <tr><td><select name="don_IV" id="don_IV"></select></td></tr>
                                    <tr><td><select name="don_V" id="don_V"></select></td></tr>
                                    <tr><td><select name="don_VI" id="don_VI"></select></td></tr>
                                    <tr><td><select name="don_VII" id="don_VII"></select></td></tr>
                                    <tr><td><select name="don_VIII" id="don_VIII"></select></td></tr>
                                    <tr><td><select name="don_IX" id="don_IX"></select></td></tr>
                                    <tr><td><select name="don_X" id="don_X"></select></td></tr>
                                    <tr><td><select name="don_XI" id="don_XI"></select></td></tr>
                                    <tr><td><select name="don_XII" id="don_XII"></select></td></tr>
                                    <tr><td><select name="don_XIII" id="don_XIII"></select></td></tr>
                                    <tr><td><select name="don_XIV" id="don_XIV"></select></td></tr>
                                    <tr><td><select name="don_XV" id="don_XV"></select></td></tr>
                                    <tr><td><select name="don_XVI" id="don_XVI"></select></td></tr>
                                    <tr><td><select name="don_XVII" id="don_XVII"></select></td></tr>
                                    <tr><td><select name="don_XVIII" id="don_XVIII"></select></td></tr>
                                    <tr><td><select name="don_XIX" id="don_XIX"></select></td></tr>
                                    <tr><td><select name="don_XX" id="don_XX"></select></td></tr>
                                </table>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-12">
                                <table id="table_capacites_speciales">
                                    <th><td class="label_capacites_speciales"><h2>CAPACITES SPECIALES</h2></td></th>

                                    <tr><td><select name="capacites_speciales_I" id="capacites_speciales_I"></select></td></tr>
                                    <tr><td><select name="capacites_speciales_II" id="capacites_speciales_II"></select></td></tr>
                                    <tr><td><select name="capacites_speciales_III" id="capacites_speciales_III"></select></td></tr>
                                    <tr><td><select name="capacites_speciales_IV" id="capacites_speciales_IV"></select></td></tr>
                                    <tr><td><select name="capacites_speciales_V" id="capacites_speciales_V"></select></td></tr>
                                    <tr><td><select name="capacites_speciales_VI" id="capacites_speciales_VI"></select></td></tr>
                                    <tr><td><select name="capacites_speciales_VII" id="capacites_speciales_VII"></select></td></tr>
                                    <tr><td><select name="capacites_speciales_VIII" id="capacites_speciales_VIII"></select></td></tr>
                                    <tr><td><select name="capacites_speciales_IX" id="capacites_speciales_IX"></select></td></tr>
                                    <tr><td><select name="capacites_speciales_X" id="capacites_speciales_X"></select></td></tr>
                                    <tr><td><select name="capacites_speciales_XI" id="capacites_speciales_XI"></select></td></tr>
                                    <tr><td><select name="capacites_speciales_XII" id="capacites_speciales_XII"></select></td></tr>
                                    <tr><td><select name="capacites_speciales_XIII" id="capacites_speciales_XIII"></select></td></tr>
                                    <tr><td><select name="capacites_speciales_XIV" id="capacites_speciales_XIV"></select></td></tr>
                                    <tr><td><select name="capacites_speciales_XV" id="capacites_speciales_XV"></select></td></tr>
                                    <tr><td><select name="capacites_speciales_XVI" id="capacites_speciales_XVI"></select></td></tr>
                                    <tr><td><select name="capacites_speciales_XVII" id="capacites_speciales_XVII"></select></td></tr>
                                    <tr><td><select name="capacites_speciales_XVIII" id="capacites_speciales_XVIII"></select></td></tr>
                                    <tr><td><select name="capacites_speciales_XIX" id="capacites_speciales_XIX"></select></td></tr>
                                    <tr><td><select name="capacites_speciales_XX" id="capacites_speciales_XX"></select></td></tr>
                                </table>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-12">
                                <table id="table_experience">
                                    <tr>
                                        <th class="label_points_experience"><h2>POINTS D'EXPERIENCE</h2></th>
                                        <th class="label_niveau"><h2>NIVEAU</h2></th>
                                    </tr>

                                    <tr>
                                        <td>0</td>
                                        <td>0</td>
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
                                <td colspan="6" id="label_sorts"><h5>SORTS</h5></td>
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
                        </table>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-12">
                        <div class="row">
                            <div class="col-lg-12">
                                <label id="label_modif_part">MODIFICATEURS PARTICULIERS</h2>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-12">
                                <input type="text" name="modif_part" size="60" maxlength="60" required id="modif_part">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-12">
                        <table id="table_dom_spe">
                            <tr>
                                <td colspan="9" id="label_DOM/SPE"><h5>DOMAINES/SPECIALISATION</h5></td>
                                <td><select id="dom_spe" name="dom_spe"></select></td>
                            </tr>

                            <tr>
                                <td>0</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td>
                            </tr>
                            <tr><td><select id="dom_spe_01" name="dom_spe_01"></select></td></tr>
                            <tr><td><select id="dom_spe_02" name="dom_spe_02"></select></td></tr>
                            <tr><td><select id="dom_spe_03" name="dom_spe_03"></select></td></tr>
                            <tr><td><select id="dom_spe_04" name="dom_spe_04"></select></td></tr>
                            <tr><td><select id="dom_spe_05" name="dom_spe_05"></select></td></tr>
                            <tr><td><select id="dom_spe_06" name="dom_spe_06"></select></td></tr>
                            <tr><td><select id="dom_spe_07" name="dom_spe_07"></select></td></tr>
                            <tr><td><select id="dom_spe_08" name="dom_spe_08"></select></td></tr>

                            <tr>
                                <td>1</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td>
                            </tr>
                            <tr><td><select id="dom_spe_11" name="dom_spe_11"></select></td></tr>
                            <tr><td><select id="dom_spe_12" name="dom_spe_12"></select></td></tr>
                            <tr><td><select id="dom_spe_13" name="dom_spe_13"></select></td></tr>
                            <tr><td><select id="dom_spe_14" name="dom_spe_14"></select></td></tr>
                            <tr><td><select id="dom_spe_15" name="dom_spe_15"></select></td></tr>
                            <tr><td><select id="dom_spe_16" name="dom_spe_16"></select></td></tr>
                            <tr><td><select id="dom_spe_17" name="dom_spe_17"></select></td></tr>
                            <tr><td><select id="dom_spe_18" name="dom_spe_18"></select></td></tr>

                            <tr>
                                <td>2</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td>
                            </tr>
                            <tr><td><select id="dom_spe_21" name="dom_spe_21"></select></td></tr>
                            <tr><td><select id="dom_spe_22" name="dom_spe_22"></select></td></tr>
                            <tr><td><select id="dom_spe_23" name="dom_spe_23"></select></td></tr>
                            <tr><td><select id="dom_spe_24" name="dom_spe_24"></select></td></tr>
                            <tr><td><select id="dom_spe_25" name="dom_spe_25"></select></td></tr>
                            <tr><td><select id="dom_spe_26" name="dom_spe_26"></select></td></tr>
                            <tr><td><select id="dom_spe_27" name="dom_spe_27"></select></td></tr>
                            <tr><td><select id="dom_spe_28" name="dom_spe_28"></select></td></tr>

                            <tr>
                                <td>3</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td>
                            </tr>
                            <tr><td><select id="dom_spe_31" name="dom_spe_31"></select></td></tr>
                            <tr><td><select id="dom_spe_32" name="dom_spe_32"></select></td></tr>
                            <tr><td><select id="dom_spe_33" name="dom_spe_33"></select></td></tr>
                            <tr><td><select id="dom_spe_34" name="dom_spe_34"></select></td></tr>
                            <tr><td><select id="dom_spe_35" name="dom_spe_35"></select></td></tr>
                            <tr><td><select id="dom_spe_36" name="dom_spe_36"></select></td></tr>
                            <tr><td><select id="dom_spe_37" name="dom_spe_37"></select></td></tr>
                            <tr><td><select id="dom_spe_38" name="dom_spe_38"></select></td></tr>

                            <tr>
                                <td>4</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td>
                            </tr>
                            <tr><td><select id="dom_spe_41" name="dom_spe_41"></select></td></tr>
                            <tr><td><select id="dom_spe_42" name="dom_spe_42"></select></td></tr>
                            <tr><td><select id="dom_spe_43" name="dom_spe_43"></select></td></tr>
                            <tr><td><select id="dom_spe_44" name="dom_spe_44"></select></td></tr>
                            <tr><td><select id="dom_spe_45" name="dom_spe_45"></select></td></tr>
                            <tr><td><select id="dom_spe_46" name="dom_spe_46"></select></td></tr>
                            <tr><td><select id="dom_spe_47" name="dom_spe_47"></select></td></tr>
                            <tr><td><select id="dom_spe_48" name="dom_spe_48"></select></td></tr>

                            <tr>
                                <td>5</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td>
                            </tr>
                            <tr><td><select id="dom_spe_51" name="dom_spe_51"></select></td></tr>
                            <tr><td><select id="dom_spe_52" name="dom_spe_52"></select></td></tr>
                            <tr><td><select id="dom_spe_53" name="dom_spe_53"></select></td></tr>
                            <tr><td><select id="dom_spe_54" name="dom_spe_54"></select></td></tr>
                            <tr><td><select id="dom_spe_55" name="dom_spe_55"></select></td></tr>
                            <tr><td><select id="dom_spe_56" name="dom_spe_56"></select></td></tr>
                            <tr><td><select id="dom_spe_57" name="dom_spe_57"></select></td></tr>
                            <tr><td><select id="dom_spe_58" name="dom_spe_58"></select></td></tr>

                            <tr>
                                <td>6</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td>
                            </tr>
                            <tr><td><select id="dom_spe_61" name="dom_spe_61"></select></td></tr>
                            <tr><td><select id="dom_spe_62" name="dom_spe_62"></select></td></tr>
                            <tr><td><select id="dom_spe_63" name="dom_spe_63"></select></td></tr>
                            <tr><td><select id="dom_spe_64" name="dom_spe_64"></select></td></tr>
                            <tr><td><select id="dom_spe_65" name="dom_spe_65"></select></td></tr>
                            <tr><td><select id="dom_spe_66" name="dom_spe_66"></select></td></tr>
                            <tr><td><select id="dom_spe_67" name="dom_spe_67"></select></td></tr>
                            <tr><td><select id="dom_spe_68" name="dom_spe_68"></select></td></tr>

                            <tr>
                                <td>7</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td>
                            </tr>
                            <tr><td><select id="dom_spe_71" name="dom_spe_71"></select></td></tr>
                            <tr><td><select id="dom_spe_72" name="dom_spe_72"></select></td></tr>
                            <tr><td><select id="dom_spe_73" name="dom_spe_73"></select></td></tr>
                            <tr><td><select id="dom_spe_74" name="dom_spe_74"></select></td></tr>
                            <tr><td><select id="dom_spe_75" name="dom_spe_75"></select></td></tr>
                            <tr><td><select id="dom_spe_76" name="dom_spe_76"></select></td></tr>
                            <tr><td><select id="dom_spe_77" name="dom_spe_77"></select></td></tr>
                            <tr><td><select id="dom_spe_78" name="dom_spe_78"></select></td></tr>

                            <tr>
                                <td>8</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td>
                            </tr>
                            <tr><td><select id="dom_spe_81" name="dom_spe_81"></select></td></tr>
                            <tr><td><select id="dom_spe_82" name="dom_spe_82"></select></td></tr>
                            <tr><td><select id="dom_spe_83" name="dom_spe_83"></select></td></tr>
                            <tr><td><select id="dom_spe_84" name="dom_spe_84"></select></td></tr>
                            <tr><td><select id="dom_spe_85" name="dom_spe_85"></select></td></tr>
                            <tr><td><select id="dom_spe_86" name="dom_spe_86"></select></td></tr>
                            <tr><td><select id="dom_spe_87" name="dom_spe_87"></select></td></tr>
                            <tr><td><select id="dom_spe_88" name="dom_spe_88"></select></td></tr>

                            <tr>
                                <td>9</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td><td>[ ]</td>
                            </tr>
                            <tr><td><select id="dom_spe_91" name="dom_spe_91"></select></td></tr>
                            <tr><td><select id="dom_spe_92" name="dom_spe_92"></select></td></tr>
                            <tr><td><select id="dom_spe_93" name="dom_spe_93"></select></td></tr>
                            <tr><td><select id="dom_spe_94" name="dom_spe_94"></select></td></tr>
                            <tr><td><select id="dom_spe_95" name="dom_spe_95"></select></td></tr>
                            <tr><td><select id="dom_spe_96" name="dom_spe_96"></select></td></tr>
                            <tr><td><select id="dom_spe_97" name="dom_spe_97"></select></td></tr>
                            <tr><td><select id="dom_spe_98" name="dom_spe_98"></select></td></tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </form>
</div>
</body>
</html>
