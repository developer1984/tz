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

  var inputLength;
  var inputValue;
  var sample;

  function clsInput(){
    $(searchInput).blur(function() {
      $("#searchForm")[0].reset();
      $(this).attr("list", "");
      $("#inputlist").empty();
      $(this).val("");
    });
  }

  $(searchButton).attr("disabled", true);

  //=========================================================================
  $(searchInput).on("keyup", function(event) {    

    inputLength = $(this).val().length;
    inputValue = $(this).val();
    sample =
      inputValue.charAt(0).toUpperCase() + inputValue.slice(1).toLowerCase();

    if (inputValue != "") {
      $(searchButton).attr("disabled", false);
    } else {
      $(searchButton).attr("disabled", true);
      $("#searchForm")[0].reset();
    }

    if (inputLength >= searchSet.minChar) {
      setTimeout(function() {

        $("#inputlist").empty();        
      
        var tab = [];
        var tab2 = [];
        //====================== get & sort ==========
       
        $.get(url, function(data) {
          $.each(data, function(key, val) {
            tab.push(val.title);
          });
          console.log(data);

          $(tab).each(function(key, val) {
            var buffer = val.substr(0, inputLength);
            //  inputValue = small letters
            //  sample = big first letter
            if (buffer == inputValue) {
              tab2.push(val);
            }
          });
          console.log(tab2);
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

    } else {
      clsInput();
    }
    
    //================================== Clear send without button ==============
    if (event.which == 13) {
      $(this).attr("list", "");
      $("#inputlist").empty();
      $(this).val("");
    }
  });
  
  //================================== Submit ============================
  $(searchButton).bind("click", "keyup", function(e) {
    // $("#searchForm").submit(function(e) {    prevent fail
    // $(searchButton ).on('click keyup',function(e) { prevent fail
    e.preventDefault();

    $.post(url, { sample: sample }, function(data) {
      console.log(data);
      $(".res").html("<h2>" + data.sample + "==OK" + "</h2>");      
      clsInput();
    });
  });

  clsInput();

});
//====================================================================
//====================    SEARCH INPUT END  ==========================
//====================================================================
