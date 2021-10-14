
var sumEcts = 0;
var sumSati = 0;
var uneseniP = [];

$.ajax({
    method:'get',
    url:'http://www.fulek.com/VUA/SUPIT/GetNastavniPlan',

    success:function(data){
        $("#search-keyword").autocomplete({
            source: data,
            focus: function (event, ui) {
                event.preventDefault();
                $('#search-keyword').val(ui.item.label);
            },
            select: function (event, ui) {
                event.preventDefault();
                $('#search-keyword').val(ui.item.label);
                getPredmet(ui.item.value);
           
            }
        })
    }
});

const getPredmet = id =>{
    $.ajax({
        url:'http://www.fulek.com/VUA/supit/GetKolegij',
        data: {id},
        success:(data)=>{
            
                var umetni = true;

                 for (i = 0; i < uneseniP.length; i++) {
                    if(uneseniP[i] == data.kolegij){
                       window.alert("Ne možete unijeti isti predmet!");
                       umetni = false;
                       break;
                    }
                };

                if(umetni){
                    if ($('#body tr').length == 0 && $('#hborder tr').length == 0 ) {
                        $('#hborder').append('<tr id = "headrow"></tr>');
                        $.each(data, function(k , v){
                        
                            if(k != 'id' && k!= 'semestar'){
                        
                                $('#headrow').append('<th>'+k+'</th>');
                            }
                        });
                    }
                    $('#body').append('<tr class ="bodyrow"><td id = "Kolegij">' + data.kolegij+ '</td><td id ="ectscell">' + data.ects + '</td><td id = "saticell">' + data.sati + '</td><td>' + data.predavanja
                     + '</td><td>' + data.vjezbe + '</td><td>' + data.tip + '</td><td>' + '<input id = "button_remove" type="button" value="Obriši" />'+'</td></tr>');
                    uneseniP.push(data.kolegij);
                     if($('#body tr').length == 1 )
                    {
                       
                       $('#tablePredmeti').append('<tfoot id ="footerukupno"></tfoot>');
                       $('#footerukupno').append('<tr><td>'+"Ukupno:"+'</td><td id ="sE"></td><td id = "sS"></td>'+'</td></tr>');
                    };
                    $.each(data, function(k , v){
                              
                       if(k == 'ects'){
                        sumEcts += v;
                       }; 
                       if(k == 'sati'){
                        sumSati += v;
                       }; 
                       
                    });
                    $('#sE').html(sumEcts);
                    $('#sS').html(sumSati);
                };
                   
        }
    });     
};

$('#tablePredmeti').on('click', '#button_remove', function(){
     

    var oduzmiEcts = $(this).closest('tr').find("#ectscell").html();
    var oduzmiSate = $(this).closest('tr').find("#saticell").html();
    if($('#body tr').length == 1){
              
        $(this).closest ('tr').remove();
        $('#headrow').remove();
        $('#footerukupno').remove();
    }
    else{
        $(this).closest ('tr').remove();

    };

    var ime = $(this).closest('tr').find("#Kolegij").html();
    for(i = 0; i < uneseniP.length; i++){
        if(ime == uneseniP[i]){
            const index = uneseniP.indexOf(ime);
            uneseniP.splice(index, 1);
        }
    };


    sumEcts -= oduzmiEcts;
    sumSati -= oduzmiSate;

    $('#sE').html(sumEcts);
    $('#sS').html(sumSati);
                
});
