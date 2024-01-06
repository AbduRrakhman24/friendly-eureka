

$('#btn').on('click', function () {
    const $inputX = $('#X').val()
    const $inputY = $('#Y').val()

    $('#block').animate({left: $inputX + 'px',
                            top: $inputY + 'px'}, 1100);
})