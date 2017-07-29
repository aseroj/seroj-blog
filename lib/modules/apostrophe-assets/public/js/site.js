/*
$(function() {

});
*/
var toggleBtn = document.querySelector('.sidebar-toggle');
var sidebar = document.querySelector('.sidebar');

document.querySelector( "#nav-toggle" )
    .addEventListener( "click", function(e) {
    	e.preventDefault();
        this.classList.toggle( "active" );
        sidebar.classList.toggle('is-closed');
    });