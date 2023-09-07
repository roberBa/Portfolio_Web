let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('.item .link');
let navlinksSm = document.querySelectorAll('.nav-item .nav-link');


let btnFooter = document.querySelector('.btn-up');
/// Navigate to top when click btn-up
btnFooter.addEventListener('click', function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

window.onscroll = () => {
    /// Navbar style
    let nav = document.querySelector('#navbar');
    if( window.scrollY > 90 ){
        nav.style.backgroundColor = 'rgba(19,65,77,0.3)'; 
        nav.style.backdropFilter = 'blur(3px)';
    }else{
        nav.style.backgroundColor = 'transparent';
        nav.style.backdropFilter = 'blur(0)';
    }

    /// Footer btn
    if( window.scrollY > 400 ){
        btnFooter.style.bottom = '2.8rem'; 
    }else{
        btnFooter.style.bottom = '-5rem'; 
    }

    /// Navbar links style
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 79;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            /// active navbar links
            navlinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('.item .link[href*="'+id+'"]').classList.add('active');
            });
            /// active navbar links for sm devices
            navlinksSm.forEach(link => {
                link.classList.remove('active');
                document.querySelector('.nav-item .nav-link[href*="'+id+'"]').classList.add('active');
            });
        }
    });
}


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
