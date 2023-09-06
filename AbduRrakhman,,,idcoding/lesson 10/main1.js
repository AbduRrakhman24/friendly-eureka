

$('#btn').on('click', function () {
    const $inputX = $('#X').val()
    const $inputY = $('#Y').val()

    $('#block').animate({left: $inputX + 'px'}, 1100);
    $('#block').animate({top: $inputY + 'px'}, 1100);
})