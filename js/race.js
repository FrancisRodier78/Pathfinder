$(function() {
    $('#origine').change(function() {
        $('.divinite').remove();

        if ($('#origine').val() == 'Golarion') {
            $('#divinite').append('<option class="divinite">Abadar, dieu de la civilisation</option>');
            $('#divinite').append('<option class="divinite">Achaékek, l\'Assassin Divin</option>');
            $('#divinite').append('<option class="divinite">Apsu, le Dragon Créateur</option>');
            $('#divinite').append('<option class="divinite">Aroden, le Dernier des Azlants</option>');
            $('#divinite').append('<option class="divinite">Asmodéus, dieu-diable des contrats</option>');
            $('#divinite').append('<option class="divinite">Besmara, la Reine-Pirate</option>');
            $('#divinite').append('<option class="divinite">Calistria, déesse-elfe aux trois visages</option>');
            $('#divinite').append('<option class="divinite">Cayden, Cailéan, dieu des aventuriers</option>');
            $('#divinite').append('<option class="divinite">Dahak, le Dragon Destructeur</option>');
            $('#divinite').append('<option class="divinite">Desna, déesse des étoiles</option>');
            $('#divinite').append('<option class="divinite">Droskar, le Forgeron Sombre</option>');
            $('#divinite').append('<option class="divinite">Érastil, dieu de la famille</option>');
            $('#divinite').append('<option class="divinite">Ghlaunder, le Dieu Parasite</option>');
            $('#divinite').append('<option class="divinite">Gorum, dieu de la guerre</option>');
            $('#divinite').append('<option class="divinite">Gozreh, dieu de la nature</option>');
            $('#divinite').append('<option class="divinite">Groétus, la Fin des Temps</option>');
            $('#divinite').append('<option class="divinite">Iomédae, déesse de la bravoure</option>');
            $('#divinite').append('<option class="divinite">Irori, dieu du savoir</option>');
            $('#divinite').append('<option class="divinite">Kurgess, l\'Homme Fort</option>');
            $('#divinite').append('<option class="divinite">Lamashtu, déesse de la folie</option>');
            $('#divinite').append('<option class="divinite">Lissala, la déesse des Runes</option>');
            $('#divinite').append('<option class="divinite">Milani, qui Fleurit Sans Cesse</option>');
            $('#divinite').append('<option class="divinite">Néthys, dieu de la magie</option>');
            $('#divinite').append('<option class="divinite">Norgorber, dieu du meurtre</option>');
            $('#divinite').append('<option class="divinite">Pharasma, déesse qui juge les défunts</option>');
            $('#divinite').append('<option class="divinite">Razmir, le faux dieu</option>');
            $('#divinite').append('<option class="divinite">Rovagug, dieu de la destruction</option>');
            $('#divinite').append('<option class="divinite">Sarenrae, déesse-ange du soleil</option>');
            $('#divinite').append('<option class="divinite">Shélyn, déesse de la beauté</option>');
            $('#divinite').append('<option class="divinite">Sivanah, le Septième Voile</option>');
            $('#divinite').append('<option class="divinite">Torag, dieu-nain des artisans</option>');
            $('#divinite').append('<option class="divinite">Urgathoa, déesse-liche des maladies</option>');
            $('#divinite').append('<option class="divinite">Zon-Kuthon, dieu des ténèbres</option>');
            $('#divinite').append('<option class="divinite">Zyphus, le Sombre Faucheur</option>');
        };

        if ($('#origine').val() == 'Royaumes oubliés') {
            $('#divinite').append('<option class="divinite">***</option>');
        };
    })

    $('#race').change(function() {
        $('#traits_raciaux_I').html(' ');
        $('#traits_raciaux_II').html(' ');
        $('#traits_raciaux_III').html(' ');
        $('#traits_raciaux_IV').html(' ');
        $('#traits_raciaux_V').html(' ');
        $('#traits_raciaux_VI').html(' ');
        $('#traits_raciaux_VII').html(' ');

        $('#cat_taille').val('M');
        $('#vd_sans_armure_metre').html(' ');
        $('#vd_sans_armure_case').html(' ');

        $('#diversperception').val('0');
        $('#diversintimidation').val('0');
        $('#diversAcrobatie').val('0');
        $('#diversescalade').val('0');
        $('#diversestimation').val('0');

        $('#langueI').val(' ');
        $('#langueII').val(' ');

        $('#for_val_race').val(' ');
        $('#dex_val_race').val(' ');
        $('#con_val_race').val(' ');
        $('#int_val_race').val(' ');
        $('#sag_val_race').val(' ');
        $('#cha_val_race').val(' ');

        $('#sau_mod_part_ref').html(' ');
        $('#sau_mod_part_vig').html(' ');
        $('#sau_mod_part_vol').html(' ');

        if ($('#race').val() == 'Demi-elfe') {
            // +2 à une caractéristique. Les demi-elfes obtiennent un bonus de +2 à une caractéristique choisie lors de la création (ce bonus représente la diversité de leur race).
            alert('Vous avez droit un +2 à une caractéristique.');
            
            // Taille moyenne. Les demi-elfes sont des créatures de taille M, ce qui ne leur apporte aucun bonus ni malus de taille.
            $('#cat_taille').val('M');
            
            // Vitesse normale. Les demi-elfes possèdent une vitesse de déplacement de base de 9 mètres.
            $('#vd_sans_armure_metre').html('9m');
            $('#vd_sans_armure_case').html('6 cases');
            
            $('#traits_raciaux_I').html('Vision nocturne. Les demi-elfes peuvent voir deux fois plus loin que les humains dans des conditions de faible éclairage (voir le Chapitre 7).');
            
            $('#traits_raciaux_II').html('Adaptabilité. Les demi-elfes reçoivent le don Talent comme don supplémentaire au niveau 1.');
            
            $('#traits_raciaux_III').html('Immunités elfiques. Les demi-elfes sont immunisés aux effets de sommeil magique et bénéficient d’un bonus racial de +2 aux jets de sauvegarde contre les sorts et les effets de type enchantement.');
            
            $('#traits_raciaux_IV').html('Sang elfique. Les demi-elfes comptent à la fois comme humains et comme elfes pour les effets liés à la race.');
            
            // Sens aiguisés. Les demi-elfes reçoivent un bonus racial de +2 aux tests de Perception.
            $('#diversperception').val('2');

            $('#traits_raciaux_V').html('Talents multiples. Les demi-elfes choisissent deux classes de prédilection au niveau 1 et gagnent +1 point de vie ou +1 rang de compétence chaque fois qu’ils gagnent un niveau dans l’une de ces deux classes. Consultez le Chapitre 3 pour plus d’informations à propos des classes de prédilection.');
            
            // Langues supplémentaires. Les demi-elfes connaissent automatiquement le commun et l’elfe. Les demi-elfes qui possèdent une Intelligence élevée peuvent choisir n’importe quelle autre langue (à l’exception des langages secrets tels que la langue des druides).
            $('#langueI').val('Commun');
            $('#langueII').val('Elfe');
        }

        if ($('#race').val() == 'Demi-orque') {
            // +2 à une caractéristique. Les demi-orques obtiennent un bonus de +2 à une caractéristique choisie lors de la création (ce bonus représente la diversité de leur race).
            alert('Vous avez droit un +2 à une caractéristique.');

            // Taille moyenne. Les demi-orques sont des créatures de taille M, ce qui ne leur apporte aucun bonus ni malus de taille.
            $('#cat_taille').val('M');

            // Vitesse normale. Les demi-orques possèdent une vitesse de déplacement de base de 9 mètres.
            $('#vd_sans_armure_metre').html('9m');
            $('#vd_sans_armure_case').html('6 cases');
            
            $('#traits_raciaux_I').html('Vision dans le noir. Les demi-orques peuvent voir dans le noir jusqu’à une distance de 18 mètres.');

            // Intimidant. Les demi-orques reçoivent un bonus racial de +2 aux tests d’Intimidation grâce à leur nature féroce.
            $('#diversintimidation').val('2');

            $('#traits_raciaux_II').html('Sang orque. Les demi-orques comptent à la fois comme humains et comme orques pour les effets liés à la race.');

            $('#traits_raciaux_III').html('Férocité orque. Une fois par jour, lorsqu’un demi-orque est amené sous 0 point de vie mais pas tué, il peut continuer à se battre pendant un round de plus, comme s’il était simplement hors de combat. À la fin de son tour, s’il ne repasse pas audessus de 0 point de vie, il tombe immédiatement inconscient et devient mourant.');

            $('#traits_raciaux_IV').html('Armes familières. Les demi-orques sont formés au maniement des grandes haches et des cimeterres à deux mains et ils considèrent toutes les armes dont le nom comporte le mot « orque » comme des armes de guerre.');

            // Langues supplémentaires. Les demi-orques connaissent automatiquement le commun et l’orque. Les demiorques qui possèdent une Intelligence élevée peuvent choisir d’autres langues parmi la liste suivante : abyssal, draconien, géant, gnoll et gobelin.
            $('#langueI').val('Commun');
            $('#langueII').val('Orque');
        }

        if ($('#race').val() == 'Elfe') {
            // +2 Dextérité, +2 Intelligence, -2 Constitution. Les elfes sont agiles, tant physiquement que mentalement, mais plutôt frêles.
            $('#dex_val_race').val('+2');
            $('#int_val_race').val('+2');
            $('#con_val_race').val('-2');

            // Taille moyenne. Les elfes sont des créatures de taille M, ce qui ne leur apporte aucun bonus ni malus de taille.
            $('#cat_taille').val('M');

            // Vitesse normale. Les elfes possèdent une vitesse de déplacement de base de 9 mètres.
            $('#vd_sans_armure_metre').html('9m');
            $('#vd_sans_armure_case').html('6 cases');
            
            $('#traits_raciaux_I').html('Vision nocturne. Les elfes peuvent voir deux fois plus loin que les humains dans des conditions de faible éclairage (voir le Chapitre 7).');

            $('#traits_raciaux_II').html('Immunités elfiques. Les elfes sont immunisés aux effets de sommeil magique et bénéficient d’un bonus racial de +2 aux jets de sauvegarde contre les sorts et les effets de type enchantement.');

            $('#traits_raciaux_III').html('Magie elfique. Les elfes reçoivent un bonus racial de +2 aux tests de niveau de lanceur de sorts pour surmonter la résistance à la magie des cibles. Ils reçoivent également un bonus racial de +2 aux tests d’Art de la magie pour identifier les propriétés des objets magiques.');

            // Sens aiguisés. Les elfes reçoivent un bonus racial de +2 aux tests de Perception.
            $('#diversperception').val('2');

            // Armes familières. Les elfes sont formés au maniement des arcs longs (y compris les arcs longs composites), des arcs courts (y compris les arcs courts composites), des épées longues, des rapières, et ils considèrent toutes les armes dont le nom comporte le mot « elfe » ou « elfique » comme des armes de guerre.
            $('#traits_raciaux_IV').html('Armes familières. Les elfes sont formés au maniement des arcs longs (y compris les arcs longs composites), des arcs courts (y compris les arcs courts composites), des épées longues, des rapières, et ils considèrent toutes les armes dont le nom comporte le mot « elfe » ou « elfique » comme des armes de guerre.');

            // Langues supplémentaires. Les elfes connaissent automatiquement le commun et l’elfe. Les elfes possédant une Intelligence élevée peuvent choisir d’autres langues parmi la liste suivante : céleste, draconien, gnoll, gnome, gobelin, orque et sylvestre.
            $('#langueI').val('Commun');
            $('#langueII').val('Elfe');
        }

        if ($('#race').val() == 'Halfelin') {
            // +2 Dextérité, +2 Charisme, -2 Force. Les halfelins sont agiles et ont du caractère mais leur petite taille les rend plus faibles que les autres races.
            $('#dex_val_race').val('+2');
            $('#cha_val_race').val('+2');
            $('#for_val_race').val('-2');

            // Petite taille. Les halfelins sont des créatures de taille P. Ils gagnent donc un bonus de taille de +1 à leur classe d’armure et aux jets d’attaque, un malus de -1 à leur bonus de manoeuvres offensives (BMO) et à leur degré de manoeuvres défensives (DMD), ainsi qu’un bonus de taille de +4 aux tests de Discrétion.
            $('#cat_taille').val('P');

            // Vitesse lente. Les halfelins possèdent une vitesse de déplacement de base de 6 mètres.
            $('#vd_sans_armure_metre').html('6m');
            $('#vd_sans_armure_case').html('4 cases');
            
            // Sans peur. Les halfelins reçoivent un bonus racial de +2 à tous les jets de sauvegarde contre la terreur. Ce bonus se cumule avec celui provenant de la chance des halfelins.
            $('#traits_raciaux_I').html('Sans peur. Les halfelins reçoivent un bonus racial de +2 à tous les jets de sauvegarde contre la terreur. Ce bonus se cumule avec celui provenant de la chance des halfelins.');

            // Chance des halfelins. Les halfelins reçoivent un bonus racial de +1 à tous les jets de sauvegarde.
            $('#sau_mod_part_ref').html('1');
            $('#sau_mod_part_vig').html('1');
            $('#sau_mod_part_vol').html('1');

            // Sens aiguisés. Les halfelins reçoivent un bonus racial de +2 à tous les tests de Perception.
            $('#diversperception').val('2');

            // Bon équilibre. Les halfelins reçoivent un bonus racial de +2 à tous les tests d’Acrobaties et d’Escalade.
            $('#diversAcrobatie').val('2');
            $('#diversescalade').val('2');

            // Armes familières. Les halfelins sont formés au maniement des frondes et considèrent toutes les armes dont le nom comporte le mot « halfelin » comme des armes de guerre.
            $('#traits_raciaux_IV').html('Armes familières. Les halfelins sont formés au maniement des frondes et considèrent toutes les armes dont le nom comporte le mot « halfelin » comme des armes de guerre.');

            // Langues supplémentaires. Les halfelins connaissent automatiquement le commun et le halfelin. Les halfelins qui possèdent une Intelligence élevée peuvent choisir d’autres langues parmi la liste suivante : abyssal, elfe, gnome, gobelin et nain.
            $('#langueI').val('Commun');
            $('#langueII').val('Halfelin');
        }

        if ($('#race').val() == 'Humain') {
            // +2 à une caractéristique. Les personnages humains obtiennent un bonus de +2 à une caractéristique choisie lors de la création (ce bonus représente la diversité de leur race).
            alert('Vous avez droit un +2 à une caractéristique.');

            // Taille moyenne. Les humains sont des créatures de taille M, ce qui ne leur apporte aucun bonus ni malus de taille.
            $('#cat_taille').val('M');

            // Vitesse normale. Les humains possèdent une vitesse de déplacement de base de 9 mètres.
            $('#vd_sans_armure_metre').html('9m');
            $('#vd_sans_armure_case').html('6 cases');
            
            // Don en bonus. Les humains choisissent un don supplémentaire au niveau 1.

            $('#traits_raciaux_I').html('Compétent. Les humains obtiennent un rang de compétence supplémentaire au niveau 1 et un rang de compétence en plus chaque fois qu’ils gagnent un niveau.'); 

            // Langues supplémentaires. Les humains connaissent automatiquement le commun. Les humains qui possèdent une Intelligence élevée peuvent choisir n’importe quelle autre langue (à l’exception des langages secrets comme la langue des druides).
            $('#langueI').val('Commun');
        }

        if ($('#race').val() == 'Gnome') {
            // +2 Constitution, +2 Charisme, -2 Force. Les gnomes sont faibles physiquement mais étonnamment résistants et leur attitude les rend agréables à côtoyer.
            $('#con_val_race').val('+2');
            $('#cha_val_race').val('+2');
            $('#for_val_race').val('-2');

            // Petite taille. Les gnomes sont des créatures de taille P. Ils gagnent un bonus de taille de +1 à leur classe d’armure et aux jets d’attaque, un malus de -1 à leur bonus de manoeuvres offensives (BMO) et à leur degré de manoeuvres défensives (DMD), ainsi qu’un bonus de taille de +4 aux tests de Discrétion.
            $('#cat_taille').val('P');

            // Vitesse lente. Les gnomes possèdent une vitesse de déplacement de base de 6 mètres.
            $('#vd_sans_armure_metre').html('6m');
            $('#vd_sans_armure_case').html('4 cases');
            
            $('#traits_raciaux_I').html('Vision nocturne. Les gnomes peuvent voir deux fois plus loin que les humains dans des conditions de faible éclairage (voir le Chapitre 7).');

            $('#traits_raciaux_II').html('Entraînement défensif. Les gnomes reçoivent un bonus d’esquive de +4 à la CA contre les monstres du sous-type géant.');            // Haine. Les gnomes reçoivent un bonus racial de +1 aux jets d’attaque contre les créatures humanoïdes des sous-types reptilien et gobelinoïde grâce à une formation spéciale contre ces ennemis jurés.

            $('#traits_raciaux_III').html('Magie gnome. Les gnomes ajoutent +1 aux DD des jets de sauvegarde des illusions qu’ils lancent. Les gnomes qui possèdent un Charisme égal ou supérieur à 11 possèdent également les pouvoirs magiques suivants : 1/jour – communication avec les animaux, lumières dansantes, prestidigitation, et son imaginaire. Le niveau de lanceur de sorts de ces pouvoirs est égal au niveau du gnome, et leur DD est égal à 10 + le niveau du sort + le modificateur de Charisme du gnome.');

            // Obsession. Les gnomes reçoivent un bonus racial de +2 à une compétence d’Artisanat ou de Profession de leur choix.
            alert('+2 à une compétence d’Artisanat ou de Profession.');

            $('#traits_raciaux_IV').html('Résistance aux illusions. Les gnomes reçoivent un bonus racial de +2 aux jets de sauvegarde contre les sorts et les effets de type illusion.');

            // Sens aiguisés. Les gnomes reçoivent un bonus racial de +2 aux tests de Perception.
            $('#diversperception').val('2');

            // Armes familières. Les gnomes considèrent toutes les armes dont le nom comporte le mot « gnome » comme des armes de guerre.
            $('#traits_raciaux_V').html('Armes familières. Les gnomes considèrent toutes les armes dont le nom comporte le mot « gnome » comme des armes de guerre.');

            // Langues supplémentaires. Les gnomes connaissent automatiquement le commun et le gnome. Les gnomes qui possèdent une Intelligence élevée peuvent choisir d’autres langues parmi la liste suivante : draconien, elfe, géant, gobelin, nain et orque.            
            $('#langueI').val('Commun');
            $('#langueII').val('Gnome');
        }

        if ($('#race').val() == 'Nain') {
            // +2 Constitution, +2 Sagesse, -2 Charisme. Les nains sont robustes et sages mais aussi un peu bourrus.
            $('#con_val_race').val('+2');
            $('#sag_val_race').val('+2');
            $('#cha_val_race').val('-2');

            // Taille moyenne. Les nains sont des créatures de taille M, ce qui ne leur apporte aucun bonus ni malus de taille.
            $('#cat_taille').val('M');

            // Lentement mais sûrement. Les nains possèdent une vitesse de déplacement de base de 6 mètres mais celle-ci n’est pas modifiée par leur armure ni par la charge qu’ils portent.
            $('#vd_sans_armure_metre').html('6m');
            $('#vd_sans_armure_case').html('4 cases');

            $('#traits_raciaux_I').html('Vision dans le noir. Les nains peuvent voir dans le noir jusqu’à une distance de 18 mètres.');

            // Avarice. Les nains gagnent un bonus racial de +2 aux tests d’Estimation visant à déterminer le prix d’objets non-magiques comportant des métaux ou des pierres précieuses.
            $('#diversestimation').val('2');

            $('#traits_raciaux_II').html('Connaissance de la pierre. Les nains reçoivent un bonus racial de +2 aux tests de Perception pour remarquer les irrégularités dans les constructions en pierre, comme les pièges ou les portes cachées dans les murs ou les sols en pierre. Il suffit qu’ils s’approchent à moins de 3 mètres d’un tel élément pour bénéficier d’un test pour les remarquer et ceci qu’ils les recherchent activement ou non.');

            $('#traits_raciaux_III').html('Entraînement défensif. Les nains gagnent un bonus d’esquive de +4 à la CA contre les monstres du soustype géant.');

            $('#traits_raciaux_IV').html('Haine. Les nains gagnent un bonus racial de +1 aux jets d’attaque contre les créatures humanoïdes des soustypes orque et gobelinoïde grâce à une formation spéciale contre ces ennemis jurés.');

            $('#traits_raciaux_V').html('Robustes. Les nains gagnent un bonus racial de +2 aux jets de sauvegarde contre le poison, les sorts et les pouvoirs magiques.');

            $('#traits_raciaux_VI').html('Stabilité. Les nains reçoivent un bonus racial de +4 à leur degré de manoeuvres défensives (DMD) lorsqu’ils se tiennent sur le sol et qu’ils tentent de résister à une bousculade ou à un croc-en-jambe.');

            // Armes familières. Les nains sont formés au maniement des haches d’arme, aux pics de guerre lourds et aux marteaux de guerre. Ils considèrent toutes les armes dont le nom comporte le mot « nain » comme des armes de guerre.
            $('#traits_raciaux_VII').html('Armes familières. Les nains sont formés au maniement des haches d’arme, aux pics de guerre lourds et aux marteaux de guerre. Ils considèrent toutes les armes dont le nom comporte le mot « nain » comme des armes de guerre.');

            // Langues supplémentaires. Les nains connaissent automatiquement le commun et le nain. Les nains qui possèdent une Intelligence élevée peuvent choisir d’autres langues parmi la liste suivante : commun des profondeurs, élémentaire, géant, gnome, gobelin et orque.
            $('#langueI').val('Commun');
            $('#langueII').val('Nain');
        }
    })
});
