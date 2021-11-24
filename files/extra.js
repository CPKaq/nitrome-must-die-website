jQuery( document ).ready( function( $ ) {

    function getSignNumber()
    {
        var time = new Date().getTime();
        var signNumber = parseInt(time/10e6*6.006)-792717;
        return signNumber;
    }

    function refreshSignNumber(addValue = 0)
    {
        $("#dk-speakup-signature-number").text((getSignNumber()+addValue).toLocaleString());
    }

    refreshSignNumber();

    var urlParamsStr = window.location.search;
    var urlParams = new URLSearchParams(urlParamsStr);
    lang = urlParams.get('lang');
    if(text[lang] == undefined)
    {
        lang = "en";
    }

    for(langText in text)
    {
        console.log(text[langText]['language-name']);
        var langNode = $('<a>').attr('href', '?lang='+langText);
        langNode.text(text[langText]['language-name']);
        $(".footer-languages-list").append(langNode);
    }

    $("#entry-title").html(text[lang]["entry-title"]);
    $("#entry-content-text").html(text[lang]["entry-content-text"]);
    $("#dk-speakup-petition-title").html(text[lang]["dk-speakup-petition-title"]);
    $("#dk-speakup-sign-button").html(text[lang]["dk-speakup-sign-button"]);
    $("#dk-speakup-signature-text").html(text[lang]["dk-speakup-signature-text"]);

    //submit button
    $( '.dk-speakup-submit' ).click( function() {
        var petition_wrap = '#' + $( this ).attr( 'name' );
        var first_name = $( petition_wrap ).find( '.dk-speakup-first-name' ).val();
        var email = $( petition_wrap ).find( '.dk-speakup-email' ).val();
        var optin = '';
        var twitter_message = $( petition_wrap ).find( '.dk-speakup-twitter-message' ).val();

        // make sure error notices are turned off before checking for new errors
        $( petition_wrap ).find( 'input' ).removeClass( 'dk-speakup-error' );

        // validate form values
        var errors = 0;
        var emailRegEx = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        if ( email == '' || !emailRegEx.test( email ) ) {
            $( petition_wrap ).find( '.dk-speakup-email' ).addClass( 'dk-speakup-error' );
            errors ++;
        }
        if ( first_name == '' ) {
            $( petition_wrap ).find( '.dk-speakup-first-name' ).addClass( 'dk-speakup-error' );
            errors ++;
        }

        if ( errors == 0 ) {
            refreshSignNumber(1);
        }
    });
});