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

    var text = 
    {
        "en": {
            "entry-title": 'Sign the Petition!',
            "entry-content-text": '<p>Hey everyone…</p>\n<p>Lets face it, Nitrome aren’t that good at making games. They recently announced that they are coming up to their 100th release and I think its time to say “Enough is Enough!”. If you couldn’t do it well with the first 99, you’re not gonna suddenly pull it out of the bag now! This is my petition to ask Nitrome to stop making games and leave it to the pros.</p>\n<p>Sign the Petition if you agree!!</p>',
            "dk-speakup-petition-title": 'SIGN THE PETITION',
            "dk-speakup-sign-button": 'SIGN NOW',
            "dk-speakup-signature-text": 'signatures'
        },
        "zh_CN": {
            "entry-title": '签署请愿书！',
            "entry-content-text": '<p>大家好……</p>\n<p>就事实而言，Nitrome 的游戏做得并不好。最近他们声称要发布第 100 款游戏，那么我认为是时候说一句 “差不多得了!” 既然前面的 99 个游戏不尽人意，就不要指望接下来还能突然整出什么好活。为此我发起请愿，希望 Nitrome 不要再做游戏了，给专业人士让路。</p>\n<p>如果同意，请签名!!</p>',
            "dk-speakup-petition-title": '签署请愿书',
            "dk-speakup-sign-button": '立刻签名',
            "dk-speakup-signature-text": '次签名'
        }
    };

    var urlParamsStr = window.location.search;
    var urlParams = new URLSearchParams(urlParamsStr);
    lang = urlParams.get('lang');
    if(text[lang] == undefined)
    {
        lang = "en";
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