$(document).ready(function(){
    $('#btn').click(function(){
        $('.box').animate({
            width: '1000px',
            height: '1000px'
        }).css({
            backgroundColor: 'green'
        })
    })
})
