$( document ).ready( function () {
    $( '#year' ).text( new Date().getFullYear() );
} );

$( document ).ready( function () {
    var currentTab = null,
        $content = $( '.content' );

    function transitionTo ( name ) {
        if ( name === currentTab ) {
            return false;
        }

        $( 'body' ).animate( {
          scrollTop: 0
        }, 200 );

        $( '.tabs a.active' ).removeClass( 'active' );
        $( '.tabs a[href="#/' + name + '"]' ).addClass( 'active' );

        if ( $content.children( '.active' ).length ) {
            $content.children( '.active' ).removeClass( 'active' ).fadeOut( 'fast', function () {
                $content.find( '#' + name ).addClass( 'active' ).fadeIn( 'fast' );
            } );
        } else {
            $content.find( '#' + name ).addClass( 'active' ).fadeIn( 'fast' );
        }
    }

    if ( !window.location.hash ) {
        window.location.hash = '#/home';
    }

    function hashChange () {
        transitionTo( window.location.hash.substring( 2 ) );
    }

    $( window ).on( 'hashchange', hashChange );
    hashChange();
} );

//Interest Meeting Modal
 $( document ).ready(function (){
 
    var modal = document.getElementById('modal');
    var modalButton = document.getElementById('interestMeeting');
    var closeButton = document.getElementsByClassName('closeButton')[0];

    modalButton.addEventListener('click', openModal);
    window.addEventListener('load', openModal);
    closeButton.addEventListener('click', closeModal);
    window.addEventListener('click', clickOutside);
    
    function openModal(){
        modal.style.display = 'block';
    }
    function closeModal(){
        modal.style.display = 'none';
    }
    function clickOutside(e){
        if(e.target == modal){
        modal.style.display = 'none';
        }
    }
});
