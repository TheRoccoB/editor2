$(function() {
    var accordion = $('#yourDiv').accordionPro({
        "horizontalWidth":1200,
        "horizontalHeight":500,
        responsive:true,
        theme:'stitch',
        colour : {
            scheme : 'orange'
        }
    });

    $('.contentType').click(function(){
        $('#chooseTheme1').hide(1000);
        $('#chooseTheme2').show(1000);
    });

    $('.themeType #next1').click(function(){

        $('#yourDiv').accordionPro('trigger', 2)

    });
});
