var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

jQuery( document ).ready( function( $ ) {

	$( '.dk-speakup-submit' ).click( function() {
		var petition_wrap = '#' + $( this ).attr( 'name' );
		var id = $( petition_wrap ).find( '.dk-speakup-id' ).val();
		var permalink = $( petition_wrap ).find( '.dk-speakup-permalink' ).val();
		var posttitle = $( petition_wrap ).find( '.dk-speakup-posttitle' ).val();
		var first_name = $( petition_wrap ).find( '.dk-speakup-first-name' ).val();
		var last_name = $( petition_wrap ).find( '.dk-speakup-last-name' ).val();
		var email = $( petition_wrap ).find( '.dk-speakup-email' ).val();
		var address = $( petition_wrap ).find( '.dk-speakup-address' ).val();
		var optin = '';
		var twitter_message = $( petition_wrap ).find( '.dk-speakup-twitter-message' ).val();
		if ( $( petition_wrap ).find( '.dk-speakup-optin' ).attr( 'checked' ) ) {
			optin = 'on';
		}

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
		if ( last_name == '' ) {
			$( petition_wrap ).find( '.dk-speakup-last-name' ).addClass( 'dk-speakup-error' );
			errors ++;
		}
/*
		// if no errors found, submit the data via ajax
		if ( errors == 0 ) {
			var data = {
				action: 'dk_speakup_sendmail',
				id: id,
				first_name: first_name,
				last_name: last_name,
				email: email,
				address: address,
				optin: optin
			};

			// submit form data and handle ajax response
			$.post( dk_speakup_js.ajaxurl, data,
				function( response ) {
					$( petition_wrap ).find( '.dk-speakup-petition' ).hide();
					$( petition_wrap ).find( '.dk-speakup-response' ).fadeIn().html( response );
					$( petition_wrap ).find( '.dk-speakup-share' ).fadeIn();

					// launch Facebook sharing window
					$( '.dk-speakup-facebook' ).click( function() {
						var url = 'https://web.archive.org/web/20111106082331/http://www.facebook.com/sharer.php?u=' + permalink + '&amp;t=' + posttitle;
						window.open( url, 'facebook', 'height=420,width=550,left=100,top=100,resizable=yes,location=no,status=no,toolbar=no' );
					});
					// launch Twitter sharing window
					$( '.dk-speakup-twitter' ).click( function() {
						var url = 'https://web.archive.org/web/20111106082331/http://twitter.com/share?url=' + permalink + '&text=' + twitter_message;
						window.open( url, 'twitter', 'height=420,width=550,left=100,top=100,resizable=yes,location=no,status=no,toolbar=no' );
					});
				}
			);
		}
*/
		return false;
	});

	// hide or show form labels depending on input fields
	$( '.dk-speakup-input' ).focus( function( e ) {
		var label = $( this ).siblings( 'label' );
		if ( $( this ).val() == '' ) {
			$( this ).siblings( 'label' ).addClass( 'dk-speakup-focus' ).removeClass( 'dk-speakup-blur' );
		}
		$( this ).blur( function(){
			if ( this.value === '' ) {
				label.addClass( 'dk-speakup-blur' ).removeClass( 'dk-speakup-focus' );
			}
		}).focus( function() {
			label.addClass( 'dk-speakup-focus' ).removeClass( 'dk-speakup-blur' );
		}).keydown( function( e ) {
			label.addClass( 'dk-speakup-focus' ).removeClass( 'dk-speakup-blur' );
			$( this ).unbind( e );
		});
	});

	// hide labels on filled input fields when page is reloaded
	$( '.dk-speakup-input' ).each( function() {
		if ( $( this ).val() != '' ) {
			$( this ).siblings( 'label' ).addClass( 'dk-speakup-focus' );
		}
	});

});

}
/*
     FILE ARCHIVED ON 08:23:31 Nov 06, 2011 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 02:08:28 Sep 05, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 90.524
  exclusion.robots: 0.121
  exclusion.robots.policy: 0.111
  RedisCDXSource: 1.731
  esindex: 0.011
  LoadShardBlock: 70.832 (3)
  PetaboxLoader3.datanode: 203.998 (4)
  CDXLines.iter: 15.327 (3)
  load_resource: 180.627
  PetaboxLoader3.resolve: 28.386
*/