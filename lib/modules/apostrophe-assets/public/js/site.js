$(function() {
  // Start with your project-level client-side javascript here.
  // JQuery and lodash (_) are both included with Apostrophe, so no need to
  // worry about including them on your own.
  
	// console.log('Hello world.');
/*	$body = $('body');


	// Toggle.
	$(
		'<div id="headerToggle">' +
			'<a href="#header" class="toggle"></a>' +
		'</div>'
	)
		.appendTo($body);

	// Header.
	$('#header')
		.panel({
			delay: 500,
			hideOnClick: true,
			hideOnSwipe: true,
			resetScroll: true,
			resetForms: true,
			side: 'left',
			target: $body,
			visibleClass: 'header-visible'
		});
*/


    $('.toggle-nav').click(function(e) {
        $(this).toggleClass('active');
        $('.navigation-menu-toggled ul').toggleClass('active');

        e.preventDefault();
    });

});

