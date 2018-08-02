$(document).ready(function() {
  "use strict";

   var number = 7;

   $('#searchInput').keyup(function(e) {
      var search = $(this).val().toLowerCase();
      var searchlength = $(this).val().length;
        if (searchlength >= 3) {
              var data = '?search='+search;
              $.post('https://coderstrust.codingplatform.pl/application/request.php',{search: search},function(e) {
                          $('.res').html('');
                        var response = $.parseJSON(e);
                        var o = 0;
                        $.each(response["response"]["channels"],function(key,value) {
                          if (o === number) {
                               return false;
                          }
                            var title = value.title;
                            var link = value.link;
                            $('.res').append('<p><a href="'+link+'">'+title+'</a></p>');


                              o++;
                        })

              })



        }
   });




























});
