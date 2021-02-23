$(function(){
    $('#calc').click(function(){
        const mo_analise = parseFloat($('#MO_analise').val());
        const mo_ideal = parseFloat($('#MO_ideal').val());
        const ca_analise = parseFloat($('#ca_analise').val());
        const ca_ctc_i = parseFloat($('#ca_ctc_i').val());  
        const mg_analise = parseFloat($('#mg_analise').val());
        const mg_ctc_i = parseFloat($('#mg_ctc_i').val());
        const k_analise = parseFloat($('#k_analise').val());
        const k_ctc_i = parseFloat($('#k_ctc_i').val());                                 
        const ctc_analise = parseFloat($('#ctc_analise').val());
        const p3 = parseFloat($('#p2').val()) - parseFloat($('#p1').val());
        const s3 = parseFloat($('#s2').val()) - parseFloat($('#s1').val());
        const b3 = parseFloat($('#b2').val()) - parseFloat($('#b1').val());
        const cu3 = parseFloat($('#cu2').val()) - parseFloat($('#cu1').val());
        const fe3 = parseFloat($('#fe2').val()) - parseFloat($('#fe1').val());
        const mn3 = parseFloat($('#mn2').val()) - parseFloat($('#mn1').val());
        const zn3 = parseFloat($('#zn2').val()) - parseFloat($('#zn1').val());

        const defitt_ = mo_ideal - mo_analise;
        const defitt = defitt_.toString().replace(".", ",") +" %";
        const ppmd_ = (mo_ideal - mo_analise) * 10000 + " ppm"
        const ppmd = ppmd_.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
        const kghade_ = ((mo_ideal - mo_analise) * 2 * 10000);
        const kghade = kghade_.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")+ " kg/ha de M.O.";
        const ca_ctc_p = (ca_analise * 100) / ctc_analise;
        const ca_ctc_d = ca_ctc_i - ca_ctc_p
        const ca_meq_de = (((ctc_analise / 10) * (ca_ctc_i/100)) - (ca_analise/10)) * 10
        const mg_ctc_p = (mg_analise * 100) / ctc_analise;
        const mg_ctc_d = mg_ctc_i - mg_ctc_p
        const mg_meq_de = (((ctc_analise / 10) * (mg_ctc_i/100)) - (mg_analise/10)) * 10
        const k_ctc_p = (k_analise * 100) / ctc_analise;
        const k_ctc_d = k_ctc_i - k_ctc_p
        const k_meq_de = (((ctc_analise / 10) * (k_ctc_i/100)) - (k_analise/10)) * 10
                    
        $('#defitt').val(defitt)
        $('#ppmd').val(ppmd)
        $('#kghade').val(kghade)
        $('#ca_ctc_p').val(ca_ctc_p)
        $('#ca_ctc_d').val(ca_ctc_d)
        $('#ca_meq_de').val(ca_meq_de)
        $('#ca_ppm_de').val(ca_meq_de * 200)
        $('#ca_ha_de').val(ca_meq_de * 400)
        $('#ca_ha_co').val(ca_meq_de * 559.4405594)
        $('#mg_ctc_p').val(mg_ctc_p)
        $('#mg_ctc_d').val(mg_ctc_d)
        $('#mg_meq_de').val(mg_meq_de)
        $('#mg_ppm_de').val(mg_meq_de * 121.5)
        $('#mg_ha_de').val(mg_meq_de * 243)
        $('#mg_ha_co').val(mg_meq_de * 403.654485)
        $('#k_ctc_p').val(k_ctc_p)
        $('#k_ctc_d').val(k_ctc_d)
        $('#k_meq_de').val(k_meq_de)
        $('#k_ppm_de').val(k_meq_de * 391)
        $('#k_ha_de').val(k_meq_de * 782)
        $('#k_ha_co').val(k_meq_de * 942.1686747)
        $('#p3').val(p3)
        $('#p4').val(p3 * 2)
        $('#s3').val(s3)
        $('#s4').val(s3 * 2)
        $('#b3').val(b3)
        $('#b4').val(b3 * 2)
        $('#cu3').val(cu3)
        $('#cu4').val(cu3 * 2)
        $('#fe3').val(fe3)
        $('#fe4').val(fe3 * 2)
        $('#mn3').val(mn3)
        $('#mn4').val(mn3 * 2)
        $('#zn3').val(zn3)
        $('#zn4').val(zn3 * 2)
    })
})

//
