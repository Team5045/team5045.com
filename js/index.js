$( document ).ready( function () {
    $( '#year' ).text( new Date().getFullYear() );
} );

$( document ).ready( function () {
    $( '#feed' ).rssfeed( 'https://wshsrobots.wix.com/whitestationrobotics/feed.xml', {
        header: false,
        media: true,
        snippet: false,
        showerror: true
    }, function () {
        $( '#feed' ).find( 'a' ).each( function () {
            $( this ).replaceWith( $( this ).text() );
        } );
    } );
} );

$( document ).ready( function () {
    var currentTab = null,
        $content = $( '.content' );

    function transitionTo ( name ) {
        if ( name === currentTab ) {
            return;
        }

        $( 'body' ).animate( {
          scrollTop: 0
        }, 200 );

        $( '.tabs a.active' ).removeClass( 'active' );
        $( '.tabs a[href="#/' + name + '"]' ).addClass( 'active' );
        window.location.hash = '#/' + name;

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