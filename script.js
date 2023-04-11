"use strict";

$(function () {
    $("img").attr("title", "John");



    $('img').click(function () {
        let imgPath = $(this).attr('src');
        $('#bg').css({
            'background-image': `url('${imgPath}')`,
            'display': 'block'
        })
    });

    $('#bg').css({
        'width': '50%',
        'height': '50%',
        'background-repeat': 'no-repeat',
        'background-size': 'contain',
        'background-position': 'start',
        position: 'fixed',
        top: 50,
        left: 410,
        display: "none",
        'cursor': 'zoom-in'
    })


    $('#bg').click(function () {
        $('#bg').css({
            'width': '75%',
            'height': '75%',
            'background-repeat': 'no-repeat',
            'background-size': 'contain',
            'background-position': 'center',
            'background-color': 'rgba(0,0,0,0.5)',
            position: 'fixed',
            top: 50,
            left: 210,
            'display': 'none',
            'cursor': 'zoom-out'
            
        })
    })



})

