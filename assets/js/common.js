$(document).ready(function() {
  "use strict";
  //====================================================================
  //====================    SEARCH INPUT  ==============================
  //====================================================================
  var searchSet = {
    minChar: 3,
    delay: 300,
    listSize: 10
    // autocomplete: "false"
  };

  var searchInput = $("input[id=searchInput]");
  var searchButton = $("#searchButton");
  var url = "https://jsonplaceholder.typicode.com/todos";

  $(searchButton).attr("disabled", true);

  //=========================================================================
  $(searchInput).on("keyup", function(event) {
    var inputLength = $(this).val().length;
    var inputValue = $(this).val();
    var sample =
      inputValue.charAt(0).toUpperCase() + inputValue.slice(1).toLowerCase();

    if (inputValue != "") {
      $(searchButton).attr("disabled", false);
    } else {
      $(searchButton).attr("disabled", true);
    }

    if (inputLength >= searchSet.minChar) {
      setTimeout(function() {
        $("#inputlist").empty();
        //===================== multiple post off =========
        $(this).off("keyup");

        //====================== get & sort ==========
        var tab = [];
        var tab2 = [];

        $.get(url, function(data) {
          $.each(data, function(key, val) {
            tab.push(val.title);
          });

          $(tab).each(function(key, val) {
            var buffer = val.substr(0, inputLength);
            if (buffer == inputValue) {
              tab2.push(val);
            }
          });
          tab2.sort();

          $(tab2).each(function(key, val) {
            if (key < searchSet.listSize) {
              //=========== ==================  Prompt List ============
              $("#inputlist").append('<option value="' + val + '"/>');
            }
          });
        });
      }, searchSet.delay);
      //================================= prompt list ON =======================
      $(this).attr("list", "inputlist");

      //====================================== Submit Bug 1x into fix ===================

      $("#searchForm").submit(function(e) {
        e.preventDefault();
        $(this).off("keyup");

        $.post(url, { sample: sample }, function(data) {        
          $(".res").html("<h2>" + data.sample + "==OK" + "</h2>");
        });
      });
      //================================== Clear Field ============================
      if (event.which == 13) {
        $(this).attr("list", "");
        $("#inputlist").empty();
        $(this).val("");
      }
    } else {
      $("#inputList").empty();
      $(this).attr("list", "");
    }
  });

  $(searchInput).blur(function() {
    $(this).attr("list", "");
    $("#inputlist").empty();
    $(this).val("");
  });
});
//====================================================================
//====================    SEARCH INPUT END  ==========================
//====================================================================
