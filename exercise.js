$(".interface").on('click', function () {

    if ($(this).hasClass('orange')) {
        console.log('attr');
        $('body').attr('class', 'orange')
    }

    if ($(this).hasClass('green')) {
        $('body').attr('class', 'green')
    }

    if ($(this).hasClass('increase')) {
        $('.text').animate({
            'font-size': '+=15px'
        })
    }

    if ($(this).hasClass('move')) {
        $('.text').animate({
            'left': '+=15px',
            'letter-spacing': '+=2px'
        })
    }

})