$('.card-header').hover(
    /// On hover
    function(e) {
        let target = $(e.target);
        let id = target.attr('data-id');
        $('.btn-modal').each(function(){
            if( id == $(this).attr('data-target') ){
                $('.btn-modal').css('transform', 'translate(-50%, 70%)');
                $('.btn-modal').click(function(){
                    $('.btn-modal').css('transform', 'translate(-50%, 250%)');
                    let modal = $(this).attr('data-target');
                    $('#'+modal).click();
                });
            }
        });

    /// Not hover
    }, function(e) {
        $('.btn-modal').css('transform', 'translate(-50%, 250%)');
    }
);
