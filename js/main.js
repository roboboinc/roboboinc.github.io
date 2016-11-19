/* If you've ever had the need to link directly to an open modal window with Bootstrap, here's a quick and easy way to do it:

Make sure your modal has an id:

<div class="modal" id="myModal" ... >

Then stick this bit of Javascript at at the end of your document:
 */
 
$(document).ready(function() {
 
  if(window.location.href.indexOf('#PoliticaPrivacy') != -1) {
    $('#PoliticaPrivacy').modal('show');
  }
   
});

function makemsg(msg) {
    console.log("Got here w/ " + msg);
    var input = $('textarea#message');
    input.val('Hi team, I am interested in finding out more about your ' + msg + '. Many thanks.');
  
}
 
/*
Then you can send people to http://www.website.com/page.html#myModal and it'll load the page with the modal open.
*/