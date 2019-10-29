$(function() {
    function remiseAZeroNiveau() {
        $('#sau_bon_bas_ref').html('');
        $('#sau_bon_bas_vig').html('');
        $('#sau_bon_bas_vol').html('');

        $('#sau_mod_car_ref').html('');
        $('#sau_mod_car_vig').html('');
        $('#sau_mod_car_vol').html('');

        $('#sau_mod_mag_ref_bon').val(0);
        $('#sau_mod_mag_vig_bon').val(0);
        $('#sau_mod_mag_vol_bon').val(0);

        $('#sau_mod_div_ref_bon').val(0);
        $('#sau_mod_div_vig_bon').val(0);
        $('#sau_mod_div_vol_bon').val(0);

        $('#mod_tem_ref').val(0);
        $('#mod_tem_vig').val(0);
        $('#mod_tem_vol').val(0);

        $('#mod_part_ref').val(0);
        $('#mod_part_vig').val(0);
        $('#mod_part_vol').val(0);

        $('#sau_total_ref').html('');
        $('#sau_total_vig').html('');
        $('#sau_total_vol').html('');

        $('#bba').html('');
        $('#lut_bon_bas_att').html('');
        $('#red_deg').html('');

        $('#capacites_speciales_I').html('<a target="_blank" href=""></a>');
        $('#capacites_speciales_II').html('<a target="_blank" href=""></a>');
        $('#capacites_speciales_III').html('<a target="_blank" href=""></a>');
        $('#capacites_speciales_IV').html('<a target="_blank" href=""></a>');
        $('#capacites_speciales_V').html('<a target="_blank" href=""></a>');
        $('#capacites_speciales_VI').html('<a target="_blank" href=""></a>');
        $('#capacites_speciales_VII').html('<a target="_blank" href=""></a>');
        $('#capacites_speciales_VIII').html('<a target="_blank" href=""></a>');
        $('#capacites_speciales_IX').html('<a target="_blank" href=""></a>');
        $('#capacites_speciales_X').html('<a target="_blank" href=""></a>');
        $('#capacites_speciales_XI').html('<a target="_blank" href=""></a>');
        $('#capacites_speciales_XII').html('<a target="_blank" href=""></a>');
        $('#capacites_speciales_XIII').html('<a target="_blank" href=""></a>');
        $('#capacites_speciales_XIV').html('<a target="_blank" href=""></a>');
        $('#capacites_speciales_XV').html('<a target="_blank" href=""></a>');
        $('#capacites_speciales_XVI').html('<a target="_blank" href=""></a>');
        $('#capacites_speciales_XVII').html('<a target="_blank" href=""></a>');
        $('#capacites_speciales_XVIII').html('<a target="_blank" href=""></a>');
        $('#capacites_speciales_XIX').html('<a target="_blank" href=""></a>');
        $('#capacites_speciales_XX').html('<a target="_blank" href=""></a>');
        $('#capacites_speciales_XXI').html('<a target="_blank" href=""></a>');
        $('#capacites_speciales_XXII').html('<a target="_blank" href=""></a>');
        $('#capacites_speciales_XXIII').html('<a target="_blank" href=""></a>');
        $('#capacites_speciales_XXIV').html('<a target="_blank" href=""></a>');
        $('#capacites_speciales_XXV').html('<a target="_blank" href=""></a>');
        $('#capacites_speciales_XXVI').html('<a target="_blank" href=""></a>');

        $('#sorts_connus_0').html('-');
        $('#sorts_connus_I').html('-');
        $('#sorts_connus_II').html('-');
        $('#sorts_connus_III').html('-');
        $('#sorts_connus_IV').html('-');
        $('#sorts_connus_V').html('-');
        $('#sorts_connus_VI').html('-');
        $('#sorts_connus_VII').html('-');
        $('#sorts_connus_VIII').html('-');
        $('#sorts_connus_IX').html('-');

        $('#sorts_jour_0').html('-');
        $('#sorts_jour_I').html('-');
        $('#sorts_jour_II').html('-');
        $('#sorts_jour_III').html('-');
        $('#sorts_jour_IV').html('-');
        $('#sorts_jour_V').html('-');
        $('#sorts_jour_VI').html('-');
        $('#sorts_jour_VII').html('-');
        $('#sorts_jour_VIII').html('-');
        $('#sorts_jour_IX').html('-');
    };


    function toucherCommeGuerrier() {
        switch($('#niveau').val()) {
            case '00' :
                $('#bba').html('0');  
                $('#bmo_bon_bas_att').html('0');
                $('#dmd_bon_bas_att').html('0');
                break;
            case '01' :
                $('#bba').html('1');
                $('#bmo_bon_bas_att').html('1');
                $('#dmd_bon_bas_att').html('1');
                break;
            case '02' :
                $('#bba').html('2');
                $('#bmo_bon_bas_att').html('2');
                $('#dmd_bon_bas_att').html('2');
                break;
            case '03' :
                $('#bba').html('3');
                $('#bmo_bon_bas_att').html('3');
                $('#dmd_bon_bas_att').html('3');
                break;
            case '04' :
                $('#bba').html('4');
                $('#bmo_bon_bas_att').html('4');
                $('#dmd_bon_bas_att').html('4');
                break;
            case '05' :
                $('#bba').html('5');
                $('#bmo_bon_bas_att').html('5');
                $('#dmd_bon_bas_att').html('5');
                break;
            case '06' :
                $('#bba').html('6');
                $('#bmo_bon_bas_att').html('6');
                $('#dmd_bon_bas_att').html('6');
                break;
            case '07' :
                $('#bba').html('7');
                $('#bmo_bon_bas_att').html('7');
                $('#dmd_bon_bas_att').html('7');
                break;
            case '08' :
                $('#bba').html('8');
                $('#bmo_bon_bas_att').html('8');
                $('#dmd_bon_bas_att').html('8');
                break;
            case '09' :
                $('#bba').html('9');
                $('#bmo_bon_bas_att').html('9');
                $('#dmd_bon_bas_att').html('9');
                break;
            case '10' :
                $('#bba').html('10');
                $('#bmo_bon_bas_att').html('10');
                $('#dmd_bon_bas_att').html('10');
                break;
            case '11' :
                $('#bba').html('11');
                $('#bmo_bon_bas_att').html('11');
                $('#dmd_bon_bas_att').html('11');
                break;
            case '12' :
                $('#bba').html('12');
                $('#bmo_bon_bas_att').html('12');
                $('#dmd_bon_bas_att').html('12');
                break;
            case '13' :
                $('#bba').html('13');
                $('#bmo_bon_bas_att').html('13');
                $('#dmd_bon_bas_att').html('13');
                break;
            case '14' :
                $('#bba').html('14');
                $('#bmo_bon_bas_att').html('14');
                $('#dmd_bon_bas_att').html('14');
                break;
            case '15' :
                $('#bba').html('15');
                $('#bmo_bon_bas_att').html('15');
                $('#dmd_bon_bas_att').html('15');
                break;
            case '16' :
                $('#bba').html('16');
                $('#bmo_bon_bas_att').html('16');
                $('#dmd_bon_bas_att').html('16');
                break;
            case '17' :
                $('#bba').html('17');
                $('#bmo_bon_bas_att').html('17');
                $('#dmd_bon_bas_att').html('17');
                break;
            case '18' :
                $('#bba').html('18');
                $('#bmo_bon_bas_att').html('18');
                $('#dmd_bon_bas_att').html('18');
                break;
            case '19' :
                $('#bba').html('19');
                $('#bmo_bon_bas_att').html('19');
                $('#dmd_bon_bas_att').html('19');
                break;
            case '20' :
                $('#bba').html('20');
                $('#bmo_bon_bas_att').html('20');
                $('#dmd_bon_bas_att').html('20');
                break;
        }
    };

    function toucherCommePretre() {
        switch($('#niveau').val()) {
            case '00' :
                $('#bba').html(' ');
                $('#bmo_bon_bas_att').html('0');
                $('#dmd_bon_bas_att').html('0');
                break;
            case '01' :
                $('#bba').html('0');
                $('#bmo_bon_bas_att').html('0');
                $('#dmd_bon_bas_att').html('0');
                break;
            case '02' :
                $('#bba').html('1');
                $('#bmo_bon_bas_att').html('1');
                $('#dmd_bon_bas_att').html('1');
                break;
            case '03' :
                $('#bba').html('2');
                $('#bmo_bon_bas_att').html('2');
                $('#dmd_bon_bas_att').html('2');
                break;
            case '04' :
                $('#bba').html('3');
                $('#bmo_bon_bas_att').html('3');
                $('#dmd_bon_bas_att').html('3');
                break;
            case '05' :
                $('#bba').html('3');
                $('#bmo_bon_bas_att').html('3');
                $('#dmd_bon_bas_att').html('3');
                break;
            case '06' :
                $('#bba').html('4');
                $('#bmo_bon_bas_att').html('4');
                $('#dmd_bon_bas_att').html('4');
                break;
            case '07' :
                $('#bba').html('5');
                $('#bmo_bon_bas_att').html('5');
                $('#dmd_bon_bas_att').html('5');
                break;
            case '08' :
                $('#bba').html('6');
                $('#bmo_bon_bas_att').html('6');
                $('#dmd_bon_bas_att').html('6');
                break;
            case '09' :
                $('#bba').html('6');
                $('#bmo_bon_bas_att').html('6');
                $('#dmd_bon_bas_att').html('6');
                break;
            case '10' :
                $('#bba').html('7');
                $('#bmo_bon_bas_att').html('7');
                $('#dmd_bon_bas_att').html('7');
                break;
            case '11' :
                $('#bba').html('8');
                $('#bmo_bon_bas_att').html('8');
                $('#dmd_bon_bas_att').html('8');
                break;
            case '12' :
                $('#bba').html('9');
                $('#bmo_bon_bas_att').html('9');
                $('#dmd_bon_bas_att').html('9');
                break;
            case '13' :
                $('#bba').html('9');
                $('#bmo_bon_bas_att').html('9');
                $('#dmd_bon_bas_att').html('9');
                break;
            case '14' :
                $('#bba').html('10');
                $('#bmo_bon_bas_att').html('10');
                $('#dmd_bon_bas_att').html('10');
                break;
            case '15' :
                $('#bba').html('11');
                $('#bmo_bon_bas_att').html('11');
                $('#dmd_bon_bas_att').html('11');
                break;
            case '16' :
                $('#bba').html('12');
                $('#bmo_bon_bas_att').html('12');
                $('#dmd_bon_bas_att').html('12');
                break;
            case '17' :
                $('#bba').html('12');
                $('#bmo_bon_bas_att').html('12');
                $('#dmd_bon_bas_att').html('12');
                break;
            case '18' :
                $('#bba').html('13');
                $('#bmo_bon_bas_att').html('13');
                $('#dmd_bon_bas_att').html('13');
                break;
            case '19' :
                $('#bba').html('14');
                $('#bmo_bon_bas_att').html('14');
                $('#dmd_bon_bas_att').html('14');
                break;
            case '20' :
                $('#bba').html('15');
                $('#bmo_bon_bas_att').html('15');
                $('#dmd_bon_bas_att').html('15');
                break;
        }
    };

    function toucherCommeMagicien() {
        switch($('#niveau').val()) {
            case '00' :
                $('#bba').html(' ');
                $('#bmo_bon_bas_att').html(' ');
                $('#dmd_bon_bas_att').html(' ');
                break;
            case '01' :
                $('#bba').html('0');
                $('#bmo_bon_bas_att').html('0');
                $('#dmd_bon_bas_att').html('0');
                break;
            case '02' :
                $('#bba').html('1');
                $('#bmo_bon_bas_att').html('1');
                $('#dmd_bon_bas_att').html('1');
                break;
            case '03' :
                $('#bba').html('1');
                $('#bmo_bon_bas_att').html('1');
                $('#dmd_bon_bas_att').html('1');
                break;
            case '04' :
                $('#bba').html('2');
                $('#bmo_bon_bas_att').html('2');
                $('#dmd_bon_bas_att').html('2');
                break;
            case '05' :
                $('#bba').html('2');
                $('#bmo_bon_bas_att').html('2');
                $('#dmd_bon_bas_att').html('2');
                break;
            case '06' :
                $('#bba').html('3');
                $('#bmo_bon_bas_att').html('3');
                $('#dmd_bon_bas_att').html('3');
                break;
            case '07' :
                $('#bba').html('3');
                $('#bmo_bon_bas_att').html('3');
                $('#dmd_bon_bas_att').html('3');
                break;
            case '08' :
                $('#bba').html('4');
                $('#bmo_bon_bas_att').html('4');
                $('#dmd_bon_bas_att').html('4');
                break;
            case '09' :
                $('#bba').html('4');
                $('#bmo_bon_bas_att').html('4');
                $('#dmd_bon_bas_att').html('4');
                break;
            case '10' :
                $('#bba').html('5');
                $('#bmo_bon_bas_att').html('5');
                $('#dmd_bon_bas_att').html('5');
                break;
            case '11' :
                $('#bba').html('5');
                $('#bmo_bon_bas_att').html('5');
                $('#dmd_bon_bas_att').html('5');
                break;
            case '12' :
                $('#bba').html('6');
                $('#bmo_bon_bas_att').html('6');
                $('#dmd_bon_bas_att').html('6');
                break;
            case '13' :
                $('#bba').html('6');
                $('#bmo_bon_bas_att').html('6');
                $('#dmd_bon_bas_att').html('6');
                break;
            case '14' :
                $('#bba').html('7');
                $('#bmo_bon_bas_att').html('7');
                $('#dmd_bon_bas_att').html('7');
                break;
            case '15' :
                $('#bba').html('7');
                $('#bmo_bon_bas_att').html('7');
                $('#dmd_bon_bas_att').html('7');
                break;
            case '16' :
                $('#bba').html('8');
                $('#bmo_bon_bas_att').html('8');
                $('#dmd_bon_bas_att').html('8');
                break;
            case '17' :
                $('#bba').html('8');
                $('#bmo_bon_bas_att').html('8');
                $('#dmd_bon_bas_att').html('8');
                break;
            case '18' :
                $('#bba').html('9');
                $('#bmo_bon_bas_att').html('9');
                $('#dmd_bon_bas_att').html('9');
                break;
            case '19' :
                $('#bba').html('9');
                $('#bmo_bon_bas_att').html('9');
                $('#dmd_bon_bas_att').html('9');
                break;
            case '20' :
                $('#bba').html('10');
                $('#bmo_bon_bas_att').html('10');
                $('#dmd_bon_bas_att').html('10');
                break;
        }
    };

    function sauverCommeGuerrier() {
        switch($('#niveau').val()) {
            case '00' :
                $('#sau_bon_bas_ref').html(' ');
                $('#sau_bon_bas_vig').html(' ');
                $('#sau_bon_bas_vol').html(' ');
                break;
            case '01' :
                $('#sau_bon_bas_ref').html('0');
                $('#sau_bon_bas_vig').html('2');
                $('#sau_bon_bas_vol').html('0');
                break;
            case '02' :
                $('#sau_bon_bas_ref').html('0');
                $('#sau_bon_bas_vig').html('3');
                $('#sau_bon_bas_vol').html('0');
                break;
            case '03' :
                $('#sau_bon_bas_ref').html('1');
                $('#sau_bon_bas_vig').html('3');
                $('#sau_bon_bas_vol').html('1');
                break;
            case '04' :
                $('#sau_bon_bas_ref').html('1');
                $('#sau_bon_bas_vig').html('4');
                $('#sau_bon_bas_vol').html('1');
                break;
            case '05' :
                $('#sau_bon_bas_ref').html('1');
                $('#sau_bon_bas_vig').html('4');
                $('#sau_bon_bas_vol').html('1');
                break;
            case '06' :
                $('#sau_bon_bas_ref').html('2');
                $('#sau_bon_bas_vig').html('5');
                $('#sau_bon_bas_vol').html('2');
                break;
            case '07' :
                $('#sau_bon_bas_ref').html('2');
                $('#sau_bon_bas_vig').html('5');
                $('#sau_bon_bas_vol').html('2');
                break;
            case '08' :
                $('#sau_bon_bas_ref').html('2');
                $('#sau_bon_bas_vig').html('6');
                $('#sau_bon_bas_vol').html('2');
                break;
            case '09' :
                $('#sau_bon_bas_ref').html('3');
                $('#sau_bon_bas_vig').html('6');
                $('#sau_bon_bas_vol').html('3');
                break;
            case '10' :
                $('#sau_bon_bas_ref').html('3');
                $('#sau_bon_bas_vig').html('7');
                $('#sau_bon_bas_vol').html('3');
                break;
            case '11' :
                $('#sau_bon_bas_ref').html('3');
                $('#sau_bon_bas_vig').html('7');
                $('#sau_bon_bas_vol').html('3');
                break;
            case '12' :
                $('#sau_bon_bas_ref').html('4');
                $('#sau_bon_bas_vig').html('8');
                $('#sau_bon_bas_vol').html('4');
                break;
            case '13' :
                $('#sau_bon_bas_ref').html('4');
                $('#sau_bon_bas_vig').html('8');
                $('#sau_bon_bas_vol').html('4');
                break;
            case '14' :
                $('#sau_bon_bas_ref').html('4');
                $('#sau_bon_bas_vig').html('9');
                $('#sau_bon_bas_vol').html('4');
                break;
            case '15' :
                $('#sau_bon_bas_ref').html('5');
                $('#sau_bon_bas_vig').html('9');
                $('#sau_bon_bas_vol').html('5');
                break;
            case '16' :
                $('#sau_bon_bas_ref').html('5');
                $('#sau_bon_bas_vig').html('10');
                $('#sau_bon_bas_vol').html('5');
                break;
            case '17' :
                $('#sau_bon_bas_ref').html('5');
                $('#sau_bon_bas_vig').html('10');
                $('#sau_bon_bas_vol').html('5');
                break;
            case '18' :
                $('#sau_bon_bas_ref').html('6');
                $('#sau_bon_bas_vig').html('11');
                $('#sau_bon_bas_vol').html('6');
                break;
            case '19' :
                $('#sau_bon_bas_ref').html('6');
                $('#sau_bon_bas_vig').html('11');
                $('#sau_bon_bas_vol').html('6');
                break;
            case '20' :
                $('#sau_bon_bas_ref').html('6');
                $('#sau_bon_bas_vig').html('12');
                $('#sau_bon_bas_vol').html('6');
                break;
        }
    };

    function sauverCommeRoublard() {
        switch($('#niveau').val()) {
            case '00' :
                $('#sau_bon_bas_ref').html(' ');
                $('#sau_bon_bas_vig').html(' ');
                $('#sau_bon_bas_vol').html(' ');
                break;
            case '01' :
                $('#sau_bon_bas_ref').html('2');
                $('#sau_bon_bas_vig').html('0');
                $('#sau_bon_bas_vol').html('2');
                break;
            case '02' :
                $('#sau_bon_bas_ref').html('3');
                $('#sau_bon_bas_vig').html('0');
                $('#sau_bon_bas_vol').html('3');
                break;
            case '03' :
                $('#sau_bon_bas_ref').html('3');
                $('#sau_bon_bas_vig').html('1');
                $('#sau_bon_bas_vol').html('3');
                break;
            case '04' :
                $('#sau_bon_bas_ref').html('4');
                $('#sau_bon_bas_vig').html('1');
                $('#sau_bon_bas_vol').html('4');
                break;
            case '05' :
                $('#sau_bon_bas_ref').html('4');
                $('#sau_bon_bas_vig').html('1');
                $('#sau_bon_bas_vol').html('4');
                break;
            case '06' :
                $('#sau_bon_bas_ref').html('5');
                $('#sau_bon_bas_vig').html('2');
                $('#sau_bon_bas_vol').html('5');
                break;
            case '07' :
                $('#sau_bon_bas_ref').html('5');
                $('#sau_bon_bas_vig').html('2');
                $('#sau_bon_bas_vol').html('5');
                break;
            case '08' :
                $('#sau_bon_bas_ref').html('6');
                $('#sau_bon_bas_vig').html('2');
                $('#sau_bon_bas_vol').html('6');
                break;
            case '09' :
                $('#sau_bon_bas_ref').html('6');
                $('#sau_bon_bas_vig').html('3');
                $('#sau_bon_bas_vol').html('6');
                break;
            case '10' :
                $('#sau_bon_bas_ref').html('7');
                $('#sau_bon_bas_vig').html('3');
                $('#sau_bon_bas_vol').html('7');
                break;
            case '11' :
                $('#sau_bon_bas_ref').html('7');
                $('#sau_bon_bas_vig').html('3');
                $('#sau_bon_bas_vol').html('7');
                break;
            case '12' :
                $('#sau_bon_bas_ref').html('8');
                $('#sau_bon_bas_vig').html('4');
                $('#sau_bon_bas_vol').html('8');
                break;
            case '13' :
                $('#sau_bon_bas_ref').html('8');
                $('#sau_bon_bas_vig').html('4');
                $('#sau_bon_bas_vol').html('8');
                break;
            case '14' :
                $('#sau_bon_bas_ref').html('9');
                $('#sau_bon_bas_vig').html('4');
                $('#sau_bon_bas_vol').html('9');
                break;
            case '15' :
                $('#sau_bon_bas_ref').html('9');
                $('#sau_bon_bas_vig').html('5');
                $('#sau_bon_bas_vol').html('9');
                break;
            case '16' :
                $('#sau_bon_bas_ref').html('10');
                $('#sau_bon_bas_vig').html('5');
                $('#sau_bon_bas_vol').html('10');
                break;
            case '17' :
                $('#sau_bon_bas_ref').html('10');
                $('#sau_bon_bas_vig').html('5');
                $('#sau_bon_bas_vol').html('10');
                break;
            case '18' :
                $('#sau_bon_bas_ref').html('11');
                $('#sau_bon_bas_vig').html('6');
                $('#sau_bon_bas_vol').html('11');
                break;
            case '19' :
                $('#sau_bon_bas_ref').html('11');
                $('#sau_bon_bas_vig').html('6');
                $('#sau_bon_bas_vol').html('11');
                break;
            case '20' :
                $('#sau_bon_bas_ref').html('12');
                $('#sau_bon_bas_vig').html('6');
                $('#sau_bon_bas_vol').html('12');
                break;
        }
    };

    function sauverCommePretre() {
        switch($('#niveau').val()) {
            case '00' :
                $('#sau_bon_bas_ref').html(' ');
                $('#sau_bon_bas_vig').html(' ');
                $('#sau_bon_bas_vol').html(' ');
                break;
            case '01' :
                $('#sau_bon_bas_ref').html('0');
                $('#sau_bon_bas_vig').html('2');
                $('#sau_bon_bas_vol').html('2');
                break;
            case '02' :
                $('#sau_bon_bas_ref').html('0');
                $('#sau_bon_bas_vig').html('3');
                $('#sau_bon_bas_vol').html('3');
                break;
            case '03' :
                $('#sau_bon_bas_ref').html('1');
                $('#sau_bon_bas_vig').html('3');
                $('#sau_bon_bas_vol').html('3');
                break;
            case '04' :
                $('#sau_bon_bas_ref').html('1');
                $('#sau_bon_bas_vig').html('4');
                $('#sau_bon_bas_vol').html('4');
                break;
            case '05' :
                $('#sau_bon_bas_ref').html('1');
                $('#sau_bon_bas_vig').html('4');
                $('#sau_bon_bas_vol').html('4');
                break;
            case '06' :
                $('#sau_bon_bas_ref').html('2');
                $('#sau_bon_bas_vig').html('5');
                $('#sau_bon_bas_vol').html('5');
                break;
            case '07' :
                $('#sau_bon_bas_ref').html('2');
                $('#sau_bon_bas_vig').html('5');
                $('#sau_bon_bas_vol').html('5');
                break;
            case '08' :
                $('#sau_bon_bas_ref').html('2');
                $('#sau_bon_bas_vig').html('6');
                $('#sau_bon_bas_vol').html('6');
                break;
            case '09' :
                $('#sau_bon_bas_ref').html('3');
                $('#sau_bon_bas_vig').html('6');
                $('#sau_bon_bas_vol').html('6');
                break;
            case '10' :
                $('#sau_bon_bas_ref').html('3');
                $('#sau_bon_bas_vig').html('7');
                $('#sau_bon_bas_vol').html('7');
                break;
            case '11' :
                $('#sau_bon_bas_ref').html('3');
                $('#sau_bon_bas_vig').html('7');
                $('#sau_bon_bas_vol').html('7');
                break;
            case '12' :
                $('#sau_bon_bas_ref').html('4');
                $('#sau_bon_bas_vig').html('8');
                $('#sau_bon_bas_vol').html('8');
                break;
            case '13' :
                $('#sau_bon_bas_ref').html('4');
                $('#sau_bon_bas_vig').html('8');
                $('#sau_bon_bas_vol').html('8');
                break;
            case '14' :
                $('#sau_bon_bas_ref').html('4');
                $('#sau_bon_bas_vig').html('9');
                $('#sau_bon_bas_vol').html('9');
                break;
            case '15' :
                $('#sau_bon_bas_ref').html('5');
                $('#sau_bon_bas_vig').html('9');
                $('#sau_bon_bas_vol').html('9');
                break;
            case '16' :
                $('#sau_bon_bas_ref').html('5');
                $('#sau_bon_bas_vig').html('10');
                $('#sau_bon_bas_vol').html('10');
                break;
            case '17' :
                $('#sau_bon_bas_ref').html('5');
                $('#sau_bon_bas_vig').html('10');
                $('#sau_bon_bas_vol').html('10');
                break;
            case '18' :
                $('#sau_bon_bas_ref').html('6');
                $('#sau_bon_bas_vig').html('11');
                $('#sau_bon_bas_vol').html('11');
                break;
            case '19' :
                $('#sau_bon_bas_ref').html('6');
                $('#sau_bon_bas_vig').html('11');
                $('#sau_bon_bas_vol').html('11');
                break;
            case '20' :
                $('#sau_bon_bas_ref').html('6');
                $('#sau_bon_bas_vig').html('12');
                $('#sau_bon_bas_vol').html('12');
                break;
        }
    };

    function sauverCommeMagicien() {
        switch($('#niveau').val()) {
            case '00' :
                $('#sau_bon_bas_ref').html(' ');
                $('#sau_bon_bas_vig').html(' ');
                $('#sau_bon_bas_vol').html(' ');
                break;
            case '01' :
                $('#sau_bon_bas_ref').html('0');
                $('#sau_bon_bas_vig').html('0');
                $('#sau_bon_bas_vol').html('2');
                break;
            case '02' :
                $('#sau_bon_bas_ref').html('0');
                $('#sau_bon_bas_vig').html('0');
                $('#sau_bon_bas_vol').html('3');
                break;
            case '03' :
                $('#sau_bon_bas_ref').html('1');
                $('#sau_bon_bas_vig').html('1');
                $('#sau_bon_bas_vol').html('3');
                break;
            case '04' :
                $('#sau_bon_bas_ref').html('1');
                $('#sau_bon_bas_vig').html('1');
                $('#sau_bon_bas_vol').html('4');
                break;
            case '05' :
                $('#sau_bon_bas_ref').html('1');
                $('#sau_bon_bas_vig').html('1');
                $('#sau_bon_bas_vol').html('4');
                break;
            case '06' :
                $('#sau_bon_bas_ref').html('2');
                $('#sau_bon_bas_vig').html('2');
                $('#sau_bon_bas_vol').html('5');
                break;
            case '07' :
                $('#sau_bon_bas_ref').html('2');
                $('#sau_bon_bas_vig').html('2');
                $('#sau_bon_bas_vol').html('5');
                break;
            case '08' :
                $('#sau_bon_bas_ref').html('2');
                $('#sau_bon_bas_vig').html('2');
                $('#sau_bon_bas_vol').html('6');
                break;
            case '09' :
                $('#sau_bon_bas_ref').html('3');
                $('#sau_bon_bas_vig').html('3');
                $('#sau_bon_bas_vol').html('6');
                break;
            case '10' :
                $('#sau_bon_bas_ref').html('3');
                $('#sau_bon_bas_vig').html('3');
                $('#sau_bon_bas_vol').html('7');
                break;
            case '11' :
                $('#sau_bon_bas_ref').html('3');
                $('#sau_bon_bas_vig').html('3');
                $('#sau_bon_bas_vol').html('7');
                break;
            case '12' :
                $('#sau_bon_bas_ref').html('4');
                $('#sau_bon_bas_vig').html('4');
                $('#sau_bon_bas_vol').html('8');
                break;
            case '13' :
                $('#sau_bon_bas_ref').html('4');
                $('#sau_bon_bas_vig').html('4');
                $('#sau_bon_bas_vol').html('8');
                break;
            case '14' :
                $('#sau_bon_bas_ref').html('4');
                $('#sau_bon_bas_vig').html('4');
                $('#sau_bon_bas_vol').html('9');
                break;
            case '15' :
                $('#sau_bon_bas_ref').html('5');
                $('#sau_bon_bas_vig').html('5');
                $('#sau_bon_bas_vol').html('9');
                break;
            case '16' :
                $('#sau_bon_bas_ref').html('5');
                $('#sau_bon_bas_vig').html('5');
                $('#sau_bon_bas_vol').html('10');
                break;
            case '17' :
                $('#sau_bon_bas_ref').html('5');
                $('#sau_bon_bas_vig').html('5');
                $('#sau_bon_bas_vol').html('10');
                break;
            case '18' :
                $('#sau_bon_bas_ref').html('6');
                $('#sau_bon_bas_vig').html('6');
                $('#sau_bon_bas_vol').html('11');
                break;
            case '19' :
                $('#sau_bon_bas_ref').html('6');
                $('#sau_bon_bas_vig').html('6');
                $('#sau_bon_bas_vol').html('11');
                break;
            case '20' :
                $('#sau_bon_bas_ref').html('6');
                $('#sau_bon_bas_vig').html('6');
                $('#sau_bon_bas_vol').html('12');
                break;
        }
    };

    function sauverCommeMoine() {
        switch($('#niveau').val()) {
            case '00' :
                $('#sau_bon_bas_ref').html(' ');
                $('#sau_bon_bas_vig').html(' ');
                $('#sau_bon_bas_vol').html(' ');
                break;
            case '01' :
                $('#sau_bon_bas_ref').html('2');
                $('#sau_bon_bas_vig').html('2');
                $('#sau_bon_bas_vol').html('2');
                break;
            case '02' :
                $('#sau_bon_bas_ref').html('3');
                $('#sau_bon_bas_vig').html('3');
                $('#sau_bon_bas_vol').html('3');
                break;
            case '03' :
                $('#sau_bon_bas_ref').html('3');
                $('#sau_bon_bas_vig').html('3');
                $('#sau_bon_bas_vol').html('3');
                break;
            case '04' :
                $('#sau_bon_bas_ref').html('4');
                $('#sau_bon_bas_vig').html('4');
                $('#sau_bon_bas_vol').html('4');
                break;
            case '05' :
                $('#sau_bon_bas_ref').html('4');
                $('#sau_bon_bas_vig').html('4');
                $('#sau_bon_bas_vol').html('4');
                break;
            case '06' :
                $('#sau_bon_bas_ref').html('5');
                $('#sau_bon_bas_vig').html('5');
                $('#sau_bon_bas_vol').html('5');
                break;
            case '07' :
                $('#sau_bon_bas_ref').html('5');
                $('#sau_bon_bas_vig').html('5');
                $('#sau_bon_bas_vol').html('5');
                break;
            case '08' :
                $('#sau_bon_bas_ref').html('6');
                $('#sau_bon_bas_vig').html('6');
                $('#sau_bon_bas_vol').html('6');
                break;
            case '09' :
                $('#sau_bon_bas_ref').html('6');
                $('#sau_bon_bas_vig').html('6');
                $('#sau_bon_bas_vol').html('6');
                break;
            case '10' :
                $('#sau_bon_bas_ref').html('7');
                $('#sau_bon_bas_vig').html('7');
                $('#sau_bon_bas_vol').html('7');
                break;
            case '11' :
                $('#sau_bon_bas_ref').html('7');
                $('#sau_bon_bas_vig').html('7');
                $('#sau_bon_bas_vol').html('7');
                break;
            case '12' :
                $('#sau_bon_bas_ref').html('8');
                $('#sau_bon_bas_vig').html('8');
                $('#sau_bon_bas_vol').html('8');
                break;
            case '13' :
                $('#sau_bon_bas_ref').html('8');
                $('#sau_bon_bas_vig').html('8');
                $('#sau_bon_bas_vol').html('8');
                break;
            case '14' :
                $('#sau_bon_bas_ref').html('9');
                $('#sau_bon_bas_vig').html('9');
                $('#sau_bon_bas_vol').html('9');
                break;
            case '15' :
                $('#sau_bon_bas_ref').html('9');
                $('#sau_bon_bas_vig').html('9');
                $('#sau_bon_bas_vol').html('9');
                break;
            case '16' :
                $('#sau_bon_bas_ref').html('10');
                $('#sau_bon_bas_vig').html('10');
                $('#sau_bon_bas_vol').html('10');
                break;
            case '17' :
                $('#sau_bon_bas_ref').html('10');
                $('#sau_bon_bas_vig').html('10');
                $('#sau_bon_bas_vol').html('10');
                break;
            case '18' :
                $('#sau_bon_bas_ref').html('11');
                $('#sau_bon_bas_vig').html('11');
                $('#sau_bon_bas_vol').html('11');
                break;
            case '19' :
                $('#sau_bon_bas_ref').html('11');
                $('#sau_bon_bas_vig').html('11');
                $('#sau_bon_bas_vol').html('11');
                break;
            case '20' :
                $('#sau_bon_bas_ref').html('12');
                $('#sau_bon_bas_vig').html('12');
                $('#sau_bon_bas_vol').html('12');
                break;
        }
    };

    function sauverCommeRodeur() {
        switch($('#niveau').val()) {
            case '00' :
                $('#sau_bon_bas_ref').html(' ');
                $('#sau_bon_bas_vig').html(' ');
                $('#sau_bon_bas_vol').html(' ');
                break;
            case '01' :
                $('#sau_bon_bas_ref').html('2');
                $('#sau_bon_bas_vig').html('2');
                $('#sau_bon_bas_vol').html('0');
                break;
            case '02' :
                $('#sau_bon_bas_ref').html('3');
                $('#sau_bon_bas_vig').html('3');
                $('#sau_bon_bas_vol').html('0');
                break;
            case '03' :
                $('#sau_bon_bas_ref').html('3');
                $('#sau_bon_bas_vig').html('3');
                $('#sau_bon_bas_vol').html('1');
                break;
            case '04' :
                $('#sau_bon_bas_ref').html('4');
                $('#sau_bon_bas_vig').html('4');
                $('#sau_bon_bas_vol').html('1');
                break;
            case '05' :
                $('#sau_bon_bas_ref').html('4');
                $('#sau_bon_bas_vig').html('4');
                $('#sau_bon_bas_vol').html('1');
                break;
            case '06' :
                $('#sau_bon_bas_ref').html('5');
                $('#sau_bon_bas_vig').html('5');
                $('#sau_bon_bas_vol').html('2');
                break;
            case '07' :
                $('#sau_bon_bas_ref').html('5');
                $('#sau_bon_bas_vig').html('5');
                $('#sau_bon_bas_vol').html('2');
                break;
            case '08' :
                $('#sau_bon_bas_ref').html('6');
                $('#sau_bon_bas_vig').html('6');
                $('#sau_bon_bas_vol').html('2');
                break;
            case '09' :
                $('#sau_bon_bas_ref').html('6');
                $('#sau_bon_bas_vig').html('6');
                $('#sau_bon_bas_vol').html('3');
                break;
            case '10' :
                $('#sau_bon_bas_ref').html('7');
                $('#sau_bon_bas_vig').html('7');
                $('#sau_bon_bas_vol').html('3');
                break;
            case '11' :
                $('#sau_bon_bas_ref').html('7');
                $('#sau_bon_bas_vig').html('7');
                $('#sau_bon_bas_vol').html('3');
                break;
            case '12' :
                $('#sau_bon_bas_ref').html('8');
                $('#sau_bon_bas_vig').html('8');
                $('#sau_bon_bas_vol').html('4');
                break;
            case '13' :
                $('#sau_bon_bas_ref').html('8');
                $('#sau_bon_bas_vig').html('8');
                $('#sau_bon_bas_vol').html('4');
                break;
            case '14' :
                $('#sau_bon_bas_ref').html('9');
                $('#sau_bon_bas_vig').html('9');
                $('#sau_bon_bas_vol').html('4');
                break;
            case '15' :
                $('#sau_bon_bas_ref').html('9');
                $('#sau_bon_bas_vig').html('9');
                $('#sau_bon_bas_vol').html('5');
                break;
            case '16' :
                $('#sau_bon_bas_ref').html('10');
                $('#sau_bon_bas_vig').html('10');
                $('#sau_bon_bas_vol').html('5');
                break;
            case '17' :
                $('#sau_bon_bas_ref').html('10');
                $('#sau_bon_bas_vig').html('10');
                $('#sau_bon_bas_vol').html('5');
                break;
            case '18' :
                $('#sau_bon_bas_ref').html('11');
                $('#sau_bon_bas_vig').html('11');
                $('#sau_bon_bas_vol').html('6');
                break;
            case '19' :
                $('#sau_bon_bas_ref').html('11');
                $('#sau_bon_bas_vig').html('11');
                $('#sau_bon_bas_vol').html('6');
                break;
            case '20' :
                $('#sau_bon_bas_ref').html('12');
                $('#sau_bon_bas_vig').html('12');
                $('#sau_bon_bas_vol').html('6');
                break;
        }
    };

    function calculeReflexes()  {
        /* si sau_bon_bas_ref.value n'est pas renseigné, 
        il n'est pas un number
        d'où son forçage à 0*/
        if (isNaN(parseInt($('#sau_bon_bas_ref').html()))) {
            $('#sau_bon_bas_ref').html(0);
        };

        if (isNaN(parseInt($('#sau_mod_car_ref').html()))) {
            $('#sau_mod_car_ref').html(0);
        };

        if (isNaN(parseInt($('#sau_mod_mag_ref_bon').val()))) {
            $('#sau_mod_mag_ref_bon').val(0);
        };

        if (isNaN(parseInt($('#sau_mod_div_ref_bon').val()))) {
            $('#sau_mod_div_ref_bon').val(0);
        };

        if (isNaN(parseInt($('#mod_tem_ref').val()))) {
            $('#mod_tem_ref').val(0);
        };

        if (isNaN(parseInt($('#mod_part_ref').val()))) {
            $('#mod_part_ref').val(0);
        };

        $('#sau_total_ref').html(parseInt($('#sau_bon_bas_ref').html())
                               + parseInt($('#sau_mod_car_ref').html())
                               + parseInt($('#sau_mod_mag_ref_bon').val()) 
                               + parseInt($('#sau_mod_div_ref_bon').val())                                                           
                               + parseInt($('#mod_tem_ref').val())
                               + parseInt($('#mod_part_ref').val()));
    };

    function calculeVigeur() {
        /* si document.form.sau_bon_bas_vig.value n'est pas renseigné, 
        il n'est pas un number
        d'où son forçage à 0*/
        if (isNaN(parseInt($('#sau_bon_bas_vig').html()))) {
            $('#sau_bon_bas_vig').html(0);
        };

        if (isNaN(parseInt($('#sau_mod_car_vig').html()))) {
            $('#sau_mod_car_vig').html(0);
        };

        if (isNaN(parseInt($('#sau_mod_mag_vig_bon').val()))) {
            $('#sau_mod_mag_vig_bon').val(0);
        };

        if (isNaN(parseInt($('#sau_mod_div_vig_bon').val()))) {
            $('#sau_mod_div_vig_bon').val(0);
        };

        if (isNaN(parseInt($('#mod_tem_vig').val()))) {
            $('#mod_tem_vig').val(0);
        };

        if (isNaN(parseInt($('#mod_part_vig').val()))) {
            $('#mod_part_vig').val(0);
        };

        $('#sau_total_vig').html(parseInt($('#sau_bon_bas_vig').html())
                               + parseInt($('#sau_mod_car_vig').html())
                               + parseInt($('#sau_mod_mag_vig_bon').val()) 
                               + parseInt($('#sau_mod_div_vig_bon').val())                                                           
                               + parseInt($('#mod_tem_vig').val())
                               + parseInt($('#mod_part_vig').val()));
    };

    function calculeVolonte()  {
        /* si document.form.sau_bon_bas_vol.value n'est pas renseigné, 
        il n'est pas un number
        d'où son forçage à 0*/
        if (isNaN(parseInt($('#sau_bon_bas_vol').html()))) {
            $('#sau_bon_bas_vol').html(0);
        };

        if (isNaN(parseInt($('#sau_mod_car_vol').html()))) {
            $('#sau_mod_car_vol').html(0);
        };

        if (isNaN(parseInt($('#sau_mod_mag_vol_bon').val()))) {
            $('#sau_mod_mag_vol_bon').val(0);
        };

        if (isNaN(parseInt($('#sau_mod_div_vol_bon').val()))) {
            $('#sau_mod_div_vol_bon').val(0);
        };

        if (isNaN(parseInt($('#mod_tem_vol').val()))) {
            $('#mod_tem_vol').val(0);
        };

        if (isNaN(parseInt($('#mod_part_vol').val()))) {
            $('#mod_part_vol').val(0);
        };

        $('#sau_total_vol').html(parseInt($('#sau_bon_bas_vol').html())
                               + parseInt($('#sau_mod_car_vol').html())
                               + parseInt($('#sau_mod_mag_vol_bon').val()) 
                               + parseInt($('#sau_mod_div_vol_bon').val())                                                           
                               + parseInt($('#mod_tem_vol').val())
                               + parseInt($('#mod_part_vol').val()));
    };

    function reductionDegats() {
        switch($('#niveau').val()) {
            case '00' :
                $('#red_deg').html('0');
                break;
            case '01' :
                $('#red_deg').html('0');
                break;
            case '02' :
                $('#red_deg').html('0');
                break;
            case '03' :
                $('#red_deg').html('0');
                break;
            case '04' :
                $('#red_deg').html('0');
                break;
            case '05' :
                $('#red_deg').html('0');
                break;
            case '06' :
                $('#red_deg').html('0');
                break;
            case '07' :
                $('#red_deg').html('1/-');
                break;
            case '08' :
                $('#red_deg').html('1/-');
                break;
            case '09' :
                $('#red_deg').html('1/-');
                break;
            case '10' :
                $('#red_deg').html('2/-');
                break;
            case '11' :
                $('#red_deg').html('2/-');
                break;
            case '12' :
                $('#red_deg').html('2/-');
                break;
            case '13' :
                $('#red_deg').html('3/-');
                break;
            case '14' :
                $('#red_deg').html('3/-');
                break;
            case '15' :
                $('#red_deg').html('3/-');
                break;
            case '16' :
                $('#red_deg').html('4/-');
                break;
            case '17' :
                $('#red_deg').html('4/-');
                break;
            case '18' :
                $('#red_deg').html('4/-');
                break;
            case '19' :
                $('#red_deg').html('5/-');
                break;
            case '20' :
                $('#red_deg').html('5/-');
                break;
            };
    };

    function capacitesSpecialesBarbare() {
        if ($('#niveau').val() >= 1) {
            $('#capacites_speciales_I').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.barbare.ashx#DEPLACEMENTACCELERE">Déplacement accéléré.</a>');
            $('#capacites_speciales_II').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.barbare.ashx#RAGEDEBERSERKER">Rage de berserker.</a>');
        };

        if ($('#niveau').val() >= 2) {
            $('#capacites_speciales_III').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.barbare.ashx#POUVOIRDERAGE">Pouvoir de rage.</a>');
            $('#capacites_speciales_IV').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.barbare.ashx#ESQUIVEINSTINCTIVE">Esquive instinctive.</a>');
        };

        if ($('#niveau').val() >= 3) {
            $('#capacites_speciales_V').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.barbare.ashx#SENSDESPIEGES">Sens des pièges +1.</a>');
        };

        if ($('#niveau').val() >= 4) {
            $('#capacites_speciales_VI').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.barbare.ashx#POUVOIRDERAGE">Pouvoir de rage.</a>');
        };

        if ($('#niveau').val() >= 5) {
            $('#capacites_speciales_VII').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.barbare.ashx#ESQUIVEINSTINCTIVESUPERIEURE">Esquive instinctive supérieure.</a>');
        };

        if ($('#niveau').val() >= 6) {
            $('#capacites_speciales_VIII').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.barbare.ashx#POUVOIRDERAGE">Pouvoir de rage.</a>');
            $('#capacites_speciales_V').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.barbare.ashx#SENSDESPIEGES">Sens des pièges +2.</a>');
        };

        if ($('#niveau').val() >= 7) {
            $('#capacites_speciales_IX').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.barbare.ashx#REDUCTIONDEGATS">réduction de dégâts 1/-.</a>');
        };

        if ($('#niveau').val() >= 8) {
            $('#capacites_speciales_X').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.barbare.ashx#POUVOIRDERAGE">Pouvoir de rage.</a>');
        };

        if ($('#niveau').val() >= 9) {
            $('#capacites_speciales_V').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.barbare.ashx#SENSDESPIEGES">Sens des pièges +3.</a>');
        };

        if ($('#niveau').val() >= 10) {
            $('#capacites_speciales_IX').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.barbare.ashx#REDUCTIONDEGATS">réduction de dégâts 2/-.</a>');
            $('#capacites_speciales_XI').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.barbare.ashx#POUVOIRDERAGE">Pouvoir de rage.</a>');
        };

        if ($('#niveau').val() >= 11) {
            $('#capacites_speciales_XII').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.barbare.ashx#RAGEDEGRANDBERSERKER">Rage de grand berserker.</a>');
        };

        if ($('#niveau').val() >= 12) {
            $('#capacites_speciales_XIII').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.barbare.ashx#POUVOIRDERAGE">Pouvoir de rage.</a>');
            $('#capacites_speciales_V').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.barbare.ashx#SENSDESPIEGES">Sens des pièges +4.</a>');
        };

        if ($('#niveau').val() >= 13) {
            $('#capacites_speciales_IX').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.barbare.ashx#REDUCTIONDEGATS">réduction de dégâts 3/-.</a>');
        };

        if ($('#niveau').val() >= 14) {
            $('#capacites_speciales_XIV').html('<a target="_blank" href="">Volonté indomptable.</a>');
            $('#capacites_speciales_XV').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.barbare.ashx#POUVOIRDERAGE">Pouvoir de rage.</a>');
        };

        if ($('#niveau').val() >= 15) {
            $('#capacites_speciales_V').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.barbare.ashx#SENSDESPIEGES">Sens des pièges +5.</a>');
        };

        if ($('#niveau').val() >= 16) {
            $('#capacites_speciales_IX').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.barbare.ashx#REDUCTIONDEGATS">réduction de dégâts 4/-.</a>');
            $('#capacites_speciales_XVI').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.barbare.ashx#POUVOIRDERAGE">Pouvoir de rage..</a>');
        };

        if ($('#niveau').val() >= 17) {
            $('#capacites_speciales_XVII').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.barbare.ashx#RAGESANSFATIGUE">Rage sans fatigue.</a>');
        };

        if ($('#niveau').val() >= 18) {
            $('#capacites_speciales_XVIII').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.barbare.ashx#POUVOIRDERAGE">Pouvoir de rage.</a>');
            $('#capacites_speciales_V').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.barbare.ashx#SENSDESPIEGES">Sens des pièges +6.</a>');
        };

        if ($('#niveau').val() >= 19) {
            $('#capacites_speciales_IX').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.barbare.ashx#REDUCTIONDEGATS">réduction de dégâts 5/-.</a>');
        };

        if ($('#niveau').val() >= 20) {
            $('#capacites_speciales_XIX').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.barbare.ashx#RAGEDEMAITREBERSERKER">Rage de maître berserker.</a>');
            $('#capacites_speciales_XX').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.barbare.ashx#POUVOIRDERAGE">Pouvoir de rage.</a>');
        };
    };

    function capacitesSpecialesBarde() {
        if ($('#niveau').val() >= 1) {
            $('#capacites_speciales_I').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.barde.ashx#SAVOIRBARDIQUE">Savoir bardique.</a>');
            $('#capacites_speciales_II').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.barde.ashx#REPRESENTATIONBARDIQUE">Représentation bardique.</a>.');
            $('#capacites_speciales_III').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.barde.ashx#TOURSDEMAGIE">Tours de magie.</a>.');
            $('#capacites_speciales_IV').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Repr%c3%a9sentations.ashx#CONTRE-CHANT">Contre-chant.</a>.');
            $('#capacites_speciales_V').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Repr%c3%a9sentations.ashx#DISTRACTION">Distraction.</a>.');
            $('#capacites_speciales_VI').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Repr%c3%a9sentations.ashx#FASCINATION">Fascination.</a>');
            $('#capacites_speciales_VII').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Repr%c3%a9sentations.ashx#INSPIRATIONVAILLANTE">Inspiration vaillante +1.</a>');

            $('#sorts_connus_0').html('4');
            $('#sorts_connus_I').html('2');

            $('#sorts_jour_0').html('1');
        };

        if ($('#niveau').val() >= 2) {
            $('#capacites_speciales_VIII').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.barde.ashx#VERSATILITEARTISTIQUE">Versatilité artistique.</a>');
            $('#capacites_speciales_IX').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.barde.ashx#ERUDITION">Erudition.</a>');

            $('#sorts_connus_0').html('5');
            $('#sorts_connus_I').html('3');

            $('#sorts_jour_0').html('2');
        };

        if ($('#niveau').val() >= 3) {
            $('#capacites_speciales_X').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Repr%c3%a9sentations.ashx#INSPIRATIONTALENTUEUSE">Inspiration talentueuse +2.</a>');

            $('#sorts_connus_0').html('6');
            $('#sorts_connus_I').html('4');

            $('#sorts_jour_0').html('3');
        };

        if ($('#niveau').val() >= 4) {
            $('#sorts_connus_0').html('6');
            $('#sorts_connus_I').html('4');
            $('#sorts_connus_II').html('2');

            $('#sorts_jour_0').html('3');
            $('#sorts_jour_I').html('1');
        };

        if ($('#niveau').val() >= 5) {
            $('#capacites_speciales_VII').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Repr%c3%a9sentations.ashx#INSPIRATIONVAILLANTE">Inspiration vaillante +2.</a>');
            $('#capacites_speciales_XI').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.barde.ashx#MAITREDUSAVOIR">Maître du savoir 1/jour.</a>');

            $('#sorts_connus_0').html('6');
            $('#sorts_connus_I').html('4');
            $('#sorts_connus_II').html('3');

            $('#sorts_jour_0').html('4');
            $('#sorts_jour_I').html('2');
        };

        if ($('#niveau').val() >= 6) {
            $('#capacites_speciales_XII').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Repr%c3%a9sentations.ashx#SUGGESTION">Suggestion.</a>');
            $('#capacites_speciales_XIII').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.barde.ashx#VERSATILITEARTISTIQUE">Versatilité artistique.</a>');

            $('#sorts_connus_0').html('6');
            $('#sorts_connus_I').html('4');
            $('#sorts_connus_II').html('4');

            $('#sorts_jour_0').html('4');
            $('#sorts_jour_I').html('3');
        };

        if ($('#niveau').val() >= 7) {
            $('#capacites_speciales_X').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Repr%c3%a9sentations.ashx#INSPIRATIONTALENTUEUSE">Inspiration talentueuse +3.</a>');

            $('#sorts_connus_0').html('6');
            $('#sorts_connus_I').html('5');
            $('#sorts_connus_II').html('4');
            $('#sorts_connus_III').html('2');

            $('#sorts_jour_0').html('4');
            $('#sorts_jour_I').html('3');
            $('#sorts_jour_II').html('1');
        };

        if ($('#niveau').val() >= 8) {
            $('#capacites_speciales_XIV').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Repr%c3%a9sentations.ashx#CHANTFUNESTE">Chant funeste.</a>');

            $('#sorts_connus_0').html('6');
            $('#sorts_connus_I').html('5');
            $('#sorts_connus_II').html('4');
            $('#sorts_connus_III').html('3');

            $('#sorts_jour_0').html('4');
            $('#sorts_jour_I').html('4');
            $('#sorts_jour_II').html('2');
        };

        if ($('#niveau').val() >= 9) {
            $('#capacites_speciales_XV').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Repr%c3%a9sentations.ashx#INSPIRATIONGLORIEUSE">Inspiration glorieuse.</a>');

            $('#sorts_connus_0').html('6');
            $('#sorts_connus_I').html('5');
            $('#sorts_connus_II').html('4');
            $('#sorts_connus_III').html('4');

            $('#sorts_jour_0').html('5');
            $('#sorts_jour_I').html('4');
            $('#sorts_jour_II').html('3');
        };

        if ($('#niveau').val() >= 10) {
            $('#capacites_speciales_XVI').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.barde.ashx#TOUCHE-A-TOUT">Touche-à-tout.</a>');
            $('#capacites_speciales_XVII').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.barde.ashx#VERSATILITEARTISTIQUE">Versatilité artistique.</a>');

            $('#sorts_connus_0').html('6');
            $('#sorts_connus_I').html('5');
            $('#sorts_connus_II').html('5');
            $('#sorts_connus_III').html('4');
            $('#sorts_connus_IV').html('2');

            $('#sorts_jour_0').html('4');
            $('#sorts_jour_I').html('3');
            $('#sorts_jour_II').html('1');
        };

        if ($('#niveau').val() >= 11) {
            $('#capacites_speciales_X').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Repr%c3%a9sentations.ashx#INSPIRATIONTALENTUEUSE">Inspiration talentueuse +4.</a>');
            $('#capacites_speciales_VII').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Repr%c3%a9sentations.ashx#INSPIRATIONVAILLANTE">Inspiration vaillante +3.</a>');
            $('#capacites_speciales_XI').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.barde.ashx#MAITREDUSAVOIR">Maître du savoir 2/jour.</a>');

            $('#sorts_connus_0').html('6');
            $('#sorts_connus_I').html('6');
            $('#sorts_connus_II').html('5');
            $('#sorts_connus_III').html('4');
            $('#sorts_connus_IV').html('3');

            $('#sorts_jour_0').html('4');
            $('#sorts_jour_I').html('4');
            $('#sorts_jour_II').html('2');
        };

        if ($('#niveau').val() >= 12) {
            $('#capacites_speciales_XVIII').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Repr%c3%a9sentations.ashx#REPRESENTATIONAPAISANTE">Représentation apaisante.</a>');

            $('#sorts_connus_0').html('6');
            $('#sorts_connus_I').html('6');
            $('#sorts_connus_II').html('5');
            $('#sorts_connus_III').html('4');
            $('#sorts_connus_IV').html('4');

            $('#sorts_jour_0').html('5');
            $('#sorts_jour_I').html('4');
            $('#sorts_jour_II').html('3');
        };

        if ($('#niveau').val() >= 13) {
            $('#sorts_connus_0').html('6');
            $('#sorts_connus_I').html('6');
            $('#sorts_connus_II').html('5');
            $('#sorts_connus_III').html('5');
            $('#sorts_connus_IV').html('4');
            $('#sorts_connus_V').html('2');

            $('#sorts_jour_0').html('5');
            $('#sorts_jour_I').html('4');
            $('#sorts_jour_II').html('3');
            $('#sorts_jour_III').html('1');
        };

        if ($('#niveau').val() >= 14) {
            $('#capacites_speciales_XIX').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Repr%c3%a9sentations.ashx#MELODIEEFFRAYANTE">Mélodie effrayante.</a>');
            $('#capacites_speciales_XX').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.barde.ashx#VERSATILITEARTISTIQUE">Versatilité artistique.</a>');

            $('#sorts_connus_0').html('6');
            $('#sorts_connus_I').html('6');
            $('#sorts_connus_II').html('6');
            $('#sorts_connus_III').html('5');
            $('#sorts_connus_IV').html('4');
            $('#sorts_connus_V').html('3');

            $('#sorts_jour_0').html('5');
            $('#sorts_jour_I').html('4');
            $('#sorts_jour_II').html('4');
            $('#sorts_jour_III').html('2');
        };

        if ($('#niveau').val() >= 15) {
            $('#capacites_speciales_X').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Repr%c3%a9sentations.ashx#INSPIRATIONTALENTUEUSE">Inspiration talentueuse +5.</a>');
            $('#capacites_speciales_XXI').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Repr%c3%a9sentations.ashx#INSPIRATIONHEROIQUE">Inspiration héroïque.</a>');

            $('#sorts_connus_0').html('6');
            $('#sorts_connus_I').html('6');
            $('#sorts_connus_II').html('6');
            $('#sorts_connus_III').html('5');
            $('#sorts_connus_IV').html('4');
            $('#sorts_connus_V').html('4');

            $('#sorts_jour_0').html('5');
            $('#sorts_jour_I').html('5');
            $('#sorts_jour_II').html('4');
            $('#sorts_jour_III').html('3');
        };

        if ($('#niveau').val() >= 16) {
            $('#sorts_connus_0').html('6');
            $('#sorts_connus_I').html('6');
            $('#sorts_connus_II').html('6');
            $('#sorts_connus_III').html('5');
            $('#sorts_connus_IV').html('5');
            $('#sorts_connus_V').html('4');
            $('#sorts_connus_VI').html('2');

            $('#sorts_jour_0').html('5');
            $('#sorts_jour_I').html('5');
            $('#sorts_jour_II').html('5');
            $('#sorts_jour_III').html('4');
            $('#sorts_jour_IV').html('3');
            $('#sorts_jour_V').html('1');
        };

        if ($('#niveau').val() >= 17) {
            $('#capacites_speciales_VII').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Repr%c3%a9sentations.ashx#INSPIRATIONVAILLANTE">Inspiration vaillante +4.</a>');
            $('#capacites_speciales_XI').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.barde.ashx#MAITREDUSAVOIR">Maître du savoir 3/jour.</a>');

            $('#sorts_connus_0').html('6');
            $('#sorts_connus_I').html('6');
            $('#sorts_connus_II').html('6');
            $('#sorts_connus_III').html('6');
            $('#sorts_connus_IV').html('5');
            $('#sorts_connus_V').html('4');
            $('#sorts_connus_VI').html('3');

            $('#sorts_jour_0').html('5');
            $('#sorts_jour_I').html('5');
            $('#sorts_jour_II').html('5');
            $('#sorts_jour_III').html('4');
            $('#sorts_jour_IV').html('4');
            $('#sorts_jour_V').html('2');
        };

        if ($('#niveau').val() >= 18) {
            $('#capacites_speciales_XXII').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Repr%c3%a9sentations.ashx#SUGGESTIONDEGROUPE">Suggestion de groupe.</a>');
            $('#capacites_speciales_XXIII').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.barde.ashx#VERSATILITEARTISTIQUE">Versatilité artistique.</a>');

            $('#sorts_connus_0').html('6');
            $('#sorts_connus_I').html('6');
            $('#sorts_connus_II').html('6');
            $('#sorts_connus_III').html('6');
            $('#sorts_connus_IV').html('5');
            $('#sorts_connus_V').html('4');
            $('#sorts_connus_VI').html('4');

            $('#sorts_jour_0').html('5');
            $('#sorts_jour_I').html('5');
            $('#sorts_jour_II').html('5');
            $('#sorts_jour_III').html('5');
            $('#sorts_jour_IV').html('4');
            $('#sorts_jour_V').html('3');
        };

        if ($('#niveau').val() >= 19) {
            $('#capacites_speciales_X').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Repr%c3%a9sentations.ashx#INSPIRATIONTALENTUEUSE">Inspiration talentueuse +6.</a>');

            $('#sorts_connus_0').html('6');
            $('#sorts_connus_I').html('6');
            $('#sorts_connus_II').html('6');
            $('#sorts_connus_III').html('6');
            $('#sorts_connus_IV').html('5');
            $('#sorts_connus_V').html('5');
            $('#sorts_connus_VI').html('4');

            $('#sorts_jour_0').html('5');
            $('#sorts_jour_I').html('5');
            $('#sorts_jour_II').html('5');
            $('#sorts_jour_III').html('5');
            $('#sorts_jour_IV').html('5');
            $('#sorts_jour_V').html('4');
        };

        if ($('#niveau').val() >= 20) {
            $('#capacites_speciales_XXIV').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Repr%c3%a9sentations.ashx#REPRESENTATIONMORTELLE">Représentation mortelle.</a>');

            $('#sorts_connus_0').html('6');
            $('#sorts_connus_I').html('6');
            $('#sorts_connus_II').html('6');
            $('#sorts_connus_III').html('6');
            $('#sorts_connus_IV').html('6');
            $('#sorts_connus_V').html('5');
            $('#sorts_connus_VI').html('5');

            $('#sorts_jour_0').html('5');
            $('#sorts_jour_I').html('5');
            $('#sorts_jour_II').html('5');
            $('#sorts_jour_III').html('5');
            $('#sorts_jour_IV').html('5');
            $('#sorts_jour_V').html('5');
        };
    };

    function capacitesSpecialesDruide() {
        if ($('#niveau').val() >= 1) {
            $('#capacites_speciales_I').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.druide.ashx#PACTEAVECLANATURE">pacte avec la nature.</a>');
            $('#capacites_speciales_II').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.druide.ashx#INSTINCTNATUREL">instinct naturel.</a>');
            $('#capacites_speciales_III').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.druide.ashx#ORAISONS">oraisons.</a>');
            $('#capacites_speciales_IV').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.druide.ashx#EMPATHIESAUVAGE">empathie sauvage.</a>');

            $('#sorts_connus_0').html('Tous.');
            $('#sorts_connus_I').html('Tous.');

            $('#sorts_jour_0').html('3');
            $('#sorts_jour_I').html('1');
        };

        if ($('#niveau').val() >= 2) {
            $('#capacites_speciales_V').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.druide.ashx#DEPLACEMENTFACILITE">déplacement facilité.</a>');

            $('#sorts_connus_0').html('Tous.');
            $('#sorts_connus_I').html('Tous.');

            $('#sorts_jour_0').html('4');
            $('#sorts_jour_I').html('2');
        };

        if ($('#niveau').val() >= 3) {
            $('#capacites_speciales_VI').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.druide.ashx#ABSENCEDETRACES">absence de traces.</a>');

            $('#sorts_connus_0').html('Tous.');
            $('#sorts_connus_I').html('Tous.');
            $('#sorts_connus_II').html('Tous.');

            $('#sorts_jour_0').html('4');
            $('#sorts_jour_I').html('2');
            $('#sorts_jour_II').html('1');
        };

        if ($('#niveau').val() >= 4) {
            $('#capacites_speciales_VII').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.druide.ashx#RESISTANCEALAPPELDELANATURE">résistance à l\'appel de la nature.</a>');
            $('#capacites_speciales_VIII').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.druide.ashx#FORMEANIMALE">forme animale (1/jour).</a>');

            $('#sorts_connus_0').html('Tous.');
            $('#sorts_connus_I').html('Tous.');
            $('#sorts_connus_II').html('Tous.');

            $('#sorts_jour_0').html('4');
            $('#sorts_jour_I').html('3');
            $('#sorts_jour_II').html('2');
        };

        if ($('#niveau').val() >= 5) {
            $('#sorts_connus_0').html('Tous.');
            $('#sorts_connus_I').html('Tous.');
            $('#sorts_connus_II').html('Tous.');
            $('#sorts_connus_III').html('Tous.');

            $('#sorts_jour_0').html('4');
            $('#sorts_jour_I').html('3');
            $('#sorts_jour_II').html('2');
            $('#sorts_jour_III').html('1');
        };

        if ($('#niveau').val() >= 6) {
            $('#capacites_speciales_VIII').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.druide.ashx#FORMEANIMALE">forme animale (2/jour).</a>');

            $('#sorts_connus_0').html('Tous.');
            $('#sorts_connus_I').html('Tous.');
            $('#sorts_connus_II').html('Tous.');
            $('#sorts_connus_III').html('Tous.');

            $('#sorts_jour_0').html('4');
            $('#sorts_jour_I').html('3');
            $('#sorts_jour_II').html('3');
            $('#sorts_jour_III').html('2');
        };

        if ($('#niveau').val() >= 7) {
            $('#sorts_connus_0').html('Tous.');
            $('#sorts_connus_I').html('Tous.');
            $('#sorts_connus_II').html('Tous.');
            $('#sorts_connus_III').html('Tous.');
            $('#sorts_connus_IV').html('Tous.');

            $('#sorts_jour_0').html('4');
            $('#sorts_jour_I').html('4');
            $('#sorts_jour_II').html('3');
            $('#sorts_jour_III').html('2');
            $('#sorts_jour_IV').html('1');
        };

        if ($('#niveau').val() >= 8) {
            $('#capacites_speciales_VIII').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.druide.ashx#FORMEANIMALE">forme animale (3/jour).</a>');

            $('#sorts_connus_0').html('Tous.');
            $('#sorts_connus_I').html('Tous.');
            $('#sorts_connus_II').html('Tous.');
            $('#sorts_connus_III').html('Tous.');
            $('#sorts_connus_IV').html('Tous.');

            $('#sorts_jour_0').html('4');
            $('#sorts_jour_I').html('4');
            $('#sorts_jour_II').html('3');
            $('#sorts_jour_III').html('3');
            $('#sorts_jour_IV').html('2');
        };

        if ($('#niveau').val() >= 9) {
            $('#capacites_speciales_IX').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.druide.ashx#IMMUNITECONTRELEVENIN">immunité contre le venin.</a>');

            $('#sorts_connus_0').html('Tous.');
            $('#sorts_connus_I').html('Tous.');
            $('#sorts_connus_II').html('Tous.');
            $('#sorts_connus_III').html('Tous.');
            $('#sorts_connus_IV').html('Tous.');
            $('#sorts_connus_V').html('Tous.');

            $('#sorts_jour_0').html('4');
            $('#sorts_jour_I').html('4');
            $('#sorts_jour_II').html('4');
            $('#sorts_jour_III').html('3');
            $('#sorts_jour_IV').html('2');
            $('#sorts_jour_V').html('1');
        };

        if ($('#niveau').val() >= 10) {
            $('#capacites_speciales_VIII').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.druide.ashx#FORMEANIMALE">forme animale (4/jour).</a>');

            $('#sorts_connus_0').html('Tous.');
            $('#sorts_connus_I').html('Tous.');
            $('#sorts_connus_II').html('Tous.');
            $('#sorts_connus_III').html('Tous.');
            $('#sorts_connus_IV').html('Tous.');
            $('#sorts_connus_V').html('Tous.');

            $('#sorts_jour_0').html('4');
            $('#sorts_jour_I').html('4');
            $('#sorts_jour_II').html('4');
            $('#sorts_jour_III').html('3');
            $('#sorts_jour_IV').html('3');
            $('#sorts_jour_V').html('2');
        };
        
        if ($('#niveau').val() >= 11) {
            $('#sorts_connus_0').html('Tous.');
            $('#sorts_connus_I').html('Tous.');
            $('#sorts_connus_II').html('Tous.');
            $('#sorts_connus_III').html('Tous.');
            $('#sorts_connus_IV').html('Tous.');
            $('#sorts_connus_V').html('Tous.');
            $('#sorts_connus_VI').html('Tous.');

            $('#sorts_jour_0').html('4');
            $('#sorts_jour_I').html('4');
            $('#sorts_jour_II').html('4');
            $('#sorts_jour_III').html('4');
            $('#sorts_jour_IV').html('3');
            $('#sorts_jour_V').html('2');
            $('#sorts_jour_VI').html('1');
        };

        if ($('#niveau').val() >= 12) {
            $('#capacites_speciales_VIII').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.druide.ashx#FORMEANIMALE">forme animale (5/jour).</a>');

            $('#sorts_connus_0').html('Tous.');
            $('#sorts_connus_I').html('Tous.');
            $('#sorts_connus_II').html('Tous.');
            $('#sorts_connus_III').html('Tous.');
            $('#sorts_connus_IV').html('Tous.');
            $('#sorts_connus_V').html('Tous.');
            $('#sorts_connus_VI').html('Tous.');

            $('#sorts_jour_0').html('4');
            $('#sorts_jour_I').html('4');
            $('#sorts_jour_II').html('4');
            $('#sorts_jour_III').html('4');
            $('#sorts_jour_IV').html('3');
            $('#sorts_jour_V').html('3');
            $('#sorts_jour_VI').html('2');
        };

        if ($('#niveau').val() >= 13) {
            $('#capacites_speciales_X').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.druide.ashx#MILLEVISAGES">mille visages.</a>');

            $('#sorts_connus_0').html('Tous.');
            $('#sorts_connus_I').html('Tous.');
            $('#sorts_connus_II').html('Tous.');
            $('#sorts_connus_III').html('Tous.');
            $('#sorts_connus_IV').html('Tous.');
            $('#sorts_connus_V').html('Tous.');
            $('#sorts_connus_VI').html('Tous.');
            $('#sorts_connus_VII').html('Tous.');

            $('#sorts_jour_0').html('4');
            $('#sorts_jour_I').html('4');
            $('#sorts_jour_II').html('4');
            $('#sorts_jour_III').html('4');
            $('#sorts_jour_IV').html('4');
            $('#sorts_jour_V').html('3');
            $('#sorts_jour_VI').html('2');
            $('#sorts_jour_VII').html('1');
        };

        if ($('#niveau').val() >= 14) {
            $('#capacites_speciales_VIII').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.druide.ashx#FORMEANIMALE">forme animale (6/jour).</a>');

            $('#sorts_connus_0').html('Tous.');
            $('#sorts_connus_I').html('Tous.');
            $('#sorts_connus_II').html('Tous.');
            $('#sorts_connus_III').html('Tous.');
            $('#sorts_connus_IV').html('Tous.');
            $('#sorts_connus_V').html('Tous.');
            $('#sorts_connus_VI').html('Tous.');
            $('#sorts_connus_VII').html('Tous.');

            $('#sorts_jour_0').html('4');
            $('#sorts_jour_I').html('4');
            $('#sorts_jour_II').html('4');
            $('#sorts_jour_III').html('4');
            $('#sorts_jour_IV').html('4');
            $('#sorts_jour_V').html('3');
            $('#sorts_jour_VI').html('2');
            $('#sorts_jour_VII').html('2');
        };

        if ($('#niveau').val() >= 15) {
            $('#capacites_speciales_XI').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.druide.ashx#ETERNELLEJEUNESSE">éternelle jeunesse.</a>');

            $('#sorts_connus_0').html('Tous.');
            $('#sorts_connus_I').html('Tous.');
            $('#sorts_connus_II').html('Tous.');
            $('#sorts_connus_III').html('Tous.');
            $('#sorts_connus_IV').html('Tous.');
            $('#sorts_connus_V').html('Tous.');
            $('#sorts_connus_VI').html('Tous.');
            $('#sorts_connus_VII').html('Tous.');
            $('#sorts_connus_VIII').html('Tous.');

            $('#sorts_jour_0').html('4');
            $('#sorts_jour_I').html('4');
            $('#sorts_jour_II').html('4');
            $('#sorts_jour_III').html('4');
            $('#sorts_jour_IV').html('4');
            $('#sorts_jour_V').html('4');
            $('#sorts_jour_VI').html('3');
            $('#sorts_jour_VII').html('2');
            $('#sorts_jour_VIII').html('1');
        };

        if ($('#niveau').val() >= 16) {
            $('#capacites_speciales_VIII').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.druide.ashx#FORMEANIMALE">forme animale (7/jour).</a>');

            $('#sorts_connus_0').html('Tous.');
            $('#sorts_connus_I').html('Tous.');
            $('#sorts_connus_II').html('Tous.');
            $('#sorts_connus_III').html('Tous.');
            $('#sorts_connus_IV').html('Tous.');
            $('#sorts_connus_V').html('Tous.');
            $('#sorts_connus_VI').html('Tous.');
            $('#sorts_connus_VII').html('Tous.');
            $('#sorts_connus_VIII').html('Tous.');

            $('#sorts_jour_0').html('4');
            $('#sorts_jour_I').html('4');
            $('#sorts_jour_II').html('4');
            $('#sorts_jour_III').html('4');
            $('#sorts_jour_IV').html('4');
            $('#sorts_jour_V').html('4');
            $('#sorts_jour_VI').html('3');
            $('#sorts_jour_VII').html('3');
            $('#sorts_jour_VIII').html('2');
        };

        if ($('#niveau').val() >= 17) {
            $('#sorts_connus_0').html('Tous.');
            $('#sorts_connus_I').html('Tous.');
            $('#sorts_connus_II').html('Tous.');
            $('#sorts_connus_III').html('Tous.');
            $('#sorts_connus_IV').html('Tous.');
            $('#sorts_connus_V').html('Tous.');
            $('#sorts_connus_VI').html('Tous.');
            $('#sorts_connus_VII').html('Tous.');
            $('#sorts_connus_VIII').html('Tous.');
            $('#sorts_connus_IX').html('Tous.');

            $('#sorts_jour_0').html('4');
            $('#sorts_jour_I').html('4');
            $('#sorts_jour_II').html('4');
            $('#sorts_jour_III').html('4');
            $('#sorts_jour_IV').html('4');
            $('#sorts_jour_V').html('4');
            $('#sorts_jour_VI').html('4');
            $('#sorts_jour_VII').html('3');
            $('#sorts_jour_VIII').html('2');
            $('#sorts_jour_IX').html('1');
        };

        if ($('#niveau').val() >= 18) {
            $('#capacites_speciales_VIII').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.druide.ashx#FORMEANIMALE">forme animale (8/jour).</a>');

            $('#sorts_connus_0').html('Tous.');
            $('#sorts_connus_I').html('Tous.');
            $('#sorts_connus_II').html('Tous.');
            $('#sorts_connus_III').html('Tous.');
            $('#sorts_connus_IV').html('Tous.');
            $('#sorts_connus_V').html('Tous.');
            $('#sorts_connus_VI').html('Tous.');
            $('#sorts_connus_VII').html('Tous.');
            $('#sorts_connus_VIII').html('Tous.');
            $('#sorts_connus_IX').html('Tous.');

            $('#sorts_jour_0').html('4');
            $('#sorts_jour_I').html('4');
            $('#sorts_jour_II').html('4');
            $('#sorts_jour_III').html('4');
            $('#sorts_jour_IV').html('4');
            $('#sorts_jour_V').html('4');
            $('#sorts_jour_VI').html('4');
            $('#sorts_jour_VII').html('3');
            $('#sorts_jour_VIII').html('3');
            $('#sorts_jour_IX').html('2');
        };

        if ($('#niveau').val() >= 19) {

            $('#sorts_connus_0').html('Tous.');
            $('#sorts_connus_I').html('Tous.');
            $('#sorts_connus_II').html('Tous.');
            $('#sorts_connus_III').html('Tous.');
            $('#sorts_connus_IV').html('Tous.');
            $('#sorts_connus_V').html('Tous.');
            $('#sorts_connus_VI').html('Tous.');
            $('#sorts_connus_VII').html('Tous.');
            $('#sorts_connus_VIII').html('Tous.');
            $('#sorts_connus_IX').html('Tous.');

            $('#sorts_jour_0').html('4');
            $('#sorts_jour_I').html('4');
            $('#sorts_jour_II').html('4');
            $('#sorts_jour_III').html('4');
            $('#sorts_jour_IV').html('4');
            $('#sorts_jour_V').html('4');
            $('#sorts_jour_VI').html('4');
            $('#sorts_jour_VII').html('4');
            $('#sorts_jour_VIII').html('3');
            $('#sorts_jour_IX').html('3');
        };

        if ($('#niveau').val() >= 20) {
            $('#capacites_speciales_VIII').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.druide.ashx#FORMEANIMALE">forme animale (à volonté).</a>');

            $('#sorts_connus_0').html('Tous.');
            $('#sorts_connus_I').html('Tous.');
            $('#sorts_connus_II').html('Tous.');
            $('#sorts_connus_III').html('Tous.');
            $('#sorts_connus_IV').html('Tous.');
            $('#sorts_connus_V').html('Tous.');
            $('#sorts_connus_VI').html('Tous.');
            $('#sorts_connus_VII').html('Tous.');
            $('#sorts_connus_VIII').html('Tous.');
            $('#sorts_connus_IX').html('Tous.');

            $('#sorts_jour_0').html('4');
            $('#sorts_jour_I').html('4');
            $('#sorts_jour_II').html('4');
            $('#sorts_jour_III').html('4');
            $('#sorts_jour_IV').html('4');
            $('#sorts_jour_V').html('4');
            $('#sorts_jour_VI').html('4');
            $('#sorts_jour_VII').html('4');
            $('#sorts_jour_VIII').html('4');
            $('#sorts_jour_IX').html('4');
        };
    };

    function capacitesSpecialesEnsorceleur() {
        if ($('#niveau').val() >= 1) {
            $('#sorts_jour_I').html('3');

            $('#sorts_connus_0').html('4');
            $('#sorts_connus_I').html('2');

            $('#capacites_speciales_I').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.ensorceleur.ashx#LIGNAGE">pouvoir de lignage *1.</a>');
            $('#capacites_speciales_II').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.ensorceleur.ashx#TOURSDEMAGIE">tours de magie.</a>');
            $('#capacites_speciales_III').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.ensorceleur.ashx#DISPENSEDECOMPOSANTES">dispense de composantes.</a>');
        };

        if ($('#niveau').val() >= 2) {
            $('#sorts_jour_I').html('4');

            $('#sorts_connus_0').html('5');
            $('#sorts_connus_I').html('2');
        };

        if ($('#niveau').val() >= 3) {
            $('#sorts_jour_I').html('5');

            $('#sorts_connus_0').html('5');
            $('#sorts_connus_I').html('3');

            $('#capacites_speciales_I').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.ensorceleur.ashx#LIGNAGE">pouvoir de lignage *2.</a>');
        };

        if ($('#niveau').val() >= 4) {
            $('#sorts_jour_I').html('6');
            $('#sorts_jour_II').html('3');

            $('#sorts_connus_0').html('6');
            $('#sorts_connus_I').html('3');
            $('#sorts_connus_II').html('1');
        };

        if ($('#niveau').val() >= 5) {
            $('#sorts_jour_I').html('6');
            $('#sorts_jour_II').html('4');

            $('#sorts_connus_0').html('6');
            $('#sorts_connus_I').html('4');
            $('#sorts_connus_II').html('2');

            $('#capacites_speciales_IV').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.ensorceleur.ashx#LIGNAGE">sort de lignage *1.</a>');
        };

        if ($('#niveau').val() >= 6) {
            $('#sorts_jour_I').html('6');
            $('#sorts_jour_II').html('5');
            $('#sorts_jour_III').html('3');

            $('#sorts_connus_0').html('7');
            $('#sorts_connus_I').html('4');
            $('#sorts_connus_II').html('2');
            $('#sorts_connus_III').html('1');
        };

        if ($('#niveau').val() >= 7) {
            $('#sorts_jour_I').html('6');
            $('#sorts_jour_II').html('6');
            $('#sorts_jour_III').html('4');

            $('#sorts_connus_0').html('7');
            $('#sorts_connus_I').html('5');
            $('#sorts_connus_II').html('3');
            $('#sorts_connus_III').html('2');
            $('#capacites_speciales_V').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.ensorceleur.ashx#LIGNAGE">don de lignage *1.</a>');
            $('#capacites_speciales_IV').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.ensorceleur.ashx#LIGNAGE">sort de lignage *2.</a>');
        };

        if ($('#niveau').val() >= 8) {
            $('#sorts_jour_I').html('6');
            $('#sorts_jour_II').html('6');
            $('#sorts_jour_III').html('5');
            $('#sorts_jour_IV').html('3');

            $('#sorts_connus_0').html('8');
            $('#sorts_connus_I').html('5');
            $('#sorts_connus_II').html('3');
            $('#sorts_connus_III').html('2');
            $('#sorts_connus_IV').html('1');
        };

        if ($('#niveau').val() >= 9) {
            $('#sorts_jour_I').html('6');
            $('#sorts_jour_II').html('6');
            $('#sorts_jour_III').html('6');
            $('#sorts_jour_IV').html('4');

            $('#sorts_connus_0').html('8');
            $('#sorts_connus_I').html('5');
            $('#sorts_connus_II').html('4');
            $('#sorts_connus_III').html('3');
            $('#sorts_connus_IV').html('2');

            $('#capacites_speciales_I').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.ensorceleur.ashx#LIGNAGE">pouvoir de lignage *3.</a>');
            $('#capacites_speciales_IV').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.ensorceleur.ashx#LIGNAGE">sort de lignage *3.</a>');
        };

        if ($('#niveau').val() >= 10) {
            $('#sorts_jour_I').html('6');
            $('#sorts_jour_II').html('6');
            $('#sorts_jour_III').html('6');
            $('#sorts_jour_IV').html('5');
            $('#sorts_jour_V').html('3');

            $('#sorts_connus_0').html('9');
            $('#sorts_connus_I').html('5');
            $('#sorts_connus_II').html('4');
            $('#sorts_connus_III').html('3');
            $('#sorts_connus_IV').html('2');
            $('#sorts_connus_V').html('1');
        };

        if ($('#niveau').val() >= 11) {
            $('#sorts_jour_I').html('6');
            $('#sorts_jour_II').html('6');
            $('#sorts_jour_III').html('6');
            $('#sorts_jour_IV').html('6');
            $('#sorts_jour_V').html('4');

            $('#sorts_connus_0').html('9');
            $('#sorts_connus_I').html('5');
            $('#sorts_connus_II').html('5');
            $('#sorts_connus_III').html('4');
            $('#sorts_connus_IV').html('3');
            $('#sorts_connus_V').html('2');

            $('#capacites_speciales_IV').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.ensorceleur.ashx#LIGNAGE">sort de lignage *4.</a>');
        };

        if ($('#niveau').val() >= 12) {
            $('#sorts_jour_I').html('6');
            $('#sorts_jour_II').html('6');
            $('#sorts_jour_III').html('6');
            $('#sorts_jour_IV').html('6');
            $('#sorts_jour_V').html('5');
            $('#sorts_jour_VI').html('3');

            $('#sorts_connus_0').html('9');
            $('#sorts_connus_I').html('5');
            $('#sorts_connus_II').html('5');
            $('#sorts_connus_III').html('4');
            $('#sorts_connus_IV').html('3');
            $('#sorts_connus_V').html('2');
            $('#sorts_connus_VI').html('1');
        };

        if ($('#niveau').val() >= 13) {
            $('#sorts_jour_I').html('6');
            $('#sorts_jour_II').html('6');
            $('#sorts_jour_III').html('6');
            $('#sorts_jour_IV').html('6');
            $('#sorts_jour_V').html('6');
            $('#sorts_jour_VI').html('4');

            $('#sorts_connus_0').html('9');
            $('#sorts_connus_I').html('5');
            $('#sorts_connus_II').html('5');
            $('#sorts_connus_III').html('4');
            $('#sorts_connus_IV').html('4');
            $('#sorts_connus_V').html('3');
            $('#sorts_connus_VI').html('2');

            $('#capacites_speciales_V').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.ensorceleur.ashx#LIGNAGE">don de lignage *2.</a>');
            $('#capacites_speciales_IV').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.ensorceleur.ashx#LIGNAGE">sort de lignage *5.</a>');
        };

        if ($('#niveau').val() >= 14) {
            $('#sorts_jour_I').html('6');
            $('#sorts_jour_II').html('6');
            $('#sorts_jour_III').html('6');
            $('#sorts_jour_IV').html('6');
            $('#sorts_jour_V').html('6');
            $('#sorts_jour_VI').html('5');
            $('#sorts_jour_VII').html('3');

            $('#sorts_connus_0').html('9');
            $('#sorts_connus_I').html('5');
            $('#sorts_connus_II').html('5');
            $('#sorts_connus_III').html('4');
            $('#sorts_connus_IV').html('4');
            $('#sorts_connus_V').html('3');
            $('#sorts_connus_VI').html('2');
            $('#sorts_connus_VII').html('1');
        };

        if ($('#niveau').val() >= 15) {
            $('#sorts_jour_I').html('6');
            $('#sorts_jour_II').html('6');
            $('#sorts_jour_III').html('6');
            $('#sorts_jour_IV').html('6');
            $('#sorts_jour_V').html('6');
            $('#sorts_jour_VI').html('6');
            $('#sorts_jour_VII').html('4');

            $('#sorts_connus_0').html('9');
            $('#sorts_connus_I').html('5');
            $('#sorts_connus_II').html('5');
            $('#sorts_connus_III').html('4');
            $('#sorts_connus_IV').html('4');
            $('#sorts_connus_V').html('4');
            $('#sorts_connus_VI').html('3');
            $('#sorts_connus_VII').html('2');

            $('#capacites_speciales_I').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.ensorceleur.ashx#LIGNAGE">pouvoir de lignage *4.</a>');
            $('#capacites_speciales_IV').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.ensorceleur.ashx#LIGNAGE">sort de lignage *6.</a>');
        };

        if ($('#niveau').val() >= 16) {
            $('#sorts_jour_I').html('6');
            $('#sorts_jour_II').html('6');
            $('#sorts_jour_III').html('6');
            $('#sorts_jour_IV').html('6');
            $('#sorts_jour_V').html('6');
            $('#sorts_jour_VI').html('6');
            $('#sorts_jour_VII').html('5');
            $('#sorts_jour_VIII').html('3');

            $('#sorts_connus_0').html('9');
            $('#sorts_connus_I').html('5');
            $('#sorts_connus_II').html('5');
            $('#sorts_connus_III').html('4');
            $('#sorts_connus_IV').html('4');
            $('#sorts_connus_V').html('4');
            $('#sorts_connus_VI').html('3');
            $('#sorts_connus_VII').html('2');
            $('#sorts_connus_VIII').html('1');
        };

        if ($('#niveau').val() >= 17) {
            $('#sorts_jour_I').html('6');
            $('#sorts_jour_II').html('6');
            $('#sorts_jour_III').html('6');
            $('#sorts_jour_IV').html('6');
            $('#sorts_jour_V').html('6');
            $('#sorts_jour_VI').html('6');
            $('#sorts_jour_VII').html('6');
            $('#sorts_jour_VIII').html('4');

            $('#sorts_connus_0').html('9');
            $('#sorts_connus_I').html('5');
            $('#sorts_connus_II').html('5');
            $('#sorts_connus_III').html('4');
            $('#sorts_connus_IV').html('4');
            $('#sorts_connus_V').html('4');
            $('#sorts_connus_VI').html('3');
            $('#sorts_connus_VII').html('3');
            $('#sorts_connus_VIII').html('2');

            $('#capacites_speciales_IV').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.ensorceleur.ashx#LIGNAGE">sort de lignage *7.</a>');
        };

        if ($('#niveau').val() >= 18) {
            $('#sorts_jour_I').html('6');
            $('#sorts_jour_II').html('6');
            $('#sorts_jour_III').html('6');
            $('#sorts_jour_IV').html('6');
            $('#sorts_jour_V').html('6');
            $('#sorts_jour_VI').html('6');
            $('#sorts_jour_VII').html('6');
            $('#sorts_jour_VIII').html('5');
            $('#sorts_jour_IX').html('3');

            $('#sorts_connus_0').html('9');
            $('#sorts_connus_I').html('5');
            $('#sorts_connus_II').html('5');
            $('#sorts_connus_III').html('4');
            $('#sorts_connus_IV').html('4');
            $('#sorts_connus_V').html('4');
            $('#sorts_connus_VI').html('3');
            $('#sorts_connus_VII').html('3');
            $('#sorts_connus_VIII').html('2');
            $('#sorts_connus_IX').html('1');
        };

        if ($('#niveau').val() >= 19) {
            $('#sorts_jour_I').html('6');
            $('#sorts_jour_II').html('6');
            $('#sorts_jour_III').html('6');
            $('#sorts_jour_IV').html('6');
            $('#sorts_jour_V').html('6');
            $('#sorts_jour_VI').html('6');
            $('#sorts_jour_VII').html('6');
            $('#sorts_jour_VIII').html('6');
            $('#sorts_jour_IX').html('4');

            $('#sorts_connus_0').html('9');
            $('#sorts_connus_I').html('5');
            $('#sorts_connus_II').html('5');
            $('#sorts_connus_III').html('4');
            $('#sorts_connus_IV').html('4');
            $('#sorts_connus_V').html('4');
            $('#sorts_connus_VI').html('3');
            $('#sorts_connus_VII').html('3');
            $('#sorts_connus_VIII').html('3');
            $('#sorts_connus_IX').html('2');

            $('#capacites_speciales_V').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.ensorceleur.ashx#LIGNAGE">don de lignage *3.</a>');
            $('#capacites_speciales_IV').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.ensorceleur.ashx#LIGNAGE">sort de lignage *8.</a>');
        };

        if ($('#niveau').val() >= 20) {
            $('#sorts_jour_I').html('6');
            $('#sorts_jour_II').html('6');
            $('#sorts_jour_III').html('6');
            $('#sorts_jour_IV').html('6');
            $('#sorts_jour_V').html('6');
            $('#sorts_jour_VI').html('6');
            $('#sorts_jour_VII').html('6');
            $('#sorts_jour_VIII').html('6');
            $('#sorts_jour_IX').html('6');

            $('#sorts_connus_0').html('9');
            $('#sorts_connus_I').html('5');
            $('#sorts_connus_II').html('5');
            $('#sorts_connus_III').html('4');
            $('#sorts_connus_IV').html('4');
            $('#sorts_connus_V').html('4');
            $('#sorts_connus_VI').html('3');
            $('#sorts_connus_VII').html('3');
            $('#sorts_connus_VIII').html('3');
            $('#sorts_connus_IX').html('3');

            $('#capacites_speciales_I').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.ensorceleur.ashx#LIGNAGE">pouvoir de lignage *5.</a>');
        };
    };

     function capacitesSpecialesGuerrier() {
        if ($('#niveau').val() >= 1) {
            $('#capacites_speciales_I').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.guerrier.ashx#DONSUPPLEMENTAIRE">don supplémentaire *1.</a>');
        };

        if ($('#niveau').val() >= 2) {
            $('#capacites_speciales_I').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.guerrier.ashx#DONSUPPLEMENTAIRE">don supplémentaire *2.</a>');
            $('#capacites_speciales_II').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.guerrier.ashx#COURAGE">courage +1.</a>');
        };

        if ($('#niveau').val() >= 3) {
            $('#capacites_speciales_III').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.guerrier.ashx#ENTRAINEMENTAUXARMURES">entraînement aux armures 1.</a>');
        };

        if ($('#niveau').val() >= 4) {
            $('#capacites_speciales_I').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.guerrier.ashx#DONSUPPLEMENTAIRE">don supplémentaire *3.</a>');
        };

        if ($('#niveau').val() >= 5) {
            $('#capacites_speciales_IV').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.guerrier.ashx#ENTRAINEMENTAUXARMES">entraînement aux armes 1.</a>');
        };

        if ($('#niveau').val() >= 6) {
            $('#capacites_speciales_I').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.guerrier.ashx#DONSUPPLEMENTAIRE">don supplémentaire *4.</a>');
            $('#capacites_speciales_II').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.guerrier.ashx#COURAGE">courage +2.</a>');
        };

        if ($('#niveau').val() >= 7) {
            $('#capacites_speciales_III').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.guerrier.ashx#ENTRAINEMENTAUXARMURES">entraînement aux armures 2.</a>');
        };

        if ($('#niveau').val() >= 8) {
            $('#capacites_speciales_I').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.guerrier.ashx#DONSUPPLEMENTAIRE">don supplémentaire *5.</a>');
        };

        if ($('#niveau').val() >= 9) {
            $('#capacites_speciales_IV').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.guerrier.ashx#ENTRAINEMENTAUXARMES">entraînement aux armes 2.</a>');
        };

        if ($('#niveau').val() >= 10) {
            $('#capacites_speciales_I').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.guerrier.ashx#DONSUPPLEMENTAIRE">don supplémentaire *6.</a>');
            $('#capacites_speciales_II').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.guerrier.ashx#COURAGE">courage +3.</a>');
        };
        
        if ($('#niveau').val() >= 11) {
            $('#capacites_speciales_III').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.guerrier.ashx#ENTRAINEMENTAUXARMURES">entraînement aux armures 3.</a>');
        };
        
        if ($('#niveau').val() >= 12) {
            $('#capacites_speciales_I').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.guerrier.ashx#DONSUPPLEMENTAIRE">don supplémentaire *7.</a>');
        };

        if ($('#niveau').val() >= 13) {
            $('#capacites_speciales_IV').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.guerrier.ashx#ENTRAINEMENTAUXARMES">entraînement aux armes 3.</a>');
        };
        
        if ($('#niveau').val() >= 14) {
            $('#capacites_speciales_I').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.guerrier.ashx#DONSUPPLEMENTAIRE">don supplémentaire *8.</a>');
            $('#capacites_speciales_II').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.guerrier.ashx#COURAGE">courage +4.</a>');
        };

        if ($('#niveau').val() >= 15) {
            $('#capacites_speciales_III').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.guerrier.ashx#ENTRAINEMENTAUXARMURES">entraînement aux armures 4.</a>');
        };
        
        if ($('#niveau').val() >= 16) {
            $('#capacites_speciales_I').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.guerrier.ashx#DONSUPPLEMENTAIRE">don supplémentaire *9.</a>');
        };

        if ($('#niveau').val() >= 17) {
            $('#capacites_speciales_IV').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.guerrier.ashx#ENTRAINEMENTAUXARMES">entraînement aux armes 4.</a>');
        };
        
        if ($('#niveau').val() >= 18) {
            $('#capacites_speciales_I').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.guerrier.ashx#DONSUPPLEMENTAIRE">don supplémentaire *10.</a>');
            $('#capacites_speciales_II').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.guerrier.ashx#COURAGE">courage +5.</a>');
        };

        if ($('#niveau').val() >= 19) {
            $('#capacites_speciales_V').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.guerrier.ashx#MAITRISEDESARMURES">maîtrise des armures.</a>');
        };
        
        if ($('#niveau').val() >= 20) {
            $('#capacites_speciales_I').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.guerrier.ashx#DONSUPPLEMENTAIRE">don supplémentaire *11.</a>');
            $('#capacites_speciales_VI').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.guerrier.ashx#MAITRISEDESARMES">maîtrise des armes.</a>');
        };
    };

    function capacitesSpecialesMagicien() {
        if ($('#niveau').val() >= 1) {
            $('#capacites_speciales_I').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.magicien.ashx#PACTEMAGIQUE">pacte magique.</a>');
            $('#capacites_speciales_II').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.magicien.ashx#ECOLEDEMAGIE">école de magie.</a>');
            $('#capacites_speciales_III').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.magicien.ashx#TOURSDEMAGIE">tours de magie.</a>');
            $('#capacites_speciales_IV').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.magicien.ashx#ECRITUREDEPARCHEMINS">Écriture de parchemins.</a>');

            $('#sorts_jour_0').html('3');
            $('#sorts_jour_I').html('1');
        };

        if ($('#niveau').val() >= 2) {
            $('#sorts_jour_0').html('4');
            $('#sorts_jour_I').html('2');
        };

        if ($('#niveau').val() >= 3) {
            $('#sorts_jour_0').html('4');
            $('#sorts_jour_I').html('2');
            $('#sorts_jour_II').html('1');
        };

        if ($('#niveau').val() >= 4) {
            $('#sorts_jour_0').html('4');
            $('#sorts_jour_I').html('3');
            $('#sorts_jour_II').html('2');
        };

        if ($('#niveau').val() >= 5) {
            $('#capacites_speciales_V').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.magicien.ashx#DONSUPPLEMENTAIRE">don supplémentaire *1.</a>');

            $('#sorts_jour_0').html('4');
            $('#sorts_jour_I').html('3');
            $('#sorts_jour_II').html('2');
            $('#sorts_jour_III').html('1');
        };

        if ($('#niveau').val() >= 6) {
            $('#sorts_jour_0').html('4');
            $('#sorts_jour_I').html('3');
            $('#sorts_jour_II').html('3');
            $('#sorts_jour_III').html('2');
        };

        if ($('#niveau').val() >= 7) {
            $('#sorts_jour_0').html('4');
            $('#sorts_jour_I').html('4');
            $('#sorts_jour_II').html('3');
            $('#sorts_jour_III').html('2');
            $('#sorts_jour_IV').html('1');
        };

        if ($('#niveau').val() >= 8) {
            $('#sorts_jour_0').html('4');
            $('#sorts_jour_I').html('4');
            $('#sorts_jour_II').html('3');
            $('#sorts_jour_III').html('3');
            $('#sorts_jour_IV').html('2');
        };

        if ($('#niveau').val() >= 9) {
            $('#sorts_jour_0').html('4');
            $('#sorts_jour_I').html('4');
            $('#sorts_jour_II').html('4');
            $('#sorts_jour_III').html('3');
            $('#sorts_jour_IV').html('2');
            $('#sorts_jour_V').html('1');
        };

        if ($('#niveau').val() >= 10) {
            $('#capacites_speciales_V').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.magicien.ashx#DONSUPPLEMENTAIRE">don supplémentaire *2.</a>');

            $('#sorts_jour_0').html('4');
            $('#sorts_jour_I').html('4');
            $('#sorts_jour_II').html('4');
            $('#sorts_jour_III').html('3');
            $('#sorts_jour_IV').html('3');
            $('#sorts_jour_V').html('2');
        };

        if ($('#niveau').val() >= 11) {
            $('#sorts_jour_0').html('4');
            $('#sorts_jour_I').html('4');
            $('#sorts_jour_II').html('4');
            $('#sorts_jour_III').html('4');
            $('#sorts_jour_IV').html('3');
            $('#sorts_jour_V').html('2');
            $('#sorts_jour_VI').html('1');
        };

        if ($('#niveau').val() >= 12) {
            $('#sorts_jour_0').html('4');
            $('#sorts_jour_I').html('4');
            $('#sorts_jour_II').html('4');
            $('#sorts_jour_III').html('4');
            $('#sorts_jour_IV').html('3');
            $('#sorts_jour_V').html('3');
            $('#sorts_jour_VI').html('2');
        };

        if ($('#niveau').val() >= 13) {
            $('#sorts_jour_0').html('4');
            $('#sorts_jour_I').html('4');
            $('#sorts_jour_II').html('4');
            $('#sorts_jour_III').html('4');
            $('#sorts_jour_IV').html('4');
            $('#sorts_jour_V').html('3');
            $('#sorts_jour_VI').html('2');
            $('#sorts_jour_VII').html('1');
        };

        if ($('#niveau').val() >= 14) {
            $('#sorts_jour_0').html('4');
            $('#sorts_jour_I').html('4');
            $('#sorts_jour_II').html('4');
            $('#sorts_jour_III').html('4');
            $('#sorts_jour_IV').html('4');
            $('#sorts_jour_V').html('3');
            $('#sorts_jour_VI').html('3');
            $('#sorts_jour_VII').html('2');
        };

        if ($('#niveau').val() >= 15) {
            $('#capacites_speciales_V').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.magicien.ashx#DONSUPPLEMENTAIRE">don supplémentaire *3.</a>');

            $('#sorts_jour_0').html('4');
            $('#sorts_jour_I').html('4');
            $('#sorts_jour_II').html('4');
            $('#sorts_jour_III').html('4');
            $('#sorts_jour_IV').html('4');
            $('#sorts_jour_V').html('4');
            $('#sorts_jour_VI').html('3');
            $('#sorts_jour_VII').html('2');
            $('#sorts_jour_VIII').html('1');
        };

        if ($('#niveau').val() >= 16) {
            $('#sorts_jour_0').html('4');
            $('#sorts_jour_I').html('4');
            $('#sorts_jour_II').html('4');
            $('#sorts_jour_III').html('4');
            $('#sorts_jour_IV').html('4');
            $('#sorts_jour_V').html('4');
            $('#sorts_jour_VI').html('3');
            $('#sorts_jour_VII').html('3');
            $('#sorts_jour_VIII').html('2');
        };

        if ($('#niveau').val() >= 17) {
            $('#sorts_jour_0').html('4');
            $('#sorts_jour_I').html('4');
            $('#sorts_jour_II').html('4');
            $('#sorts_jour_III').html('4');
            $('#sorts_jour_IV').html('4');
            $('#sorts_jour_V').html('4');
            $('#sorts_jour_VI').html('4');
            $('#sorts_jour_VII').html('3');
            $('#sorts_jour_VIII').html('2');
            $('#sorts_jour_IX').html('1');
        };

        if ($('#niveau').val() >= 18) {
            $('#sorts_jour_0').html('4');
            $('#sorts_jour_I').html('4');
            $('#sorts_jour_II').html('4');
            $('#sorts_jour_III').html('4');
            $('#sorts_jour_IV').html('4');
            $('#sorts_jour_V').html('4');
            $('#sorts_jour_VI').html('4');
            $('#sorts_jour_VII').html('3');
            $('#sorts_jour_VIII').html('3');
            $('#sorts_jour_IX').html('2');
        };

        if ($('#niveau').val() >= 19) {
            $('#sorts_jour_0').html('4');
            $('#sorts_jour_I').html('4');
            $('#sorts_jour_II').html('4');
            $('#sorts_jour_III').html('4');
            $('#sorts_jour_IV').html('4');
            $('#sorts_jour_V').html('4');
            $('#sorts_jour_VI').html('4');
            $('#sorts_jour_VII').html('4');
            $('#sorts_jour_VIII').html('3');
            $('#sorts_jour_IX').html('3');
        };

        if ($('#niveau').val() >= 20) {
            $('#capacites_speciales_V').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.magicien.ashx#DONSUPPLEMENTAIRE">don supplémentaire *4.</a>');

            $('#sorts_jour_0').html('4');
            $('#sorts_jour_I').html('4');
            $('#sorts_jour_II').html('4');
            $('#sorts_jour_III').html('4');
            $('#sorts_jour_IV').html('4');
            $('#sorts_jour_V').html('4');
            $('#sorts_jour_VI').html('4');
            $('#sorts_jour_VII').html('4');
            $('#sorts_jour_VIII').html('4');
            $('#sorts_jour_IX').html('4');
        };
     };

    function capacitesSpecialesMoine() {
        if ($('#niveau').val() >= 1) {
            $('#capacites_speciales_I').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Moine.ashx#DONSUPPLEMENTAIRE">Déluge de coups -1/-1.</a>');
            $('#capacites_speciales_II').html('<a target="_blank" href="">Dégâts à mains nues* 1D6.</a>');
            $('#capacites_speciales_III').html('<a target="_blank" href="">Bonus de CA +0.</a>');
            $('#capacites_speciales_IV').html('<a target="_blank" href="">Déplacement accéléré +0 m.</a>');
            $('#capacites_speciales_V').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Moine.ashx#DONSUPPLEMENTAIRE">don supplémentaire *1.</a>');
            $('#capacites_speciales_VI').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Moine.ashx#COUPETOURDISSANT">coup étourdissant.</a>');
            $('#capacites_speciales_VII').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Moine.ashx#COMBATAMAINSNUES">combat à mains nues.</a>');
        };

        if ($('#niveau').val() >= 2) {
            $('#capacites_speciales_I').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Moine.ashx#DONSUPPLEMENTAIRE">Déluge de coups +0/+0.</a>');
            $('#capacites_speciales_IV').html('<a target="_blank" href="">Déplacement accéléré +0 m.</a>');
            $('#capacites_speciales_V').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Moine.ashx#DONSUPPLEMENTAIRE">don supplémentaire *2.</a>');
            $('#capacites_speciales_VIII').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Moine.ashx#ESQUIVETOTALE">esquive totale.</a>');
        };

        if ($('#niveau').val() >= 3) {
            $('#capacites_speciales_I').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Moine.ashx#DONSUPPLEMENTAIRE">Déluge de coups +1/+1.</a>');
            $('#capacites_speciales_IV').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Moine.ashx#DEPLACEMENTACCELERE">Déplacement accéléré +3 m (2 cases).</a>');
            $('#capacites_speciales_X').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Moine.ashx#ENTRAINEMENTAUXMANOEUVRESOFFENSIVES">entraînement aux manœuvres offensives.</a>');
            $('#capacites_speciales_XI').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Moine.ashx#SERENITE">sérénité.</a>');
        };

        if ($('#niveau').val() >= 4) {
            $('#capacites_speciales_I').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Moine.ashx#DONSUPPLEMENTAIRE">Déluge de coups +2/+2.</a>');
            $('#capacites_speciales_II').html('<a target="_blank" href="">Dégâts à mains nues* 1D8.</a>');
            $('#capacites_speciales_III').html('<a target="_blank" href="">Bonus de CA +1.</a>');
            $('#capacites_speciales_XII').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Moine.ashx#RESERVEDEKI">réserve de ki (magique).</a>');
            $('#capacites_speciales_XIII').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Moine.ashx#CHUTERALENTIE">chute ralentie 6 m.</a>');
        };

        if ($('#niveau').val() >= 5) {
            $('#capacites_speciales_I').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Moine.ashx#DONSUPPLEMENTAIRE">Déluge de coups +3/+3.</a>');
            $('#capacites_speciales_XIV').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Moine.ashx#SAUTSPUISSANTS">sauts puissants.</a>');
            $('#capacites_speciales_XV').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Moine.ashx#PURETEPHYSIQUE">pureté physique.</a>');
        };

        if ($('#niveau').val() >= 6) {
            $('#capacites_speciales_I').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Moine.ashx#DONSUPPLEMENTAIRE">Déluge de coups +4/+4/-1.</a>');
            $('#capacites_speciales_IV').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Moine.ashx#DEPLACEMENTACCELERE">Déplacement accéléré +6 m (4 cases).</a>');
            $('#capacites_speciales_V').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Moine.ashx#DONSUPPLEMENTAIRE">don supplémentaire *3.</a>');
            $('#capacites_speciales_XIII').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Moine.ashx#CHUTERALENTIE">chute ralentie 9 m.</a>');
        };

        if ($('#niveau').val() >= 7) {
            $('#capacites_speciales_I').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Moine.ashx#DONSUPPLEMENTAIRE">Déluge de coups +5/+5/+0.</a>');
            $('#capacites_speciales_XVI').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Moine.ashx#RESERVEDEKI">réserve de ki (fer froid/argent).</a>');
            $('#capacites_speciales_XVII').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Moine.ashx#PLENITUDEPHYSIQUE">plénitude physique.</a>');
        };

        if ($('#niveau').val() >= 8) {
            $('#capacites_speciales_I').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Moine.ashx#DONSUPPLEMENTAIRE">Déluge de coups +6/+6/+1/+1.</a>');
            $('#capacites_speciales_II').html('<a target="_blank" href="">Dégâts à mains nues* 1D10.</a>');
            $('#capacites_speciales_III').html('<a target="_blank" href="">Bonus de CA +2.</a>');
            $('#capacites_speciales_XIII').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Moine.ashx#CHUTERALENTIE">chute ralentie 12 m.</a>');
        };

        if ($('#niveau').val() >= 9) {
            $('#capacites_speciales_I').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Moine.ashx#DONSUPPLEMENTAIRE">Déluge de coups +7/+7/+2/+2.</a>');
            $('#capacites_speciales_IV').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Moine.ashx#DEPLACEMENTACCELERE">Déplacement accéléré +9 m (6 cases).</a>');
            $('#capacites_speciales_XVIII').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Moine.ashx#ESQUIVESURNATURELLE">esquive surnaturelle.</a>');
        };

        if ($('#niveau').val() >= 10) {
            $('#capacites_speciales_I').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Moine.ashx#DONSUPPLEMENTAIRE">Déluge de coups +8/+8/+3/+3.</a>');
            $('#capacites_speciales_V').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Moine.ashx#DONSUPPLEMENTAIRE">don supplémentaire *4.</a>');
            $('#capacites_speciales_XIII').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Moine.ashx#CHUTERALENTIE">chute ralentie 15 m.</a>');
            $('#capacites_speciales_XVI').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Moine.ashx#RESERVEDEKI">réserve de ki (loyal).</a>');
        };
        
        if ($('#niveau').val() >= 11) {
            $('#capacites_speciales_I').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Moine.ashx#DONSUPPLEMENTAIRE">Déluge de coups +9/+9/+4/+4/-1.</a>');
            $('#capacites_speciales_XIX').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Moine.ashx#CORPSDEDIAMANT">corps de diamant.</a>');
        };

        if ($('#niveau').val() >= 12) {
            $('#capacites_speciales_I').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Moine.ashx#DONSUPPLEMENTAIRE">Déluge de coups +10/+10/+5/+5/+0.</a>');
            $('#capacites_speciales_II').html('<a target="_blank" href="">Dégâts à mains nues* 2D6.</a>');
            $('#capacites_speciales_III').html('<a target="_blank" href="">Bonus de CA +3.</a>');
            $('#capacites_speciales_IV').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Moine.ashx#DEPLACEMENTACCELERE">Déplacement accéléré +12 m (8 cases).</a>');
            $('#capacites_speciales_XIII').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Moine.ashx#CHUTERALENTIE">chute ralentie 18 m.</a>');
            $('#capacites_speciales_XX').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Moine.ashx#PASCHASSE">pas chassé.</a>');
        };

        if ($('#niveau').val() >= 13) {
            $('#capacites_speciales_I').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Moine.ashx#DONSUPPLEMENTAIRE">Déluge de coups +11/+11/+6/+6/+1.</a>');
            $('#capacites_speciales_XXI').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Moine.ashx#CORPSDEDIAMANT">âme de diamant.</a>');
        };

        if ($('#niveau').val() >= 14) {
            $('#capacites_speciales_I').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Moine.ashx#DONSUPPLEMENTAIRE">Déluge de coups +12/+12/+7/+7/+2.</a>');
            $('#capacites_speciales_V').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Moine.ashx#DONSUPPLEMENTAIRE">don supplémentaire *5.</a>');
            $('#capacites_speciales_XIII').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Moine.ashx#CHUTERALENTIE">chute ralentie 21 m.</a>');
        };

        if ($('#niveau').val() >= 15) {
            $('#capacites_speciales_I').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Moine.ashx#DONSUPPLEMENTAIRE">Déluge de coups +13/+13/+8/+8/+3/+3.</a>');
            $('#capacites_speciales_IV').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Moine.ashx#DEPLACEMENTACCELERE">Déplacement accéléré +15 m (10 cases).</a>');
            $('#capacites_speciales_XXII').html('<a target="_blank" href="">paume vibratoire.</a>');
        };

        if ($('#niveau').val() >= 16) {
            $('#capacites_speciales_I').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Moine.ashx#DONSUPPLEMENTAIRE">Déluge de coups +14/+14/+9/+9/+4/+4/-1.</a>');
            $('#capacites_speciales_II').html('<a target="_blank" href="">Dégâts à mains nues* 2D8.</a>');
            $('#capacites_speciales_III').html('<a target="_blank" href="">Bonus de CA +4.</a>');
            $('#capacites_speciales_XIII').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Moine.ashx#CHUTERALENTIE">chute ralentie 24 m.</a>');
            $('#capacites_speciales_XVI').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Moine.ashx#RESERVEDEKI">réserve de ki (adamantium).</a>');
        };

        if ($('#niveau').val() >= 17) {
            $('#capacites_speciales_I').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Moine.ashx#DONSUPPLEMENTAIRE">Déluge de coups +15/+15/+10/+10/+5/+5/+0.</a>');
            $('#capacites_speciales_XXIII').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Moine.ashx#ETERNELLEJEUNESSE">éternelle jeunesse.</a>');
            $('#capacites_speciales_XXIV').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Moine.ashx#LANGUEDUSOLEILETDELALUNE">langue du soleil et de la lune.</a>');
        };

        if ($('#niveau').val() >= 18) {
            $('#capacites_speciales_I').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Moine.ashx#DONSUPPLEMENTAIRE">Déluge de coups +16/+16/+11/+11/+6/+6/+1.</a>');
            $('#capacites_speciales_IV').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Moine.ashx#DEPLACEMENTACCELERE">Déplacement accéléré +18 m (12 cases).</a>');
            $('#capacites_speciales_V').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Moine.ashx#DONSUPPLEMENTAIRE">don supplémentaire *6.</a>');
            $('#capacites_speciales_XIII').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Moine.ashx#CHUTERALENTIE">chute ralentie 27 m.</a>');
        };

        if ($('#niveau').val() >= 19) {
            $('#capacites_speciales_I').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Moine.ashx#DONSUPPLEMENTAIRE">Déluge de coups +17/+17/+12/+12/+7/+7/+2.</a>');
            $('#capacites_speciales_XXV').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Moine.ashx#DESERTIONDELAME">désertion de l\'âme.</a>');
        };

        if ($('#niveau').val() >= 20) {
            $('#capacites_speciales_I').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Moine.ashx#DONSUPPLEMENTAIRE">Déluge de coups +18/+18/+13/+13/+8/+8/+3.</a>');
            $('#capacites_speciales_II').html('<a target="_blank" href="">Dégâts à mains nues* 2D10.</a>');
            $('#capacites_speciales_III').html('<a target="_blank" href="">Bonus de CA +5.</a>');
            $('#capacites_speciales_XIII').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Moine.ashx#CHUTERALENTIE">chute ralentie (n\'importe quelle distance).</a>');
            $('#capacites_speciales_XXVI').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Moine.ashx#PERFECTIONDELETRE">perfection de l\'être.</a>');
        };
    };

    function capacitesSpecialesPaladin() {
        if ($('#niveau').val() >= 1) {
            $('#capacites_speciales_I').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.paladin.ashx#AURADUBIEN">aura du bien.</a>');
            $('#capacites_speciales_II').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.paladin.ashx#DETECTIONDUMAL">détection du mal.</a>');
            $('#capacites_speciales_III').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.paladin.ashx#CHATIMENTDUMAL">châtiment du mal 1/jour.</a>');
        };

        if ($('#niveau').val() >= 2) {
            $('#capacites_speciales_IV').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.paladin.ashx#GRACEDIVINE">grâce divine.</a>');
            $('#capacites_speciales_V').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.paladin.ashx#IMPOSITIONDESMAINS">imposition des mains.</a>');
        };

        if ($('#niveau').val() >= 3) {
            $('#capacites_speciales_VI').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.paladin.ashx#AURADECOURAGE">aura de courage.</a>');
            $('#capacites_speciales_VII').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.paladin.ashx#SANTEDIVINE">santé divine.</a>');
            $('#capacites_speciales_VIII').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.paladin.ashx#GRACE">grâce *1.</a>');
        };

        if ($('#niveau').val() >= 4) {
            $('#capacites_speciales_III').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.paladin.ashx#CHATIMENTDUMAL">châtiment du mal 2/jour.</a>');
            $('#capacites_speciales_IX').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.paladin.ashx#CANALISATIONDENERGIEPOSITIVE">canalisation d\'énergie positive.</a>');

            $('#sorts_connus_0').html('Tous.');

            $('#sorts_jour_0').html('0*');
        };

        if ($('#niveau').val() >= 5) {
            $('#capacites_speciales_X').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.paladin.ashx#PACTEDIVIN">pacte divin.</a>');

            $('#sorts_connus_0').html('Tous.');

            $('#sorts_jour_0').html('1');
        };

        if ($('#niveau').val() >= 6) {
            $('#capacites_speciales_VIII').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.paladin.ashx#GRACE">grâce *2.</a>');

            $('#sorts_connus_0').html('Tous.');

            $('#sorts_jour_0').html('1');
        };

        if ($('#niveau').val() >= 7) {
            $('#capacites_speciales_III').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.paladin.ashx#CHATIMENTDUMAL">châtiment du mal 3/jour.</a>');

            $('#sorts_connus_0').html('Tous.');
            $('#sorts_connus_I').html('Tous.');

            $('#sorts_jour_0').html('1');
            $('#sorts_jour_I').html('0*');
        };

        if ($('#niveau').val() >= 8) {
            $('#capacites_speciales_XI').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.paladin.ashx#AURADEFERMETE">aura de fermeté.</a>');

            $('#sorts_connus_0').html('Tous.');
            $('#sorts_connus_I').html('Tous.');

            $('#sorts_jour_0').html('1');
            $('#sorts_jour_I').html('1');
        };

        if ($('#niveau').val() >= 9) {
            $('#capacites_speciales_VIII').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.paladin.ashx#GRACE">grâce *3.</a>');

            $('#sorts_connus_0').html('Tous.');
            $('#sorts_connus_I').html('Tous.');

            $('#sorts_jour_0').html('2');
            $('#sorts_jour_I').html('1');
        };

        if ($('#niveau').val() >= 10) {
            $('#capacites_speciales_III').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.paladin.ashx#CHATIMENTDUMAL">châtiment du mal 4/jour.</a>');

            $('#sorts_connus_0').html('Tous.');
            $('#sorts_connus_I').html('Tous.');
            $('#sorts_connus_II').html('Tous.');

            $('#sorts_jour_0').html('2');
            $('#sorts_jour_I').html('1');
            $('#sorts_jour_II').html('0*');
        };

        if ($('#niveau').val() >= 11) {
            $('#capacites_speciales_XII').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.paladin.ashx#AURADEJUSTICE">aura de justice.</a>');

            $('#sorts_connus_0').html('Tous.');
            $('#sorts_connus_I').html('Tous.');
            $('#sorts_connus_II').html('Tous.');

            $('#sorts_jour_0').html('2');
            $('#sorts_jour_I').html('1');
            $('#sorts_jour_II').html('1');
        };

        if ($('#niveau').val() >= 12) {
            $('#capacites_speciales_VIII').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.paladin.ashx#GRACE">grâce *4.</a>');

            $('#sorts_connus_0').html('Tous.');
            $('#sorts_connus_I').html('Tous.');
            $('#sorts_connus_II').html('Tous.');

            $('#sorts_jour_0').html('2');
            $('#sorts_jour_I').html('2');
            $('#sorts_jour_II').html('1');
        };

        if ($('#niveau').val() >= 13) {
            $('#capacites_speciales_III').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.paladin.ashx#CHATIMENTDUMAL">châtiment du mal 5/jour.</a>');

            $('#sorts_connus_0').html('Tous.');
            $('#sorts_connus_I').html('Tous.');
            $('#sorts_connus_II').html('Tous.');
            $('#sorts_connus_III').html('Tous.');

            $('#sorts_jour_0').html('3');
            $('#sorts_jour_I').html('2');
            $('#sorts_jour_II').html('1');
            $('#sorts_jour_III').html('0*');
        };

        if ($('#niveau').val() >= 14) {
            $('#capacites_speciales_XIII').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.paladin.ashx#AURADEFOI">aura de foi.</a>');

            $('#sorts_connus_0').html('Tous.');
            $('#sorts_connus_I').html('Tous.');
            $('#sorts_connus_II').html('Tous.');
            $('#sorts_connus_III').html('Tous.');

            $('#sorts_jour_0').html('3');
            $('#sorts_jour_I').html('2');
            $('#sorts_jour_II').html('1');
            $('#sorts_jour_III').html('1');
        };

        if ($('#niveau').val() >= 15) {
            $('#capacites_speciales_VIII').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.paladin.ashx#GRACE">grâce *5.</a>');

            $('#sorts_connus_0').html('Tous.');
            $('#sorts_connus_I').html('Tous.');
            $('#sorts_connus_II').html('Tous.');
            $('#sorts_connus_III').html('Tous.');

            $('#sorts_jour_0').html('3');
            $('#sorts_jour_I').html('2');
            $('#sorts_jour_II').html('2');
            $('#sorts_jour_III').html('1');
        };

        if ($('#niveau').val() >= 16) {
            $('#capacites_speciales_III').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.paladin.ashx#CHATIMENTDUMAL">châtiment du mal 6/jour.</a>');

            $('#sorts_connus_0').html('Tous.');
            $('#sorts_connus_I').html('Tous.');
            $('#sorts_connus_II').html('Tous.');
            $('#sorts_connus_III').html('Tous.');

            $('#sorts_jour_0').html('3');
            $('#sorts_jour_I').html('3');
            $('#sorts_jour_II').html('2');
            $('#sorts_jour_III').html('2');
        };

        if ($('#niveau').val() >= 17) {
            $('#capacites_speciales_XIV').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.paladin.ashx#AURADEDROITURE">aura de droiture.</a>');

            $('#sorts_connus_0').html('Tous.');
            $('#sorts_connus_I').html('Tous.');
            $('#sorts_connus_II').html('Tous.');
            $('#sorts_connus_III').html('Tous.');

            $('#sorts_jour_0').html('4');
            $('#sorts_jour_I').html('3');
            $('#sorts_jour_II').html('2');
            $('#sorts_jour_III').html('1');
        };

        if ($('#niveau').val() >= 18) {
            $('#capacites_speciales_VIII').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.paladin.ashx#GRACE">grâce *6.</a>');

            $('#sorts_connus_0').html('Tous.');
            $('#sorts_connus_I').html('Tous.');
            $('#sorts_connus_II').html('Tous.');
            $('#sorts_connus_III').html('Tous.');

            $('#sorts_jour_0').html('4');
            $('#sorts_jour_I').html('3');
            $('#sorts_jour_II').html('2');
            $('#sorts_jour_III').html('2');
        };

        if ($('#niveau').val() >= 19) {
            $('#capacites_speciales_III').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.paladin.ashx#CHATIMENTDUMAL">châtiment du mal 7/jour.</a>');

            $('#sorts_connus_0').html('Tous.');
            $('#sorts_connus_I').html('Tous.');
            $('#sorts_connus_II').html('Tous.');
            $('#sorts_connus_III').html('Tous.');

            $('#sorts_jour_0').html('4');
            $('#sorts_jour_I').html('3');
            $('#sorts_jour_II').html('3');
            $('#sorts_jour_III').html('2');
        };

        if ($('#niveau').val() >= 20) {
            $('#capacites_speciales_XV').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.paladin.ashx#CHAMPIONSACRE">champion sacré.</a>');

            $('#sorts_connus_0').html('Tous.');
            $('#sorts_connus_I').html('Tous.');
            $('#sorts_connus_II').html('Tous.');
            $('#sorts_connus_III').html('Tous.');

            $('#sorts_jour_0').html('4');
            $('#sorts_jour_I').html('4');
            $('#sorts_jour_II').html('3');
            $('#sorts_jour_III').html('3');
        };
     };

    function capacitesSpecialesPretre() {
        if ($('#niveau').val() >= 1) {
            $('#capacites_speciales_I').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.pr%c3%aatre.ashx#AURA">aura.</a>');
            $('#capacites_speciales_II').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.pr%c3%aatre.ashx#CANALISATIONDENERGIE">canalisation d\'énergie 1d6.</a>');
            $('#capacites_speciales_III').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.pr%c3%aatre.ashx#DOMAINES">domaines.</a>');
            $('#capacites_speciales_IV').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.pr%c3%aatre.ashx#ORAISONS">oraisons.</a>');
            $('#capacites_speciales_V').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.pr%c3%aatre.ashx#INCANTATIONSPONTANEE">incantation spontanée.</a>');

            $('#sorts_connus_0').html('Tous.');
            $('#sorts_connus_I').html('Tous.');

            $('#sorts_jour_0').html('3');
            $('#sorts_jour_I').html('1+1');
        };

        if ($('#niveau').val() >= 2) {
            $('#sorts_jour_0').html('4');
            $('#sorts_jour_I').html('2+1');
        };

        if ($('#niveau').val() >= 3) {
            $('#capacites_speciales_II').html('<a target="_blank" href="">canalisation d\'énergie 2d6.</a>');

            $('#sorts_connus_II').html('Tous.');

            $('#sorts_jour_I').html('2+1');
            $('#sorts_jour_II').html('1+1');
        };

        if ($('#niveau').val() >= 4) {
            $('#sorts_jour_I').html('3+1');
            $('#sorts_jour_II').html('2+1');
        };

        if ($('#niveau').val() >= 5) {
            $('#capacites_speciales_II').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.pr%c3%aatre.ashx#CANALISATIONDENERGIE">canalisation d\'énergie 3d6.</a>');

            $('#sorts_connus_III').html('Tous.');

            $('#sorts_jour_II').html('2+1');
            $('#sorts_jour_III').html('1+1');
        };

        if ($('#niveau').val() >= 6) {
        };

        if ($('#niveau').val() >= 7) {
            $('#capacites_speciales_II').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.pr%c3%aatre.ashx#CANALISATIONDENERGIE">canalisation d\'énergie 4d6.</a>');

            $('#sorts_connus_IV').html('Tous.');

            $('#sorts_jour_II').html('3+1');
            $('#sorts_jour_III').html('2+1');

            $('#sorts_jour_I').html('4+1');
            $('#sorts_jour_II').html('3+1');
            $('#sorts_jour_III').html('2+1');
            $('#sorts_jour_IV').html('1+1');
        };

        if ($('#niveau').val() >= 8) {
            $('#sorts_jour_III').html('3+1');
            $('#sorts_jour_IV').html('2+1');
        };

        if ($('#niveau').val() >= 9) {
            $('#capacites_speciales_II').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.pr%c3%aatre.ashx#CANALISATIONDENERGIE">canalisation d\'énergie 5d6.</a>');

            $('#sorts_connus_V').html('Tous.');

            $('#sorts_jour_II').html('4+1');
            $('#sorts_jour_III').html('3+1');
            $('#sorts_jour_IV').html('2+1');
            $('#sorts_jour_V').html('1+1');
        };

        if ($('#niveau').val() >= 10) {
            $('#sorts_jour_IV').html('3+1');
            $('#sorts_jour_V').html('2+1');
        };

        if ($('#niveau').val() >= 11) {
            $('#capacites_speciales_II').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.pr%c3%aatre.ashx#CANALISATIONDENERGIE">canalisation d\'énergie 6d6.</a>');

            $('#sorts_connus_VI').html('Tous.');

            $('#sorts_jour_III').html('4+1');
            $('#sorts_jour_IV').html('3+1');
            $('#sorts_jour_V').html('2+1');
            $('#sorts_jour_VI').html('1+1');
        };

        if ($('#niveau').val() >= 12) {
            $('#sorts_jour_V').html('3+1');
            $('#sorts_jour_VI').html('2+1');
        };

        if ($('#niveau').val() >= 13) {
            $('#capacites_speciales_II').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.pr%c3%aatre.ashx#CANALISATIONDENERGIE">canalisation d\'énergie 7d6.</a>');

            $('#sorts_connus_VII').html('Tous.');

            $('#sorts_jour_V').html('3+1');
            $('#sorts_jour_VI').html('2+1');
            $('#sorts_jour_VII').html('1+1');
        };

        if ($('#niveau').val() >= 14) {
            $('#sorts_jour_VI').html('3+1');
            $('#sorts_jour_VII').html('2+1');
        };

        if ($('#niveau').val() >= 15) {
            $('#capacites_speciales_II').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.pr%c3%aatre.ashx#CANALISATIONDENERGIE">canalisation d\'énergie 8d6.</a>');

            $('#sorts_connus_VIII').html('Tous.');

            $('#sorts_jour_V').html('4+1');
            $('#sorts_jour_VI').html('3+1');
            $('#sorts_jour_VII').html('2+1');
            $('#sorts_jour_VIII').html('1+1');
        };

        if ($('#niveau').val() >= 16) {
            $('#sorts_jour_VII').html('3+1');
            $('#sorts_jour_VIII').html('2+1');
        };

        if ($('#niveau').val() >= 17) {
            $('#capacites_speciales_II').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.pr%c3%aatre.ashx#CANALISATIONDENERGIE">canalisation d\'énergie 9d6.</a>');

            $('#sorts_connus_IX').html('Tous.');

            $('#sorts_jour_VI').html('4+1');
            $('#sorts_jour_VII').html('3+1');
            $('#sorts_jour_VIII').html('2+1');
            $('#sorts_jour_IX').html('1+1');
        };

        if ($('#niveau').val() >= 18) {
            $('#sorts_jour_VIII').html('3+1');
            $('#sorts_jour_IX').html('2+1');
        };

        if ($('#niveau').val() >= 19) {
            $('#capacites_speciales_II').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.pr%c3%aatre.ashx#CANALISATIONDENERGIE">canalisation d\'énergie 10d6.</a>');

            $('#sorts_jour_VII').html('4+1');
            $('#sorts_jour_IX').html('3+1');
        };

        if ($('#niveau').val() >= 20) {
            $('#sorts_jour_VIII').html('4+1');
            $('#sorts_jour_IX').html('4+1');
        };
     };

    function capacitesSpecialesRodeur() {
        if ($('#niveau').val() >= 1) {
            $('#capacites_speciales_I').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.r%c3%b4deur.ashx#ENNEMIJURE">1er ennemi juré.</a>');
            $('#capacites_speciales_II').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.r%c3%b4deur.ashx#PISTAGE">pistage.</a>');
            $('#capacites_speciales_III').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.r%c3%b4deur.ashx#EMPATHIESAUVAGE">empathie sauvage.</a>');
        };

        if ($('#niveau').val() >= 2) {
            $('#capacites_speciales_IV').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.r%c3%b4deur.ashx#DONDESTYLEDECOMBAT">don de style de combat.</a>');
        };

        if ($('#niveau').val() >= 3) {
            $('#capacites_speciales_V').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.r%c3%b4deur.ashx#ENDURANCE">endurance.</a>');
            $('#capacites_speciales_VI').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.r%c3%b4deur.ashx#ENVIRONNEMENTDEPREDILECTION">1er environnement de prédilection.</a>');
        };

        if ($('#niveau').val() >= 4) {
            $('#capacites_speciales_VII').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.r%c3%b4deur.ashx#PACTEDUCHASSEUR">pacte du chasseur.</a>');

            $('#sorts_connus_0').html('Tous.');

            $('#sorts_jour_0').html('0*');
        };

        if ($('#niveau').val() >= 5) {
            $('#capacites_speciales_I').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.r%c3%b4deur.ashx#ENNEMIJURE">2e ennemi juré.</a>');

            $('#sorts_jour_0').html('1');
        };

        if ($('#niveau').val() >= 6) {
            $('#capacites_speciales_IV').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.r%c3%b4deur.ashx#DONDESTYLEDECOMBAT">don de style de combat.</a>');
        };

        if ($('#niveau').val() >= 7) {
            $('#capacites_speciales_VIII').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.r%c3%b4deur.ashx#DEPLACEMENTFACILITE">déplacement facilité.</a>');

            $('#sorts_connus_I').html('Tous.');

            $('#sorts_jour_0').html('1');
            $('#sorts_jour_I').html('0*');
        };

        if ($('#niveau').val() >= 8) {
            $('#capacites_speciales_VI').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.r%c3%b4deur.ashx#ENVIRONNEMENTDEPREDILECTION">2e environnement de prédilection.</a>');
            $('#capacites_speciales_IX').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.r%c3%b4deur.ashx#PISTAGEACCELERE">pistage accéléré.</a>');

            $('#sorts_jour_I').html('1');
        };

        if ($('#niveau').val() >= 9) {
            $('#capacites_speciales_X').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.r%c3%b4deur.ashx#ESQUIVETOTALE">esquive totale.</a>');

            $('#sorts_jour_0').html('2');
        };

        if ($('#niveau').val() >= 10) {
            $('#capacites_speciales_I').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.r%c3%b4deur.ashx#ENNEMIJURE">3e ennemi juré.</a>');
            $('#capacites_speciales_IV').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.r%c3%b4deur.ashx#DONDESTYLEDECOMBAT">don de style de combat.</a>');

            $('#sorts_connus_II').html('Tous.');

            $('#sorts_jour_II').html('0*');
        };

        if ($('#niveau').val() >= 11) {
            $('#capacites_speciales_XI').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.r%c3%b4deur.ashx#PROIEDUCHASSEUR">proie du chasseur.</a>');

            $('#sorts_jour_II').html('1');
        };

        if ($('#niveau').val() >= 12) {
            $('#capacites_speciales_XII').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.r%c3%b4deur.ashx#CAMOUFLAGE">camouflage.</a>');

            $('#sorts_jour_I').html('2');
            $('#sorts_jour_II').html('1');
        };

        if ($('#niveau').val() >= 13) {
            $('#capacites_speciales_VI').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.r%c3%b4deur.ashx#ENVIRONNEMENTDEPREDILECTION">3e environnement de prédilection.</a>');

            $('#sorts_connus_III').html('Tous.');

            $('#sorts_jour_0').html('3');
            $('#sorts_jour_I').html('2');
            $('#sorts_jour_II').html('1');
            $('#sorts_jour_III').html('0*');
        };

        if ($('#niveau').val() >= 14) {
            $('#capacites_speciales_IV').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.r%c3%b4deur.ashx#DONDESTYLEDECOMBAT">don de style de combat.</a>');

            $('#sorts_jour_III').html('1');
        };

        if ($('#niveau').val() >= 15) {
            $('#capacites_speciales_I').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.r%c3%b4deur.ashx#ENNEMIJURE">4e ennemi juré.</a>');

            $('#sorts_jour_II').html('2');
        };

        if ($('#niveau').val() >= 16) {
            $('#capacites_speciales_XIII').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.r%c3%b4deur.ashx#ESQUIVESURNATURELLE">esquive surnaturelle.</a>');

            $('#sorts_jour_I').html('3');
            $('#sorts_jour_II').html('2');
        };

        if ($('#niveau').val() >= 17) {
            $('#capacites_speciales_XIV').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.r%c3%b4deur.ashx#DISCRETIONTOTALE">discrétion totale.</a>');

            $('#sorts_jour_0').html('4');
        };

        if ($('#niveau').val() >= 18) {
            $('#capacites_speciales_IV').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.r%c3%b4deur.ashx#DONDESTYLEDECOMBAT">don de style de combat.</a>');
            $('#capacites_speciales_VI').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.r%c3%b4deur.ashx#ENVIRONNEMENTDEPREDILECTION">4e environnement de prédilection.</a>');

            $('#sorts_jour_III').html('2');
        };

        if ($('#niveau').val() >= 19) {
            $('#capacites_speciales_XV').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.r%c3%b4deur.ashx#PROIEDUMAITRECHASSEUR">proie du maître chasseur.</a>');

            $('#sorts_jour_II').html('3');
        };

        if ($('#niveau').val() >= 20) {
            $('#capacites_speciales_I').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.r%c3%b4deur.ashx#ENNEMIJURE">5e ennemi juré.</a>');
            $('#capacites_speciales_XVI').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.r%c3%b4deur.ashx#MAITRECHASSEUR">maître chasseur.</a>');

            $('#sorts_jour_I').html('4');
            $('#sorts_jour_III').html('3');
        };
    };

    function capacitesSpecialesRoublard() {
        if ($('#niveau').val() >= 1) {
            $('#capacites_speciales_I').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Roublard.ashx#ATTAQUESOURNOISE">attaque sournoise +1d6.</a>');
            $('#capacites_speciales_II').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Roublard.ashx#RECHERCHEDESPIEGES">recherche des pièges.</a>');
        };

        if ($('#niveau').val() >= 2) {
            $('#capacites_speciales_III').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Roublard.ashx#ESQUIVETOTALE">esquive totale.</a>');
            $('#capacites_speciales_IV').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Roublard.ashx#TALENTDEROUBLARD">talent de roublard.</a>');
        };

        if ($('#niveau').val() >= 3) {
            $('#capacites_speciales_I').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Roublard.ashx#ATTAQUESOURNOISE">attaque sournoise +2d6.</a>');
            $('#capacites_speciales_V').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Roublard.ashx#SENSDESPIEGES">sens des pièges +1.</a>');
        };

        if ($('#niveau').val() >= 4) {
            $('#capacites_speciales_VI').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Roublard.ashx#TALENTDEROUBLARD">talent de roublard.</a>');
            $('#capacites_speciales_VII').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Roublard.ashx#ESQUIVEINSTINCTIVE">esquive instinctive.</a>');
        };

        if ($('#niveau').val() >= 5) {
            $('#capacites_speciales_I').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Roublard.ashx#ATTAQUESOURNOISE">attaque sournoise +3d6.</a>');
        };

        if ($('#niveau').val() >= 6) {
            $('#capacites_speciales_V').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Roublard.ashx#SENSDESPIEGES">sens des pièges +2.</a>');
            $('#capacites_speciales_VI').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Roublard.ashx#TALENTDEROUBLARD">talent de roublard.</a>');
        };

        if ($('#niveau').val() >= 7) {
            $('#capacites_speciales_I').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Roublard.ashx#ATTAQUESOURNOISE">attaque sournoise +4d6.</a>');
        };

        if ($('#niveau').val() >= 8) {
            $('#capacites_speciales_VI').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Roublard.ashx#TALENTDEROUBLARD">talent de roublard.</a>');
            $('#capacites_speciales_VIII').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Roublard.ashx#ESQUIVEINSTINCTIVESUPERIEURE">esquive instinctive supérieure.</a>');
        };

        if ($('#niveau').val() >= 9) {
            $('#capacites_speciales_I').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Roublard.ashx#ATTAQUESOURNOISE">attaque sournoise +5d6.</a>');
            $('#capacites_speciales_V').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Roublard.ashx#SENSDESPIEGES">sens des pièges +3.</a>');
        };

        if ($('#niveau').val() >= 10) {
            $('#capacites_speciales_IX').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Roublard.ashx#TALENTDEMAITREROUBLARD">talent de maître-roublard.</a>');
        };

        if ($('#niveau').val() >= 11) {
            $('#capacites_speciales_I').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Roublard.ashx#ATTAQUESOURNOISE">attaque sournoise +6d6.</a>');
        };

        if ($('#niveau').val() >= 12) {
            $('#capacites_speciales_V').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Roublard.ashx#SENSDESPIEGES">sens des pièges +4.</a>');
            $('#capacites_speciales_IX').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Roublard.ashx#TALENTDEMAITREROUBLARD">talent de maître-roublard.</a>');
        };

        if ($('#niveau').val() >= 13) {
            $('#capacites_speciales_I').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Roublard.ashx#ATTAQUESOURNOISE">attaque sournoise +7d6.</a>');
        };

        if ($('#niveau').val() >= 14) {
            $('#capacites_speciales_IX').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Roublard.ashx#TALENTDEMAITREROUBLARD">talent de maître-roublard.</a>');
        };

        if ($('#niveau').val() >= 15) {
            $('#capacites_speciales_I').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Roublard.ashx#ATTAQUESOURNOISE">attaque sournoise +8d6.</a>');
            $('#capacites_speciales_V').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Roublard.ashx#SENSDESPIEGES">sens des pièges +5.</a>');
        };

        if ($('#niveau').val() >= 16) {
            $('#capacites_speciales_IX').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Roublard.ashx#TALENTDEMAITREROUBLARD">talent de maître-roublard.</a>');
        };

        if ($('#niveau').val() >= 17) {
            $('#capacites_speciales_I').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Roublard.ashx#ATTAQUESOURNOISE">attaque sournoise +9d6.</a>');
        };

        if ($('#niveau').val() >= 18) {
            $('#capacites_speciales_V').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Roublard.ashx#SENSDESPIEGES">sens des pièges +6.</a>');
            $('#capacites_speciales_IX').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Roublard.ashx#TALENTDEMAITREROUBLARD">talent de maître-roublard.</a>');
        };

        if ($('#niveau').val() >= 19) {
            $('#capacites_speciales_I').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Roublard.ashx#ATTAQUESOURNOISE">attaque sournoise +10d6.</a>');
        };

        if ($('#niveau').val() >= 20) {
            $('#capacites_speciales_IX').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Roublard.ashx#TALENTDEMAITREROUBLARD">talent de maître-roublard.</a>');
            $('#capacites_speciales_X').html('<a target="_blank" href="https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Roublard.ashx#COUPDEMAITRE">coup de maître.</a>');
        };
    };

    $('#classe').change(function() {
        remiseAZeroNiveau();
        $('#niveau').val(0);
    });

    $('#niveau').change(function() {
        remiseAZeroNiveau();

        switch($('#classe').val()) {
            case ' ' :
                $('#sau_bon_bas_ref').html('0');
                $('#sau_bon_bas_vig').html('0');
                $('#sau_bon_bas_vol').html('0');
                $('#bba').html('0');
                $('#lut_bon_bas_att').html('0');
                break;
            case 'Barbare' :
                toucherCommeGuerrier();
                sauverCommeGuerrier();
                reductionDegats();
                calculeReflexes();
                calculeVigeur();
                calculeVolonte();
                capacitesSpecialesBarbare();
                break;
            case 'Barde' :
                toucherCommePretre();
                sauverCommeRoublard();
                calculeReflexes();
                calculeVigeur();
                calculeVolonte();
                capacitesSpecialesBarde();
                break;
            case 'Druide' :
                toucherCommePretre();
                sauverCommePretre();
                calculeReflexes();
                calculeVigeur();
                calculeVolonte();
                capacitesSpecialesDruide();
                break;
            case 'Ensorceleur' :
                toucherCommeMagicien();
                sauverCommeMagicien();
                calculeReflexes();
                calculeVigeur();
                calculeVolonte();
                capacitesSpecialesEnsorceleur();
                break;
            case 'Guerrier' :
                toucherCommeGuerrier();
                sauverCommeGuerrier();
                calculeReflexes();
                calculeVigeur();
                calculeVolonte();
                capacitesSpecialesGuerrier();
                break;
            case 'Magicien' :
                toucherCommeMagicien();
                sauverCommeMagicien();
                calculeReflexes();
                calculeVigeur();
                calculeVolonte();

//                affichageEcoles(document.form.ecole_I);
//                affichageEcoles(document.form.ecole_II);
//                affichageEcoles(document.form.ecole_III);

                capacitesSpecialesMagicien();
                break;
            case 'Moine' :
                toucherCommePretre();
                sauverCommeMoine();
                calculeReflexes();
                calculeVigeur();
                calculeVolonte();
                capacitesSpecialesMoine();
                break;
            case 'Paladin' :
                toucherCommeGuerrier();
                sauverCommeGuerrier();
                calculeReflexes();
                calculeVigeur();
                calculeVolonte();
                capacitesSpecialesPaladin();
                break;
            case 'Prêtre' :
                toucherCommePretre();
                sauverCommePretre();
                calculeReflexes();
                calculeVigeur();
                calculeVolonte();
                capacitesSpecialesPretre();
                break;
            case 'Rôdeur' :
                toucherCommeGuerrier();
                sauverCommeRodeur();
                calculeReflexes();
                calculeVigeur();
                calculeVolonte();
                capacitesSpecialesRodeur();
                break;
            case 'Roublard' :
                toucherCommePretre();
                sauverCommeRoublard();
                calculeReflexes();
                calculeVigeur();
                calculeVolonte();
                capacitesSpecialesRoublard();
                break;
        }
    });
});
