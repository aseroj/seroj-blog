$(function() {
  // Start with your project-level client-side javascript here.
  // JQuery and lodash (_) are both included with Apostrophe, so no need to
  // worry about including them on your own.
  
	// console.log('Hello world.');
});

var toggleBtn = document.querySelector('.sidebar-toggle');
var sidebar = document.querySelector('.sidebar');

/*
toggleBtn.addEventListener('click', function() {
  toggleBtn.classList.toggle('is-closed');
  sidebar.classList.toggle('is-closed');
})
*/


document.querySelector( "#nav-toggle" )
    .addEventListener( "click", function(e) {
    	e.preventDefault();
        this.classList.toggle( "active" );
        sidebar.classList.toggle('is-closed');
    });