$(document).ready(function() {
  "use strict";

  var listLenght = 5;
  var delayPost = 300;
  var minChar = 3;

  function clsInput_and_list() {
    $("#searchInput").val("");   
    $("#res").empty();
  }

  $("#searchInput").on("keyup click", function(event) {
  // $("#searchInput").bind("keyup", " click", function(event) {
    event.preventDefault();
    var search = $(this)
      .val()
      .toLowerCase();
    var searchlength = $(this).val().length;

    setTimeout(function() {
      if (searchlength >= minChar) {
        // var data = "?search=" + search;
        $.post(
          "https://coderstrust.codingplatform.pl/application/request.php",
          { search: search },
          function(data) {
            $("#res").html("");
            var response = $.parseJSON(data);
            $.each(response["response"]["channels"], function(key, value) {
              if (key === listLenght) {
                return false;
              } else {
                var title = value.title;
                var link = value.link;
                $("#res").append('<p><a target="_blank" href="'+link +'">'+title +"</a></p>");                
              }
            });
          }
        );

      } else if (searchlength < minChar) {      
        $("#res").empty();
      }
    }, delayPost);    
        
  });

  // ===opoznienie  blura wysylajac z listy 
  $("#searchInput").blur(function() {
    setTimeout(function() {
      clsInput_and_list();
    }, 200);
  });
});
